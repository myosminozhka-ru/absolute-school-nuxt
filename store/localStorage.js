export const state = () => ({
  login: '',
  password: '',
  user: {
    name: '',
    lastname: '',
    balance: null
  },
  isAuthorized: false,
})

export const mutations = {
  updateAuthData(state, { login, password, user }) {
    console.log(login, password, user)
    state.login = login
    state.password = password
    state.user = user
  },
  setAuthorization(state, authorized) {
    state.isAuthorized = authorized
  },
}

export const actions = {
  updateAuthData(context, {login, password, user}) {
      context.commit('updateAuthData', {login, password, user});
  },
  setAuthorization(context, authorized) {
      context.commit('setAuthorization', authorized);
  },
  signIn(context, {login, password}) {
      return new Promise((resolve, reject) => {
          this.$axios.$post('user.php', {
              action: "login",
              login,
              password
          }, { withCredentials: true }).then(data => {
              resolve(data);
          }).catch(error => {
              reject(error);
          })
      })
  },
  signOut(context) {
    context.commit('setAuthorization', false);
    context.commit('updateAuthData', {
      login: '',
      password: '',
      user: {
        name: '',
        lastname: '',
        balance: null
      }
    });
  }
}
export const getters = {
  getUser: (state) => {
    return state.user
  },
}
