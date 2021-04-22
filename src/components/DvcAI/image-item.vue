<script>
import Avatar from "@/components/DvcAI/avatar";

export default {
  props: {
    image: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    Avatar
  },
  computed: {
    tags() {
      let tagList = this.image.tags;
      if (!tagList) return [];
      if (tagList.length > 3) {
        let temp = tagList.slice(0, 3);
        // temp.push('...');
        return temp;
      }
      return tagList;
    },
  },
};
</script>

<template>
  <div class="list-item-con">
    <div class="row align-items-center">
        
      <div class="col-6 col-md-5">
        <h5 class="d-block text-truncate text-dark mb-0 list-item-name">
          <i class="bx bx-layer me-1"></i>
          {{ image.name }}
        </h5>
        <p class="text-muted text-truncate mb-0">{{ image.desc }}</p>
        <p
          v-if="image.tags && image.tags.length > 0"
          class="text-muted text-truncate mb-0"
        >
          <span v-for="item in tags" class="badge bg-primary me-1" :key="item">
            {{ item }}
          </span>
        </p>
      </div>

      <div class="col-2 col-md-2">
        <span
          v-if="image.types && image.types.length > 0"
          class="badge bg-primary me-2"
          :class="{
            'bg-info': `${image.types[0]}` === 'GPU',
          }"
        >
          {{ image.types[0] }}
        </span>
      </div>

      <div class="col-2 col-md-1">
        <!-- <img
          v-if="image.user"
          class="rounded-circle avatar-xs"
          src="@/assets/images/users/avatar-1.jpg"
          v-real-img="image.user.avatar_url"
          :alt="image.user.username"
        /> -->
        <Avatar size="xs" :src="image.user.avatar_url" :user-name="image.user.username"/>
      </div>

      <div class="col-md-2 text-end d-none d-md-block">
        <i class="bx bx-calendar me-1"></i>
        <span>{{ image.create_time | moment("from", "now") }}</span>
      </div>

      <div class="col-2 col-md-2 text-end">
        <i class="bx bx-calendar me-1"></i>
        <span>{{ image.update_time | moment("from", "now") }}</span>
      </div>

    </div>
  </div>
</template>

<style scoped>
.proj-item-con {
  background-color: #fff;
  padding: 0.75rem;
  margin-top: 0.75rem;
}
</style>