<script>
import Swal from "sweetalert2";
import { mapState } from "vuex";
import PageHeader from "@/components/page-header";
import LoaderContainer from "@/components/DvcAI/loader-container";
import Card from "./card";
import Rightsidebar from "./rightsidebar";
import appConfig from "@/app.config";
import { EventBus } from "@/utils/event-bus";
//import Header from './header';
//import Content from './content';

/**
 * Container Detail component
 */

export default {
  inject:['reload'],
  page: {
    title: "容器详情",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { PageHeader, LoaderContainer, Rightsidebar, Card},
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
      websock: null,
      loadingState: false,
    };
  },
  computed: {
    // 当前用户信息
    ...mapState("auth", ["currentUser"]),

    // 是否是管理员
    isAdmin() {
      return this.$keycloak.realmAccess.roles.includes("DOCKHUB_ADMIN");
    },

    // 是否是用户自己创建的容器
    isMine() {
      if(!this.currentUser || !this.currentUser.sub) return false;
      return this.newInfo.uid === this.currentUser.sub;
    },
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

    // 获取容器信息
    getContainer() {
      this.loadingState = true;
      this.$request.get('containers/'+ this.$route.params.id)
      .then(({data})=>{
        if(data.code === 1) {
          this.loadingState = false;
          this.container = data.data;
        } else {
          console.log(data)
          Swal.fire(
            "容器信息获取失败!",
            "点击按钮返回容器列表",
            "error"
          ).then((res) => {
            if(res.isConfirmed) {
              this.loadingState = false;
              this.backContainersList();
            }
          })
        }
      })
      .catch((err)=>{
        console.log(err)
        Swal.fire(
          "容器信息获取失败!",
          "点击按钮返回容器列表",
          "error"
        ).then((res) => {
          if(res.isConfirmed) {
            this.loadingState = false;
            this.backContainersList();
          }
        })
      })
    },

    // 返回容器列表
    backContainersList() {
      this.$router.push({path: '/containers'})
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
      this.loadingState = state;
    },

    // 取消编辑容器名
    cancelEdit(e) {

      let target = e.target;
      
      if(target.matches('button') || target.matches('i') || target.matches('a') || target.matches('input') || target.matches('#location-radios span') || target.matches('label.btn') || target.matches('div.multiselect') || target.matches('div.multiselect__tags') || target.matches('#container-name')) {
        console.log('不可取消编辑')
        return;
      } else if(target.matches('.username') || target.matches('.avatar')) {
        console.log('点击跳转用户信息页');
      } else {
        console.log('可以取消编辑')
        EventBus.$emit('cancelEdit');
      }
    },
  },
};
</script>
<template>
  <div>
    <PageHeader :title="title" :items="items" />
    <LoaderContainer :loading="loadingState">
      <div class="row font-size-14" @click="cancelEdit">
        
        <div class="col-12 col-md-8">
          <!--<Header :container="container" :canEdit="canEdit"/>
          <Content :container="container"/>-->
          <Card :container="container" :canEdit="isAdmin || isMine"/>
        </div>

        <div class="col-12 col-md-4">
          <Rightsidebar :container="container" @changeLoading="onLoading" />
        </div>

      </div>
    </LoaderContainer>
  </div>
</template>