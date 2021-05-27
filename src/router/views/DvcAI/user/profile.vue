<script>
import Layout from "../../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";
import { mapState } from 'vuex';
import Rightsidecard from './rightsidecard.vue';

/**
 * 容器列表
 */
export default {
  page: {
    title: "个人中心",
    meta: [{ name: "个人中心", content: appConfig.description }]
  },
  components: {Layout, PageHeader,Rightsidecard},
  data() {
    return {
      title: "个人中心",
      items: [
        {
          text: "个人中心",
          active: true,
        },
      ],
      
    };
  },
  computed: {
    ...mapState({
      userInfo(state){
        if(state.auth.currentUser) {
          return state.auth.currentUser
        } else {
          return {
            avatar_url:"",
            name: ''
          }
        }
      } 
    }),
    avatarUrl() {
      return this.userInfo.avatar_url ? this.userInfo.avatar_url : require('@/assets/images/users/avatar-1.jpg')
    },
    // 是否是管理员
    isAdmin() {
      return this.$keycloak.realmAccess.roles.includes("DOCKHUB_ADMIN");
    },
   },
};
</script>

<template>
    <Layout>
      <PageHeader :title="title" :items="items" />
      <div class="row">
        <!--个人信息框(小窗口时才显示)-->
        <div class="col-md-4 d-md-none">
          <rightsidecard/>
        </div>
        <!--左边这一列-->
        <div class="col-md-8">
          <div class="custom-tab">
            <b-tabs pills fill content-class="text-muted mt-4">
              <b-tab active class="border-0">
                <template v-slot:title>
                  <span class="d-none d-sm-inline-block">项目</span>
                </template>
                <!--<Config :host="host"/>-->
                <div class="card">
                  <div class="card-body">
                    <!--<h5 class="card-title mb-3">主机</h5>-->
                    <div class="row">
                      <div class="col-sm-12 col-md-2">
                        <p class="text-muted mb-2">我的项目</p>
                      </div>
                    </div>
                  </div>
                </div>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="d-none d-sm-inline-block">数据集</span>
                </template>
                <div class="card">
                  <div class="card-body">
                    <!--<h5 class="card-title mb-3">主机</h5>-->
                    <div class="row">
                      <div class="col-sm-12 col-md-2">
                        <p class="text-muted mb-2">我的数据集</p>
                      </div>
                    </div>
                  </div>
                </div>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="d-none d-sm-inline-block">镜像</span>
                </template>
                <div class="card">
                  <div class="card-body">
                    <!--<h5 class="card-title mb-3">主机</h5>-->
                    <div class="row">
                      <div class="col-sm-12 col-md-2">
                        <p class="text-muted mb-2">我的镜像</p>
                      </div>
                    </div>
                  </div>
                </div>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="d-none d-sm-inline-block">容器</span>
                </template>
                <div class="card">
                  <div class="card-body">
                    <!--<h5 class="card-title mb-3">主机</h5>-->
                    <div class="row">
                      <div class="col-sm-12 col-md-2">
                        <p class="text-muted mb-2">我的容器</p>
                      </div>
                    </div>
                  </div>
                </div>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="d-none d-sm-inline-block">收藏</span>
                </template>
                <div class="card">
                  <div class="card-body">
                    <!--<h5 class="card-title mb-3">主机</h5>-->
                    <div class="row">
                      <div class="col-sm-12 col-md-6">
                        <p class="text-muted">我收藏的项目/数据集/镜像/容器</p>
                      </div>
                    </div>
                  </div>
                </div>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="d-none d-sm-inline-block">关注</span>
                </template>
                <div class="card">
                  <div class="card-body">
                    <!--<h5 class="card-title mb-3">主机</h5>-->
                    <div class="row">
                      <div class="col-sm-12 col-md-2">
                        <p class="text-muted mb-2">我的关注</p>
                      </div>
                    </div>
                  </div>
                </div>
              </b-tab>
            </b-tabs>
              
          </div>
        </div>
        <!--左边这一列结束-->

        <!--右边这一列(大窗口显示)-->
        <div class="col-md-4 d-none d-md-block">
          <rightsidecard/>
        </div>
        <!--右边这一列结束-->

      </div>
      
    </Layout>
</template>