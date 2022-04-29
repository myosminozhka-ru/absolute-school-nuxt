<template>
  <div class="tabs_blocks center-block" :class="{ orders_status: title }">
    <div class="tabs_blocks__l-side">
      <div class="tabs_blocks__buttons">
        <div class="tabs_blocks__item" data-intro="<div class='tour girl'><div class='tour__l'></div><div class='tour__r'><div class='tour__number'>05</div><div class='tour__title'>Фильтрация по направлениям </div><div class='tour__text'>Вы можете выбрать что вас интересует по направлению и типу товаров.</div></div></div>" data-step="5">
          <div class="tabs_blocks__buttons--owf">
            <div
              v-for="button in sectionList"
              :key="button.id"
              @click="addSection(button)"
            >
              <osm-button
                class-name="button--white"
                :class="{ isActive: selected == button }"
                >{{ button.name }}
              </osm-button>
            </div>
          </div>
        </div>
        <div @click="addSection({ id: null, name: 'all' })">
          <osm-button class-name="button--green"><span>Все</span></osm-button>
        </div>
      </div>
    </div>
    <div class="tabs_blocks__r-side">
      <osm-hn v-if="title">Мои заказы:</osm-hn>
      <form v-else action="" data-intro="<div class='tour girl'><div class='tour__l'></div><div class='tour__r'><div class='tour__number'>06</div><div class='tour__title'>Поиск</div><div class='tour__text'>Вы можете ввести ваш запрос вручную и найти что вас интересует</div></div></div>" data-step="6">
        <osm-input
          class-name="input--white"
          :value="searchText"
          text="Введите что нужно найти"
          @update:value="addSearchText($event)"
        />
        <osm-button v-if="false" class-name="button--search">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 16.0311C0 14.0138 1.50215 12.3122 3.50386 12.062L95.5039 0.562017C97.8913 0.26359 100 2.12514 100 4.53113V95.5018C100 97.8962 97.9106 99.7542 95.5326 99.4744L3.53264 88.6509C1.51818 88.4139 0 86.7066 0 84.6783V16.0311Z"
              fill="#85A832"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M57.6247 55.9745L58.7665 57.1178H60.0891L72 69.0302V73H68.0344L56.1234 61.0877V59.7721L54.9745 58.6247C52.0259 60.994 48.28 62.4115 44.2031 62.4109C34.7017 62.4096 27 54.7069 27 45.2055C27 40.6411 28.8137 36.2637 32.0419 33.0369C35.27 29.81 39.6481 27.9981 44.2125 28C53.7139 28.0039 61.4135 35.7088 61.4109 45.2102C61.4098 49.2845 59.9926 53.0278 57.6247 55.9745ZM44.2125 33.2945C50.7889 33.3023 56.1145 38.6384 56.1094 45.2148C56.1042 51.7912 50.7702 57.119 44.1938 57.1164C37.6174 57.1138 32.2875 51.7819 32.2875 45.2055C32.2894 42.0446 33.5468 39.014 35.7832 36.7803C38.0195 34.5465 41.0517 33.2927 44.2125 33.2945Z"
              fill="#FFFBFB"
            />
          </svg>
          <span>Поиск</span>
        </osm-button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'OsmTabsBlocks',
  components: {
    OsmHn: () => import('~/components/typografy/OsmHn.vue'),
    OsmInput: () => import('~/components/forms/OsmInput.vue'),
    OsmButton: () => import('~/components/global/OsmButton.vue'),
  },
  props: {
    title: {
      type: Boolean,
      default: false,
    },
    sectionList: {
      type: Array,
      default: null,
    },
    selected: {
      type: Object,
      default: null,
    },
  },
  data: () => ({
    searchText: '',
  }),
  methods: {
    ...mapActions('products', ['addSection', 'addSearchText']),
  },
}
</script>

<style lang="scss">
.tabs_blocks {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: vw(43);

  &__l-side {
    width: calc(100% - 84px - vw(480));
  }

  &__buttons {
    display: flex;
    align-items: center;

    &--owf {
      display: flex;
      align-items: center;
      width: max-content;
    }

    .button {
      margin-right: 9px;
    }
  }

  &__item {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    padding: 20px 0;
    margin-left: -20px;
    padding-left: 20px;
  }

  &__r-side {
    max-width: vw(480);
    margin-left: 84px;
    width: 100%;

    .input {
      margin-right: 7px;
      min-width: 100%;

      @media all and (min-width: 1940px) {
        width: 100%;
        max-width: 100%;
      }

      input {
        -webkit-clip-path: polygon(0% 0%, 100% 7%, 100% 86%, 1% 94%);
        clip-path: polygon(0% 0%, 100% 7%, 100% 86%, 1% 94%);
        border-radius: 5px 13% 19% 14%;
      }
    }

    form {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  &.orders_status {
    flex-direction: row-reverse;
    justify-content: flex-end;

    h1 {
      max-width: vw(550);
      width: 100%;
    }

    .tabs_blocks__r-side {
      margin-left: 0;
      margin-right: vw(55);
      max-width: vw(354);
    }
  }
}

.isTablet,
.isMobile {
  .tabs_blocks {
    margin-bottom: 40px;

    &__l-side {
      width: calc(100% - 30px - 344px);
    }

    &__r-side {
      margin-left: 30px;
      max-width: 344px;
      width: 100%;

      .input {
        width: 284px;
      }
    }

    &.orders_status {
      .tabs_blocks__l-side {
        width: calc(100% - 330px);
      }
    }
  }
}

.isMobile {
  .tabs_blocks {
    flex-direction: column;
    &__item {
      
    &::-webkit-scrollbar, &::-webkit-scrollbar-thumb {
     height: 7px;
    }
    }

    &__l-side {
      width: 100%;
    }

    &__buttons {
      .button {
        margin-right: 10px;
      }

      flex-direction: row-reverse;
      width: calc(100% + 15px);
      position: relative;

      &:before {
        content: '';
        right: 0;
        top: 0;
        bottom: 0;
        position: absolute;
        background: linear-gradient(
          270deg,
          #fff9e4 40.91%,
          rgba(255, 249, 228, 0.57) 72.13%,
          rgba(255, 253, 247, 0) 100%
        );
        width: 20px;
        height: calc(100% - 20px);
        z-index: 3;
      }
    }

    &__r-side {
      max-width: 100%;
      margin: 0;
      margin-top: 20px;

      .input {
        max-width: calc(100% - 60px);
        width: 100%;

        &:before {
          bottom: -9px;
        }
      }
    }

    &.orders_status {
      flex-direction: column-reverse;
      justify-content: flex-end;

      h1 {
        margin-bottom: 5px;
        max-width: 100%;
        margin-top: 20px;
      }

      .tabs_blocks__l-side {
        width: 100%;
      }

      .tabs_blocks__r-side {
        max-width: 100%;
        margin-right: 0;
        margin-top: 0;
      }

      .tabs_blocks__buttons {
        justify-content: flex-end;
      }
    }
  }
}
</style>
