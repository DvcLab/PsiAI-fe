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
        datasets(){
            if (!this.proj.datasets) return [];
            let datasetList = this.proj.datasets;
            if (datasetList.length > 3) {
                return datasetList.slice(0,3);
            }
            return datasetList;
        },
    },
}
</script>

<template>
    <div class="grid-item-con">

        <img class="grid-img" src="@/assets/images/companies/img-1.png" v-real-img="proj.cover_img_url" alt="项目"/>
        <div class="grid-body">
            <h5 class="text-truncate mb-0 list-item-name">
                <i class="bx bx-briefcase-alt-2 me-1 d-md-none"></i>
                <a :href="proj.url" class="text-dark">{{ proj.name }}</a>
            </h5>
            <p class="text-muted text-truncate-2 mb-0">{{ proj.desc }}</p>
            <!-- <p class="mb-0">
                <span>{{ proj.user.username }}</span> · 
                <span>{{ proj.update_time | moment("from", "now") }}</span>
            </p> -->
            <p class="mt-1 mb-0">
                <span v-for="item in branches" :key="item">
                    <span class="badge bg-primary me-2">
                        <i class="bx bx-git-branch me-1"></i>
                        {{ item }}
                    </span>
                </span>
                
                <span v-for="item in datasets" :key="item">
                    <span class="badge bg-primary me-2">
                        <i class="bx bx-cube me-1"></i>
                        {{ item }}
                    </span>
                </span>
            </p>
        </div>
        <div class="grid-footer">
            <img v-if="proj.user" class="grid-avatar float-start" src="@/assets/images/users/avatar-1.jpg" v-real-img="proj.user.avatar_url" :alt="proj.user.username" />
            <img v-else class="grid-avatar float-start" src="@/assets/images/users/avatar-1.jpg" alt="无用户信息" />
            <span class="grid-time float-end">{{ proj.update_time | moment("from", "now") }}</span>
        </div>
        <!-- <div class="row align-items-center">

            <div class="col-1 col-md-1 d-none d-md-block">
                <img class="avatar-sm" src="@/assets/images/companies/img-1.png" v-real-img="proj.cover_img_url" alt="项目" />
            </div>

            <div class="col-4 col-md-3">
                <h5 class="text-truncate mb-0 list-item-name">
                    <i class="bx bx-briefcase-alt-2 me-1 d-md-none"></i>
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
                <img v-if="proj.user" class="rounded-circle avatar-xs" src="@/assets/images/users/avatar-1.jpg" v-real-img="proj.user.avatar_url" :alt="proj.user.username" />
            </div>
            <div class="col-2 col-md-2 text-end d-none d-md-block">
                <i class="bx bx-calendar me-1"></i>
                <span>{{ proj.update_time | moment("from", "now") }}</span>
            </div>

        </div> -->
    </div>
</template>
<style scoped>
.grid-item-con {
    border-radius: 16px;
    border: 1px solid rgb(218, 220, 224);
    min-width: 200px;
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    /* height: 320px; */
    display: flex;
    flex-direction: column;
    margin-bottom: 0.75rem;
}
.grid-img {
    width: 100%;
    height: 108px;
    object-fit: cover;
}
.grid-body {
    padding: 16px;
}
.grid-footer {
    border-top: 1px solid rgb(218, 220, 224);
    padding: 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.grid-avatar {
    height: 1.7rem;
    width: 1.7rem;
    border-radius: 50%;
}
.grid-time {
    font-size: 0.8rem;
}
.text-truncate-2 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    -webkit-box-orient: vertical;
}
</style>