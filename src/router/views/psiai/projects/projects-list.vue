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
      isSearch: false
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
    },
    getNewProjInfo(url) {
      return this.$request.get('projects_info/' + url)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.err(err)
      })
    },
    searchProjData(q) {
      return this.$request.get('projects/' + q)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.err(err)
      })
    },
    createProj(q) {
      return this.$request.put('projects', q)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.err(err)
      })
    },
    search(input) {
      const vm = this;
      return new Promise(resolve => {
        console.log(encodeURI(input))
        // if (!input || input.length < 1) {
        //   return resolve([])
        // }
        if(vm.isUrl(input)) { // 用户输入网址，则添加项目
          vm.isSearch = false;
          console.log('添加项目');
          vm.getNewProjInfo(input).then((res) => {
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
          vm.isSearch = true;
          console.log('搜索项目');
          vm.searchProjData(input).then((res) => {
            if(Array.isArray(res)) {
              this.projects = res;
              resolve(res);
            } else {
              this.projects = [res];
              resolve([res]);
            }
          })
          .catch((err) => {
            console.log(err)
          })
        }
        // const url = `${wikiUrl}/w/api.php?${wikiParams}&srsearch=${encodeURI(
        //   input
        // )}`

        // fetch(url)
        //   .then(response => response.json())
        //   .then(data => {
        //     resolve(data.query.search)
        //   })
      })
    },
    
    getResultValue(result) {
      console.log(result)
      return result.name
    },
    
    handleSubmit(result) {
      console.log(result)
      // window.open(`${wikiUrl}/wiki/${encodeURI(result.title)}`)
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
