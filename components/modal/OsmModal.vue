<template>
  <div class="modal" :class="{ isOpened: isShow, isLoading }">
    <div v-if="typeModal === 'arrange'" class="modal__in">
      <div class="modal__closer">
        <osm-button class-name="button--close" @click="onClose">
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
      </div>
      <div class="modal__title">Вы хотите купить все товары в корзине?</div>
      <div class="modal__buttons">
        <div @click="onClose">
          <osm-button class-name="button--no_btn">
            <svg
              width="165"
              height="100"
              viewBox="0 0 165 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.0898 2.1148C30.9504 0.8242 32.4796 0.147535 34.0135 0.378557L100.032 10.3215C100.506 10.3929 100.988 10.3785 101.457 10.279L145.078 1.02472C147.566 0.496917 149.909 2.3944 149.909 4.93763V46.6252C149.909 47.0322 149.971 47.4368 150.093 47.8251L164.717 94.3286C165.569 97.0376 163.405 99.7468 160.575 99.5152L57.2525 91.0616C56.7552 91.0209 56.2547 91.0736 55.7769 91.2169L29.7166 99.035C27.8565 99.5931 25.8643 98.7344 24.9927 96.9991L1.04418 49.3182C0.398678 48.033 0.49279 46.5002 1.29067 45.3037L30.0898 2.1148Z"
                fill="#E49535"
              />
            </svg>
            <span>Нет</span>
          </osm-button>
        </div>
        <div @click="makeOrder">
          <osm-button class-name="button--yes_btn">
            <svg
              width="160"
              height="100"
              viewBox="0 0 160 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.75954 4.49914C6.75954 2.10442 8.8495 0.246327 11.2277 0.526632L94.594 10.3524C95.0271 10.4034 95.4657 10.3833 95.8924 10.2928L139.578 1.02472C142.066 0.496917 144.408 2.3944 144.408 4.93763V46.6252C144.408 47.0322 144.471 47.4368 144.593 47.8251L159.115 94.0059C159.993 96.7983 157.673 99.5571 154.771 99.1709L50.9909 85.3562C50.5921 85.3031 50.1876 85.3105 49.791 85.3781L5.4195 92.9413C2.74292 93.3975 0.399215 91.1113 0.788775 88.4242L6.71816 47.5247C6.74571 47.3347 6.75954 47.1429 6.75954 46.9508V4.49914Z"
                fill="#E49535"
              />
            </svg>
            <span>Да</span>
          </osm-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'OsmModal',
  components: {
    OsmButton: () => import('~/components/global/OsmButton.vue'),
  },
  props: {
    typeModal: {
      type: String,
      default: '',
    },
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    isLoading: false,
  }),
  methods: {
    ...mapActions('orders', ['sendOrder']),
    ...mapActions('cart', ['loadCart']),
    onClose() {
      this.$emit('onClose')
    },
    makeOrder() {
      this.isLoading = true
      this.sendOrder()
        .then((response) => {
          this.isLoading = false
          this.onClose();
          this.loadCart();
          this.$toast.success(`Заказ №${response.order} создан`)
          this.$router.push({ name: 'orders' });
        })
        .catch((error) => {
          this.$toast.error(error)
        })
    },
  },
}
</script>
<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  background: rgba(131, 80, 19, 0.4);
  z-index: 200;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  &.isOpened {
    opacity: 1;
    visibility: visible;
  }
  &.isLoading {
    pointer-events: none;
  }
  &.isLoading &__in {
    opacity: 0.5;
  }
  &:after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }
  &__in {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    width: 100%;
    max-width: vw(796);
    padding: vw(115) vw(174) vw(120) vw(174);
    min-height: vw(530);
    background: url("data:image/svg+xml,%3Csvg width='771' height='513' viewBox='0 0 771 513' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.34181 27.7142C-3.80466 13.5504 7.96817 -1.00112 22.8943 1.07471L216.5 28H729.559C742.515 28 752.052 40.1316 748.993 52.7221L683.505 322.25C682.224 327.522 683.14 333.089 686.043 337.673L767.068 465.607C775.393 478.751 766.18 495.95 750.625 496.303L37.4747 512.49C25.5095 512.761 15.9862 502.534 17.1091 490.619L48.078 161.979C48.3559 159.03 47.9753 156.056 46.9638 153.272L1.34181 27.7142Z' fill='white'/%3E%3C/svg%3E%0A")
      50% / contain no-repeat;
  }
  &__closer {
    top: vw(-6.5);
    position: absolute;
    right: vw(-3);
    svg {
      pointer-events: none;
    }
  }
  &__title {
    margin-bottom: vw(60);
    font-family: 'Jingleberry', serif;
    font-style: normal;
    font-weight: 900;
    font-size: vw(50);
    line-height: 120%;
    text-align: center;
    color: #000000;
    max-width: vw(447);
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  &__stitle {
    font-family: 'Jingleberry', serif;
    font-style: normal;
    font-weight: 900;
    font-size: vw(50);
    line-height: 120%;
    text-align: center;
    color: #000000;
    max-width: vw(447);
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: vw(20);
  }
  &__subtitle {
    font-family: 'Gilroy', serif;
    font-style: normal;
    font-weight: 400;
    font-size: vw(20);
    line-height: 160%;
    text-align: center;
    color: #424242;
    margin-bottom: vw(40);
  }
  &__buttons {
    max-width: vw(447);
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__back {
    .button {
      margin-left: auto;
      margin-right: auto;
    }
  }
  &.education {
    padding: 0;
    background: rgba(32, 32, 32, 0.4);
    .modal__in {
      padding: 0;
      background: none;
      width: 100%;
      max-width: 100%;
      min-height: 0;
      height: 100vh;
    }
    .modal__closer {
      z-index: 2;
      top: vw(59);
      right: vw(56);
    }
    .modal__controls {
      z-index: 2;
      right: vw(55);
      bottom: vw(120);
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: vw(710);
      width: 100%;
    }
    .glide {
      &__slides {
        transform: none !important;
        width: auto !important;
        display: block;
      }
      &__slide {
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
        transition: opacity 0.5s;
        height: 100vh;
        &:first-child {
          position: relative;
        }
        &--active {
          z-index: 1;
          opacity: 1;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          &.mob_img {
            display: none;
          }
        }
      }
      .number {
        font-family: 'Jingleberry', serif;
        font-style: normal;
        font-weight: 900;
        font-size: vw(55);
        line-height: 160%;
        text-align: center;
        text-transform: uppercase;
        color: #ffffff;
        span {
          &:nth-child(2) {
            font-size: vw(35);
            color: #e2dddd;
          }
        }
      }
    }
  }
}
.isTablet,
.isMobile {
  .modal {
    &__in {
      max-width: 345px;
      width: 100%;
      background: url("data:image/svg+xml,%3Csvg width='331' height='314' viewBox='0 0 331 314' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.855597 24.8475C-2.32949 10.5159 10.4977 -2.2488 24.8136 1.00632L89.9797 15.8236C91.4347 16.1544 92.922 16.3214 94.4141 16.3214H304.066C315.68 16.3214 324.851 26.1801 324.014 37.7636L310.655 222.55C310.442 225.484 310.88 228.429 311.937 231.175L328.944 275.369C333.873 288.176 324.734 302.029 311.02 302.538L27.0951 313.075C15.2081 313.516 5.56587 303.547 6.40296 291.681L19.15 110.991C19.2859 109.065 19.1421 107.13 18.7233 105.245L0.855597 24.8475Z' fill='white'/%3E%3C/svg%3E%0A")
        50% / contain no-repeat;
      padding: 65px 30px;
    }
    &__closer {
      right: 0;
      top: -4px;
    }
    &__title {
      margin-bottom: 30px;
      font-size: 30px;
      max-width: 100%;
    }
    &__stitle {
      margin-bottom: 10px;
      font-size: 30px;
      max-width: 100%;
    }
    &__subtitle {
      font-size: 16px;
      margin-bottom: 30px;
    }
    &__buttons {
      max-width: 230px;
    }
    &.education {
      .modal__controls {
        max-width: calc(100% - 30px);
        bottom: 35px;
        left: 15px;
        right: 15px;
      }
      .glide {
        .number {
          font-size: 35px;
          span {
            &:nth-child(2) {
              font-size: 20px;
            }
          }
        }
        &__slide {
          img {
            &.desc_img {
              display: none;
            }
            &.mob_img {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
