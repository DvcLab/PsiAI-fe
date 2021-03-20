<script>
import Layout from "../../../layouts/main";
import appConfig from "@/app.config";
import VueSlideBar from "vue-slide-bar";
import Multiselect from "vue-multiselect";

/**
 * Starter component
 */
export default {
  page: {
    title: "创建容器",
    meta: [{ name: "创建容器", content: appConfig.description }]
  },
  components: { Layout, VueSlideBar, Multiselect },
  data() {
    return {
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
      memData: {
        value: 1,
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
      needGPU: false,
      projsList: [],
      proj: null,
      branch: '',
      datasetsList: [],
      dataset: null,
      imagesList: [],
      image: null,
    };
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
        vm.projsList = res.data;
      })
      .catch((err) => {
        console.err(err)
      })
    },
    // 获取数据集列表
    getDatasetsList() {
      const vm = this;
      this.$request.get('datasets')
      .then((res) => {
        vm.datasetsList = res.data;
      })
      .catch((err) => {
        console.err(err)
      })
    },
    // 获取镜像列表
    getImagesList() {
      const vm = this;
      this.$request.get('images')
      .then((res) => {
        vm.imagesList = res.data;
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
            <form>
              <div class="mb-2">
                <label>项目</label>
                  <multiselect v-model="proj" :options="projsList" :custom-label="nameWithDesc" :searchable="true" placeholder="选择项目" label="name" track-by="name"></multiselect>
              </div>

              <div v-if="proj" class="mb-2">
                <label>项目分支</label>
                  <multiselect v-model="branch" :options="proj.branches" placeholder="选择项目分支" ></multiselect>
              </div>

              <div class="mb-2">
                <label>镜像</label>
                <multiselect v-model="image" :options="imagesList" :custom-label="nameWithDesc" placeholder="选择镜像" label="name" track-by="name"></multiselect>
              </div>

              <div class="mb-3">
                <label>数据集</label>
                <input type="text" class="form-control" />
              </div>

              <div class="mb-2">
                <label>CPU</label>
                <vue-slide-bar class="mx-3" :data="cpuData.data" :range="cpuData.range" />
              </div>

              <div class="mb-2">
                <label>MEM</label>
                <vue-slide-bar class="mx-3" :data="memData.data" :range="memData.range" />
              </div>

              <div class="mb-2">
                <label>GPU</label>
                <div class="row">
                  <div class="col-xl-2 col-sm-4">
                    <label class="card-radio-label mb-3">
                      <input
                        v-model="needGPU"
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
                <button type="button" class="btn btn-success">创建容器</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>