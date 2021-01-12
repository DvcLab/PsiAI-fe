import { mapState, mapGetters, mapActions } from 'vuex'

export const authComputed = {
  ...mapState('auth', {
    currentUser: (state) => state.currentUser,
  }),
  ...mapGetters('auth', ['loggedIn']),
}

export const layoutComputed = {
  ...mapState('layout', {
    layoutType: (state) => state.layoutType,
    leftSidebarTheme: (state) => state.leftSidebarTheme,
    leftSidebarType: (state) => state.leftSidebarType,
    layoutWidth: (state) => state.layoutWidth,
  }),
}

export const authMethods = mapActions('auth', [
  'logIn',
  'logOut',
  'register',
  'resetPassword',
])

export const layoutMethods = mapActions('layout', [
  'changeLayoutType',
  'changeLeftSidebarTheme',
  'changeLeftSidebarType',
  'changeLayoutWidth',
])
