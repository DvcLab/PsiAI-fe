<script>
import Layout from "@/router/layouts/main";
import appConfig from "@/app.config";

/**
 * 容器
 */
export default {
  page: {
    title: "主机",
    meta: [{ name: "主机", content: appConfig.description }]
  },
  components: { Layout },
};
</script>
<template>
  <Layout>
    <router-view></router-view>
  </Layout>
</template>
