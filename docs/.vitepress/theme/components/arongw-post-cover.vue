<script setup lang="ts" name="ArongwPostCover">
defineProps<{
  template: "network" | "timeline" | "chip" | "path" | "scan" | "converge";
  tone: "coral" | "sage" | "blue" | "lilac" | "teal" | "amber";
  variant: 1 | 2 | 3;
}>();
</script>

<template>
  <span class="arongw-cover-art" :class="[`is-${template}`, `tone-${tone}`, `variant-${variant}`]" aria-hidden="true">
    <span v-if="template === 'network'" class="cover-network">
      <i class="network-line line-1"></i>
      <i class="network-line line-2"></i>
      <i class="network-line line-3"></i>
      <i class="network-line line-4"></i>
      <i class="network-line line-5"></i>
      <i class="network-core"><b></b></i>
      <i class="network-node node-1"></i>
      <i class="network-node node-2"></i>
      <i class="network-node node-3"></i>
      <i class="network-node node-4"></i>
      <i class="network-node node-5"></i>
    </span>

    <span v-else-if="template === 'timeline'" class="cover-timeline">
      <i class="timeline-block block-1"></i>
      <i class="timeline-block block-2"></i>
      <i class="timeline-block block-3"></i>
      <i class="timeline-block block-4"></i>
      <i class="timeline-axis"></i>
      <i class="timeline-dot dot-1"></i>
      <i class="timeline-dot dot-2"></i>
      <i class="timeline-dot dot-3"></i>
    </span>

    <span v-else-if="template === 'chip'" class="cover-chip">
      <i class="chip-pin pin-top"></i>
      <i class="chip-pin pin-right"></i>
      <i class="chip-pin pin-bottom"></i>
      <i class="chip-pin pin-left"></i>
      <i class="chip-body"><b></b></i>
      <i class="chip-trace trace-1"></i>
      <i class="chip-trace trace-2"></i>
      <i class="chip-node node-1"></i>
      <i class="chip-node node-2"></i>
    </span>

    <span v-else-if="template === 'path'" class="cover-path">
      <i class="path-facet facet-1"></i>
      <i class="path-facet facet-2"></i>
      <i class="path-facet facet-3"></i>
      <i class="path-route route-1"></i>
      <i class="path-route route-2"></i>
      <i class="path-node node-1"></i>
      <i class="path-node node-2"></i>
    </span>

    <span v-else-if="template === 'scan'" class="cover-scan">
      <i class="scan-ring ring-1"></i>
      <i class="scan-ring ring-2"></i>
      <i class="scan-ring ring-3"></i>
      <i class="scan-core"></i>
      <i class="scan-beam"></i>
      <i class="scan-node node-1"></i>
      <i class="scan-node node-2"></i>
    </span>

    <span v-else class="cover-converge">
      <i class="converge-block block-1"></i>
      <i class="converge-block block-2"></i>
      <i class="converge-block block-3"></i>
      <i class="converge-block block-4"></i>
      <i class="converge-block block-5"></i>
      <i class="converge-block block-6"></i>
      <i class="converge-core"></i>
    </span>
  </span>
</template>
