<script>
import Layout from "@/router/layouts/main";
import appConfig from "@/app.config";

/**
 * 容器
 */
export default {
  inject:['reload'],
  page: {
    title: "容器",
    meta: [{ name: "容器", content: appConfig.description }]
  },
  components: { Layout }
};
</script>
<template>
  <Layout>
    <router-view></router-view>
  </Layout>
</template>
