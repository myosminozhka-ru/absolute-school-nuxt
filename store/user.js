export const state = () => ({
  isAuthorized: false,
})

export const mutations = {
  setAuthorization(state, authorized) {
    state.isAuthorized = authorized
    console.log('state.isAuthorized', state.isAuthorized)
  },
}

export const actions = {
  setAuthorization(context, authorized) {
    context.commit('setAuthorization', authorized)
  },
  signIn(context, { login, password }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$post('user.php', {
          action: 'login',
          login,
          password,
        })
        .then((data) => {
          resolve(data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}

export const getters = {}
