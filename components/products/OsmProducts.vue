<template>
    <div class="cards">
        <template v-if="products.products.length">
            <osm-product v-for="product in products.products" :key="product.id" :product="product" />
            <div class="cards__more">
                <div class="cards__more-in" @click="loadMoreProducts">
                    <osm-button class-name="button--more">
                        <svg width="261" height="100" viewBox="0 0 261 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_227_7177)">
                            <path d="M5.68066 4.21286C5.68066 1.92233 7.60041 0.0995808 9.88787 0.218236L206.141 10.3982C206.54 10.4189 206.939 10.3797 207.327 10.2819L243.077 1.25693C245.604 0.619054 248.057 2.52918 248.057 5.13526V46.7196C248.057 47.0646 248.101 47.4081 248.189 47.7416L260.432 94.0672C261.17 96.8612 258.793 99.4921 255.939 99.04L169.456 85.3413C169.182 85.2979 168.904 85.2832 168.627 85.2972L4.74867 93.6238C2.269 93.7497 0.274768 91.6098 0.575049 89.1451L5.68066 47.2393V4.21286Z" fill="#85A832"/>
                            </g>
                            <defs>
                            <filter id="filter0_d_227_7177" x="0.545044" y="0.212891" width="260.023" height="98.8779" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.415686 0 0 0 0 0.52549 0 0 0 0 0.14902 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_227_7177"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_227_7177" result="shape"/>
                            </filter>
                            </defs>
                        </svg>
                        <span>Показать еще</span>
                    </osm-button>
                </div>
            </div>
        </template>
        <template v-else>
            <osm-hn>
                Таких товаров нет
            </osm-hn>
        </template>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'OsmProducts',
    components: {
        OsmProduct: () => import('~/components/products/OsmProduct.vue'),
        OsmHn: () => import('~/components/typografy/OsmHn.vue'),
    },
    computed: {
        ...mapGetters({
            products: 'products/getFilteredProducts'
        }),
    },
    // created() {
    //     this.addProducts();
    // },
    methods: {
        loadMoreProducts() {
            this.$toast.info('Это все товары на данный момент !');
        }
    }
}
</script>
