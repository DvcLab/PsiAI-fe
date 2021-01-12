<script>
import Users from '@components/psi/contributors'
/**
 * Container component
 */
export default {
  components: { Users },
  props: {

    container: {
      type: Object,
      default: () => {}
    }

  },
  data() {
    return {
      
    }
  },
  computed:{
    // 使用者，最多显示 5 位
    users () {
      return this.container.users.length > 5 ? this.container.users.slice(0, 5) : this.container.users
    },
    // 容器运行状态
    state () {
      return this.container.runningDuration > 0 
    },

  }
}
</script>

<template>
  <div class="container-list-item">
    <div class="row justify-content-between">

      <div class="col-4 align-self-center">
        <a href="javascript:void(0);" class="text-dark font-weight-bold text-monospace title">
        {{ container.title }}
        </a>
        <b-badge class="badge-soft-info ml-2">{{ container.type }}</b-badge>
        <span class=" ml-2 detail-text">{{ container.detail }}</span>
      </div>

      <div class="col-6 align-self-center">
        <div class="float-right">
          <span>
            创建于 
            <span class="time-text">{{ container.createdTime | moment("YY/MM/DD HH:mm:ss") }}</span>
          </span>
          <span class="ml-2">
            累计运行 
            <span class="time-text">{{ (container.updateTime - container.createdTime) | duration('humanize') }}</span>
          </span>
          <span v-if="container.state === 'running'" class="ml-2">
            <i class="uil uil-circle mr-1 state-text state-running-text"></i>运行中(<span class="time-text">{{ container.runningDuration | duration('humanize') }}</span>)
          </span>
          <span v-else-if="container.state === 'keeping'" class="ml-2">
            <i class="uil uil-circle mr-1 state-text"></i>持久化
          </span>
          <span v-else-if="container.state === 'stopping'" class="ml-2">
            <i class="uil uil-circle mr-1 state-text state-stopping-text"></i>冻结
          </span>
        </div>
      </div>
      
    </div>

    <div class="row">

      <span class="col align-self-center">项目 
        <a href="" class="proj-text">{{ container.proj }}</a>
      </span>
      <span class="col align-self-center">工作分支 
        <span class="proj-text">{{ container.branch }}</span>
      </span>
      <div class="col align-self-center ">
        <Users class="float-right" :users="users"/>
      </div>
      
    </div>
    <div v-if="container.state === 'stopping'" class="overlay"></div>
  </div> 
</template>
<style scoped>
.container-list-item {
  position: relative;
  /*display: flex;
  flex-direction: row;
  align-items: center;*/
  /*height: 6rem;*/
  border: 1px solid #f6f6f7;
  box-shadow: none;
  border-radius: 0.3rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
}

.title {
  font-size: 1rem;
}

.detail-text {
  color: #b45f06;
}

.time-text {
  color: #5d9048;
}

.proj-text {
  color: #2e49f7;
}

.state-text {
  font-size: 0.6rem;
}

.state-running-text {
  color: #2dc28c;
}

.state-stopping-text {
  color: #ff5c75;
}

.overflow-text {
  overflow:hidden;
  text-overflow:ellipsis;
  /*white-space:nowrap;*/
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.other-info {
  height: 5rem;
  text-align: right;
}

.update-time {
  color: green;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.05);
  z-index: 2;
  border-radius: 0.3rem;
}
</style>
