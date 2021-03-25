<script>
import Layout from "../../../layouts/main";
import appConfig from "@/app.config";
import VueSlideBar from "vue-slide-bar";
import Multiselect from "vue-multiselect";
import {
  required,
  // minValue,
  // maxValue,
  // numeric,
  // url,
} from "vuelidate/lib/validators";

/**
 * Create Container component
 */
export default {
  page: {
    title: "创建容器",
    meta: [{ name: "创建容器", content: appConfig.description }]
  },
  components: { Layout, VueSlideBar, Multiselect },
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
      gpu: false,
      projsList: [],
      proj: null,
      branch: '',
      datasetsList: new Map(),
      datasetUrl: null,
      datasetsUrls: new Set(),
      selectedDatasets: [],
      imagesList: [],
      image: null,
      submitted: false,
    };
  },
  validations: {
    proj: { required },
    branch: { required },
    datasets: { required },
    image: { required },
    cpus: { required },
    mem: { required },
    gpu: { required }
  },
  mounted() {
    this.getProjsList();
    this.getImagesList();
  },
  methods: {
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
    // 获取数据集信息
    getDatasetByUrl() {
      console.log('获取数据集信息')
      const vm = this;
      const url = vm.datasetUrl;
      if(url.length < 10) {
        return;
      }
      this.$request.get('datasets_info?url=' + url)
      .then((res) => {
        console.log(res)
        if(res.data.code && res.data.code === 0) {
          // 请求失败
          return;
        }
        // 请求成功
        // vm.datasetsUrls.add(url);
        vm.datasetsList.set(res.data.url, res.data);
        vm.$forceUpdate()
      })
      .catch((err) => {
        console.error(err)
      })
    },
    // 获取镜像列表
    getImagesList() {
      const vm = this;
      this.$request.get('images')
      .then((res) => {
        vm.imagesList = res.data.data;
      })
      .catch((err) => {
        console.err(err)
      })
    },
    nameWithDesc ({ name, desc }) {
      let descTmp = desc
      if(desc.length > 10) {
        descTmp = desc.slice(0,10);
        descTmp += '...'
      }
      return `${name} [${descTmp}]`
    },
    formSubmit(e) {
      console.log(e)
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();
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
    }
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
              <div class="mb-2">
                <label>项目</label>
                  <!-- <multiselect v-model="proj" :options="projsList" :custom-label="nameWithDesc" :searchable="true" placeholder="选择项目" label="name" track-by="name"></multiselect> -->
                  <div class="mb-2">
                    <multiselect 
                    v-model="$v.proj.$model" 
                    :options="projsList" 
                    :custom-label="nameWithDesc" 
                    :searchable="true" 
                    placeholder="选择项目" 
                    label="name" 
                    track-by="name"
                    >
                    </multiselect>
                    <div class="error" v-if="submitted && !$v.proj.required">必选项</div>
                  </div>

                  <div v-if="proj" class="row">
                    <div class="col-xl-3 col-sm-4">
                      <div class="mb-3">
                        <label class="card-radio-label mb-2">
                          <input
                            type="radio"
                            name="project"
                            class="card-radio-input"
                            checked
                          />
                          <div class="card-radio">
                            <div class="row">
                              <div class="col-2">
                                <i class="mdi mdi-archive-outline font-size-24 text-primary align-middle me-2"></i>
                              </div>
                              <div class="col-10">
                                <span>{{ proj.name }}</span>
                                <p class="text-muted text-truncate mb-0">{{ proj.desc }}</p>
                              </div>
                              
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

              </div>

              <div v-if="proj" class="mb-2">
                <label>项目分支</label>
                <!-- <multiselect v-model="$v.branch.$model" :options="proj.branches" placeholder="选择项目分支" ></multiselect> -->
                <div class="error" v-if="submitted && !$v.branch.required">必选项</div>
                <div v-if="proj.branches" class="row">
                  <div v-for="item in proj.branches" :key="item" class="col-xl-3 col-sm-4">
                    <div class="mb-3">
                      <label class="card-radio-label mb-2">
                        <input
                          type="radio"
                          name="branch"
                          class="card-radio-input"
                          checked
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
                </div>
              </div>

              <div class="mb-2">
                <label>镜像</label>
                <!-- <multiselect v-model="$v.image.$model" :options="imagesList" :custom-label="nameWithDesc" placeholder="选择镜像" label="name" track-by="name"></multiselect> -->
                <div class="error" v-if="submitted && !$v.image.required">必选项</div>
                <div v-if="imagesList" class="row">
                  <div v-for="item in imagesList" :key="item.name" class="col-xl-3 col-sm-4">
                    <div class="mb-3">
                      <label class="card-radio-label mb-2">
                        <input
                          type="radio"
                          name="image"
                          class="card-radio-input"
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
                </div>
              </div>

              <div class="mb-3">
                <label>数据集</label>
                <div class="mb-2">
                  <input 
                    type="text"
                    class="form-control"
                    v-model="datasetUrl"
                    @change="getDatasetByUrl"
                  />
                </div>
                <div class="row">
                  <div v-for="(item, key) in datasetsList" :key="key" class="col-xl-3 col-sm-4">
                    <div class="mb-3">
                      <label class="card-radio-label mb-2">
                        <input
                          type="checkbox"
                          name="datasets"
                          class="card-radio-input"
                          v-model="selectedDatasets"
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
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mb-2">
                <label>CPU</label>
                <vue-slide-bar class="mx-3" v-model="cpus" :data="cpuData.data" :range="cpuData.range" />
              </div>

              <div class="mb-2">
                <label>MEM</label>
                <vue-slide-bar class="mx-3" v-model="mem" :data="memData.data" :range="memData.range" />
              </div>

              <div class="mb-2">
                <label>GPU</label>
                <div class="row">
                  <div class="col-xl-2 col-sm-4">
                    <label class="card-radio-label mb-3">
                      <input
                        v-model="gpu"
                        type="checkbox"
                        name="pay-method"
                        id="pay-methodoption1"
                        class="card-radio-input"
                      />
                      <div class="card-radio">
                        <i
                          class="bx bx-chip font-size-24 text-primary align-middle me-2"
                        ></i>
                        <span>Default GPU</span>
                      </div>
                    </label>
                  </div>
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