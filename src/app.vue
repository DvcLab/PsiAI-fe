<script>
import appConfig from "@/app.config";

import { notificationMethods } from "@/state/helpers";

export default {
  name: "app",
  provide () {                                           
    return {
      reload: this.reload                                              
    }
  },
  page: {
    // All subcomponent titles will be injected into this template.
    titleTemplate(title) {
      title = typeof title === "function" ? title(this.$store) : title;
      return title ? `${title} | ${appConfig.title}` : appConfig.title;
    },
  },
  data(){
    return {
      isRouterAlive: true
    }
  },
  mounted() {
    // document.querySelector("html").setAttribute('dir', 'rtl')
  },
  watch: {
    /**
     * Clear the alert message on route change
     */
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      // clear alert on location change
      this.clearNotification();
    },
  },
  methods: {
    clearNotification: notificationMethods.clear,
    reload () {
      this.isRouterAlive = false;            //先关闭，
      this.$nextTick(function () {
        this.isRouterAlive = true;         //再打开
      }) 
    }
  },
};
</script>

<template>
  <div id="app">
    <RouterView v-if="isRouterAlive" />
  </div>
</template>
