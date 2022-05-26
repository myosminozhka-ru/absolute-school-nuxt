<template>
  <div class="cart__product" :class="{ isLoading }">
    <div class="cart__product--img">
      <osm-button class-name="button--close">
        <div data-intro="<div class='tour boy'><div class='tour__l'></div><div class='tour__r'><div class='tour__number'>05</div><div class='tour__title'>Удалите позицию</div><div class='tour__text'>Вы можете удалить выбранную позицию</div></div></div>" data-step="5" @click="removeProduct(item.basketId)">
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
      <img :src="`https://api.absolute-shop.ru${item.image}`" alt="" />
    </div>
    <div class="cart__product--info">
      <osm-hn type="h2">{{ item.name }}</osm-hn>
      <div class="cart__product--text">
        {{ currentProduct[0] ? currentProduct[0].description : 'lorem ipsum dolor sit amet' }}
      </div>
      <div v-if="selectedColor" class="cart__product--check">
        <div class="cart__product--check-item">
          <span class="item">
            <osm-checkbox
              class-name="check_standart"
              :style="`
                  --background: ${selectedColor.code}
              `"
              :text="selectedColor.code"
              name="colors"
            />
          </span>
          <div class="cart__product--blocks">
            <osm-checkbox
              v-for="color in moreColors"
              :key="color.id"
              class-name="check_standart"
              :class="{ 'is-checked': +color.id === +selectedColor.id }"
              :style="`
                  --background: ${color.code}
              `"
              :text="color.code"
              name="colors"
              @input="onSelectColor(color)"
            />
          </div>
        </div>

        <div v-if="selectedSize" class="cart__product--size-item">
          <span class="item">
            <osm-checkbox
              class-name="check_size"
              :text="selectedSize.name"
              name="sizes"
            />
          </span>
          <div class="cart__product--blocks">
            <osm-checkbox
              v-for="size in moreSizes"
              :key="size.id"
              class-name="check_size"
              :text="size.name"
              :class="{ 'isActive' : +size.id === +selectedSize.id}"
              name="sizes"
              @input="onSelectSize(size)"
            />
          </div>
        </div>
      </div>
      <div class="cart__product--amount" data-intro="<div class='tour boy'><div class='tour__l'></div><div class='tour__r'><div class='tour__number'>06</div><div class='tour__title'>Меняйте количество</div><div class='tour__text'>Вы можете поменять выбранное количество товаров</div></div></div>" data-step="6">
        <button
          class="cart__product--minus"
          @click="
            updateQuantity({
              id: item.basketId,
              quantity: quantity - 1,
            })
          "
        >
          -
        </button>
        <osm-price type="prod_amount">{{ quantity }}шт</osm-price>
        <button
          class="cart__product--plus"
          @click="
            updateQuantity({
              id: item.basketId,
              quantity: quantity + 1,
            })
          "
        >
          <span>+</span>
          <div
            v-if="user.balance < cart.price"
            class="cart__product--plus-warn"
          >
            <span>На вашем балансе недостаточно средств</span>
          </div>
        </button>
      </div>
    </div>
    <div class="cart__product--price">
      <osm-price>{{ Number(+price).toLocaleString() }}</osm-price>
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
    selectedColor: {},
    moreColors: [],
    selectedSize: {},
    moreSizes: [],
    quantity: 0,
    price: 0,
    currentOffer: {},
  }),
  computed: {
    ...mapGetters('cart', {
      cart: 'getCartItems',
      getOffer: 'getOffer',
      getSelectedColor: 'getSelectedColor',
      getMoreColors: 'getMoreColors',
      getSelectedSize: 'getSelectedSize',
      getMoreSizes: 'getMoreSizes',
    }),
    ...mapGetters('localStorage', {
      user: 'getUser',
    }),
    ...mapGetters('products', {
      products: 'getProducts',
    }),
    currentProduct() {
      return this.products.products.filter(product => product.id === this.currentOffer.product)
    },
    colorsAndSize() {
      const { selectedColor, selectedSize } = this
      return {
        selectedColor,
        selectedSize,
      }
    },
  },
  watch: {
    item: {
      handler(newval, oldval) {
        this.updateData()
      }
    }
  },
  mounted() {
    this.selectedColor = this.getSelectedColor(this.item.productId)
    this.moreColors = this.getMoreColors(this.item.productId)
    this.selectedSize = this.getSelectedSize(this.item.productId)
    // console.log(this.item, this.selectedColor);
    if (this.selectedColor) {
      this.moreSizes = this.getMoreSizes(
        this.item.productId,
        this.selectedColor.id
      )
    }
    this.currentOffer = this.getOffer(this.item.productId)
    this.quantity = +this.currentOffer.quantity
    this.price = this.currentOffer.price
  },
  methods: {
    ...mapActions('cart', [
      'removeProductFromCart',
      'updateOfferQuantity',
      'updateActiveOffer',
    ]),
    updateData() {
      const offer = this.getOffer(
        this.item.productId,
        this.selectedColor ? this.selectedColor.id : null,
        this.selectedSize ? this.selectedSize.id : null
      )
      this.price = offer.price
      this.currentOffer = offer
      if (offer.quantity) {
        this.quantity = offer.quantity
      }
    },
    removeProduct(basketId) {
      this.isLoading = true

      this.removeProductFromCart(basketId)
        .then((response) => {
          this.isLoading = false
        })
    },
    onSelectColor(color) {
      this.selectedColor = color
      this.moreSizes = [...this.getMoreSizes(this.item.productId, color.id)]
      this.selectedSize = this.getSelectedSize(
        this.getOffer(this.item.productId, color.id).id
      )
      this.updateOffer()
    },
    onSelectSize(size) {
      this.selectedSize = size
      this.updateOffer()
    },
    updateQuantity({ id, quantity }) {
      if (quantity > +this.currentOffer.max_quantity) {
        this.$toast.info('Столько товаров у нас нет')
        return false
      }
      if (quantity < 1) {
        // this.$toast.info('Меньше не получится')
        return false
      }
      this.quantity = +quantity
      this.isLoading = true
      this.updateOfferQuantity({
        id,
        quantity,
      })
        .then((response) => {
          this.isLoading = false
        })
    },
    updateOffer() {
      this.updateData()
      this.isLoading = true

      this.updateActiveOffer({
        id: this.item.basketId,
        quantity: this.quantity,
        newOfferId: this.currentOffer.id,
      })
        .then((response) => {
          this.isLoading = false
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
