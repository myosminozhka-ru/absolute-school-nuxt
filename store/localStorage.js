export const state = () => ({
  login: '',
  password: '',
  user: {
    name: '',
    lastname: '',
    balance: null,
  },
  isAuthorized: false,
  tourStep: 1,
})

export const mutations = {
  updateAuthData(state, { login, password, user }) {
    // console.log(login, password, user)
    state.login = login
    state.password = password
    state.user = user
  },
  setAuthorization(state, authorized) {
    state.isAuthorized = authorized
  },
  setBalance(state, balance) {
    state.user.balance = balance
  },
  setTourStep(state, step) {
    state.tourStep = step;
  }
}

export const actions = {
  setTourStep(context, step) {
    context.commit('setTourStep', step);
  },
  updateAuthData(context, {login, password, user}) {
      context.commit('updateAuthData', {login, password, user});
  },
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
          console.log('data', data);
          resolve(data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  signOut(context) {
    context.commit('setAuthorization', false)
    context.commit('updateAuthData', {
      login: '',
      password: '',
      user: {
        name: '',
        lastname: '',
        balance: null,
      },
    })
  },
  updateBalance(context, balance) {
    context.commit('setBalance', balance)
  },
}
export const getters = {
  getUser: (state) => {
    return state.user;
  },
  getTourStep: (state) => {
    return state.tourStep;
  }
}
