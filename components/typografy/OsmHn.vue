<template>
  <h1 v-if="type === 'h1'">
    <slot></slot>
  </h1>
  <h2 v-else-if="type === 'h2'">
    <slot></slot>
  </h2>
  <h3 v-else-if="type === 'h3'">
    <slot></slot>
  </h3>
  <h4 v-else-if="type === 'h4'">
    <slot></slot>
  </h4>
  <h5 v-else-if="type === 'h5'">
    <slot></slot>
  </h5>
  <h6 v-else-if="type === 'h6'">
    <slot></slot>
  </h6>
</template>

<script>
export default {
  name: 'OsmHn',
  props: {
    type: {
      type: String,
      default: 'h1',
    },
  },
}
</script>

<style lang="scss">
h1,
h2,
h3,
h4 {
  margin-top: 0;
  margin-bottom: 0;
  font-family: 'Jingleberry', serif;
  font-style: normal;
  font-weight: 900;
  line-height: 120%;
  color: #515151;
}
h1 {
  font-size: vw(70);
}
h2 {
  font-size: vw(30);
}
h3 {
  font-size: vw(20);
}
h4 {
  font-size: vw(14);
}
@media all and (max-width: 1023px) {
  h1 {
    font-size: 30px;
  }
  h2 {
    font-size: 16px;
  }
  h3 {
    font-size: 14px;
  }
  h4 {
    font-size: 12px;
  }
}
</style>
