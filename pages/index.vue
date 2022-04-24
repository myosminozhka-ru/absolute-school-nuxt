<template>
  <div>
    <template v-if="products.products">
      <osm-tabs-blocks :section-list="products.sections" :selected="section" />
      <osm-products />
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
  name: 'IndexPage',
  components: {
    OsmProducts: () => import('~/components/products/OsmProducts.vue'),
    OsmLoader: () => import('~/components/global/OsmLoader.vue'),
  },
  layout: 'default',
  async fetch() {
    await this.addProducts();
  },
  computed: {
    ...mapGetters({
      filteredProducts: 'products/getFilteredProducts',
      products: 'products/getProducts',
      section: 'products/getSection',
    }),
  },
  mounted() {
    
    setTimeout(() => {
      this.$toast.info('Привет, это информационное оповещение, оно не имеет смысла, мы просто тестируем');
    }, 1000)
  },
  methods: {
    ...mapActions('products', ['addProducts']),
  },
}
</script>

<style lang="scss" scoped>
.products {
  &__loader {
    width: vw(200);
    margin: 0 auto;
    font-size: 0;
  }
}
</style>
