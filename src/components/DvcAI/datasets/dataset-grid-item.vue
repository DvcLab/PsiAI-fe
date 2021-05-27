<script>
import Avatar from "@/components/DvcAI/utility/avatar";
import LazyImg from "@/components/DvcAI/utility/color-img";

export default {
  props: {
    dataset: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    Avatar,
    LazyImg
  },
  computed: {
    tags() {
      if (!this.dataset.tags) return [];
      let tagList = this.dataset.tags;
      if (tagList.length > 3) {
        let temp = tagList.slice(0, 3);
        // temp.push('...');
        return temp;
      }
      return tagList;
    },
  },
  methods: {
    // 跳转数据集详情页
    toDatasetDetail(e){
      let target = e.target;

      if(target.matches('button') || target.matches('a') || target.matches('text') || target.matches('i')) {
        console.log('不可跳转')
        return;
      }else if(target.matches('.grid-username') || target.matches('.avatar-xxs')) {
        console.log('点击跳转用户信息页');
      } else {
        return this.$router.push({ path: '/datasets/' + this.dataset.id })
        // console.log('可以跳转详情页')
      }
    },
  }
};
</script>

<template>
  <div class="grid-item-con cursor-pointer" @click="toDatasetDetail">
    <LazyImg :img-class="'grid-img'" :src="dataset.cover_img_url"/>

    <div class="grid-body">
      <h5 class="grid-item-name i-text-middle text-truncate">
        <i class="bx bx-cube me-1 d-md-none"></i>
        <span class="text-dark">{{ dataset.name }}</span>
      </h5>
      <p
      class="text-muted text-truncate-2 list-item-desc mb-0"
      :class="{
       'text-truncate-2': this.tags.length > 0,
       'text-truncate-3': this.tags.length === 0
      }"
      >{{ dataset.desc }}</p>

      <p class="mt-1 mb-0">
        <span v-for="item in tags" :key="item">
          <span class="badge bg-primary me-1">
            {{ item }}
          </span>
        </span>
      </p>
    </div>
    <div class="row grid-footer">
      <!-- 暂时点击用户头像跳转空链接 -->
      <div class="col-8 d-inline-flex align-items-center">
        <a href="javascript:void(0);">
          <Avatar size="xxs" :src="dataset.user.avatar_url" :user-name="dataset.user.username" class="me-2"/>
        </a>
        <p class="text-truncate mb-0"><a class="grid-username" href="javascript:void(0);">{{dataset.user.username}}</a></p>
      </div>
      <div class="col-4">
        <span class="grid-time float-end text-truncate">{{
          dataset.update_time | moment("from", "now")
        }}</span>
      </div>
    </div>
  </div>
</template>
