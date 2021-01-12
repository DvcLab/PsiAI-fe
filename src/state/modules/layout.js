export const state = {
  layoutType: 'vertical',
  layoutWidth: 'default',
  leftSidebarTheme: 'default',
  leftSidebarType: 'condensed',
  // leftSidebarType: 'fixed',
}

export const getters = {}

export const mutations = {
  CHANGE_LAYOUT(state, layoutType) {
    state.layoutType = layoutType
  },
  CHANGE_LEFT_SIDEBAR_THEME(state, leftSidebarTheme) {
    state.leftSidebarTheme = leftSidebarTheme
  },
  CHANGE_LEFT_SIDEBAR_TYPE(state, leftSidebarType) {
    state.leftSidebarType = leftSidebarType
  },
  CHANGE_LAYOUT_WIDTH(state, layoutWidth) {
    state.layoutWidth = layoutWidth
  },
}

export const actions = {
  changeLayoutType({ commit, state, rootState }, { layoutType }) {
    commit('CHANGE_LAYOUT', layoutType)
  },

  changeLeftSidebarTheme({ commit, state, rootState }, { leftSidebarTheme }) {
    commit('CHANGE_LEFT_SIDEBAR_THEME', leftSidebarTheme)
  },

  changeLeftSidebarType({ commit, state, rootState }, { leftSidebarType }) {
    commit('CHANGE_LEFT_SIDEBAR_TYPE', leftSidebarType)
  },

  changeLayoutWidth({ commit, state, rootState }, { layoutWidth }) {
    commit('CHANGE_LAYOUT_WIDTH', layoutWidth)
  },
}
