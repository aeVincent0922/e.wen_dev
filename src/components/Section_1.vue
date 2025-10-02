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
    .set(".first-title", { autoAlpha: 0, yPercent: -100 })
    .set(".vanishing-text", { autoAlpha: 0 })
    .set(".rotation-icon-1", { autoAlpha: 0 })
    .set(".rotation-icon-2", { autoAlpha: 0 })
    .set(".arrow_container", { autoAlpha: 0 })
    .to(".first-title", {
      duration: 1,
      yPercent: 0,
      autoAlpha: 1,
      stagger: 0.2,
      ease: "power2.out",
    })
    .to(
      ".vanishing-text",
      {
        duration: 0.5,
        autoAlpha: 1,
        stagger: 0.5,
        ease: "power2.out",
      },
      "+=0.3"
    )
    .to(".rotation-icon-1", { autoAlpha: 1, duration: 0.5 })
    .to(
      ".rotation-icon-1",
      {
        rotation: +90,
        duration: 0.5,
        repeatDelay: 0.8,
        repeat: -1,
        ease: "power2.out",
      },
      "<"
    )
    .to(".rotation-icon-2", { autoAlpha: 1, duration: 0.5 }, "<")
    .to(".rotation-icon-2", {
      rotation: 15,
      duration: 2,
      ease: "sine.inOut", // 平滑往返
      repeat: -1,
      yoyo: true,
      transformOrigin: "50% 100%", // 底部中心作為支點
    })
    .to(
      ".arrow_container",
      {
        autoAlpha: 1,
        duration: 0.3,
      },
      "<"
    )
    .to(".arrow_down", {
      yPercent: 20,
      repeat: -1,
      duration: 1.3,
      yoyo: true,
      ease: "power2.inOut",
    });

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
  gsap.to(".rotation-icon-1", {
    scrollTrigger: {
      trigger: ".st_2",
      start: "bottom 20%",
      end: "bottom top",
      scrub: true,
    },
    scale: 3,
    rotate: 1080,
    autoAlpha: 0,
    duration: 3,
    yPercent: 500,
    ease: "power2.out",
  });
  gsap.to(".rotation-icon-2", {
    scrollTrigger: {
      trigger: ".st_4",
      start: "top 30%",
      end: "top top",
      scrub: true,
    },
    autoAlpha: 0,
    rotation: 720,
    duration: 5,
    xPercent: 100,
    yPercent: -100,
    ease: "power2.out",
    scale: 1.5,
  });
  const angles = [0, 5, 10, 15]; // 每張紙的旋轉角度
  gsap.to(".stacked-note", {
    rotation: (i) => angles[i], // index 對應旋轉角度
    transformOrigin: "left bottom", // 左下角作為旋轉中心
    duration: 0.8,
    stagger: 0.1, // 依序旋轉，造成展開感
    ease: "power2.out",
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  });
});
</script>
<template>
  <div class="h-screen border-2 border-amber-800 bg-light-blue relative">
    <!-- 校準線 -->
    <!-- <div class="horizontal-line"></div> -->
    <!-- 首頁標題動畫 -->
    <div
      class="container text-6xl leading-20 pt-15 text-white font-black flex flex-col item-center pl-5"
    >
      <div class="w-fit split-title flex st_1">
        <div class="first-title e_1">e</div>
        <div class="vanishing-text">very</div>
        <img
          src="../assets/images/icons/flower_icon.png"
          class="w-[40px] h-[40px] rotation-icon-1"
        />
      </div>
      <div class="w-fit split-title flex st_2">
        <div class="first-title w">w</div>
        <div class="vanishing-text">aning</div>
      </div>
      <div class="w-fit split-title flex st_3">
        <div class="first-title e_2">e</div>
        <div class="vanishing-text">ffort</div>
      </div>
      <div class="w-fit split-title flex st_4 relative">
        <div class="first-title n">n</div>
        <div class="vanishing-text">udges</div>
        <img
          src="../assets/images/icons/tree_icon.png"
          class="w-[80px] h-[80px] rotation-icon-2 absolute -right-11 bottom-2 -z-10"
        />
      </div>
    </div>
    <!-- scroll down -->
    <div
      class="absolute bottom-0 flex w-full text-white text-2xl justify-center items-center flex-col arrow_container"
    >
      <span>scroll down</span>
      <span class="rotate-90 arrow_down">》</span>
    </div>
    <!-- scroll 顯示 -->
    <div class="reveal-container">
      <div
        class="stacked-note rounded-2xl w-80 h-80 absolute -bottom-15 left-0 bg-amber-600 z-40 flex items-center justify-center text-white text-2xl"
      >
        1
      </div>
      <div
        class="stacked-note rounded-2xl w-80 h-80 absolute -bottom-15 left-0 bg-green-800 z-30 flex items-center justify-center text-white text-2xl"
      >
        2
      </div>
      <div
        class="stacked-note rounded-2xl w-80 h-80 absolute -bottom-15 left-0 bg-indigo-700 z-20 flex items-center justify-center text-white text-2xl"
      >
        3
      </div>
      <div
        class="stacked-note rounded-2xl w-80 h-80 absolute -bottom-15 left-0 bg-sky-800 z-10 flex items-center justify-center text-white text-2xl"
      >
        4
      </div>
    </div>
  </div>
</template>
