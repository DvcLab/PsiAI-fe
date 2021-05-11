<script>
import Config from './config'
/**
 * Host Card Content component
 */

export default {
  components: { Config },
  props: {
    host: {
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
    <b-tab title="基本信息" active>
      <Config :host="host"/>
    </b-tab>
    <b-tab title="监控">
      暂无
    </b-tab>
    <b-tab title="日志">
      暂无
    </b-tab>
  </b-tabs>
</template>