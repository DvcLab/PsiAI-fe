<script>
import Layout from "../../../layouts/main";
import ProjItem from "@/components/psiai/proj-item";
import appConfig from "@/app.config";

/**
 * Starter component
 */
export default {
  page: {
    title: "Starter Page",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, ProjItem },
  data() {
    return {
      projects: []
    };
  },
  mounted() {
    this.getProjData();
  },
  methods: {
    getProjData() {
      const vm = this;
      this.$request.get('projects')
      .then((res) => {
        vm.projects = res.data;
      })
      .catch((err) => {
        console.err(err)
      })
    }
  }
};
</script>
<template>
  <Layout>
    <div class="row">
      <div class="col-12 p-0 search-con">
        <div class="search-box me-2 d-inline-block">
          <div class="position-relative">
            <input type="text" class="form-control" placeholder="搜索项目..." />
            <i class="bx bx-search-alt search-icon"></i>
          </div>
        </div>

        <!-- <button type="button" class="btn btn-success me-2 d-inline-block">
          <i class="mdi mdi-plus me-1"></i>添加
        </button> -->
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-12">
            <div class="row align-items-center bg-white head-text">
              <span class="col-1 d-none d-md-block">#</span>
              <span class="col-3">项目名称</span>
              <span class="col-2">分支</span>
              <span class="col-3">数据集</span>
              <span class="col-1">用户</span>
              <span class="col-2">创建时间</span>
            </div>
          </div>
          <ProjItem v-for="item in projects" :key="item.id" :proj="item" class="col-12"/>
        </div>
      </div>
    </div>
  </Layout>
</template>
<style scoped>
.search-con {
  margin-bottom: 24px;
}
.head-text {
  font-weight: 600;
  padding: 0.75rem;
}
</style>