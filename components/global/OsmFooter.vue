<template>
  <footer class="footer">
    <div class="footer__in">
      <nuxt-link :to="{name: 'index'}">
        <img src="~/assets/img/logo.png" alt="Логотип" />
      </nuxt-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'OsmFooter',
}
</script>

<style lang="scss">
.footer {
  font-size: 0;
  &__in {
    background: #fff4ce;
    border-radius: vw(50);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: vw(100);
    img {
      max-width: vw(217);
      width: 100%;
    }
  }

  @media (max-width: 640px) {
    &__in {
      padding: 47px 10px;
      border-radius: 20px;
      img {
        max-width: 82px;
      }
    }
  }
}
</style>
