<script>
export default {
  components: {},
  props: {
    image: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      imageSelfData: this.image
    }
  },
  computed: {
    updateTime () {
      let curTime = new Date(this.imageSelfData.update_time)
      return curTime
    },
  },
  methods: {

  }
}
</script>
<template>
  <div class="col-lg-12 col-md-12 mt-1">
    <div class="card">
      <div class="card-body">
        <div class="row">

          <div class="col-6 col-md-2">
            <span class="badge badge-pill badge-warning">
              <i class="uil uil-layers" /> {{ imageSelfData.name }}
            </span>
          </div>

          <div class="col-6 col-md-2 my-auto">
            
            <span class="badge badge-pill badge-soft-primary">
              {{ imageSelfData.type }}
            </span>
          </div>

          <div class="d-none d-md-block col-md-4 my-auto">
            {{ imageSelfData.framework }}
          </div>

          <div class="d-none d-md-block col-md-2 my-auto">
            <a href="#">点击查看</a>
          </div>

          <div class="d-none d-md-block col-md-2 my-auto">
            {{ updateTime | moment('YYYY-MM-DD HH:mm:ss') }}
          </div>

        </div>
      </div>
    </div>
  </div>
</template>