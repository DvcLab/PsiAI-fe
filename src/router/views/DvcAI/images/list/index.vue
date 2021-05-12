<script>
import Layout from "@/router/layouts/main";
import ImageList from "./list";
import Loader from "@/components/DvcAI/loader";
import appConfig from "@/app.config";
import Autocomplete from '@trevoreyre/autocomplete-vue';
import { getScrollHeight, getScrollTop, getWindowHeight } from "@/utils/screen";

/**
 * 镜像列表
 */
export default {
  page: {
    title: "镜像列表",
    meta: [{ name: "镜像列表", content: appConfig.description }]
  },
  components: { Layout, Loader, ImageList, Autocomplete },
  data() {
    return {
      images: [],
      // searchContent: '',
      curPage: 1,
      curTotal: 0,
      meta: {},
      loadingState: true
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
      this.loadingState = true;
      this.getImages({
        params: q
      })
      .then((res) => {
        if(res.code === 1) {
          this.images.splice(this.curTotal, 0, ...res.data);
          this.meta = res._meta;
          this.curPage = res._meta.page;
          this.curTotal += res._meta.size;
          // return res.data;
        }
        this.loadingState = false;
      })
      .catch((err) => {
        console.log(err);
        this.loadingState = false;
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
    search(input) {
      this.loadingState = true;
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
        } else {
          // 镜像只支持id搜索，不支持模糊搜索
          this.getImageById(input)
          .then((res) => {
            if(res.code === 1) {
              this.loadingState = false;
              return resolve([res.data]);
            } else {
              this.loadingState = false;
              return resolve([]);
            }
          })
          .catch((err) => {
            console.log(err);
            this.loadingState = false;
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
          // 镜像获取列表与其他不同，需注意
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

      <div class="col-12 mb-4 text-center">
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

      <ImageList class="col-12" :images="images" :updating="loadingState"/>

      <div class="col-12 mt-4">
        <Loader :loading="loadingState"/>
      </div>

    </div>
  </Layout>
</template>
