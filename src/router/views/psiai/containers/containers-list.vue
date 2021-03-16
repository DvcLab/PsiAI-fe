<script>
import Layout from "../../../layouts/main";
import ContainerItem from "@/components/psiai/container-item";
import appConfig from "@/app.config";
import Autocomplete from '@trevoreyre/autocomplete-vue'

/**
 * 容器列表
 */
export default {
  page: {
    title: "容器列表",
    meta: [{ name: "容器列表", content: appConfig.description }]
  },
  components: { Layout, ContainerItem, Autocomplete },
  data() {
    return {
      containers: [],
      isSearch: false
    };
  },
  mounted() {
    this.getContainersList();
  },
  methods: {
    getContainersList() {
      const vm = this;
      this.$request.get('containers')
      .then((res) => {
        vm.containers = res.data;
      })
      .catch((err) => {
        console.err(err)
      })
    },
    // getNewDatasetInfo(url) {
    //   return this.$request.get('datasets_info/' + url)
    //   .then((res) => {
    //     return res.data;
    //   })
    //   .catch((err) => {
    //     console.err(err)
    //   })
    // },
    searchContainer(q) {
      return this.$request.get('containers/' + q)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.err(err)
      })
    },
    // createDataset(q) {
    //   return this.$request.put('datasets', q)
    //   .then((res) => {
    //     return res.data;
    //   })
    //   .catch((err) => {
    //     console.err(err)
    //   })
    // },
    search(input) {
      const vm = this;
      return new Promise(resolve => {
        console.log(encodeURI(input))
        // if (!input || input.length < 1) {
        //   return resolve([])
        // }
        vm.isSearch = true;
        console.log('搜索镜像');
        vm.searchContainer(input).then((res) => {
          if(Array.isArray(res)) {
            this.containers = res;
            resolve(res);
          } else {
            this.containers = [res];
            resolve([res]);
          }
        })
        .catch((err) => {
          console.log(err)
        })
        
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
    // handleAddDataset(res) {
    //   console.log(res)
    //   this.createDataset(res)
    // },
    // isUrl(url) {
    //   return /^https?:\/\/.+/.test(url)
    // }
  }
};
</script>
<template>
  <Layout>
    <div class="row">
      <div class="col-12 p-0 search-con text-center">
        <autocomplete
          aria-label="搜索容器..."
          placeholder="搜索容器..."
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
              <div class="text-start">
                <h6><i class="bx bx-layer me-1"></i>{{ result.name }}</h6>
              </div>
            </li>
          </template>
        </autocomplete>

      </div>
      <div class="col-12">
        <div class="row">
          <!-- <div class="col-12">
            <div class="row align-items-center bg-white head-text">
              <span class="col-md-1 d-none d-md-block">#</span>
              <span class="col-6 col-md-5">镜像名称</span>
              <span class="col-2 col-md-2">类型</span>
              <span class="col-2 col-md-2">标签</span>
              <span class="col-2 col-md-1">用户</span>
              <span class="col-md-1 d-none d-md-block">创建时间</span>
            </div>
          </div> -->
          <ContainerItem v-for="item in containers" :key="item.id" :container="item" class="col-12"/>
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