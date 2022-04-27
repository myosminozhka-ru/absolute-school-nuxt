<template>
  <div class="wrapper">
    <div
      :class="`wrapper__in${isMobile ? ' isMobile' : ''}${
        isTablet ? ' isTablet' : ''
      }`"
    >
      <osm-header />
      <main class="content">
        <nuxt />
      </main>
      <osm-footer />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'DefaultLayout',
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
  },
  mounted() {
    this.loadProducts()
    this.loadCart()
    this.loadOrders()
    setTimeout(() => {
      this.$toast.info(
        'Привет, это информационное оповещение, оно не имеет смысла, мы просто тестируем'
      )
    }, 1000)
    setTimeout(() => {
      this.$toast.success('А это сообщение об успехе')
    }, 1500)
    setTimeout(() => {
      this.$toast.error('А такое будете получать когда возникнет ошибка')
    }, 2000)
  },
  methods: {
    ...mapActions('products', ['loadProducts']),
    ...mapActions('cart', ['loadCart']),
    ...mapActions('orders', ['loadOrders']),
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  background: rgba(255, 249, 228, 1) url('~/assets/img/bg_site.png') 0;
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
</style>
