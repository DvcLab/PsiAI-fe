<script>
import 'vue-popperjs/dist/vue-popper.css';

export default {
    props: {
        container: {
            type: Object,
            default: () => {}
        },
    },
    computed:{
        // branches(){
        //     let branchList = this.dataset.branches;
        //     if (!branchList) return [];
        //     if (branchList.length > 3) {
        //         return branchList.slice(0,3);
        //     }
        //     return branchList;
        // }
    },
    methods: {
        // 打开JupyterLab页面
        openLab(href) {
            window.open(href, "_blank")
        }
    }
}
</script>

<template>
    <div class="proj-item-con">
        <div class="row align-items-center mb-2">
            <div class="col-md-12">
                <span>{{ container.id }}</span>
                <span>{{ container.user.username }}</span>
                <div class="float-end">
                    <span class="badge bg-primary me-2">
                        {{ container.status }}
                    </span>
                    <span class="text-success">{{ container.update_time | moment('YYYY-MM-DD HH:mm:ss') }}</span>
                </div>
            </div>
        </div>
        <div class="row mb-2">
            <div class="col-6 col-md-2">
                <span class="badge rounded-pill bg-primary me-2">
                    {{ container.gpu_devices_product_names[0] }}
                </span>
            </div>
            <div class="col-6 col-md-2">
                <span class="badge rounded-pill bg-primary me-2">
                    <i class="bx bx-chip me-1"></i>内核
                </span> {{ container.cpus }}
            </div>
            <div class="col-6 col-md-2">
                <span class="badge rounded-pill bg-primary me-2">
                    <i class="bx bx-grid-alt me-1"></i>内存
                </span> {{ container.mem }}GB
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-4">
                <p class="mb-0">CPU使用</p>
                <b-progress :value="container.cpu_usage" :max="100" variant="success"></b-progress>
            </div>
            <div class="col-12 col-md-4">
                <p class="mb-0">内存使用</p>
                <b-progress :value="container.mem_usage" :max="100" variant="success"></b-progress>
            </div>
            <div class="col-12 col-md-4">
                <div class="float-end">
                    <button type="button" class="btn btn-outline-success btn-sm me-2" @click="openLab(container.jupyter_url)">docker-compose.yml</button>
                    <button type="button" class="btn btn-outline-primary btn-sm" @click="openLab(container.jupyter_url)">JupyterLAB</button>
                </div>
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