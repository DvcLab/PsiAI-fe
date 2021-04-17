import Vue from 'vue';
import queryString from 'query-string';
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
  },
};

export const actions = {

  // 获取主机列表
  listHosts({ commit }, { q = "", page = "1", size = "10" }) {
    if(!Vue.prototype.$keycloak.realmAccess.roles.includes("DOCKHUB_ADMIN")) return;
    return new Promise((resolve, reject) => {
      request.get('hosts', {
        params: {
          q: q,
          page: page,
          size: size
        }
      })
      .then(({ data }) => {
        if(data.code === 1) {
          commit('SET_HOSTS', data.data);
          resolve(data);
        }
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      })
    })
  },

  // 创建主机
  createHost({ state }, { query }) {
    if(!Vue.prototype.$keycloak.realmAccess.roles.includes("DOCKHUB_ADMIN")) return;
    console.log(state.hosts)
    const q = queryString.stringify(query);
    return new Promise((resolve, reject) => {
      request.put('hosts?'+ q)
      .then(({ data }) => {
        if(data.code === 1) {
          resolve(data);
        } else {
          reject(data);
        }
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      })
    })
  },

  // 基于id获取主机
  getHost({ commit }, { id }) {
    if(!Vue.prototype.$keycloak.realmAccess.roles.includes("DOCKHUB_ADMIN")) return;
    return new Promise((resolve, reject) => {
      request.get('hosts/' + id)
      .then(({ data }) => {
        if(data.code === 1) {
          commit('SET_HOSTS', data.data);
          resolve(data);
        } else {
          reject(data);
        }
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      })
    })
  },

  /**
   * TODO: 更新主机信息
   * Note: ip port username 不可更改
   */  
  
  updateHost({ state }, { id, query }) {
    if(!Vue.prototype.$keycloak.realmAccess.roles.includes("DOCKHUB_ADMIN")) return;
    console.log(state.hosts)
    return new Promise((resolve, reject) => {
      request.post('hosts/' + id, query)
      .then(({ data }) => {
        if(data.code === 1) {
          resolve(data);
        } else {
          reject(data);
        }
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      })
    })
  },

  // 删除主机
  deleteHost({ state }, { id }) {
    if(!Vue.prototype.$keycloak.realmAccess.roles.includes("DOCKHUB_ADMIN")) return;
    console.log(state.hosts)
    return new Promise((resolve, reject) => {
      request.delete('hosts/' + id)
      .then(({ data }) => {
        if(data.code === 1) {
          resolve(data);
        } else {
          reject(data);
        }
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      })
    })
  },

};