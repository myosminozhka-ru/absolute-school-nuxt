export const state = () => ({
  login: '',
  password: '',
  isAuthorized: false,
})

export const mutations = {
  updateAuthData(state, { login, password }) {
    state.login = login
    state.password = password
  },
  setAuthorization(state, authorized) {
    state.isAuthorized = authorized
  },
}

export const actions = {
    updateAuthData(context, {login, password}) {
        context.commit('updateAuthData', {login, password});
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
}
