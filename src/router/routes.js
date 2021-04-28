import Vue from 'vue'

export default [
  {
    path: '/',
    redirect: () => {
      if(Vue.prototype.$keycloak.realmAccess.roles.includes('DOCKHUB_ADMIN')) return '/hosts'
      return '/projects'
    }
  },
  {
    path: '/hosts',
    name: '主机',
    meta: {
      authRequired: true,
      roles: ['DOCKHUB_ADMIN'],
    },
    component: () => import('./views/DvcAI/hosts/hosts-list.vue'),
  },
  {
    path: '/projects',
    name: '项目',
    meta: {
      authRequired: true,
    },
    component: () => import('./views/DvcAI/projects/projects-list.vue'),
  },
  {
    path: '/datasets',
    name: '数据集',
    meta: {
      authRequired: true,
    },
    component: () => import('./views/DvcAI/datasets/datasets-list.vue'),
  },
  {
    path: '/images',
    name: '镜像',
    meta: {
      authRequired: true,
    },
    component: () => import('./views/DvcAI/images/images-list.vue'),
  },
  {
    path: '/containers',
    name: '容器',
    meta: {
      authRequired: true,
    },
    component: () => import('./views/DvcAI/containers'),
    children: [
      {
        path: '',
        name: '容器列表',
        meta: {
          authRequired: true,
        },
        component: () => import('./views/DvcAI/containers/list'),
      },
      {
        path: 'create',
        name: '创建容器',
        meta: {
          authRequired: true,
        },
        component: () => import('./views/DvcAI/containers/create'),
      },
    ]
  },
  {
    path: '/container/:id',
    name: '容器',
    meta: {
      authRequired: true,
    },
    component: () => import('./views/DvcAI/containers/detail'),
  },
  {
    path: '/404',
    name: '404',
    component: require('./views/DvcAI/utility/404').default,
  },
  {
    path: '*',
    redirect: '404',
  },
]
