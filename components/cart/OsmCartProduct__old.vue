<template>
  <div class="cart__product">
    <div class="cart__product--img">
      <osm-button
        class-name="button--close"
        @click="removeProductById(product.basketId)"
      >
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
      </osm-button>
      <img src="~assets/img/shirt.png" alt="" />
    </div>
    <div class="cart__product--info">
      <osm-hn type="h2">{{ product.name }}</osm-hn>
      <div class="cart__product--text">
        {{ product.description ? product.description : '' }}
      </div>
      <div class="cart__product--check">
        <div class="cart__product--check-item">
          <span class="item">
            <osm-checkbox
              class-name="check_standart"
              :style="`

                                    --background: ${product.selectedColor.code}

                                `"
              :text="product.selectedColor.name"
              name="colors"
            />
          </span>
          <div class="cart__product--blocks">
            <osm-checkbox
              v-for="color in product.colors"
              :key="color.id"
              class-name="check_standart"
              :style="`

                                    --background: ${color.code}

                                `"
              :text="color.name"
              name="colors"
              @input="
                editColorProduct({
                  productId: product.basketId,
                  colorId: color.id,
                })
              "
            />
          </div>
        </div>
        <div class="cart__product--size-item">
          <span class="item">
            <osm-checkbox
              class-name="check_size"
              :text="product.selectedSize.name"
              name="sizes"
            />
          </span>
          <div class="cart__product--blocks">
            <osm-checkbox
              v-for="size in product.sizes"
              :key="size.id"
              class-name="check_size"
              :text="size.name"
              name="sizes"
              @input="
                editSizeProduct({
                  productId: product.basketId,
                  sizeId: size.id,
                })
              "
            />
          </div>
        </div>
      </div>
      <div class="cart__product--amount">
        <button class="cart__product--minus">-</button>
        <osm-price type="prod_amount">{{ product.quantity }}шт</osm-price>
        <button class="cart__product--plus" @click="addProduct">
          <span>+</span>
          {{ user.balance }} {{ cart.total }}
          <div v-if="user.balance >= cart.total" class="cart__product--plus-warn">
            На вашем балансе недостаточно средств
          </div>
        </button>
      </div>
    </div>
    <div class="cart__product--price">
      <osm-price>{{ product.price }}</osm-price>
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
    product: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    isPlusWarn: false,
  }),
  computed: {
    ...mapGetters('localStorage', {
      user: 'getUser'
    }),
    ...mapGetters('cart', {
      cart: 'getCartItems'
    }),
    selectedColor() {
      return this.colors.find((color) => color.select === true)
    },
    selectedSize() {
      return this.sizes.find((size) => size.select === true)
    },
  },
  methods: {
    ...mapActions('cart', {
      removeProductById: 'removeProductById',
      editColorProduct: 'editColorProduct',
      editSizeProduct: 'editSizeProduct',
    }),

    addProduct() {
      this.isPlusWarn = true
    },
    onSelectColors(id) {},
    onSelectSizes(id) {},
    // Удаление продукта
    onRemoveProduct() {},
  },
}
</script>
