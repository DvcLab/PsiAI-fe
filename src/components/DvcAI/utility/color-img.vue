<script>

export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    imgClass: {
      type: String,
      default: ''
    },
    imgColor: {
      type: String,
      default: '#ced6f5'
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
  <div>
    <img
      v-show="isExist"
      :class="imgClass"
      v-real-img="src"
      alt=""
    />

    <div v-if="!isExist" class="d-inline-block" :class="imgClass" :style="{ backgroundColor: imgColor }">
    </div>
  </div>
</template>