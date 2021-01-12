<script>
import { layoutComputed } from '@state/helpers'
import Vertical from '@router/layouts/vertical'
import Horizontal from '@router/layouts/horizontal'

export default {
  components: { Vertical, Horizontal },
  data() {
    return {}
  },
  computed: {
    ...layoutComputed,
  },
  methods: {},
}
</script>

<template>
  <div>
    <Vertical v-if="layoutType === 'vertical'" :layout="layoutType">
      <slot />
    </Vertical>

    <Horizontal v-if="layoutType === 'horizontal'" :layout="layoutType">
      <slot />
    </Horizontal>
  </div>
</template>
