<script setup lang="ts" name="ArongwPostCover">
defineProps<{
  template:
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
    | "balance";
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

    <span v-else-if="template === 'converge'" class="cover-converge">
      <i class="converge-block block-1"></i>
      <i class="converge-block block-2"></i>
      <i class="converge-block block-3"></i>
      <i class="converge-block block-4"></i>
      <i class="converge-block block-5"></i>
      <i class="converge-block block-6"></i>
      <i class="converge-core"></i>
    </span>

    <span v-else-if="template === 'orbit'" class="cover-orbit">
      <i class="orbit-ring ring-1"></i>
      <i class="orbit-ring ring-2"></i>
      <i class="orbit-core"><b></b></i>
      <i class="orbit-node node-1"></i>
      <i class="orbit-node node-2"></i>
      <i class="orbit-node node-3"></i>
      <i class="orbit-node node-4"></i>
    </span>

    <span v-else-if="template === 'bridge'" class="cover-bridge">
      <i class="bridge-deck"></i>
      <i class="bridge-arm arm-1"></i>
      <i class="bridge-arm arm-2"></i>
      <i class="bridge-support support-1"></i>
      <i class="bridge-support support-2"></i>
      <i class="bridge-core"></i>
      <i class="bridge-node node-1"></i>
      <i class="bridge-node node-2"></i>
    </span>

    <span v-else-if="template === 'split'" class="cover-split">
      <i class="split-module module-1"><b></b></i>
      <i class="split-module module-2"><b></b></i>
      <i class="split-connector"></i>
      <i class="split-node node-1"></i>
      <i class="split-node node-2"></i>
    </span>

    <span v-else-if="template === 'ribbon'" class="cover-ribbon">
      <i class="ribbon-segment segment-1"></i>
      <i class="ribbon-segment segment-2"></i>
      <i class="ribbon-segment segment-3"></i>
      <i class="ribbon-segment segment-4"></i>
      <i class="ribbon-fold fold-1"></i>
      <i class="ribbon-fold fold-2"></i>
      <i class="ribbon-node"></i>
    </span>

    <span v-else-if="template === 'honeycomb'" class="cover-honeycomb">
      <i class="honeycomb-cell cell-1"><b></b></i>
      <i class="honeycomb-cell cell-2"><b></b></i>
      <i class="honeycomb-cell cell-3"><b></b></i>
      <i class="honeycomb-cell cell-4"><b></b></i>
      <i class="honeycomb-cell cell-5"><b></b></i>
      <i class="honeycomb-cell cell-6"><b></b></i>
      <i class="honeycomb-core"></i>
    </span>

    <span v-else-if="template === 'waveform'" class="cover-waveform">
      <i class="wave-segment segment-1"></i>
      <i class="wave-segment segment-2"></i>
      <i class="wave-segment segment-3"></i>
      <i class="wave-segment segment-4"></i>
      <i class="wave-segment segment-5"></i>
      <i class="wave-segment segment-6"></i>
      <i class="wave-node node-1"></i>
      <i class="wave-node node-2"></i>
      <i class="wave-node node-3"></i>
      <i class="wave-window"></i>
    </span>

    <span v-else-if="template === 'nested'" class="cover-nested">
      <i class="nested-frame frame-1"></i>
      <i class="nested-frame frame-2"></i>
      <i class="nested-frame frame-3"></i>
      <i class="nested-frame frame-4"></i>
      <i class="nested-core"></i>
    </span>

    <span v-else class="cover-balance">
      <i class="balance-beam"></i>
      <i class="balance-stem"></i>
      <i class="balance-core"></i>
      <i class="balance-module"></i>
      <i class="balance-node node-1"></i>
      <i class="balance-node node-2"></i>
      <i class="balance-node node-3"></i>
    </span>
  </span>
</template>
