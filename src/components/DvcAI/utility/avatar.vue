<script>

export default {
  props: {
    size: {
      type: String,
      default: 'xxs'
    },
    src: {
      type: String,
      default: ''
    },
    userName: {
      type: String,
      default: ''
    }
  },
  data(){
    return {
      isExist: false
    }
  },
  mounted(){
    this.imageIsExist(this.src).then((res)=>{
      this.isExist = res;
    })
  },
  methods: {
    // 判断图片url是否可以加载
    imageIsExist(url) {
      return new Promise((resolve) => {
        let img = new Image();
        img.src = url;
        img.onload = function () {
          if (this.complete == true){
            resolve(true);
          }
        }
        img.onerror = function () {
          resolve(false);
        }
      })
    }
  }
}
</script>
<template>

  <img
    v-if="isExist"
    class="rounded-circle"
    :class="`avatar-${size}`"
    v-real-img="src"
    alt=""
  />

  <div v-else class="d-inline-block" :class="`avatar-${size}`">
    <span class="avatar-title rounded-circle" :class="`avatar-${size}`">{{ userName[0] }}</span>
  </div>

</template>