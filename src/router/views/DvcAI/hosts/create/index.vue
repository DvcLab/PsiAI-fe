<script>
import appConfig from "@/app.config";
// import VueSlideBar from "vue-slide-bar";
// import Multiselect from "vue-multiselect";
import queryString from 'query-string';
import PageHeader from "@/components/page-header";
// import ProjSelectItem from "@/components/DvcAI/proj-select-item";
// import ImageSelectItem from "@/components/DvcAI/image-select-item";
// import DatasetSelectItem from "@/components/DvcAI/dataset-select-item";
// import SelectCard from "@/components/DvcAI/select-card";
import LoaderContainer from "@/components/DvcAI/loader-container";
import { required } from "vuelidate/lib/validators";
import Swal from "sweetalert2";
// import { mapActions } from "vuex";

/**
 * Create Hosts component
 */
export default {
  page: {
    title: "创建主机",
    meta: [{ name: "创建主机", content: appConfig.description }]
  },
  components: { PageHeader, LoaderContainer },
  data() {
    return {
      title: "创建主机",
      linkItems: [
        {
          text: "主机列表",
          to: { path: '/hosts' },
        },
        {
          text: "创建主机",
          active: true,
        },
      ],
      loadingState: false,
      ip:'',
      port: '',
      username: '',
      privateKey: '',
      hasGPU: false
    };
  },
  computed: {
  },
  validations: {
    ip: { required },
    port: { required },
    username: { required },
    privateKey: { required },
    hasGPU: { required },
  },

  methods: {
    

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
            ip: this.ip,
            port: this.port,
            username: this.username,
            private_key: this.privateKey,
            gpu_enabled: this.hasGPU,
          })
        _this.$request.put('hosts?'+query)
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
      } else {
        this.loadingState = false;
      }
    },

    // 返回主机列表
    backHostsList() {
      this.$router.push({path: '/hosts'})
    },

    // 主机创建成功提醒
    successMsg() {
      Swal.fire(
        "主机创建成功!",
        "点击按钮返回主机列表",
        "success"
      ).then((res) => {
        if(res.isConfirmed) {
          this.loadingState = false;
          this.backHostsList();
        }
      })
    },

    // 主机创建失败提醒
    errorMsg() {
      Swal.fire(
        "主机创建失败!",
        "点击按钮返回主机列表",
        "error"
      ).then((res) => {
        if(res.isConfirmed) {
          this.loadingState = false;
          this.backHostsList();
        }
      })
    },

  }
};
</script>
<template>
<div>
  <PageHeader :title="title" :items="linkItems" />
    <LoaderContainer :loading="loadingState">
    <div class="row">

      <div class="col-lg-12">

        <div class="card">
          <div class="card-body">
            
            <form @submit.prevent="formSubmit">

              <div class="mb-3">
                <label class="xrequired me-1">IP</label>
                <span class="error" v-if="submitted && !$v.ip.required">（必选项）</span>
                <input
                  v-model="ip"
                  type="text"
                  class="form-control"
                  placeholder="请输入IP地址..."
                  name="ip"
                  :class="{
                    'is-invalid': submitted && !$v.ip.required,
                  }"
                />
              </div>
              <div class="mb-3">
                <label class="xrequired me-1">端口号</label>
                <span class="error" v-if="submitted && !$v.port.required">（必选项）</span>
                <input
                  v-model="port"
                  type="text"
                  class="form-control"
                  placeholder="请输入端口号..."
                  name="port"
                  :class="{
                    'is-invalid': submitted && !$v.port.required,
                  }"
                />
              </div>
              <div class="mb-3">
                <label class="xrequired me-1">用户名</label>
                <span class="error" v-if="submitted && !$v.username.required">（必选项）</span>
                <input
                  v-model="username"
                  type="text"
                  class="form-control"
                  placeholder="请输入登录用户名..."
                  name="username"
                  :class="{
                    'is-invalid': submitted && !$v.username.required,
                  }"
                />
              </div>
              <div class="mb-3">
                <label class="xrequired me-1">私钥</label>
                <span class="error" v-if="submitted && !$v.privateKey.required">（必选项）</span>
                <textarea
                    v-model="privateKey"
                    class="form-control"
                    name="privateKey"
                    placeholder="请输入私钥..."
                    :class="{
                      'is-invalid': submitted && !$v.ip.required,
                    }"
                    rows="5"
                  ></textarea>
              </div>
              <div class="mb-2">
                <label>GPU</label>
                <div class="form-check form-switch mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="hasGPU"
                  />
                  <span>
                    {{ hasGPU ? '有GPU' : '无GPU' }}
                  </span>
                </div>
              </div>

              <div class="text-center mt-4">
                <button type="submit" class="btn btn-success me-2" :disabled="$v.$invalid">添加</button>
                <button class="btn btn-secondary" @click="backHostsList">取消</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </LoaderContainer>
</div>
</template>
