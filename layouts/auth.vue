<template>
  <div class="wrapper auth">
    <div class="wrapper__in">
    <div :class="[{'isMobile': isMobile || isIos }, {'isTablet': isTablet }, {'isIos': isIos}]"></div>
      <main class="content">
        <nuxt />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout',
  computed: {
    isMobile() {
      console.log('isMobile', this.$device.isMobile);
      return this.$device.isMobile
    },
    isTablet() {
      console.log('isTablet', this.$device.isTablet);
      return this.$device.isTablet
    },
    isDesktop() {
      console.log('isDesktop', this.$device.isDesktop);
      return this.$device.isDesktop
    },
    isIos() {
      console.log('isIos', this.$device.isIos);
      return this.$device.isIos
    },
  },
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
