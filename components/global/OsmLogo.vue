<template>
  <nuxt-link :to="{ name: 'index' }" class="header__logo">
    <img src="~/assets/img/logo.png" alt="Логотип" />
  </nuxt-link>
</template>

<script>
export default {
  name: 'OsmLogo',
}
</script>
