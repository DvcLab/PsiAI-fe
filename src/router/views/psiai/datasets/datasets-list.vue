<script>
import Layout from "../../../layouts/main";
import DatasetItem from "@/components/psiai/dataset-item";
import appConfig from "@/app.config";
import Autocomplete from '@trevoreyre/autocomplete-vue';
import { getScrollHeight, getScrollTop, getWindowHeight } from "@/utils/screen";

/**
 * 数据集列表
 */
export default {
  page: {
    title: "数据集列表",
    meta: [{ name: "数据集列表", content: appConfig.description }]
  },
  components: { Layout, DatasetItem, Autocomplete },
  data() {
    return {
      datasets: [],
      isSearch: false,
      searchContent: '',
      curPage: 1,
      curTotal: 0,
      meta: {}
    };
  },
  mounted() {
    window.addEventListener('scroll', this.load);
    this.getDatasetList('', 1);
  },
  destroyed(){
    window.removeEventListener('scroll', this.load, false);
  },
  methods: {
    // 获取数据集
    getDatasets(q) {
      return this.$request.get('datasets', q)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err)
        return [];
      })
    },
    // 搜索获取数据集列表
    getDatasetList(q, page) {
      const _this = this;
      this.getDatasets({
        params: {
          q: q,
          page: page
        }
      })
      .then((res) => {
        console.log(res)
        if(res.code === 1) {
          _this.datasets.splice(_this.curTotal, 0, ...res.data);
          _this.meta = res._meta;
          _this.curPage = res._meta.page;
          _this.curTotal += res._meta.size;
        }
      })
      .catch((err) => {
        // _this.datasets = [];
        // _this.meta = {};
        console.log(err)
      })
    },

    // 获取新的数据集信息
    getNewDatasetInfo(url) {
      return this.$request.get('datasets_info', {
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
    
    // 创建数据集
    createDataset(q) {
      return this.$request.put('datasets', q)
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
        if(_this.isUrl(content)) { // 用户输入网址，则添加数据集
          _this.isSearch = false;
          console.log('添加数据集');
          _this.getNewDatasetInfo(content).then((res) => {
            if(Array.isArray(res)) {
              resolve(res);
            } else {
              resolve([res]);
            }
          })
          .catch(err => {
            console.log(err)
          })
        } else { // 用户搜索数据集
          console.log('搜索数据集');
          _this.isSearch = true;
          _this.datasets = [];
          _this.curPage = 1;
          _this.curTotal = 0;
          _this.getDatasetList(content, _this.curPage);
        }
      })
    },
    // 选择搜索内容，input显示内容
    getResultValue(result) {
      this.searchContent = result.id ? result.id : '';
      return result ? result.name : '';
    },
    // 选择搜索内容触发事件
    handleSubmit(result) {
      if(!result) {
        this.datasets = []; 
      } else {
        this.searchContent = result.id ? result.id : '';
        let content = this.searchContent;
        this.datasets = [];
        this.curPage = 1;
        this.curTotal = 0;
        this.getDatasetList(content, this.curPage);
        // this.getDatasets(content).then((res) => {
        //     if(Array.isArray(res)) {
        //       this.datasets = res;
        //     } else {
        //       this.datasets = [res];
        //     }
        //   })
        //   .catch((err) => {
        //     this.datasets = [];
        //     console.log(err)
        //   })
      }
    },
    handleAddDataset(res) {
      console.log(res)
      this.createDataset(res)
    },
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
          _this.getDatasetList(_this.searchContent, _this.meta.page);   //拉取接口数据
        } else {
          console.log('全部数据集加载完')
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
          aria-label="搜索添加数据集..."
          placeholder="搜索添加数据集..."
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
                <h6><i class="bx bx-cube me-1"></i>{{ result.name }}</h6>
              </div>
              <div v-else class="row align-items-center">
                <div class="col-4 text-sm-start">
                  <h6 class="d-inline-block">
                    <i class="bx bx-package me-1"></i>
                    {{ result.name }}
                  </h6>
                </div>
                <div class="col-8 text-sm-end">
                  <button type="button" class="btn btn-outline-primary btn-sm" @click="handleAddDataset(result)">
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
              <span class="col-7 col-md-9">数据集名称</span>
              <span class="col-2 col-md-1">用户</span>
              <span class="col-3 col-md-1 text-end">创建时间</span>
            </div>
          </div>
          <DatasetItem v-for="item in datasets" :key="item.id" :dataset="item" class="col-12"/>
        </div>
      </div>
    </div>
  </Layout>
</template>
