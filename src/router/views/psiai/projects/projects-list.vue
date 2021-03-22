<script>
import Layout from "../../../layouts/main";
import ProjItem from "@/components/psiai/proj-item";
import appConfig from "@/app.config";
import Autocomplete from '@trevoreyre/autocomplete-vue'

// import '@trevoreyre/autocomplete-vue/dist/style.css'
// const wikiUrl = 'https://en.wikipedia.org'
// const wikiParams = 'action=query&list=search&format=json&origin=*'

/**
 * 项目列表
 */
export default {
  page: {
    title: "项目列表",
    meta: [{ name: "项目列表", content: appConfig.description }]
  },
  components: { Layout, ProjItem, Autocomplete },
  data() {
    return {
      projects: [],
      isSearch: false,
      searchContent: ''
    };
  },
  mounted() {
    this.getProjData();
  },
  methods: {
    // 初始化获取项目列表
    getProjData() {
      const _this = this;
      this.$request.get('projects')
      .then((res) => {
        _this.projects = res.data;
      })
      .catch((err) => {
        _this.projects = [];
        console.log(err)
      })
    },
    // 获取新项目信息
    getNewProjInfo(url) {
      return this.$request.get('projects_info/' + url)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err)
      })
    },
    // 搜索项目
    searchProject(q) {
      return this.$request.get('projects/' + q)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err)
        return [];
      })
    },
    // 创建项目
    createProj(q) {
      return this.$request.put('projects', q)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err)
      })
    },
    // 搜索
    search(input) {
      const _this = this;
      if(!input) {
        this.searchContent = '';
      } else {
        this.searchContent = input;
      }
      let content = this.searchContent;
      return new Promise(resolve => {
        if(_this.isUrl(content)) { // 用户输入网址，则添加项目
          _this.isSearch = false;
          console.log('添加项目');
          _this.getNewProjInfo(content).then((res) => {
            if(Array.isArray(res)) {
              resolve(res);
            } else {
              resolve([res]);
            }
          })
          .catch(err => {
            console.log(err)
          })
        } else { // 用户搜索项目
          _this.isSearch = true;
          console.log('搜索项目');
          _this.searchProject(input).then((res) => {
            if(Array.isArray(res)) {
              this.projects = res;
              resolve(res);
            } else {
              this.projects = [res];
              resolve([res]);
            }
          })
          .catch((err) => {
            this.projects = [];
            console.log(err)
          })
        }
      })
    },
    
    getResultValue(result) {
      this.searchContent = result.id ? result.id : '';
      return result ? result.name : '';
    },
    
    handleSubmit(result) {
      if(!result) {
        this.projects = []; 
      } else {
        this.searchContent = result.id ? result.id : '';
        let content = this.searchContent;
        this.searchProject(content).then((res) => {
            if(Array.isArray(res)) {
              this.projects = res;
            } else {
              this.projects = [res];
            }
          })
          .catch((err) => {
            this.projects = [];
            console.log(err)
          })
      }
    },
    handleAddProj(res) {
      console.log(res)
      this.createProj(res)
    },
    isUrl(url) {
      return /^https?:\/\/.+/.test(url)
    }
  }
};
</script>
<template>
  <Layout>
    <div class="row">
      <div class="col-12 p-0 mb-4 text-center">
        <autocomplete
          aria-label="搜索添加项目..."
          placeholder="搜索添加项目..."
          :search="search"
          :get-result-value="getResultValue"
          :debounce-time="500"
          @submit="handleSubmit"
          >
          <template #result="{ result, props }">
            <li
              v-bind="props"
              class="search-result"
            >
              <div v-if="isSearch" class="text-start">
                <h6><i class="bx bx-book-bookmark me-1"></i>{{ result.name }}</h6>
              </div>
              <div v-else class="row align-items-center">
                <div class="col-4 text-sm-start">
                  <h6 class="d-inline-block">
                    <i class="bx bx-package me-1"></i>
                    {{ result.name }}
                  </h6>
                </div>
                <div class="col-8 text-sm-end">
                  <button type="button" class="btn btn-outline-primary btn-sm" @click="handleAddProj(result)">
                    <i class="mdi mdi-plus me-1"></i>
                    添加
                  </button>
                </div>
                <!-- <div class="d-inline-block ">
                  <button type="button" class="btn btn-outline-primary btn-sm">
                    <i class="mdi mdi-plus me-1"></i>
                    添加
                  </button>
                </div> -->
              </div>
            </li>
          </template>
        </autocomplete>
          
        <!-- <div class="search-box me-2 d-inline-block">
          <div class="position-relative">
            <input type="text" class="form-control border-0" placeholder="搜索项目..." />
            <i class="bx bx-search-alt search-icon"></i>
          </div>
        </div> -->

        <!-- <button type="button" class="btn btn-success me-2 d-inline-block">
          <i class="mdi mdi-plus me-1"></i>添加
        </button> -->
      </div>
      <div class="col-12">
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
          <ProjItem v-for="item in projects" :key="item.id" :proj="item" class="col-12"/>
        </div>
      </div>
    </div>
  </Layout>
</template>
