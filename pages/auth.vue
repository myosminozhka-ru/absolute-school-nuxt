<template>
    <div>
        <osm-auth-block/>
    </div>
</template>
<script>
export default {
    name: 'AuthPage',
    components: {
        OsmAuthBlock: () => import('~/components/authBlock/OsmAuthBlock.vue')
    },
    layout: 'auth',
}
</script>