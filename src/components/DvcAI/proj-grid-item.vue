<script>
import Avatar from "@/components/DvcAI/avatar";

export default {
  props: {
    proj: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    Avatar
  },
  computed: {
    branches() {
      if (!this.proj.branches) return [];
      let branchList = this.proj.branches;
      if (branchList.length > 3) {
        return branchList.slice(0, 3);
      }
      return branchList;
    },
    datasets() {
      if (!this.proj.datasets) return [];
      let datasetList = this.proj.datasets;
      if (datasetList.length > 3) {
        return datasetList.slice(0, 3);
      }
      return datasetList;
    },
  },
};
</script>

<template>
  <div class="grid-item-con">
    <!-- 暂时跳转至github项目 -->
    <a :href="proj.url">
      <img
        class="grid-img"
        src="@/assets/images/companies/img-1.png"
        v-real-img="proj.cover_img_url"
        alt="项目"
      />
      <div class="grid-body">
        <div class="i-text-middle mb-1">
          <h5 class="grid-item-name text-truncate mb-0">
            <i class="bx bx-briefcase-alt-2 me-1 d-md-none"></i>
            <span class="text-dark me-1">{{ proj.name }}</span>
          </h5>
          <a class="i-text-middle" :href="proj.url"><i class="bx bxl-github font-size-18"></i></a>
        </div>
        
        <p class="grid-item-desc text-muted text-truncate-2 mb-0">{{ proj.desc }}</p>

        <p class="mt-1 mb-0">
          <span v-for="item in branches" :key="item">
            <span class="badge bg-primary me-2">
              <i class="bx bx-git-branch"></i>
              {{ item }}
            </span>
          </span>

          <span v-for="item in datasets" :key="item">
            <span class="badge bg-primary me-2">
              <i class="bx bx-cube"></i>
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
          <Avatar size="xxs" :src="proj.user.avatar_url" :user-name="proj.user.username" class="me-2"/>
        </a>
        <p class="text-truncate mb-0"><a class="grid-username" href="javascript:void(0);">{{proj.user.username}}</a></p>
      </div>

      <div class="col-4">
        <span class="grid-time float-end text-truncate">{{
          proj.update_time | moment("from", "now")
        }}</span>
      </div>

    </div>
  </div>
</template>
<style scoped>
.i-text-middle {
  display: inline-flex;
  align-items: center;
}
</style>