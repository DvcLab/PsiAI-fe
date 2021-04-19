<script>
import Layout from "../../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Container Detail component
 */
export default {
  page: {
    title: "容器详情",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "容器详情",
      items: [
        {
          text: "容器列表",
          href: "/containers"
        },
        {
          text: "容器详情",
          active: true
        }
      ],
      id: this.$route.params.id
    };
  },
  mounted: {
    
  },
};
</script>
<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="d-lg-flex">
      
      <div class="w-100">
        <div class="card">
          {{$route.params.id}}
        </div>
      </div>
      <div class="btn-rightsidebar ms-lg-4">{{$route.params.id}}</div>
    </div>
  </Layout>
</template>