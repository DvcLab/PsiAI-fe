<script>
import Layout from "../../../layouts/main";
import DatasetItem from "@/components/psiai/dataset-item";
import appConfig from "@/app.config";
import Autocomplete from '@trevoreyre/autocomplete-vue'

// import '@trevoreyre/autocomplete-vue/dist/style.css'
// const wikiUrl = 'https://en.wikipedia.org'
// const wikiParams = 'action=query&list=search&format=json&origin=*'

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
      searchContent: ''
    };
  },
  mounted() {
    this.getDatasetsList();
  },
  methods: {
    // 初始化获取数据集列表
    getDatasetsList() {
      const _this = this;
      this.$request.get('datasets')
      .then((res) => {
        _this.datasets = res.data.data;
      })
      .catch((err) => {
        _this.datasets = [];
        console.log(err)
      })
    },
    // 获取新的数据集信息
    getNewDatasetInfo(url) {
      return this.$request.get('datasets_info/' + url)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err)
      })
    },
    // 搜索数据集
    searchDataset(q) {
      return this.$request.get('datasets/' + q)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err)
        return [];
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
        if(_this.isUrl(content)) { // 用户输入网址，则添加项目
          _this.isSearch = false;
          console.log('添加项目');
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
        } else { // 用户搜索项目
          _this.isSearch = true;
          console.log('搜索项目');
          _this.searchDataset(content).then((res) => {
            if(Array.isArray(res)) {
              this.datasets = res;
              resolve(res);
            } else {
              this.datasets = [res];
              resolve([res]);
            }
          })
          .catch((err) => {
            this.datasets = [];
            console.log(err)
          })
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
        this.searchDataset(content).then((res) => {
            if(Array.isArray(res)) {
              this.datasets = res;
            } else {
              this.datasets = [res];
            }
          })
          .catch((err) => {
            this.datasets = [];
            console.log(err)
          })
      }
    },
    handleAddDataset(res) {
      console.log(res)
      this.createDataset(res)
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
