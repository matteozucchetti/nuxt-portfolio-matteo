<template>
  <div class="pf-page">
    <div class="pf-content">
      <Breadcrumb text="Contact Me" type="h1" />
      <div class="pf-contentList">
        <div class="pf-columns">
          <img class="pf-portrait" src="/img/matte.png" alt="" />

          <p class="pf-facts">
            <span>Feel free<br />to get in touch.</span>
          </p>
        </div>
        <div class="pf-columns">
          <p class="pf-name">MATTEO ZUCCHETTI</p>
          <p class="pf-name">MATTEO ZUCCHETTI</p>
        </div>
        <div class="pf-columns">
          <p class="pf-social">
            <a href="https://www.github.com/matteozucchetti/" target="_blank">
              GitHub
            </a>
            <br />
            <a
              href="https://www.linkedin.com/in/matteo-zucchetti"
              target="_blank"
            >
              LinkedIn
            </a>
            <br /><br />
            <a href="" target="_blank">
              Curriculum<br />Vitae<DownloadIcon />
            </a>
          </p>
          <div>
            <p class="pf-email">
              <a href="mailto:dev@matteozucchetti.it">
                dev@matteozucchetti.it
              </a>
            </p>
            <p class="pf-phone">+39 366 728 1808</p>
          </div>
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
  .pf-portrait {
    width: 240px;
    &:last-child {
      justify-self: end;
    }

    @include mq($until: lg) {
      width: 75%;
    }
  }
  .pf-email {
    color: #fff;
    font-family: Montserrat;
    font-size: 26px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;

    a {
      color: #fff;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }

    @include mq($until: lg) {
      font-size: 24px;
    }
  }
  .pf-phone {
    color: #fff;
    font-family: Montserrat;
    font-size: 46px;
    font-style: normal;
    font-weight: 300;
    line-height: 160%;

    @include mq($until: lg) {
      font-size: 32px;
    }
  }
  .pf-social {
    color: #fff;
    font-family: Montserrat;
    font-size: 46px;
    font-style: normal;
    font-weight: 300;
    line-height: 120%; /* 55.2px */

    @include mq($until: lg) {
      font-size: 32px;
    }

    a {
      color: #fff;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
      svg {
        display: inline-block;
        margin: 0 20px;
      }
    }
  }
}
</style>
