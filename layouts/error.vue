<template>
  <div class="wrapper">
    <div
      v-if="error.statusCode === 404"
      class="wrapper__in"
      :class="{ isMobile: $device.isMobile, isTablet: $device.isTablet }"
    >
      <osm-subtract />
      <main class="content">
        <nuxt />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorLayout',
  components: {
    OsmSubtract: () => import('~/components/subtract/OsmSubtract.vue'),
    OsmButton: () => import('~/components/global/OsmButton.vue'),
  },
  props: {
    error: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
<style lang="scss">
.wrapper {
  background: rgba(255, 249, 228, 1) url('~/assets/img/bg_site.svg') 0;
  // &:before {
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   bottom: 0;
  //   left: 0;
  //   right: 0;
  //   width: 100%;
  //   pointer-events: none;
  //   height: 100%;
  //   background: rgba(255, 249, 228, 1) url('~/assets/img/bg_site.png') 0;
  //   z-index: 1;
  // }
  &__in {
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: vw(40) vw(150) vw(100) vw(150);
    position: relative;
    &.isTablet {
      padding: 22px 15px 50px 15px;
    }
    &.isMobile {
      padding: 22px 15px 50px 15px;
    }
  }
}

.page_404 {
  position: relative;
  height: 100vh;
  &:before {
    background: rgba(255, 249, 228, 39%) url(~/assets/img/bg_site.png) 0;
  }
}
.page_error {
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  max-width: vw(1485);
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  &__image {
    width: 100%;
    pointer-events: none;
    position: relative;
    svg {
      width: 100%;
      height: auto;
    }
    .sub_small {
      width: vw(62);
      height: vw(64);
      position: absolute;
      top: vw(25);
      pointer-events: none;
      left: vw(73);
      animation: 15s linear 0s normal none infinite running twisting;
    }
    .sub_small2 {
      width: vw(100);
      height: vw(103);
      bottom: vw(27);
      right: vw(201);
      position: absolute;
      pointer-events: none;
      animation: 15s linear 0s normal none infinite running twisting;
    }
  }
  &__text {
    max-width: vw(630);
    width: 100%;
    position: relative;
    left: vw(-102);
    &--title {
      margin-bottom: vw(40);
      font-family: 'Jingleberry', serif;
      font-style: normal;
      font-weight: 900;
      font-size: vw(40);
      color: #424242;
    }
    &--img {
      position: absolute;
      right: vw(-195);
      width: vw(296);
      height: vw(646);
      top: 50%;
      margin-top: vw(-294);
    }
  }
  .button--back {
    width: vw(310);
    font-size: vw(31);
  }
}
.isMobile {
  overflow: auto;
  overflow-x: hidden;
  .page_error {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    margin: 0;
    max-width: 100%;
    &__image {
      width: 416px;
      position: relative;
      right: -40px;
      .sub_small {
        width: 31px;
        height: 32px;
        top: 11px;
        left: 36px;
      }
      .sub_small2 {
        width: 50px;
        height: 52px;
        right: 96px;
        bottom: 13px;
      }
    }
    &__text {
      max-width: 100%;
      left: 0;
      &--title {
        font-size: 30px;
        margin-bottom: 30px;
      }
      &--img {
        display: none;
      }
    }
    .button--back {
      margin-left: auto;
      margin-right: auto;
      font-size: 20px;
      width: 190px;
    }
  }
}
</style>
