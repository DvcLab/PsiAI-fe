<script>
import 'vue-popperjs/dist/vue-popper.css';

export default {
    props: {
        dataset: {
            type: Object,
            default: () => {}
        },
    },
    computed:{
        branches(){
            let branchList = this.dataset.branches;
            if (!branchList) return [];
            if (branchList.length > 3) {
                return branchList.slice(0,3);
            }
            return branchList;
        }
    },
    methods: {
    }
}
</script>

<template>
    <div>
        <div class="proj-item-con row align-items-center">

            <div class="col-md-1 d-none d-md-block">
                <img class="avatar-sm" :src="dataset.cover_img_url" alt="项目" />
            </div>

            <div class="col-7 col-md-8">
                <h5 class="text-truncate mb-0">
                    <a :href="dataset.url" class="text-dark proj-name">{{ dataset.name }}</a>
                </h5>
                <p class="text-muted mb-0">{{ dataset.desc }}</p>
            </div>

            <div class="col-2 col-md-1">
                <img class="rounded-circle avatar-xs" :src="dataset.user.avatar_url" :alt="dataset.user.username" />
            </div>

            <div class="col-3 col-md-1">
                <i class="bx bx-calendar me-1"></i>
                <span>{{ dataset.update_time | moment("from", "now") }}</span>
            </div>

        </div>
    </div>
</template>

<style scoped>
.proj-item-con {
    background-color: #fff;
    padding: 0.75rem;
    margin-top: 0.75rem;
}
</style>