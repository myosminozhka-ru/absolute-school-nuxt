import {Base64} from 'js-base64';


export const state = () => ({
  orders: [],
  basket: [],
  products: [],
})

export const mutations = {
  addOrders(state, data) {
    if (data.orders) {
      state.orders = data.orders;
      state.basket = data.basket;
      state.products = data.products;
      console.log(state.orders);
    }
  },
}

export const actions = {
  loadOrders({ state, commit, dispatch, rootState, rootGetters }) {
    const base64EncodedLoginAndPassword = Base64.encode(`${rootState.localStorage.login}:${rootState.localStorage.password}`);
    this.$axios.$get('order.php?action=list', {
      headers: {
        'Authorization': `Basic ${base64EncodedLoginAndPassword}`,
      }
    }).then((response) => {
      commit('addOrders', response)
    })
  },
  repeatOrder({dispatch, rootState}, orderId) {
    const base64EncodedLoginAndPassword = Base64.encode(`${rootState.localStorage.login}:${rootState.localStorage.password}`);
    return new Promise((resolve, reject) => {
      this.$axios
      .$post('order.php', {
        action: 'repeat',
        id: orderId,
      }, {
        headers: {
          'Authorization': `Basic ${base64EncodedLoginAndPassword}`,
        }
      })
      .then((data) => {
          console.log('repeatOrder', orderId, data)
          dispatch('loadOrders');
          resolve(data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  sendOrder({ rootState }) {
    const base64EncodedLoginAndPassword = Base64.encode(`${rootState.localStorage.login}:${rootState.localStorage.password}`);
    return new Promise((resolve, reject) => {
      this.$axios
      .$post('basket.php', {
        action: 'order',
      }, {
        headers: {
          'Authorization': `Basic ${base64EncodedLoginAndPassword}`,
        }
      })
      .then((response) => {
        resolve(response)
      })
    })
  },
}

export const getters = {
  getOrders: (state) => {
    let orders = state.orders.filter((order) => order.basket.length).map((order) => {
      const newOrder = { ...order }
      newOrder.basket.map((item, index) => state.basket.find((basket) => +basket.id === +item))

      return newOrder
    })

    orders = orders.filter((order) => order.basket.length)
    
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
        console.log('findProduct', rootState.products.products.offers.filter(offer => +offer.id === +findProduct.id).map(offer => {
          return rootState.products.products.products.filter(product => product.id === offer.product).map(product => {
            return product.images
          });
        }), findProduct.id);
        if (findProduct) {
          let image = '';
          rootState.products.products.offers.filter(offer => +offer.id === +findProduct.id).map(offer => {
            return rootState.products.products.products.filter(product => product.id === offer.product).map(product => {
              console.log('product', product)
              image = product.images[0];
              return product.images
            });
          });
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
        }
      }
    })

    return products
  },
}
