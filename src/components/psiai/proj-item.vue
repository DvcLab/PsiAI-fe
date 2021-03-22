<script>
// import Popper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';

export default {
    props: {
        proj: {
            type: Object,
            default: () => {}
        },
    },
    computed:{
        branches(){
            let branchList = this.proj.branches;
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

            <div class="col-1 col-md-1 d-none d-md-block">
                <!-- <img class="avatar-sm" :src="proj.cover_img_url" alt="项目" /> -->
                <img class="avatar-sm" :src="require('@/assets/images/companies/img-1.png')" :v-real-img="proj.cover_img_url" alt="项目" />
            </div>

            <div class="col-4 col-md-3">
                <h5 class="text-truncate mb-0 list-item-name">
                    <a :href="proj.url" class="text-dark">{{ proj.name }}</a>
                </h5>
                <p class="text-muted text-truncate mb-0">{{ proj.desc }}</p>
            </div>

            <div class="col-3 col-md-2 flex-wrap">
                <div v-if="proj.branches && proj.branches.length > 0">
                    <i class="bx bx-git-branch me-1"></i>
                    <span class="badge bg-primary me-2">
                        {{ proj.branches[0] }}
                    </span>
                    <b-dropdown
                        class="card-drop"
                        variant="white"
                        menu-class="dropdown-menu-end"
                        right
                        toggle-class="p-0"
                        >
                        <template v-slot:button-content>
                            <i class="mdi mdi-dots-horizontal font-size-18"></i>
                        </template>
                        <b-dropdown-item
                            v-for="item in proj.branches"
                            :key="item"
                            >
                            {{ item }}
                        </b-dropdown-item>
                    </b-dropdown>
                </div>
            </div>

            <div class="col-3 col-md-3">
                <div v-if="proj.datasets && proj.datasets.length > 0">
                    <i class="bx bx-cube me-1"></i>
                    <span class="text-dark">
                        {{ proj.datasets[0].name }}
                    </span>
                    <b-dropdown
                        class="card-drop"
                        variant="white"
                        menu-class="dropdown-menu-end"
                        right
                        toggle-class="p-0"
                        >
                        <template v-slot:button-content>
                            <i class="mdi mdi-dots-horizontal font-size-18"></i>
                        </template>
                        <b-dropdown-item
                            v-for="item in proj.datasets"
                            :key="item.id"
                            :href="item.url"
                            >
                            {{ item.name }}
                        </b-dropdown-item>
                    </b-dropdown>
                </div>
                <span v-else class="badge bg-secondary">暂无</span>
            </div>
            <div class="col-2 col-md-1">
                <!-- <img class="rounded-circle avatar-xs" :src="proj.user.avatar_url" :alt="proj.user.username" /> -->
                <img class="rounded-circle avatar-xs" src="@/assets/images/users/avatar-1.jpg" :v-real-img="proj.cover_img_url" :alt="proj.user.username" />
            </div>
            <div class="col-2 col-md-2 text-end d-none d-md-block">
                <i class="bx bx-calendar me-1"></i>
                <span>{{ proj.update_time | moment("from", "now") }}</span>
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