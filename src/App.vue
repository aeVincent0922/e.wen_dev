<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";

import Section_1 from "./components/Section_1.vue";
import Section_2 from "./components/Section_2.vue";

// ScrollSmoother需要與ScrollTrigger 一起註冊才能使用
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

onMounted(() => {
  // 初始化ScrollSmoother
  ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 2,
    effects: true,
    normalizeScroll: true,
    ignoreMobileResize: true,
    smoothTouch: 1,
  });
});
</script>

<template>
  <div id="smooth-wrapper" class="h-full">
    <div id="smooth-content">
      <Section_1 />
      <Section_2 />
    </div>
  </div>
</template>
