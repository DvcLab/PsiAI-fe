<script>
/**
 * Starter component
 */
export default {
  components: {  },
  filters:{
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
}
</script>

<template>
  <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
    <div class="proj-card">
      <!-- <div class="proj-card-top"> -->
        <b-img-lazy
          class="proj-thumbnail"
          :src="project.imgUrl"
          :alt="project.title"
          fluid
        ></b-img-lazy>
        <div class="proj-card-overlay">
          <div class="proj-card-overlay-top">
            <div class="row wh-100 overflow-text">
              <!-- <div class="col-6">
                <b-badge class="badge-success">{{ project.frame }}</b-badge>
                <b-badge class="badge-info ml-1">{{ project.pyVer }}</b-badge>
              </div> -->
              <!-- <div class="col-6">
                <span>
                  <i class="uil uil-thumbs-up font-size-14"></i>
                  {{ project.like | numFilter }}
                </span>
                <span>
                  <i class="uil uil-star font-size-14 ml-1"></i>
                  {{ project.star | numFilter }}
                </span>
                <span>
                  <i class="uil  uil-eye font-size-14 ml-1"></i>
                  {{ project.watch | numFilter }}
                </span>
              </div> -->
            </div>
          </div>
          <div class="proj-card-overlay-footer">
            <div class="row wh-100 overflow-text">
              <div class="col-10">
                <div class="proj-title">
                  {{ project.title }}
                  <i v-if="project.isPublic" class="uil uil-globe font-size-14 ml-2"></i>
                  <i v-else class="uil uil-eye-slash font-size-14 ml-2"></i>
                </div>
                <div class="overflow-text">
                  <b-badge v-for="tag in project.tags" :key="tag" variant="primary" class="mr-2">{{ tag }}</b-badge>
                </div>
              </div>
              <div class="col-2">
                <img
                  class="proj-avatar"
                  :src="project.avatar"
                  alt="avatar"
                />
              </div>
            </div>
            
            <!-- <div class="proj-card-info">
              <div>
                <span class="proj-title overflow-text">
                  {{ project.title }}
                  <i v-if="project.isPublic" class="uil uil-globe font-size-14 ml-2"></i>
                  <i v-else class="uil uil-eye-slash font-size-14 ml-2"></i>
                </span>
              </div>
              <div>
                <b-badge v-for="tag in project.tags" :key="tag" variant="primary" class="mr-2">{{ tag }}</b-badge>
              </div>
            </div>
            <div style="width: 20%">
              <img
                class="proj-avatar"
                :src="project.avatar"
                alt="avatar"
              />
            </div> -->
            
          </div>
        </div>
        
      <!-- </div> -->
      <!-- <div class="proj-card-body">
        <span class="proj-title overflow-text">
          {{ project.title }}
          <i v-if="project.isPublic" class="uil uil-globe font-size-14 ml-2"></i>
          <i v-else class="uil uil-eye-slash font-size-14 ml-2"></i>
        </span>
        <b-badge v-for="tag in project.tags" :key="tag" variant="primary" class="mr-2">{{ tag }}</b-badge>
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
        
      </div>
      <div class="proj-card-footer">
        <span>{{ project.updateTime | moment("from", "now") }}</span>
        <span>{{ project.size | gbFilter }}</span>
      </div> -->
    </div>
  </div>
  
</template>
<style>
.overflow-text {
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
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
  border-radius: 0.25rem;
}
.proj-title{
  color: white;
  font-size: 15px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.proj-card-body {
  /*margin: 1rem 1rem 0 1rem;*/
  padding: 0.5rem;
}
.proj-card-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  /*background-color: rgba(0, 0, 0, 0.1);*/
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 5%, rgba(0, 0, 0, 0.4) 30%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0));
  z-index: 2;
  border-radius: 0.25rem;

}
.proj-card-overlay-top {
  position: absolute;
  top: 0;
  left: 0;
  min-height: 30%;
  width: 100%;
  padding: 0 1rem 0.5rem 1rem;
}
.proj-card-overlay-footer {
  position: absolute;
  bottom: 0;
  left: 0;
/*  display: flex;
  flex-direction: row;*/
  min-height: 30%;
  width: 100%;
  padding: 0 1rem 0.5rem 1rem;
}
.proj-card-info {
  display: flex;
  flex-direction: column;
  width: 80%;
}
.proj-avatar {
 /* position: absolute;
  bottom: 1rem;
  right: 1rem;*/
  float: right;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 0 solid rgba(0, 0, 0, 0.125);
  box-shadow: 0 0.05rem 0.01rem rgba(75, 75, 90, 0.075);
}
</style>