<script>
/**
 * Datasets
 */
import Search from '@components/psi/search'
import DatasetItem from '@components/psi/dataset-item'

export default {
  components: {
    DatasetItem,
    Search
  },
  props: {
    datasets: {
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
      currentPage: 1,          // 当前页
      perPage: 5,              // 每一页显示数量
      filterOption: '综合',    // 筛选项
      filterOptions: [{        // 筛选可选项
          url: '#',
          content:'相关度'
        }, {
          url: '#',
          content:'关注数'
        }, {
          url: '#',
          content:'收藏数'
        }, {
          url: '#',
          content:'点赞数'
        }, {
          url: '#',
          content:'最近更新'
        }, {
          url: '#',
          content:'综合'
        }]
    }
  },
  computed: {
    // 用户总数据集数
    rows () {
      return this.datasets.length
    },
    // 用户总收藏数据集数
    starRows () {
      return this.stars.length
    }
  }
}
</script>

<template>
  <div>

    <Search placeholder="搜索数据集..." />

    <b-tabs nav-class="custom-nav">

      <b-tab title="我的" active>
        <DatasetItem v-for="dataset in datasets" :key="dataset.title" :dataset="dataset" />
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

      <b-tab title="收藏">
        <DatasetItem v-for="dataset in stars" :key="dataset.title" :dataset="dataset" />
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

      <template v-slot:tabs-end>
        <b-dropdown class="custom-dropdown" right variant="link" toggle-class="text-decoration-none">
          <template slot="button-content">
            {{ filterOption }}
            <i class="uil uil-angle-down"></i>
          </template>
          <b-dropdown-item v-for="option in filterOptions" :key="option.content" :href="option.url" @click="filterOption = option.content">
            {{ option.content }}
          </b-dropdown-item>
        </b-dropdown>
      </template>

    </b-tabs>
  </div>
</template>
<style>
.custom-nav {
  position: relative;
}

.custom-dropdown {
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
