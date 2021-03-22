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
      searchContent: ''
    };
  },
  mounted() {
    this.getContainersList();
  },
  methods: {
    // 初始化获取容器列表
    getContainersList() {
      const _this = this;
      this.$request.get('containers')
      .then((res) => {
        _this.containers = res.data;
      })
      .catch((err) => {
        _this.containers = [];
        console.log(err)
      })
    },
    // 搜索镜像
    searchContainer(q) {
      return this.$request.get('containers/' + q)
      .then((res) => {
        console.log(res)
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        return [];
      })
    },
    // autocomplete 搜索函数
    search(input) {
      const _this = this;
      if(!input) {
        this.searchContent = '';
      } else {
        this.searchContent = input;
      }
      let content = this.searchContent;
      return new Promise((resolve, reject) => {
        console.log('搜索容器');
        _this.searchContainer(content).then((res) => {
          if(Array.isArray(res)) {
            this.containers = res;
            resolve(res);
          } else {
            this.containers = [res];
            resolve([res]);
          }
        })
        .catch((err) => {
          this.containers = [];
          reject([])
          console.log(err)
        })
      })
    },
    // 选择搜索内容，input显示内容
    getResultValue(result) {
      console.log(result)
      this.searchContent = result ? result.id : '';
      return result ? result.id : ''
    },
    // 选择搜索内容触发事件
    handleSubmit(result) {
      if(!result) {
        this.containers = [];
      } else {
        this.searchContent = result.id ? result.id : '';
        let content = this.searchContent;
        this.searchContainer(content).then((res) => {
            if(Array.isArray(res)) {
              this.containers = res;
            } else {
              this.containers = [res];
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    // 跳转创建容器页面
    toCreateContainerPage() {
      this.$router.push({path: '/createContainers'})
    }
  }
};
</script>
<template>
  <Layout>
    <div class="row align-items-center">
      <div class="col-6 p-0 mb-3">
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
                <h6><i class="bx bx-code-block me-1"></i>{{ result.id }}</h6>
              </div>
            </li>
          </template>
        </autocomplete>
      </div>
      <div class="col-6 align-self-center mb-3">
        <button
          type="button"
          class="btn btn-success btn-rounded float-end"
          @click="toCreateContainerPage"
        >
          <i class="mdi mdi-plus me-1"></i> 创建容器
        </button>
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
          <div v-if="containers.length > 0">
            <ContainerItem v-for="item in containers" :key="item.id" :container="item" class="col-12"/>
          </div>
          
        </div>
      </div>
    </div>
  </Layout>
</template>
