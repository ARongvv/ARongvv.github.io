<script setup lang="ts" name="ArongwHome">
import { computed } from "vue";
import { withBase } from "vitepress";
import { usePosts } from "vitepress-theme-teek";

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

const latestPosts = computed(() => posts.value.sortPostsByDate.slice(0, 6));
const coverClasses = ["sage", "blue", "lilac", "teal", "amber", "slate"];

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
            <a
              :href="post.url && withBase(post.url)"
              class="arongw-post-card__cover"
              :class="coverClasses[index % coverClasses.length]"
              aria-hidden="true"
            >
              <span class="arongw-post-card__mark">{{ getPrimaryCategory(post).slice(0, 1) }}</span>
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
