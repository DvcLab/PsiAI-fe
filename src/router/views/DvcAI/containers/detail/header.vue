<script>
import Swal from "sweetalert2";
import { required, maxLength } from 'vuelidate/lib/validators';
import { EventBus } from "@/utils/event-bus";
/**
 * Container Header component
 */

export default {
  components: {},
  props: {
    container: {
      type: Object,
      default: () => {},
    },
    canEdit: {
      type: Boolean,
      default: false
    },
    // isEdit: {
    //   type: Boolean,
    //   default: false
    // }
  },
  data() {
    return {
      name: this.container.container_name,
      newName: this.container.container_name,
      submitted: false,
      isEdit: false
    }
  },
  validations: {
    newName: {
      required,
      maxLength: maxLength(64)
    }
  },
  mounted(){
    EventBus.$on('cancelEdit', () => this.cancelEdit());
  },
  computed: {
    // 是否可以选择运行位置
    canSelectLocation () {
      return this.container.status === "New";
    },

    // cpu使用
    cpu () {
      let cpu = this.container.cpu_usage;
      let variant = "success"
      if (cpu >= 30 && cpu < 60) {
        variant = "warning";
      } else if (cpu >= 60) {
        variant = "danger";
      }
      return {
        value: cpu,
        variant
      }
    },

    // mem使用
    mem () {
      let mem = this.container.mem_usage;
      let variant = "success"
      if (mem >= 30 && mem < 60) {
        variant = "warning";
      } else if (mem >= 60) {
        variant = "danger";
      }
      return {
        value: mem,
        variant
      }
    },
  },
  methods: {
    // 进入编辑状态
    toEdit() {
      this.isEdit = true;
      // this.$emit('edit')
    },

    // 取消编辑
    cancelEdit () {
      // this.$emit('edit', false);
      this.isEdit = false
    },

    // 发送新名字
    changeName () {
      this.toChangeContainerName()
    },

    // 修改容器名
    toChangeContainerName() {
      this.submitted = true;
      if(this.name === this.newName) {
        // return Swal.fire("容器名未修改!", "请修改后再点击保存按钮", "info")
        return;
      }

      if(!this.$v.$invalid) {
        this.$request.post('containers/'+this.container.id+'/names/'+this.newName)
        .then(({data})=>{
          if(data.code === 1) {
            Swal.fire("容器名修改成功!", "", "success").then((res) => {
              if (res.isConfirmed) {
                
                this.cancelEdit()
                EventBus.$emit("update");
              }
            });
          } else {
            Swal.fire("容器名修改失败!", "", "error");
          }
        })
      } else {
        Swal.fire("容器名有误!", "请重新填写容器名", "error");
      }
    },
  }
};
</script>
<template>
  <div class="row">
    <div class="col-12 mb-2">
      <div class="row align-items-center">

        <div class="col-12 col-md-4 col-lg-3">

          <h4 v-if="!isEdit" class="card-title text-truncate i-text-middle">
            <span class="me-1">
              <i class="bx bx-cube me-1"></i>
              {{ container.container_name }}
            </span>
            <i v-if="canEdit" class="bx bx-edit-alt cursor-pointer me-2" @click="toEdit"></i>
            <span
              v-if="!canSelectLocation"
              class="badge rounded-pill"
              :class="`bg-${container.user_host ? 'primary' : 'info'}`"
            >
              {{ container.user_host ? "本地" : "远程" }}
            </span>
          </h4>

          <b-input v-else type="text" max="64" min="1" size="sm"
          v-model="newName" 
          :placeholder="name" 
          @blur="changeName"/>

        </div>

        <div class="col-12 col-md-4 col-lg-3">
          <span class="d-block text-truncate mb-0">
            <i class="bx bx-layer me-1"></i>镜像
            {{ container.image.name }}
          </span>
        </div>

        <div v-if="container.gpu_enabled" class="col-12 col-md-4 col-lg-3">
          <span class="d-block text-truncate mb-0">
            <i class="bx bx-chip me-1"></i>GPU
            <span class="gpu-state">启用</span>
          </span>
        </div>

      </div>
    </div>

    <div class="col-12 mb-2">
      <div class="row">

        <div class="col-6 col-md-4 col-lg-3">
          <div class="mb-1">
            <span class="me-2"><i class="bx bx-chip me-1"></i>内核</span>
            <span>{{ container.cpus }} ({{ cpu.value }}%)</span>
          </div>
          <b-progress
            :value="cpu.value"
            :max="100"
            :variant="cpu.variant"
          ></b-progress>
        </div>

        <div class="col-6 col-md-4 col-lg-3">
          <div class="mb-1">
            <span class="me-2"><i class="bx bx-chip me-1"></i>内存</span>
            <span>{{ container.mem }}GB ({{ mem.value }}%)</span>
          </div>
          <b-progress
            :value="mem.value"
            :max="100"
            :variant="mem.variant"
          ></b-progress>
        </div>

      </div>

    </div>
  </div>
</template>
<style scoped>
.gpu-state {
  color: #008800;
}
</style>