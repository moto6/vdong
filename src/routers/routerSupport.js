export default {
  namespace: true,
  state: {
    router: [],
    menuTabs: [],
    menuItems: [],
    currentRouter: [],
    allMenuItems: []
  },
  getters: {
    getRouter(state) {
      return state.router
    },
    getCurrentRouter(state) {
      return state.currnetRouter
    },
    getMenuTabs(state) {
      return state.menuTabs
    }
  },
  actions: {}
}
