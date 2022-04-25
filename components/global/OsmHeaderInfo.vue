<template>
    <div class="header__info" data-intro="<div class='tour boy'><div class='tour__l'></div><div class='tour__r'><div class='tour__number'>03</div><div class='tour__title'>Ваш баланс</div><div class='tour__text'>Тут можете посмотреть баланс вашего кошелька</div></div></div>">
        <div class="header__info--img">
            <img src="https://via.placeholder.com/200x200/e49535.png" alt="Владислав Фамильярный">
        </div>
        <div class="header__info--text">
            <div class="header__info--name">Владислав Фамильярный</div>
            <div class="header__info--price">
                <span>Баланс:</span>
                <osm-price>
                    14 500
                </osm-price>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "OsmHeaderInfo",
    components: {
        OsmPrice: () => import('~/components/typografy/OsmPrice.vue')
    }
}
</script>