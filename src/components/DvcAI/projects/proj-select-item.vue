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
      if (datasetList.length > 2) {
        return datasetList.slice(0, 2);
      }
      return datasetList;
    },
  },
};
</script>

<template>
  <div>
    <div class="row align-items-center p-2">
      <div class="col-md-2 d-none d-md-block">
        <LazyImg :img-class="'avatar-sm'" :src="proj.cover_img_url" :imgColor="'#fff'"/>
      </div>

      <div class="col-10 col-md-8">
        <h5 class="text-truncate mb-0 list-item-name">
          {{ proj.name }}
        </h5>
        <p class="text-truncate mb-0">
          {{ proj.desc }}
        </p>
        <p class="text-truncate mb-0">
          <span
            class="badge bg-primary me-2"
            v-for="item in branches"
            :key="item"
          >
            {{ item }}
          </span>
          <span v-if="datasets.length > 0">
            <span
              class="badge bg-info me-2"
              v-for="item in datasets"
              :key="item.id"
            >
              {{ item.name }}
            </span>
          </span>
          <span v-else class="badge bg-secondary me-2">无绑定数据集</span>
        </p>
      </div>

      <div class="col-2 col-md-2 text-end">

        <Avatar
          size="xs"
          :src="proj.user.avatar_url"
          :user-name="proj.user.username"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
h5 {
  color: inherit;
}
</style>