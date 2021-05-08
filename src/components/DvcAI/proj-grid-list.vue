<script>
import ProjGridItem from "./proj-grid-item";

export default {
  components: {
    ProjGridItem,
  },
  props: {
    projects: {
      type: Array,
      default: function () {
        return [];
      },
    },
    updating: {
      type: Boolean,
    },
  },
};
</script>
<template>
  <div v-if="projects && projects.length > 0">
    <div class="row">
      <div
        class="col-12 col-sm-6 col-md-3 col-lg-4 col-xl-2"
        v-for="item in projects"
        :key="item.id"
      >
        <ProjGridItem :proj="item" />
      </div>
    </div>
  </div>
  <div
    v-else-if="projects.length === 0 && !updating"
    class="text-center text-secondary mt-4"
  >
    暂无项目
  </div>
</template>
