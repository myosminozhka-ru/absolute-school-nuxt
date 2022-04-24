<template>
  <div class="wrapper">
    <div
      class="wrapper__in"
      :class="{ isMobile: $device.isMobile, isTablet: $device.isTablet }"
    >
      <osm-header />
      <main class="content">
        {{ layout }}
        <nuxt />
      </main>
      <osm-footer />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  computed: {
    layout() {
      return this.$device.isMobile;
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    pointer-events: none;
    height: 100%;
    background: rgba(255, 249, 228, 1) url('~/assets/img/bg_site.png') 0;
    z-index: 1;
  }
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
</style>
