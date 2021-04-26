<script>
import Layout from "../../../layouts/main";
import PageHeader from "@/components/page-header";
import LoaderContainer from "@/components/DvcAI/loader-container";
import ContainerDetailCard from "@/components/DvcAI/containers/detail/container-detail-card";
import ContainerDetailRightSidebar from "@/components/DvcAI/containers/detail/container-detail-rightsidebar";
import appConfig from "@/app.config";
import { EventBus } from "@/utils/event-bus";

/**
 * Container Detail component
 */
export default {
  inject:['reload'],
  page: {
    title: "容器详情",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader, LoaderContainer, ContainerDetailCard, ContainerDetailRightSidebar },
  data() {
    return {
      title: "容器详情",
      items: [
        {
          text: "容器列表",
          to: { path: '/containers' },
        },
        {
          text: "容器详情",
          active: true
        }
      ],
      id: this.$route.params.id,
      container: null,
      // newInfo: this.container,
      websock: null,
      loadingState: false,
    };
  },
  mounted(){
    this.getContainer();
    // 未删除容器，请求ws
    // if (this.container && this.container.status !== "Deleted") this.initWebSocket();
    this.initWebSocket();
    EventBus.$on('update', () => this.reload());
  },
  destroyed() {
    // 退出关闭ws
    if (this.websock) this.websock.close();
  },
  methods:{
    getContainer() {
      this.$request.get('containers/'+ this.$route.params.id)
      .then(({data})=>{
        if(data.code === 1) {
          this.container = data.data;
        } else {
          console.log(data)
        }
      })
      .catch((err)=>{
        console.log(err)
      })
    },
    // ws初始化
    initWebSocket() {
      const wsuri =
        process.env.VUE_APP_WS_URL + "_containers?id=" + this.id;
      this.websock = new WebSocket(wsuri, this.$keycloak.token);
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onclose = this.websocketclose;
    },

    // ws连接建立之后执行send方法发送数据
    websocketonopen() {},

    // ws连接建立失败重连
    websocketonerror() {
      this.initWebSocket();
    },

    // ws数据接收
    websocketonmessage(res) {
      const message = JSON.parse(res.data);
      this.container = { ...this.container, ...message };
      // console.log(message);
    },

    // ws数据发送
    websocketsend(data) {
      this.websock.send(data);
    },

    // ws关闭
    websocketclose(e) {
      console.log("websocket error", e);
    },

    // 加载状态改变
    onLoading(state) {
      console.log(state)
      this.loadingState = state;
    },
  },
};
</script>
<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <LoaderContainer :loading="loadingState">
      <!-- <div class="d-lg-flex">
        
        <div class="w-100">
          <ContainerDetailCard :container="container"/>
        </div>
        <div class="btn-rightsidebar ms-lg-4">
          <ContainerDetailRightSidebar :container="container" @changeLoading="onLoading" />
        </div>
      </div> -->
      <div class="row">
        
        <div class="col-12 col-md-8">
          <ContainerDetailCard :container="container"/>
        </div>
        <div class="col-12 col-md-4">
          <ContainerDetailRightSidebar :container="container" @changeLoading="onLoading" />
        </div>
      </div>
    </LoaderContainer>
  </Layout>
</template>