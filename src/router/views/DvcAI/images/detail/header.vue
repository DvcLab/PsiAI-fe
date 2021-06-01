<script>
/**
 * Image Header component
 */

export default {
  components: {},
  props: {
    image: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      cpuClass:{
        "CPU": "bg-warning",
        "GPU": "bg-success"
      },
    };
  },
  computed: {
    types() {
      if (!this.image.types) return [];
      let typeList = this.image.types;
      if (typeList.length > 3) {
        let temp = typeList.slice(0, 3);
        // temp.push('...');
        return temp;
      }
      return typeList;
    },
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
    libs() {
      if (!this.image.libs) return [];
      let libs = this.image.libs;
      let libsList = [];
      for(let i in libs) {
        libsList.push(i+' '+libs[i]);
      }
      return libsList;
    },
  }

};
</script>
<template>
  <div v-if="image" class="card mb-4">
    <div class="card-body">
      <div class="col-12 mb-2">
        <h4>
          {{ image.name }}
        </h4>
      </div>
      <div class="col-12 mb-2">
        <span v-if="tags.length > 0">
            <span v-for="item in tags" class="badge bg-primary me-1" :key="item">
              {{ item }}
            </span>
          </span>
        <span v-if="types.length > 0">
          <span v-for="item in types" class= "badge me-1" :class="cpuClass[item]" :key="item">
            <i class="bx bx-chip"></i>
            {{ item }}
          </span>
        </span>
        <span v-if="libs.length > 0">
          <span v-for="item in libs" class="badge bg-info me-1" :key="item">{{ item }}</span>
        </span>
      </div>
    </div>
  </div>
</template>
