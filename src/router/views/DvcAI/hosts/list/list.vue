<script>
import Item from './item';

export default {
    components: {
      Item
    },
    props: {
        hosts: {
          type: Array,
          default: function () {
            return [];
          },
        },
        updating: {
          type: Boolean,
        },
    },
}
</script>
<template>
  <div v-if="hosts && hosts.length > 0">
    <div class="row">
      <div class="col-12">
        <Item v-for="item in hosts" :key="item.id" :host="item"/>
      </div>
    </div>
  </div>
  <div v-else-if="!updating" class="text-center text-secondary mt-4">
    暂无主机
  </div>
</template>
