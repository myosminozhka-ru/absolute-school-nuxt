<template>
  <div class="wrapper auth">
    <div class="wrapper__in" :class="addClass">
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
    sizes: {
      tablet: 1024,
      mobile: 768,
      window: null
    },
  }),
  computed: {
    isMobile() {
      // return this.$device.isMobile
      return this.sizes.window < this.sizes.mobile;
    },
    isTablet() {
      // return this.$device.isTablet
      return this.sizes.window < this.sizes.tablet && this.sizes.window > this.sizes.mobile;
    },
    isDesktop() {
      return this.$device.isDesktop
    },
    isIos() {
      return this.$device.isIos
    },
    addClass() {
      let addClass = '';
        addClass += this.isMobile || this.isIos ? 'isMobile ' : '';
        addClass += this.isTablet ? 'isTablet ' : '';
        addClass += this.isIos ? 'isIos ' : '';
        return addClass;
    }
  },
  beforeMount() {
        window.addEventListener('resize', () => {
            this.sizes.window = window.innerWidth;
        });
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
