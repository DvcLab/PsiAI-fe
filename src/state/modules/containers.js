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
  runContainer({ commit }, { id, gpu_enabled = false, host_id = "" }) {
    return new Promise((resolve, reject) => {
      request.post('containers/' + id + '/run', {
        params: {
          gpu_enabled,
          host_id
        }
      })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      })
    })
  }

};
