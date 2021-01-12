<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: 'Some text value...'
    }
  }
}
</script>

<template>
  <div class="search">
    <i class="uil uil-search search-icon"></i>
    <b-form-input
      class="mb-2 search-input"
      :placeholder="placeholder"
    ></b-form-input>
  </div>
</template>
