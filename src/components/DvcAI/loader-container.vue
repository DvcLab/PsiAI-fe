<script>
/**
 * loader-container component
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
