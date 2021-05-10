<script>
export default {
  props: {
    image: {
      type: Object,
      default: () => {},
    },
    match: {
      type: String,
      default: ""
    }
  },
  computed: {
    tags() {
      if (!this.image.tags) return [];
      let tagList = this.image.tags;
      if (tagList.length > 3) {
        let temp = tagList.slice(0, 3);
        // temp.push('...');
        return temp;
      }
      return tagList;
    },
    types() {
      if (!this.image.types) return [];
      let typesList = this.image.types;
      if (typesList.length > 3) {
        let temp = typesList.slice(0, 3);
        return temp;
      }
      return typesList;
    },
  },
};
</script>

<template>
  <div>
    <div class="row align-items-center p-2">
      <div class="col-10 col-md-6">
        <div class="d-inline-flex align-items-center mb-1">
          <h5 class="d-block text-truncate mb-0 list-item-name">
            {{ image.name }}
          </h5>
          <span
            v-if="image && image.id === match"
            class="badge bg-info ms-2"
          >
            推荐
          </span>
        </div>
        <!-- <h5 class="d-block text-truncate mb-0 list-item-name">
          {{ image.name }}
        </h5> -->
        <p class="text-truncate mb-0">{{ image.desc }}</p>
        <p class="text-muted text-truncate mb-0">
          <span v-if="image.tags && image.tags.length > 0">
            <span
              v-for="item in tags"
              class="badge bg-success me-1"
              :key="item"
            >
              {{ item }}
            </span>
          </span>
        </p>
      </div>

      <div class="col-2 col-md-4">
        <span v-if="types.length > 0">
            <span
              v-for="item in image.types"
              class="badge bg-info me-1"
              :key="item"
              :class="{
                'bg-warning': `${image.types[0]}` === 'GPU',
              }"
            >
              {{ item }}
            </span>
          </span>
      </div>

      <!-- <div class="col-md-2 text-end d-none d-md-block">
        <i class="bx bx-calendar me-1"></i>
        <span>{{ image.update_time | moment("from", "now") }} 更新</span>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
h5 {
  color: inherit;
}
</style>