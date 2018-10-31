
// initial state
export const state = { 
    drawer: false,
    items: [
        { title: 'Dashboard', icon: 'dashboard', to: '/dashboard' },
        { title: 'Logout', icon: 'exit_to_app', to: '/logout' }
    ]
}

// getters
export const getters = {
    drawer: state => state.drawer,
    items: state => state.items
}

// actions
export const actions = {
    changeDrawer: ({commit}) => commit('showDrawer')
}

// mutations
export const mutations = {
    showDrawer(state) {
        state.drawer = !state.drawer
    }
}