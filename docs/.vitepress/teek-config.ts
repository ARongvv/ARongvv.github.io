// 本地 Teek 主题包引用（与 Teek 在线主题包引用 二选一）
import { defineTeekConfig } from "../../packages/config";

// Teek 在线主题包引用（需安装 Teek 在线版本）
// import { defineTeekConfig } from "vitepress-theme-teek/config";
// import { version } from "vitepress-theme-teek/es/version";

export const teekConfig = defineTeekConfig({
  teekHome: false,
  vpHome: true,
  loading: false,
  sidebarTrigger: true,
  author: { name: "ARongw", link: "https://github.com/ARongvv" },
  blogger: {
    name: "ARongw",
    slogan: "记录技术学习、项目实践与日常思考。",
    avatar: "https://github.com/ARongvv.png",
    shape: "circle-rotate",
    circleBgImg: "/blog/bg4.webp",
    color: "#ffffff",
    circleSize: 120,
    status: {
      icon: "😪",
      size: 28,
      title: "困",
    },
  },
  articleAnalyze: {
    dateFormat: "yyyy-MM-dd hh:mm:ss",
  },
  banner: {
    name: "ARongw Blog",
    bgStyle: "fullImg",
    imgSrc: ["/blog/bg1.webp", "/blog/bg2.webp", "/blog/bg3.webp"],
    description: [
      "写下今天踩过的坑，留给明天更快出发的自己。",
      "把知识整理成路径，把灵感沉淀成作品。",
      "代码、阅读、生活，都值得被认真记录。",
    ],
    descStyle: "types",
  },
  wallpaper: {
    enabled: true,
    hideBanner: true,
  },
  docAnalysis: {
    createTime: "2025-03-23",
    statistics: {
      provider: "busuanzi",
    },
  },
  codeBlock: {
    copiedDone: TkMessage => TkMessage.success("复制成功！"),
  },
  post: {
    showCapture: true,
  },
  articleBanner: {
    enabled: true,
  },
  articleShare: { enabled: true },
  vitePlugins: {
    sidebarOption: {
      initItems: false,
      ignoreIndexMd: true,
    },
  },
  footerInfo: {
    theme: {
      name: "Theme By Teek",
    },
    copyright: {
      createYear: 2025,
      suffix: "ARongw",
    },
    customHtml: `<span id="runtime"></span>`, // 需要搭配 .vitepress/theme/helper/useRuntime.ts 使用
    topMessage: [`<a title="GitHub" target="_blank" href="https://github.com/ARongvv">GitHub: ARongw</a>`],
  },
  footerGroup: [
    {
      title: "我的主页",
      links: [{ name: "GitHub", link: "https://github.com/ARongvv" }],
    },
    {
      title: "内部链接",
      links: [
        { name: "归档", link: "/archives" },
        { name: "分类", link: "/categories" },
        { name: "标签", link: "/tags" },
      ],
    },
  ],
  friendLink: {
    list: [],
    autoScroll: true,
  },
  social: [
    {
      icon: "icon-github",
      name: "GitHub",
      link: "https://github.com/ARongvv",
    },
  ],
  themeEnhance: {
    themeColor: {
      append: [
        {
          label: "扩展主题色板",
          tip: "扩展主题色板",
          options: [
            // --- 活力与明亮系 --
            { label: "紫罗兰", value: "violet", color: "#7166f0" }, // 经典优雅，视觉舒适
            { label: "珊瑚粉", value: "coral-pink", color: "#ff6b6b" }, // 温暖活泼，亲和力强
            { label: "天蓝", value: "sky-blue", color: "#00bbf9" }, // 清新开阔，科技感初显
            { label: "蓝绿", value: "blue-green", color: "#00f5d4" }, // 独特醒目，现代感强
            { label: "粉红", value: "pink", color: "#f15bb5" }, // 浪漫柔和，女性化倾向
            { label: "黄绿", value: "yellow-green", color: "#8ac926" }, // 生机盎然，自然清新
            { label: "橙红", value: "orange-red", color: "#ff9e6b" }, // 热情洋溢，活力四射
            // --- 沉稳与专业系 ---
            { label: "石板灰", value: "slate-gray", color: "#708090" }, // 低调内敛，极简主义
            { label: "深海蓝", value: "ocean-blue", color: "#0077be" }, // 沉稳专业，信赖感强
            { label: "科技蓝", value: "tech-blue", color: "#0056b3" }, // 经典商务，理性冷静
            { label: "靛青色", value: "indigo", color: "#4b0082" }, // 深邃神秘，高端大气
            { label: "炭灰色", value: "charcoal", color: "#36454f" }, // 极致暗黑，专注阅读
            // --- 自然与清新系 ---
            { label: "薄荷绿", value: "mint", color: "#3eb489" }, // 清新护眼，缓解疲劳
            { label: "松石绿", value: "turquoise", color: "#40e0d0" }, // 晶莹剔透，清凉夏日
            { label: "橄榄绿", value: "olive-green", color: "#808000" }, // 复古自然，大地气息
            { label: "柠檬黄", value: "lemon", color: "#ffd700" }, // 明亮欢快，警示提醒
            // --- 浪漫与柔和系 ---
            { label: "薰衣草", value: "lavender", color: "#967bb6" }, // 梦幻柔美，宁静安神
            { label: "玫瑰金", value: "rose-gold", color: "#b76e79" }, // 时尚轻奢，精致优雅
            { label: "豆沙红", value: "bean-paste-red", color: "#d27d7d" }, // 温柔知性，低调奢华
            { label: "雾霾蓝", value: "haze-blue", color: "#6699cc" }, // 莫兰迪色系，高级耐看
            // --- 霓虹与赛博系 ---
            { label: "霓虹紫", value: "neon-purple", color: "#bc13fe" }, // 赛博朋克，未来感十足
            { label: "极光绿", value: "aurora-green", color: "#00ff9d" }, // 高亮荧光，极客风格
            // --- 温暖与丰收系 ---
            { label: "日落橙", value: "sunset-orange", color: "#ff7f50" }, // 温暖热烈，黄昏意境
            { label: "琥珀色", value: "amber", color: "#ffbf00" }, // 珍贵通透，古典韵味
          ],
        },
      ],
    },
  },
  markdown: {
    demo: {
      githubUrl: "https://github.com/ARongvv",
    },
  },
  siteAnalytics: [],
});
