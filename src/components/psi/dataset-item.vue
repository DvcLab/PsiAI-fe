<script>
import Users from '@components/psi/contributors'
/**
 * Dataset component
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

    dataset: {
      type: Object,
      default: () => {}
    }

  },
  data() {
    return {
      
    }
  },
  computed: {
    // 贡献者，最多显示 5 位
    users () {
      return this.dataset.users.length > 5 ? this.dataset.users.slice(0, 5) : this.dataset.users
    },
    // 用户个人信息 Url
    userDetailUrl () {
      // 暂时放置静态 Url
      return '/profile'
    },
    // 数据集 Url
    datasetUrl () {
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
  <div class="dataset-list-item">

    <div class="row align-items-center">

      <div class="col-auto">
        <img
          src="@assets/images/projects/project-1.jpg"
          class="thumbnail pointer"
          alt="file-image"
          @click="toDatasetDetailPage(datasetUrl)"
        />
      </div>

      <div class="col pl-0">

        <div class="d-flex flex-row text-center align-items-center">
          <span class="text-dark font-weight-bold title">
            <a :href="userDetailUrl" class="text-dark font-weight-bold title">
              {{ dataset.userId }}
            </a>
            <span> / </span>
            <a :href="datasetUrl" class="text-dark font-weight-bold title">
              {{ dataset.title }}
            </a>
          </span>
          
          <i class="uil uil-globe font-size-14 ml-2"></i>
          <b-badge class="badge-soft-primary ml-2">{{ "V " + dataset.version }}</b-badge>
          <b-badge class="badge-soft-success ml-2">{{ dataset.type }}</b-badge>
          <!-- <b-badge class="badge-soft-info ml-2">{{ dataset.task }}</b-badge> -->
          <b-badge v-if="dataset.isArchive" class="badge-soft-warning ml-2">归档</b-badge>
          <b-badge v-if="dataset.isInvalid" class="badge-soft-danger ml-2">失效</b-badge>         
        </div>

        <div class="info-text">
          <span>
            <i class="uil uil-thumbs-up font-size-14"></i>
            {{ dataset.like | numFilter }}
          </span>
          <span>
            <i class="uil uil-star font-size-14 ml-2"></i>
            {{ dataset.star | numFilter }}
          </span>
          <span>
            <i class="uil  uil-eye font-size-14 ml-2"></i>
            {{ dataset.watch | numFilter }}
          </span>
        </div>

        <div>
          <span class="overflow-2-text pointer" @click="toDatasetDetailPage(datasetUrl)">
            {{ dataset.desc }}
          </span>
          <b-badge v-for="tag in dataset.tags" :key="tag" variant="primary" class="mr-2">{{ tag }}</b-badge>
        </div>

      </div>

      <div class="col-auto d-flex flex-column other-info" style="width: 13%">
        <p class="mb-auto time-text">{{ dataset.updateTime | moment("from", "now") }}</p>
        <Users :users="users"/>
      </div>

    </div>

    <div v-if="dataset.isInvalid" class="invalid-overlay"></div>

  </div> 
</template>

<style scoped>
.dataset-list-item {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  /*height: 6rem;*/
  border: 1px solid #f6f6f7;
  box-shadow: none;
  border-radius: 0.25rem;
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

.other-info {
  height: 5rem;
  text-align: right;
}
</style>
