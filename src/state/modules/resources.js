import Vue from 'vue'
import request from '../../utils/request'

export const state = {
    hosts: [],
};

export const getters = {
    // allTodos: state => state.todos,
};

export const mutations = {
  setHosts(state, newValue) {
    state.host = newValue
  },
};

export const actions = {
    getHosts({ commit }) {
      if(!Vue.prototype.$keycloak.realmAccess.roles.includes("DOCKHUB_ADMIN")) return;
      request.get('hosts')
      .then(({ data }) => {
        if(data.code === 1) {
          commit('setHosts', data);
        }
      })
      .catch((err) => {
        console.log(err)
      })
    },
};
