<template>
  <div class="cart__r-side">
    <div class="cart__total">
      <div class="cart__total--block">
        <div class="cart__total--title">Количество</div>
        <div class="cart__total--text">1 шт.</div>
      </div>
      <div class="cart__total--block">
        <div class="cart__total--title">Товары</div>
        <div class="cart__total--text">
          <osm-price>14 500</osm-price>
        </div>
      </div>
      <div class="cart__total--totals">
        <div class="cart__total--t-title">Итого</div>
        <div class="cart__total--t-text">
          <osm-price>14 500</osm-price>
        </div>
      </div>
      <osm-button class-name="button--checkout">
        <svg
          class="desc_icon"
          width="235"
          height="92"
          viewBox="0 0 235 92"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.13089 16.38C-0.287778 13.7156 1.64308 10.5 4.66157 10.5H172.643C172.881 10.5 173.117 10.4789 173.351 10.4369L229.68 0.315315C232.817 -0.248381 235.321 2.90427 234.062 5.83237L216.086 47.6371C215.708 48.5164 215.658 49.5022 215.944 50.4154L227.325 86.6636C228.146 89.2803 226.15 91.9289 223.408 91.8605L4.57752 86.3994C1.57923 86.3246 -0.273234 83.0989 1.17326 80.4715L17.4554 50.8974C18.1071 49.7136 18.1171 48.2809 17.482 47.0882L1.13089 16.38Z"
            fill="#E49535"
          />
        </svg>
        <svg
          class="mob_icon"
          width="197"
          height="59"
          viewBox="0 0 197 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.41359 12.7154C-0.444684 10.0646 1.45164 6.41935 4.68897 6.41935H145.64L192.001 0.0917641C195.28 -0.3558 197.653 3.14548 196.023 6.02559L182.699 29.5614C182.093 30.6323 182.013 31.9226 182.483 33.0599L190.873 53.3571C191.974 56.0205 189.982 58.9389 187.1 58.8843L4.65794 55.426C1.42697 55.3647 -0.401469 51.6958 1.49503 49.0792L12.7387 33.5668C13.7401 32.1852 13.7549 30.3205 12.7754 28.9232L1.41359 12.7154Z"
            fill="#E49535"
          />
        </svg>
        <span>Оформить</span>
      </osm-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OsmCartRSide',
  components: {
    OsmPrice: () => import('~/components/typografy/OsmPrice.vue'),
    OsmButton: () => import('~/components/global/OsmButton.vue'),
  },
}
</script>
<style lang="scss" scoped></style>
