<template>
  <button @click="router.back()" class="pf-breadcrumb pf-back">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke="#fff"
        stroke-width="4"
        d="M1.506 22.568 22.719 1.354m-.213 21.566L1.293 1.707"
      />
    </svg>
    <span>Back</span>
  </button>
</template>

<script lang="ts" setup>
const router = useRouter();
</script>

<style scoped lang="scss">
@use "/assets/css/mq.scss" as *;

.pf-breadcrumb {
  display: inline-flex;
  place-items: center;
  gap: 15px;

  &.pf-back {
    @include mq($from: lg) {
      display: none;
    }
  }
  span {
    color: #fff;
    font-family: Poppins;
    font-size: 26px;
    font-style: normal;
    line-height: normal;

    @include mq($until: lg) {
      font-size: 22px;
    }
  }
  svg {
    width: 16px;
    height: 16px;
    transition: all 0.3s ease;
  }
  &:hover {
    svg {
      transform: rotate(90deg);
    }
  }
}
</style>
