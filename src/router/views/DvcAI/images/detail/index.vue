<script>
import Swal from "sweetalert2";
// import { mapState } from "vuex";
import PageHeader from "@/components/page-header";
import LoaderContainer from "@/components/DvcAI/loader-container";
// import Card from "./card";
import Rightsidebar from "./rightsidebar";
import Header from './header';
import Content from './content';
import appConfig from "@/app.config";
import { EventBus } from "@/utils/event-bus";

/**
 * Image Detail component
 */

export default {
  inject:['reload'],
  page: {
    title: "镜像详情",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { PageHeader, LoaderContainer, Rightsidebar, Header, Content},
  data() {
    return {
      title: "镜像详情",
      items: [
        {
          text: "镜像列表",
          to: { path: '/images' },
        },
        {
          text: "镜像详情",
          active: true
        }
      ],
      id: this.$route.params.id,
      image: null,
      websock: null,
      loadingState: false,
    };
  },
  computed: {

  },
  mounted(){
    this.getHost();
    EventBus.$on('update', () => this.reload());
  },
  beforeDestroy() {
    // 退出关闭ws
    if (this.websock) this.websock.close();
  },
  methods:{

    // 获取镜像信息
    getHost() {
      this.loadingState = true;
      this.$request.get('images/'+ this.$route.params.id)
      .then(({data})=>{
        if(data.code === 1) {
          this.loadingState = false;
          this.image = data.data;
        } else {
          console.log(data)
          Swal.fire(
            "镜像信息获取失败!",
            "点击按钮返回镜像列表",
            "error"
          ).then((res) => {
            if(res.isConfirmed) {
              this.loadingState = false;
              this.backImagesList();
            }
          })
        }
      })
      .catch((err)=>{
        console.log(err)
        Swal.fire(
          "镜像信息获取失败!",
          "点击按钮返回镜像列表",
          "error"
        ).then((res) => {
          if(res.isConfirmed) {
            this.loadingState = false;
            this.backImagesList();
          }
        })
      })
    },

    // 返回镜像列表
    backImagesList() {
      this.$router.push({path: '/images'})
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
          <Header :image="image"/>
          <Content :image="image"/>
        </div>

        <div class="col-12 col-md-4">
          <Rightsidebar :image="image" @changeLoading="onLoading" />
        </div>

      </div>
    </LoaderContainer>
  </div>
</template>