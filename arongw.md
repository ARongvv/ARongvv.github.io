# ARongw 首页模式实施文档

## 目标

在当前博客项目中实现一个独立的 `ARongw 首页模式`，让首页不再完全依赖 Teek 默认的博客首页结构。

目标效果：

- 保留 Teek 主题能力、文章扫描、归档、分类、标签、导航等现有功能。
- 首页拥有独立布局，不再被默认的 `Banner + 文章列表 + 右侧卡片栏` 限制。
- 首页可以展示个人介绍、技术方向入口、最新文章、GitHub/归档入口等内容。
- 实现优先放在 `docs/.vitepress/theme`，暂时不修改 `packages/` 下的 Teek 主题源码。

## 当前首页模式理解

Teek 目前主要通过这些配置控制首页：

```ts
teekHome: true,
vpHome: false,
banner: {
  bgStyle: "fullImg",
},
bodyBgImg: {},
wallpaper: {},
```

其中：

- `teekHome: true` 表示启用 Teek 博客首页。
- `vpHome: true` 表示启用 VitePress 默认首页。
- `banner.bgStyle` 控制首页 Banner 背景模式。
- `bodyBgImg.imgSrc` 控制全站 body 背景图。
- `wallpaper.enabled` 只控制 F11 全屏后的壁纸观看态，不负责选择首页布局。

因此，新增 `ARongw 首页模式` 不应该只改 `wallpaper`，而应该新增一个首页渲染分支。

## Claude Blog 参考分析

参考页面：

```text
https://claude.com/blog
```

这个页面不适合被直接复制，但非常适合作为 ARongw 首页和博客列表页的信息架构参考。

### 页面结构

Claude Blog 的主体结构可以概括为：

```text
顶部导航
→ Blog 标题区
→ 分类快捷入口
→ 文章列表 / 网格
→ 筛选与排序
→ 搜索
→ Grid / List 视图切换
→ 页脚
```

它不是简单的时间线博客，而是把 Blog 当作一个长期扩展的内容库来设计。

### 值得借鉴的点

#### 1. 博客页是内容库，不只是文章流

Claude Blog 提供了：

```text
All
分类入口
Filter and sort
Sort by
Category
Search
Grid / List
```

这说明它的核心目标是帮助用户在大量内容中快速定位，而不是只展示最新文章。

ARongw Blog 可以转译为：

```text
All
cAGENT
嵌入式
FreeRTOS
项目实践
学习笔记
```

第一版不一定实现完整筛选，但首页和文章区应该把内容方向前置。

#### 2. 分类入口比装饰更重要

Claude Blog 的分类包括 Agents、Claude Code、Enterprise AI、Product announcements 等。它们承担的是导航职责，而不是视觉装饰。

ARongw Blog 的分类入口应该承担类似职责：

```text
cAGENT
嵌入式
FreeRTOS
```

这三个入口应该在首页首屏右侧清晰出现，而不是藏在侧边栏或归档页。

#### 3. 文章卡片字段稳定

Claude Blog 的文章条目通常围绕这些信息组织：

```text
封面图
日期
分类
标题
链接
```

ARongw Blog 的文章条目可以更轻一些：

```text
日期
分类 / 标签
标题
一句摘要
```

第一版建议采用紧凑列表或轻卡片，不做过大的营销式文章卡。

### Claude Blog 文章卡片设计

Claude Blog 的文章卡片不是靠复杂装饰取胜，而是靠稳定的信息字段、清晰的层级和两种视图模式来组织大量内容。

从页面结构可以看到，它支持：

```text
Grid
List
Search
Filter and sort
Sort by
Category
```

这说明文章卡片本身不是孤立设计，而是服务于一个可搜索、可筛选、可切换视图的内容系统。

#### Grid 视图卡片

Grid 视图更偏视觉浏览，单个卡片大致包含：

```text
封面图
短日期
标题
分类
完整日期 / 可访问日期
文章链接
```

从页面文本可以看到一组典型结构：

```text
Image
Jul 13, 2026
Working at the frontier...
Enterprise AI
July 13, 2026
文章链接
```

这个设计的特点：

- 图片在最上方，作为浏览锚点。
- 日期靠近图片，帮助用户快速判断新旧。
- 标题是卡片主视觉，通常占据最大文字权重。
- 分类作为轻量元信息，不抢标题。
- 链接覆盖标题或卡片主体，便于点击。

#### List 视图卡片

List 视图更偏快速扫描，单个条目大致包含：

```text
标题
Category 标签
分类名
Product / Usecase 等元信息
完整日期
文章链接
```

从页面文本可以看到列表条目结构：

```text
Working at the frontier...
Category
Enterprise AI
Product
Usecase
July 13, 2026
文章链接
```

这个设计的特点：

- 标题优先，方便扫读。
- 元信息以小标签形式出现。
- 日期位置稳定。
- 列表条目更适合信息密集场景。
- 不依赖大图，内容量大时更高效。

#### 对 ARongw Blog 的转译

ARongw Blog 的文章卡片应该借鉴 Claude Blog 的信息结构，但视觉上更轻、更适合个人技术博客。

推荐第一版采用 `列表优先，网格可选`：

```text
默认：List 轻卡片
可选：Grid 卡片
```

原因：

- 当前文章数量不多，列表更利于阅读。
- 技术博客用户通常先看标题、分类和摘要。
- 不必为每篇文章强制准备封面图。
- 后续文章多起来后，再增加 Grid/List 切换。

#### ARongw 文章卡片字段

推荐字段顺序：

```text
分类 / 标签
标题
摘要
日期
阅读入口
```

具体结构：

```text
[FreeRTOS] [学习笔记]
FreeRTOS 任务调度基础
记录任务状态、优先级和调度器运行机制。
2026-07-14                                      阅读 →
```

如果有封面图，则进入 Grid 卡片：

```text
封面图
[cAGENT]
构建一个最小 Agent 工具调用流程
从工具定义、参数解析到执行结果回传。
2026-07-14
```

#### ARongw List Card 视觉规范

```text
背景：#ffffff
边框：#dde6ee
圆角：8px 或 10px
内边距：20px 22px
标题：18px / 600
摘要：14px-15px / muted
日期：13px / muted-soft
标签：浅雾霾蓝底 + 深雾霾蓝文字
```

建议 CSS 骨架：

```scss
.arongw-post-list {
  display: grid;
  gap: 12px;
}

.arongw-post-card {
  display: grid;
  gap: 10px;
  padding: 20px 22px;
  border-radius: 10px;
  color: #18202a;
  background: #ffffff;
  border: 1px solid #dde6ee;
}

.arongw-post-card__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  color: #6b7785;
  font-size: 13px;
}

.arongw-post-card__tag {
  padding: 3px 9px;
  border-radius: 9999px;
  color: #3d6fa3;
  background: #e8f1fa;
}

.arongw-post-card__title {
  margin: 0;
  font-size: 18px;
  line-height: 1.45;
  font-weight: 600;
}

.arongw-post-card__desc {
  margin: 0;
  color: #6b7785;
  line-height: 1.65;
}

.arongw-post-card__footer {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  color: #98a2ad;
  font-size: 13px;
}
```

#### ARongw Grid Card 视觉规范

Grid 卡片适合以后文章数量增加，或者每篇文章都有稳定封面图时使用。

```text
封面图比例：16 / 9
卡片背景：#ffffff
边框：#dde6ee
圆角：10px
图片圆角：8px
标题最多 2 行
摘要最多 2-3 行
```

建议暂不把 Grid 作为第一版默认。第一版先实现 List Card，等内容量增加后再加视图切换。

#### 不照搬 Claude Blog 的地方

- 不强制所有文章都有封面图。
- 不做企业站式复杂筛选面板。
- 不使用 Claude 的珊瑚色作为文章卡片主强调色。
- 不把标题重复多次作为视觉内容，只保留必要的可访问语义。
- 不让卡片过大，避免首页被文章卡压得太重。

#### 4. 主体克制，页脚信息分组

Claude Blog 的顶部导航和页脚很重，但主体内容区很克制。这个思路适合长期维护的内容站。

ARongw Blog 不需要复制 Claude 的多列企业页脚，但可以保留分组思路：

```text
内容
  归档
  分类
  标签

方向
  cAGENT
  嵌入式
  FreeRTOS

链接
  GitHub
  arongw.cloud
```

### 不应该照搬的点

- 不复制 Claude / Anthropic 品牌语言。
- 不复制珊瑚橙作为主色。
- 不复制企业级重导航。
- 不把个人博客做成 SaaS 营销页。
- 不为了视觉丰富而牺牲文章可读性。

### 对 ARongw 首页模式的影响

Claude Blog 给出的关键启发是：

```text
首页不应该只是大壁纸
首页应该明确内容方向
文章区域应该可扫描
分类应该前置
视觉应该服务长期阅读
```

因此 ARongw 首页模式可以调整为：

```text
Hero 首屏
  左侧介绍区
    ARongw Blog
    技术学习、项目实践与日常思考
    查看归档 / GitHub

  右侧分类导航区
    cAGENT →
    FreeRTOS →
    嵌入式 →

最新文章
  分类 tabs
  紧凑文章列表
  日期 / 分类 / 标题 / 摘要

页脚
  内容 / 方向 / 链接 三组
```

一句话：Claude Blog 值得学习的不是品牌色，而是它把博客做成了可筛选、可扫描、可长期扩展的内容系统。

## 推荐实现路线

采用站点级自定义，不直接改 Teek 源码。

最终结构：

```text
docs/.vitepress/theme/
├─ index.ts
├─ components/
│  ├─ teek-layout-provider.vue
│  └─ arongw-home.vue
└─ styles/
   └─ arongw-home.scss
```

## 文件改动清单

### 1. 修改 docs/index.md

用途：标记首页启用 ARongw 自定义模式。

建议 frontmatter：

```md
---
layout: home

tk:
  arongwHome: true
  teekHome: false
  vpHome: false
---
```

说明：

- `layout: home` 仍然保留，让 VitePress 识别这是首页。
- `tk.arongwHome: true` 作为自定义首页开关。
- `teekHome: false` 避免 Teek 默认博客首页同时渲染。
- `vpHome: false` 避免 VitePress 默认首页同时渲染。

如果后续需要快速回退，只需要把 `arongwHome` 改为 `false`，并恢复 `teekHome: true`。

### 2. 新增 docs/.vitepress/theme/components/arongw-home.vue

用途：实现真正的 ARongw 首页结构。

建议首页结构：

```text
第一屏：博客 Hero 首屏
  左侧介绍区
  - ARongw Blog
  - 一句话描述
  - GitHub / 归档入口

  右侧分类导航区
  - cAGENT
  - FreeRTOS
  - 嵌入式

第二屏：最新文章
  - 标题
  - 摘要
  - 日期
  - 分类/标签

第三屏：简洁页脚或站点信息
```

推荐首屏视觉结构：

```text
┌────────────────────────────────────────────────────┐
│ 博客 Hero 首屏                                      │
│                                                    │
│  左侧介绍区                    右侧分类导航区       │
│                                                    │
│  ARongw Blog                   cAGENT      →       │
│  记录技术学习、项目实践         FreeRTOS    →       │
│  与日常思考                    嵌入式      →       │
│                                                    │
│  查看归档   GitHub                                  │
└────────────────────────────────────────────────────┘
```

这个结构比“大壁纸 + 居中文案”更适合技术博客：左侧说明站点身份，右侧直接暴露核心内容方向，首页本身就是导航。

组件骨架：

```vue
<script setup lang="ts">
const tracks = [
  {
    title: "cAGENT",
    desc: "记录 AI Agent、工具链与自动化实践。",
    link: "/cagent/intro",
  },
  {
    title: "嵌入式",
    desc: "整理嵌入式开发、调试和工程经验。",
    link: "/embedded/intro",
  },
  {
    title: "FreeRTOS",
    desc: "沉淀 RTOS 学习、任务调度和系统设计笔记。",
    link: "/freertos/intro",
  },
];
</script>

<template>
  <main class="arongw-home">
    <section class="arongw-home__hero">
      <div class="arongw-home__hero-inner">
        <div class="arongw-home__intro">
          <p class="arongw-home__eyebrow">ARongw Blog</p>
          <h1>记录技术学习、项目实践与日常思考</h1>
          <p class="arongw-home__desc">把零散经验沉淀成路径，把项目实践整理成可以复用的知识。</p>

          <div class="arongw-home__actions">
            <a href="/archives">查看归档</a>
            <a href="https://github.com/ARongvv" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <nav class="arongw-home__nav" aria-label="内容分类">
          <a v-for="track in tracks" :key="track.title" :href="track.link" class="arongw-home__nav-item">
            <span>
              <strong>{{ track.title }}</strong>
              <small>{{ track.desc }}</small>
            </span>
            <span aria-hidden="true">→</span>
          </a>
        </nav>
      </div>
    </section>

    <section class="arongw-home__latest">
      <div class="arongw-home__section-head">
        <h2>最新文章</h2>
        <a href="/archives">全部归档</a>
      </div>

      <div class="arongw-home__article-placeholder">后续在这里接入 Teek 已扫描的文章数据。</div>
    </section>
  </main>
</template>
```

第一版可以先不接入最新文章数据，先把 Hero 首屏结构跑通。第二版再考虑读取 Teek 已扫描的 posts 数据。

右侧分类导航建议做成纵向列表，而不是普通按钮：

```text
cAGENT
AI Agent、工具链与自动化实践              →

FreeRTOS
任务调度、队列、系统设计笔记              →

嵌入式
驱动、调试、工程实践                      →
```

这样首页首屏既有个人介绍，也能直接承担内容导航功能。

### 3. 修改 docs/.vitepress/theme/components/teek-layout-provider.vue

用途：在首页判断是否启用 `arongwHome`，启用时插入自定义首页。

需要新增导入：

```ts
import ArongwHome from "./arongw-home.vue";
```

需要增加判断：

```ts
const isArongwHome = computed(() => frontmatter.value.layout === "home" && frontmatter.value.tk?.arongwHome);
```

注意需要从 Vue 引入 `computed`：

```ts
import { watch, nextTick, ref, provide, computed } from "vue";
```

模板中可以通过 VitePress/Teek 首页插槽注入：

```vue
<template #home-hero-before>
  <ArongwHome v-if="isArongwHome" />
</template>
```

同时要确保 `docs/index.md` 中关闭了 `teekHome` 和 `vpHome`，否则会出现多个首页内容叠加。

### 4. 新增 docs/.vitepress/theme/styles/arongw-home.scss

用途：控制 ARongw 首页的视觉样式、尺寸和响应式布局。

建议第一版样式：

```scss
.arongw-home {
  min-height: calc(100vh - var(--vp-nav-height));
  color: var(--vp-c-text-1);
}

.arongw-home__hero {
  min-height: 560px;
  display: flex;
  align-items: center;
  background: #faf8f3;
}

.arongw-home__hero-inner {
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
  gap: 48px;
  align-items: center;
}

.arongw-home__intro {
  min-width: 0;
}

.arongw-home__eyebrow {
  margin: 0 0 12px;
  font-size: 14px;
  color: #6699cc;
  font-weight: 600;
}

.arongw-home__hero h1 {
  max-width: 680px;
  margin: 0;
  color: #18202a;
  font-size: 46px;
  line-height: 1.18;
}

.arongw-home__desc {
  max-width: 620px;
  margin: 18px 0 0;
  color: #364250;
  font-size: 17px;
  line-height: 1.8;
}

.arongw-home__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.arongw-home__actions a {
  display: inline-flex;
  align-items: center;
  height: 40px;
  padding: 0 18px;
  border-radius: 8px;
  color: #18202a;
  background: #ffffff;
  border: 1px solid #dde6ee;
}

.arongw-home__actions a:first-child {
  color: #ffffff;
  background: #6699cc;
  border-color: #6699cc;
}

.arongw-home__nav {
  display: grid;
  gap: 12px;
}

.arongw-home__nav-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 20px 22px;
  border-radius: 10px;
  color: #18202a;
  background: #ffffff;
  border: 1px solid #dde6ee;
}

.arongw-home__nav-item strong {
  display: block;
  font-size: 18px;
}

.arongw-home__nav-item small {
  display: block;
  margin-top: 6px;
  color: #6b7785;
  line-height: 1.55;
}

.arongw-home__latest {
  width: min(1120px, calc(100% - 40px));
  margin: 56px auto;
}

.arongw-home__section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.arongw-home__article-placeholder {
  margin-top: 18px;
  padding: 24px;
  border-radius: 10px;
  color: #6b7785;
  background: #ffffff;
  border: 1px solid #dde6ee;
}

@media (max-width: 768px) {
  .arongw-home__hero {
    min-height: auto;
    padding: 72px 0 40px;
  }

  .arongw-home__hero-inner {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .arongw-home__hero h1 {
    font-size: 32px;
  }

  .arongw-home__section-head {
    align-items: flex-start;
    flex-direction: column;
  }
}
```

### 5. 修改 docs/.vitepress/theme/index.ts

用途：引入自定义首页样式。

新增：

```ts
import "./styles/arongw-home.scss";
```

## 是否需要修改 teek-config.ts

第一版不强制需要。

原因：

- 首页启用逻辑可以先放在 `docs/index.md` 的 frontmatter。
- `teek-config.ts` 继续作为全站默认主题配置。
- 这样更容易回退，也不会影响其它页面。

如果后续想全局配置化，可以在 `teek-config.ts` 增加自定义字段：

```ts
arongwHome: {
  enabled: true,
}
```

但这不是 Teek 原生类型，TypeScript 可能需要扩展类型或使用宽松处理。第一版不建议这么做。

## 最新文章区实现方案

第一版建议暂缓。

第二版可以考虑两种方式：

### 方案 A：复用 Teek 首页文章列表

继续让 Teek 渲染文章列表，但隐藏默认 Banner 和右侧栏。优点是快，缺点是布局自由度一般。

相关配置：

```ts
homeCardListPosition: false,
banner: {
  enabled: false,
},
```

### 方案 B：自定义文章列表

从 Teek/VitePress 注入的数据中读取 posts，自行渲染。

优点：

- 完全控制文章卡片样式。
- 可以只显示最新 5 篇。
- 可以改成横向、紧凑列表或时间线。

缺点：

- 需要确认当前主题注入 posts 的数据结构。
- 需要处理 permalink、date、frontmatter.describe 等字段。

建议等首页骨架完成后再做。

## 实施步骤

### 第一步：新增静态 ARongw 首页

改动：

- 新增 `arongw-home.vue`
- 新增 `arongw-home.scss`
- 修改 `theme/index.ts`
- 修改 `teek-layout-provider.vue`
- 修改 `docs/index.md`

目标：

- 首页显示自定义 ARongw 首页。
- 不显示 Teek 默认首页和 VitePress 默认首页。
- 构建通过。

### 第二步：完善首页视觉

改动：

- 调整 hero 高度。
- 调整背景图。
- 调整技术方向入口卡片。
- 适配移动端。

目标：

- 首页首屏清晰展示个人博客身份。
- cAGENT、嵌入式、FreeRTOS 三个入口明显。
- 页面不显得像主题演示站。

### 第三步：接入最新文章

改动：

- 读取 posts 数据。
- 渲染最新文章列表。
- 支持标题、描述、日期、分类、链接。

目标：

- 首页能作为博客入口。
- 用户能快速进入最近内容。

### 第四步：抽象为可切换模式

改动：

- 在主题配置演示面板中增加 `ARongw 模式`。
- 或者在 frontmatter 中继续使用 `tk.arongwHome`。

目标：

- 能在文档模式、Teek 模式、ARongw 模式之间切换。

## 验证方式

每次改动后运行：

```bash
docs/node_modules/.bin/vitepress build docs
```

构建完成后清理临时目录：

```bash
rm -rf docs/.vitepress/.temp
```

需要重点检查：

- 首页是否只显示一套首页内容。
- 顶部导航是否还能正常进入 cAGENT、嵌入式、FreeRTOS。
- `/archives`、`/categories`、`/tags` 是否正常。
- 移动端首页卡片是否变成单列。
- 深色模式下文字是否可读。

## 回退方案

如果需要恢复 Teek 默认首页：

1. 修改 `docs/index.md`：

```md
tk:
teekHome: true
vpHome: false
arongwHome: false
```

2. 保留新增组件和样式，不影响其它页面。

3. 如果要彻底删除：

```text
删除 docs/.vitepress/theme/components/arongw-home.vue
删除 docs/.vitepress/theme/styles/arongw-home.scss
移除 docs/.vitepress/theme/index.ts 中的样式引入
移除 teek-layout-provider.vue 中的 ArongwHome 引用和插槽
```

## 推荐第一版范围

第一版只做这些：

- 自定义首页 hero。
- 三个技术方向入口。
- GitHub、归档、分类入口。
- 暂不做最新文章。
- 暂不改 Teek 源码。

这样可以先把首页“气质”和结构定下来，再逐步补文章数据和交互。
