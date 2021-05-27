<script>
import Header from './header';
import Content from './content';

/**
 * host Detail Card component
 */

export default {
  components: { Header, Content },
  props: {
    host: {
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
  <div v-if="host" class="card">
    <div class="card-body">
      <Header :host="host" :canEdit="canEdit"/>
      <Content :host="host"/>
    </div>
  </div>
</template>