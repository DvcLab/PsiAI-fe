<script>
/**
 * Dataset Header component
 */

export default {
  components: {},
  props: {
    dataset: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
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
  }

};
</script>
<template>
  <div v-if="dataset" class="card mb-4">
    <div class="card-body">
      <div class="col-12 mb-2">
        <h4>
          {{ dataset.name }}
        </h4>
      </div>
      <div class="col-12 mb-2">
        <span v-if="tags.length > 0">
            <span v-for="item in tags" class="badge bg-primary me-1" :key="item">
              {{ item }}
            </span>
          </span>
      </div>
    </div>
  </div>
</template>
