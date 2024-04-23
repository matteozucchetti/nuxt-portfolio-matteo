<template>
  <div class="pf-page">
    <div class="pf-content">
      <Breadcrumb text="Projects" type="p" />
      <div class="pf-contentList">
        <ContentDoc :path="$route.path">
          <template v-slot="{ doc }">
            <div class="pf-columns">
              <div class="pf-sticky">
                <div>
                  <h1>{{ doc.head }}</h1>
                  <p class="pf-body">{{ doc.subhead }}</p>
                  <img class="pf-logo" :src="doc.logo"></img>
                </div>
              </div>
              <div>
              <ContentRenderer :value="doc" />
              <Back style="display: flex"></Back>
            </div>
            </div>
          </template>
          <template #not-found> <h1>Document not found</h1> </template>
        </ContentDoc>
      </div>
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
  padding: 50px 100px;
  & > div {
    height: min-content;
  }

  @include mq($until: lg) {
    padding: 50px 0;
    gap: 50px;
  }

  h1 {
    margin-bottom: 20px;
    font-size: 42px;
    font-weight: 800;
  }

  .pf-logo{
    height: 100px;
  }

  .pf-columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0,1fr));
    justify-content: space-between;
    gap: 100px;

    @include mq($until: lg) {
      grid-template-columns: 1fr;
      gap: 50px;
    }

    :deep(p) {
      margin-bottom: 20px;
    }

    :deep(figcaption) {
      margin-top: 10px;
      font-size: 14px;
      color: #616161;
    }

    .pf-sticky div{
      position: sticky;
      top: 50px;
    }
  }

  .pf-body, :deep(p) {
    color: #fff;
    font-family: Montserrat;
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    text-align: justify;

    @include mq($until: lg) {
      font-size: 22px;
    }
  }
}
</style>
