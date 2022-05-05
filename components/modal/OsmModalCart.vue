<template>
  <div class="modal isShow" :class="{ isOpened: isShow, isLoading }">
    <div class="modal__in">
      <div v-if="false" class="modal__closer">
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
      <div class="modal__title">Корзина пуста!</div>
      <div class="modal__subtitle">Сейчас будете перенаправлены на главную страницу для выбора товара.</div>
      <div class="modal__buttons">
        <div class="modal__back" @click="goToMain">
          <osm-button class-name="button--back">
            <svg width="311" height="100" viewBox="0 0 311 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.75954 4.17817C6.75954 1.90067 8.65841 0.0827765 10.9337 0.181965L245.5 10.4073C245.837 10.422 246.174 10.394 246.504 10.324L290.338 1.02472C292.826 0.496915 295.168 2.3944 295.168 4.93763V46.6252C295.168 47.0322 295.23 47.4368 295.352 47.8251L309.874 94.0059C310.753 96.7983 308.432 99.5571 305.531 99.1709L201.496 85.3224C201.265 85.2916 201.031 85.2811 200.798 85.291L4.82166 93.6591C2.31728 93.7661 0.332776 91.5696 0.692418 89.0889L6.71816 47.5247C6.74571 47.3347 6.75954 47.1429 6.75954 46.9508V4.17817Z" fill="#E49535"/>
        </svg>
            <span>к выбору</span>
          </osm-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
    interval: null
  }),
  beforeDestroy() {
    if (!this.interval) return;
    clearInterval(this.interval);
  },
  beforeMount() {
    if (this.interval) return;
    console.log(this.interval);
    this.interval = setInterval(() => {
      this.goToMain();
    }, 5000)
  },
  methods: {
    onClose() {
      this.$emit('onClose')
    },
    goToMain() {
      this.$router.push({ name: 'index'})
    },
  },
}
</script>
