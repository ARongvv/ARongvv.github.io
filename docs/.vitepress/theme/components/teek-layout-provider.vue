<script setup lang="ts" name="TeekLayoutProvider">
import type { TeekConfig } from "vitepress-theme-teek";
import Teek, { teekConfigContext, clockIcon, TkMessage } from "vitepress-theme-teek";
import { useData } from "vitepress";
import { watch, nextTick, ref, provide } from "vue";
import { teekDocConfig } from "../config/teek-config";
import { useRibbon } from "../composables/use-ribbon";
import { useRuntime } from "../composables/use-runtime";
import ConfigSwitch from "./config-switch.vue";
import ContributeChart from "./contribute-chart.vue";
import NotFound from "./404.vue";
import CalendarCard from "./calendar-card.vue";
import ThemeSetting, { type ChangeType } from "./theme-setting.vue";

const ns = "layout-provider";
const { frontmatter } = useData();

// 默认文档风
const currentStyle = ref("doc");
const teekConfig = ref(teekDocConfig);
provide(teekConfigContext, teekConfig);

// 彩带背景
const { start: startRibbon, stop: stopRibbon } = useRibbon({ immediate: false, clickReRender: true });
// 页脚运行时间
const { start: startRuntime, stop: stopRuntime } = useRuntime("2021-10-19 00:00:00", {
  prefix: `<span style="width: 16px; display: inline-block; vertical-align: -3px; margin-right: 3px;">${clockIcon}</span>小破站已运行 `,
});

const watchRuntimeAndRibbon = async (layout: string, style: string) => {
  const isHome = layout === "home";
  const isDoc = [undefined, "doc"].includes(layout);
  const isBlog = style.startsWith("blog");

  // 博客类风格的首页显示运行时间
  await nextTick();
  if (isHome && isBlog) startRuntime();
  else stopRuntime();

  // 博客类风格的首页显示彩带 & 设置了 pageStyle 的文章页显示彩带
  if ((isHome && isBlog && style !== "blog-body") || (isDoc && teekConfig.value.pageStyle)) startRibbon();
  else stopRibbon();
};

watch(frontmatter, newVal => setTimeout(() => watchRuntimeAndRibbon(newVal.layout, currentStyle.value), 700), {
  immediate: true,
  flush: "post",
});

const handleConfigSwitch = (config: TeekConfig, style: string) => {
  teekConfig.value = config;

  setTimeout(() => watchRuntimeAndRibbon(frontmatter.value.layout, style), 700);
};

const handleThemeSettingChange = (config: TeekConfig, type: ChangeType) => {
  if (type === "bannerWallpaper") {
    teekConfig.value.teekHome = config.teekHome;
    teekConfig.value.vpHome = config.vpHome;
    teekConfig.value.banner = { ...teekConfig.value.banner, ...config.banner };
    teekConfig.value.bodyBgImg = { ...teekConfig.value.bodyBgImg, ...config.bodyBgImg };

    if (config.teekHome) setTimeout(() => watchRuntimeAndRibbon(frontmatter.value.layout, "blog"), 700);
    else setTimeout(() => watchRuntimeAndRibbon(frontmatter.value.layout, ""), 700);
  } else if (type === "bannerDescStyle") teekConfig.value.banner = { ...teekConfig.value.banner, ...config.banner };
  else if (type === "postStyle") teekConfig.value.post = { ...teekConfig.value.post, ...config.post };
  else if (type === "homeCardListPosition") teekConfig.value.homeCardListPosition = config.homeCardListPosition;
  else if (type === "pageStyle") teekConfig.value.pageStyle = config.pageStyle;
  else if (type === "postCoverImgMode") teekConfig.value.post = { ...teekConfig.value.post, ...config.post };
  else if (type === "themeSize") teekConfig.value.themeSize = config.themeSize;
  else if (type === "bannerImgWaves") teekConfig.value.banner = { ...teekConfig.value.banner, ...config.banner };
  else if (type === "loading") teekConfig.value.loading = config.loading;
  else if (type === "comment") teekConfig.value.comment = config.comment;

  TkMessage.success({
    message: "切换配置成功！",
    customClass: "antd",
  });
};
</script>

<template>
  <Teek.Layout>
    <template #teek-theme-enhance-bottom>
      <!-- <ConfigSwitch v-model="currentStyle" @switch="handleConfigSwitch" /> -->

      <ThemeSetting @change="handleThemeSettingChange" />
    </template>

    <template #teek-home-card-my-after>
      <CalendarCard />
    </template>

    <template #nav-screen-content-after>
      <ConfigSwitch v-model="currentStyle" @switch="handleConfigSwitch" />
    </template>

    <template #teek-archives-top-before>
      <ContributeChart />
    </template>

    <template #not-found>
      <NotFound />
    </template>
  </Teek.Layout>
</template>

<style lang="scss">
.tk-my.is-circle-bg {
  .tk-my__avatar.circle-rotate {
    margin-top: 200px;

    .tk-avatar:not(.avatar-sticker) {
      border: 5px solid var(--vp-c-bg-elv);
    }
  }
}
</style>
