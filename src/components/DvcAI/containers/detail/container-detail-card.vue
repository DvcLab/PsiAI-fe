<script>
import ContainerHeader from './container-header'
import ContainerContent from './container-detail-content'
/**
 * Container Detail component
 */
export default {
  components: { ContainerHeader, ContainerContent },
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
  <div v-if="container" class="card">
    <div class="card-body">
      <ContainerHeader :container="container"/>
      <ContainerContent :container="container"/>
    </div>
  </div>
</template>