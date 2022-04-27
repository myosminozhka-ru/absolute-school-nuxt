<template>
  <div>
    <osm-hn v-if="!cart.items" type="h1">Корзина Пуста</osm-hn>
    <osm-hn v-if="cart.items" type="h1">Корзина:</osm-hn>
    <osm-cart v-if="cart.items" @onArrange="isArrangeModalShow = true" />
    <osm-modal
      v-if="cart.items"
      type-modal="arrange"
      :is-show="isArrangeModalShow"
      @onClose="isArrangeModalShow = false"
    />
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'CartPage',
  components: {
    OsmHn: () => import('~/components/typografy/OsmHn.vue'),
    OsmCart: () => import('~/components/cart/OsmCart.vue'),
    OsmModal: () => import('~/components/modal/OsmModal.vue'),
  },
  data: () => ({
    isArrangeModalShow: false,
  }),
  computed: {
    ...mapGetters('cart', {
      cart: 'getCartItems',
    }),
  },
  created() {
    this.loadCart();
  },
  beforeMount() {
    if (!this.cart.items) {
      this.$router.push({ name: 'index' })
      this.$toast.info('Корзина пуста, но вы можете что-то туда добавить')
    }
  },
  methods: {
    ...mapActions('cart', ['loadCart']),
  }
}
</script>
<style lang="scss" scoped></style>
