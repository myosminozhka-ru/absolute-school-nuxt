<template>
  <div class="cards__item">
    <div
      class="cards__item--l-side"
      :class="{ 'cards__item--l-side--full': !product.images.length }"
    >
      <osm-hn class="cards__item--title">{{ product.name }}</osm-hn>

      <p class="cards__item--text">{{ product.description }}</p>

      <div class="cards__item--color-item">
        <div class="cards__item--colors">
          <osm-checkbox
            v-for="color in colors"
            :key="color.id"
            class-name="check_standart"
            text="#000"
            :class="{ 'is-checked': +color.id === +selectedColorId }"
            name="color"
            :style="`--background: ${color.code}`"
            @input="onSelectColor(color.id)"
          />
        </div>
      </div>

      <div class="cards__item--size-item">
        <div class="cards__item--size">
          <osm-checkbox
            v-for="size in sizes"
            :key="size.id"
            class-name="check_size"
            :checked="+size.id === +selectedSizeId"
            :text="size.name"
            :value="size.id"
            name="size"
            @input="onSelectSize(size.id)"
          />
        </div>
      </div>
      <div class="cards__item--buttons">
        <osm-price data-intro="<div class='tour girl'><div class='tour__l'></div><div class='tour__r'><div class='tour__number'>07</div><div class='tour__title'>Цена</div><div class='tour__text'>Тут вы можете увидеть цену на интересующий вас товар</div></div></div>" data-step="7">{{ Number(price).toLocaleString() }}</osm-price>

        <osm-button
          class-name="button--cart"
          :is-loading="isLoading"
          data-intro="<div class='tour girl'><div class='tour__l'></div><div class='tour__r'><div class='tour__number'>08</div><div class='tour__title'>Добавление товара в корзину</div><div class='tour__text'>Для завершения покупки, необходимо добавить товар в корзину</div></div></div>"
          data-step="8"
          @click="addToCart(selectedOfferId)"
        >
          <svg
            class="desc_icon"
            width="280"
            height="108"
            viewBox="0 0 280 108"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.966884 17.072C-0.412274 14.4818 1.37429 11.3376 4.30532 11.1966L235.063 0.093208C236.286 0.0343461 237.469 0.539143 238.273 1.46312L278.171 47.3232C279.5 48.8506 279.478 51.13 278.12 52.6316L229.835 106.024C228.994 106.954 227.766 107.435 226.518 107.326L4.11367 87.7728C1.23471 87.5197 -0.433913 84.3907 0.959939 81.859L17.4554 51.8974C18.1071 50.7136 18.1171 49.2809 17.482 48.0882L0.966884 17.072Z"
              fill="#E49535"
            />
          </svg>
          <svg
            class="mob_icon"
            width="84"
            height="71"
            viewBox="0 0 84 71"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.884028 12.7352C-0.498843 10.2707 1.04056 7.18822 3.84153 6.81317L52.6552 0.277008C53.9515 0.10344 55.2507 0.574507 56.1345 1.5385L82.4733 30.2673C83.8955 31.8185 83.8724 34.2065 82.4205 35.7299L50.4379 69.2897C49.4325 70.3447 47.9327 70.7694 46.5233 70.3982L3.07416 58.9525C0.520648 58.2799 -0.69191 55.3612 0.633238 53.0772L11.1226 34.9975C11.8325 33.7739 11.8433 32.2664 11.1511 31.0328L0.884028 12.7352Z"
              fill="#E49535"
            />
          </svg>
          <span>Добавить</span>
          <!-- <div v-if="isBalanceEnough" class="cart__product--plus-warn product_main">
            На вашем балансе недостаточно средств
          </div> -->
        </osm-button>
      </div>
    </div>
    <!-- /.cards__item--l-side -->
    <div v-if="product.images.length" class="cards__item--r-side">
      <div
        :ref="product.images.length > 1 ? 'cards__slider' : ''"
        class="glide cards__slider--js"
      >
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li
              v-for="(image, key) in product.images"
              :key="key"
              class="glide__slide"
            >
              <img :src="`https://one.kutuzovv.ru/${image}`" alt="" />
            </li>
          </ul>
        </div>
        <div
          v-if="product.images.length > 1"
          class="glide__bullets"
          data-glide-el="controls[nav]"
        >
          <div
            v-for="(image, key) in product.images"
            :key="key"
            :data-glide-dir="`=${key}`"
          >
            <img :src="`https://one.kutuzovv.ru/${image}`" alt="" />
          </div>
        </div>
        <div
          v-if="product.images.length > 1"
          class="glide__controls"
          data-glide-el="controls"
        >
          <div data-glide-dir="<">
            <osm-button class-name="button--slider_next">
              <svg
                width="65"
                height="42"
                viewBox="0 0 65 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41.1404 0.356261L64.4767 21.4209L39.1965 41.5924L39.7196 28.8166L0.789897 37.726L2.00828 0.997138L40.5502 13.1202L41.1404 0.356261Z"
                  fill="#E49535"
                />
              </svg>
            </osm-button>
          </div>
          <div data-glide-dir=">">
            <osm-button class-name="button--slider_next">
              <svg
                width="65"
                height="42"
                viewBox="0 0 65 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41.1404 0.356261L64.4767 21.4209L39.1965 41.5924L39.7196 28.8166L0.789897 37.726L2.00828 0.997138L40.5502 13.1202L41.1404 0.356261Z"
                  fill="#E49535"
                />
              </svg>
            </osm-button>
          </div>
        </div>
      </div>
    </div>
    <!-- /.cards__item--r-side -->
  </div>
</template>

<script>
import Glide from '@glidejs/glide'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'OsmProductV2',
  components: {
    OsmHn: () => import('~/components/typografy/OsmHn.vue'),
    OsmCheckbox: () => import('~/components/forms/OsmCheckbox.vue'),
    OsmPrice: () => import('~/components/typografy/OsmPrice.vue'),
    OsmButton: () => import('~/components/global/OsmButton.vue'),
  },
  props: {
    product: {
      type: Object,
      default: null,
    },
  },
  data: () => ({
    productId: null,
    colors: [],
    sizes: [],
    selectedColorId: null,
    selectedSizeId: null,
    selectedOfferId: null,
    price: null,
    slider: null,
    isLoading: false,
    isBalanceEnough: true
  }),
  computed: {
    ...mapGetters('products', {
      getColors: 'getProductColors',
      getSizes: 'getProductSizes',
      getOffer: 'getProductOffer',
      getFilteredProducts: 'getFilteredProducts'
    }),
    ...mapGetters('localStorage', {
      user: 'getUser',
    }),
    colorsAndSize() {
      const { selectedColorId, selectedSizeId } = this
      return {
        selectedColorId,
        selectedSizeId,
      }
    },
  },
  watch: {
    selectedColorId: {
      handler(newval, oldval) {
        this.sizes = [...this.getSizes(this.product.id, newval)]
        this.selectedSizeId = this.sizes[0] ? this.sizes[0].id : null
      },
    },
    colorsAndSize: {
      handler(newval, oldval) {
        const offer = this.getOffer(
          this.product.id,
          this.selectedColorId,
          this.selectedSizeId
        )

        this.price = offer.price
        this.selectedOfferId = offer.id
      },
    },
  },
  beforeMount() {
    this.colors = [...this.getColors(this.product.id)]
    this.selectedColorId = this.colors[0] ? this.colors[0].id : null

    this.sizes = [...this.getSizes(this.product.id, this.selectedColorId)]
    this.selectedSizeId = this.sizes[0] ? this.sizes[0].id : null

    const offer = this.getOffer(
      this.product.id,
      this.selectedColorId,
      this.selectedSizeId
    )

    this.price = offer.price

    this.selectedOfferId = offer.id
  },
  mounted() {
    if (this.$refs.cards__slider) {
      this.slider = new Glide(this.$refs.cards__slider, {
        gap: 0,
      }).mount()
    }
  },
  beforeDestroy() {
    if (this.slider) {
      this.slider.destroy()
      this.slider = null
    }
  },
  methods: {
    ...mapActions('cart', ['addProductToCart']),
    onSelectColor(colorId) {
      this.selectedColorId = +colorId
    },
    onSelectSize(sizeId) {
      this.selectedSizeId = +sizeId
    },
    addToCart(offerId) {
      const offer = this.getFilteredProducts.offers.filter(offer => offer.id === offerId)[0];
      // console.log(offer.price, this.user.balance, +offer.price > +this.user.balance);
      if (offer && +offer.price > +this.user.balance) {
        this.$toast.info('На вашем балансе недостаточно средств');
      } else {
        this.isLoading = true;
        this.addProductToCart(offerId)
          .then((response) => {
            this.isLoading = false
            if (response.items) {
              // console.log(response.items);
              this.$toast.success(`Товар "${response.items[0].name}" добавлен в корзину`)
            } else {
              this.$toast.info(response)
            }
          })
          .catch((error) => {
            this.isLoading = false
            this.$toast.error(error)
          })
      }
    },
  },
}
</script>

<style lang="scss">
.cards {
  &__more {
    display: flex;
    justify-content: center;
    > div {
      margin-left: auto;
      margin-right: auto;
      margin-bottom: vw(150);
    }
  }
  &__more-in {
    display: inline-block;
  }
}
</style>

<style lang="scss">
.cards {
  &__item {
    background: #f7dd85;
    box-shadow: 0px 70px 60px -60px #ccad86,
      inset 0px -16px 29px rgba(151, 113, 65, 0.2),
      inset 0px 10px 20px rgba(255, 255, 255, 0.15);
    border-radius: vw(50);
    margin-bottom: vw(100);
    padding: vw(64) vw(160) vw(56) vw(160);
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: relative;
    &:nth-child(even) {
      flex-direction: row-reverse;
    }
    &--l-side {
      max-width: vw(596);
      width: 100%;
      flex: none;
      &--full {
        max-width: 100%;
      }
    }
    &--text {
      margin-top: vw(20);
      margin-bottom: vw(40);
      font-family: 'Gilroy';
      font-style: normal;
      font-weight: 600;
      font-size: vw(20);
      line-height: 160%;
      // text-transform: lowercase;
      color: #686868;
    }
    .price_all {
      margin-bottom: vw(25);
    }
    &--colors {
      margin-bottom: 53px;
      display: flex;
      flex-wrap: wrap;
      .checkbox {
        margin-right: 10px;
        margin-bottom: 10px;
      }
    }
    &--size {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 25px;
      .checkbox {
        margin-right: vw(44);
      }
    }
    &--buttons {
      position: relative;
      .product_main {
        top: unset;
        left: unset;
        right: -290px;
      }
    }
    &--more {
      margin-top: vw(100);
      display: flex;
      justify-content: center;
      > div {
        margin-left: auto;
        margin-right: auto;
      }
    }
    &--r-side {
      width: vw(580);
      .glide {
        position: relative;
        &__track {
          overflow: hidden;
          background: #ffffff;
          padding: vw(10) 0;
          width: 100%;
          border-radius: vw(50);
          filter: drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.1));
          li {
            display: flex;
            align-items: center;
            justify-content: center;
            max-height: vw(580);
            img {
              max-height: inherit;
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
        }
        &__bullets {
          position: relative;
          bottom: unset;
          margin-top: vw(20);
          > div {
            padding: vw(20) vw(10);
            background: #ffffff;
            cursor: pointer;
            border-radius: vw(20);
            opacity: 0.7;
            transition: all 0.3s ease-out;
            margin-left: vw(9);
            margin-right: vw(9);
            height: 130px;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
              max-height: 100%;
            }
            &.glide__bullet--active {
              opacity: 1;
              filter: drop-shadow(0px 5px 30px rgba(0, 0, 0, 0.25));
            }
          }
        }
        &__controls {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: vw(-93);
          div {
            &:nth-child(1) {
              button {
                left: vw(-30);
                position: relative;
                transform: rotate(191deg);
                svg {
                  filter: drop-shadow(0px -5px 0px #ad7026);
                }
                &:active {
                  svg {
                    filter: drop-shadow(0px 0px 0px #ad7026);
                  }
                }
              }
            }
            &:nth-child(2) {
              div {
                right: vw(-30);
                position: relative;
              }
            }
          }
        }
      }
    }
    &:nth-child(2n + 1) {
      &:before {
        position: absolute;
        content: '';
        background: url('~/assets/img/girl.png') 0 no-repeat;
        right: vw(-150);
        bottom: vw(-72);
        width: 255px;
        height: 520px;
        pointer-events: none;
        @media all and (max-width: 1600px) {
          display: none;
        }
      }
    }
    &:nth-child(2n + 2) {
      &:before {
        position: absolute;
        content: '';
        background: url('~/assets/img/boy.png') 0 no-repeat;
        left: vw(-150);
        bottom: vw(-76);
        width: 355px;
        z-index: 1;
        height: 532px;
        pointer-events: none;
        @media all and (max-width: 1600px) {
          display: none;
        }
      }
    }
  }
}
.isTablet {
  .cards {
    &__item {
      &--l-side {
        max-width: 49%;
      }
      &--r-side {
        width: 49%;
      }
    }
  }
}
.isMobile {
  .cards {
    &__more {
      > div {
        margin-top: 40px;
        margin-bottom: 80px;
      }
    }
    &__item {
      margin-bottom: 20px;
      padding: 20px;
      padding-bottom: 30px;
      flex-direction: column-reverse;
      align-items: center;
      &--l-side {
        max-width: 100%;
      }
      &--more {
        display: block;
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        text-align: right;
        color: #686868;
        position: relative;
        padding-right: 29px;
        cursor: pointer;
        width: max-content;
        margin-left: auto;
        margin-top: 55px;
        &:before {
          content: '';
          transition: all 0.3s ease-out;
          position: absolute;
          width: 19px;
          height: 10px;
          right: 0;
          top: 50%;
          margin-top: -5px;
          background: url("data:image/svg+xml,%3Csvg width='19' height='11' viewBox='0 0 19 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_d_227_8913)'%3E%3Cpath d='M2 0L10 4L17 0L19 2L9.5 9L0 2L2 0Z' fill='%23E49535'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_d_227_8913' x='0' y='0' width='19' height='11' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dy='2'/%3E%3CfeComposite in2='hardAlpha' operator='out'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.678431 0 0 0 0 0.439216 0 0 0 0 0.14902 0 0 0 1 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_227_8913'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_227_8913' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E%0A")
            50% / 19px no-repeat;
        }
        &.isActive {
          &:before {
            transform: rotate(180deg);
          }
        }
      }
      &--title {
        padding-left: 15px;
        padding-right: 15px;
        text-align: center;
        margin-bottom: 10px;
      }
      &--text {
        margin-bottom: 20px;
        font-size: 14px;
        padding-left: 15px;
        padding-right: 15px;
        text-align: center;
      }
      &--r-side {
        width: 100%;
        margin-bottom: 20px;
        .glide {
          &__track {
            padding: 45px 0;
            border-radius: 20px;
            li {
              max-height: inherit;
            }
          }
          &__controls {
            display: none;
          }
          &__bullets {
            margin-top: 20px;
            background: #ecd27a;
            > div {
              img {
                display: none;
              }
              width: 30px;
              height: 5px;
              border-radius: 0;
              background: none;
              padding: 0;
              &.glide__bullet--active {
                background: #85a833;
              }
            }
          }
          &__slide {
            padding: 0 32px;
          }
        }
      }
      &--color-item {
        overflow: hidden;
        overflow-x: scroll;
        margin-bottom: 20px;
        padding-top: 2px;
        margin-left: -20px;
        width: calc(100% + 40px);
      }
      &--size-item {
        overflow: hidden;
        overflow-x: scroll;
        margin-bottom: 20px;
        padding-top: 2px;
      }
      &--colors {
        margin-bottom: 10px;
        width: max-content;
        flex-wrap: nowrap;
        padding-left: 20px;
      }
      &--size {
        margin-bottom: 15px;
        width: max-content;
        flex-wrap: nowrap;
      }
      &--size {
        padding-left: 15px;
        padding-right: 15px;
        .checkbox {
          margin-right: 30px;
        }
      }
      &--buttons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .product_main {
          width: 50px;
          height: 50px;
          padding: 0;
          right: 0;
          pointer-events: none;
          font-size: 0;
          bottom: -30px;
          background: url("data:image/svg+xml,%3Csvg width='70' height='70' viewBox='0 0 70 70' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='10' y='10' width='50' height='50' rx='14' fill='%23EE1C1C'/%3E%3Crect x='5' y='5' width='60' height='60' rx='19' stroke='%23FEA840' stroke-opacity='0.3' stroke-width='10'/%3E%3Cpath d='M31.6828 45.6012V50.9083H37.2737V45.231L31.6828 45.6012ZM37.41 42.5569L38.0919 20.0945L31.2737 19.8477L31.6373 42.3923L37.41 42.5569Z' fill='white'/%3E%3Cpath d='M24.6487 47.3676L25.5864 51.1041L29.0021 50.247L27.999 46.2498L24.6487 47.3676ZM27.6098 44.3462L24.0577 28.4266L19.8486 29.2981L24.054 45.1153L27.6098 44.3462Z' fill='white'/%3E%3Cpath d='M45.0956 47.3676L44.158 51.1041L40.7423 50.247L41.7453 46.2498L45.0956 47.3676ZM42.1345 44.3462L45.6866 28.4266L49.8957 29.2981L45.6903 45.1153L42.1345 44.3462Z' fill='white'/%3E%3C/svg%3E%0A")
            50% / 100% no-repeat;
        }
      }
      .price_all {
        margin-bottom: -13px;
          font-size: 50px;
        svg {
          width: 26px;
          height: 26px;
        }
        @media all and (max-width: 360px) {
          font-size: 40px;
        }
      }
    }
  }
}
</style>
