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
    title: "个人信息管理页",
    meta: [{ name: "个人信息管理页", content: appConfig.description }]
  },
  components: {Layout, PageHeader},
  data() {
    return {
      title: "个人信息管理页",
      items: [
        {
          text: "个人信息管理页",
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
            attributes: {
              headimgurl: [],
            },
            username: ''
          }
        }
      } 
    }),
    avatarUrl() {
      return this.userInfo.attributes.headimgurl ? this.userInfo.attributes.headimgurl[0] : require('@/assets/images/users/avatar-1.jpg')
    }
   },
  mounted() {

  },
  destroyed(){
  },
  methods: {
    
  }
};
</script>

<template>
    <Layout>
      <PageHeader :title="title" :items="items" />
      <div class="row">
        
        <!--左边这一列-->
        <div class="col-xl-4">
          <!--左上角带头像的框-->
          <div class="card text-center">
            <div class="card-body">
              <div v-if="!avatarUrl" class="avatar-sm mx-auto mb-4">
                <span
                  class="avatar-title rounded-circle bg-soft bg-primary text-primary font-size-16"
                  >{{ userInfo.username.charAt(0) }}</span
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
                <a href="javascript: void(0);" class="text-dark">{{
                  userInfo.username
                }}</a>
              </h5>
              <p class="text-muted">这个人很懒，什么也没有留下~</p>
              <!--
              <div>
                <div class="mt-4">
                  <a href class="btn btn-primary btn-sm">
                    Edit Profile
                  </a>
                </div>
              </div>
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
                        <!--图标变黄色<i class="bx bx-star text-warning"></i> 0-->
                      </h5>
                    </li>
                  </ul>
              </div>

            </div>
          </div>
          <!--左上角带头像的框结束-->

          <!--左下角个人信息-->
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-start">
                <h4 class="card-title mb-4" style="margin:5px 0 4px 0 !important">个人信息</h4>
                <div class="ms-auto">
                  <!--<a href class="btn btn-primary btn-sm" style="color:#242922e; background-color:#fafbfc; border-color:rgbs(27,31,35,0.15); box-shadow:0 1px rgba(27,31m35,0.04)">-->
                  <a href class="btn btn-sm" style="color:#242922e; background-color:#eff2f7; border-color:rgbs(27,31,35,0.15); box-shadow:0 1px rgba(27,31m35,0.04)">
                    编辑
                  </a>
                </div>
                <!--<b-button
                  class="btn btn-success ms-auto"
                  @click="showModal = true"
                  >编辑</b-button
                >-->
              </div>
              <!--<p>个人简介</p>-->
              <div class="table-responsive ">
                <table class="table table-nowrap mb-0">
                  <tbody>
                    <tr>
                      <th scope="row">用户名</th>
                      <td>{{userInfo.username}}</td>
                    </tr>
                    <tr v-if="userInfo.name">
                      <th scope="row">用户姓名</th>
                      <td>{{userInfo.name}}</td>
                    </tr>
                    <tr v-if="userInfo.blog">
                      <th scope="row">我的博客</th>
                      <td>{{userInfo.blog}}</td>
                    </tr>
                    <tr>
                      <th scope="row">邮箱</th>
                      <td>{{userInfo.email}}</td>
                    </tr>
                    <tr v-if="userInfo.associatedAcount">
                      <th scope="row">关联账号</th>
                      <td>{{userInfo.associatedAcount}}</td>

                    </tr>
                    <tr>
                      <th scope="row">用户权限</th>
                      <td>
                        <div>
                          <a
                            href="javascript: void(0);"
                            class="badge bg-primary font-size-11"
                            >管理员</a
                          >
                        </div>
                      </td>
                    </tr>
                    <tr>
                        <th scope="row">我的团队</th>
                        <td> </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!--左下角个人信息结束-->

        </div>
        <!--左边这一列结束-->

        <!--右边这一列-->
        <div class="col-xl-8">
          <div class="card">
                <div class="card-body">
                    <!--<h4 class="card-title mb-3">Orders</h4>-->
                    <b-tabs content-class="p-3" nav-class="nav-tabs-custom">
                        <b-tab title="项目" active>
                          我的项目
                        </b-tab>
                        <b-tab title="数据集" active>
                          我的数据集
                        </b-tab>
                        <b-tab title="镜像" active>
                          我的镜像
                        </b-tab>
                        <b-tab title="容器" active>
                          我的容器
                        </b-tab>
                        <b-tab title="收藏" active>
                          我收藏的项目/数据集/镜像/容器
                        </b-tab>
                        <b-tab title="关注" active>
                          我的关注
                        </b-tab>
                    </b-tabs>
                </div>
          </div>
        </div>
        <!--右边这一列结束-->

      </div>
      
    </Layout>
</template>