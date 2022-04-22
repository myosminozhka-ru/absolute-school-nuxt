<template>
  <div>
    <osm-hn type="h1">Корзина:</osm-hn>
    <h2 @click="addProducts">Click</h2>
    <osm-cart @onArrange="isArrangeModalShow = true" />
    <osm-modal
      type-modal="arrange"
      :is-show="isArrangeModalShow"
      @onClose="isArrangeModalShow = false"
    />
  </div>
</template>
<script>
import { mapActions } from 'vuex'

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
  async fetch() {
    await this.loadProducts()
  },
  methods: {
    ...mapActions('cart', {
      loadProducts: 'loadProducts',
      addProducts: 'addProducts'
    }),
  },
}
</script>
<style lang="scss" scoped></style>
