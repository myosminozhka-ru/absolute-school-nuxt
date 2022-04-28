<template>
  <div>
    <template v-if="getOrders">
      <osm-order-tabs :title="true" :section-list="tabs" :selected="section"  />
      <osm-orders />
    </template>
    <template v-else>
      <div class="products__loader">
        <osm-loader />
      </div>
    </template>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'OrdersPage',
  components: {
    OsmOrders: () => import('~/components/orders/OsmOrders.vue'),
  },
  computed: {
    ...mapGetters('orders', {
      getOrders: 'getOrders',
      section: 'getSection',
      tabs: 'getTabs'
    }),
  },
  created() {
    this.loadOrders();
  },
  methods: {
    ...mapActions('orders', ['loadOrders']),
  },
}
</script>
