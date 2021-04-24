<script>
import Avatar from "@/components/DvcAI/utility/avatar";

export default {
  props: {
    dataset: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    Avatar
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
};
</script>

<template>
  <div class="grid-item-con">
    <!-- 暂时点击项目卡片到空链接 -->
    <a href="javascript:void(0);">
      <img
        class="grid-img"
        src="@/assets/images/companies/img-1.png"
        v-real-img="dataset.cover_img_url"
        alt="项目"
      />
      <div class="grid-body">
        <h5 class="grid-item-name i-text-middle text-truncate">
          <i class="bx bx-cube me-1 d-md-none"></i>
          <span class="text-dark">{{ dataset.name }}</span>
        </h5>
        <p class="text-muted text-truncate-2 list-item-desc mb-0">{{ dataset.desc }}</p>

        <p class="mt-1 mb-0">
          <span v-for="item in tags" :key="item">
            <span class="badge bg-primary me-1">
              {{ item }}
            </span>
          </span>
        </p>
      </div>
    </a>
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
