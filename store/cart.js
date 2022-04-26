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
        .$post('basket.php', {
          action: 'add',
          id: `${offerId}`,
          quantity: '1',
        }, { withCredentials: true })
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
    this.$axios.$get('basket.php?action=basket', { withCredentials: true }).then((data) => {
      context.commit('updateCart', data)
    })
  },
  removeProductFromCart(context, basketId) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$post('basket.php', {
          action: 'delete',
          id: basketId,
        }, { withCredentials: true })
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
        .$post('basket.php', {
          action: 'update',
          id,
          quantity,
        }, { withCredentials: true })
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
    console.log(id, quantity, newOfferId)
    return new Promise((resolve, reject) => {
      this.$axios
        .$post('basket.php', {
          action: 'update',
          new_offer_id: newOfferId,
          id,
          quantity,
        }, { withCredentials: true })
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
}
