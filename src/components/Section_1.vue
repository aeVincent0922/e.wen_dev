<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger, SplitText);

onMounted(() => {
  const tl_1 = gsap.timeline();
  // const st_1 = SplitText.create(".split-title", {
  //   type: "chars, words",
  //   mask: "words",
  //   autoSplit: true,
  // });
  // const st_2 = SplitText.create(".vanishing-text", {
  //   type: "chars, words",
  //   mask: "chars",
  //   autoSplit: true,
  // });

  tl_1
    .set(".first-title", { autoAlpha: 0, yPercent: 100 })
    .set(".vanishing-text", { autoAlpha: 0 })
    .to(".first-title", {
      duration: 1,
      yPercent: 0,
      autoAlpha: 1,
      stagger: 0.1,
      ease: "power2.out",
    })
    .to(
      ".vanishing-text",
      {
        duration: 1,
        autoAlpha: 1,
        stagger: 0.6,
        ease: "power2.out",
      },
      "+=0.8"
    );

  // scrollTrigger 的部分分開寫，避免汙染到timeline
  gsap.to(".st_1", {
    scrollTrigger: {
      trigger: ".st_1",
      start: "bottom 15%",
      end: "bottom top",
      scrub: true,
    },
    xPercent: -100,
    duration: 2,
    ease: "power2.in",
  });
  gsap.to(".st_3", {
    scrollTrigger: {
      trigger: ".st_3",
      start: "top 20%",
      end: "top top",
      scrub: true,
    },
    xPercent: -200,
    duration: 3,
    ease: "power2.in",
  });
  gsap.to(".st_2", {
    scrollTrigger: {
      trigger: ".st_2",
      start: "bottom 20%",
      end: "bottom top",
      scrub: true,
    },
    xPercent: 200,
    duration: 2,
    ease: "power2.in",
  });
  gsap.to(".st_4", {
    scrollTrigger: {
      trigger: ".st_4",
      start: "top 30%",
      end: "top top",
      scrub: true,
    },
    xPercent: 300,
    duration: 5,
    ease: "power2.in",
  });
});
</script>
<template>
  <div class="h-screen border-2 border-amber-800 bg-light-blue relative">
    <!-- 校準線 -->
    <!-- <div class="horizontal-line"></div> -->
    <!-- 首頁標題動畫 -->
    <div
      class="container absolute text-6xl leading-20 top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-black flex flex-col item-center pl-5"
    >
      <div class="w-fit split-title flex st_1">
        <div class="first-title">e</div>
        <!-- <div class="e_1_comma hidden">.</div> -->
        <div class="vanishing-text">very</div>
      </div>
      <div class="w-fit split-title flex st_2">
        <div class="first-title">w</div>
        <div class="vanishing-text">aning</div>
      </div>
      <div class="w-fit split-title flex st_3">
        <div class="first-title">e</div>
        <div class="vanishing-text">ffort</div>
      </div>
      <div class="w-fit split-title flex st_4">
        <div class="first-title">n</div>
        <div class="vanishing-text">udges</div>
      </div>
    </div>
  </div>
</template>
