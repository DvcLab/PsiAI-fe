<script>
import { mapState } from 'vuex';

export default {
  props: {
    host: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      loadingState: false,
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
  <div class="card">
    <div class="card-body">
      <!--横线上方的头像和用户名部分-->
      <div class="media align-items-center">
        <div class="align-self-center me-3">
          <div v-if="!avatarUrl" class="rounded-circle" :class="`avatar-xs`">
            <span
              class="avatar-title rounded-circle bg-soft bg-primary text-primary font-size-16"
              >{{userInfo.name}}</span
            >
          </div>
          <div v-if="avatarUrl" class="d-inline-block" :class="`avatar-xs`">
            <img
              class="rounded-circle avatar-sm"
              :class="`avatar-xs`"
              :src="`${avatarUrl}`"
              alt
            />
          </div>
        </div>
        <div class="media-body">
          <h5 class="font-size-14 mt-0 mb-0">
            {{ userInfo.name }}
          </h5>
        </div>
      </div>
      <!--横线-->
      <hr class="mt-2" />
      <!--横线下方的详细用户信息-->
      <p>
          <a  v-if="isAdmin"
            href="javascript: void(0);"
            class="badge bg-primary font-size-11 flex"
            >管理员</a
          >
        </p>
      <p class="text-muted">这个人很懒，什么也没有留下~</p>
      <p v-if="userInfo.email" class="text-muted">{{userInfo.email}}</p>
      <p v-if="userInfo.blog" class="text-muted">{{userInfo.blog}}</p>
      <p v-if="userInfo.username" class="text-muted">{{userInfo.username}}</p>
      <p v-if="userInfo.associatedAcount" class="text-muted">{{userInfo.associatedAcount}}</p>
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
<!--
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
      
      <a
        class="btn btn-outline-primary btn-md btn-item mb-2"
        download="docker-compose-config"
        style="width:100%; padding:4px 16px"
      >
        编辑
      </a>
      -->
      <!--
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
  -->
</template>
