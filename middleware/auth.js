export default function ({ store, redirect, route }) {
    // If the user is not authenticated
    if (!store.state.localStorage.isAuthorized) {
        if (route.name !== 'auth') {
            return redirect('/auth')
        }
    } else {
        return false;
    }
}
