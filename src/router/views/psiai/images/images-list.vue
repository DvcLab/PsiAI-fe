<script>
import Layout from "../../../layouts/main";
import ImageItem from "@/components/psiai/image-item";
import appConfig from "@/app.config";
import Autocomplete from '@trevoreyre/autocomplete-vue';
import { getScrollHeight, getScrollTop, getWindowHeight } from "@/utils/screen";

// const wikiUrl = 'https://en.wikipedia.org'
// const params = 'action=query&list=search&format=json&origin=*'

/**
 * 镜像列表
 */
export default {
  page: {
    title: "镜像列表",
    meta: [{ name: "镜像列表", content: appConfig.description }]
  },
  components: { Layout, ImageItem, Autocomplete },
  data() {
    return {
      images: [],
      // searchContent: '',
      curPage: 1,
      curTotal: 0,
      meta: {}
    };
  },
  mounted() {
    window.addEventListener('scroll', this.load);
    this.getImagesList({
      page: 1
    });
  },
  destroyed(){
    window.removeEventListener('scroll', this.load, false);
  },
  methods: {
    // GET获取镜像
    getImages(q){
      return this.$request.get('images', q)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err)
        return [];
      })
    },
    // 获取镜像列表
    getImagesList(q) {
      const _this = this;
      this.getImages({
        params: q
      })
      .then((res) => {
        if(res.code === 1) {
          _this.images.splice(_this.curTotal, 0, ...res.data);
          _this.meta = res._meta;
          _this.curPage = res._meta.page;
          _this.curTotal += res._meta.size;
          return res.data;
        }
      })
      .catch((err) => {
        // _this.images = [];
        console.log(err)
        return [];
      })
    },
    // 搜索镜像
    getImageById(id) {
      return this.$request.get('images/' + id)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err)
        return []
      })
    },
    // autocomplete 搜索函数
    // search(input) {
    search(input) {
      return new Promise(resolve => {
        if (input.length === 0) {
          this.getImages({
            params: {
              page: 1
            }
          })
          .then((res) => {
            if(res.code === 1) {
              this.images = res.data;
              this.meta = res._meta;
              this.curPage = res._meta.page;
              this.curTotal = this.images.length;
              return resolve(res.data)
            } else {
              return resolve([])
            }
          })
        } else {
          this.getImageById(input)
          .then((res) => {
            if(res.code === 1) {
              return resolve([res.data]);
            } else {
              return resolve([]);
            }
          })
          .catch((err) => {
            console.log(err);
            return resolve([]);
          })
        }
      })
    },
    // 选择搜索内容，input显示内容
    getResultValue(result) {
      return result.name;
      // this.searchContent = result.id ? result.id : '';
      // return result ? result.name : '';
    },
    // 选择搜索内容触发事件
    // handleSubmit() {
    handleSubmit(result) {
      console.log(result)
      if(!result) {
        this.images = [];
        return;
      } else {
        // this.searchContent = result.id ? result.id : '';
        // let content = this.searchContent;
        this.getImageById(result.id).then((res) => {
            if(res.code === 1) {
              let data = res.data;
              if(Array.isArray(data)) {
                this.images = data;
              } else {
                this.images = [data];
              }
            } else {
              this.images = [];
            }
          })
          .catch((err) => {
            this.images = [];
            console.log(err)
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
          _this.getImagesList({
            last: _this.images[this.images.length - 1],
            page: _this.curPage
          });   //拉取接口数据
        } else {
          console.log('全部镜像加载完')
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
          aria-label="搜索镜像..."
          placeholder="搜索镜像..."
          :search="search"
          :get-result-value="getResultValue"
          :debounce-time="500"
          @submit="handleSubmit"
          auto-select
          >
          <template #result="{ result, props }">
            <!-- <ul
              v-if="noResults"
              class="autocomplete-result-list"
              style="position: absolute; z-index: 1; width: 100%; top: 100%;"
            >
              <li class="autocomplete-result">
                No results found
              </li>
            </ul> -->
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
          <div class="col-12">
            <div class="row align-items-center bg-white list-head-text">
              <!-- <span class="col-md-1 d-none d-md-block">#</span> -->
              <span class="col-6 col-md-5">镜像名称</span>
              <span class="col-2 col-md-2">类型</span>
              <!-- <span class="col-2 col-md-2">标签</span> -->
              <span class="col-2 col-md-1">用户</span>
              <span class="col-md-2 text-end d-none d-md-block">创建时间</span>
              <span class="col-2 col-md-2 text-end">更新时间</span>
            </div>
          </div>
          <div v-if="images.length > 0">
            <ImageItem v-for="item in images" :key="item.id" :image="item" class="col-12"/>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
