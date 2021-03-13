<script>
export default {
    props: {
        proj: {
            type: Object,
            default: () => {}
        },
    },
    methods: {
    }
}
</script>

<template>
    <div class="proj-item-con row">
        <div class="col-2">
            <img :src="proj.cover_img_url" alt="项目" class="avatar-sm">
        </div>
        <div class="col-4 d-flex flex-column justify-content-center">
            <h5 class="text-truncate mb-0">
                <a :href="proj.url" class="text-dark proj-name">{{ proj.name }}</a>
            </h5>
            <p class="text-muted mb-0">{{ proj.desc }}</p>
        </div>
    </div>
</template>

<style scoped>
.proj-item-con {
    background-color: #fff;
    padding: 0.75rem;
    margin-top: 0.75rem;
}
.proj-name {
    font-size: 0.9rem;
}
</style>