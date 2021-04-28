<script>
import Header from './header';
import HeaderEdit from './header-edit';
import Content from './content';

/**
 * Container Detail Card component
 */

export default {
  components: { Header,HeaderEdit, Content },
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
      <Header v-if="!isEdit" :container="container" @edit="changeEditState"/>
      <HeaderEdit v-else :container="container" @edit="changeEditState"/>
      <Content :container="container"/>
    </div>
  </div>
</template>