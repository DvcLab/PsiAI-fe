<script>
import Multiselect from "vue-multiselect";
import Swal from "sweetalert2";
import { EventBus } from "@/utils/event-bus";
import CoverImg from "@/components/DvcAI/images/image-img";
/**
 * 镜像配置信息
 */

export default {
  components: { Multiselect, CoverImg },
  props: {
    image: {
      type: Object,
      default: () => {},
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isTypeEdit: false,
      isLibEdit: false,
      isDescEdit: false,
      isImgEdit: false,
      imgUrl: '',
      typesList: ['CPU','GPU'],
      selectTypes: [],
      libsList: [{name:"tensorflow",tag:"2.2.0",text:"tensorflow 2.2.0"}],
      // libs: {},
      selectLibs: [],
      desc: '',
    };
  },
  computed: {
    canEdit() {
      return this.isAdmin
    },
    libs() {
      if (!this.image.libs) return [];
      let libs = this.image.libs;
      let libsList = [];
      for(let i in libs) {
        let tmp = {
          name: i,
          tag: libs[i],
          text: i+' '+libs[i]
        };
        libsList.push(tmp);
      }
      return libsList;
    },
    sendLibs(){
      let res = {};
      if(!this.selectLibs && this.selectLibs.length === 0) {
        return res;
      }
      let len = this.selectLibs.length;
      for(let i = 0; i < len; i++) {
        res[this.selectLibs[i].name] = this.selectLibs[i].tag
      }
      return res;
    }
  },
  methods: {

    // 初始化数据
    initInfo() {
      this.imgUrl = this.image.cover_img_url?this.image.cover_img_url: '';
      this.selectTypes = this.image.types;
      this.selectLibs = this.libs;
      this.desc = this.image.desc;
    },
    // 编辑图片
    toImgEdit() {
      this.initInfo();
      this.isImgEdit = true;
    },

    // 取消修改图片
    cancelImgEdit() {
      Swal.fire({
        icon:'question',
        title: '确认修改镜像缩略图?',
        showCancelButton: true,
        confirmButtonText: `确认`,
        cancelButtonText: `取消`
      }).then((result) => {
        if (result.isConfirmed) {
          console.log('发出修改提交')
          this.updateInfo()
        } else if (result.isDenied) {
          console.log('取消编辑')
        }
      })
    },

    // 开始编辑类型
    toTypeEdit() {
      this.initInfo();
      this.isTypeEdit = true;
    },

    // 开始编辑类库
    toLibEdit() {
      this.initInfo();
      this.isLibEdit = true;
    },

    // 开始编辑说明
    toDescEdit() {
      this.initInfo();
      this.isDescEdit = true;
    },
    
    // 取消编辑镜像说明
    cancelDescEdit() {
      Swal.fire({
        icon:'question',
        title: '确认修改镜像说明?',
        showCancelButton: true,
        confirmButtonText: `确认`,
        cancelButtonText: `取消`
      }).then((result) => {
        if (result.isConfirmed) {
          console.log('发出修改提交')
          this.updateInfo()
        } else if (result.isDenied) {
          console.log('取消编辑')
        }
      })
    },

    // 取消编辑
    cancelEdit(e) {

      let target = e.target;

      if(this.isTypeEdit && !target.matches('i.bx.bx-edit-alt')) {
        if(this.isLibEdit || this.isDescEdit) {
          this.isLibEdit = false;
          this.isDescEdit = false;
        }
        if(target.matches('.type-select .multiselect') || target.matches('.type-select .multiselect__tags')) {
          console.log('点击了type选择')
        } else {
          Swal.fire({
            icon:'question',
            title: '确认修改镜像类型?',
            showCancelButton: true,
            confirmButtonText: `确认`,
            cancelButtonText: `取消`
          }).then((result) => {
            if (result.isConfirmed) {
              console.log('发出修改提交')
              this.updateInfo()
            } else if (result.isDenied) {
              console.log('取消编辑');
              this.isTypeEdit = false;
              this.isLibEdit = false;
              this.isDescEdit = false;
            }
          })
        }
      }
      if(this.isLibEdit && !target.matches('i.bx.bx-edit-alt')) {
        if(target.matches('.lib-select .multiselect')|| target.matches('.lib-select .multiselect__select') || target.matches('.lib-select .multiselect__tags')) {
          console.log('点击了lib选择')
        } else {
          Swal.fire({
            icon:'question',
            title: '确认修改镜像类库?',
            showCancelButton: true,
            confirmButtonText: `确认`,
            cancelButtonText: `取消`
          }).then((result) => {
            if (result.isConfirmed) {
              console.log('发出修改提交')
              this.updateInfo()
            } else if (result.isDenied) {
              console.log('取消编辑');
              this.isTypeEdit = false;
              this.isLibEdit = false;
              this.isDescEdit = false;
            }
          })
        }
      }
    },

    // 更新镜像信息
    updateInfo() {
      let temp = {
        "name": this.image.name,
        "tags": this.image.tags,
        "cover_img_url": this.imgUrl,
        "types": this.selectTypes?this.selectTypes:this.image.types,
        "libs": this.sendLibs==={}?this.sendLibs:this.image.libs,
        "desc": this.desc?this.desc:this.image.desc,
      }
      this.$request.post('images/'+this.image.id,temp)
      .then(({data})=>{
        console.log(data)
        if(data.code === 1) {
          Swal.fire("修改成功!", "", "success").then((res) => {
            if (res.isConfirmed) {
              this.isTypeEdit = false;
              this.isLibEdit = false;
              this.isDescEdit = false;
              EventBus.$emit("update");
            }
          });
        } else {
          Swal.fire("容器名修改失败!", "", "error");
        }
      })
    },

    
  }
};
</script>
<template>
<div v-if="image">
  <div class="card" @click="cancelEdit">
    <div class="card-body">

      <div class="row">

        <div v-if="image.id" class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">ID</p>
        </div>

        <div v-if="image.id" class="col-sm-12 col-md-10 mb-2">
          <span>{{image.id}}</span>
        </div>

      </div>

      <div class="row">

        <div class="col-sm-12 col-md-2 mb-2">
          <p class="text-muted mb-2">缩略图</p>
        </div>

        <div class="col-sm-12 col-md-10 i-text-middle mb-2">
          <div v-if="!isImgEdit" class="cover-img">
            <CoverImg :src="image.cover_img_url" :imgClass="'img-sm'" :imgColor="'#50a5f1'"/>
            <div class="mask d-flex align-items-center justify-content-center cursor-pointer" @click="toImgEdit">
              <i class="bx bx-camera font-size-18"></i>
            </div>
          </div>
          <b-form-input
            v-else
            size="sm"
            v-model="imgUrl"
            placeholder="请输入缩略图url..."
            @blur="cancelImgEdit"
          ></b-form-input>
        </div>

      </div>

      <div class="row">

        <div class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">类型</p>
        </div>

        <div class="col-sm-12 col-md-10  type-select">

          <span v-if="!isTypeEdit" class="i-text-middle mb-2">
            <span v-for="item in image.types" class="badge bg-warning me-1" :key="item">{{ item }}</span>
            <i v-if="canEdit" class="bx bx-edit-alt font-size-16 cursor-pointer me-2" @click="toTypeEdit"></i>
          </span>

          <multiselect
            v-else
            class="d-inline-block btn-item me-2 mb-2"
            v-model="selectTypes"
            :options="typesList"
            :multiple="true"
            placeholder="选择类型"
            select-label="选择类型"
            selectedLabel="已选"
            deselectLabel="点击取消"
          >
          </multiselect>

        </div>
      </div>

      <div class="row">
        
        <div class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">类库</p>
        </div>

        <div class="col-sm-12 col-md-10 lib-select">

          <span v-if="!isLibEdit" class="i-text-middle mb-2">
            <span v-for="item in libs" class="badge bg-info me-1" :key="item.name+item.tag">
            {{ item.name }} {{ item.tag }}
            </span>
            <i v-if="canEdit" class="bx bx-edit-alt font-size-16 cursor-pointer me-2" @click="toLibEdit"></i>
          </span>

          <multiselect
            v-else
            class="d-inline-block btn-item me-2 mb-2"
            v-model="selectLibs"
            :options="libsList"
            :multiple="true"
            placeholder="选择类型"
            select-label="选择类型"
            selectedLabel="已选"
            deselectLabel="点击取消"
            label="text"
            track-by="text"
          >
            <template slot="option" slot-scope="{ option }">
              <span>
                {{ option.name }} {{ option.tag }}
              </span>
            </template>
          </multiselect>

        </div>
      </div>

      <div class="row">

        <div class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">标签</p>
        </div>

        <div class="col-sm-12 col-md-10 mb-2">
          <span v-for="item in image.tags" class="badge bg-primary me-1" :key="item">
            {{ item }}
          </span>
        </div>

      </div>

      <div class="row">

        <div class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">说明</p>
        </div>

        <div class="col-sm-12 col-md-10 i-text-middle">
          <span v-if="!isDescEdit">
            <span v-if="image.desc" class="me-2 mb-2">{{image.desc}}</span>
            <i v-if="canEdit" class="bx bx-edit-alt font-size-16 cursor-pointer me-2" @click="toDescEdit"></i>
          </span>
          <textarea
            v-else
            v-model="desc"
            class="form-control"
            placeholder="请输入镜像说明..."
            rows="5"
            @blur="cancelDescEdit"
          ></textarea>
        </div>

      </div>

    </div>
  </div>
</div>
</template>
<style scoped>
.cover-img {
  position: relative;
}
.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  opacity: 0;
  border-radius: 0.25rem;
}
.cover-img:hover .mask{
  opacity: 1;
}
</style>