<script>
import Dockerfile from './container-dockerfile'
/**
 * Container Header component
 */
export default {
  components: { Dockerfile },
  props: {
    container: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      
    };
  },
};
</script>
<template>
  <b-tabs content-class="p-3" nav-class="nav-tabs-custom">
    <b-tab title="dockerfile" active>
      <Dockerfile :file="container.docker_compose_config"/>
    </b-tab>
    <b-tab title="日志">
      暂无
    </b-tab>
    <b-tab title="资源">
      暂无
    </b-tab>
  </b-tabs>
</template>