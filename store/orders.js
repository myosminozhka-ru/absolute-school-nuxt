import { Base64 } from 'js-base64'

export const state = () => ({
  orders: [],
  basket: [],
  products: [],
  section: 'all',
})

export const mutations = {
  addOrders(state, data) {
    if (data.orders) {
      state.orders = data.orders
      state.basket = data.basket
      state.products = data.products
    }
  },
  addSection(state, section) {
    state.section = section
  },
}

export const actions = {
  loadOrders({ state, commit, dispatch, rootState, rootGetters }) {
    const base64EncodedLoginAndPassword = Base64.encode(
      `${rootState.localStorage.login}:${rootState.localStorage.password}`
    )
    return new Promise((resolve, reject) => {
      this.$axios
        .$get('order.php?action=list', {
          headers: {
            Authorization: `Basic ${base64EncodedLoginAndPassword}`,
          },
        }, {
          withCredentials: true
        })
        .then((response) => {
          resolve(response);
          commit('addOrders', response);
        })
        .catch((error) => {
          reject(error)
        })
    });
  },
  repeatOrder({ dispatch, rootState }, orderId) {
    const base64EncodedLoginAndPassword = Base64.encode(
      `${rootState.localStorage.login}:${rootState.localStorage.password}`
    )
    return new Promise((resolve, reject) => {
      this.$axios
        .$post(
          'order.php',
          {
            action: 'repeat',
            id: orderId,
          },
          {
            headers: {
              Authorization: `Basic ${base64EncodedLoginAndPassword}`,
            },
          }
        )
        .then((data) => {
          // console.log('repeatOrder', orderId, data)
          dispatch('loadOrders')
          resolve(data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  sendOrder({ rootState }) {
    const base64EncodedLoginAndPassword = Base64.encode(
      `${rootState.localStorage.login}:${rootState.localStorage.password}`
    )
    return new Promise((resolve, reject) => {
      this.$axios
        .$post(
          'basket.php',
          {
            action: 'order',
          },
          {
            headers: {
              Authorization: `Basic ${base64EncodedLoginAndPassword}`,
            },
          }
        )
        .then((response) => {
          resolve(response)
        })
    })
  },
  addSection(context, section) {
    context.commit('addSection', section)
  },
}

export const getters = {
  getOrders: (state, getters) => {
    let orders = state.orders
      .filter((order) => order.basket.length)
      .map((order) => {
        const newOrder = { ...order }
        newOrder.basket.map((item, index) =>
          state.basket.find((basket) => +basket.id === +item)
        )

        return newOrder
      })

    if (state.section === 'all') {
      orders = orders.filter((order) => order.basket.length)
    } else {
      orders = orders.filter(
        (order) => order.basket.length && order.status === state.section
      )
    }
    console.log('getters', getters);
    return orders
  },
  getProducts: (state, getters, rootState) => (arrBasketId) => {
    let products = [];
    arrBasketId.forEach((product) => {
    const findBasket = state.basket.find(
      (basketItem) => +basketItem.id === +product
    )
    if (findBasket) {
      const findProduct = state.products.find(
        (productItem) => +productItem.id === +findBasket.product_id
      )
      if (findProduct && rootState.products.products.offers && rootState.products.products.products) {
        let image = ''
        console.log('rootState.products.products.offers', rootState.products.products.offers);
        rootState.products.products.offers
          .filter((offer) => +offer.id === +findProduct.id)
          .map((offer) => {
            console.log('rootState.products.products.products', rootState.products.products.products);
            return rootState.products.products.products
              .filter((product) => product.id === offer.product)
              .map((product) => {
                // console.log('product', product)
                image = product.images[0]
                return product.images
              })
          })
        products = [
          ...products,
          {
            basketId: +findBasket.id,
            productId: +findProduct.id,
            img: image,
            name: findProduct.name,
            description: findProduct.description,
            price: +findBasket.price,
            quantity: +findBasket.quantity,
          },
        ]
        console.log('products', products);
      }
    }
    });
    return products;

  },
  getSection(state) {
    return state.section
  },
  getTabs(state) {
    const tabs = []
    state.orders.map((order) => {
      if (tabs.includes(order.status)) return false
      tabs.push(order.status)
      return order
    })
    return tabs
  },
}
