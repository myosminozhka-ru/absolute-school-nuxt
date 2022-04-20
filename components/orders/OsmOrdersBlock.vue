<template>
  <div class="orders__block">
    <div class="orders__block--l-side">
      <div class="orders__block--order-number">
        <span>№ заказа:</span> {{ order.id }}
      </div>
      <div class="orders__block--date">От: {{ order.data }}</div>
      <div class="orders__block--status">{{ order.status }}</div>
    </div>
    <div class="orders__block--info" :class="{ isActive: isMobileShowMore }">
      <div
        v-for="product in products"
        :key="product.id"
        class="orders__block--card"
      >
        <div class="orders__block--img">
          <img :src="product.image" alt="" />
        </div>
        <div class="orders__block--item">
          <div class="orders__block--text">
            <osm-hn type="h2">{{ product.name }}</osm-hn>
            <div class="orders__block--description">
              {{ product.description }}
            </div>
            <div class="orders__block--amount mob">
              <osm-price type="prod_amount">{{ product.quantity }}шт</osm-price>
            </div>
            <osm-price type="price">{{ product.price }}</osm-price>
          </div>
          <div class="orders__block--amount">
            <osm-price type="prod_amount">{{ product.quantity }}шт</osm-price>
          </div>
        </div>
      </div>
      <div class="orders__block--repeat-mob">
        <osm-button>
          <span>Повторить</span>
        </osm-button>
      </div>
    </div>
    <div class="orders__block--r-side">
      <div class="orders__block--price">
        <span>Итого:</span>
        <osm-price type="price">{{ resultPrice }}</osm-price>
        <osm-button>
          <span>Повторить</span>
        </osm-button>
        <div
          class="orders__block--more"
          :class="{ isActive: isMobileShowMore }"
          @click="onToggleIsMobileShowMore"
        >
          {{ !isMobileShowMore ? 'Подробнее' : 'Свернуть' }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OsmOrdersBlock',
  components: {
    OsmHn: () => import('~/components/typografy/OsmHn.vue'),
    OsmPrice: () => import('~/components/typografy/OsmPrice.vue'),
    OsmButton: () => import('~/components/global/OsmButton.vue'),
  },
  props: {
    order: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    isMobileShowMore: false,
  }),
  computed: {
    // Лепка массива продуктов из заказа
    products() {
      const arrProductsBasket = this.order.basket
      const resultProducts = []

      arrProductsBasket.forEach((product) => {
        const findObjProduct = this.$store.state.orders.products.find(
          (item) => item.id === product.id
        )
        if (findObjProduct) {
          findObjProduct.quantity = product ? product.quantity : 0
          resultProducts.push(findObjProduct)
        }
      })

      return resultProducts
    },

    // Получение итоговой суммы заказа
    resultPrice() {
      const arrProductsBasket = this.order.basket
      let resultPrice = 0
      arrProductsBasket.forEach((product) => {
        const findProduct = this.$store.state.orders.products.find(
          (item) => item.id === product.id
        )
        if (findProduct) {
          resultPrice += findProduct.price
        }
      })

      return resultPrice
    },
  },
  methods: {
    onToggleIsMobileShowMore() {
      this.isMobileShowMore = !this.isMobileShowMore
    },
  },
}
</script>
<style lang="scss"></style>
