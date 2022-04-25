export const state = () => ({
    login: '',
    password: '',
    isAuthorized: false
});

export const mutations = {
    updateAuthData(state, {login, password}) {
        state.login = login;
        state.password = password;
        console.log('localStorage updateAuthData', state.login, state.password);
    },
    setAuthorization(state, authorized) {
        state.isAuthorized = authorized;
        console.log('localStorage state.isAuthorized', state.isAuthorized)
    }
};

export const actions = {
    updateAuthData(context, {login, password}) {
        context.commit('updateAuthData', {login, password});
    },
    setAuthorization(context, authorized) {
        context.commit('setAuthorization', authorized);
    },
    signIn(context, {login, password}) {
        console.log('localStorage');
        return new Promise((resolve, reject) => {
            this.$axios.$post('user.php', {
                action: "login",
                login,
                password
            }).then(data => {
                resolve(data);
            }).catch(error => {
                reject(error);
            })
        })
    }
};