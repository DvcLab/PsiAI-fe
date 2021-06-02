<script>
import Dockerfile from './code';
import Minio from './minio.vue';

/**
 * Container Card Content component
 */

export default {
  components: { Dockerfile, Minio },
  props: {
    container: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      
    };
  },
};
</script>
<template>
  <!--
  <b-tabs content-class="p-3" nav-class="nav-tabs-custom">
    <b-tab title="dockerfile" active>
      <Dockerfile :file="container.docker_compose_config"/>
    </b-tab>
    <b-tab title="日志">
      暂无
    </b-tab>
    <b-tab title="资源">
      暂无
    </b-tab>
  </b-tabs>
  -->
  <div class="col-md-12">
    <div class="custom-tab">
      <b-tabs pills fill content-class="text-muted mt-4">
        <b-tab active class="border-0">
          <template v-slot:title>
            <span class="d-none d-sm-inline-block">Dockerfile</span>
          </template>
          <Dockerfile :file="container.docker_compose_config"/>
        </b-tab>
        <b-tab>
          <template v-slot:title>
            <span class="d-none d-sm-inline-block">日志</span>
          </template>
          <div class="card">
            <div class="card-body">
              <!--<h5 class="card-title mb-3">主机</h5>-->
              <div class="row">
                <div class="col-sm-12 col-md-2">
                  <p class="text-muted mb-2">暂无日志</p>
                </div>
              </div>
            </div>
          </div>
        </b-tab>
        <b-tab>
          <template v-slot:title>
            <span class="d-none d-sm-inline-block">资源</span>
          </template>
          <div class="card">
            <div class="card-body">
              <!--<h5 class="card-title mb-3">主机</h5>-->
              <div class="row">
                <div class="col-sm-12 col-md-2">
                  <p class="text-muted mb-2">暂无</p>
                </div>
              </div>
            </div>
          </div>
        </b-tab>
        <b-tab>
          <Minio />
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>