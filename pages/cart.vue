<template>
    <div>
        <osm-hn type="h1">Корзина:</osm-hn>
        <osm-cart/>
    </div>
</template>
<script>
export default {
    name: 'CartPage',
    components: {
        OsmHn: () => import('~/components/typografy/OsmHn.vue'),
        OsmCart: () => import('~/components/cart/OsmCart.vue')
    }
}
</script>
<style lang="scss" scoped>
    
</style>