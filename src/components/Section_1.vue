<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger, SplitText);

onMounted(() => {
  const tl = gsap.timeline();
  // gsap.to(".e", {
  //   rotateY: 540,
  //   transformOrigin: "50% 50%",
  //   duration: 2,
  //   repeat: -1,
  //   repeatDelay: 3,
  //   yoyo: true,
  //   ease: "power2.inOut",
  // });
  // gsap.to(".test-square", {
  //   scrollTrigger: {
  //     trigger: ".test-square",
  //     start: "top 50%",
  //     end: "top 20%",
  //     markers: false,
  //     scrub: true,
  //   },
  //   x: +300,
  //   rotate: 1080,
  //   duration: 2,
  // });
  const st_1 = SplitText.create(".split-title", {
    type: "chars, words",
    mask: "chars",
    autoSplit: true,
  });
  const st_2 = SplitText.create(".vanishing-text", {
    type: "chars, words",
    mask: "chars",
    autoSplit: true,
  });

  tl.from(st_1.chars, {
    duration: 0.5,
    y: -50,
    autoAlpha: 0,
    stagger: 0.1,
  })
    .to(st_2.words, {
      duration: 1,
      opacity: 0,
      ease: "power2.out",
    })
    .to(".e_1", { duration: 0.1, yPercent: 300 })
    .to(".w", { duration: 0.1, yPercent: 200 })
    .to(".e_2", { duration: 0.1, yPercent: 100 })
    .to(".n", { duration: 0.2, xPercent: 66, ease: "power2.out" })
    .to(".e_2", { duration: 0.2, xPercent: 68, ease: "power2.out" })
    .to(".w", { duration: 0.2, xPercent: 30, ease: "power2.out" })
    .to(".e_1", { duration: 1, xPercent: 10, ease: "bounce.out" })
    .set(".e_1_comma", { display: "block" })
    .to(".e_1_comma", { duration: 0.8, ease: "bounce.out", opacity: 1 });
});
</script>
<template>
  <div class="h-screen border-2 border-amber-800 bg-light-blue relative">
    <!-- 校準線 -->
    <!-- <div class="horizontal-line"></div> -->
    <!-- 首頁標題動畫 -->
    <div
      class="container absolute text-7xl top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-black leading-23 flex flex-col item-center pl-15"
    >
      <div class="w-fit split-title flex e_1">
        e
        <div class="opacity-0 e_1_comma hidden">.</div>
        <div class="vanishing-text">very</div>
      </div>
      <div class="w-fit split-title flex w">
        w
        <div class="vanishing-text">aning</div>
      </div>
      <div class="w-fit split-title flex e_2">
        e
        <div class="vanishing-text">ffort</div>
      </div>
      <div class="w-fit split-title flex n">
        n
        <div class="vanishing-text">udges</div>
      </div>
    </div>
  </div>
</template>
