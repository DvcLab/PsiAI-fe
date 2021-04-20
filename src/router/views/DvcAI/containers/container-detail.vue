<script>
import Layout from "../../../layouts/main";
import PageHeader from "@/components/page-header";
import ContainerDetailCard from "@/components/DvcAI/container-detail-card";
import ContainerDetailRightSidebar from "@/components/DvcAI/container-detail-rightsidebar";
import appConfig from "@/app.config";

/**
 * Container Detail component
 */
export default {
  page: {
    title: "容器详情",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader, ContainerDetailCard, ContainerDetailRightSidebar },
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
      id: this.$route.params.id,
      container: null,
    };
  },
  mounted(){
    this.getContainer()
  },
  methods:{
    getContainer() {
      this.$request.get('containers/'+ this.$route.params.id)
      .then(({data})=>{
        console.log(data)
        if(data.code === 1) {
          this.container = data.data;
        } else {
          console.log(data)
        }
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  },
};
</script>
<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="d-lg-flex">
      
      <div class="w-100">
        <ContainerDetailCard :container="container"/>
      </div>
      <div class="btn-rightsidebar ms-lg-4">
        <ContainerDetailRightSidebar :container="container"/>
      </div>
    </div>
  </Layout>
</template>