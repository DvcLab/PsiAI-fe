<script>
import Layout from "../../../layouts/main";
import appConfig from "@/app.config";
import VueSlideBar from "vue-slide-bar";
// import Autocomplete from '@trevoreyre/autocomplete-vue';
import Multiselect from "vue-multiselect";
import ProjSelectItem from "@/components/psiai/proj-select-item";
import ImageSelectItem from "@/components/psiai/image-select-item";
import SelectCard from "@/components/psiai/select-card";
import {
  required,
  // minValue,
  // maxValue,
  // numeric,
  // url,
} from "vuelidate/lib/validators";
import Swal from "sweetalert2";

/**
 * Create Container component
 */
export default {
  page: {
    title: "创建容器",
    meta: [{ name: "创建容器", content: appConfig.description }]
  },
  components: { Layout, VueSlideBar, Multiselect, ProjSelectItem, ImageSelectItem, SelectCard },
  data() {
    return {
      cpus: 1,
      cpuData: {
        value: 1,
        data: [1, 2, 4, 8, 16],
        range: [
          {
            label: "1核"
          },
          {
            label: "2核"
          },
          {
            label: "4核"
          },
          {
            label: "8核"
          },
          {
            label: "16核"
          }
        ]
      },
      mem: 4,
      memData: {
        value: 4,
        data: [1, 2, 4, 8, 16, 32],
        range: [
          {
            label: "1G"
          },
          {
            label: "2G"
          },
          {
            label: "4G"
          },
          {
            label: "8G"
          },
          {
            label: "16G"
          },
          {
            label: "32G"
          }
        ]
      },
      projsList: [],
      datasetsList: new Map(),
      datasetUrl: null,
      datasetsUrls: new Set(),
      imagesList: [],
      selectProj: null,
      selectedBranch: '',
      selectedImage: null,
      submitted: false
    };
  },
  computed: {
    // 选择项目的id
    selectedProjId() {
      if(!this.selectProj) return '';
      return this.selectProj.id;
    },
    // 选择镜像的id
    selectedImageId() {
      if(!this.selectedImage) return '';
      return this.selectedImage.id;
    },
    // 是否需要gpu
    isGPU() {
      if(!this.selectedImage) return false;
      let types = this.selectedImage.types;
      let hasGPU = types.includes('GPU');
      return hasGPU;
    },
    // gpu的选项是否可选
    isDisabledGpu() {
      if(!this.selectedImage) return true;
      let types = this.selectedImage.types;
      let hasCPU = types.includes('CPU');
      let hasGPU = types.includes('GPU');
      return !(hasCPU && hasGPU)
    }
  },
  validations: {
    selectProj: { required },
    selectedBranch: { required },
    selectedImage: { required },
    cpus: { required },
    mem: { required },
  },
  mounted() {
    this.getProjsList();
    this.getImagesList();
  },
  methods: {
    // search(input) {
    //   return new Promise((resolve, reject) => {
    //     return this.$request.get('projects', {
    //       params: {
    //         q: input
    //       }
    //     })
    //     .then((res) => res.data)
    //     .then((res) => {
    //       if(res.code === 1) {
    //         resolve(res.data)
    //       } else {
    //         resolve([])
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //       reject([]);
    //     })
    //     // fetch(url)
    //     //   .then(response => response.json())
    //     //   .then(data => {
    //     //     resolve(data.query.search)
    //     //   })
    //   })
    // },
    // getResultValue(result) {
    //   console.log('getResultValue', result)
    //   this.searchContent = result.id ? result.id : '';
    //   return result ? result.name : '';
    // },
    
    // handleSubmit(result) {
    //   console.log('handleSubmit', result)
    //   if(!result) {
    //     // this.projects = []; 
    //   } else {
    //     // this.searchContent = result.id ? result.id : '';
    //     // let content = this.searchContent;
    //     // this.projects = [];
    //     // this.curPage = 1;
    //     // this.curTotal = 0;
    //     // this.getProjList(content, this.curPage);
    //   }
    // },
    // 获取项目列表
    getProjsList() {
      const vm = this;
      this.$request.get('projects')
      .then((res) => {
        vm.projsList = res.data.data;
      })
      .catch((err) => {
        console.err(err)
      })
    },
    // 监听proj里input的内容
    changeProjValueAction(value) {
      console.log(value)
      const _this = this;
      this.$request.get('projects', {
        params: {
          q: value
        }
      })
      .then((res) => res.data)
      .then((res) => {
        _this.projsList = [];
        if(res.code === 1) {
          _this.projsList.splice(0, 0, ...res.data);
        }
      })
      .catch((err) => {
        console.log(err)
        _this.projsList = [];
      })
    },
    // 获取镜像列表
    getImagesList() {
      const _this = this;
      this.$request.get('images')
      .then((res) => res.data)
      .then((res) => {
        if(res.code === 1) {
          _this.imagesList = res.data;
        }
      })
      .catch((err) => {
        console.err(err)
      })
    },
    // 获取数据集信息
    getDatasetByUrl() {
      if(!this.datasetUrl || this.datasetUrl.length < 10 || this.isUrl(url)) {
        return;
      }
      const url = this.datasetUrl;
      this.$request.get('datasets_info?url=' + url)
      .then(res => res.data)
      .then((res) => {
        console.log(res)
        if(res.code === 1) {
          // 请求成功
          this.datasetsList.set(res.data.url, res.data);
          this.$forceUpdate();
          this.datasetUrl = '';
        }
      })
      .catch((err) => {
        console.error(err)
      })
    },
    // 删除数据集
    delDataset(key) {
      if(this.datasetsList.has(key)){
        this.datasetsList.delete(key)
        this.$forceUpdate()
      }
    },
    // 提交表单
    formSubmit(e) {
      console.log(e)
      const _this = this;
      this.submitted = true;
      this.$v.$touch();
      if (!this.$v.$invalid) {
        let datasetUrls = _this.selectedDatasetsUrls();
        // 填写内容无误提交远程
        _this.$request.put('containers', {
          params: {
            project_id: _this.selectedProjId,
            branch: _this.selectedBranch,
            image_id: _this.selectedImageId,
            dataset_urls: datasetUrls,
            cpus: _this.cpus,
            mem: _this.mem,
            gpu: _this.isGPU
          }
        })
        .then((res) => {
          if(res.code === 1) {
            this.successMsg();
          } else {
            this.errorMsg();
          }
          
        })
        .catch((err) => {
          console.log(err);
          this.errorMsg();
        })
      }
    },
    // 防抖
    debounce(fn, delay=2000) {
      let timer = null;
      return function () {
        if(timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          fn.apply(this, arguments);
          timer = null;
        }, delay)
      }
    },
    // 容器创建成功提醒
    successMsg() {
      Swal.fire(
        "容器创建成功!",
        "点击按钮返回容器列表",
        "success"
      ).then((res) => {
        if(res.isConfirmed) {
          this.$router.push({path: '/containers'})
        }
      })
    },
    // 容器创建失败提醒
    errorMsg() {
      Swal.fire(
        "容器创建失败!",
        "点击按钮返回容器列表",
        "error"
      ).then((res) => {
        if(res.isConfirmed) {
          this.$router.push({path: '/containers'})
        }
      })
    },
    // 选择数据集url数组，因computed不能立即监听修改，所以改为了方法
    selectedDatasetsUrls() {
      if(!this.datasetsList || this.datasetsList.size < 1) return [];
      return Array.from(this.datasetsList.keys());
    },
    // 判断正则判断是否是url
    isUrl(url) {
      return /^https?:\/\/.+/.test(url)
    },
  }
};
</script>
<template>
  <Layout>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            
            <h4 class="card-title mb-4">创建容器</h4>
            <form @submit.prevent="formSubmit">
              <div class="row">
                <div class="col-12 col-md-6 mb-2">
                  <label class="xrequired me-1">项目</label>
                  <span class="error" v-if="submitted && !$v.selectProj.required">（必选项）</span>
                  <div class="mb-2">
                    <multiselect 
                      v-model="selectProj" 
                      :options="projsList" 
                      :searchable="true"
                      @search-change="changeProjValueAction"
                      placeholder="选择项目"
                      select-label="选择一个项目"
                      selectedLabel="已选项目"
                      deselectLabel="点击取消选择"
                      label="name" 
                      track-by="name"
                    >
                    <template slot="singleLabel" slot-scope="{ option }">
                      <i class="bx bx-book-bookmark me-1"></i>
                      <span>{{ option.name }}</span>
                    </template>
                    <template slot="option" slot-scope="{ option }">
                      <div class="row">
                        <ProjSelectItem class="col-12" :proj="option"/>
                      </div>
                    </template>
                    <span slot="noResult">未查询到该项目</span>
                    <span slot="noOptions">暂无项目可用</span>
                    </multiselect>
                  </div>
                </div>
                <div v-if="selectProj" class="col-12 col-md-6 mb-2">
                  <label class="xrequired me-1">项目分支</label>
                  <span class="error" v-if="submitted && !$v.selectedBranch.required">（必选项）</span>
                  <multiselect
                    v-model="selectedBranch"
                    :options="selectProj.branches"
                    :searchable="false"
                    placeholder="选择项目分支"
                    select-label="选择一个分支"
                    selectedLabel="已选分支"
                    deselectLabel="点击取消选择"
                    >
                    <template slot="singleLabel" slot-scope="{ option }">
                      <i class="bx bx-git-branch me-1"></i>
                      <span>{{ option }}</span>
                    </template>
                    <span slot="noResult">未查询到该分支</span>
                    <span slot="noOptions">暂无分支可用</span>
                    </multiselect>
                  
                  <!-- <div v-if="proj.branches" class="row">
                    <div v-for="item in proj.branches" :key="item" class="col-xl-3 col-sm-4">
                      <div class="mb-3">
                        <label class="card-radio-label mb-2">
                          <input
                            type="radio"
                            name="branch"
                            class="card-radio-input"
                            checked
                            v-model="selectedBranch"
                            :value="item"
                          />
                          <div class="card-radio">
                            <div>
                              <i class="mdi mdi-source-branch font-size-24 text-primary align-middle me-2"></i>
                              <span>{{ item }}</span>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div> -->
                </div>
              </div>

              <div class="mb-2">
                <label class="xrequired me-1">镜像</label>
                <span class="error" v-if="submitted && !$v.selectedImage.required">（必选项）</span>
                <multiselect
                  v-model="$v.selectedImage.$model"
                  :options="imagesList"
                  placeholder="选择镜像"
                  select-label="选择一个镜像"
                  selectedLabel="已选镜像"
                  deselectLabel="点击取消选择"
                  label="name"
                  track-by="name"
                >
                  <template slot="singleLabel" slot-scope="{ option }">
                    <i class="bx bx-layer me-1"></i>
                    <span>{{ option.name }}</span>
                  </template>
                  <template slot="option" slot-scope="{ option }">
                    <div class="row">
                      <ImageSelectItem class="col-12" :image="option"/>
                    </div>
                  </template>
                  <span slot="noResult">未查询到该镜像</span>
                  <span slot="noOptions">暂无镜像可用</span>
                </multiselect>
                
                <!-- <div v-if="imagesList" class="row">
                  <div v-for="item in imagesList" :key="item.name" class="col-xl-3 col-sm-4">
                    <div class="mb-3">
                      <label class="card-radio-label mb-2">
                        <input
                          type="radio"
                          name="image"
                          class="card-radio-input"
                          v-model="selectedImage"
                          :value="item.id"
                        />
                        <div class="card-radio">
                          <div>
                            <i class="mdi mdi-layers-triple-outline font-size-24 text-primary align-middle me-2"></i>
                            <span>{{ item.name }}</span>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div> -->
              </div>

              <div class="mb-3">
                <label>数据集</label>
                <div class="mb-2">
                  <input 
                    type="text"
                    class="form-control input-placeholder-text"
                    placeholder="https://"
                    v-model.trim="datasetUrl"
                    @input="getDatasetByUrl"
                  />
                </div>
                <div class="row">
                  <div v-for="(item, key) in datasetsList" :key="key" class="col-xl-3 col-sm-4">
                    <div class="mb-3">
                      <SelectCard :item="item[1]" @del="delDataset">
                        <template slot="content">
                          <div class="row">
                            <div class="col-2">
                              <i class="mdi mdi-cube-outline font-size-24 text-primary align-middle me-2"></i>
                            </div>
                            <div class="col-10">
                              <span>{{ item[1].name }}</span>
                              <p class="text-muted text-truncate mb-0">{{ item[1].desc }}</p>
                            </div>
                          </div>
                        </template>
                      </SelectCard>
                      <!-- <label class="card-radio-label mb-2">
                        <input
                          type="checkbox"
                          name="datasets"
                          class="card-radio-input"
                          checked
                          v-model="selectedDatasets"
                          :value="item[1].url"
                        />
                        <div class="card-radio">
                          <div class="row">
                            <div class="col-2">
                              <i class="mdi mdi-cube-outline font-size-24 text-primary align-middle me-2"></i>
                            </div>
                            <div class="col-10">
                              <span>{{ item[1].name }}</span>
                              <p class="text-muted text-truncate mb-0">{{ item[1].desc }}</p>
                            </div>
                          </div>
                          <i class="bx bx-x me-1 x" @click="delDataset(key)"></i>
                        </div>
                      </label> -->
                    </div>
                  </div>
                </div>
              </div>

              <div class="mb-2">
                <label class="xrequired me-1">CPU</label>
                <span class="error" v-if="submitted && !$v.cpus.required">（必选项）</span>
                <vue-slide-bar class="mx-3" v-model="cpus" :data="cpuData.data" :range="cpuData.range" />
              </div>

              <div class="mb-2">
                <label class="xrequired me-1">MEM</label>
                <span class="error" v-if="submitted && !$v.mem.required">（必选项）</span>
                <vue-slide-bar class="mx-3" v-model="mem" :data="memData.data" :range="memData.range" />
              </div>

              <div class="mb-2">
                <label>GPU</label>
                <div class="form-check form-switch mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="isGPU"
                    :disabled="isDisabledGpu"
                  />
                  <span :class="{'checkbox-disabled-text': isDisabledGpu }">
                    {{ isGPU ? '需要GPU' : '无需GPU' }}
                  </span>
                </div>
              </div>

              <div class="text-center mt-4">
                <button type="submit" class="btn btn-success">创建容器</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
