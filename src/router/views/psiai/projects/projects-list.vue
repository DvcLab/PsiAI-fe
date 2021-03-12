<script>
import Layout from "../../../layouts/main";
// import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Starter component
 */
export default {
  page: {
    title: "Starter Page",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout },
  data() {
    return {
      title: "Starter Page",
      items: [
        {
          text: "Utility",
          href: "/"
        },
        {
          text: "Starter Page",
          active: true
        }
      ]
    };
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
        
      </div>
    </div>
  </Layout>
</template>