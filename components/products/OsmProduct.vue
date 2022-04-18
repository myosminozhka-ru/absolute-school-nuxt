<template>
  <div class="cards__item" v-if="product">
      
    <div class="cards__item--l-side" :class="{ 'cards__item--l-side--full': !product.images.length }">
      <osm-hn class="cards__item--title">{{ product.name }}</osm-hn>
      <div class="cards__item--text">Описание, которого нет в объекте товара</div>
      <form action="">
        <div class="cards__item--color-item">
          <div class="cards__item--colors">
            <div v-for="offer in offers" :key="offer.id" @click="setOffer(offer.id)">
                <osm-checkbox  class-name="check_standart" text="#000" :style="`

                    --background: ${offer.colors[0].color.code}

                `" />
            </div>
          </div>
        </div>
        <div class="cards__item--size-item">
          <div class="cards__item--size">
              <osm-checkbox class-name="check_size" text="xl"/>
          </div>
        </div>
        <div class="cards__item--buttons">
          <osm-price>14 500</osm-price>
          <osm-button class-name="button--cart">
            <svg class="desc_icon" width="280" height="108" viewBox="0 0 280 108" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.966884 17.072C-0.412274 14.4818 1.37429 11.3376 4.30532 11.1966L235.063 0.093208C236.286 0.0343461 237.469 0.539143 238.273 1.46312L278.171 47.3232C279.5 48.8506 279.478 51.13 278.12 52.6316L229.835 106.024C228.994 106.954 227.766 107.435 226.518 107.326L4.11367 87.7728C1.23471 87.5197 -0.433913 84.3907 0.959939 81.859L17.4554 51.8974C18.1071 50.7136 18.1171 49.2809 17.482 48.0882L0.966884 17.072Z"
                fill="#E49535" />
            </svg>
            <svg class="mob_icon" width="84" height="71" viewBox="0 0 84 71" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.884028 12.7352C-0.498843 10.2707 1.04056 7.18822 3.84153 6.81317L52.6552 0.277008C53.9515 0.10344 55.2507 0.574507 56.1345 1.5385L82.4733 30.2673C83.8955 31.8185 83.8724 34.2065 82.4205 35.7299L50.4379 69.2897C49.4325 70.3447 47.9327 70.7694 46.5233 70.3982L3.07416 58.9525C0.520648 58.2799 -0.69191 55.3612 0.633238 53.0772L11.1226 34.9975C11.8325 33.7739 11.8433 32.2664 11.1511 31.0328L0.884028 12.7352Z"
                fill="#E49535" />
            </svg>
            <span>Добавить</span>
          </osm-button>
        </div>
      </form>
    </div>
    
    <div class="cards__item--r-side" v-if="product.images.length">
      <div class="glide cards__slider--js" ref="cards__slider">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li class="glide__slide" v-for="(image, key) in product.images" :key="key">
              <img :src="`http://absolute-school-birix.01sh.ru${image}`" alt="">
            </li>
          </ul>
        </div>
        <div class="glide__bullets" data-glide-el="controls[nav]">
          <div v-for="(image, key) in product.images" :key="key" :data-glide-dir="`=${key}`">
            <img :src="`http://absolute-school-birix.01sh.ru${image}`" alt="">
          </div>
        </div>
        <div class="glide__controls" data-glide-el="controls">
          <div data-glide-dir="<">
            <osm-button class-name="button--slider_next">
              <svg width="65" height="42" viewBox="0 0 65 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M41.1404 0.356261L64.4767 21.4209L39.1965 41.5924L39.7196 28.8166L0.789897 37.726L2.00828 0.997138L40.5502 13.1202L41.1404 0.356261Z"
                  fill="#E49535" />
              </svg>
            </osm-button>
          </div>
          <div data-glide-dir=">">
            <osm-button class-name="button--slider_next">
              <svg width="65" height="42" viewBox="0 0 65 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M41.1404 0.356261L64.4767 21.4209L39.1965 41.5924L39.7196 28.8166L0.789897 37.726L2.00828 0.997138L40.5502 13.1202L41.1404 0.356261Z"
                  fill="#E49535" />
              </svg>
            </osm-button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else> С этим товаром что то не так </div>
</template>


<script>
import Glide from '@glidejs/glide';
import { mapGetters } from 'vuex';
export default {
    name: 'OsmProduct',
    props: {
        product: {
            type: Object,
            default: null
        }
    },
    components: {
        OsmHn: () => import('~/components/typografy/OsmHn.vue'),
        OsmCheckbox: () => import('~/components/forms/OsmCheckbox.vue'),
        OsmPrice: () => import('~/components/typografy/OsmPrice.vue'),
        OsmButton: () => import('~/components/global/OsmButton.vue'),
    },
    computed: {
        ...mapGetters({
            products: 'products/getProducts'
        }),
        offers() {
            return this.products.offers.filter(offer => offer.product === this.product.id).map(offer => ({
                ...offer,
                colors: this.products.colors.filter(color => color.id === offer.color).map(color => ({
                    color: {...color},
                    sizes: this.products.sizes.filter(size => size.id === offer.id)
                }))
            }));
        }
    },
    data: () => ({
        slider: null,
        selectedOffer: 0
    }),
    mounted() {
        if (this.$refs.cards__slider) {
            this.slider = new Glide(this.$refs.cards__slider, {
                gap: 0
            }).mount();
        }
        this.selectedOffer = this.offers[0].id;
    },
    beforeDestroy() {
        if (this.slider) {
            this.slider.destroy();
            this.slider = null;
        }
    },
    methods: {
        setOffer(id) {
            this.selectedOffer = id;
        }
    }
}
</script>


<style lang="scss">
.cards {
    &__more {
        > div {
            margin-left: auto;
            margin-right: auto;
            margin-bottom: vw(150);
        }
    }
}
</style>

<style lang="scss" scoped>
.cards {
    &__item {
        background: #F7DD85;
        box-shadow: 0px 70px 60px -60px #CCAD86, inset 0px -16px 29px rgba(151, 113, 65, 0.2), inset 0px 10px 20px rgba(255, 255, 255, 0.15);
        border-radius: vw(50);
        margin-bottom: vw(100);
        padding: vw(64) vw(160) vw(56) vw(104);
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
            text-transform: lowercase;
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
        &--r-side {
            width: vw(580);
            .glide {
                position: relative;
                &__track {
                    background: #FFFFFF;
                    padding: vw(85) 0;
                    width: 100%;
                    border-radius: vw(50);
                    filter: drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.1));
                    li {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }
                &__bullets {
                    position: relative;
                    bottom: unset;
                    margin-top: vw(20);
                    > div {
                        padding: vw(20) vw(10);
                        background: #FFFFFF;
                        cursor: pointer;
                        border-radius: vw(20);
                        filter: drop-shadow(0px 5px 30px rgba(0, 0, 0, 0.25));
                        opacity: 0.7;
                        transition: all .3s ease-out;
                        margin-left: vw(9);
                        margin-right: vw(9);
                        &.glide__bullet--active {
                            opacity: 1;
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
                            div {
                                left: vw(-30);
                                position: relative;
                                transform: rotate(191deg);
                                svg {
                                    filter: drop-shadow(0px -5px 0px #AD7026);
                                }
                                &:active {
                                    svg {
                                        filter: drop-shadow(0px 0px 0px #AD7026);
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
        &:nth-child(2n+1) {
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
        &:nth-child(2n+2) {
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
                    }
                    &__controls {
                        display: none;
                    }
                    &__bullets {
                        margin-top: 20px;
                        background: #ECD27A;
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
                                background: #85A833;
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
                width: calc(100% + 20px);
            }
            &--size-item {
                overflow: hidden;
                overflow-x: scroll;
                margin-bottom: 20px;
                padding-top: 2px;
            }
            &--colors {
                margin-bottom: 5px;
                width: max-content;
                flex-wrap: nowrap;
            }
            &--size {
                margin-bottom: 5px;
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
            }
            .price_all {
                margin-bottom: -13px;
                @media all and (max-width: 360px) {
                    font-size: 40px;
                }
            }
        }
    }
}
</style>