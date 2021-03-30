<script>
import Layout from "../../../layouts/main";
import ContainerItem from "@/components/psiai/container-item";
import appConfig from "@/app.config";
import Autocomplete from '@trevoreyre/autocomplete-vue';
import { getScrollHeight, getScrollTop, getWindowHeight } from "@/utils/screen";

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
      searchContent: '',
      curPage: 1,
      curTotal: 0,
      meta: {}
    };
  },
  mounted() {
    window.addEventListener('scroll', this.load);
    this.getContainersList('', 1);
  },
  destroyed(){
    window.removeEventListener('scroll', this.load, false);
  },
  methods: {
    getContainers(q) {
      return this.$request.get('containers', q)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err)
        return [];
      })
    },
    // 初始化获取容器列表
    getContainersList(q, page) {
      const _this = this;
      this.getContainers({
        params: {
          q: q,
          page: page
        }
      })
      .then((res) => {
        if(res.code === 1) {
          _this.containers.splice(_this.curTotal, 0, ...res.data);
          _this.meta = res._meta;
          _this.curPage = res._meta.page;
          _this.curTotal += res._meta.size;
        }
      })
      .catch((err) => {
        _this.containers = [];
        console.log(err)
      })
    },
    // 搜索镜像
    getContainerById(id) {
      return this.$request.get('containers/' + id)
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
      return new Promise((resolve) => {
        this.getContainers({
          params: {
            q: input,
            page: 1
          }
        })
        .then((res) => {
          if(res.code === 1) {
            this.containers = res.data;
            this.meta = res._meta;
            this.curPage = res._meta.page;
            this.curTotal = this.containers.length;
            return resolve(res.data)
          } else {
            return resolve([])
          }
        })
        .catch((err) => {
          console.log(err)
          return resolve([])
        })
      })
    },
    // 选择搜索内容，input显示内容
    getResultValue(result) {
      return result.name;
      // console.log(result)
      // this.searchContent = result ? result.id : '';
      // return result ? result.id : ''
    },
    // 选择搜索内容触发事件
    handleSubmit(result) {
      if(!result) {
        this.containers = [];
      } else {
        // this.searchContent = result.id ? result.id : '';
        // let content = this.searchContent;
        this.getContainerById(result.id)
        .then((res) => {
            if(res.code === 1) {
              let data = res.data;
              if(Array.isArray(data)) {
                this.containers = data;
              } else {
                this.containers = [data];
              }
            } else {
              this.containers = [];
            }
        })
        .catch((err) => {
          console.log(err);
          this.containers = [];
        })
      }
    },
    // 滑动至底部，加载剩余镜像
    load() {
      const _this = this;
      if(getScrollTop() + getWindowHeight() >= getScrollHeight()) {
        let totalPage = _this.meta.total_page;
        let page = _this.curPage;
        if(page < totalPage) {                                       //先判断下一页是否有数据  
          _this.curPage++;                                           //查询条件的页码+1
          _this.getContainersList('', _this.curPage);   //拉取接口数据
        } else {
          console.log('全部容器加载完')
        }
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
