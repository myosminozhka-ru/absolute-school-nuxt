<template>
  <div class="header__info" data-intro="<div class='tour boy'><div class='tour__l'></div><div class='tour__r'><div class='tour__number'>03</div><div class='tour__title'>Кошелек</div><div class='tour__text'>Доступные АбсКоины</div></div></div>" data-step="3">
    <div class="header__info--img">
      <img
        src="https://via.placeholder.com/200x200/e49535.png"
        :alt="`${user.lastname} ${user.name}`"
      />
    </div>
    <div class="header__info--text">
      <div class="header__info--name">{{ user.lastname }} {{ user.name }}</div>
      <div class="header__info--price">
        <span>Кошелек: </span>
        <osm-price>
          {{
            user.balance === null ? 0 : Number(user.balance).toLocaleString()
          }}
        </osm-price>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'OsmHeaderInfo',
  components: {
    OsmPrice: () => import('~/components/typografy/OsmPrice.vue'),
  },
  computed: {
    ...mapGetters('localStorage', {
      user: 'getUser',
    }),
  },
}
</script>
