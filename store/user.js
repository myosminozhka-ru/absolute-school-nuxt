export const state = () => ({
  isAuthorized: false,
})

export const mutations = {
  setAuthorization(state, authorized) {
    state.isAuthorized = authorized
  },
}

export const actions = {
  setAuthorization(context, authorized) {
    context.commit('setAuthorization', authorized)
  },
  signIn(context, { login, password }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$post(
          'user.php',
          {
            action: 'login',
            login,
            password,
          },
          { withCredentials: true }
        )
        .then((data) => {
          console.log(data)
          resolve(data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  signOut(context) {
    // const cookies = this.$cookies.getAll();
    console.log('cookies', context)
    context.commit('setAuthorization', false);
  },
}

export const getters = {}
