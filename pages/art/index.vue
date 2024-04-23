<template>
  <div class="pf-page">
    <div class="pf-content">
      <Breadcrumb text="Dev" type="h1" />
      <div class="pf-contentList">
        <ContentList path="/dev" v-slot="{ list }">
          <div v-for="article in list" :key="article._path">
            <NuxtLink :to="article._path" class="pf-tile">
              <h2>{{ article.title }}</h2>
              <p>{{ article.description }}</p>
            </NuxtLink>
          </div>
        </ContentList>
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
@use "/assets/css/functions.scss" as *;

.pf-contentList {
  height: 100%;
  display: grid;
  padding: 50px 100px;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  & > div {
    height: min-content;
  }

  @include mq($until: lg) {
    padding: 50px 0;
    gap: 10px;
    grid-template-columns: repeat(1, 1fr);
    margin-left: -25px;
    margin-right: -25px;
  }

  .pf-tile {
    background: #40404070;
    border-radius: 10px;
    padding: 60px 30px;
    display: grid;
    align-content: end;
    transition: background 0.15s ease;
    &:hover,
    &:focus {
      background: #20202070;
    }

    @include mq($until: lg) {
      padding: 40px 20px;
    }

    h2 {
      color: #fff;
      font-family: Poppins;
      font-size: 22px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      letter-spacing: 2px;
      span {
        font-weight: 400;
      }

      @include mq($until: lg) {
        font-size: vw(18, 375);
      }
    }

    p {
      color: #fff;
      font-family: Poppins;
      font-size: 16px;
      margin-top: 10px;

      @include mq($until: lg) {
        font-size: vw(14, 375);
      }
    }
  }
}
</style>
