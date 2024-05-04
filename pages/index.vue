<template>
  <div class="pf-grid">
    <div class="pf-background">
      <p ref="backgroundParagraph">&nbsp;</p>
      <span
        >Made with Nuxt<br />Deployed and hosted with AWS Amplify<br />Work in
        progress</span
      >
    </div>

    <NuxtLink
      to="/about-me"
      class="pf-tile about-me"
      @mouseenter="(e) => !isMobile && onMouseOver(e, 'About me')"
    >
      <div>
        <h2>About me</h2>
      </div>
    </NuxtLink>

    <NuxtLink
      to="/dev"
      class="pf-tile dev"
      @mouseenter="(e) => !isMobile && onMouseOver(e, 'Dev')"
    >
      <div>
        <h2>Dev</h2>
      </div>
    </NuxtLink>

    <NuxtLink
      to="/contact-me"
      class="pf-tile contact-me"
      @mouseenter="(e) => !isMobile && onMouseOver(e, 'Contact me')"
    >
      <div>
        <h2>Contact me</h2>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(SplitText, Flip);

const isMobile = computed(() => window.innerWidth < 1024);

definePageMeta({
  pageTransition: {
    css: false,
    mode: "out-in",
    onEnter: (el, done) => homeEnterTransition(el, done),
    onLeave: (el, done) => homeLeaveTransition(el, done),
  },
});

const backgroundParagraph = ref<HTMLParagraphElement | null>(null);

const onMouseOver = (e: MouseEvent, text: string) => {
  const targetElement = e.target as Element;
  const title = text ? text : targetElement.querySelector("h2")?.textContent;

  if (!backgroundParagraph.value) return;

  gsap.to(backgroundParagraph.value, {
    autoAlpha: 0,
    duration: 0.15,

    onComplete: () => {
      backgroundParagraph.value!.textContent = title || "";
      gsap.to(backgroundParagraph.value, {
        autoAlpha: 1,
        duration: 0.15,
      });

      const split = new SplitText(backgroundParagraph.value);

      gsap.from(split.chars, {
        duration: 0.3,
        y: 15,
        autoAlpha: 0,
        stagger: 0.05,
        delay: 0.15,
      });
    },
  });
};
</script>

<style scoped lang="scss">
@use "/assets/css/mq.scss" as *;
@use "/assets/css/functions.scss" as *;

.pf-background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;
  place-content: center;
  grid-auto-flow: column;
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: vw(180);
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  pointer-events: none;
  z-index: -1;
  text-transform: uppercase;

  span {
    font-size: 14px;
    text-transform: none;
    text-align: right;
    font-weight: 500;
    position: absolute;
    top: 30px;
    right: 30px;
  }
  p {
    filter: blur(3px);
  }
}
.pf-grid {
  display: grid;
  grid-gap: 20px;
  width: 100vw;
  position: relative;
  padding: 20px;
  transition: all 0.5s;
  grid-template-columns: 2fr 3fr 2fr;

  @include mq($until: lg) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
    padding: 10px;
  }
  .pf-tile {
    background: #40404070;
    border-radius: 10px;
    padding: 30px;
    display: grid;
    align-content: end;
    transition: background 0.15s ease;
    &:hover,
    &:focus {
      background: #20202070;
    }

    @include mq($until: lg) {
      padding: 20px;
    }

    h2 {
      color: #fff;
      font-family: Poppins;
      font-size: 24px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      span {
        font-weight: 400;
      }

      @include mq($until: lg) {
        font-size: 24px;
      }
    }
  }
}
</style>
