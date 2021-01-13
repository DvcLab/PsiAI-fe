<script>
/**
 * Paper-item component
 */
export default {
  components: {  },
  props: {

    paper: {
      type: Object,
      default: () => {}
    }

  },
  data() {
    return {
    }
  },
}
</script>

<template>
  <div class="paper-list-item">
    <div class="row">
      <div>
        
      </div>
      <h5>{{ paper.title }}</h5>
      <b-badge class="badge-soft-info ml-2">{{ paper.citations }}</b-badge>
      <div class="col-md-2 ml-md-auto text-md-right d-none d-md-block time-text">
        
      </div>
    </div>
    
    <div>
      <span v-for="author in paper.authors" :key="author">
        <span>{{ author }}</span>
      </span>
      <span>{{ paper.releseTime }}</span>
      <span>{{ paper.publication }}</span>
    </div>

    <div class="overflow-2-text">
      {{ paper.abstract }}
    </div>

  </div>
</template>
<style scoped>
.paper-list-item {
  position: relative;
  border: 1px solid #f6f6f7;
  box-shadow: none;
  border-radius: 0.3rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
}
</style>