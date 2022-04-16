export const state = () => ({
    list: []
})

export const mutations = {
    addProducts(state, products) {
        state.list = products
    },
}

export const actions = {
    async addProducts(context) {
        const data = await this.$axios.$get('http://absolute-school-birix.01sh.ru/local/api/site/catalog.php?action=list');
        const products = await data.products.map(item => ({
                ...item,
                offers: data.offers.filter(offer => offer.product === item.id).map(offer => {
                    return {
                        ...offer,
                        colors: data.colors.filter(color => color.id === offer.color),
                        sizes: data.sizes.filter(size => size.id === offer.size),
                    } 
                }),

            })
        )
        context.commit('addProducts', products)
    },
};


export const getters = {
    getProducts: (state) => {
        return state.list
    },
}
