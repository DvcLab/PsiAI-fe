<script>
import Swal from "sweetalert2";
import Avatar from "@/components/DvcAI/utility/avatar";
/**
 * Image Detail Rightsidebar component
 */

export default {
  components: { Avatar },
  props: {
    image: {
      type: Object,
      default: () => {},
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loadingState: false,
    };
  },
  computed:{
    canEdit() {
      return this.isAdmin
    },
  },
  methods: {

    // 删除镜像
    delImage() {
      this.loadingState = true;
      this.$emit('changeLoading', true);
      let id = this.image.id;
      this.$request
        .delete("images/" + id)
        .then(({data}) => {
          if (data.code === 1) {
            Swal.fire("镜像删除成功!", "", "success").then((res) => {
              if (res.isConfirmed) {
                this.backImagesList();
              }
            });
          } else {
            Swal.fire("镜像删除失败!", "", "error");
          }
          this.loadingState = false;
          this.$emit('changeLoading', false);
        })
        .catch((err) => {
          this.loadingState = false;
          this.$emit('changeLoading', false);
          console.log(err);
        });
    },

    // 删除镜像确认弹窗
    delImageMsg() {
      Swal.fire({
        icon:'question',
        title: '确认删除此镜像?',
        showCancelButton: true,
        confirmButtonText: `确认`,
        cancelButtonText: `取消`
      }).then((result) => {
        if (result.isConfirmed) {
          this.delImage();
        }
      })
    },

    // 返回镜像列表
    backImagesList() {
      this.$router.push({path: '/images'})
    },
  },
};
</script>
<template>
  <div v-if="image" class="card">
    <div class="card-body">
      <div class="media align-items-center">
        <div v-if="image.user" class="align-self-center me-3">
          <Avatar size="xs" :src="image.user.avatar_url" :user-name="image.user.username"/>
        </div>
        <div v-if="image.user" class="media-body">
          <h5 class="font-size-14 mt-0 mb-0">
            {{ image.user.username }}
          </h5>
          <p v-if="image.user && image.user.roles.includes('DOCKHUB_ADMIN')" class="mb-0">
            <span class="badge font-size-11 badge-soft-primary me-2">
              管理员
            </span>
          </p>
        </div>
      </div>
      <hr v-if="image.user" class="mt-2" />
      <p class="mb-1">
        <i class="bx bx-calendar me-1"></i>创建时间
        <span class="text-success">{{ image.create_time | moment("YYYY-MM-DD HH:mm:ss") }}</span>
      </p>
      <p class="mb-1">
        <i class="bx bx-calendar me-1"></i>最近更新
        <span class="text-success">{{ image.update_time | moment("YYYY-MM-DD HH:mm:ss") }}</span>
      </p>
      <div v-if="canEdit" class="mt-4">
        <b-button
          class="text-truncate i-text-middle btn-item me-2 mb-2"
          variant="outline-danger"
          size="md"
          @click="delImageMsg"
        >
          <i class="bx bx-trash font-size-16 align-middle me-1"></i>
          删除
        </b-button>
      </div>
    </div>
  </div>
</template>
