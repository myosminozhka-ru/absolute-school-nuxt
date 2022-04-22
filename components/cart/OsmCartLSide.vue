<template>
  <div class="cart__l-side">
    <osm-cart-product
      v-for="product in $store.state.cart.products"
      :key="product.basketId"
      :product="product"
    />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'OsmCartLSide',
  components: {
    OsmCartProduct: () => import('./OsmCartProduct.vue'),
  },
  computed: {
    ...mapGetters('cart', {
      products: 'getProducts',
    }),
  },
}
</script>
<style lang="scss" scoped></style>
