<script>
import Avatar from "@/components/DvcAI/utility/avatar";
import LazyImg from "@/components/DvcAI/utility/color-img";

export default {
  props: {
    proj: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    Avatar,
    LazyImg
  },
  computed: {
    branches() {
      let branchList = this.proj.branches;
      if (!branchList) return [];
      if (branchList.length > 3) {
        return branchList.slice(0, 3);
      }
      return branchList;
    },
  },
  methods: {
    // 打开对应的github项目页面
    openProj(href) {
      window.open(href, "_blank");
    },
  }
};
</script>

<template>
  <div class="list-item-con">
      
    <div class="row align-items-center">
      <div class="col-1 col-md-1 d-none d-md-block">
        <LazyImg :img-class="'avatar-sm'" :src="proj.cover_img_url" :imgColor="'#fff'"/>
      </div>

      <div class="col-4 col-md-3">
        <div class="i-text-middle d-block text-truncate">
          <h5 class="list-item-name d-inline-block text-truncate mb-0">
            <i class="bx bx-briefcase-alt-2 me-1 d-md-none"></i>
            <!-- 暂时跳转至github项目 -->
            <a class="text-dark me-1" @click.prevent="openProj(proj.url)">{{ proj.name }}</a>
          </h5>
          <a class="i-text-middle cursor-pointer" @click.prevent="openProj(proj.url)"><i class="bx bxl-github font-size-18"></i></a>
        </div>
        <p class="text-muted text-truncate list-item-desc mb-0">{{ proj.desc }}</p>
      </div>

      <div class="col-3 col-md-2 flex-wrap">
        <div v-if="proj.branches && proj.branches.length > 0">
          <span class="badge bg-primary i-text-middle me-2">
            <i class="bx bx-git-branch me-1"></i>
            {{ proj.branches[0] }}
          </span>
          <b-dropdown
            class="card-drop"
            variant="white"
            menu-class="dropdown-menu-end"
            right
            toggle-class="p-0"
          >
            <template v-slot:button-content>
              <i class="mdi mdi-dots-horizontal font-size-18"></i>
            </template>
            <b-dropdown-item v-for="item in proj.branches" :key="item">
              {{ item }}
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </div>

      <div class="col-3 col-md-2">
        <div v-if="proj.datasets && proj.datasets.length > 0">
          <span class="badge bg-info i-text-middle me-2">
            <i class="bx bx-cube me-1"></i>
            {{ proj.datasets[0].name }}
          </span>
          <b-dropdown
            class="card-drop"
            variant="white"
            menu-class="dropdown-menu-end"
            right
            toggle-class="p-0"
          >
            <template v-slot:button-content>
              <i class="mdi mdi-dots-horizontal font-size-18"></i>
            </template>
            <b-dropdown-item
              v-for="item in proj.datasets"
              :key="item.id"
              :href="item.url"
            >
              {{ item.name }}
            </b-dropdown-item>
          </b-dropdown>
        </div>
        <span v-else class="badge bg-secondary">暂无</span>
      </div>

      <div class="col-2 col-md-2 d-inline-flex align-items-center">
        <Avatar size="xs" :src="proj.user.avatar_url" :user-name="proj.user.username"/>
        <p v-if="proj.user" class="text-truncate ms-2 mb-0 d-none d-md-block"><a class="grid-username" href="javascript:void(0);">{{proj.user.username}}</a></p>
      </div>

      <div class="col-2 col-md-2 text-end d-none d-md-block">
        <i class="bx bx-calendar me-1"></i>
        <span>{{ proj.update_time | moment("from", "now") }}</span>
      </div>

    </div>
  </div>
</template>
