<script>
export default {
    props: {
        proj: {
            type: Object,
            default: () => {}
        },
    },
    computed:{
        branches(){
            if (!this.proj.branches) return [];
            let branchList = this.proj.branches;
            if (branchList.length > 3) {
                return branchList.slice(0,3);
            }
            return branchList;
        },
        datasets() {
            if (!this.proj.datasets) return [];
            let datasetList = this.proj.datasets;
            if (datasetList.length > 2) {
                return datasetList.slice(0,2);
            }
            return datasetList;
        }
    },
    methods: {
    }
}
</script>

<template>
    <div>
        <div class="proj-item-con row align-items-center">

            <div class="col-md-2 d-none d-md-block">
                <img class="avatar-sm" :src="require('@/assets/images/companies/img-1.png')" :v-real-img="proj.cover_img_url" alt="项目" />
            </div>

            <div class="col-10 col-md-8">
                <h5 class="text-truncate mb-0 list-item-name">
                    {{ proj.name }}
                </h5>
                <p class="text-truncate mb-0">
                    {{ proj.desc }}
                </p>
                <p class="text-truncate mb-0">
                    <span v-if="datasets.length > 0">
                        <span
                            class="badge bg-primary me-2"
                            v-for="item in datasets"
                            :key="item"
                        >
                            {{ item }}
                        </span>
                    </span>
                    <span v-else class="badge bg-secondary me-2">无绑定数据集</span>
                    <span
                        class="badge bg-success me-2"
                        v-for="item in branches"
                        :key="item"
                    >
                        {{ item }}
                    </span>
                </p>
            </div>
            <div class="col-2 col-md-2 text-end">
                <img v-if="proj.user" class="rounded-circle avatar-xs" src="@/assets/images/users/avatar-1.jpg" :v-real-img="proj.user.avatar_url" :alt="proj.user.username" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.proj-item-con {
    padding: 0.5rem;
}
h5 {
    color: inherit;
}
</style>