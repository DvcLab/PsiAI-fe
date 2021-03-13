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
      <div class="col-12">

        <div class="search-box me-2 d-inline-block">
          <div class="position-relative">
            <input type="text" class="form-control" placeholder="搜索项目..." />
            <i class="bx bx-search-alt search-icon"></i>
          </div>
        </div>

        <button type="button" class="btn btn-success btn-rounded me-2 d-inline-block">
          <i class="mdi mdi-plus me-1"></i>添加
        </button>

      </div>
      <div class="col-12">
        <!-- <div class="row"> -->
          <ProjItem v-for="item in projects" :key="item.uid" :proj="item" />
        <!-- </div> -->
      </div>
    </div>
  </Layout>
</template>