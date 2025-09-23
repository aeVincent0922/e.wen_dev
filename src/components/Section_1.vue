<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.to(".test-square", {
    scrollTrigger: {
      trigger: ".test-square",
      start: "top 50%",
      end: "top 20%",
      markers: true,
      scrub: true,
    },
    x: +600,
    rotate: 360,
    duration: 2
  });
});
</script>
<template>
  <div class="h-screen border-2 border-amber-800 bg-light-blue relative">
    <span
      class="bg-white rounded-lg w-10 h-10 absolute bottom-[20%] left-0 test-square"
    ></span>
  </div>
</template>
