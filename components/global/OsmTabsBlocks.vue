<template>
  <div class="tabs_blocks center-block" :class="{ orders_status: title }">
    <div class="tabs_blocks__l-side">
      <div class="tabs_blocks__buttons">
        <div class="tabs_blocks__item" data-intro="<div class='tour girl'><div class='tour__l'></div><div class='tour__r'><div class='tour__number'>05</div><div class='tour__title'>Виды товаров</div><div class='tour__text'>Отбирай товары по видам.</div></div></div>" data-step="5">
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
      <form v-else action="" data-intro="<div class='tour girl'><div class='tour__l'></div><div class='tour__r'><div class='tour__number'>06</div><div class='tour__title'>Поиск</div><div class='tour__text'>Ищи товары по названию</div></div></div>" data-step="6">
        <osm-input
          class-name="input--white"
          :value="getSearchText"
          text="Введите что нужно найти"
          @update:value="addSearchText($event)"
        />
        <osm-button class-name="button--search" @click="removeSearchText">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
            <path d="M0 16.0311C0 14.0138 1.50215 12.3122 3.50386 12.062L95.5039 0.562026C97.8913 0.263599 100 2.12515 100 4.53114V95.5018C100 97.8962 97.9106 99.7542 95.5326 99.4744L3.53264 88.6509C1.51818 88.4139 0 86.7066 0 84.6783V16.0311Z" fill="#85A832"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M68 32.0286C66.8857 30.9143 65.0857 30.9143 63.9714 32.0286L50 45.9714L36.0286 32C34.9143 30.8857 33.1143 30.8857 32 32C30.8857 33.1143 30.8857 34.9143 32 36.0286L45.9714 50L32 63.9714C30.8857 65.0857 30.8857 66.8857 32 68C33.1143 69.1143 34.9143 69.1143 36.0286 68L50 54.0286L63.9714 68C65.0857 69.1143 66.8857 69.1143 68 68C69.1143 66.8857 69.1143 65.0857 68 63.9714L54.0286 50L68 36.0286C69.0857 34.9428 69.0857 33.1143 68 32.0286Z" fill="white"/>
          </svg>
          <span>Поиск</span>
        </osm-button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
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
  computed: {
    ...mapGetters('products', ['getSearchText'])
  },
  methods: {
    ...mapActions('products', ['addSection', 'addSearchText']),
    removeSearchText() {
      this.addSearchText('');
    }
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
    padding-left: 5px;
  }

  &__r-side {
    max-width: vw(480);
    margin-left: 84px;
    width: 100%;

    .input {
      margin-right: 0;
      // margin-right: 7px;
      // min-width: 100%;

      // @media all and (min-width: 1940px) {
      //   width: 100%;
      //   max-width: 100%;
      // }

      input {
        -webkit-clip-path: polygon(0% 0%, 100% 7%, 100% 86%, 1% 94%);
        clip-path: polygon(0% 0%, 100% 7%, 100% 86%, 1% 94%);
        border-radius: 5px 13% 19% 14%;
      }
    }

    form {
      display: flex;
      align-items: center;
      justify-content: flex-end;
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

  @media (max-width: 1024px) {
    margin-bottom: 40px;

    &__l-side {
      width: calc(100% - 30px - 344px);
    }

    &__item {
      // margin-left: -10px;
      width: calc(100% - 54px);
      padding-left: 0;
      margin-left: 10px;
    }

    &__r-side {
      // margin-left: 30px;
      // max-width: 344px;
      width: 100%;

      // .input {
      //   width: 284px;
      // }
    }
  }

  @media (max-width: 640px) {
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
      // width: calc(100% + 15px);
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
        // max-width: calc(100% - 60px);
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
        // width: 100%;
        width: calc(100% - 330px);
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

.isTablet,
.isMobile {
  .tabs_blocks {

  }
}

.isMobile {
  .tabs_blocks {

  }
}
</style>
