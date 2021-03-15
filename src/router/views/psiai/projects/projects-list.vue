<script>
import Layout from "../../../layouts/main";
import ProjItem from "@/components/psiai/proj-item";
import appConfig from "@/app.config";
import Autocomplete from '@trevoreyre/autocomplete-vue'

// import '@trevoreyre/autocomplete-vue/dist/style.css'
const wikiUrl = 'https://en.wikipedia.org'
const wikiParams = 'action=query&list=search&format=json&origin=*'

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
    },
    search(input) {
      const vm = this;
      return new Promise(resolve => {
        console.log(encodeURI(input))
        if (input.length < 3) {
          return resolve([])
        }
        if(vm.isUrl(input)) { // 用户输入网址，则添加项目

        } else { // 用户搜索项目
          
        }
        const url = `${wikiUrl}/w/api.php?${wikiParams}&srsearch=${encodeURI(
          input
        )}`

        fetch(url)
          .then(response => response.json())
          .then(data => {
            resolve(data.query.search)
          })
      })
    },
    
    getResultValue(result) {
      console.log(result)
      return result.title
    },
    
    handleSubmit(result) {
      window.open(`${wikiUrl}/wiki/${encodeURI(result.title)}`)
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
      <div class="col-12 p-0 search-con text-center">
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
              class="autocomplete-result wiki-result"
            >
              <div class="wiki-title">
                {{ result.title }}
              </div>
              <div class="wiki-snippet" v-html="result.snippet" />
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