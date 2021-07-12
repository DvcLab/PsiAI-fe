<script>
import Swal from "sweetalert2";
//import { EventBus } from "@/utils/event-bus";
import Avatar from "@/components/DvcAI/utility/avatar";
/**
 * Host Detail Rightsidebar component
 */

export default {
  components: { Avatar },
  props: {
    host: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      loadingState: false,
    };
  },
  computed: {
    status() {
      const status = this.host.status;
      switch (status) {
        case "RUNNING":
          return {
            text: "运行",
            theme: "bg-success",
            textTheme:"text-success",
          };
        case "STOPPED":
          return {
            text: "停止",
            theme: "bg-danger",
            textTheme:"text-danger",
          };
        default:
          return {
            text: "NULL",
            theme: "bg-secondary",
            textTheme:"text-secondary",
          };
      }
    }
  },
  methods: {
    // 删除主机
    delHost() {
      this.loadingState = true;
      this.$emit('changeLoading', true);
      let id = this.host.id;
      this.$request
        .delete("hosts/" + id)
        .then(({data}) => {
          console.log(data)
          if (data.code === 1) {
            Swal.fire("主机删除成功!", "", "success").then((res) => {
              if (res.isConfirmed) {
                //EventBus.$emit("update");
                this.$router.push({path: '/hosts'})
              }
            });
          } else {
            Swal.fire("主机删除失败!", "", "error");
          }
          this.loadingState = false;
          this.$emit('changeLoading', false);
        })
        .catch((err) => {
          this.loadingState = false;
          this.$emit('changeLoading', false);
          console.err(err);
        });
    },
    // 删除主机确认弹窗
    delHostMsg() {
      Swal.fire({
        icon:'question',
        title: '确认删除此主机?',
        showCancelButton: true,
        confirmButtonText: `确认`,
        cancelButtonText: `取消`
      }).then((result) => {
        if (result.isConfirmed) {
          this.delHost();
        }
      })
    },
  },
};
</script>
<template>
  <div v-if="host" class="card">
    <div class="card-body">
      <div class="media align-items-center">
        <div class="align-self-center me-3">
          <Avatar size="xs" :src="host.user.avatar_url" :user-name="host.user.username"/>
        </div>
        <div class="media-body">
          <h5 class="font-size-14 mt-0 mb-0">
            {{ host.user.username }}
          </h5>
          <p v-if="host.user && host.user.roles.includes('DOCKHUB_ADMIN')" class="mb-0">
            <span class="badge font-size-11 badge-soft-primary me-2">
              管理员
            </span>
          </p>
        </div>
      </div>
      <hr class="mt-2" />
      <p class="mb-1">
        <i class="bx bx-stats me-1"></i>运行状态
        <span class="badge me-2" :class="status.theme">
          {{ status.text }}
        </span>
      </p>
      <p class="mb-1">
        <i class="bx bx-calendar me-1"></i>创建时间
        <span :class="status.textTheme">{{ host.create_time | moment("YYYY-MM-DD HH:mm:ss") }}</span>
      </p>
      <p v-show="this.host.status === 'RUNNING'" class="mb-1">
        <i class="bx bx-calendar me-1"></i>更新时间
        <span class="text-success">{{ host.update_time | moment("YYYY-MM-DD HH:mm:ss") }}</span>
      </p>
      <div class="mt-4">
        <b-button
          class="text-truncate i-text-middle btn-item me-2 mb-2"
          variant="outline-danger"
          size="md"
          @click="delHostMsg"
        >
          <i class="bx bx-trash font-size-16 align-middle me-1"></i>
          删除
        </b-button>
      </div>
    </div>
  </div>
</template>
