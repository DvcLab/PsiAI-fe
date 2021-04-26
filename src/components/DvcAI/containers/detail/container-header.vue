<script>
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
  },
  data() {
    return {
      
    }
  },
  computed: {
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
    mem(){
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
  }
};
</script>
<template>
  <div class="row">
    <div class="col-12">
      <div class="row w-100">

        <div class="col-12 col-md-3">
          <h4 class="card-title mb-3">
            <i class="bx bx-cube me-1"></i>
            {{ container.container_name }}
            <span
              class="badge rounded-pill"
              :class="`bg-${container.user_host ? 'primary' : 'info'}`"
            >
              {{ container.user_host ? "本地" : "远程" }}
            </span>
          </h4>
        </div>

        <div class="col-12 col-md-3">
          <span class="d-block text-truncate mb-0">
            <i class="bx bx-layer me-1"></i>镜像
            {{ container.image.name }}
          </span>
        </div>

        <div class="col-12 col-md-3">
          <span v-if="container.gpu_enabled" class="d-block text-truncate mb-0">
            <i class="bx bx-chip me-1"></i>GPU
            启用
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