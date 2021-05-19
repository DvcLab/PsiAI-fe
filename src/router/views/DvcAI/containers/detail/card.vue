<script>
import Header from './header';
// import HeaderEdit from './header-edit';
import Content from './content';

/**
 * Container Detail Card component
 */

export default {
  components: { Header, Content },
  props: {
    container: {
      type: Object,
      default: () => {},
    },
    canEdit: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {};
  },
};
</script>
<template>
  <div v-if="container">
    <Header :container="container" :canEdit="canEdit"/>
    <Content :container="container"/>
  </div>
  <!--
  <div v-if="container" class="card">
    <div class="card-body">
      <Header :container="container" :canEdit="canEdit"/>
      <Content :container="container"/>
    </div>
  </div>
  -->
</template>