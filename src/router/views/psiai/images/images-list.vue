<script>
import Layout from "../../../layouts/main";
import ImageItem from "@/components/psiai/image-item";
import appConfig from "@/app.config";
import Autocomplete from '@trevoreyre/autocomplete-vue'

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
      searchId: ''
    };
  },
  mounted() {
    this.getImagesList();
  },
  methods: {
    // 初始化获取镜像列表
    getImagesList() {
      const _this = this;
      this.$request.get('images')
      .then((res) => {
        _this.images = res.data;
      })
      .catch((err) => {
        console.err(err)
      })
    },
    // 搜索镜像
    searchImage(q) {
      return this.$request.get('images/' + q)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.err(err)
      })
    },
    // autocomplete 搜索函数
    search(input) {
      const _this = this;
      if(!input) {
        this.searchId = ''
      }
      let id = this.searchId;
      return new Promise(resolve => {
        _this.searchImage(id).then((res) => {
          if(Array.isArray(res)) {
            this.images = res;
            resolve(res);
          } else {
            this.images = [res];
            resolve([res]);
          }
        })
        .catch((err) => {
          console.log(err)
        })
        
      })
    },
    // 选择搜索内容，input显示内容
    getResultValue(result) {
      this.searchId = result.id ? result.id : '';
      return result.name;
    },
    // 选择搜索内容触发事件
    handleSubmit(result) {
      this.searchId = result.id ? result.id : '';
      let id = this.searchId;
      this.searchImage(id).then((res) => {
          if(Array.isArray(res)) {
            this.images = res;
          } else {
            this.images = [res];
          }
        })
        .catch((err) => {
          console.log(err)
        })
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
              <span class="col-6 col-md-6">镜像名称</span>
              <span class="col-2 col-md-2">类型</span>
              <!-- <span class="col-2 col-md-2">标签</span> -->
              <!-- <span class="col-2 col-md-1">用户</span> -->
              <span class="col-md-2 text-end d-none d-md-block">创建时间</span>
              <span class="col-4 col-md-2 text-end">更新时间</span>
            </div>
          </div>
          <ImageItem v-for="item in images" :key="item.id" :image="item" class="col-12"/>
        </div>
      </div>
    </div>
  </Layout>
</template>
