<script>
import Layout from "../../../layouts/main";
import ContainerList from "@/components/DvcAI/container-list";
import Loader from "@/components/DvcAI/loader";
import appConfig from "@/app.config";
import Autocomplete from '@trevoreyre/autocomplete-vue';
import { getScrollHeight, getScrollTop, getWindowHeight } from "@/utils/screen";
import { EventBus } from '@/utils/event-bus';

/**
 * 容器列表
 */
export default {
  inject:['reload'],
  page: {
    title: "容器列表",
    meta: [{ name: "容器列表", content: appConfig.description }]
  },
  components: { Layout, Loader, ContainerList, Autocomplete },
  data() {
    return {
      containers: [],
      searchContent: '',
      curPage: 1,
      curTotal: 0,
      meta: {},
      loadingState: true,
      status: 'active'
    };
  },
  // computed: {
  //   containerFilter() {
  //     if(status === 'active') {
  //       return this.containers.filter((item) => item.status!=="New" || item.status!=="Deleted" || item.status!=="Failure");
  //     } else {
  //       return this.containers;
  //     }
  //   }
  // },
  mounted() {
    window.addEventListener('scroll', this.load);
    this.getContainersList('', 1);
    EventBus.$on('update', () => this.reload());
    // this.getHostList();
  },
  destroyed(){
    window.removeEventListener('scroll', this.load, false);
  },
  methods: {
    // 获取容器
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

    // 获取容器列表
    getContainersList(q = '', page = 1, enabled = true) {
      const _this = this;
      this.loadingState = true;
      this.getContainers({
        params: {
          q: q,
          page: page,
          enabled: enabled
        }
      })
      .then((res) => {
        if(res.code === 1) {
          _this.containers.splice(_this.curTotal, 0, ...res.data);
          _this.meta = res._meta;
          _this.curPage = res._meta.page;
          _this.curTotal += res._meta.size;
        }
        this.loadingState = false;
      })
      .catch((err) => {
        _this.containers = [];
        console.log(err);
        this.loadingState = false;
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
      this.loadingState = true;
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
            this.loadingState = false;
            return resolve(res.data);
          } else {
            this.loadingState = false;
            return resolve([]);
          }
        })
        .catch((err) => {
          console.log(err)
          this.loadingState = false;
          return resolve([])
        })
      })
    },

    // 选择搜索内容，input显示内容
    getResultValue(result) {
      return result.container_name;
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

    // 获取正在运行容器列表
    getRunningContainerList() {
      this.containers = [];
      this.curTotal = 0;
      this.curPage = 1;
      this.getContainersList('', this.curPage, true);
    },

    // 获取全部状态容器列表
    getAllContainerList() {
      this.containers = [];
      this.curTotal = 0;
      this.curPage = 1;
      this.getContainersList('', this.curPage, false);
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
    },

    // 判断图片url是否可以加载
    async imageIsExist (url) {
      if(!url) return false;
      let img = new Image();
      img.src = url;
      img.onload = function () {
        if (this.complete == true){
          return true;
        }
      }
      img.onerror = function () {
        return false;
      }
    }

  }
};
</script>
<template>
  <Layout>

    <div class="row">
      
      <div class="col-12 align-items-center">
        <div class="row d-flex align-item-center">
          <div class="col-7 mb-3">
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
                  <div class="row d-flex align-items-center">
                    <div class="col-12 col-md-4">
                      <h6 class="mb-0"><i class="bx bx-cube me-1"></i>{{result.container_name}}</h6>
                    </div>
                    <div class="col-12 col-md-4">
                      <span><i class="bx bx-layer me-1"></i>{{result.image.name}}</span>
                    </div>
                    <div class="col-12 col-md-4 d-none d-md-block">
                      <div class="d-flex align-items-center">
                        <img
                          v-if="imageIsExist(result.user.avatar_url)"
                          class="rounded-circle avatar-xxs me-2"
                          v-real-img="result.user.avatar_url"
                          alt=""
                        />
                        <div v-else class="avatar-xxs me-2">
                          <span class="avatar-title rounded-circle">{{result.user.username[0]}}</span>
                        </div>
                        <span class="d-inline-block text-truncate">{{result.user.username}}</span>
                      </div>
                    </div>
                    <div class="col-12 d-md-none">
                      <span class="d-block text-truncate mb-0">
                        <i class="bx bx-user me-1"></i>{{result.user.username}}
                      </span>
                    </div>
                  </div>
                </li>
              </template>
            </autocomplete>
            
          </div>
          <div class="col-5 align-self-center mb-3">
            <button
              type="button"
              class="btn btn-success btn-rounded float-end"
              @click="toCreateContainerPage"
            >
              <i class="mdi mdi-plus me-1"></i> 创建容器
            </button>
          </div>
        </div>
      </div>
      <div class="col-12">
        <b-tabs pills active-nav-item-class="text-white">
          <b-tab active title-item-class="pe-2" title-link-class="border border-primary text-primary font-size-10 px-2 py-1 border-pill" @click="getRunningContainerList">
            <template v-slot:title>
              <span class="d-inline-block d-sm-none">
                <i class="fas fa-home"></i>
              </span>
              <span class="d-none d-sm-inline-block">运行</span>
            </template>
            <ContainerList class="col-12" :containers="containers" :updating="loadingState"/>
          </b-tab>
          <b-tab title-link-class="border border-primary text-primary font-size-10 px-2 py-1 border-pill" @click="getAllContainerList">
            <template v-slot:title>
              <span class="d-inline-block d-sm-none">
                <i class="fas fa-home"></i>
              </span>
              <span class="d-none d-sm-inline-block">全部</span>
            </template>
            <ContainerList class="col-12" :containers="containers" :updating="loadingState"/>
          </b-tab>
        </b-tabs>
      </div>

      <!-- <ContainerList class="col-12" :containers="containers" :updating="loadingState"/> -->

      <div class="col-12 mt-4">
        <Loader :loading="loadingState"/>
      </div>

    </div>
  </Layout>
</template>
