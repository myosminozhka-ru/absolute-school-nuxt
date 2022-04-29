<template>
  <header class="header center-block" :class="{ isOpened: isBurgerOpened }">
    <osm-logo />
    <osm-button class-name="button--help" @click="startIntro">
      <svg
        width="35"
        height="31"
        viewBox="0 0 35 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.7423 1.25028C20.6581 0.469084 19.2555 0.280828 18.0038 0.748511L2.82203 6.42082C1.15115 7.0451 0.0955353 8.70027 0.234104 10.4786L1.15388 22.2824C1.25725 23.6089 2.01347 24.7972 3.1714 25.4527L11.8541 30.3674C12.5809 30.7788 13.4183 30.9524 14.2487 30.8638L26.8116 29.5237C28.4162 29.3526 29.7608 28.234 30.2211 26.6873L34.1467 13.4975C34.6322 11.8662 34.0322 10.1063 32.6513 9.11125L21.7423 1.25028Z"
          fill="#E49535"
        />
        <path
          d="M16.0265 21.6636V23.9798H18.834V21.6636H16.0265ZM15.3246 15.6274C15.2778 14.2938 14.9268 13.4983 15.1842 12.1881C15.3246 11.4628 15.6053 10.8779 16.3072 10.7141C17.3366 10.4568 18.1087 10.6206 18.9042 11.2757C19.7231 11.9541 19.84 12.7028 19.957 13.7323C20.074 14.6681 19.6529 15.136 19.4657 16.0485L16.1668 17.6628L16.0966 20.4002L18.834 20.33L18.9042 18.7157C19.9102 18.1775 20.6823 18.1074 21.5012 17.3119C22.2966 16.5164 22.6476 15.8847 22.9049 14.7851C23.1857 13.6621 23.0687 12.9134 22.8348 11.767C22.5774 10.527 22.32 9.7783 21.6415 8.67867C21.1502 7.9066 20.7525 7.39188 19.8868 7.06433C18.717 6.61981 18.0385 6.78358 16.8687 6.85377C15.7925 6.92396 14.9034 6.6432 14.1314 7.41528C12.9381 8.60849 12.7042 9.70811 12.3065 11.3458C11.9087 12.9836 12.2129 13.9662 12.1661 15.6274H15.3246Z"
          fill="white"
        />
      </svg>
      <span>Помощь</span>
    </osm-button>
    <osm-button v-if="$device.isDesktop" class-name="button--order" :link="{ name: 'orders' }" data-intro="<div class='tour boy'><div class='tour__l'></div><div class='tour__r'><div class='tour__number'>01</div><div class='tour__title'>Ваши заказы</div><div class='tour__text'>Краткое пояснение по поводу заказов. Тут  вы можете посмотреть все свои заказы.</div></div></div>" data-step="1">
      <svg
        width="78"
        height="68"
        viewBox="0 0 78 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M72.4103 6.58791C74.6152 3.98928 72.7682 0 69.3602 0H9.39225C7.31296 0 5.58041 1.59306 5.40629 3.66505L0.424809 62.9448C0.208215 65.5222 2.45797 67.6245 5.01486 67.2338L67.8704 57.6309C70.1215 57.287 71.6318 55.1357 71.1904 52.9016L64.3738 18.3923C64.1376 17.1966 64.4594 15.9585 65.2479 15.0292L72.4103 6.58791Z"
          fill="#F7E085"
        />
        <path
          d="M51.9331 37.2487L48.7172 30.2796C48.7151 30.2749 48.5794 29.9369 48.1732 29.8656L34.6209 27.6383C34.6086 27.6363 34.4906 27.6175 34.3767 27.6395L20.8323 29.8656C20.5934 29.9048 20.3898 30.06 20.2883 30.2796L17.0724 37.2487C16.779 37.9349 17.4537 38.3184 17.7345 38.2832H20.2214V47.0472C20.2214 47.4042 20.4799 47.7086 20.8323 47.7666L34.3847 49.9939C34.396 49.9958 34.6094 49.9959 34.621 49.9939L48.1734 47.7666C48.5258 47.7085 48.7842 47.4042 48.7842 47.0472V38.2832H51.2711C51.5196 38.2832 51.7513 38.1564 51.8851 37.9471C52.0189 37.7378 52.037 37.4744 51.9331 37.2487ZM18.8741 36.8251L21.4503 31.2419L28.8579 30.0242L33.4092 29.2762L30.7696 36.8251H18.8741ZM33.7737 48.4159L21.6796 46.4281V38.2832H31.2868C31.5966 38.2832 31.8728 38.0874 31.975 37.7948L33.7737 32.6508V48.4159ZM47.326 46.4281L35.2318 48.4159V32.651L37.0306 37.7948C37.1327 38.0874 37.409 38.2832 37.7187 38.2832H47.326V46.4281ZM38.236 36.8251L35.5964 29.2762L40.3359 30.0552L47.5552 31.2418L50.1315 36.8251L38.236 36.8251Z"
          fill="#E49535"
          fill-opacity="0.7"
        />
        <path
          d="M33.7737 48.4159L21.6796 46.4281V38.2832H31.2868C31.5966 38.2832 31.8728 38.0874 31.975 37.7948L33.7737 32.6508V48.4159Z"
          fill="#E49535"
          fill-opacity="0.3"
        />
        <path
          d="M47.326 46.4281L35.2318 48.4159V32.651L37.0306 37.7948C37.1327 38.0874 37.409 38.2832 37.7187 38.2832H47.326V46.4281Z"
          fill="#E49535"
          fill-opacity="0.7"
        />
        <path
          d="M18.8741 36.8251L21.4503 31.2419L28.8579 30.0242L33.4092 29.2762L30.7696 36.8251H18.8741Z"
          fill="#E49535"
          fill-opacity="0.3"
        />
        <path
          d="M38.5942 22.5983C39.2123 21.9838 38.7771 20.9289 37.9056 20.9289C37.3662 20.9289 36.9289 20.4916 36.9289 19.9522V16.0078C36.9289 15.4555 36.4811 15.0078 35.9289 15.0078H33.0769C32.5246 15.0078 32.0769 15.4555 32.0769 16.0078V19.9522C32.0769 20.4916 31.6396 20.9289 31.1002 20.9289C30.2286 20.9289 29.7935 21.9838 30.4115 22.5983L33.7978 25.965C34.1879 26.3528 34.8179 26.3528 35.2079 25.965L38.5942 22.5983ZM33.1647 22.387C33.3692 22.387 33.535 22.2212 33.535 22.0167V17.4338C33.535 16.8992 33.9683 16.4659 34.5028 16.4659C35.0374 16.4659 35.4707 16.8992 35.4707 17.4338V22.0167C35.4707 22.2212 35.6365 22.387 35.841 22.387C36.1713 22.387 36.3362 22.7868 36.102 23.0197L35.153 23.9632C34.7933 24.3208 34.2123 24.3208 33.8526 23.9632L32.9037 23.0197C32.6694 22.7868 32.8344 22.387 33.1647 22.387Z"
          fill="#E49535"
          fill-opacity="0.4"
        />
      </svg>
      <span>Мои заказы</span>
    </osm-button>
    <osm-button v-if="$device.isDesktop" class-name="button--cart_min" :link="{ name: 'cart' }" data-intro="<div class='tour boy'><div class='tour__l'></div><div class='tour__r'><div class='tour__number'>02</div><div class='tour__title'>Корзина</div><div class='tour__text'>Тут можете посмотреть что находится в вашей корзине и взаимодействовать с товарами.</div></div></div>" data-step="2">
      <div class="icon">
        <svg
          width="72"
          height="70"
          viewBox="0 0 72 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M72 5.36005C72 2.68539 69.4257 0.764257 66.8616 1.52546L40.9994 9.20331C40.3441 9.39785 39.6498 9.42121 38.9829 9.27116L5.80118 1.80526C3.0304 1.18184 0.510651 3.5639 0.977547 6.3653L6.44558 39.1735C6.4818 39.3908 6.5 39.6107 6.5 39.8311V65.343C6.5 67.7927 8.68206 69.6669 11.1037 69.2971L68.6037 60.5185C70.5571 60.2203 72 58.5404 72 56.5643V32.5V5.36005Z"
            fill="#F7E085"
          />
          <path
            d="M32.861 52.0007C31.8451 52.0007 30.852 51.7072 30.0074 51.1573C29.1627 50.6075 28.5044 49.8259 28.1156 48.9115C27.7268 47.9971 27.6251 46.9909 27.8233 46.0202C28.0215 45.0494 28.5107 44.1578 29.229 43.4579C29.9474 42.758 30.8626 42.2814 31.8589 42.0883C32.8553 41.8953 33.888 41.9944 34.8266 42.3731C35.7651 42.7519 36.5673 43.3933 37.1317 44.2162C37.6961 45.0392 37.9974 46.0067 37.9974 46.9965C37.9959 48.3232 37.4543 49.5953 36.4914 50.5335C35.5284 51.4717 34.2228 51.9993 32.861 52.0007ZM32.861 44.6049C32.3753 44.6049 31.9005 44.7452 31.4966 45.0081C31.0928 45.2711 30.7781 45.6448 30.5922 46.082C30.4064 46.5192 30.3578 47.0003 30.4526 47.4644C30.5475 47.9285 30.7814 48.3548 31.1249 48.6893C31.4684 49.0239 31.9061 49.2517 32.3825 49.3439C32.8589 49.4361 33.3526 49.3886 33.8013 49.2074C34.25 49.0262 34.6335 48.7194 34.9032 48.3259C35.1729 47.9323 35.3168 47.4697 35.3166 46.9965C35.3159 46.3622 35.0569 45.7542 34.5965 45.3058C34.1361 44.8574 33.5119 44.6053 32.861 44.6049Z"
            fill="#E49535"
            fill-opacity="0.6"
          />
          <path
            d="M45.9445 52.0007C44.9286 52.0007 43.9355 51.7072 43.0909 51.1573C42.2462 50.6075 41.5878 49.8259 41.1991 48.9115C40.8103 47.9971 40.7086 46.9909 40.9068 46.0202C41.105 45.0494 41.5942 44.1578 42.3125 43.4579C43.0309 42.758 43.9461 42.2814 44.9424 42.0883C45.9388 41.8953 46.9715 41.9944 47.9101 42.3731C48.8486 42.7519 49.6508 43.3933 50.2152 44.2162C50.7796 45.0392 51.0808 46.0067 51.0808 46.9965C51.0794 48.3232 50.5378 49.5953 49.5749 50.5335C48.6119 51.4717 47.3063 51.9993 45.9445 52.0007ZM45.9445 44.6049C45.4588 44.6049 44.984 44.7452 44.5801 45.0081C44.1763 45.2711 43.8616 45.6448 43.6757 46.082C43.4899 46.5192 43.4413 47.0003 43.5361 47.4644C43.631 47.9285 43.8649 48.3548 44.2084 48.6893C44.5519 49.0239 44.9896 49.2517 45.466 49.3439C45.9424 49.4361 46.4361 49.3886 46.8848 49.2074C47.3335 49.0262 47.7169 48.7194 47.9867 48.3259C48.2564 47.9323 48.4002 47.4697 48.4001 46.9965C48.3994 46.3622 48.1404 45.7542 47.68 45.3058C47.2196 44.8574 46.5954 44.6053 45.9445 44.6049Z"
            fill="#E49535"
            fill-opacity="0.6"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.855 26.2711L23.5796 19.6118H19.3404C18.9849 19.6118 18.644 19.4742 18.3926 19.2293C18.1412 18.9844 18 18.6523 18 18.3059C18 17.9596 18.1412 17.6274 18.3926 17.3825C18.644 17.1376 18.9849 17 19.3404 17H24.55C24.8314 17 25.1056 17.0863 25.3338 17.2466C25.5621 17.4069 25.7327 17.6332 25.8216 17.8932L28.1193 24.6167H27.1483C26.9467 24.6167 26.7478 24.661 26.5662 24.7463C26.3846 24.8315 26.2251 24.9556 26.0996 25.1092C25.974 25.2628 25.8857 25.442 25.841 25.6335C25.7964 25.825 25.7967 26.0238 25.8418 26.2152L25.855 26.2711ZM25.855 26.2711L28.9283 39.3161C28.9958 39.6051 29.1622 39.863 29.4001 40.0477C29.638 40.2323 29.9333 40.3326 30.2374 40.3321H48.5677C48.8714 40.332 49.166 40.2314 49.4034 40.0468C49.6407 39.8623 49.8067 39.6046 49.8741 39.3161L52.9659 26.2152C53.0111 26.0236 53.0114 25.8245 52.9666 25.6329C52.9218 25.4412 52.8332 25.2618 52.7073 25.1081C52.5815 24.9545 52.4217 24.8305 52.2398 24.7454C52.0579 24.6603 51.8586 24.6163 51.6568 24.6167H28.1193L28.4246 25.5102C28.4918 25.7065 28.51 25.9155 28.478 26.12C28.4459 26.3245 28.3644 26.5187 28.2403 26.6865C28.1161 26.8544 27.9528 26.991 27.7637 27.0853C27.5747 27.1796 27.3654 27.2288 27.1531 27.2288H27.1486C26.8672 27.2288 26.593 27.1425 26.3648 26.9822C26.1366 26.8218 25.9659 26.5956 25.877 26.3355L25.855 26.2711ZM47.5007 37.7203H31.3044L28.8309 27.2312H49.9733L47.5007 37.7203Z"
            fill="#E49535"
          />
          <path
            d="M25.841 25.6335C25.7964 25.825 25.7967 26.0238 25.8418 26.2152L25.855 26.2711L25.877 26.3355C25.9659 26.5956 26.1366 26.8218 26.3648 26.9822C26.593 27.1425 26.8672 27.2288 27.1486 27.2288H27.1531C27.3654 27.2288 27.5747 27.1796 27.7637 27.0853C27.9528 26.991 28.1161 26.8544 28.2403 26.6865C28.3644 26.5187 28.4459 26.3245 28.478 26.12C28.51 25.9155 28.4918 25.7065 28.4246 25.5102L28.1193 24.6167H27.1483C26.9467 24.6167 26.7478 24.661 26.5662 24.7463C26.3846 24.8315 26.2251 24.9556 26.0996 25.1092C25.974 25.2628 25.8857 25.442 25.841 25.6335Z"
            fill="#E49535"
          />
          <path
            d="M31.3044 37.7203H47.5007L49.9733 27.2312H28.8309L31.3044 37.7203Z"
            fill="#E49535"
            fill-opacity="0.3"
          />
        </svg>
        <div v-if="cart.items" class="cart_amount">
          <svg
            width="31"
            height="38"
            viewBox="0 0 31 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_227_7884)">
              <path
                d="M13.8907 1.18111C14.6901 0.0977127 16.3099 0.0977114 17.1093 1.18111L18.5982 3.19901C19.1062 3.88749 19.9959 4.17657 20.8116 3.91817L23.2022 3.16082C24.4858 2.75419 25.7963 3.70635 25.8062 5.0527L25.8247 7.56037C25.831 8.41596 26.3808 9.17278 27.1926 9.44316L29.5718 10.2356C30.8492 10.6611 31.3498 12.2017 30.5664 13.2968L29.1074 15.3364C28.6096 16.0323 28.6096 16.9677 29.1074 17.6636L30.5664 19.7032C31.3498 20.7983 30.8492 22.3389 29.5718 22.7644L27.1926 23.5568C26.3808 23.8272 25.831 24.584 25.8247 25.4396L25.8062 27.9473C25.7963 29.2937 24.4858 30.2458 23.2022 29.8392L20.8116 29.0818C19.9959 28.8234 19.1062 29.1125 18.5982 29.801L17.1093 31.8189C16.3099 32.9023 14.6901 32.9023 13.8907 31.8189L12.4018 29.801C11.8938 29.1125 11.0041 28.8234 10.1884 29.0818L7.79776 29.8392C6.51424 30.2458 5.20372 29.2937 5.1938 27.9473L5.17534 25.4396C5.16904 24.584 4.61918 23.8272 3.80742 23.5568L1.42818 22.7644C0.150785 22.3389 -0.349792 20.7983 0.433558 19.7032L1.89259 17.6636C2.3904 16.9677 2.3904 16.0323 1.89259 15.3364L0.433559 13.2968C-0.349791 12.2017 0.150784 10.6611 1.42818 10.2356L3.80741 9.44316C4.61918 9.17278 5.16904 8.41596 5.17534 7.56037L5.1938 5.0527C5.20372 3.70635 6.51424 2.75419 7.79776 3.16081L10.1884 3.91817C11.0041 4.17657 11.8938 3.88749 12.4018 3.19901L13.8907 1.18111Z"
                fill="#85A833"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_227_7884"
                x="0.059082"
                y="0.369141"
                width="30.8818"
                height="37.2617"
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
                <feOffset dy="5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.415686 0 0 0 0 0.52549 0 0 0 0 0.14902 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_227_7884"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_227_7884"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <div v-if="cart.items" class="amt">{{ cart.items.length }}</div>
        </div>
      </div>

      <span>Корзина</span>
    </osm-button>
    <osm-header-info />
    <osm-button v-if="$device.isDesktop" data-intro="<div class='tour boy'><div class='tour__l'></div><div class='tour__r'><div class='tour__number'>04</div><div class='tour__title'>Выход</div><div class='tour__text'>Выход, для завершения покупок</div></div></div>" data-step="4" @click="logout">
      <span>Выход {{ tourStep }}</span>
    </osm-button>
    <osm-burger :is-burger-opened.sync="isBurgerOpened" />
    <osm-modal-tour
      v-if="tourStep"
      :is-show="isModalShow"
      @onClose="isModalShow = false"
    />
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'OsmHeader',
  components: {
    OsmModalTour: () => import('~/components/modal/OsmModalTour.vue'),
  },
  data: () => ({
    isBurgerOpened: false,
    isModalShow: false,
  }),
  computed: {
    ...mapGetters('cart', {
      cart: 'getCartItems',
    }),
    ...mapGetters('localStorage', {
      tourStep: 'getTourStep',
    }),
  },
  watch: {
    tourStep(newTourStep, oldTourStep) {
      switch (newTourStep) {
        case '1':
          this.isBurgerOpened = true;
          setTimeout(() => {
            this.$intro.refresh();
          }, 300)
          break;
        case '2':
          this.isBurgerOpened = true;
          setTimeout(() => {
            this.$intro.refresh();
          }, 300)
          break;
        case '4':
          this.isBurgerOpened = true;
          setTimeout(() => {
            this.$intro.refresh();
          }, 300)
          break;
        default:
          this.isBurgerOpened = false;
          break;
      }
    }
  },
  mounted() {
    const self = this;
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.introjs-tooltipReferenceLayer')) {
        this.isBurgerOpened = false
      }
    })
    this.$intro.onbeforechange(function(targetElement) {
      if (targetElement.dataset.step) {
        self.setTourStep(targetElement.dataset.step)
      }
    });
    this.$intro.oncomplete(function(targetElement) {
      self.isModalShow = true;
    });
  },
  methods: {
    ...mapActions('localStorage', {
      signOut: 'signOut',
      setTourStep: 'setTourStep'
    }),
    logout() {
      this.signOut()
      this.$router.push({ name: 'auth' })
    },
    startIntro() {
      this.$intro.start()
    },
  },
}
</script>

<style lang="scss">
.header {
  display: flex;
  width: 100%;
  margin-bottom: vw(80);
  align-items: center;
  &__logo {
    max-width: 111px;
    width: 100%;
    margin-right: 30px;
    display: block;
    img {
      pointer-events: none;
    }
  }
  &__info {
    display: flex;
    align-items: center;
    margin-left: vw(60);
    max-width: vw(350);
    width: 100%;
    margin-right: vW(10);
    &--img {
      max-width: vw(80);
      width: 100%;
      max-height: vw(80);
      height: 100%;
      margin-right: vw(20);
      img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.2));
      }
    }
    &--text {
      width: 100%;
    }
    &--name {
      font-family: 'Gilroy', serif;
      font-style: normal;
      font-weight: 700;
      font-size: vw(20);
      color: #515151;
      margin-bottom: vw(10);
    }
    &--price {
      > span {
        display: inline-block;
        margin-right: vw(10);
        font-family: 'Gilroy', serif;
        font-style: normal;
        font-weight: 500;
        font-size: vw(18);
        color: #686868;
      }
      .price_all {
        font-size: inherit;
        line-height: normal;
        display: inline-block;
        svg {
          width: vw(16);
          height: vw(16);
        }
        span {
          font-size: vw(40);
          color: #e49535;
        }
      }
    }
  }
  .button--order {
    margin-left: auto;
  }
  .button--cart_min {
    margin-left: vw(33);
  }
  .button--orange {
    margin-left: vw(15);
  }
  .button--burger {
    display: none;
  }
  .menu_burger {
    display: none;
  }
}
.isTablet,
.isMobile {
  .header {
    margin-bottom: 10px;
    .button--burger {
      display: block;
    }
    .button--order,
    .button--cart_min,
    .button--orange,
    .button--help {
      display: none;
    }
    &__logo {
      max-width: 73px;
      margin-right: 0;
    }
    &__info {
      max-width: 330px;
      &--img {
        max-width: 58px;
        max-height: 58px;
        margin-right: 10px;
      }
      &--name {
        font-size: 14px;
        margin-bottom: 5px;
      }
      &--price {
        > span {
          display: none;
        }
        .price_all {
          svg {
            width: 14px;
            height: 14px;
            bottom: 0;
          }
          span {
            font-size: 35px;
          }
        }
      }
    }
    display: flex;
    justify-content: space-between;
    .menu_burger {
      display: block;
      &--body {
        position: fixed;
        z-index: 5;
        top: 0;
        right: 0;
        width: 286px;
        height: 100vh;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 0px 0px 0px 20px;
        overflow: auto;
        overflow-x: hidden;
        padding: 15px 30px 15px 40px;
        transition: all 0.3s ease-out;
        transform: translate(286px, 0px);
      }
      .button--order,
      .button--cart_min,
      .button--orange,
      .button--help {
        display: flex;
      }
      .button--order,
      .button--cart_min {
        margin-left: 0;
      }
      .button--order {
        margin-bottom: 45px;
      }
      .button--orange {
        margin-top: 10px;
        margin-bottom: 100px;
      }
      &--item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 126px;
      }
      &--items {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: calc(100vh - 200px);
      }
    }
    &:before {
      content: '';
      transition: all 0.3s ease-out;
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      z-index: 4;
      bottom: 0;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      background: rgba(131, 80, 19, 0.4);
      backdrop-filter: blur(8px);
    }
    &.isOpened {
      .menu_burger {
        &--body {
          transform: translate(0px, 0px);
        }
      }
      &:before {
        opacity: 1;
        visibility: visible;
        pointer-events: all;
      }
    }
  }
}
.isMobile {
  .header {
    &__info {
      max-width: 165px;
    }
    @media all and (max-width: 345px) {
      &__logo {
        max-width: 65px;
      }
      &__info {
        img {
          max-width: 50px;
          max-height: 50px;
        }
        &--name {
          margin-bottom: 0;
          font-size: 13px;
        }
        &--price {
          .price_all {
            span {
              font-size: 25px;
            }
          }
        }
      }
      .button--burger {
        svg {
          width: 38px;
          height: 30px;
        }
      }
    }
  }
}
</style>
