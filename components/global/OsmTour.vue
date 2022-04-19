<template>
    <div></div>
</template>

<script>
import introJs from 'intro.js';

export default {
    name: "OsmTour",
    mounted() {
        introJs().start();
    }
}
</script>