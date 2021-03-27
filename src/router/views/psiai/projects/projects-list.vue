<script>
import Layout from "../../../layouts/main";
import ProjItem from "@/components/psiai/proj-item";
import appConfig from "@/app.config";
import Autocomplete from '@trevoreyre/autocomplete-vue';
import { getScrollHeight, getScrollTop, getWindowHeight } from "@/utils/screen";

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
      searchContent: '',
      curPage: 1,
      curTotal: 0,
      meta: {}
    };
  },
  mounted() {
    window.addEventListener('scroll', this.load);
    this.getProjList('', 1);
  },
  destroyed(){
    window.removeEventListener('scroll', this.load, false);
  },
  methods: {
    // 获取项目
    getProjects(q) {
      return this.$request.get('projects', q)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err)
        return [];
      })
    },
    // 搜索获取项目列表
    getProjList(q, page) {
      const _this = this;
      this.getProjects({
        params: {
          q: q,
          page: page
        }
      })
      .then((res) => {
        console.log(res)
        if(res.code === 1) {
          _this.projects.splice(_this.curTotal, 0, ...res.data);
          _this.meta = res._meta;
          _this.curPage = res._meta.page;
          _this.curTotal += res._meta.size;
        }
      })
      .catch((err) => {
        // _this.projects = [];
        // _this.meta = {};
        console.log(err)
      })
    },
    // 获取新项目信息
    getNewProjInfo(url) {
      return this.$request.get('projects_info',{
        params: {
          url: url
        }
      })
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .catch((err) => {
        console.log(err)
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
            if(res.code === 1) {
              // 查询成功
            } else if (res.code === 0) {
              // 查询失败
            }
            resolve(res);
            // if(Array.isArray(res)) {
            //   resolve(res);
            // } else {
            //   resolve([res]);
            // }
          })
          .catch(err => {
            console.log(err)
          })
        } else { // 用户搜索项目
          console.log('搜索项目');
          _this.isSearch = true;
          _this.projects = [];
          _this.curPage = 1;
          _this.curTotal = 0;
          _this.getProjList(input, _this.curPage);
          resolve(_this.projects)
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
        this.projects = [];
        this.curPage = 1;
        this.curTotal = 0;
        this.getProjList(content, this.curPage);
      }
    },
    // 添加新项目按钮
    handleAddProj(res) {
      console.log(res)
      this.createProj(res)
    },
    // 判断正则判断是否是url
    isUrl(url) {
      return /^https?:\/\/.+/.test(url)
    },
    // 滑动至底部，加载剩余项目
    load() {
      const _this = this;
      if(getScrollTop() + getWindowHeight() >= getScrollHeight()){
        let totalPage = _this.meta.total_page;
        let page = _this.curPage;
        if(page < totalPage) {                                       //先判断下一页是否有数据  
          _this.curPage++;                                           //查询条件的页码+1
          _this.getProjList(_this.searchContent, _this.meta.page);   //拉取接口数据
        } else {
          console.log('全部项目加载完')
        }
      }
    },
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
