<template>
  <div class="orders center-block">
    <template v-if="getOrders.length">
      <osm-orders-block
        v-for="order in getOrders"
        :key="order.id"
        :order="order"
      />
      <div v-if="false" class="orders__more">
        <osm-button class-name="button--more" @click="onLoadMore">
          <svg
            width="261"
            height="100"
            viewBox="0 0 261 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_227_7177)">
              <path
                d="M5.68066 4.21286C5.68066 1.92233 7.60041 0.0995808 9.88787 0.218236L206.141 10.3982C206.54 10.4189 206.939 10.3797 207.327 10.2819L243.077 1.25693C245.604 0.619054 248.057 2.52918 248.057 5.13526V46.7196C248.057 47.0646 248.101 47.4081 248.189 47.7416L260.432 94.0672C261.17 96.8612 258.793 99.4921 255.939 99.04L169.456 85.3413C169.182 85.2979 168.904 85.2832 168.627 85.2972L4.74867 93.6238C2.269 93.7497 0.274768 91.6098 0.575049 89.1451L5.68066 47.2393V4.21286Z"
                fill="#85A832"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_227_7177"
                x="0.545044"
                y="0.212891"
                width="260.023"
                height="98.8779"
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
                <feOffset />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.415686 0 0 0 0 0.52549 0 0 0 0 0.14902 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_227_7177"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_227_7177"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <span>Показать еще</span>
        </osm-button>
      </div>
    </template>
    <template v-else>
      <h1>Нет заказов</h1>
    </template>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'OsmOrders',
  components: {
    OsmOrdersBlock: () => import('./OsmOrdersBlock.vue'),
    OsmButton: () => import('~/components/global/OsmButton.vue'),
  },
  computed: {
    ...mapGetters('orders', {
      getOrders: 'getOrders',
    }),
  },
  methods: {
    onLoadMore() {
      // TODO: Тут подгрузка данных при нажатии на кнопку "Показать еще"
    },
  },
}
</script>
<style lang="scss">
.orders_status {
  margin-bottom: vw(77);
}
.orders {
  margin-bottom: vw(150);
  &__block {
    background: #f7dd85;
    box-shadow: 0px 70px 60px -60px #ccad86,
      inset 0px -16px 29px rgba(151, 113, 65, 0.2),
      inset 0px 10px 20px rgba(255, 255, 255, 0.15);
    border-radius: vw(30);
    padding: vw(37) vw(69) vw(40) vw(44);
    display: flex;
    justify-content: space-between;
    margin-bottom: vw(40);
    &--l-side {
      max-width: vw(210);
      width: 100%;
      margin-right: vw(45);
    }
    &--order-number {
      font-family: 'Jingleberry';
      font-style: normal;
      font-weight: 900;
      font-size: vw(25);
      text-transform: uppercase;
      color: #424242;
      margin-bottom: vw(5);
      span {
        margin-right: vw(10);
        display: inline-block;
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 600;
        font-size: vw(20);
        line-height: 160%;
        color: #424242;
        text-transform: initial;
      }
    }
    &--date {
      font-family: 'Gilroy', serif;
      font-style: normal;
      font-weight: 400;
      font-size: vw(20);
      line-height: 160%;
      color: #686868;
      margin-bottom: vw(33);
    }
    &--status {
      width: max-content;
      font-family: 'Gilroy', serif;
      font-style: normal;
      font-weight: 600;
      font-size: vw(20);
      color: #515151;
      padding: vw(10) vw(30);
      background: #ffffff;
      border: vw(4) solid rgba(81, 81, 81, 0.3);
      box-shadow: 0px 17px 30px rgba(173, 112, 38, 0.24);
      border-radius: 90px;
    }
    &--card {
      display: flex;
      align-items: flex-start;
      h2 {
        font-size: vw(30);
        line-height: 120%;
        margin-bottom: vw(12);
      }
    }
    &--img {
      max-width: vw(238);
      width: 100%;
      margin-right: vw(30);
      padding: vw(36) vw(25);
      background: #ffffff;
      border-radius: 30px;
      filter: drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.1));
      display: flex;
      align-items: center;
      justify-content: center;
      max-height: vw(238);
      min-height: vw(238);
      height: vw(238);
    }
    &--text {
      margin-right: vw(100);
      max-width: vw(277);
      width: 100%;
    }
    &--description {
      font-family: 'Gilroy', serif;
      font-style: normal;
      font-weight: 400;
      font-size: vw(14);
      line-height: 160%;
      // text-transform: lowercase;
      color: #686868;
      margin-bottom: vw(34);
    }
    .price_all {
      font-size: inherit;
      svg {
        width: vw(16);
        height: vw(16);
        margin-right: vw(10);
      }
      span {
        font-size: vw(40);
      }
    }
    &--amount {
      margin-top: auto;
      margin-bottom: auto;
      &.mob {
        display: none;
      }
    }
    &--card {
      margin-bottom: vw(20);
      width: 100%;
    }
    &--r-side {
      max-width: vw(250);
      width: 100%;
      margin-left: vw(50);
    }
    &--price {
      padding-left: vw(30);
      padding-top: vw(7);
      > span {
        font-family: 'Jingleberry', serif;
        font-style: normal;
        font-weight: 900;
        font-size: vw(25);
        text-transform: uppercase;
        color: #424242;
        margin-bottom: vw(47);
        display: block;
      }
      .price_all {
        font-size: inherit;
        display: flex;
        margin-bottom: vw(86);
        svg {
          width: vw(26);
          height: vw(26);
          margin-right: vw(10);
          bottom: 0;
        }
        span {
          font-size: vw(60);
        }
      }
    }
    &--item {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
    }
    &--repeat-mob {
      display: none;
    }
    &--more {
      display: none;
    }
  }
  &__more {
    margin-top: vw(100);
    display: flex;
    justify-content: center;
    > div {
      margin-left: auto;
      margin-right: auto;
    }
  }
}
.isTablet,
.isMobile {
  .orders {
    margin-bottom: 80px;
    &__block {
      padding: 20px;
      border-radius: 20px;
      flex-wrap: wrap;
      margin-bottom: 20px;
      &--l-side {
        max-width: 50%;
        order: 1;
        margin: 0;
      }
      &--r-side {
        max-width: 50%;
        order: 2;
        margin: 0;
      }
      &--info {
        width: 100%;
        order: 3;
        padding-top: 40px;
        display: none;
        padding-bottom: 40px;
        &.isActive {
          display: block;
        }
      }
      &--price {
        padding-left: 0;
        text-align: right;
        > span {
          display: none;
        }
        .button--orange {
          display: none;
        }
        .price_all {
          margin-left: auto;
          display: block;
          svg {
            width: 14px;
            height: 14px;
            margin-right: 6px;
          }
          span {
            font-size: 30px;
          }
        }
      }
      &--order-number {
        font-size: 16px;
        margin-bottom: 2px;
        span {
          font-size: 14px;
          margin-right: 7px;
        }
      }
      &--date {
        font-size: 14px;
        margin-bottom: 20px;
      }
      &--status {
        font-size: 14px;
        padding: 10px 8px;
      }
      &--card {
        margin-bottom: 38px;
        flex-wrap: wrap;
        h2 {
          margin-top: 3px;
          margin-bottom: 10px;
          font-size: 16px;
        }
      }
      &--img {
        max-width: 123px;
        margin-right: 20px;
        border-radius: 10px;
        padding: 19px 13px;
        max-height: 123px;
        min-height: 123px;
        height: 123px;
        @media all and (max-width: 370px) {
          width: 90px;
          max-height: 90px;
          min-height: 90px;
          height: 90px;
        }
      }
      &--item {
        flex-direction: column;
        align-items: flex-start;
        width: calc(100% - 143px);
        @media all and (max-width: 370px) {
          width: calc(100% - 110px);
        }
      }
      &--text {
        max-width: 100%;
        margin-right: 0;
      }
      &--description {
        margin-bottom: 10px;
        font-size: 10px;
        line-height: 150%;
      }
      .price_all {
        margin-bottom: 0;
        svg {
          width: 10px;
          height: 10px;
          margin-right: 5px;
          bottom: 0;
        }
        span {
          font-size: 20px;
        }
      }
      &--repeat-mob {
        display: block;
        order: 4;
        width: 100%;
        .button--orange {
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
      }
      &--amount {
        display: none;
        &.mob {
          display: block;
          margin-top: 20px;
          margin-bottom: 20px;
          .product_amount {
            font-size: 14px;
            padding: 5px 20px;
          }
        }
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
    }
    &__more {
      margin-top: 60px;
    }
  }
}
</style>
