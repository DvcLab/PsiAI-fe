<script>
import ProjItem from './proj-item';
// import Loader from "@/components/psiai/loader";

export default {
    components: {
        ProjItem,
        // Loader
    },
    props: {
        projects: {
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
    <div v-if="projects && projects.length > 0">
        <div class="row">
          <div class="col-12">
            <div class="row align-items-center bg-white list-head-text">
              <span class="col-md-1 d-none d-md-block">#</span>
              <span class="col-4 col-md-3">项目名称</span>
              <span class="col-3 col-md-2">分支</span>
              <span class="col-3 col-md-3">数据集</span>
              <span class="col-2 col-md-1">用户</span>
              <span class="col-md-2 text-end d-none d-md-block">创建时间</span>
            </div>
          </div>
        </div>
        <div class="row">
          <ProjItem v-for="item in projects" :key="item.id" :proj="item" class="col-12"/>
        </div>
    </div>
</template>
