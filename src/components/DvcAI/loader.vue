<script>
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
  <div v-if="loading" class="is-loading">
    <div class="preloader-component">
      <div class="status">
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
