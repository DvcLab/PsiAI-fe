// import store from '@/state/store'
// import Vue from 'vue'
export default [
  {
    path: '/',
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
    component: () => import('./views/DvcAI/containers/index.vue'),
    children: [
      {
        path: '',
        name: '容器列表',
        meta: {
          authRequired: true,
        },
        component: () => import('./views/DvcAI/containers/containers-list.vue'),
      },
      {
        path: 'create',
        name: '创建容器',
        meta: {
          authRequired: true,
        },
        component: () => import('./views/DvcAI/containers/create.vue'),
      },
    ]
  },
  {
    path: '/container/:id',
    name: '容器',
    meta: {
      authRequired: true,
    },
    component: () => import('./views/DvcAI/containers/container-detail.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: require('./views/DvcAI/utility/404').default,
  },
  // Redirect any unmatched routes to the 404 page. This may
  // require some server configuration to work in production:
  // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
  {
    path: '*',
    redirect: '404',
  },
  // {
  //   path: '/',
  //   name: 'default',
  //   meta: {
  //     authRequired: true,
  //   },
  //   component: () => import('./views/dashboards/default'),
  // },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import('./views/account/login'),
  //   meta: {
  //     beforeResolve(routeTo, routeFrom, next) {
  //       // If the user is already logged in
  //       if (store.getters['auth/loggedIn']) {
  //         // Redirect to the home page instead
  //         next({ name: 'default' })
  //       } else {
  //         // Continue to the login page
  //         next()
  //       }
  //     },
  //   },
  // },
  // {
  //   path: '/register',
  //   name: 'Register',
  //   component: () => import('./views/account/register'),
  //   meta: {
  //     beforeResolve(routeTo, routeFrom, next) {
  //       // If the user is already logged in
  //       if (store.getters['auth/loggedIn']) {
  //         // Redirect to the home page instead
  //         next({ name: 'default' })
  //       } else {
  //         // Continue to the login page
  //         next()
  //       }
  //     },
  //   },
  // },
  // {
  //   path: '/forgot-password',
  //   name: 'Forgot password',
  //   component: () => import('./views/account/forgot-password'),
  //   meta: {
  //     beforeResolve(routeTo, routeFrom, next) {
  //       // If the user is already logged in
  //       if (store.getters['auth/loggedIn']) {
  //         // Redirect to the home page instead
  //         next({ name: 'default' })
  //       } else {
  //         // Continue to the login page
  //         next()
  //       }
  //     },
  //   },
  // },
  // {
  //   path: '/logout',
  //   name: 'logout',
  //   meta: {
  //     authRequired: true,
  //     beforeResolve(routeTo, routeFrom, next) {
  //       if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
  //         store.dispatch('auth/logOut')
  //       } else {
  //         store.dispatch('authfack/logout')
  //       }
  //       const authRequiredOnPreviousRoute = routeFrom.matched.some(
  //         (route) => route.push('/login')
  //       )
  //       // Navigate back to previous page, or home as a fallback
  //       next(authRequiredOnPreviousRoute ? { name: 'default' } : { ...routeFrom })
  //     },
  //   },
  // },
  // {
  //   path: '/404',
  //   name: '404',
  //   component: require('./views/utility/404').default,
  // },
  // // Redirect any unmatched routes to the 404 page. This may
  // // require some server configuration to work in production:
  // // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
  // {
  //   path: '*',
  //   redirect: '404',
  // },
  // {
  //   path: '/dashboard/saas',
  //   name: 'saas-dashboard',
  //   meta: { authRequired: true },
  //   component: () => import('./views/dashboards/saas/index')
  // },
  // {
  //   path: '/dashboard/crypto',
  //   name: 'crypto-dashboard',
  //   meta: { authRequired: true },
  //   component: () => import('./views/dashboards/crypto/index')
  // },
  // {
  //   path: '/dashboard/blog',
  //   name: 'blog-dashboard',
  //   meta: { authRequired: true },
  //   component: () => import('./views/dashboards/blog/index')
  // },
  // {
  //   path: '/calendar',
  //   name: 'Calendar',
  //   meta: { authRequired: true },
  //   component: () => import('./views/calendar/calendar')
  // },
  // {
  //   path: '/chat',
  //   name: 'chat',
  //   meta: { authRequired: true },
  //   component: () => import('./views/chat/index')
  // },
  // {
  //   path: '/apps/file-manager',
  //   name: 'file-manager',
  //   meta: { authRequired: true },
  //   component: () => import('./views/file-manager/index')
  // },
  // {
  //   path: '/ecommerce/products',
  //   name: 'Products',
  //   meta: { authRequired: true },
  //   component: () => import('./views/ecommerce/products')
  // },
  // {
  //   path: '/ecommerce/product-detail/:id',
  //   name: 'Product Detail',
  //   meta: { authRequired: true },
  //   component: () => import('./views/ecommerce/product-detail')
  // },
  // {
  //   path: '/ecommerce/orders',
  //   name: 'Orders',
  //   meta: { authRequired: true },
  //   component: () => import('./views/ecommerce/orders')
  // },
  // {
  //   path: '/ecommerce/customers',
  //   name: 'Customers',
  //   meta: { authRequired: true },
  //   component: () => import('./views/ecommerce/customers')
  // },
  // {
  //   path: '/ecommerce/cart',
  //   name: 'Cart',
  //   meta: { authRequired: true },
  //   component: () => import('./views/ecommerce/cart')
  // },
  // {
  //   path: '/ecommerce/checkout',
  //   name: 'Checkout',
  //   meta: { authRequired: true },
  //   component: () => import('./views/ecommerce/checkout')
  // },
  // {
  //   path: '/ecommerce/shops',
  //   name: 'Shops',
  //   meta: { authRequired: true },
  //   component: () => import('./views/ecommerce/shops')
  // },
  // {
  //   path: '/ecommerce/add-product',
  //   name: 'Add Product',
  //   meta: { authRequired: true },
  //   component: () => import('./views/ecommerce/add-product')
  // },
  // {
  //   path: '/blog/list',
  //   name: 'blog-list',
  //   meta: { authRequired: true },
  //   component: () => import('./views/blog/list')
  // },
  // {
  //   path: '/blog/grid',
  //   name: 'blog-grid',
  //   meta: { authRequired: true },
  //   component: () => import('./views/blog/grid')
  // },
  // {
  //   path: '/blog/detail',
  //   name: 'blog-detail',
  //   meta: { authRequired: true },
  //   component: () => import('./views/blog/detail')
  // },
  // {
  //   path: '/crypto/wallet',
  //   name: 'Wallet',
  //   meta: { authRequired: true },
  //   component: () => import('./views/crypto/wallet/index')
  // },
  // {
  //   path: '/crypto/buy-sell',
  //   name: 'Buy/sell',
  //   meta: { authRequired: true },
  //   component: () => import('./views/crypto/buysell/index')
  // },
  // {
  //   path: '/crypto/exchange',
  //   name: 'Exchange',
  //   meta: { authRequired: true },
  //   component: () => import('./views/crypto/exchange/index')
  // },
  // {
  //   path: '/crypto/lending',
  //   name: 'Lending',
  //   meta: { authRequired: true },
  //   component: () => import('./views/crypto/lending/index')
  // },
  // {
  //   path: '/crypto/orders',
  //   name: 'crypto-orders',
  //   meta: { authRequired: true },
  //   component: () => import('./views/crypto/orders/index')
  // },
  // {
  //   path: '/crypto/kyc-application',
  //   name: 'kyc-application',
  //   meta: { authRequired: true },
  //   component: () => import('./views/crypto/kycapplication/index')
  // },
  // {
  //   path: '/crypto/ico-landing',
  //   name: 'Ico-landing',
  //   meta: { authRequired: true },
  //   component: () => import('./views/crypto/ico-landing')
  // },
  // {
  //   path: '/invoices/detail',
  //   name: 'Invoice Detail',
  //   meta: { authRequired: true },
  //   component: () => import('./views/invoices/detail')
  // },
  // {
  //   path: '/invoices/list',
  //   name: 'Invoice List',
  //   meta: { authRequired: true },
  //   component: () => import('./views/invoices/list')
  // },
  // {
  //   path: '/ui/alerts',
  //   name: 'Alerts',
  //   meta: {
  //     authRequired: true
  //   },
  //   component: () => import('./views/ui/alerts')
  // },
  // {
  //   path: '/ui/buttons',
  //   name: 'Buttons',
  //   meta: {
  //     authRequired: true
  //   },
  //   component: () => import('./views/ui/buttons')
  // },
  // {
  //   path: '/ui/cards',
  //   name: 'Cards',
  //   meta: { authRequired: true },
  //   component: () => import('./views/ui/cards')
  // },
  // {
  //   path: '/ui/carousel',
  //   name: 'Carousel',
  //   meta: { authRequired: true },
  //   component: () => import('./views/ui/carousel')
  // },
  // {
  //   path: '/ui/dropdowns',
  //   name: 'Dropdowns',
  //   meta: { authRequired: true },
  //   component: () => import('./views/ui/dropdowns')
  // },
  // {
  //   path: '/ui/grid',
  //   name: 'Grid',
  //   meta: { authRequired: true },
  //   component: () => import('./views/ui/grid')
  // },
  // {
  //   path: '/ui/images',
  //   name: 'Images',
  //   meta: { authRequired: true },
  //   component: () => import('./views/ui/images')
  // },
  // {
  //   path: '/ui/modals',
  //   name: 'Modals',
  //   meta: { authRequired: true },
  //   component: () => import('./views/ui/modals')
  // },
  // {
  //   path: '/ui/rangeslider',
  //   name: 'Rangeslider',
  //   meta: { authRequired: true },
  //   component: () => import('./views/ui/rangeslider')
  // },
  // {
  //   path: '/ui/progressbars',
  //   name: 'Progressbars',
  //   meta: { authRequired: true },
  //   component: () => import('./views/ui/progressbars')
  // },
  // {
  //   path: '/ui/sweet-alert',
  //   name: 'Sweet-alert',
  //   meta: { authRequired: true },
  //   component: () => import('./views/ui/sweet-alert')
  // },
  // {
  //   path: '/ui/tabs-accordions',
  //   name: 'Tabs-accordions',
  //   meta: { authRequired: true },
  //   component: () => import('./views/ui/tabs-accordions')
  // },
  // {
  //   path: '/ui/typography',
  //   name: 'Typography',
  //   meta: { authRequired: true },
  //   component: () => import('./views/ui/typography')
  // },
  // {
  //   path: '/ui/video',
  //   name: 'Video',
  //   meta: { authRequired: true },
  //   component: () => import('./views/ui/video')
  // },
  // {
  //   path: '/ui/general',
  //   name: 'General',
  //   meta: { authRequired: true },
  //   component: () => import('./views/ui/general')
  // },
  // {
  //   path: '/ui/colors',
  //   name: 'Colors',
  //   meta: { authRequired: true },
  //   component: () => import('./views/ui/colors')
  // },
  // {
  //   path: '/ui/lightbox',
  //   name: 'Lightbox',
  //   meta: { authRequired: true },
  //   component: () => import('./views/ui/lightbox')
  // },
  // {
  //   path: '/ui/image-cropper',
  //   name: 'Image Cropper',
  //   meta: { authRequired: true },
  //   component: () => import('./views/ui/cropper')
  // },
  // {
  //   path: '/projects/grid',
  //   name: 'Projects Grid',
  //   meta: { authRequired: true },
  //   component: () => import('./views/projects/projects-grid')
  // },
  // {
  //   path: '/projects/list',
  //   name: 'Projects List',
  //   meta: { authRequired: true },
  //   component: () => import('./views/projects/projects-list')
  // },
  // {
  //   path: '/projects/overview',
  //   name: 'Project Overview',
  //   meta: { authRequired: true },
  //   component: () => import('./views/projects/overview')
  // },
  // {
  //   path: '/projects/create',
  //   name: 'Create New',
  //   meta: { authRequired: true },
  //   component: () => import('./views/projects/create')
  // },
  // {
  //   path: '/contacts/grid',
  //   name: 'User Grid',
  //   meta: { authRequired: true },
  //   component: () => import('./views/contacts/contacts-grid')
  // },
  // {
  //   path: '/contacts/list',
  //   name: 'User List',
  //   meta: { authRequired: true },
  //   component: () => import('./views/contacts/contacts-list')
  // },
  // {
  //   path: '/contacts/profile',
  //   name: 'Profile',
  //   meta: { authRequired: true },
  //   component: () => import('./views/contacts/contacts-profile')
  // },
  // {
  //   path: '/charts/apex',
  //   name: 'Apex chart',
  //   meta: { authRequired: true },
  //   component: () => import('./views/charts/apex')
  // },
  // {
  //   path: '/charts/chartjs',
  //   name: 'Chartjs chart',
  //   meta: { authRequired: true },
  //   component: () => import('./views/charts/chartjs/index')
  // },
  // {
  //   path: '/charts/chartist',
  //   name: 'Chartist chart',
  //   meta: { authRequired: true },
  //   component: () => import('./views/charts/chartist')
  // },
  // {
  //   path: '/charts/echart',
  //   name: 'Echart chart',
  //   meta: { authRequired: true },
  //   component: () => import('./views/charts/echart/index')
  // },
  // {
  //   path: '/icons/boxicons',
  //   name: 'Boxicons Icon',
  //   meta: { authRequired: true },
  //   component: () => import('./views/icons/boxicons')
  // },
  // {
  //   path: '/icons/materialdesign',
  //   name: 'Materialdesign Icon',
  //   meta: { authRequired: true },
  //   component: () => import('./views/icons/materialdesign')
  // },
  // {
  //   path: '/icons/dripicons',
  //   name: 'Dripicons Icon',
  //   meta: { authRequired: true },
  //   component: () => import('./views/icons/dripicons')
  // },
  // {
  //   path: '/icons/fontawesome',
  //   name: 'Fontawesome Icon',
  //   meta: { authRequired: true },
  //   component: () => import('./views/icons/fontawesome')
  // },
  // {
  //   path: '/maps/google',
  //   name: 'Google Maps',
  //   meta: { authRequired: true },
  //   component: () => import('./views/maps/google')
  // },
  // {
  //   path: '/maps/leaflet',
  //   name: 'Leaflet Maps',
  //   meta: { authRequired: true },
  //   component: () => import('./views/maps/leaflet/index')
  // },
  // {
  //   path: '/tables/basic',
  //   name: 'Basic Tables',
  //   meta: { authRequired: true },
  //   component: () => import('./views/tables/basictable')
  // },
  // {
  //   path: '/tables/advanced',
  //   name: 'Advanced Tables',
  //   meta: { authRequired: true },
  //   component: () => import('./views/tables/advancedtable')
  // },
  // {
  //   path: '/form/advanced',
  //   name: 'Form Advanced',
  //   meta: { authRequired: true },
  //   component: () => import('./views/forms/advanced')
  // },
  // {
  //   path: '/form/elements',
  //   name: 'Form Elements',
  //   meta: { authRequired: true },
  //   component: () => import('./views/forms/elements')
  // },
  // {
  //   path: '/form/layouts',
  //   name: 'Form Layouts',
  //   meta: { authRequired: true },
  //   component: () => import('./views/forms/layouts')
  // },
  // {
  //   path: '/form/editor',
  //   name: 'Form Editors',
  //   meta: { authRequired: true },
  //   component: () => import('./views/forms/editors')
  // },
  // {
  //   path: '/form/uploads',
  //   name: 'File Uploads',
  //   meta: { authRequired: true },
  //   component: () => import('./views/forms/uploads')
  // },
  // {
  //   path: '/form/validation',
  //   name: 'Form Validation',
  //   meta: { authRequired: true },
  //   component: () => import('./views/forms/validation')
  // },
  // {
  //   path: '/form/wizard',
  //   name: 'Form Wizard',
  //   meta: { authRequired: true },
  //   component: () => import('./views/forms/wizard')
  // },
  // {
  //   path: '/form/repeater',
  //   name: 'Form Repeater',
  //   meta: { authRequired: true },
  //   component: () => import('./views/forms/repeater')
  // },
  // {
  //   path: '/form/mask',
  //   name: 'Form Mask',
  //   meta: { authRequired: true },
  //   component: () => import('./views/forms/mask')
  // },
  // {
  //   path: '/pages/starter',
  //   name: 'Starter',
  //   meta: { authRequired: true },
  //   component: () => import('./views/utility/starter')
  // },
  // {
  //   path: '/pages/maintenance',
  //   name: 'Maintenance',
  //   meta: { authRequired: true },
  //   component: () => import('./views/utility/maintenance')
  // },
  // {
  //   path: '/pages/coming-soon',
  //   name: 'coming-soon',
  //   meta: { authRequired: true },
  //   component: () => import('./views/utility/coming-soon')
  // },
  // {
  //   path: '/pages/timeline',
  //   name: 'Timeline',
  //   meta: { authRequired: true },
  //   component: () => import('./views/utility/timeline')
  // },
  // {
  //   path: '/pages/faqs',
  //   name: 'FAQs',
  //   meta: { authRequired: true },
  //   component: () => import('./views/utility/faqs')
  // },
  // {
  //   path: '/pages/pricing',
  //   name: 'Pricing',
  //   meta: { authRequired: true },
  //   component: () => import('./views/utility/pricing')
  // },
  // {
  //   path: '/pages/404',
  //   name: 'Error-404',
  //   meta: { authRequired: true },
  //   component: () => import('./views/utility/404')
  // },
  // {
  //   path: '/pages/500',
  //   name: 'Error-500',
  //   meta: { authRequired: true },
  //   component: () => import('./views/utility/500')
  // },
  // {
  //   path: '/email/inbox',
  //   name: 'Inbox',
  //   meta: { authRequired: true },
  //   component: () => import('./views/email/inbox')
  // },
  // {
  //   path: '/email/reademail/:id',
  //   name: 'Read Email',
  //   meta: { authRequired: true },
  //   component: () => import('./views/email/reademail')
  // },
  // {
  //   path: '/email/templates/basic',
  //   name: 'Email template basic',
  //   meta: { authRequired: true },
  //   component: () => import('./views/email/templates/basic')
  // },
  // {
  //   path: '/email/templates/billing',
  //   name: 'Email template billing',
  //   meta: { authRequired: true },
  //   component: () => import('./views/email/templates/billing')
  // },
  // {
  //   path: '/email/templates/alert',
  //   name: 'Email template alert',
  //   meta: { authRequired: true },
  //   component: () => import('./views/email/templates/alert')
  // },
  // {
  //   path: '/tasks/list',
  //   name: 'Task list',
  //   meta: { authRequired: true },
  //   component: () => import('./views/tasks/task-list')
  // },
  // {
  //   path: '/tasks/kanban',
  //   name: 'Kanbanboard',
  //   meta: { authRequired: true },
  //   component: () => import('./views/tasks/kanbanboard')
  // },
  // {
  //   path: '/tasks/create',
  //   name: 'Create Task',
  //   meta: { authRequired: true },
  //   component: () => import('./views/tasks/task-create')
  // },
  // {
  //   path: '/auth/login-1',
  //   name: 'Login sample',
  //   meta: { authRequired: true },
  //   component: () => import('./views/sample-pages/login-sample')
  // },
  // {
  //   path: '/auth/login-2',
  //   name: 'Login-2-sample',
  //   meta: { authRequired: true },
  //   component: () => import('./views/sample-pages/login-2')
  // },
  // {
  //   path: '/auth/register-1',
  //   name: 'Register sample',
  //   meta: { authRequired: true },
  //   component: () => import('./views/sample-pages/register-sample')
  // },
  // {
  //   path: '/auth/register-2',
  //   name: 'Register-2',
  //   meta: { authRequired: true },
  //   component: () => import('./views/sample-pages/register-2')
  // },
  // {
  //   path: '/auth/recoverpwd',
  //   name: 'Recover pwd',
  //   meta: { authRequired: true },
  //   component: () => import('./views/sample-pages/recoverpw-sample')
  // },
  // {
  //   path: '/auth/recoverpwd-2',
  //   name: 'Recover pwd-2',
  //   meta: { authRequired: true },
  //   component: () => import('./views/sample-pages/recoverpwd-2')
  // },
  // {
  //   path: '/auth/lock-screen',
  //   name: 'Lock screen',
  //   meta: { authRequired: true },
  //   component: () => import('./views/sample-pages/lockscreen')
  // },
  // {
  //   path: '/auth/lock-screen-2',
  //   name: 'Lock screen-2',
  //   meta: { authRequired: true },
  //   component: () => import('./views/sample-pages/lockscreen-2')
  // },
  // {
  //   path: '/auth/confirm-mail',
  //   name: 'confirm-mail',
  //   meta: { authRequired: true },
  //   component: () => import('./views/sample-pages/confirm-mail')
  // },
  // {
  //   path: '/auth/confirm-mail-2',
  //   name: 'confirm-mail-2',
  //   meta: { authRequired: true },
  //   component: () => import('./views/sample-pages/confirm-mail-2')
  // },
  // {
  //   path: '/auth/email-verification',
  //   name: 'email-verification',
  //   meta: { authRequired: true },
  //   component: () => import('./views/sample-pages/email-verification')
  // },
  // {
  //   path: '/auth/email-verification-2',
  //   name: 'email-verification-2',
  //   meta: { authRequired: true },
  //   component: () => import('./views/sample-pages/email-verification-2')
  // },
  // {
  //   path: '/auth/two-step-verification',
  //   name: 'two-step-verification',
  //   meta: { authRequired: true },
  //   component: () => import('./views/sample-pages/two-step-verification')
  // },
  // {
  //   path: '/auth/two-step-verification-2',
  //   name: 'two-step-verification-2',
  //   meta: { authRequired: true },
  //   component: () => import('./views/sample-pages/two-step-verification-2')
  // }
]
