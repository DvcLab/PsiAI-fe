<script>
import Avatar from "@/components/DvcAI/utility/avatar";

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
        <img
          class="avatar-sm"
          src="@/assets/images/companies/img-1.png"
          v-real-img="proj.cover_img_url"
          alt="项目"
        />
      </div>

      <div class="col-4 col-md-3">
        <div class="i-text-middle">
          <h5 class="list-item-name text-truncate mb-0">
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
          <i class="bx bx-git-branch me-1"></i>
          <span class="badge bg-primary me-2">
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

      <div class="col-3 col-md-3">
        <div v-if="proj.datasets && proj.datasets.length > 0">
          <i class="bx bx-cube me-1"></i>
          <span class="text-dark">
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

      <div class="col-2 col-md-1">
        <Avatar size="xs" :src="proj.user.avatar_url" :user-name="proj.user.username"/>
      </div>

      <div class="col-2 col-md-2 text-end d-none d-md-block">
        <i class="bx bx-calendar me-1"></i>
        <span>{{ proj.update_time | moment("from", "now") }}</span>
      </div>

    </div>
  </div>
</template>
