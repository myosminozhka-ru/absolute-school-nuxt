export const state = () => ({
  cart: [],
})

export const mutations = {
  updateCart(state, items) {
    console.log('Корзина обновлена')
    state.cart = items
  },
}

export const actions = {
  addProductToCart(context, offerId) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$post(
          'basket.php',
          {
            action: 'add',
            id: `${offerId}`,
            quantity: '1',
          },
          { withCredentials: true }
        )
        .then((data) => {
          context.commit('updateCart', data)
          resolve(data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  loadCart(context) {
    this.$axios
      .$get('basket.php?action=basket', { withCredentials: true })
      .then((data) => {
        context.commit('updateCart', data)
      })
  },
  removeProductFromCart(context, basketId) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$post(
          'basket.php',
          {
            action: 'delete',
            id: basketId,
          },
          { withCredentials: true }
        )
        .then((data) => {
          context.commit('updateCart', data)
          resolve(data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  updateOfferQuantity(context, { id, quantity }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$post(
          'basket.php',
          {
            action: 'update',
            id,
            quantity,
          },
          { withCredentials: true }
        )
        .then((data) => {
          context.commit('updateCart', data)
          resolve(data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  updateActiveOffer(context, { id, quantity, newOfferId }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$post(
          'basket.php',
          {
            action: 'update',
            new_offer_id: newOfferId,
            id,
            quantity,
          },
          { withCredentials: true }
        )
        .then((data) => {
          context.commit('updateCart', data)
          resolve(data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}

export const getters = {
  getCartItems: (state) => {
    return state.cart
  },

  getItems: (state, _, rootState) => {
    const items = state.cart.items
      ? state.cart.items.map((item) => {
          const obj = {
            basketId: +item.basket_id,
            productId: +item.product_id,
            name: item.name,
            description: rootState.products.products.products.find(
              (product) =>
                +product.id ===
                +state.cart.offers.find(
                  (offer) => +offer.id === +item.product_id
                ).description
            ),
            image: item.image,
          }

          return obj
        })
      : []

    return items
  },
  getOffer:
    (state) =>
    (offerId, colorId = null, sizeId = null) => {
      let offer = state.cart.offers.find((offer) => +offer.id === +offerId)
      if (colorId || sizeId) {
        const findOffer = state.cart.offers.find((findOffer) =>
          findOffer.product && colorId && sizeId
            ? +findOffer.product === +offer.product &&
              +findOffer.color === +colorId &&
              +findOffer.size === +sizeId
            : findOffer.product && colorId
            ? +findOffer.product === +offer.product &&
              +findOffer.color === +colorId
            : findOffer.product && sizeId
            ? +findOffer.product === +offer.product &&
              +findOffer.size === +sizeId
            : +findOffer.product === +offer.product
        )
        offer = findOffer
      }
      return offer
    },
  getSelectedColor: (state, getters) => (offerId) => {
    const offer = getters.getOffer(offerId)

    const selectedColor = state.cart.colors.find(
      (color) => +color.id === +offer.color
    )

    return selectedColor
  },
  getOffersCurrentItem:
    (state, getters) =>
    (offerId, colorId = null, sizeId = null) => {
      const offer = getters.getOffer(offerId)

      let offers = state.cart.offers.filter(
        (filterOffer) => +filterOffer.product === +offer.product
      )

      if (colorId) {
        offers = offers.filter((offer) => +offer.color === +colorId)
      }

      if (sizeId) {
        offers = offers.filter((offer) => +offer.size === +sizeId)
      }

      return offers
    },
  getMoreColors: (state, getters) => (offerId) => {
    const offers = getters.getOffersCurrentItem(offerId)
    const moreColors = offers
      .map((offer) => {
        return state.cart.colors.find((color) => +color.id === +offer.color)
      })
      .reduce(
        (arr, current) => (arr.includes(current) ? arr : [...arr, current]),
        []
      )

    return moreColors
  },
  getSelectedSize: (state, getters) => (offerId) => {
    const offer = getters.getOffer(offerId)

    const selectedSize = state.cart.sizes.find(
      (size) => +size.id === +offer.size
    )

    return selectedSize
  },
  getMoreSizes: (state, getters) => (offerId, colorId) => {
    const offers = getters.getOffersCurrentItem(offerId, colorId, null)
    const moreSizes = offers
      .map((offer) => {
        return state.cart.sizes.find((size) => +size.id === +offer.size)
      })
      .reduce(
        (arr, current) => (arr.includes(current) ? arr : [...arr, current]),
        []
      )

    return moreSizes
  },
}
