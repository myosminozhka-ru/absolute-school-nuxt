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
}

export const getters = {}
