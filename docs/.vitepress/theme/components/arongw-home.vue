<script setup lang="ts" name="ArongwHome">
import { computed } from "vue";
import { withBase } from "vitepress";
import { usePosts } from "vitepress-theme-teek";
import ArongwPostCover from "./arongw-post-cover.vue";

type CoverTemplate =
  | "network"
  | "timeline"
  | "chip"
  | "path"
  | "scan"
  | "converge"
  | "orbit"
  | "bridge"
  | "split"
  | "ribbon"
  | "honeycomb"
  | "waveform"
  | "nested"
  | "balance"
  | "spiral"
  | "flow"
  | "branch"
  | "contour";
type CoverTone = "coral" | "sage" | "blue" | "lilac" | "teal" | "amber";
type CoverSelection<T> = T | "random";

interface CoverConfig {
  template: CoverTemplate;
  tone: CoverTone;
  variant: 1 | 2 | 3;
}

interface CategoryCoverDefault {
  templates: CoverTemplate[];
  tones: CoverTone[];
}

const tracks = [
  {
    title: "cAGENT",
    link: "/cagent/intro",
  },
  {
    title: "嵌入式",
    link: "/embedded/intro",
  },
  {
    title: "FreeRTOS",
    link: "/freertos/intro",
  },
];

const posts = usePosts();

const latestPosts = computed(() => posts.value.sortPostsByDate.slice(0, 12));
const coverTemplates: CoverTemplate[] = [
  "network",
  "timeline",
  "chip",
  "path",
  "scan",
  "converge",
  "orbit",
  "bridge",
  "split",
  "ribbon",
  "honeycomb",
  "waveform",
  "nested",
  "balance",
  "spiral",
  "flow",
  "branch",
  "contour",
];
const coverTones: CoverTone[] = ["coral", "sage", "blue", "lilac", "teal", "amber"];

const categoryCoverDefaults: Record<string, CategoryCoverDefault> = {
  cagent: {
    templates: ["network", "orbit", "honeycomb", "branch", "spiral", "converge"],
    tones: ["coral", "lilac", "teal"],
  },
  freertos: {
    templates: ["timeline", "orbit", "waveform", "flow", "balance"],
    tones: ["sage", "blue", "lilac"],
  },
  嵌入式: {
    templates: ["chip", "waveform", "flow", "contour", "nested", "scan"],
    tones: ["blue", "amber", "sage"],
  },
  linux: {
    templates: ["nested", "split", "ribbon", "flow", "spiral", "path"],
    tones: ["lilac", "blue", "sage"],
  },
  边缘ai: {
    templates: ["scan", "contour", "flow", "waveform", "orbit", "network"],
    tones: ["teal", "blue", "coral"],
  },
  项目实践: {
    templates: ["converge", "bridge", "balance", "ribbon", "spiral", "flow"],
    tones: ["amber", "sage", "coral"],
  },
};

const formatDate = (date?: string) => {
  if (!date) return "";
  return date.slice(0, 10);
};

const getTags = (post: (typeof latestPosts.value)[number]) => {
  const categories = [post.frontmatter.categories || []].flat().filter(Boolean);
  const tags = [post.frontmatter.tags || []].flat().filter(Boolean);
  return [...categories, ...tags].slice(0, 2);
};

const getDescription = (post: (typeof latestPosts.value)[number]) => {
  return post.frontmatter.description || post.excerpt || post.capture || "继续阅读这篇文章。";
};

const getPrimaryCategory = (post: (typeof latestPosts.value)[number]) => {
  return getTags(post)[0] || "Blog";
};

const hashString = (value: string) => {
  return [...value].reduce((hash, character) => (hash * 31 + character.codePointAt(0)!) >>> 0, 0);
};

const getCoverConfig = (post: (typeof latestPosts.value)[number], index: number): CoverConfig => {
  const hash = hashString(post.url || post.title || String(index));
  const category = getPrimaryCategory(post).toLocaleLowerCase();
  const categoryDefault = categoryCoverDefaults[category];
  const rawCover = post.frontmatter.cover;
  const cover: Record<string, unknown> =
    rawCover && typeof rawCover === "object" && !Array.isArray(rawCover) ? (rawCover as Record<string, unknown>) : {};
  const requestedTemplate = cover.template as CoverSelection<CoverTemplate> | undefined;
  const requestedTone = cover.tone as CoverSelection<CoverTone> | undefined;
  const requestedVariant = Number(cover.variant);
  const templatePool = categoryDefault?.templates || coverTemplates;
  const tonePool = categoryDefault?.tones || coverTones;

  return {
    template:
      requestedTemplate === "random"
        ? coverTemplates[(hash >>> 2) % coverTemplates.length]
        : requestedTemplate && coverTemplates.includes(requestedTemplate)
          ? requestedTemplate
          : templatePool[hash % templatePool.length],
    tone:
      requestedTone === "random"
        ? coverTones[(hash >>> 7) % coverTones.length]
        : requestedTone && coverTones.includes(requestedTone)
          ? requestedTone
          : tonePool[(hash >>> 3) % tonePool.length],
    variant:
      requestedVariant >= 1 && requestedVariant <= 3
        ? (requestedVariant as CoverConfig["variant"])
        : ((((hash >>> 6) % 3) + 1) as CoverConfig["variant"]),
  };
};
</script>

<template>
  <main class="arongw-home">
    <section class="arongw-home__hero">
      <div class="arongw-home__hero-inner">
        <div class="arongw-home__intro">
          <p class="arongw-home__eyebrow">ARongw Blog</p>
          <h1>记录技术学习、项目实践与日常思考</h1>
          <p class="arongw-home__desc">把零散经验沉淀成路径，把项目实践整理成可以复用的知识。</p>

          <div class="arongw-home__actions" aria-label="首页操作">
            <a class="arongw-home__action arongw-home__action--primary" href="/archives">查看归档</a>
            <a class="arongw-home__action" href="https://github.com/ARongvv" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <nav class="arongw-home__nav" aria-label="内容分类">
          <a v-for="track in tracks" :key="track.title" :href="track.link" class="arongw-home__nav-item">
            <span>{{ track.title }}</span>
            <span class="arongw-home__nav-arrow" aria-hidden="true">→</span>
          </a>
        </nav>
      </div>
    </section>

    <section class="arongw-home__latest" aria-labelledby="arongw-latest-title">
      <div class="arongw-home__section-head">
        <div>
          <p class="arongw-home__section-kicker">Latest</p>
          <h2 id="arongw-latest-title">最新文章</h2>
        </div>
        <a href="/archives">全部归档</a>
      </div>

      <div v-if="latestPosts.length" class="arongw-post-area">
        <div class="arongw-post-grid">
          <article v-for="(post, index) in latestPosts" :key="post.url" class="arongw-post-card">
            <a :href="post.url && withBase(post.url)" class="arongw-post-card__cover" tabindex="-1" aria-hidden="true">
              <ArongwPostCover v-bind="getCoverConfig(post, index)" />
            </a>

            <div class="arongw-post-card__body">
              <time v-if="post.date" :datetime="formatDate(post.date)" class="arongw-post-card__date">
                {{ formatDate(post.date) }}
              </time>

              <h3 class="arongw-post-card__title">
                <a :href="post.url && withBase(post.url)">{{ post.title }}</a>
              </h3>

              <p class="arongw-post-card__desc">{{ getDescription(post) }}</p>

              <div class="arongw-post-card__footer">
                <span class="arongw-post-card__category">{{ getPrimaryCategory(post) }}</span>
                <a :href="post.url && withBase(post.url)" aria-label="阅读文章">阅读 →</a>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div v-else class="arongw-home__empty">暂无文章。</div>
    </section>
  </main>
</template>
