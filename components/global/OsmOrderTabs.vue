<template>
  <div class="tabs_blocks center-block" :class="{ orders_status: title }">
    <div class="tabs_blocks__l-side">
      <div class="tabs_blocks__buttons">
        <div class="tabs_blocks__item">
          <div class="tabs_blocks__buttons--owf">
            <div
              v-for="button in sectionList"
              :key="button"
              @click="addSection(button)"
            >
              <osm-button
                class-name="button--white"
                :class="{ isActive: selected == button }"
                >{{ button }}
              </osm-button>
            </div>
          </div>
        </div>
        <div @click="addSection('all')">
          <osm-button class-name="button--green"><span>Все</span></osm-button>
        </div>
      </div>
    </div>
    <div class="tabs_blocks__r-side">
      <osm-hn v-if="title">Мои заказы:</osm-hn>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'OsmTabsBlocks',
  components: {
    OsmHn: () => import('~/components/typografy/OsmHn.vue'),
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
      type: String,
      default: null,
    },
  },
  methods: {
    ...mapActions('orders', ['addSection']),
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
      width: 100%;

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
        height: 100%;
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
