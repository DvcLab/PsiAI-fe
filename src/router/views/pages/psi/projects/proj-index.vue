<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import ProjCard from '@components/psi/proj-card'

import { projects, boardList } from './data'

/**
 * Projects Index
 */
export default {
  page: {
    title: 'Projects',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, ProjCard },
  data() {
    return {
      projects: projects,
      boardList: boardList,
      placeholder: '搜索项目...'
    }
  },
}
</script>

<template>
  <Layout>
    <div class="row mt-4">
      <div class="col-12">
        <div class="card mb-4">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-xl-2 col-lg-3 col-md-6 col-12">
                <img
                  src="@assets/images/cal.png"
                  class="mr-4 align-self-center img-fluid"
                  alt="cal"
                />
              </div>
              <div class="col-xl-10 col-lg-9 col-md-6 col-12">
                <div class="mt-4 mt-lg-0">
                  <h3 class="mt-0 mb-1 font-weight-bold">项目</h3>
                  <p class="text-muted mb-2">
                    项目集成Git版本管理，用户可一键式部署在线开发环境，快速运行项目。<a href="">了解更多</a>
                  </p>
                  <button
                    id="btn-new-event"
                    class="btn btn-primary mt-2"
                  >
                    <i class="uil-plus-circle"></i>
                    创建项目
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-9 col-lg-12">
        <div class="search mb-4">
          <i class="uil uil-search search-icon"></i>
          <b-form-input
            class="mb-2 search-input"
            :placeholder="placeholder"
          ></b-form-input>
        </div>
        <div class="row">
          <ProjCard v-for="proj in projects" :key="proj.id" :project="proj"/>
        </div>
      </div>
      <div class="col-xl-3 col-lg-12">
        <div class="card">
          <div class="card-body pt-2 pb-2">
            <h5 class="mb-4 header-title">每周热门精选项目</h5>
            <p v-for="(proj, index) in boardList" :key="proj.key" class="boardList-text">
              <span :class="{ 'boardList-red-text': index < 3 }">{{ index + 1 }}</span>
              <span class="ml-2">{{ proj.projName }}</span>
              <span class="font-weight-bold font-size-13 text-danger">
                <i v-if="proj.originRank > index + 1" class="uil uil uil-arrow-up"></i>
                <i v-else class="uil uil uil-arrow-down text-success"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<style scoped>
.boardList-text {
  font-size: 1rem;
}
.boardList-red-text {
  color: #ff57c5;
}
</style>