export const state = () => ({
  products: [],
  section: {},
  searchText: '',
})

export const actions = {
    loadProducts(context) {
        this.$axios.$get('catalog.php?action=list').then(response => {
            context.commit('addSection', {id: null, name: 'all'});
            context.commit('loadProducts', response);
        });
    },
    addSection(context, section) {
        context.commit('addSection', section);
    },
    addSearchText(context, searchText) {
        context.commit('addSearchText', searchText);
    }
};

export const mutations = {
    loadProducts(state, products) {
        state.products = products;
    },
    addSection(state, section) {
        state.section = section;
    },
    addSearchText(state, searchText) {
        state.searchText = searchText;
    },
}

export const getters = {
    getProducts: (state) => {
        return state.products
    },
    getFilteredProducts: (state) => {
        let filteredProducts;
        if (!state.section || !state.section.id) {
            filteredProducts = state.products.products.filter(product => `${product.name}${product.description}`.toLocaleLowerCase().includes(state.searchText))
        } else {
            filteredProducts = state.products.products.filter(product => {
                if (product.section === state.section.id && `${product.name}${product.description}`.toLocaleLowerCase().includes(state.searchText)) {
                    return product;
                } else {
                    return false;
                }
            });
        }
        const data = {
            ...state.products,
            products: filteredProducts
        }
        console.log('getFilteredProducts', data);
        return data;
    },
    getSection: (state) => {
        return state.section
    },
}
