<script>
import ContainerHeader from './container-header'
import ContainerHeaderEdit from './container-header-edit'
import ContainerContent from './container-detail-content'
/**
 * Container Detail component
 */
export default {
  components: { ContainerHeader,ContainerHeaderEdit, ContainerContent },
  props: {
    container: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      isEdit: false,
    };
  },
  methods: {
    changeEditState (state) {
      this.isEdit = state;
    }
  }
  
};
</script>
<template>
  <div v-if="container" class="card">
    <div class="card-body">
      <ContainerHeader v-if="!isEdit" :container="container" @edit="changeEditState"/>
      <ContainerHeaderEdit v-else :container="container" @edit="changeEditState"/>
      <ContainerContent :container="container"/>
    </div>
  </div>
</template>