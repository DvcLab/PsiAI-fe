<script>
/**
 * Containers
 */
import Search from '@components/psi/search'
import ContainerItem from '@components/psi/container-item'

export default {
  components: {
    ContainerItem,
    Search
  },
  props: {
    containers: {
      type: Array,
      default: () => [],
    },
    stars: {
      type: Array,
      default: () => [],
    },
  },
  data () {
    return {
      currentPage: 1,
      perPage: 5,
    }
  },
  computed: {
    rows () {
      return this.containers.length
    },
    starRows () {
      return this.stars.length
    }
  }
}
</script>

<template>
  <div>
    <Search placeholder="搜索容器..." />
    <b-tabs>
      <b-tab title="我的" active>
        <ContainerItem v-for="container in containers" :key="container.title" :container="container" />
        <div class="row">
          <div class="col">
            <div
              class="dataTables_paginate paging_simple_numbers float-right"
            >
              <ul class="pagination pagination-rounded mb-0">
                <b-pagination
                  v-model="currentPage"
                  :total-rows="rows"
                  :per-page="perPage"
                ></b-pagination>
              </ul>
            </div>
          </div>
        </div>
      </b-tab>
      <b-tab title="与我共享">
        <ContainerItem v-for="container in stars" :key="container.title" :container="container" />
        <div class="row">
          <div class="col">
            <div
              class="dataTables_paginate paging_simple_numbers float-right"
            >
              <ul class="pagination pagination-rounded mb-0">
                <b-pagination
                  v-model="currentPage"
                  :total-rows="starRows"
                  :per-page="perPage"
                ></b-pagination>
              </ul>
            </div>
          </div>
        </div>
      </b-tab>
    </b-tabs>
  </div>
</template>