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
      }else if(target.matches('.username') || target.matches('.avatar')) {
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
  <div class="list-item-con" @click="toDatasetDetail">
    <div class="row align-items-center">
      <div class="col-md-1 d-none d-md-block">
        <LazyImg :img-class="'avatar-sm'" :src="dataset.cover_img_url" :imgColor="'#fff'"/>
      </div>

      <div class="col-6 col-md-7">
        <h5 class="text-truncate mb-0 list-item-name">
          <i class="bx bx-cube me-1 d-md-none"></i>
          <a :href="dataset.url" class="text-dark">{{ dataset.name }}</a>
        </h5>
        <p class="text-muted text-truncate list-item-desc mb-0">{{ dataset.desc }}</p>
        <p
          v-if="dataset.tags && dataset.tags.length > 0"
          class="text-muted text-truncate mb-0"
        >
          <span v-for="item in tags" class="badge bg-primary me-1" :key="item">
            {{ item }}
          </span>
        </p>
      </div>

      <div class="col-2 col-md-2 d-inline-flex align-items-center">
        <Avatar size="xs" :src="dataset.user.avatar_url" :user-name="dataset.user.username"/>
        <p class="text-truncate ms-2 mb-0 d-none d-md-block"><a class="grid-username" href="javascript:void(0);">{{dataset.user.username}}</a></p>
      </div>

      <div class="col-4 col-md-2 text-end">
        <i class="bx bx-calendar me-1"></i>
        <span>{{ dataset.update_time | moment("from", "now") }}</span>
      </div>
    </div>
  </div>
</template>
