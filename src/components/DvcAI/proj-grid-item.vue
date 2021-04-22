<script>
export default {
  props: {
    proj: {
      type: Object,
      default: () => {},
    },
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
    <!-- 暂时点击项目卡片到空链接 -->
    <a href="javascript:void(0);">
      <img
        class="grid-img"
        src="@/assets/images/companies/img-1.png"
        v-real-img="proj.cover_img_url"
        alt="项目"
      />
      <div class="grid-body">
        <h5 class="text-truncate mb-0 grid-item-name">
          <i class="bx bx-briefcase-alt-2 me-1 d-md-none"></i>
          <span class="text-dark">{{ proj.name }}</span>
        </h5>
        <p class="text-muted text-truncate-2 mb-0">{{ proj.desc }}</p>

        <p class="mt-1 mb-0">
          <span v-for="item in branches" :key="item">
            <span class="badge bg-primary me-2">
              <i class="bx bx-git-branch me-1"></i>
              {{ item }}
            </span>
          </span>

          <span v-for="item in datasets" :key="item">
            <span class="badge bg-primary me-2">
              <i class="bx bx-cube me-1"></i>
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
          <img
            v-if="proj.user"
            class="grid-avatar float-start me-2"
            src="@/assets/images/users/avatar-1.jpg"
            v-real-img="proj.user.avatar_url"
            :alt="proj.user.username"
          />
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
