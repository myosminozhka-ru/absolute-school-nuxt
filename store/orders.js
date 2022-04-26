export const state = () => ({
  orders: [],
})

export const mutations = {
  addOrders(context, section) {
    context.commit('addSection', section);
  },
}

export const actions = {
  loadOrders(context) {
    this.$axios.$get('order.php?action=list').then(response => {
        context.commit('addOrders', response);
    });
  },
  sendOrder() {
    return new Promise((resolve, reject) => {
      this.$axios.$post('basket.php', {
        action: "order"
      }).then(response => {
        resolve(response);
      });
    })
  }
}

export const getters = {}
