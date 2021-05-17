<script>
import Layout from "../../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";
import { mapState } from 'vuex';

/**
 * 容器列表
 */
export default {
  page: {
    title: "个人中心",
    meta: [{ name: "个人中心", content: appConfig.description }]
  },
  components: {Layout, PageHeader},
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
          <div class="card text-center">
            <div class="card-body">
              <div v-if="!avatarUrl" class="avatar-sm mx-auto mb-4">
                <span
                  class="avatar-title rounded-circle bg-soft bg-primary text-primary font-size-16"
                  >{{userInfo.name}}</span
                >
              </div>
              <div v-if="avatarUrl" class="mb-4">
                <img
                  class="rounded-circle avatar-sm"
                  :src="`${avatarUrl}`"
                  alt
                />
              </div>
              <h5 class="font-size-15 mb-1">
                <p>
                  <a href="javascript: void(0);" class="text-dark">{{
                    userInfo.name
                  }}</a>
                  <a  v-if="isAdmin"
                    href="javascript: void(0);"
                    class="badge bg-primary font-size-11 flex"
                    >管理员</a
                  >
                </p>
              </h5>
              <p class="text-muted">这个人很懒，什么也没有留下~</p>
              <p v-if="userInfo.email" class="text-muted">{{userInfo.email}}</p>
              <p v-if="userInfo.blog" class="text-muted">{{userInfo.blog}}</p>
              <p v-if="userInfo.username" class="text-muted">{{userInfo.username}}</p>
              <p v-if="userInfo.associatedAcount" class="text-muted">{{userInfo.associatedAcount}}</p>
              <!--
              <a
                class="btn btn-outline-primary btn-md btn-item mb-2"
                download="docker-compose-config"
                style="width:100%; padding:4px 16px"
              >
                编辑
              </a>
              -->
              <div class="text-muted">
                <ul class="list-inline mb-0">
                  <li class="list-inline-item me-3">
                    <h5
                      class="font-size-12"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Amount"
                    >
                      <i class="bx bxs-group"></i> 0 followers
                    </h5>
                  </li>
                  <li class="list-inline-item me-3">
                    <h5
                      class="font-size-12"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Amount"
                    >
                      <i class="bx bx bx-share-alt"></i> 0 
                    </h5>
                  </li>
                  <li class="list-inline-item me-3">
                    <h5
                      class="font-size-12"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Amount"
                    >
                      <i class="bx bx-star"></i> 0
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!--右边这一列结束-->
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
          <div class="card text-center">
            <div class="card-body">
              <div v-if="!avatarUrl" class="avatar-sm mx-auto mb-4">
                <span
                  class="avatar-title rounded-circle bg-soft bg-primary text-primary font-size-16"
                  >{{userInfo.name}}</span
                >
              </div>
              <div v-if="avatarUrl" class="mb-4">
                <img
                  class="rounded-circle avatar-sm"
                  :src="`${avatarUrl}`"
                  alt
                />
              </div>
              <h5 class="font-size-15 mb-1">
                <p>
                  <a href="javascript: void(0);" class="text-dark">{{
                    userInfo.name
                  }}     </a>
                  <a  v-if="isAdmin"
                    href="javascript: void(0);"
                    class="badge bg-primary font-size-11 flex"
                    >管理员</a
                  >
                </p>
              </h5>
              <p class="text-muted">这个人很懒，什么也没有留下~</p>
              <p v-if="userInfo.email" class="text-muted">{{userInfo.email}}</p>
              <p v-if="userInfo.blog" class="text-muted">{{userInfo.blog}}</p>
              <p v-if="userInfo.username" class="text-muted">{{userInfo.username}}</p>
              <p v-if="userInfo.associatedAcount" class="text-muted">{{userInfo.associatedAcount}}</p>
              <!--
              <a
                class="btn btn-outline-primary btn-md btn-item mb-2"
                download="docker-compose-config"
                style="width:100%; padding:4px 16px"
              >
                编辑
              </a>
              -->
              <div class="text-muted">
                <ul class="list-inline mb-0">
                  <li class="list-inline-item me-3">
                    <h5
                      class="font-size-12"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Amount"
                    >
                      <i class="bx bxs-group"></i> 0 followers
                    </h5>
                  </li>
                  <li class="list-inline-item me-3">
                    <h5
                      class="font-size-12"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Amount"
                    >
                      <i class="bx bx bx-share-alt"></i> 0 
                    </h5>
                  </li>
                  <li class="list-inline-item me-3">
                    <h5
                      class="font-size-12"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Amount"
                    >
                      <i class="bx bx-star"></i> 0
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!--右边这一列结束-->

      </div>
      
    </Layout>
</template>