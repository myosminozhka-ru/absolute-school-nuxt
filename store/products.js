export const state = () => ({
    products: [],
})

export const mutations = {
    addProducts(state, products) {
        state.products = products;
    },
}

export const actions = {
    async addProducts(context) {
        const data = await this.$axios.$get('http://absolute-school-birix.01sh.ru/local/api/site/catalog.php?action=list');
        context.commit('addProducts', data);
    }
};


export const getters = {
    getProducts: (state) => {
        return state.products
    },
}
