<script>
import Layout from "@/router/layouts/main";
import List from "./list";
import Grid from "./grid";
import Loader from "@/components/DvcAI/loader";
import appConfig from "@/app.config";
import Autocomplete from '@trevoreyre/autocomplete-vue';
import Swal from "sweetalert2";
import { getScrollHeight, getScrollTop, getWindowHeight } from "@/utils/screen";

/**
 * 项目列表
 */
export default {
  page: {
    title: "项目列表",
    meta: [{ name: "项目列表", content: appConfig.description }]
  },

  components: {
    Layout,
    Loader,
    Autocomplete,
    List,
    Grid
  },

  data() {
    return {
      projects: [],
      isSearch: false,
      searchContent: '',
      curPage: 1,
      curTotal: 0,
      meta: {},
      loadingState: true,
      isGrid: true
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
      this.loadingState = true;
      this.getProjects({
        params: {
          q: q,
          page: page
        }
      })
      .then((res) => {
        if(res.code === 1) {
          this.projects.splice(this.curTotal, 0, ...res.data);
          this.meta = res._meta;
          this.curPage = res._meta.page;
          this.curTotal += res._meta.size;
        }
        this.loadingState = false;
      })
      .catch((err) => {
        console.log(err);
        this.loadingState = false;
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
        return res.data;
      })
      .catch((err) => {
        console.log(err);
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
      if(!input) {
        this.searchContent = '';
      } else {
        this.searchContent = input;
      }
      let content = this.searchContent;

      return new Promise(resolve => {
        if(this.isUrl(content)) { // 用户输入网址，则添加项目
          this.getNewProjInfo(content).then((res) => {
            this.isSearch = false;
            if(res.code === 1) {
              // 查询成功
              return resolve([res.data]);
            } else if (res.code === 0) {
              // 查询失败
              return resolve([]);
            }
            
          })
          .catch(err => {
            console.log(err)
            this.loadingState = false;
            return resolve([])
          })
        } else { // 用户搜索项目
          this.loadingState = true;
          this.isSearch = true;
          this.getProjects({
            params: {
              q: input,
              page: 1
            }
          })
          .then((res) => {
            console.log(res)
            if(res.code === 1) {
              this.projects = res.data;
              this.meta = res._meta;
              this.curPage = res._meta.page;
              this.curTotal = this.projects.length;
              this.loadingState = false;
              return resolve(res.data)
            } else {
              this.loadingState = false;
              return resolve([])
            }
          })
          .catch((err) => {
            console.log(err);
            this.loadingState = false;
            return resolve([]);
          })
        }
      })
    },

    // 选择搜索内容，input显示内容
    getResultValue(result) {
      if(this.isSearch) {
        return result ? result.name : ''
      } else {
        return ''
      }
    },

    // 选择搜索内容触发事件
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

    // 添加新项目按钮触发函数
    handleAddProj(res) {
      console.log(res)
      this.loadingState = true;
      this.createProj(res)
      .then((res)=> {
        console.log(res)
        if(res.code === 1) {
          this.successMsg();
        } else {
          this.errorMsg();
        }
      })
      .catch((err) => {
        console.log(err)
        this.errorMsg();
      })
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

    // 改为List布局
    toListLayout() {
      this.isGrid = false;
    },

    // 改为Grid布局
    toGridLayout() {
      this.isGrid = true;
    },

    // 判断正则判断是否是url
    isUrl(url) {
      return /^https?:\/\/.+/.test(url)
    },

    // 项目添加成功提醒
    successMsg() {
      Swal.fire(
        "项目添加成功!",
        "",
        "success"
      ).then((res) => {
        if(res.isConfirmed) {
          this.loadingState = false;
        }
      })
    },

    // 项目创建失败提醒
    errorMsg() {
      Swal.fire(
        "项目添加失败!",
        "",
        "error"
      ).then((res) => {
        if(res.isConfirmed) {
          this.loadingState = false;
        }
      })
    },
  }
};
</script>
<template>
  <Layout>
    <div class="row">

      <div class="col-8 col-sm-9 col-md-10 mb-4 text-center">
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
                <h6 class="i-text-middle"><i class="bx bx-briefcase-alt-2 me-1"></i>{{ result.name }}</h6>
              </div>
              <div v-else class="row align-items-center">
                <div class="col-4 text-sm-start">
                  <h6 class="d-inline-block">
                    <i class="bx bx-briefcase-alt-2 me-1"></i>
                    {{ result.name }}
                  </h6>
                </div>
                <div class="col-8 text-sm-end">
                  <button type="button" class="btn btn-outline-primary btn-sm" @click="handleAddProj(result)">
                    <i class="mdi mdi-plus me-1"></i>
                    添加
                  </button>
                </div>
              </div>
            </li>
          </template>
        </autocomplete>
      </div>

      <div class="col-4 col-sm-3 col-md-2 mb-4 text-center">
        <ul class="nav nav-pills product-view-nav float-end">
          <li class="nav-item">
            <a
              class="nav-link"
              href="javascript: void(0);"
              :class="{ 'active': !isGrid }"
              @click="toListLayout"
              >
              <i class="bx bx-list-ul nav-i-mt"></i>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="javascript: void(0);"
              :class="{ 'active': isGrid }"
              @click="toGridLayout">
              <i class="bx bx-grid-alt nav-i-mt"></i>
            </a>
          </li>
        </ul>
      </div>

      <Grid v-if="isGrid" class="col-12" :projects="projects" :updating="loadingState"/>
      <List v-else class="col-12" :projects="projects" :updating="loadingState"/>

      <div class="col-12 mt-4">
        <Loader :loading="loadingState"/>
      </div>

    </div>
  </Layout>
</template>
