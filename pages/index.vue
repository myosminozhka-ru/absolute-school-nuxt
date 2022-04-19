<template>
  <div>
    <osm-tabs-blocks />
    <osm-products />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  components: {
    OsmProducts: () => import('~/components/products/OsmProducts.vue'),
  },
  layout: 'default',
}
</script>
