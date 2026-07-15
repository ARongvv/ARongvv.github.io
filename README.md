<h1 align="center">vitepress-theme-teek</h1>

<div align="center">

[Github](https://github.com/Kele-Bingtang/vitepress-theme-teek) ｜ [Gitee](https://gitee.com/kele-bingtang/vitepress-theme-teek) ｜ [Preview](https://notes.teek.top/) ｜[Docs](http://vp.teek.top/)

✨一个轻量、简洁高效、灵活配置、易于扩展的 VitePress 主题。

</div>

<p align="center">
  <a title="Github release" target="_blank" href="https://github.com/Kele-Bingtang/vitepress-theme-teek/releases">
    <img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/Kele-Bingtang/vitepress-theme-teek?logo=github">
  </a>

  <a title="Npm Version" target="_blank" href="https://www.npmjs.com/package/vitepress-theme-teek">
    <img src="https://img.shields.io/npm/v/vitepress-theme-teek?logo=npm&color=%09%23bf00ff" alt="https://img.shields.io/npm/v/vitepress-theme-teek?color=%09%23bf00ff">
  </a>

  <img src="https://img.shields.io/badge/v18.x-x?logo=node.js&label=node" alt="node version">
  <img src="https://img.shields.io/github/languages/code-size/Kele-Bingtang/vitepress-theme-teek?logo=Visual Studio Code&logoColor=blue" alt="GitHub code size in bytes">

  <a title="GitHub Discussions" target="_blank" href="https://github.com/Kele-Bingtang/vitepress-theme-teek/discussions">
    <img src="https://img.shields.io/github/discussions/Kele-Bingtang/vitepress-theme-teek?color=9cf&logo=github" alt="GitHub Discussions">
  </a>

  <a title="MIT License" target="_blank" href="https://github.com/Kele-Bingtang/vitepress-theme-teek/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="MIT License">
  </a>
</p>

**简体中文** | [English](./README.en.md)

## Teek 在线安装

请看 [快速开始](https://vp.teek.top/guide/quickstart)。

## 贡献指南

请看 [贡献指南](https://vp.teek.top/guide/contribution)。

## 本地运行

项目拉取

```bash
git clone https://github.com/Kele-Bingtang/vitepress-theme-teek.git
```

依赖安装（只能用 pnpm 安装依赖）

```bash
pnpm install
```

引用包构建

```bash
pnpm stub
```

文档项目启动

```bash
pnpm docs:dev
```

## 博客文章封面配置

首页文章卡片使用代码生成封面。每篇 Markdown 文章可以在 frontmatter 中指定封面模板、颜色和变体：

```yaml
cover:
  template: timeline
  tone: amber
  variant: 2
```

### 模板选项

目前共有 18 个模板：

| 模板        | 结构                  | 适合内容                     |
| ----------- | --------------------- | ---------------------------- |
| `network`   | 中央核心 + 放射节点   | Agent、MQTT、IoT             |
| `timeline`  | 任务块 + 时间轴       | FreeRTOS、并发、调度         |
| `chip`      | 芯片核心 + 外围引脚   | 嵌入式、MCU、驱动            |
| `path`      | 折叠多边形 + 路径     | 架构、部署、数据流           |
| `scan`      | 同心圆 + 扫描轨迹     | 传感器、视觉、监控           |
| `converge`  | 模块 + 汇聚节点       | 项目实践、优化、融合         |
| `orbit`     | 轨道环绕 + 中央核心   | 状态机、事件循环、推理流程   |
| `bridge`    | 桥梁结构 + 两端节点   | 协议适配、网关、中间件       |
| `split`     | 分裂模块 + 中央间隙   | 客户端与服务端、云端与端侧   |
| `ribbon`    | 折叠丝带 + 路径转折   | CI/CD、OTA、处理管线         |
| `honeycomb` | 蜂窝单元 + 缺失模块   | 插件、组件、模块化架构       |
| `waveform`  | 波形穿越 + 采样节点   | ADC、音频、传感器信号        |
| `nested`    | 嵌套框架 + 递归结构   | 容器、协议栈、系统分层       |
| `balance`   | 平衡结构 + 两侧模块   | 性能权衡、方案对比           |
| `spiral`    | 黄金螺旋 + 关键节点   | 迭代、递归、持续优化         |
| `flow`      | S 形贝塞尔流线        | 部署、请求响应、数据处理     |
| `branch`    | 叶脉式分叉曲线        | 工具调用、决策树、任务拆分   |
| `contour`   | 等高线曲面 + 偏心核心 | 数据分布、性能分析、异常检测 |

### 颜色选项

| 配置值  | 颜色     |
| ------- | -------- |
| `coral` | 珊瑚橙   |
| `sage`  | 鼠尾草绿 |
| `blue`  | 灰蓝     |
| `lilac` | 淡紫     |
| `teal`  | 青绿     |
| `amber` | 琥珀黄   |

`variant` 支持 `1`、`2`、`3`，用于控制同一模板的轻微位置和角度变化。

### 分类专属池

省略 `template` 或 `tone` 时，系统会读取文章 `categories` 的第一个值，并根据文章路径从对应分类的专属池中稳定选择。选择结果不会在刷新或重新构建后变化。

| 分类     | 专属模板池                                                      | 专属颜色池               |
| -------- | --------------------------------------------------------------- | ------------------------ |
| cAGENT   | `network`、`orbit`、`honeycomb`、`branch`、`spiral`、`converge` | `coral`、`lilac`、`teal` |
| FreeRTOS | `timeline`、`orbit`、`waveform`、`flow`、`balance`              | `sage`、`blue`、`lilac`  |
| 嵌入式   | `chip`、`waveform`、`flow`、`contour`、`nested`、`scan`         | `blue`、`amber`、`sage`  |
| Linux    | `nested`、`split`、`ribbon`、`flow`、`spiral`、`path`           | `lilac`、`blue`、`sage`  |
| 边缘 AI  | `scan`、`contour`、`flow`、`waveform`、`orbit`、`network`       | `teal`、`blue`、`coral`  |
| 项目实践 | `converge`、`bridge`、`balance`、`ribbon`、`spiral`、`flow`     | `amber`、`sage`、`coral` |

### 随机选项

`template` 和 `tone` 都支持 `random`：

```yaml
cover:
  template: random
  tone: random
  variant: 2
```

- `template: random` 从全部 18 个模板中选择。
- `tone: random` 从全部 6 种颜色中选择。
- 随机结果基于文章路径生成，同一篇文章的结果保持稳定。
- 省略配置表示从分类专属池选择；填写 `random` 表示忽略分类池，从全部选项中选择。
- 明确填写模板或颜色名称时，始终使用指定值。

也可以只随机其中一项：

```yaml
cover:
  template: random
  tone: amber
  variant: 2
```

封面配置解析位于 `docs/.vitepress/theme/components/arongw-home.vue`，封面结构位于
`docs/.vitepress/theme/components/arongw-post-cover.vue`，样式位于
`docs/.vitepress/theme/styles/arongw-home.scss`。

## 效果图

下面只列出部分效果图，更多的功能请访问 [官方文档](https://vp.teek.top)

### 文档首页

![](https://testingcf.jsdelivr.net/gh/Kele-Bingtang/static/vp-teek-cover/20250807010539.png)

### Banner 大图

![Banner 大图](https://testingcf.jsdelivr.net/gh/Kele-Bingtang/static/vp-teek-cover/20250807004931.png)

### Banner 小图

![Banner 小图](https://testingcf.jsdelivr.net/gh/Kele-Bingtang/static/vp-teek-cover/20250807004833.png)

### 全背景图

![全背景图](https://testingcf.jsdelivr.net/gh/Kele-Bingtang/static/vp-teek-cover/20250807004913.png)

### 卡片风格

![卡片风格](https://testingcf.jsdelivr.net/gh/Kele-Bingtang/static/vp-teek-cover/20250807004909.png)

### 碎片化文章页

![碎片化文章页](https://testingcf.jsdelivr.net/gh/Kele-Bingtang/static/vp-teek-cover/20250807004839.png)

### 目录页

![目录页](https://testingcf.jsdelivr.net/gh/Kele-Bingtang/static/vp-teek-cover/20250807004926.png)

### 归档页

![归档页](https://testingcf.jsdelivr.net/gh/Kele-Bingtang/static/vp-teek-cover/20250807004922.png)

## 💖 支持这个项目

如果您正在使用这个项目并感觉这个项目给你带来帮助，或者是想支持我继续开发，您可以通过如下任意方式支持我：

- Star 并分享 [VitePress Theme Teek](https://github.com/Kele-Bingtang/vitepress-theme-teek) 🚀
- 通过以下二维码进行赞助，打赏作者一杯茶 🍵

谢谢！❤️

|                                                                 微信赞赏                                                                  |                                                               微信                                                                |                                                              支付宝                                                               |
| :---------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://testingcf.jsdelivr.net/gh/Kele-Bingtang/static/vp-teek-cover/20250807010102.jpg" alt="WeChat Sponsor QRcode" width=180> | <img src="https://testingcf.jsdelivr.net/gh/Kele-Bingtang/static/vp-teek-cover/20250807010104.jpg" alt="WeChat QRcode" width=180> | <img src="https://testingcf.jsdelivr.net/gh/Kele-Bingtang/static/vp-teek-cover/20250807010106.jpg" alt="Alipay QRcode" width=180> |

您的赞助将帮助 Teek：

- 维护项目的基础设施
- 投入更多时间进行开发
- 提供更好的技术支持
- 开发更多实用功能

二维码没有正常显示？点 [这里](https://vp.teek.top/personal.html) 😎

## 致谢

❤️ 感谢支持这个项目的朋友，您的每一份帮助都让这个项目变得更好！

❤️ 感谢为这个项目贡献代码的朋友 → [Contributors](https://github.com/Kele-Bingtang/vitepress-theme-teek/graphs/contributors)

## License

[MIT](./LICENSE) License © 2025 [Teeker](https://github.com/Kele-Bingtang)

```
框架预设：Vite

根目录：
/

输出目录：
docs/.vitepress/dist

编译命令：
pnpm stub && pnpm docs:build

安装命令：
pnpm install --frozen-lockfile
```
