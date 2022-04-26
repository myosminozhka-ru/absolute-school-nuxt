export const state = () => ({
  orders: [
    {
      id: '8',
      status: 'Принят, ожидается оплата',
      date: '25.04.2022',
      basket: [],
    },
    {
      id: '7',
      status: 'Принят, ожидается оплата',
      date: '25.04.2022',
      basket: [],
    },
    {
      id: '6',
      status: 'Принят, ожидается оплата',
      date: '25.04.2022',
      basket: ['250'],
    },
    {
      id: '5',
      status: 'Принят, ожидается оплата',
      date: '19.04.2022',
      basket: ['11', '8'],
    },
    {
      id: '4',
      status: 'Принят, ожидается оплата',
      date: '19.04.2022',
      basket: ['4'],
    },
    {
      id: '3',
      status: 'Принят, ожидается оплата',
      date: '19.04.2022',
      basket: [],
    },
    {
      id: '2',
      status: 'Принят, ожидается оплата',
      date: '19.04.2022',
      basket: [],
    },
    {
      id: '1',
      status: 'Принят, ожидается оплата',
      date: '08.04.2022',
      basket: ['1'],
    },
  ],
  basket: [
    {
      id: '250',
      product_id: '24',
      name: 'Тестовая Игрушка',
      price: '1100.0000',
      quantity: '4.0000',
    },
    {
      id: '11',
      product_id: '23',
      name: 'Тестовая Игрушка',
      price: '1100.0000',
      quantity: '1.0000',
    },
    {
      id: '8',
      product_id: '22',
      name: 'Тестовая футболка  Синий  M',
      price: '1000.0000',
      quantity: '2.0000',
    },
    {
      id: '4',
      product_id: '23',
      name: 'Тестовая Игрушка',
      price: '1100.0000',
      quantity: '9.0000',
    },
  ],
  products: [
    {
      id: '22',
      name: 'Тестовая футболка  Синий  M',
      picture: null,
      description: 'Тестовая футболка  Синий  M описание',
    },
    {
      id: '23',
      name: 'Тестовая Игрушка',
      picture: null,
      description: 'Тестовая игрушка описание',
    },
    {
      id: '24',
      name: 'Тестовая Игрушка',
      picture: null,
      description: '',
    },
  ],
})

export const mutations = {
  addOrders(context, section) {
    context.commit('addSection', section)
  },
}

export const actions = {
  async loadOrders(context) {
    await this.$axios.$get('order.php?action=list').then((response) => {
      context.commit('addOrders', response)
    })
  },
  repeatOrder(context, orderId) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$post('order.php', {
          action: 'repeat',
          id: orderId,
        })
        .then((data) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  sendOrder() {
    return new Promise((resolve, reject) => {
      this.$axios
        .$post('basket.php', {
          action: 'order',
        })
        .then((response) => {
          resolve(response)
        })
    })
  },
}

export const getters = {
  getOrders: (state) => {
    let orders = [...state.orders.filter((order) => order.basket.length)]

    orders = orders.map((order) => {
      const newOrder = { ...order }
      newOrder.basket.forEach((item, index) => {
        const findBasket = state.basket.find((basket) => +basket.id === +item)
        if (!findBasket) {
          newOrder.basket.splice(index)
        }
      })

      return newOrder
    })

    orders = orders.filter((order) => order.basket.length)

    return orders
  },
  getProducts: (state) => (arrBasketId) => {
    let products = []

    arrBasketId.forEach((product) => {
      const findBasket = state.basket.find(
        (basketItem) => +basketItem.id === +product
      )

      if (findBasket) {
        const findProduct = state.products.find(
          (productItem) => +productItem.id === +findBasket.product_id
        )

        if (findProduct) {
          products = [
            ...products,
            {
              basketId: +findBasket.id,
              productId: +findProduct.id,
              img: findProduct.picture,
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
