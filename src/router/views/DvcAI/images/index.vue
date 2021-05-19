<script>
import Layout from "@/router/layouts/main";
import appConfig from "@/app.config";

/**
 * 镜像
 */
export default {
  inject:['reload'],
  page: {
    title: "镜像",
    meta: [{ name: "镜像", content: appConfig.description }]
  },
  components: { Layout }
};
</script>
<template>
  <Layout>
    <router-view></router-view>
  </Layout>
</template>
