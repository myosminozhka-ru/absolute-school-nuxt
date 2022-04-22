export const state = () => ({
  items: [],
  offers: [],
  colors: [],
  sizes: [],
  price: 0,
  total: 0,
})

export const mutations = {
  //   addProducts(state, products) {
  //     state.products = products
  //   },

  loadProducts(state, data) {
    state.items = Array.isArray(data.items) ? data.items : []
    state.offers = Array.isArray(data.offers) ? data.offers : []
    state.colors = Array.isArray(data.colors) ? data.colors : []
    state.sizes = Array.isArray(data.sizes) ? data.sizes : []
    state.price = data.price ? data.price : 0
    state.total = data.total ? data.total : 0
  },
}

export const actions = {
  // Добавление товара
  //   async addProducts(context) {
  //     const data = await this.$axios.$get(
  //       'http://absolute-school-birix.01sh.ru/local/api/site/catalog.php?action=list'
  //     )
  //     context.commit('addProducts', data)
  //   },
  // Подгрузка товара
  async loadProducts(context) {
    for (let i = 17; i < 19; i++) {
      await this.$axios.$post(
        `https://viessmann-otoplenie.ru/local/api/site/basket.php`,
        {
          action: 'add',
          id: i,
          quantity: 1
        }
      )
    }
    const data = await this.$axios.$get(
      'https://viessmann-otoplenie.ru/local/api/site/basket.php?action=basket'
    )

    console.log('cart/loadProducts', data)

    context.commit('loadProducts', data)
  },
  // Изменение количества штук товара
  async editCountProduct(context, data) {
    await this.$axios.$post(
      `http://absolute-school-birix.01sh.ru/local/api/site/basket.php?action=update&id=${data.id}&quantity=${data.quantity}`
    )
  },
  // Удаление товара
  async removeProductById(context, id) {
    await await this.$axios.$post(
      `http://absolute-school-birix.01sh.ru/local/api/site/basket.php?action=delete&id=${id}`
    )
  },
}

export const getters = {}
