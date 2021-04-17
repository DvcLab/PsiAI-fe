<script>
export default {
  props: {
    dataset: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    tags() {
      let tagList = this.dataset.tags;
      if (!tagList) return [];
      if (tagList.length > 3) {
        let temp = tagList.slice(0, 3);
        // temp.push("...");
        return temp;
      }
      return tagList;
    },
  }
};
</script>

<template>
  <div>
    <div class="row align-items-center p-2">
      <div class="col-md-1 d-none d-md-block">
        <img
          class="avatar-sm"
          :src="require('@/assets/images/companies/img-1.png')"
          :v-real-img="dataset.cover_img_url"
          alt="数据集"
        />
      </div>

      <div class="col-10 col-md-10">
        <h5 class="text-truncate mb-0 list-item-name">
          {{ dataset.name }}
        </h5>
        <p class="text-truncate mb-0">{{ dataset.desc }}</p>
        <p
          v-if="dataset.tags && dataset.tags.length > 0"
          class="text-truncate mb-0"
        >
          <span v-for="item in tags" class="badge bg-primary me-1" :key="item">
            {{ item }}
          </span>
        </p>
      </div>

      <div class="col-2 col-md-1">
        <img
          v-if="dataset.user"
          class="rounded-circle avatar-xs"
          src="@/assets/images/users/avatar-1.jpg"
          :v-real-img="dataset.user.avatar_url"
          :alt="dataset.user.username"
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