<script>
import Swal from "sweetalert2";
// import { mapState } from "vuex";
import PageHeader from "@/components/page-header";
import LoaderContainer from "@/components/DvcAI/loader-container";
import Card from "./card";
import Rightsidebar from "./rightsidebar";
import appConfig from "@/app.config";
import { EventBus } from "@/utils/event-bus";

/**
 * Host Detail component
 */

export default {
  inject:['reload'],
  page: {
    title: "主机详情",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { PageHeader, LoaderContainer, Card, Rightsidebar },
  data() {
    return {
      title: "主机详情",
      items: [
        {
          text: "主机列表",
          to: { path: '/hosts' },
        },
        {
          text: "主机详情",
          active: true
        }
      ],
      id: this.$route.params.id,
      host: null,
      websock: null,
      loadingState: false,
    };
  },
  computed: {

  },
  mounted(){
    this.getHost();
    this.initWebSocket();
    EventBus.$on('update', () => this.reload());
  },
  destroyed() {
    // 退出关闭ws
    if (this.websock) this.websock.close();
  },
  methods:{

    // 获取主机信息
    getHost() {
      this.loadingState = true;
      this.$request.get('hosts/'+ this.$route.params.id)
      .then(({data})=>{
        if(data.code === 1) {
          this.loadingState = false;
          this.host = data.data;
        } else {
          console.log(data)
          Swal.fire(
            "主机信息获取失败!",
            "点击按钮返回主机列表",
            "error"
          ).then((res) => {
            if(res.isConfirmed) {
              this.loadingState = false;
              this.backHostsList();
            }
          })
        }
      })
      .catch((err)=>{
        console.log(err)
        Swal.fire(
          "主机信息获取失败!",
          "点击按钮返回主机列表",
          "error"
        ).then((res) => {
          if(res.isConfirmed) {
            this.loadingState = false;
            this.backHostsList();
          }
        })
      })
    },

    // 返回容器列表
    backHostsList() {
      this.$router.push({path: '/hosts'})
    },

    // ws初始化
    initWebSocket() {
      const wsuri =
        process.env.VUE_APP_WS_URL + "_hosts?id=" + this.id;
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
      this.host = { ...this.host, ...message };
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
  <div>
    <PageHeader :title="title" :items="items" />
    <LoaderContainer :loading="loadingState">
      <div class="row font-size-14">
        
        <div class="col-12 col-md-8">
          <Card :host="host"/>
        </div>

        <div class="col-12 col-md-4">
          <Rightsidebar :host="host" @changeLoading="onLoading" />
        </div>

      </div>
    </LoaderContainer>
  </div>
</template>