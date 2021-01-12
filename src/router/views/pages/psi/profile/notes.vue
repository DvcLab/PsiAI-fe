<script>
/**
 * Notes
 */
import Search from '@components/psi/search'
import NoteItem from '@components/psi/note-item'

export default {
  components: {
    NoteItem,
    Search
  },
  props: {
    notes: {
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
      return this.notes.length
    },
    starRows () {
      return this.stars.length
    }
  }
}
</script>

<template>
  <div>
    <Search placeholder="搜索笔记..." />
    <b-tabs>
      <b-tab title="我的" active>
        <NoteItem v-for="note in notes" :key="note.id" :note="note" />
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
        <NoteItem v-for="note in stars" :key="note.id" :note="note" />
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