<script>
/**
 * Note component
 */
import { authComputed } from '@state/helpers'
export default {
  components: {  },
  filters: {
    numFilter (value) {

      const k = 10
      let i = Math.floor(Math.log(value) / Math.log(k))

      if(i < 3){
        return value
      }else if(i === 3){
        return (value / Math.pow(k, i)) + 'k'
      }else{
        return (value / Math.pow(k, i)).toPrecision(3) + 'w'
      }

    },
  },
  props: {

    note: {
      type: Object,
      default: () => {}
    }

  },
  data () {
    return {
      
    }
  },
  computed: {
    ...authComputed,
    // 用户名
    username () {
      return this.note.userId === this.currentUser.username ? '我' : this.note.nickname
    },
    // 文件类型
    noteType () {
      if (this.note.type === 'proj') {
        return '项目'
      } else if (this.note.type === 'paper') {
        return '文献'
      }else {
        return null
      }
    },
    // 笔记 Url
    noteUrl () {
      // 暂时放置静态 Url
      return '.'
    },
    // 用户个人信息 Url
    userDetailUrl () {
      // 暂时放置静态 Url
      return '/profile'
    },
    // 笔记对应的项目/文献 Url
    originDetailUrl () {
      // 暂时放置静态 Url
      return '.'
    }
  },
  methods: {
    // 跳转新页面笔记详情页
    toNoteDetailPage (url) {
      window.open(url, "_blank")
    },
    // 删笔记
    delNote () {
      console.log('delNote')
    }
  }
}
</script>

<template>

  <div class="note-list-item">

    <div class="row">
      <div class="col">
        <a :href="userDetailUrl">{{ username }}</a>
        <span class="time-text ml-2">{{ note.updateTime | moment("from", "now") }}</span>
      </div>
      <div class="col">
        <button type="button" aria-label="Close" class="close ml-auto mb-1" @click="delNote">×</button>
      </div>
    </div>

    <div class="overflow-2-text pointer" @click="toNoteDetailPage(noteUrl)">
      {{ note.detail }}
    </div>

    <div class="overflow-1-text">
      <span>
        <i class="uil uil-comment font-size-14"></i>
        {{ note.comment | numFilter }}
      </span>
      <span class=" ml-2">
        <i class="uil uil-star font-size-14"></i>
        {{ note.star | numFilter }}
      </span>
      <b-badge v-if="noteType" class="badge-soft-info ml-2"
        :class="{
          'badge-soft-success': `${ note.type }` === 'proj',
          'badge-soft-warning': `${ note.type }` === 'paper',
        }"
      >{{ noteType }}</b-badge>
      <a class="text-muted ml-2" :href="originDetailUrl">{{ note.title }}</a>
    </div>

    <div v-if="note.isInvalid" class="invalid-overlay"></div>

  </div> 
</template>
<style scoped>
.note-list-item {
  position: relative;
  border: 1px solid #f6f6f7;
  box-shadow: none;
  border-radius: 0.3rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
}

.detail-text {
  color: #b45f06;
}
</style>
