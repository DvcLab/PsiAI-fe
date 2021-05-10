<script>
import Item from './item';

export default {
    components: {
        Item
    },
    props: {
        containers: {
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
    <div v-if="containers && containers.length > 0">
      <div class="row">
        <div class="col-12">
          <Item v-for="item in containers" :key="item.id" :container="item"/>
        </div>
      </div>
    </div>
    <div v-else-if="!updating" class="text-center text-secondary mt-4">
      暂无容器
    </div>
</template>
