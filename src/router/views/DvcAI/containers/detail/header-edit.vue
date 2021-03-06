<script>
import Swal from "sweetalert2";
import { required, maxLength } from 'vuelidate/lib/validators'
import { EventBus } from "@/utils/event-bus";

/**
 * Container Header Edit component
 */

export default {
  components: {},
  props: {
    container: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      name: this.container.container_name,
      newName: this.container.container_name,
      submitted: false,
    }
  },
  validations: {
    newName: {
      required,
      maxLength: maxLength(64)
    }
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
    
    // 修改容器名
    toChangeContainerName() {
      this.submitted = true;
      if(this.name === this.newName) {
        return Swal.fire("容器名未修改!", "请修改后再点击保存按钮", "info")
      }

      if(!this.$v.$invalid) {
        this.$request.post('containers/'+this.container.id+'/names/'+this.newName)
        .then(({data})=>{
          console.log(data)
          if(data.code === 1) {
            Swal.fire("容器名修改成功!", "", "success").then((res) => {
              if (res.isConfirmed) {
                this.$emit('edit', false);
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

    // 取消编辑
    cancelEdit() {
      this.$emit('edit', false);
    }
  }
};
</script>
<template>
  <div class="row">
    <div class="col-12">

      <b-form inline class="row align-items-center">

        <div class="col-4 col-md-3 align-self-center mb-2">
          <span class="input-title">容器名</span>
        </div>

        <div class="col-8 col-md-4 mb-2">
          <b-input id="container-name" @keyup.enter.native="toChangeContainerName" type="text" max="64" min="1" v-model="newName" :placeholder="name" />
        </div>
        
        <div class="col-12 col-md-5 d-flex align-items-center mb-2">
          <div class="me-auto">
            <span class="error" v-if="submitted && !$v.newName.required">不能为空</span>
            <span class="error" v-if="submitted && !$v.newName.maxLength">不能超过64字符</span>
          </div>
          <div>
            <b-button variant="outline-primary me-2" size="sm" @click="toChangeContainerName">保存</b-button>
            <b-button variant="outline-secondary" size="sm" @click="cancelEdit">取消</b-button>
          </div>
        </div>

      </b-form>

    </div>

    <div class="col-12">
      <div class="row">

        <div class="col-12 col-md-3">
          <span class="d-block text-truncate mb-0">
            <i class="bx bx-layer me-1"></i>镜像
            {{ container.image.name }}
          </span>
        </div>

        <div v-if="container.gpu_enabled" class="col-12 col-md-3">
          <span class="d-block text-truncate mb-0">
            <i class="bx bx-chip me-1"></i>GPU
            <span class="gpu-state">启用</span>
          </span>
        </div>

      </div>
    </div>

    <div class="col-12">
      <div class="row">

        <div class="col-6 col-md-3 mb-2">
          <div class="mb-1">
            <span class="me-2"><i class="bx bx-chip me-1"></i>内核</span>
            <span>{{ container.cpus }} ({{cpu.value}}%)</span>
          </div>
          <b-progress
            :value="cpu.value"
            :max="100"
            :variant="cpu.variant"
          ></b-progress>
        </div>

        <div class="col-6 col-md-3 mb-2">
          <div class="mb-1">
            <span class="me-2"><i class="bx bx-chip me-1"></i>内存</span>
            <span>{{ container.mem }}GB ({{mem.value}}%)</span>
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
.input-title {
  font-weight: 500;
  font-size: 0.85rem;
}
</style>