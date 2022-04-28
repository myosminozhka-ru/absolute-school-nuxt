<template>
  <div class="cart__product" :class="{ isLoading }">
    <div class="cart__product--img">
      <osm-button class-name="button--close">
        <div @click="removeProduct(item.basket_id)">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M53.7 4.93231C53.7 2.3908 51.3607 0.493699 48.874 1.01852L4.17889 10.4514C1.91657 10.9288 0.529057 13.2193 1.15356 15.4455L6.87944 35.8572C7.08864 36.6029 7.07682 37.3934 6.84544 38.1325L1.73422 54.4601C0.897166 57.134 2.99757 59.8177 5.7943 59.6477L38.7 57.6471H54.5974C57.2847 57.6471 59.2076 55.05 58.4233 52.4797L53.8741 37.5706C53.7587 37.1922 53.7 36.7988 53.7 36.4032V4.93231Z"
              fill="#85A833"
            />
            <g filter="url(#filter0_d_429_109)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30.0005 25.7369L20.6157 17L17 22.1605L25.4211 30.0002L17.0008 37.8391L20.6165 42.9996L30.0005 34.2634L39.3845 42.9996L43.0003 37.8391L34.58 30.0002L43.001 22.1605L39.3853 17L30.0005 25.7369ZM30.0005 25.7369L25.4211 30.0002L30.0005 34.2634L34.58 30.0002L30.0005 25.7369Z"
                fill="white"
              />
              <path
                d="M30.0005 25.7369L25.4211 30.0002L30.0005 34.2634L34.58 30.0002L30.0005 25.7369Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_429_109"
                x="17"
                y="17"
                width="26.001"
                height="30"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.415686 0 0 0 0 0.52549 0 0 0 0 0.14902 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_429_109"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_429_109"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </osm-button>
      <img :src="`https://viessmann-otoplenie.ru${item.image}`" alt="" />
    </div>
    <div class="cart__product--info">
      <osm-hn type="h2">{{ item.name }}</osm-hn>
      <div class="cart__product--text">
        {{ item.description ? item.description : 'lorem ipsum dolor sit amet' }}
      </div>
      <div class="cart__product--check">
        <div class="cart__product--check-item">
          <span class="item">
            <osm-checkbox
              class-name="check_standart"
              :style="`

                  --background: ${activeColor.code}

              `"
              :text="activeColor.code"
              name="colors"
            />
          </span>
          <div class="cart__product--blocks">
            <osm-checkbox
              v-for="offer in offers"
              :key="offer.id"
              class-name="check_standart"
              :style="`

                  --background: ${offer.colors[0].code}

              `"
              :text="offer.colors[0].code"
              name="colors"
              @input="
                updateOffer({
                  id: item.basket_id,
                  quantity: activeOffer.quantity,
                  newOfferId: offer.id,
                })
              "
            />
          </div>
        </div>

        <div v-if="activeSize" class="cart__product--size-item">
          <span class="item">
            <osm-checkbox
              class-name="check_size"
              :text="activeSize.name"
              name="sizes"
            />
          </span>
          <div class="cart__product--blocks">
            <osm-checkbox
              v-for="offer in offers"
              :key="offer.id"
              class-name="check_size"
              :text="offer.sizes[0].name"
              name="sizes"
              @input="
                updateOffer({
                  id: item.basket_id,
                  quantity: activeOffer.quantity,
                  newOfferId: offer.id,
                })
              "
            />
          </div>
        </div>
      </div>
      <div class="cart__product--amount">
        <button
          class="cart__product--minus"
          @click="
            updateQuantity({
              id: item.basket_id,
              quantity: activeOffer.quantity - 1,
            })
          "
        >
          -
        </button>
        <osm-price type="prod_amount">{{ activeOffer.quantity }}шт</osm-price>
        <button
          class="cart__product--plus"
          @click="
            updateQuantity({
              id: item.basket_id,
              quantity: activeOffer.quantity + 1,
            })
          "
        >
          <span>+</span>
          <div v-if="user.balance < cart.price" class="cart__product--plus-warn">
            На вашем балансе недостаточно средств
          </div>
        </button>
      </div>
    </div>
    <div class="cart__product--price">
      <osm-price>{{ activeOffer.price }}</osm-price>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'OsmCartProduct',
  components: {
    OsmPrice: () => import('~/components/typografy/OsmPrice.vue'),
    OsmButton: () => import('~/components/global/OsmButton.vue'),
    OsmHn: () => import('~/components/typografy/OsmHn.vue'),
    OsmCheckbox: () => import('~/components/forms/OsmCheckbox.vue'),
  },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    isPlusWarn: false,
    isLoading: false,
  }),
  computed: {
    ...mapGetters('cart', {
      cart: 'getCartItems',
    }),
    ...mapGetters('localStorage', {
      user: 'getUser'
    }),
    ...mapGetters('products', {
      products: 'getProducts',
    }),
    activeOffer() {
      const activeOffer = this.cart.offers.filter(
        (offer) => +offer.id === +this.item.product_id
      )
      return activeOffer[0]
    },
    activeColor() {
      const activeColor = this.cart.colors.filter(
        (color) => color.id === this.activeOffer.color
      )
      return activeColor[0]
    },
    activeSize() {
      const activeSize = this.products.sizes.filter(
        (size) => size.id === this.activeOffer.size
      )
      return activeSize[0]
    },
    product() {
      const product = this.products.products.filter(
        (product) => product.id === this.activeOffer.product
      )
      return product[0]
    },
    offers() {
      return this.products.offers
        .filter((offer) => offer.product === this.product.id)
        .map((offer) => ({
          ...offer,
          colors: this.products.colors.filter(
            (color) => color.id === offer.color
          ),
          sizes: this.products.sizes.filter((size) => size.id === offer.size),
        }))
    },
  },
  methods: {
    ...mapActions('cart', [
      'removeProductFromCart',
      'updateOfferQuantity',
      'updateActiveOffer',
    ]),
    removeProduct(basketId) {
      this.isLoading = true
      this.removeProductFromCart(basketId)
        .then((response) => {
          this.isLoading = false
        })
        .catch((error) => {
          this.isLoading = false
          this.$toast.error(error)
        })
    },
    updateQuantity({ id, quantity }) {
      if (quantity > this.activeOffer.max_quantity) {
        this.$toast.info('Столько товаров у нас нет')
        return false
      }
      if (quantity < 1) {
        this.$toast.info('Меньше не получится')
        return false
      }
      this.isLoading = true
      this.updateOfferQuantity({
        id,
        quantity,
      })
        .then((response) => {
          this.isLoading = false
        })
        .catch((error) => {
          this.isLoading = false
          this.$toast.error(error)
        })
    },
    updateOffer({ id, quantity, newOfferId }) {
      this.isLoading = true
      this.updateActiveOffer({
        id,
        quantity,
        newOfferId,
      })
        .then((response) => {
          this.isLoading = false
        })
        .catch((error) => {
          this.isLoading = false
          this.$toast.error(error)
        })
    },
  },
}
</script>

<style lang="scss">
.cart {
  &__product {
    &.isLoading {
      pointer-events: none;
      opacity: 0.5;
    }
  }
}
</style>
