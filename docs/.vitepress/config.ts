import { defineConfig } from "vitepress";
import llmstxt from "vitepress-plugin-llms";
import { teekConfig } from "./teek-config";

// Teek 在线主题包引用（需安装 Teek 在线版本）
// import { version } from "vitepress-theme-teek/es/version";

const description = [
  "欢迎来到 ARongw 的博客",
  "这里记录技术学习、项目实践与日常思考。",
  "用文字整理经验，用代码验证想法。",
].toString();
const base = "/";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: teekConfig,
  base,
  title: "ARongw 的博客",
  description: description,
  cleanUrls: false,
  lastUpdated: true,
  lang: "zh-CN",
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: `${base}teek-logo-mini.svg` }],
    ["link", { rel: "icon", type: "image/png", href: `${base}teek-logo-mini.png` }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "zh-CN" }],
    ["meta", { property: "og:title", content: "ARongw 的博客" }],
    ["meta", { property: "og:site_name", content: "ARongw 的博客" }],
    ["meta", { property: "og:image", content: "https://github.com/ARongvv.png" }],
    ["meta", { property: "og:url", content: "https://ARongvv.github.io" }],
    ["meta", { property: "og:description", description }],
    ["meta", { name: "description", description }],
    ["meta", { name: "author", content: "ARongw" }],
    // 禁止浏览器缩放
    // [
    //   "meta",
    //   {
    //     name: "viewport",
    //     content: "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
    //   },
    // ],
    ["meta", { name: "keywords", description }],
  ],
  markdown: {
    // 开启行号
    lineNumbers: true,
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true,
    },
    // 更改容器默认值标题
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
  sitemap: {
    hostname: "https://ARongvv.github.io",
    transformItems: items => {
      const permalinkItemBak: typeof items = [];
      // 使用永久链接生成 sitemap
      const permalinks = (globalThis as any).VITEPRESS_CONFIG.site.themeConfig.permalinks;
      items.forEach(item => {
        const permalink = permalinks?.map[item.url.replace(".html", "")];
        if (permalink) permalinkItemBak.push({ url: permalink, lastmod: item.lastmod });
      });
      return [...items, ...permalinkItemBak];
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/teek-logo-mini.svg",
    darkModeSwitchLabel: "主题",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    lastUpdatedText: "上次更新时间",
    outline: {
      level: [2, 4],
      label: "本页导航",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "cAGENT", link: "/cagent/intro", activeMatch: "/01.cAGENT/" },
      { text: "嵌入式", link: "/embedded/intro", activeMatch: "/05.嵌入式/" },
      { text: "FreeRTOS", link: "/freertos/intro", activeMatch: "/10.FreeRTOS/" },
      {
        text: "功能页",
        items: [
          { text: "归档页", link: "/archives" },
          { text: "清单页", link: "/articleOverview" },
          { text: "分类页", link: "/categories" },
          { text: "标签页", link: "/tags" },
        ],
      },
      { text: "GitHub", link: "https://github.com/ARongvv" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/ARongvv" }],
    search: {
      provider: "local",
    },
  },
  vite: {
    plugins: [llmstxt() as any],
  },
  // transformHtml: (code, id, context) => {
  //   if (context.page !== "404.md") return code;
  //   return code.replace("404 | ", "");
  // },
});
