<script>
import Multiselect from "vue-multiselect";
// import Swal from "sweetalert2";
import LoaderContainer from "@/components/DvcAI/loader-container";
import Avatar from "@/components/DvcAI/utility/avatar";
// import { EventBus } from "@/utils/event-bus";
// import { mapState, mapActions } from "vuex";
import mixin from '../mixins';
// import WSmixin from '../ws-mixin';

export default {
  mixins: [mixin],
  props: {
    container: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    Multiselect,
    LoaderContainer,
    Avatar
  },
  data() {
    return {
    };
  },
  
};
</script>

<template>
  <LoaderContainer :loading="loadingState">
    <div class="list-item-con" @click="toContainerDetail">
      <div class="row d-flex align-items-center">

        <div class="col-12 col-md-6 mb-2">
          <div class="row d-flex align-items-center">

            <div class="col-12 col-md-4">
              <h5 class="d-block text-truncate text-dark mb-0 list-item-name">
                <i class="bx bx-cube me-1"></i>
                <span class="me-2"> {{ newInfo.container_name }}</span>
                <span
                  v-if="!canSelectLocation"
                  class="badge me-1"
                  :class="`bg-${ newInfo.user_host ? 'primary' : 'info' }`"
                >
                  {{ newInfo.user_host ? '本地' : '远程' }}
                </span>
                <span class="d-md-none badge" :class="status.theme">
                  <span v-if="newInfo.status === 'Running' && newInfo.alive_time">
                    已运行 {{ newInfo.alive_time | duration('humanize') }}
                  </span>
                  <span v-else>
                    {{ status.text }}
                  </span>
                </span>
              </h5>
            </div>

            <div class="col-12 col-md-4">
              <span
                v-if="image"
                class="d-block text-truncate mb-0"
              >
                <i class="bx bx-layer me-1"></i>
                {{ image }}
              </span>
            </div>

            <div class="col-12 col-md-4 d-none d-md-block">
              <div class="d-flex align-items-center">
                <Avatar size="xxs" :src="container.user.avatar_url" :user-name="container.user.username" class="avatar me-2"/>
                <span class="d-inline-block text-truncate username">
                  {{ container.user.username }}
                </span>
              </div>
            </div>

            <div class="col-12 d-md-none">
              <span class="d-block text-truncate mb-0">
                <i class="bx bx-user me-1"></i>
                {{ container.user.username }}
              </span>
            </div>

          </div>
          
        </div>

        <div class="col-12 col-md-6 mb-2 d-none d-md-block">
          <div class="float-start float-md-end text-truncate">
            <span class="badge me-2" :class="status.theme">
              <span v-if="newInfo.status === 'Running' && newInfo.alive_time">
                已运行 {{ newInfo.alive_time | duration('humanize') }}
              </span>
              <span v-else>
                {{ status.text }}
              </span>
            </span>
            
            <span class="text-success">
              {{ updateTime | moment("YYYY-MM-DD HH:mm:ss") }}
            </span>
          </div>
        </div>

      </div>

      <div class="row">

        <div class="col-6 col-md-2 mb-2">
          <span class="badge rounded-pill bg-primary me-2">
            <i class="bx bx-chip me-1"></i>内核
          </span>
          {{ container.cpus }}
        </div>

        <div class="col-6 col-md-2 mb-2">
          <span class="badge rounded-pill bg-primary me-2">
            <i class="bx bx-grid-alt me-1"></i>内存
          </span>
          {{ container.mem }}GB
        </div>

      </div>
      <div class="row">

        <div class="col-12 col-md-2 mb-2">
          <p class="mb-0">CPU使用</p>
          <b-progress
            :value="cpu.value"
            :max="100"
            :variant="cpu.variant"
          ></b-progress>
        </div>

        <div class="col-12 col-md-2 mb-2">
          <p class="mb-0">内存使用</p>
          <b-progress
            :value="mem.value"
            :max="100"
            :variant="mem.variant"
          ></b-progress>
        </div>
        
        <div class="col-12 col-md-8">

          <div v-if="!isDel" class="float-end w-100 container-btn-group">
            
            <b-form-radio-group
              v-if="canSelectLocation && isMine"
              id="location-radios"
              class="text-truncate check-group btn-item mb-0"
              size="sm"
              v-model="containerRunningSelected"
              :options="locationOptions"
              buttons
              button-variant="outline-primary"
              name="local-cloud-radios"
            ></b-form-radio-group>
          
            <a
              v-if="canSelectLocation && isLocation && isMine"
              :href="configFile"
              class="btn btn-outline-primary btn-sm btn-item"
              download="docker-compose-config"
            >
            <i class="bx bx-cloud-download font-size-16 align-middle me-1"></i>
            本地运行
            </a>

            <multiselect
              class="host-select d-inline-block btn-item"
              v-if="!isLocation && isAdmin && canSelectLocation && isMine"
              v-model="selectedHost"
              :options="hosts"
              @search-change="changeHostsAction"
              track-by="ip"
              label="ip"
              placeholder="选择主机"
              select-label="选择主机"
              selectedLabel="已选"
              deselectLabel="点击取消"
            >
              <template slot="singleLabel" slot-scope="{ option }" class="i-text-middle">
                <div class="text-truncate i-text-middle">
                  <i class="bx bx-laptop me-1"></i>
                  {{ option.ip }}
                </div>
              </template>
              <span slot="noResult">未搜索到相关主机</span>
            </multiselect>

            <b-button v-if="canSelectLocation && !isLocation && isMine" class="text-truncate i-text-middle btn-item" variant="outline-primary" size="sm" @click="runInCloud">
              <i class="bx bx bx-cloud-upload font-size-16 align-middle me-1"></i>
              云端运行
            </b-button>

            <a
              v-if="canSelectCloudRunning"
              :href="jupyterUrl"
              class="btn btn-outline-primary btn-sm btn-item"
              download="docker-compose-config"
              target="_blank"
            >
              <i class="bx bx-code-block font-size-16 align-middle me-1"></i>
              JupyterLab
            </a>

            <b-button v-if="canSelectCloudRunning && !isUserHost" class="text-truncate i-text-middle btn-item" variant="outline-primary" size="sm" @click="pauseContainerMsg">
              <i class="bx bx-pause font-size-16 align-middle me-1"></i>
              暂停
            </b-button>

            <b-button v-if="isRestartShow && !isUserHost" class="text-truncate i-text-middle btn-item" variant="outline-primary" size="sm" @click="restart">
              <i class="bx bx-revision font-size-16 align-middle me-1"></i>
              重启
            </b-button>

            <b-button v-if="!canSelectLocation" class="text-truncate i-text-middle btn-item" variant="outline-danger" size="sm" @click="delContainerMsg">
              <i class="bx bx-trash font-size-16 align-middle me-1"></i>
              删除
            </b-button>

          </div>
        </div>
      </div>
      <div class="row d-md-none">
        <div class="col-12">
          <span class="text-success">
            更新于 {{ updateTime | moment("YYYY-MM-DD HH:mm:ss") }}
          </span>
        </div>
      </div>
    </div>
  </LoaderContainer>
</template>
<style scoped>
.i-text-middle {
  display: inline-flex;
  align-items: center;
}
.container-btn-group {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.container-btn-group .btn-item {
  margin-right: 0.5rem;
}
.container-btn-group .btn-item:last-child{
  margin-right: 0;
}
.select-custom {
  width: 30%;
  padding: 0.3rem 1.75rem 0.3rem 0.75rem;
}
</style>