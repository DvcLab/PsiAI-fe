<script>
export default {
    props: {
        item: {
            type: Object,
            default: () => {}
        },
    },
    methods: {
        del(key) {
            console.log('点击了关闭按钮')
            this.$emit('del', key);
        }
    }
}
</script>
<template>
    <div class="select-card">
        <slot name="content"></slot>
        <i class="bx bx-x me-1 x" @click="del(item.url)"></i>
    </div>
</template>
