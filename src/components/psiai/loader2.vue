<script>
// import axios from "axios";

/**
 * Preloader component
 */
export default {
  data() {
    return {};
  },
  props: {
    loading: Boolean,
  },
};
</script>

<template>
  <!-- <div :class="{ 'is-loading': loading }"> -->
  <div class="is-loading">
    <div class="preloader-component"
      :style="{
        'display': loading ? 'block' : 'none' 
      }"
    >
      <div class="status"
        :style="{
          'display': loading ? 'block' : 'none' 
        }"
      >
        <div class="spinner-chase">
          <div class="chase-dot"></div>
          <div class="chase-dot"></div>
          <div class="chase-dot"></div>
          <div class="chase-dot"></div>
          <div class="chase-dot"></div>
          <div class="chase-dot"></div>
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<style scoped>
.showClass{
  display: block;
}
.hiddenClass{
  display: none;
}
.is-loading {
  position: relative;
}
.preloader-component {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 999;
  width: 100%;
}
.status {
  width: 40px;
  height: 40px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -20px 0 0 -20px;
}
</style>