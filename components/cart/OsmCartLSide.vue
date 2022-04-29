<template>
  <div class="cart__l-side">
    <osm-cart-product
      v-for="item in getItems"
      :key="item.basketId"
      :item="item"
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
      cart: 'getCartItems',
      getItems: 'getItems',
    }),
    ...mapGetters('products', {
      products: 'getProducts',
    }),
  },
}
</script>
<style lang="scss"></style>
