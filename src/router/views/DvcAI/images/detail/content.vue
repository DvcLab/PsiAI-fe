<script>
import Config from "./config";
import Charts from "./charts";
/**
 * Host Card Content component
 */

export default {
  components: { Config, Charts },
  props: {
    image: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
};
</script>
<template>
<div class="custom-tab">

  <b-tabs pills fill content-class="text-muted mt-4">
    <b-tab active class="border-0">
      <template v-slot:title>
        <span class="d-inline-block d-sm-none">
          <i class="bx bx-spreadsheet"></i>
        </span>
        <span class="d-none d-sm-inline-block">基本信息</span>
      </template>
      <Config :image="image"/>
    </b-tab>
    <b-tab>
      <template v-slot:title>
        <span class="d-inline-block d-sm-none">
          <i class="bx bx-stats"></i>
        </span>
        <span class="d-none d-sm-inline-block">监控</span>
      </template>
      <Charts :image="image"/>
    </b-tab>
    <b-tab>
      <template v-slot:title>
        <span class="d-inline-block d-sm-none">
          <i class="bx bx-detail"></i>
        </span>
        <span class="d-none d-sm-inline-block">日志</span>
      </template>
      暂无
    </b-tab>
  </b-tabs>
    
</div>
</template>
