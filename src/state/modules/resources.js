import Vue from 'vue'
import request from '../../utils/request'

export const state = {
    hosts: [],
};

export const getters = {
    // allTodos: state => state.todos,
};

export const mutations = {
  SET_HOSTS(state, newValue) {
    state.hosts = newValue
    // state.hosts.splice(0, state.hosts.length, ...newValue)
  },
};

export const actions = {
  getHosts({ commit }, params) {
    if(!Vue.prototype.$keycloak.realmAccess.roles.includes("DOCKHUB_ADMIN")) return;
    request.get('hosts', { params })
    .then(({ data }) => {
      if(data.code === 1) {
        commit('SET_HOSTS', data.data);
      }
    })
    .catch((err) => {
      console.log(err)
    })
  },
};
