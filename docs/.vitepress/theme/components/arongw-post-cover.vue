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
    | "balance"
    | "spiral"
    | "flow"
    | "branch"
    | "contour";
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

    <span v-else-if="template === 'balance'" class="cover-balance">
      <i class="balance-beam"></i>
      <i class="balance-stem"></i>
      <i class="balance-core"></i>
      <i class="balance-module"></i>
      <i class="balance-node node-1"></i>
      <i class="balance-node node-2"></i>
      <i class="balance-node node-3"></i>
    </span>

    <span v-else-if="template === 'spiral'" class="cover-spiral">
      <svg class="curve-svg spiral-svg" viewBox="0 0 300 180" role="presentation">
        <path
          class="curve-line curve-main"
          d="M151 92 C145 82 132 86 133 99 C135 116 158 122 174 110 C198 92 190 58 160 48 C118 34 83 65 83 104 C83 146 127 164 169 151 C220 135 245 82 220 37"
        />
        <path class="curve-line curve-soft" d="M220 37 C230 25 244 20 264 22" />
        <polygon class="curve-core" points="151,84 160,91 157,103 146,106 138,97 141,87" />
        <circle class="curve-node node-1" cx="84" cy="104" r="6" />
        <circle class="curve-node node-2" cx="169" cy="151" r="6" />
        <circle class="curve-node node-3" cx="220" cy="37" r="6" />
      </svg>
    </span>

    <span v-else-if="template === 'flow'" class="cover-flow">
      <svg class="curve-svg flow-svg" viewBox="0 0 300 180" role="presentation">
        <path class="curve-line curve-main" d="M24 42 C101 42 76 133 151 97 C220 64 202 137 276 128" />
        <path class="curve-line curve-soft curve-dashed" d="M25 69 C94 70 91 148 158 119 C218 93 218 151 274 150" />
        <rect class="curve-window" x="126" y="70" width="54" height="56" rx="8" />
        <polygon class="curve-core" points="153,84 163,95 153,106 143,95" />
        <circle class="curve-node node-1" cx="24" cy="42" r="6" />
        <circle class="curve-node node-2" cx="25" cy="69" r="5" />
        <circle class="curve-node node-3" cx="276" cy="128" r="7" />
      </svg>
    </span>

    <span v-else-if="template === 'branch'" class="cover-branch">
      <svg class="curve-svg branch-svg" viewBox="0 0 300 180" role="presentation">
        <path class="curve-line curve-main" d="M42 96 C84 96 93 84 126 75 C157 66 167 47 197 34" />
        <path class="curve-line curve-main" d="M126 75 C165 77 180 78 228 77" />
        <path class="curve-line curve-main" d="M113 80 C145 96 167 119 204 139" />
        <path class="curve-line curve-soft curve-dashed" d="M157 67 C181 51 215 45 255 51" />
        <polygon class="curve-core" points="42,84 54,91 54,104 42,111 30,103 30,90" />
        <circle class="curve-node node-1" cx="197" cy="34" r="6" />
        <circle class="curve-node node-2" cx="228" cy="77" r="7" />
        <circle class="curve-node node-3" cx="204" cy="139" r="6" />
        <circle class="curve-node node-4" cx="255" cy="51" r="5" />
      </svg>
    </span>

    <span v-else class="cover-contour">
      <svg class="curve-svg contour-svg" viewBox="0 0 300 180" role="presentation">
        <path
          class="curve-line contour-line contour-1"
          d="M26 91 C31 40 78 17 137 25 C190 6 264 39 274 88 C283 132 235 165 176 153 C123 174 47 151 26 91 Z"
        />
        <path
          class="curve-line contour-line contour-2"
          d="M55 91 C56 57 91 42 132 48 C174 29 232 53 242 91 C251 122 214 142 172 130 C131 149 75 128 55 91 Z"
        />
        <path
          class="curve-line contour-line contour-3 curve-dashed"
          d="M91 92 C91 68 115 61 142 66 C171 51 211 69 212 96 C213 117 184 124 160 116 C133 130 101 117 91 92 Z"
        />
        <path
          class="curve-line contour-line contour-4"
          d="M122 92 C123 77 139 73 154 78 C170 69 190 80 189 96 C188 109 170 112 158 106 C141 116 126 107 122 92 Z"
        />
        <polygon class="curve-core" points="166,80 178,90 174,104 160,108 151,97 155,85" />
        <circle class="curve-node node-1" cx="231" cy="59" r="6" />
      </svg>
    </span>
  </span>
</template>
