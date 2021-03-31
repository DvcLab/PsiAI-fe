<script>
import SockJS from  'sockjs-client';
import Stomp from 'stompjs';
import Swal from "sweetalert2";

export default {
    props: {
        container: {
            type: Object,
            default: () => {}
        },
    },
    data(){
        return {
            delLoading: false,
            stompClient: '',
            timer: '',
        }
    },
    computed:{
        status() {
            const status = this.container.status;
            switch(status){
                case 'New':
                    return {
                        text: 'New',
                        theme: 'bg-primary'
                    };
                case 'Init':
                    return {
                        text: 'Init',
                        theme: 'bg-info'
                    };
                case 'Repo_Clone_Success':
                    return {
                        text: 'Repo_Clone_Success',
                        theme: 'bg-success'
                    };
                case 'Pip_Install_Success':
                    return {
                        text: 'Pip_Install_Success',
                        theme: 'bg-success'
                    };
                case 'Dataset_Load_Success':
                    return {
                        text: 'Dataset_Load_Success',
                        theme: 'bg-success'
                    };
                case 'Jupyterlab_Start_Success':
                    return {
                        text: 'Jupyterlab_Start_Success',
                        theme: 'bg-success'
                    };
                case 'Failure':
                    return {
                        text: 'Failure',
                        theme: 'bg-danger'
                    };
                case 'Deleted':
                    return {
                        text: 'Deleted',
                        theme: 'bg-secondary'
                    };
                default:
                    return {
                        text: 'NULL',
                        theme: 'bg-secondary'
                    }
            }
        },
        cpuProgress() {
            let cpuUsage = this.container.cpu_usage;
            if(cpuUsage >= 30 && cpuUsage < 60) {
                return 'warning'
            } else if (cpuUsage >= 60) {
                return 'danger'
            } else {
                return 'success'
            }
        },
        memProgress() {
            let memUsage = this.container.mem_usage;
            if(memUsage >= 30 && memUsage < 60) {
                return 'warning'
            } else if (memUsage >= 60) {
                return 'danger'
            } else {
                return 'success'
            }
        },
        configFile() {
            let config = this.container.docker_compose_config
            let blob = new Blob([config], {type : 'application/x-yaml'});
            return URL.createObjectURL(blob);
        },
        isDel() {
            if(this.container.status === 'Deleted') return true;
            return false;
        }
    },
    mounted() {
        // this.initWebSocket();
    },
    beforeDestroy() {
        // 页面离开时断开连接,清除定时器
        // this.disconnect();
        // clearInterval(this.timer);
    },
    methods: {
        // 打开JupyterLab页面
        openLab(href) {
            window.open(href, "_blank")
        },
        // 删除容器 
        delContainer() {
            const _this = this;
            this.delLoading = true;
            let id = this.container.id;
            this.$request.delete('containers/' + id)
            .then((res) => res.data)
            .then((res) => {
                if(res.code === 1) {
                    this.successMsg();
                } else {
                    this.errorMsg();
                }
                _this.delLoading = false;
            })
            .catch((err) => {
                _this.delLoading = false;
                console.err(err)
            })
        },
        initWebSocket() {
            this.connection();
            let that= this;
            // 断开重连机制,尝试发送消息,捕获异常发生时重连
            this.timer = setInterval(() => {
                try {
                    that.stompClient.send("test");
                } catch (err) {
                    console.log("断线了: " + err);
                    that.connection();
                }
            }, 5000);
        },  
        connection() {
            const token = this.$keycloak.token;
            const wsurl = process.env.VUE_APP_WS_URL;
            // 建立连接对象
            let socket = new SockJS(wsurl);
            // 获取STOMP子协议的客户端对象
            this.stompClient = Stomp.over(socket);
            // 定义客户端的认证信息,按需求配置
            let headers = {
                Authorization: 'Bearer ' + token 
            }
            // 向服务器发起websocket连接
            this.stompClient.connect(headers,() => {
                this.stompClient.subscribe('_containers?host_id=' + this.container.id, (msg) => { // 订阅服务端提供的某个topic
                    console.log('广播成功')
                    console.log(msg);  // msg.body存放的是服务端发送给我们的信息
                }, headers);
                // this.stompClient.send("/app/chat.addUser",
                //     headers,
                //     JSON.stringify({sender: '',chatType: 'JOIN'}),
                // )   //用户加入接口
            }, (err) => {
                // 连接发生错误时的处理函数
                console.log('失败')
                console.log(err);
            });
        },    //连接 后台
        disconnect() {
            if (this.stompClient) {
                this.stompClient.disconnect();
            }
        },  // 断开连接
        // 容器创建成功提醒
        successMsg() {
            Swal.fire(
                "容器删除成功!",
                "",
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
                "容器删除失败!",
                "",
                "error"
            ).then((res) => {
                if(res.isConfirmed) {
                    this.$router.push({path: '/containers'})
                }
            })
        },
    }
}
</script>

<template>
    <div class="list-item-con">
        <div class="row align-items-center">
            <div class="col-12 col-md-4 mb-2">
                <h5 class="d-block text-truncate text-dark mb-0 list-item-name">{{ container.id }}</h5>
            </div>
            <div class="col-12 col-md-4 mb-2">
                <span class="d-inline-block text-truncate">
                    <i class="bx bx-user me-1"></i>
                    {{ container.user.username }}
                </span>
            </div>
            <div class="col-12 col-md-4 mb-2">
                <div class="float-end d-none d-md-block">
                    <span class="badge me-2"
                        :class="status.theme"
                    >
                        {{ status.text }}
                    </span>
                    <span class="text-success">{{ container.update_time | moment('YYYY-MM-DD HH:mm:ss') }}</span>
                </div>
                <div class="float-start d-md-none">
                    <span class="badge me-2"
                        :class="status.theme"
                    >
                        {{ status.text }}
                    </span>
                    <span class="text-success">{{ container.update_time | moment('YYYY-MM-DD HH:mm:ss') }}</span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6 col-md-2 mb-2">
                <span class="badge rounded-pill bg-primary me-2">
                    <i class="bx bx-chip me-1"></i>内核
                </span> {{ container.cpus }}
            </div>
            <div class="col-6 col-md-2 mb-2">
                <span class="badge rounded-pill bg-primary me-2">
                    <i class="bx bx-grid-alt me-1"></i>内存
                </span> {{ container.mem }}GB
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-4 mb-2">
                <p class="mb-0">CPU使用</p>
                <b-progress :value="container.cpu_usage" :max="100" :variant="cpuProgress"></b-progress>
            </div>
            <div class="col-12 col-md-4 mb-2">
                <p class="mb-0">内存使用</p>
                <b-progress :value="container.mem_usage" :max="100" :variant="memProgress"></b-progress>
            </div>
            <div class="col-12 col-md-4">
                <div class="float-end">
                    <ul v-if="!isDel" class="list-inline mb-0 font-size-20">
                        <li class="list-inline-item">
                            <a
                                :href="configFile"
                                class="text-primary p-1"
                                download="docker-compose-config"
                            >
                                <i class="bx bx-cloud-download"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a
                                :href="container.jupyter_url"
                                class="text-primary p-1"
                            >
                                <i class="bx bx-code-block"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a
                                class="text-danger p-1"
                                href="javascript:void(0)" 
                                @click="delContainer"
                            >
                                <i class="bx bxs-trash"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-btn {
    font-size: 1.2rem;
}
</style>