<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline();

onMounted(() => {
  gsap.to(".e", {
    rotateX: 540,
    transformOrigin: "50% 61%",
    duration: 2,
    repeat: -1,
    repeatDelay: 5,
    yoyo: true,
    ease: "power2.inOut",
  });
  gsap.to(".test-square", {
    scrollTrigger: {
      trigger: ".test-square",
      start: "top 50%",
      end: "top 20%",
      markers: true,
      scrub: true,
    },
    x: +300,
    rotate: 1080,
    duration: 2,
  });
});
</script>
<template>
  <div class="h-screen border-2 border-amber-800 bg-light-blue relative">
    <!-- Title_1 -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <span
        class="text-7xl text-white font-black flex items-center text-center align-text-top"
      >
        <span class="e block">e</span>
        <span>.</span>
        <span>w</span>
        <span>e</span>
        <span>n</span>
      </span>
    </div>
    <span
      class="bg-white rounded-lg w-10 h-10 absolute bottom-[20%] left-0 test-square"
    ></span>
  </div>
</template>
