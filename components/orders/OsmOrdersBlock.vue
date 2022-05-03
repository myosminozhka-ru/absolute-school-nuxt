<template>
  <div class="orders__block">
    <div class="orders__block--l-side">
      <div class="orders__block--order-number">
        <span>№ заказа:</span> {{ order.id }}
      </div>
      <div class="orders__block--date">От: {{ order.date }}</div>
      <div class="orders__block--status">{{ order.status }}</div>
    </div>
    <div class="orders__block--info" :class="{ isActive: isMobileShowMore }">
      <div
        v-for="product in productsList"
        :key="product.id"
        class="orders__block--card"
      >
        <div class="orders__block--img">
          <img :src="`https://one.kutuzovv.ru/${product.img}`" alt="" />
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
        <osm-button @click="onRepeatOrder(order.id)">
          <span>Повторить</span>
        </osm-button>
      </div>
    </div>
    <div class="orders__block--r-side">
      <div class="orders__block--price">
        <span>Итого:</span>
        <osm-price type="price">{{ resultPrice }}</osm-price>
        <osm-button @click="onRepeatOrder(order.id)">
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
import { mapGetters, mapActions } from 'vuex'

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
    productsList: [],
  }),
  computed: {
    ...mapGetters('orders', {
      getProducts: 'getProducts',
    }),
    // Получение итоговой суммы заказа
    resultPrice() {
      let resultPrice = 0
      this.productsList.forEach((product) => {
        console.log('product', product);
        resultPrice = resultPrice + (product.price * product.quantity)
      })
      return resultPrice.toLocaleString()
    },
  },
  mounted() {
    this.productsList = this.getProducts(this.order.basket)
  },
  methods: {
    ...mapActions('orders', {
      repeatOrder: 'repeatOrder',
    }),
    ...mapActions('cart', {
      loadCart: 'loadCart',
    }),
    onToggleIsMobileShowMore() {
      this.isMobileShowMore = !this.isMobileShowMore
    },
    onRepeatOrder(orderId) {
      this.repeatOrder(orderId).then((response) => {
        if (response.status) {
          this.$toast.error(response.message)
        } else if (response.items) {
          this.loadCart()
          this.$toast.success('Добавили в корзину этот заказ')
        } else {
          this.$toast.info(response)
        }
      })
      // TODO: Тут действия при нажатии на кнопку повторить заказ
    },
  },
}
</script>
<style lang="scss"></style>
