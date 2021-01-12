<script>
import Users from '@components/psi/contributors'
/**
 * Project component
 */
export default {
  components: { Users },
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

    project: {
      type: Object,
      default: () => {}
    }

  },
  data() {
    return {
      
    }
  },
  computed:{
    // 贡献者，最多显示 5 位
    users () {
      return this.project.users.length > 5 ? this.project.users.slice(0, 5) : this.project.users
    },
    // 缩略图
    thumbnail () {
      return this.project.imgUrl ? this.project.imgUrl : require('@assets/images/projects/project-1.jpg')
    },
    // 用户个人信息 Url
    userDetailUrl () {
      // 暂时放置静态 Url
      return '/profile'
    },
    // 数据集 Url
    projectUrl () {
      // 暂时放置静态 Url
      return '.'
    },
  },
  methods: {
    // 跳转新页面数据集详情页
    toDatasetDetailPage (url) {
      window.open(url, "_blank")
    },
  }
}
</script>

<template>

  <div class="proj-list-item">

    <div class="row align-items-center">

      <div class="col-auto d-none d-md-block">
        <img
          :src="thumbnail"
          class="thumbnail pointer"
          alt="project-image"
          @click="toDatasetDetailPage(projectUrl)"
        />
      </div>

      <div class="col pl-md-0">
        <div class="row">
          <div class="col-md-auto col-sm-12 pr-0">
            <!-- <a href="javascript:void(0);" class="text-dark font-weight-bold title">
              {{ project.title }}
            </a> -->
            <span class="text-dark font-weight-bold title">
              <a :href="userDetailUrl" class="text-dark font-weight-bold title">
                {{ project.userId }}
              </a>
              <span> / </span>
              <a :href="projectUrl" class="text-dark font-weight-bold title">
                {{ project.title }}
              </a>
            </span>
            <i v-if="project.isPublic" class="uil uil-globe font-size-14 mr-2"></i>
            <i v-else class="uil uil-eye-slash font-size-14 mr-2"></i>
          </div>
          <div class="col-md-auto col-sm-12 pl-md-0">
            <!-- <b-badge class="badge-soft-primary mr-2">{{ "V " + project.version }}</b-badge>
            <b-badge class="badge-soft-success mr-2">{{ project.frame }}</b-badge>
            <b-badge class="badge-soft-info mr-2">{{ project.pyVer }}</b-badge> -->
            <!-- <b-badge v-if="project.isArchive" class="badge-soft-warning mr-2">归档</b-badge> -->
            <b-badge v-if="project.isInvalid" class="badge-soft-danger mr-2">失效</b-badge>
          </div>
          
          <span class="col-md-2 col-sm-12 ml-md-auto text-md-right d-none d-md-block update-time">
            {{ project.updateTime | moment("from", "now") }}
          </span>
        </div>
          
        <div class="info-text">
          <!-- <span>
            <i class="uil uil-thumbs-up font-size-14"></i>
            {{ project.like | numFilter }}
          </span> -->
          <span>
            <i class="uil uil-star font-size-14"></i>
            {{ project.star | numFilter }}
          </span>
          <span>
            <!-- <i class="uil uil-eye font-size-14 ml-2"></i> -->
            <feather type="git-branch" class="icon-xs ml-2" style="margin-bottom: -3px;margin-right:-1px;"></feather>
            {{ project.fork | numFilter }}
          </span>
        </div>
        <div class="row">
          <span class="col-md-10 col-sm-12 overflow-text">
            {{ project.desc }}
          </span>
          <div class="col-md-2 col-sm-12 ml-md-auto text-md-right d-none d-md-block">
            <Users :users="users"/>
          </div>
        </div>
        <b-badge v-for="tag in project.tags" :key="tag" variant="primary" class="mr-2">{{ tag }}</b-badge>

      </div>

    </div>
    <div v-if="project.isInvalid" class="invalid-overlay"></div>
  </div> 
</template>
<style scoped>
.proj-list-item {
  position: relative;
  border: 1px solid #f6f6f7;
  box-shadow: none;
  border-radius: 0.3rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
}

.thumbnail {
  object-fit: cover;
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 0.3rem;
}

.title {
  font-size: 1rem;
}

.info-text {
  font-size: 0.8rem;
}

.overflow-text {
  overflow:hidden;
  text-overflow:ellipsis;
  /*white-space:nowrap;*/
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.update-time {
  color: green;
}
</style>
