<script>
import Avatar from "@/components/DvcAI/utility/avatar";

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
  },
  methods: {
    // 跳转镜像详情页
    toImageDetail(e){
      let target = e.target;
      if(target.matches('button') || target.matches('a') || target.matches('text') || target.matches('i')) {
        console.log('不可跳转')
        return;
      }else if(target.matches('.username') || target.matches('.avatar')) {
        console.log('点击跳转用户信息页');
      } else {
        return this.$router.push({ path: '/images/' + this.image.id })
        // console.log('可以跳转详情页')
      }
    },
  }
};
</script>

<template>
  <div class="list-item-con" @click="toImageDetail">
    <div class="row align-items-center">

      <div class="col-md-1 d-none d-md-block">
        <img
          class="img-sm"
          src="@/assets/images/DvcAI/image-default.png"
          v-real-img="image.cover_img_url"
          alt="镜像"
        />
      </div>

      <div class="col-6 col-md-2">
        <h5 class="d-block text-truncate text-dark mb-0 list-item-name">
          <i class="bx bx-layer me-1 d-md-none"></i>
          {{ image.name }}
        </h5>
        <!-- <p class="text-muted text-truncate mb-0">{{ image.desc }}</p> -->
        <p
          class="text-muted text-truncate mb-0"
        >
          <span v-if="types.length > 0">
            <span v-for="item in types" class="badge bg-warning me-1 d-md-none" :key="item">
              {{ item }}
            </span>
          </span>
          <span v-if="tags.length > 0">
            <span v-for="item in tags" class="badge bg-primary me-1" :key="item">
              {{ item }}
            </span>
          </span>
        </p>
      </div>

      <div class="col-md-1 d-none d-md-block">
        <p
          v-if="types.length > 0"
          class="text-muted text-truncate mb-0"
        >
          <span v-for="item in types" class="badge bg-warning me-1" :key="item">{{ item }}</span>
        </p>
      </div>
      
      <div class="col-md-2 d-none d-md-block">
        <p
          v-if="libs.length > 0"
          class="text-muted text-truncate mb-0"
        >
          <span v-for="item in libs" class="badge bg-info me-1" :key="item">{{ item }}</span>
        </p>
      </div>

      <div class="col-6 flex-wrap text-start d-md-none">
        <div v-if="libs.length > 0">
          <span class="badge bg-info me-2">
            {{ libs[0] }}
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
            <b-dropdown-item v-for="item in libs" :key="item">
              {{ item }}
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </div>

      <div class="col-md-2 d-none d-md-inline-flex align-items-center">
        <Avatar v-if="image.user" size="xs" :src="image.user.avatar_url" :user-name="image.user.username" />
        <p v-if="image.user" class="text-truncate ms-2 mb-0 d-none d-md-block"><a class="grid-username" href="javascript:void(0);">{{image.user.username}}</a></p>
      </div>

      <div class="col-md-2 text-end d-none d-md-block">
        <i class="bx bx-calendar me-1"></i>
        <span>{{ image.create_time | moment("from", "now") }}</span>
      </div>

      <div class="col-md-2 text-end d-none d-md-block">
        <i class="bx bx-calendar me-1"></i>
        <span>{{ image.update_time | moment("from", "now") }}</span>
      </div>

    </div>
  </div>
</template>
<style scoped>
.img-sm {
  height: 3rem;
}
</style>