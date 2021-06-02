<script>
import Config from "./config";
import Data from "./data";
/**
 * Dataset Card Content component
 */

export default {
  components: { Config, Data },
  props: {
    dataset: {
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
      <Config :dataset="dataset" :isAdmin="isAdmin"/>
    </b-tab>
    <b-tab class="border-0">
      <template v-slot:title>
        <span class="d-inline-block d-sm-none">
          <i class="bx bx-spreadsheet"></i>
        </span>
        <span class="d-none d-sm-inline-block">数据</span>
      </template>
      <Data :dataset="dataset" :isAdmin="isAdmin"/>
    </b-tab>
  </b-tabs>
  
</div>
</template>
