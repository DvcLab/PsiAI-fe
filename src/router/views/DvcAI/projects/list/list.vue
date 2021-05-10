<script>
import ProjItem from '@/components/DvcAI/projects/proj-item';

export default {
    components: {
      ProjItem
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
          <div class="bg-white list-head-text">
            <div class="row align-items-center">
              <!-- <div class="col-md-1 d-none d-md-block">#</div> -->
              <div class="col-4 col-md-4">项目名称</div>
              <div class="col-3 col-md-2">分支</div>
              <div class="col-3 col-md-2">数据集</div>
              <div class="col-2 col-md-2">用户</div>
              <div class="col-md-2 text-end d-none d-md-block">创建时间</div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <ProjItem v-for="item in projects" :key="item.id" :proj="item"/>
        </div>
      </div>
    </div>
    <div v-else-if="projects.length === 0 && !updating" class="text-center text-secondary mt-4">
      暂无项目
    </div>
</template>
