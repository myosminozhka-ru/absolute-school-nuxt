<template>
  <div class="wrapper auth">
    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'AuthLayout',
  data: () => ({
    // sizes: {
    //   tablet: 1024,
    //   mobile: 768,
    //   window: null
    // },
  }),
  computed: {
    // isMobile() {
    //   // return this.$device.isMobile
    //   return this.sizes.window < this.sizes.mobile;
    // },
    // isTablet() {
    //   // return this.$device.isTablet
    //   return this.sizes.window < this.sizes.tablet && this.sizes.window > this.sizes.mobile;
    // },
    // isDesktop() {
    //   return this.$device.isDesktop
    // },
    // isIos() {
    //   return this.$device.isIos
    // },
    // addClass() {
    //   let addClass = '';
    //     addClass += this.isMobile ? 'isMobile ' : '';
    //     addClass += this.isTablet ? 'isTablet ' : '';
    //     addClass += this.isIos ? 'isIos ' : '';
    //     return addClass;
    // }
  },
  // mounted() {
  //   window.dispatchEvent(new Event('resize'));
  //   this.sizes.window = window.innerWidth;

  //   window.addEventListener('resize', () => {
  //       this.sizes.window = window.innerWidth;
  //   });
  // }
}
</script>
