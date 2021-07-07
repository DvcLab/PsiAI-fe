<script>
import appConfig from "@/app.config";
// import queryString from 'query-string';
import PageHeader from "@/components/page-header";
import { required } from "vuelidate/lib/validators";
import Swal from "sweetalert2";

/**
 * Create Hosts component
 */
export default {
  page: {
    title: "创建镜像",
    meta: [{ name: "创建镜像", content: appConfig.description }]
  },
  components: { PageHeader },
  data() {
    return {
      title: "创建镜像",
      linkItems: [
        {
          text: "镜像列表",
          to: { path: '/images' },
        },
        {
          text: "创建镜像",
          active: true,
        },
      ],
      loadingState: false,
      submitted: false,
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
      this.loadingState = true;
      this.submitted = true;
      this.$v.$touch();
      if (!this.$v.$invalid) {
        // 填写内容无误提交远程
        // let query = queryString.stringify({
        //     ip: this.ip,
        //     port: this.port,
        //     username: this.username,
        //     private_key: this.privateKey,
        //     gpu_enabled: this.hasGPU,
        //   })
        this.$request.put('hosts',{
          "ip": this.ip,
          "port": this.port,
          "username": this.username,
          "private_key": this.privateKey,
          "gpu_enabled": this.hasGPU,
        })
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
          <div class="card-body" style="padding: 2rem 3rem">
            <!--
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
            -->
            <b><h3>DvcLAB自定义镜像</h3></b>
            <hr>
            <b><h4>一、基础镜像服务构成</h4></b>
            <ol style="line-height:2 ;font-size: 1rem;">
              <li>s3fs数据集挂载服务</li>
              <li>keycloak用户认证</li>
              <li>git项目管理</li>
              <li>frp端口映射</li>
              <li>kafka消息服务</li>
              <li>JupyterLab及其插件</li>
              <li>AI框架</li>
            </ol>
            <b><h4>二、自定义镜像构建</h4></b>
            <ol style="line-height:2 ;font-size: 1rem;">
              <li>
                首先通过如下命令进行docker仓库的认证，使用Keycloak的用户名、密码登录
                <br>
                <code>docker login registry.dvclab.com</code>
              </li>
              <li>
                通过如下命令拉取DvcLAB仓库中的基础AI镜像
                <br>
                <code>docker pull ${image}</code>
              </li>
              <li>
                基于DvcLAB提供的基础AI镜像，通过如下命令启动一个容器
                <br>
                <code>docker run -it --name ${container_name} ${image} /bin/bash</code>
              </li>
              <li>
                通过如下命令进入容器环境，并进行自定义服务的安装、修改
                <br>
                <code>docker exec -it ${container_name} /bin/bash</code>
              </li>
              <li>镜像修改完毕后，按Ctrl+P+Q退出容器环境</li>
              <li>
                通过如下命令将修改后的容器打包成新的镜像
                <br>
                <code>docker commit ${container_name} registry.dvclab.com/${new_imag_ename}:${version}</code>
                <br>
                <b>注意：</b>生成的新镜像的名称要是 registry.dvclab.com/*** 格式的
              </li>
              <li>通过如下命令将打包后的新镜像上传到DvcLAB的docker仓库</li>
            </ol>
            <a href="https://github.com/DvcLAB/JupyterLab-Inst/blob/main/DvcLAB%E8%87%AA%E5%AE%9A%E4%B9%89%E9%95%9C%E5%83%8F%E7%94%9F%E6%88%90%E6%96%B9%E6%B3%95.md" TEXT-DECORATION:none style="font-size:0.75rem">点击此处查看原文</a>
          </div>
        </div>
      </div>
    </div>
  </LoaderContainer>
</div>
</template>
