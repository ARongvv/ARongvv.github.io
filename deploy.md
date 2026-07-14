# ARongw Blog 部署流程

本文档记录 `vitepress-theme-teek` 博客项目的部署方案：

- 使用 GitHub Actions 自动构建 VitePress 静态站点
- 将构建产物发布到腾讯云服务器
- 由腾讯云服务器上的 Nginx 承载 `arongw.cloud`

## 1. 推荐部署架构

```text
本地提交代码
    ↓ git push
GitHub Actions
    ↓ pnpm install + pnpm docs:build
生成 docs/.vitepress/dist
    ↓ rsync/scp
腾讯云服务器 /var/www/arongw-blog/current
    ↓ Nginx
https://arongw.cloud
```

这个方案适合当前情况：`arongw.cloud` 已经在腾讯云服务器上使用过，所以不建议直接把根域名切到 GitHub Pages。GitHub Actions 只负责自动构建和发布，最终访问仍然走腾讯云服务器。

## 2. 域名规划

如果 `arongw.cloud` 作为博客主站：

```text
arongw.cloud        -> 博客
www.arongw.cloud    -> 跳转到 arongw.cloud
```

如果 `arongw.cloud` 已经承载其他服务：

```text
arongw.cloud        -> 原服务
blog.arongw.cloud   -> 博客
```

本文后续以 `arongw.cloud` 作为博客主站为例。

腾讯云 DNS 解析建议：

```text
主机记录 @      A      腾讯云服务器公网 IP
主机记录 www    A      腾讯云服务器公网 IP
```

如果使用 `blog.arongw.cloud`：

```text
主机记录 blog   A      腾讯云服务器公网 IP
```

## 3. 服务器目录准备

登录腾讯云服务器后执行：

```bash
sudo mkdir -p /var/www/arongw-blog/releases
sudo mkdir -p /var/www/arongw-blog/current
sudo chown -R $USER:$USER /var/www/arongw-blog
```

也可以新建专门的部署用户：

```bash
sudo adduser deploy
sudo mkdir -p /var/www/arongw-blog/releases
sudo chown -R deploy:deploy /var/www/arongw-blog
```

推荐使用 `deploy` 用户，权限更清晰。

## 4. 配置 Nginx

Ubuntu / Debian 常见路径：

```bash
sudo nano /etc/nginx/sites-available/arongw-blog
```

写入：

```nginx
server {
    listen 80;
    server_name arongw.cloud www.arongw.cloud;

    root /var/www/arongw-blog/current;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /assets/ {
        try_files $uri =404;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

启用站点：

```bash
sudo ln -s /etc/nginx/sites-available/arongw-blog /etc/nginx/sites-enabled/arongw-blog
sudo nginx -t
sudo systemctl reload nginx
```

如果服务器是 CentOS / Rocky Linux / TencentOS，常见方式是创建：

```bash
sudo nano /etc/nginx/conf.d/arongw-blog.conf
```

内容仍然使用上面的 `server` 配置。

## 5. 配置 HTTPS

如果服务器在中国大陆，域名用于网站访问通常需要备案。若 `arongw.cloud` 已经备案并正常解析，可以继续使用。

安装 Certbot：

```bash
sudo apt update
sudo apt install certbot python3-certbot-nginx
```

签发证书：

```bash
sudo certbot --nginx -d arongw.cloud -d www.arongw.cloud
```

成功后，Certbot 会自动修改 Nginx 配置并启用 HTTPS。

检查自动续期：

```bash
sudo certbot renew --dry-run
```

## 6. 准备 GitHub Actions SSH 密钥

推荐生成单独的部署密钥：

```bash
ssh-keygen -t ed25519 -C "github-actions-arongw-blog"
```

假设生成文件为：

```text
~/.ssh/id_ed25519
~/.ssh/id_ed25519.pub
```

把公钥追加到腾讯云服务器部署用户：

```bash
cat ~/.ssh/id_ed25519.pub
```

复制输出内容，然后在服务器上执行：

```bash
mkdir -p ~/.ssh
nano ~/.ssh/authorized_keys
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```

将公钥粘贴到 `authorized_keys` 中。

本地测试：

```bash
ssh -i ~/.ssh/id_ed25519 deploy@你的服务器公网IP
```

## 7. 配置 GitHub Secrets

进入 GitHub 仓库：

```text
Settings -> Secrets and variables -> Actions -> New repository secret
```

添加以下 secrets：

```text
TENCENT_HOST       腾讯云服务器公网 IP
TENCENT_PORT       22
TENCENT_USER       deploy
TENCENT_SSH_KEY    私钥内容
```

查看私钥内容：

```bash
cat ~/.ssh/id_ed25519
```

将完整私钥复制到 `TENCENT_SSH_KEY`，包括：

```text
-----BEGIN OPENSSH PRIVATE KEY-----
...
-----END OPENSSH PRIVATE KEY-----
```

## 8. 添加 GitHub Actions 工作流

创建文件：

```text
.github/workflows/deploy-blog.yml
```

内容如下：

```yaml
name: Deploy Blog

on:
  push:
    branches:
      - main
  workflow_dispatch:

concurrency:
  group: deploy-blog
  cancel-in-progress: true

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 10.7.1

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: pnpm

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Build docs
        run: pnpm docs:build

      - name: Setup SSH
        run: |
          mkdir -p ~/.ssh
          echo "${{ secrets.TENCENT_SSH_KEY }}" > ~/.ssh/deploy_key
          chmod 600 ~/.ssh/deploy_key
          ssh-keyscan -p "${{ secrets.TENCENT_PORT }}" "${{ secrets.TENCENT_HOST }}" >> ~/.ssh/known_hosts

      - name: Upload release
        run: |
          RELEASE_DIR="/var/www/arongw-blog/releases/${{ github.sha }}"

          ssh -i ~/.ssh/deploy_key -p "${{ secrets.TENCENT_PORT }}" \
            "${{ secrets.TENCENT_USER }}@${{ secrets.TENCENT_HOST }}" \
            "mkdir -p ${RELEASE_DIR}"

          rsync -az --delete \
            -e "ssh -i ~/.ssh/deploy_key -p ${{ secrets.TENCENT_PORT }}" \
            docs/.vitepress/dist/ \
            "${{ secrets.TENCENT_USER }}@${{ secrets.TENCENT_HOST }}:${RELEASE_DIR}/"

      - name: Switch current release
        run: |
          RELEASE_DIR="/var/www/arongw-blog/releases/${{ github.sha }}"

          ssh -i ~/.ssh/deploy_key -p "${{ secrets.TENCENT_PORT }}" \
            "${{ secrets.TENCENT_USER }}@${{ secrets.TENCENT_HOST }}" \
            "ln -sfn ${RELEASE_DIR} /var/www/arongw-blog/current"
```

提交后，每次推送到 `main` 分支都会自动部署：

```bash
git push origin main
```

也可以在 GitHub 页面手动触发：

```text
Actions -> Deploy Blog -> Run workflow
```

## 9. VitePress base 配置

如果博客部署在根域名：

```text
https://arongw.cloud/
```

则 `base` 应保持：

```ts
base: "/";
```

如果部署到子路径：

```text
https://arongw.cloud/blog/
```

则需要：

```ts
base: "/blog/";
```

当前建议使用根域名部署，即：

```ts
base: "/";
```

## 10. 发布流程

日常写作和发布流程：

```bash
git status
git add .
git commit -m "docs: update blog content"
git push origin main
```

推送后：

1. GitHub Actions 自动拉取代码
2. 安装依赖
3. 执行 `pnpm docs:build`
4. 上传 `docs/.vitepress/dist`
5. 更新服务器上的 `current` 软链接
6. Nginx 继续服务最新静态文件

## 11. 回滚方案

服务器上每次部署都会保留一个 release：

```text
/var/www/arongw-blog/releases/<commit-sha>
```

如果新版本有问题，可以手动回滚：

```bash
ls -la /var/www/arongw-blog/releases
ln -sfn /var/www/arongw-blog/releases/旧版本SHA /var/www/arongw-blog/current
```

然后刷新网站即可。

## 12. 常见问题

### 12.1 访问域名还是旧服务

检查 Nginx 的 `server_name` 是否包含：

```nginx
server_name arongw.cloud www.arongw.cloud;
```

检查 DNS 是否仍指向腾讯云服务器公网 IP：

```bash
dig arongw.cloud +short
dig www.arongw.cloud +short
```

### 12.2 GitHub Actions SSH 连接失败

检查：

- `TENCENT_HOST` 是否是公网 IP
- `TENCENT_PORT` 是否正确
- 腾讯云安全组是否放行 SSH 端口
- 公钥是否添加到服务器用户的 `~/.ssh/authorized_keys`
- `TENCENT_USER` 是否和服务器用户一致

### 12.3 部署成功但页面 404

检查 Nginx root：

```nginx
root /var/www/arongw-blog/current;
```

检查构建产物是否存在：

```bash
ls -la /var/www/arongw-blog/current
```

应能看到：

```text
index.html
assets/
```

### 12.4 静态资源加载失败

检查 VitePress `base` 是否正确。

根域名部署：

```ts
base: "/";
```

子路径部署：

```ts
base: "/blog/";
```

## 13. 不推荐当前直接使用 GitHub Pages 的原因

GitHub Pages 也可以部署 VitePress，并绑定自定义域名。但如果将 `arongw.cloud` 绑定到 GitHub Pages，需要把域名 DNS 解析改到 GitHub Pages。

这会导致：

- `arongw.cloud` 不再直接指向腾讯云服务器
- 已经部署在腾讯云服务器上的服务需要迁移到其他子域名
- 后续如果博客和其他后端服务混合部署，灵活性较弱

因此当前更推荐：

```text
GitHub Actions 构建 + 腾讯云服务器发布 + Nginx 承载域名
```

## 14. 先部署到 GitHub Pages 用户主页

如果希望先发布到：

```text
https://ARongvv.github.io/
```

需要使用 GitHub Pages 的用户主页仓库模式。

关键要求：

```text
仓库名必须是：ARongvv.github.io
```

也就是说，博客代码需要放在这个仓库中：

```text
https://github.com/ARongvv/ARongvv.github.io
```

此时 VitePress 应使用根路径：

```ts
base: "/";
```

当前项目的 `docs/.vitepress/config.ts` 已按用户主页模式配置：

```ts
const base = "/";

export default defineConfig({
  base,
  sitemap: {
    hostname: "https://ARongvv.github.io",
  },
});
```

GitHub Actions 工作流文件：

```text
.github/workflows/deploy-pages.yml
```

该工作流会：

1. 在推送到 `main` 分支时触发
2. 使用 pnpm 安装依赖
3. 执行 `pnpm docs:build`
4. 上传 `docs/.vitepress/dist`
5. 发布到 GitHub Pages

GitHub 仓库需要开启：

```text
Settings -> Pages -> Build and deployment -> Source -> GitHub Actions
```

发布流程：

```bash
git add docs/.vitepress/config.ts .github/workflows/deploy-pages.yml
git commit -m "ci: deploy blog to github pages"
git push origin main
```

推送后到 GitHub 查看：

```text
Actions -> Deploy VitePress to GitHub Pages
```

成功后访问：

```text
https://ARongvv.github.io/
```

如果仓库名不是 `ARongvv.github.io`，则不会部署到根路径，而是仓库子路径，例如：

```text
https://ARongvv.github.io/vitepress-theme-teek/
```
