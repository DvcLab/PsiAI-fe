<script>
/**
 * ProjCard component
 */
import Users from '@components/psi/contributors'

export default {
  components: { Users },
  filters: {
    // 计算机存储数值换算,默认传进来的最小单位为B
    gbFilter (value) {

      if (value === 0) return '0 B'
 
      const k = 1024
      const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

      let i = Math.floor(Math.log(value) / Math.log(k))

      if(i < 0) return value.toPrecision(3) + ' B'

      return (value / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i]
    },
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
      default: () => {},
    },
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
  }
}
</script>

<template>
  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
    <div class="proj-card">

      <div class="proj-card-top">
        <b-img-lazy
          class="proj-thumbnail"
          :src="project.imgUrl"
          :alt="project.title"
          fluid
        ></b-img-lazy>
        <div class="proj-type">
          <b-badge class="badge-success">{{ project.frame }}</b-badge>
          <b-badge class="badge-info mt-1">{{ project.pyVer }}</b-badge>
        </div>

        <div class="proj-avatars">
          <Users :users="users">
            <template v-slot:detail>
              <div class="mt-2 border-top pt-2">
                <div class="text-muted">
                  <i class="uil uil-user mr-1"></i>
                  项目所有者
                </div>
                <div class="text-muted">
                  <i class="uil uil-calendar-alt mr-1"></i>
                  {{ project.updateTime | moment("from", "now") }}更新
                </div>
              </div>
            </template>
            <template v-slot:footer>
              <div class="mt-2 border-top pt-2">
                <button type="button" class="btn btn-primary btn-sm btn-block mr-1">关注</button>
              </div>
            </template>
          </Users>
        </div>
        
        <!-- <img
          class="proj-avatar"
          :src="project.avatar"
          alt="avatar"
        /> -->

      </div>

      <div class="proj-card-body overflow-text">
        <span class="proj-title">
          <a href="javascript:void(0);" class="text-dark font-weight-bold title">
            {{ project.title }}
          </a>
          <i v-if="project.isPublic" class="uil uil-globe font-size-14 ml-2"></i>
          <i v-else class="uil uil-eye-slash font-size-14 ml-2"></i>
        </span>
        <div class="mb-1">
          <b-badge v-for="tag in project.tags" :key="tag" variant="primary" class="mr-2">{{ tag }}</b-badge>
        </div>
        
        <div class="info-text">
          <span>
            <i class="uil uil-thumbs-up font-size-14"></i>
            {{ project.like | numFilter }}
          </span>
          <span>
            <i class="uil uil-star font-size-14 ml-2"></i>
            {{ project.star | numFilter }}
          </span>
          <span>
            <i class="uil  uil-eye font-size-14 ml-2"></i>
            {{ project.watch | numFilter }}
          </span>
        </div>
        <!-- <div>
          <img
            class="avatar-sm rounded-circle mr-2"
            :src="project.avatar"
            alt="avatar"
          />
          <span>{{ project.username }}</span>
          <span>({{ project.users.length }})</span>
        </div> -->
        
      </div>
      <!-- <div class="proj-card-footer">
        <span>{{ project.updateTime | moment("from", "now") }}</span>
        <span>{{ project.size | gbFilter }}</span>
      </div> -->
    </div>
  </div>
  
</template>
<style scoped>
.proj-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid rgba(0, 0, 0, 0.125);
  box-shadow: 0 0.05rem 0.01rem rgba(75, 75, 90, 0.075);
  border-radius: 0.25rem;
  margin-bottom: 1rem;
}

.proj-card-top {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.proj-thumbnail {
  vertical-align: middle;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  width: 100%;
  height: 100%;
}

.proj-title{
  font-size: 15px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

.proj-card-body {
  padding: 0.5rem;
}

.proj-type {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  display: flex;
  flex-direction: column;
}

.proj-avatar {
/*  position: absolute;
  bottom: 0.5rem;
  left: 0.5rem;*/
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 0 solid rgba(0, 0, 0, 0.125);
  box-shadow: 0 0.05rem 0.01rem rgba(75, 75, 90, 0.075);
}

.proj-avatars {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
}

.info-text {
  font-size: 0.8rem;
}

.overflow-text {
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
</style>