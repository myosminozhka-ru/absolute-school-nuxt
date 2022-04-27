<template>
  <div>
    <template v-if="getOrders">
      <osm-order-tabs :title="true" :section-list="tabs" :selected="tabs[0]"  />
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
    }),
    tabs() {
      const tabs = [];
      this.getOrders.map(order => {
        if (tabs.includes(order.status)) return false;
        tabs.push(order.status);
        return order;
      });
      return tabs;
    }
  },
  mounted() {
    this.loadOrders();
  },
  methods: {
    ...mapActions('orders', ['loadOrders']),
  },
}
</script>
