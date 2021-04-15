// import Vue from 'vue'
import request from '../../utils/request'

export const state = {
  containers: [],
};

export const getters = {
  // allTodos: state => state.todos,
};

export const mutations = {
  // SET_HOSTS(state, newValue) {
  //   state.hosts = newValue
  // },
};

export const actions = {
  // 运行容器
  runContainer({ state }, { id, host_id = "" }) {
    console.log(state.containers)
    return new Promise((resolve, reject) => {
      request.post('containers/' + id + '/run?host_id=' + host_id)
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      })
    })
  },

  // 暂停容器
  pauseContainer({ state }, { id }) {
    console.log(state.containers)
    return new Promise((resolve, reject) => {
      request.post('containers/' + id + '/pause')
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      })
    })
  },

  // 重启容器
  restartContainer({ state }, { id }) {
    console.log(state.containers)
    return new Promise((resolve, reject) => {
      request.post('containers/' + id + '/restart')
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      })
    })
  },
};
