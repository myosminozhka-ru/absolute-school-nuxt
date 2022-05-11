<template>
  <div class="wrapper auth">
    <div class="wrapper__in" :class="addClass">
      <div style="display: none" :class="[addClass, {'test': true}]">{{addClass}}</div>
      <main class="content">
        <nuxt />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout',
  data: () => ({
    addClass: null
  }),
  computed: {
    isMobile() {
      return this.$device.isMobile
    },
    isTablet() {
      return this.$device.isTablet
    },
    isDesktop() {
      return this.$device.isDesktop
    },
    isIos() {
      return this.$device.isIos
    },
    computedDevises() {
      const {isMobile,isTablet, isDesktop, isIos} = this
      return {
        isMobile,
        isTablet,
        isDesktop,
        isIos,
      }
    }
  },
  watch: {
    computedDevises: {
      handler(val) {
        this.addClass = '';
        this.addClass += val.isMobile || val.isIos ? 'isMobile ' : '';
        this.addClass += val.isTablet ? 'isTablet ' : '';
        this.addClass += val.isIos ? 'isIos ' : '';
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  background: rgba(255, 249, 228, 1) url('~/assets/img/bg_site.svg') 0 0 repeat;
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
    padding: 0;
    position: relative;
    padding: 0;
    &.isTablet {
      padding: 0;
    }
    &.isMobile {
      padding: 0;
    }
  }
}
</style>
