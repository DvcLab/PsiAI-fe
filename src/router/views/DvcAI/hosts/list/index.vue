<script>
// import Layout from "@/router/layouts/main";
import List from "./list";
import Loader from "@/components/DvcAI/loader";
import appConfig from "@/app.config";
import Autocomplete from '@trevoreyre/autocomplete-vue';
import { getScrollHeight, getScrollTop, getWindowHeight } from "@/utils/screen";

/**
 * 主机列表
 */
export default {
  page: {
    title: "主机列表",
    meta: [{ name: "主机列表", content: appConfig.description }]
  },

  components: {
    // Layout,
    Loader,
    Autocomplete,
    List
  },

  data() {
    return {
      hosts: [],
      isSearch: false,
      searchContent: '',
      curPage: 1,
      curTotal: 0,
      meta: {},
      loadingState: true,
    };
  },

  mounted() {
    window.addEventListener('scroll', this.load);
    this.getList('', 1);
  },

  destroyed(){
    window.removeEventListener('scroll', this.load, false);
  },

  methods: {
    
    // 获取主机
    getHosts(q) {
      return this.$request.get('hosts', q)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err)
        return [];
      })
    },

    // 搜索获取主机列表
    getList(q, page) {
      this.loadingState = true;
      this.getHosts({
        params: {
          q: q,
          page: page
        }
      })
      .then((res) => {
        if(res.code === 1) {
          this.hosts.splice(this.curTotal, 0, ...res.data);
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

    // 搜索
    search(input) {
      console.log(input)
      if(!input) {
        this.searchContent = '';
      } else {
        this.searchContent = input;
      }

      return new Promise(resolve => {
        this.loadingState = true;
        this.isSearch = true;
        this.getHosts({
          params: {
            q: input,
            page: 1
          }
        })
        .then((res) => {
          console.log(res)
          if(res.code === 1) {
            this.hosts = res.data;
            this.meta = res._meta;
            this.curPage = res._meta.page;
            this.curTotal = this.hosts.length;
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
      })
    },

    // 选择搜索内容，input显示内容
    getResultValue(result) {
      return result ? result.ip : ''
    },

    // 选择搜索内容触发事件
    handleSubmit(result) {
      if(!result) {
        this.hosts = []; 
      } else {
        this.searchContent = result.id ? result.id : '';
        let content = this.searchContent;
        this.hosts = [];
        this.curPage = 1;
        this.curTotal = 0;
        this.getList(content, this.curPage);
      }
    },
    
    // 滑动至底部，加载剩余项目
    load() {
      const _this = this;
      if(getScrollTop() + getWindowHeight() >= getScrollHeight()){
        let totalPage = _this.meta.total_page;
        let page = _this.curPage;
        if(page < totalPage) {                                       //先判断下一页是否有数据  
          _this.curPage++;                                           //查询条件的页码+1
          _this.getList(_this.searchContent, _this.meta.page);   //拉取接口数据
        } else {
          console.log('全部主机加载完')
        }
      }
    },

    // 跳转创建主机页面
    toCreateHostPage() {
      this.$router.push({path: '/hosts/create'})
    },

  }
};
</script>
<template>

  <div class="row">

    <div class="col-12 text-center">
      <div class="row d-flex align-item-center">
        <div class="col-7 mb-3">
          <autocomplete
            aria-label="搜索主机..."
            placeholder="搜索主机..."
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
                  <h6><i class="bx bx-server me-1"></i>{{ result.ip }}</h6>
                </div>
              </li>
            </template>
          </autocomplete>
        </div>
        <div class="col-5 align-self-center mb-3">
          <button
            type="button"
            class="btn btn-success btn-rounded float-end"
            @click="toCreateHostPage"
          >
            <i class="mdi mdi-plus me-1"></i> 创建主机
          </button>
        </div>
      </div>
      
    </div>

    <List class="col-12" :hosts="hosts" :updating="loadingState"/>

    <div class="col-12 mt-4">
      <Loader :loading="loadingState"/>
    </div>

  </div>

</template>
