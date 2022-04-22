export const state = () => ({
  products: [],
  section: {},
  searchText: '',
})

export const actions = {
  async addProducts(context) {
    const data = await this.$axios.$get(
      'https://viessmann-otoplenie.ru/local/api/site/catalog.php?action=list'
    )
    // this.addFilteredProducts(data);
    context.commit('addSection', { id: null, name: 'all' })
    context.commit('addProducts', data)
  },
  addSection(context, section) {
    context.commit('addSection', section)
  },
  addSearchText(context, searchText) {
    context.commit('searchText', searchText)
  },
}

export const mutations = {
  addProducts(state, products) {
    state.products = products
  },
  addSection(state, section) {
    state.section = section
  },
  addsearchText(state, searchText) {
    state.searchText = searchText
  },
}

export const getters = {
  getProducts: (state) => {
    return state.products
  },
  getFilteredProducts: (state) => {
    if (!state.section || !state.section.id) return state.products
    const filteredProducts = state.products.products.filter(
      (product) => product.section === state.section.id
    )
    const data = {
      ...state.products,
      products: filteredProducts,
    }
    return data
  },
  getSection: (state) => {
    return state.section
  },
}
