<script>
/**
 * Papers
 */
import Search from '@components/psi/search'
import PaperItem from '@components/psi/paper-item'

export default {
  components: {
    Search,
    PaperItem
  },
  props: {
    papers: {
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
      return this.papers.length
    },
    starRows () {
      return this.papers.length
    }
  }
}
</script>

<template>
  <div>
    <Search placeholder="搜索已读文献..." />
    <b-tabs>
      <b-tab title="收藏" active>
        <NoteItem v-for="paper in papers" :key="paper.id" :paper="paper" />
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
      <b-tab title="已读">
        <NoteItem v-for="paper in papers" :key="paper.id" :paper="paper" />
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