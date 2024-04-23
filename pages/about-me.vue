<template>
  <div class="pf-page">
    <div class="pf-content">
      <Breadcrumb text="About Me" type="h1" />
      <div class="pf-contentList">
        <div class="pf-columns">
          <img class="pf-portrait" src="/img/matte.png" alt="" />

          <p class="pf-facts">
            <span>HTML/SCSS/JS</span>
            <span>GSAP</span>
            <span>Typescript</span>
            <span>Vue.js/Nuxt</span>
            <span>AWS 🤍</span>
          </p>
        </div>
        <div class="pf-columns">
          <p class="pf-name">MATTEO ZUCCHETTI</p>
          <p class="pf-name">MATTEO ZUCCHETTI</p>
        </div>
        <div class="pf-columns">
          <p class="pf-body">
            I'm Matteo, Frontend Developer - Technical Advisor currently at
            PLAYGROUND | digital agency (Cernusco sul Naviglio - remote).<br /><br />What
            I've been doing for the last 10+ years:<br /><br />Front-end
            websites and landing pages, marketing pages, DEM, newsletters and
            PWA/SPA creative development. Team Technical Advisor.<br /><br />Side
            projects: Vue.js, Nuxt, headless Wordpress, AWS and more.
          </p>
          <p class="pf-body">
            Passionate about mountain (hiking, trail running), swimming and
            beers.<br /><br />Had a (short) career as a musician playing piano,
            guitar and bass in a 60/70 hard rock cover band.<br /><br />
            In love with personal growth and finance books.
          </p>
        </div>
      </div>
      <Back />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: "page-transiton",
    mode: "out-in",
    onEnter: (el, done) => enterTransition(el, done),
    onLeave: (el, done) => leaveTransition(el, done),
  },
});
</script>

<style scoped lang="scss">
@use "/assets/css/mq.scss" as *;

.pf-contentList {
  height: 100%;
  display: grid;
  padding: 50px 100px;
  grid-auto-flow: row;
  gap: 100px;
  & > div {
    height: min-content;
  }

  @include mq($until: lg) {
    padding: 50px 0;
    gap: 50px;
  }

  .pf-columns {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    gap: 100px;
    > div:last-child,
    > p:not(.pf-body):last-child {
      text-align: right;
    }

    @include mq($until: lg) {
      grid-template-columns: 1fr;
      gap: 50px;
    }
  }
  .pf-name {
    color: #616161;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 5.12px;
    text-transform: uppercase;
    &:first-child {
      margin-left: -75px;
    }
    &:last-child {
      margin-right: -75px;
    }

    @include mq($until: lg) {
      &:first-child {
        margin-left: 0;
        text-align: center;
      }
      &:last-child {
        display: none;
      }
    }
  }
  .pf-body {
    color: #fff;
    font-family: Montserrat;
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    text-wrap: pretty;

    @include mq($until: lg) {
      font-size: 22px;
    }
  }
  .pf-portrait {
    width: 240px;
    &:last-child {
      justify-self: end;
    }
    @include mq($until: lg) {
      width: 75%;
    }
  }
  .pf-facts {
    color: #fff;
    font-family: Montserrat;
    font-size: 46px;
    font-style: normal;
    font-weight: 300;
    line-height: 120%;

    @include mq($until: lg) {
      font-size: 32px;
    }
    span {
      display: block;
    }
  }
}
</style>
