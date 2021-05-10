<script>
import Layout from "../../../layouts/main";
// import ContainerList from "@/components/DvcAI/container-list";
// import Loader from "@/components/DvcAI/loader";
import appConfig from "@/app.config";
// import Autocomplete from '@trevoreyre/autocomplete-vue';
// import { getScrollHeight, getScrollTop, getWindowHeight } from "@/utils/screen";
// import { EventBus } from '@/utils/event-bus';

/**
 * 容器
 */
export default {
  inject:['reload'],
  page: {
    title: "容器",
    meta: [{ name: "容器", content: appConfig.description }]
  },
  components: { Layout },
  data() {
    return {
      containers: [],
      searchContent: '',
      curPage: 1,
      curTotal: 0,
      meta: {},
      loadingState: true
    };
  },
  mounted() {
    // window.addEventListener('scroll', this.load);
    // this.getContainersList('', 1);
    // EventBus.$on('update', () => this.reload());
    // this.getHostList();
  },
  destroyed(){
    // window.removeEventListener('scroll', this.load, false);
  },

};
</script>
<template>
  <Layout>
    <router-view></router-view>
  </Layout>
</template>
