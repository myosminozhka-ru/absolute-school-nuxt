<template>
  <div>
    <osm-hn type="h1">Корзина:</osm-hn>
    <osm-cart />
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'CartPage',
  components: {
    OsmHn: () => import('~/components/typografy/OsmHn.vue'),
    OsmCart: () => import('~/components/cart/OsmCart.vue'),
  },
  mounted() {
    this.loadProducts()
  },
  methods: {
    ...mapActions('cart', {
      loadProducts: 'loadProducts',
    }),
  },
}
</script>
<style lang="scss" scoped></style>
