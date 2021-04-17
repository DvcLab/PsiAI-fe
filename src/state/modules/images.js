// import Vue from 'vue'
import request from '../../utils/request'

export const state = {
  images: [],
};

export const getters = {
  // allTodos: state => state.todos,
};

export const mutations = {
  SET_IMAGES(state, newValue) {
    state.images = newValue
  },
};

export const actions = {
  // 获取适配指定项目（依赖）的镜像
  getImagesForProject({ state }, project_id) {
    console.log(state.images)
    return new Promise((resolve, reject) => {
      request.get('images_project', {
        params: {
          project_id
        }
      })
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
