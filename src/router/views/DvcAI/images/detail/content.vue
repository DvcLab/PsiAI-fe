<script>
import Config from "./config";
/**
 * Image Card Content component
 */

export default {
  components: { Config },
  props: {
    image: {
      type: Object,
      default: () => {},
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
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
      <Config :image="image" :isAdmin="isAdmin"/>
    </b-tab>
    <!-- <b-tab>
      <template v-slot:title>
        <span class="d-inline-block d-sm-none">
          <i class="bx bx-stats"></i>
        </span>
        <span class="d-none d-sm-inline-block">监控</span>
      </template>
    </b-tab> -->
  </b-tabs>
    
</div>
</template>
