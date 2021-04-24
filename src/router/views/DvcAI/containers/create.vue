<script>
import Layout from "../../../layouts/main";
import appConfig from "@/app.config";
import VueSlideBar from "vue-slide-bar";
import Multiselect from "vue-multiselect";
import queryString from 'query-string';
import PageHeader from "@/components/page-header";
import ProjSelectItem from "@/components/DvcAI/proj-select-item";
import ImageSelectItem from "@/components/DvcAI/image-select-item";
import DatasetSelectItem from "@/components/DvcAI/dataset-select-item";
import SelectCard from "@/components/DvcAI/select-card";
import LoaderContainer from "@/components/DvcAI/loader-container";
import { required } from "vuelidate/lib/validators";
import Swal from "sweetalert2";
import { mapActions } from "vuex";

/**
 * Create Container component
 */
export default {
  page: {
    title: "创建容器",
    meta: [{ name: "创建容器", content: appConfig.description }]
  },
  components: { Layout, PageHeader, LoaderContainer, VueSlideBar, Multiselect, ProjSelectItem, DatasetSelectItem, ImageSelectItem, SelectCard },
  data() {
    return {
      title: "创建容器",
      linkItems: [
        {
          text: "容器列表",
          to: { path: '/containers' },
        },
        {
          text: "创建容器",
          active: true,
        },
      ],
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
      datasetsList: [],
      imagesList: [],
      selectedProj: null,
      selectedBranch: '',
      selectedImage: null,
      selectedDatasetsList: [],
      submitted: false,
      loadingState: false,
      matchImage: null,
    };
  },
  computed: {

    // 项目分支
    branches() {
      if(!this.selectedProj) return [];
      return this.selectedProj.branches;
    },

    // 选择项目的id
    selectedProjId() {
      if(!this.selectedProj) return '';
      return this.selectedProj.id;
    },

    // 选择镜像的id
    selectedImageId() {
      if(!this.selectedImage) return '';
      return this.selectedImage.id;
    },

    // 选择的数据集url数组
    selectedDatasetsUrls() {
      if(!this.selectedDatasetsList || this.selectedDatasetsList.length <= 0) return [];
      const res = [];
      this.selectedDatasetsList.forEach((item) => {
        res.push(item.url);
      })
      return res;
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
    selectedProj: { required },
    selectedBranch: { required },
    selectedImage: { required },
    cpus: { required },
    mem: { required },
  },
  mounted() {
    this.getProjsList();
    this.getImagesList();
    this.getDatasetsList();
  },
  methods: {
    // 镜像相关API：获取适配指定项目（依赖）的镜像
    ...mapActions('images', ['getImagesForProject']),

    // 获取项目列表
    getProjsList() {
      const vm = this;
      this.$request.get('projects')
      .then((res) => {
        vm.projsList = res.data.data;
      })
      .catch((err) => {
        console.log(err)
      })
    },

    // 监听proj里select的选择
    changeProjSelectAction(proj){

      // 切换项目，分支对应清空
      this.selectedBranch = '';
      this.selectedImage = null;
      // 搜索匹配镜像
      this.getImagesForProject(proj.id)
      .then(({ data })=>{
        this.selectedImage = data[0];
        this.matchImage = data[0];
      })
      .catch((err)=> {
        console.log(err)
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
        console.log(err)
      })
    },

    // 获取数据集列表
    getDatasetsList() {
      this.$request.get('datasets')
      .then((res) => res.data)
      .then((res) => {
        if(res.code === 1) {
          this.datasetsList = res.data;
        }
      })
      .catch((err) => {
        console.log(err)
      })
    },

    // 监听dataset里input的内容搜索
    changeDatasetValueAction(value) {
      console.log(value)
      this.$request.get('datasets', {
        params: {
          q: value
        }
      })
      .then((res) => res.data)
      .then((res) => {
        this.datasetsList = [];
        if(res.code === 1) {
          this.datasetsList.splice(0, 0, ...res.data);
        }
      })
      .catch((err) => {
        console.log(err)
        this.datasetsList = [];
      })
    },

    // 删除数据集
    delDataset(id) {
      this.selectedDatasetsList = this.selectedDatasetsList.filter((item) => id!== item.id);
    },

    // 提交表单
    formSubmit(e) {
      console.log(e)
      const _this = this;
      this.loadingState = true;
      this.submitted = true;
      this.$v.$touch();
      if (!this.$v.$invalid) {
        // 填写内容无误提交远程
        let query = queryString.stringify({
            project_id: _this.selectedProjId,
            project_branch: _this.selectedBranch,
            image_id: _this.selectedImageId,
            dataset_url: _this.selectedDatasetsUrls,
            cpus: _this.cpus,
            mem: _this.mem,
            gpu: _this.isGPU
          })
        _this.$request.put('containers?'+query)
        .then((res) => res.data)
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

    // 返回容器列表
    backContainersList() {
      this.$router.push({path: '/containers'})
    },

    // 容器创建成功提醒
    successMsg() {
      Swal.fire(
        "容器创建成功!",
        "点击按钮返回容器列表",
        "success"
      ).then((res) => {
        if(res.isConfirmed) {
          this.loadingState = false;
          this.backContainersList();
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
          this.loadingState = false;
          this.backContainersList();
        }
      })
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
    <PageHeader :title="title" :items="linkItems" />
    <LoaderContainer :loading="loadingState">
    <div class="row">

      <div class="col-lg-12">

        <div class="card">
          <div class="card-body">
            
            <!-- <h4 class="card-title mb-4">
              创建容器
            </h4> -->
            <form @submit.prevent="formSubmit">
              <div class="row">

                <div class="col-12 col-md-6 mb-2">
                  <label class="xrequired me-1">项目</label>
                  <span class="error" v-if="submitted && !$v.selectedProj.required">（必选项）</span>
                  <div class="mb-2">
                    <multiselect 
                      v-model="selectedProj" 
                      :options="projsList" 
                      :searchable="true"
                      @select="changeProjSelectAction"
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
                
                <div class="col-12 col-md-6 mb-2">
                  <label class="xrequired me-1">项目分支</label>
                  <span class="error" v-if="submitted && !$v.selectedBranch.required">（必选项）</span>
                  <multiselect
                    v-model="selectedBranch"
                    :options="branches"
                    :searchable="false"
                    :disabled="!selectedProj"
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
                </div>
              </div>

              <div class="mb-2">
                <label class="xrequired me-1">镜像</label>
                <span class="error" v-if="submitted && !$v.selectedImage.required">（必选项）</span>
                <multiselect
                  v-model="selectedImage"
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
                    <span
                      v-if="matchImage && selectedImage.id === matchImage.id"
                      class="badge bg-info ms-2"
                    >
                      推荐
                    </span>
                  </template>
                  <template slot="option" slot-scope="{ option }">
                    <div class="row">
                      <ImageSelectItem class="col-12" :image="option" :match="matchImage ? matchImage.id : ''"/>
                    </div>
                  </template>
                  <span slot="noResult">未查询到该镜像</span>
                  <span slot="noOptions">暂无镜像可用</span>
                </multiselect>
              </div>

              <div class="mb-3">
                <label>数据集</label> 
                <multiselect
                  v-model="selectedDatasetsList"
                  :options="datasetsList"
                  :multiple="true"
                  @search-change="changeDatasetValueAction"
                  placeholder="选择数据集"
                  select-label="选择一个数据集"
                  selectedLabel="已选数据集"
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
                      <DatasetSelectItem class="col-12" :dataset="option"/>
                    </div>
                  </template>
                  <!-- <template slot="selection" slot-scope="{ values, isOpen }">
                    <span class="multiselect__single" v-if="values.length && !isOpen">
                      已选 {{ values.length }} 个数据集
                    </span>
                  </template> -->
                  <span slot="noResult">未查询到该数据集</span>
                  <span slot="noOptions">暂无数据集可用</span>
                </multiselect>

                <div class="row mt-2">
                  <div v-for="item in selectedDatasetsList" :key="item.id" class="col-xl-3 col-sm-4">
                    <div class="mb-3">
                      <SelectCard :item="item" @del="delDataset">
                        <template slot="content">
                          <div class="row">
                            <div class="col-2">
                              <i class="mdi mdi-cube-outline font-size-24 text-primary align-middle me-2"></i>
                            </div>
                            <div class="col-10">
                              <span>{{ item.name }}</span>
                              <p class="text-muted text-truncate mb-0">{{ item.desc }}</p>
                            </div>
                          </div>
                        </template>
                      </SelectCard>
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
                <button type="submit" class="btn btn-success me-2">创建</button>
                <button class="btn btn-secondary" @click="backContainersList">取消</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
    </LoaderContainer>
  </Layout>
</template>
