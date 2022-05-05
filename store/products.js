export const state = () => ({
  products: [],
  section: {},
  searchText: '',
})

export const actions = {
  loadProducts(context) {
    this.$axios
      .$get('catalog.php?action=list', { withCredentials: true })
      .then((response) => {
        context.commit('addSection', { id: null, name: 'all' })
        context.commit('loadProducts', response)
      })
  },
  addSection(context, section) {
    context.commit('addSection', section)
  },
  addSearchText(context, searchText) {
    context.commit('addSearchText', searchText)
  },
}

export const mutations = {
  loadProducts(state, products) {
    state.products = products
  },
  addSection(state, section) {
    state.section = section
  },
  addSearchText(state, searchText) {
    state.searchText = searchText
  },
}

export const getters = {
  getProducts: (state) => {
    return state.products
  },
  getFilteredProducts: (state) => {
    let filteredProducts
    if (!state.section || !state.section.id) {
      filteredProducts = state.products.products.filter((product) =>
        `${product.name}${product.description}`
          .toLocaleLowerCase()
          .includes(state.searchText.toLocaleLowerCase())
      )
    } else {
      filteredProducts = state.products.products.filter((product) => {
        if (
          product.section === state.section.id &&
          `${product.name}${product.description}`
            .toLocaleLowerCase()
            .includes(state.searchText.toLocaleLowerCase())
        ) {
          return product
        } else {
          return false
        }
      })
    }
    const data = {
      ...state.products,
      products: filteredProducts,
    }
    return data
  },

  getProductsList: (_, getters) => {
    const data = getters.getFilteredProducts

    const productsList = data.products
      .map((product) => {
        return {
          id: +product.id,
          name: product.name,
          description: product.description,
          images: product.images,
          section: product.section,
          offers: [
            ...data.offers.filter(
              (offer) => +offer.product === +product.id
            ),
          ],
        }
      })
      .filter((product) => product.offers.length)
      // .map((product) => {
      //   delete product.offers
      //   return product
      // })

    return productsList
  },
  getProductColors:
    (_, getters) =>
    (productId, sizeId = null) => {
      const data = getters.getFilteredProducts
      let productColors

      if (sizeId) {
        productColors = data.offers.filter(
          (offer) => +offer.product === +productId && +offer.size === +sizeId
        )
      } else {
        productColors = data.offers.filter(
          (offer) => +offer.product === +productId
        )
      }

      productColors = productColors
        .map((offer) => {
          const color = data.colors.find((color) => +color.id === +offer.color)
          if (color) color.productId = productId
          return color
        })
        .filter((color) => !!color)
        .reduce(
          (arr, current) => (arr.includes(current) ? arr : [...arr, current]),
          []
        )

      return productColors
    },
  getProductSizes:
    (_, getters) =>
    (productId, colorId = null) => {
      const data = getters.getFilteredProducts
      let productSizes
      if (colorId) {
        productSizes = data.offers.filter(
          (offer) => +offer.product === +productId && +offer.color === +colorId
        )
      } else {
        productSizes = data.offers.filter(
          (offer) => +offer.product === +productId
        )
      }

      productSizes = productSizes
        .map((offer) => {
          const size = data.sizes.find((size) => +size.id === +offer.size)
          if (size) size.productId = productId
          return size
        })
        .filter((size) => !!size)
        .reduce(
          (arr, current) => (arr.includes(current) ? arr : [...arr, current]),
          []
        )

      return productSizes
    },
  getProductOffer:
    (_, getters) =>
    (productId, colorId = null, sizeId = null) => {
      const data = getters.getFilteredProducts
      const productOffer = data.offers.find((offer) =>
        colorId && sizeId
          ? +offer.product === +productId &&
            +offer.color === +colorId &&
            +offer.size === +sizeId
          : colorId
          ? +offer.product === +productId && +offer.color === +colorId
          : sizeId
          ? +offer.product === +productId && +offer.size === +sizeId
          : +offer.product === +productId
      )

      return productOffer
    },
  getSection: (state) => {
    return state.section
  },
  getSearchText(state) {
    return state.searchText;
  }
}
