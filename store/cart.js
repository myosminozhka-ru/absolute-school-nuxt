export const state = () => ({
  products: [],
})

export const mutations = {
  //   addProducts(state, products) {
  //     state.products = products
  //   },
  // Подгрузка товара
  loadProducts(state, data) {
    // state.items = Array.isArray(data.items) ? data.items : []
    // state.offers = Array.isArray(data.offers) ? data.offers : []
    // state.colors = Array.isArray(data.colors) ? data.colors : []
    // state.sizes = Array.isArray(data.sizes) ? data.sizes : []
    // state.price = data.price ? data.price : 0
    // state.total = data.total ? data.total : 0

    const resultProducts = []

    data.items.forEach((item) => {
      const objProduct = {}

      objProduct.basketId = item.basket_id
      objProduct.name = item.name
      objProduct.description = item.description ? item.description : ''

      const findSelectOffer = data.offers.find(
        (offer) => +offer.id === item.product_id
      )

      if (findSelectOffer && findSelectOffer.selected) {
        objProduct.price = +findSelectOffer.price
        objProduct.quantity = findSelectOffer.quantity

        objProduct.selectedColor = data.colors.find(
          (color) => color.id === findSelectOffer.color
        )

        objProduct.selectedSize = data.sizes.find(
          (size) => size.id === findSelectOffer.size
        )

        objProduct.colors = []
        objProduct.sizes = []

        const findAllOffersCurrentOfferProduct = data.offers.filter(
          (offer) => +offer.product === +findSelectOffer.product
        )

        findAllOffersCurrentOfferProduct.forEach((offer) => {
          if (!offer.selected) {
            const objColor = data.colors.find(
              (color) => +color.id === +offer.color
            )
            const objSize = data.sizes.find((size) => +size.id === +offer.size)

            const findCurrentColor = objProduct.colors.find(
              (color) => +color?.id === +objColor.id
            )
            const findCurrentSize = objProduct.sizes.find(
              (size) => +size?.id === +objSize.id
            )

            if (!findCurrentColor) {
              objProduct.colors.push(objColor)
            }

            if (!findCurrentSize) {
              objProduct.sizes.push(objSize)
            }
          }
        })

        resultProducts.push(objProduct)
      }
    })

    state.products = resultProducts
    state.price = data.price
    state.total = data.total
  },
  // Изменение цвета
  editColorProduct(state, objId) {
    const findProduct = state.products.find(
      (product) => +product.basketId === +objId.productId
    )

    if (findProduct) {
      const findColor = findProduct.colors.find(
        (color) => +color.id === +objId.colorId
      )

      if (findColor) {
        state.products[state.products.indexOf(findProduct)].selectedColor =
          findColor
      }
    }
  },
  // Изменение размера
  editSizeProduct(state, objId) {
    const findProduct = state.products.find(
      (product) => +product.basketId === +objId.productId
    )

    if (findProduct) {
      const findSize = findProduct.sizes.find(
        (size) => +size.id === +objId.sizeId
      )

      if (findSize) {
        state.products[state.products.indexOf(findProduct)].selectedSize =
          findSize
      }
    }
  },
}

export const actions = {
  // Добавление товара
  addProducts(context) {
    // for (let i = 17; i < 19; i++) {
    //   await this.$axios.$post(
    //     'basket.php',
    //     {
    //       action: 'add',
    //       id: i,
    //       quantity: 1,
    //     }
    //   )
    // }

    context.dispatch('loadProducts')
  },
  // Подгрузка товара
  loadProducts(context) {
    // const data = await this.$axios.$post(
    //   'basket.php',
    //   {
    //     action: 'basket',
    //   }
    // )

    // console.log('data: ', data)
    const data = {
      items: [
        {
          basket_id: 80,
          name: 'Тестовая футболка Красный S',
          product_id: 17,
        },
        {
          basket_id: 81,
          name: 'Тестовая футболка Зеленый S',
          product_id: 18,
        },
      ],
      offers: [
        {
          id: '17',
          product: '30',
          max_quantity: '10',
          price: '1000.00',
          color: '1',
          size: '5',
          selected: true,
          quantity: 1,
        },
        {
          id: '18',
          product: '30',
          max_quantity: '10',
          price: '1000.00',
          color: '2',
          size: '5',
          selected: true,
          quantity: 1,
        },
        {
          id: '19',
          product: '30',
          max_quantity: '10',
          price: '1000.00',
          color: '3',
          size: '5',
        },
        {
          id: '20',
          product: '30',
          max_quantity: '10',
          price: '1000.00',
          color: '1',
          size: '6',
        },
        {
          id: '21',
          product: '30',
          max_quantity: '10',
          price: '1000.00',
          color: '2',
          size: '6',
        },
        {
          id: '22',
          product: '30',
          max_quantity: '4',
          price: '1000.00',
          color: '3',
          size: '6',
        },
      ],
      sections: [
        {
          id: '1',
          name: 'Одежда',
        },
        {
          id: '2',
          name: 'Игрушки',
        },
      ],
      colors: [
        {
          id: '3',
          code: 'blue',
          name: 'Синий',
          sort: '500',
        },
        {
          id: '2',
          code: 'green',
          name: 'Зеленый',
          sort: '500',
        },
        {
          id: '1',
          code: 'red',
          name: 'Красный',
          sort: '500',
        },
      ],
      sizes: [
        {
          id: '7',
          name: 'L',
          sort: '500',
        },
        {
          id: '6',
          name: 'M',
          sort: '500',
        },
        {
          id: '5',
          name: 'S',
          sort: '500',
        },
        {
          id: '8',
          name: 'XL',
          sort: '500',
        },
        {
          id: '4',
          name: 'XS',
          sort: '500',
        },
      ],
      price: 2000,
      total: 2,
    }

    context.commit('loadProducts', data)
  },
  // Изменение цвета
  editColorProduct(context, objId) {
    context.commit('editColorProduct', objId)
  },
  // Изменение размера
  editSizeProduct(context, objId) {
    context.commit('editSizeProduct', objId)
  },
  // Изменение количества штук товара
  async editCountProduct(context, data) {
    await this.$axios.$post(
      'basket.php',
      {
        action: 'update',
        id: data.id,
        quantity: data.quantity,
      }
    )
  },
  // Удаление товара
  async removeProductById(context, id) {
    await await this.$axios.$post( 'basket.php', {
      action: 'delete',
      id,
    });
  },
}

export const getters = {
  // getProducts: (state) => {
  //   const resultProducts = []
  //   state.items.forEach((item) => {
  //     const objProduct = {}
  //     objProduct.basketId = item.basket_id
  //     objProduct.name = item.name
  //     objProduct.description = item.description ? item.description : ''
  //     const findSelectOffer = state.offers.find(
  //       (offer) => +offer.id === item.product_id
  //     )
  //     if (findSelectOffer && findSelectOffer.selected) {
  //       objProduct.price = +findSelectOffer.price
  //       objProduct.quantity = findSelectOffer.quantity
  //       objProduct.selectedColor = state.colors.find(
  //         (color) => color.id === findSelectOffer.color
  //       )
  //       objProduct.selectedSize = state.sizes.find(
  //         (size) => size.id === findSelectOffer.size
  //       )
  //       objProduct.colors = []
  //       objProduct.sizes = []
  //       const findAllOffersCurrentOfferProduct = state.offers.filter(
  //         (offer) => +offer.product === +findSelectOffer.product
  //       )
  //       findAllOffersCurrentOfferProduct.forEach((offer) => {
  //         if (!offer.selected) {
  //           const objColor = state.colors.find(
  //             (color) => +color.id === +offer.color
  //           )
  //           const objSize = state.sizes.find((size) => +size.id === +offer.size)
  //           const findCurrentColor = objProduct.colors.find(
  //             (color) => +color?.id === +objColor.id
  //           )
  //           const findCurrentSize = objProduct.sizes.find(
  //             (size) => +size?.id === +objSize.id
  //           )
  //           if (!findCurrentColor) {
  //             objProduct.colors.push(objColor)
  //           }
  //           if (!findCurrentSize) {
  //             objProduct.sizes.push(objSize)
  //           }
  //         }
  //       })
  //       resultProducts.push(objProduct)
  //     }
  //   })
  //   return resultProducts
  // },
}
