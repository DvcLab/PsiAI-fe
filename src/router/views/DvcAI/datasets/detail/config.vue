<script>
// import Multiselect from "vue-multiselect";
import Swal from "sweetalert2";
import { EventBus } from "@/utils/event-bus";
import CoverImg from "@/components/DvcAI/images/image-img";
/**
 * 数据集配置信息
 */

export default {
  components: { CoverImg },
  props: {
    dataset: {
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
      isNameEdit: false,
      isImgEdit: false,
      // isLibEdit: false,
      isTagEdit: false,
      isDescEdit: false,
      
      name: '',
      imgUrl: '',
      typesList: ['CPU','GPU'],
      selectTypes: [],
      selectLibs: [],
      inputTagText: '',
      desc: '',
    };
  },
  computed: {
    canEdit() {
      return this.isAdmin
    },
    libs() {
      if (!this.dataset.libs) return [];
      let libs = this.dataset.libs;
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
      if(this.name === '' && this.dataset.name) {
        this.name = this.dataset.name;
      }
      if(this.imgUrl === '' && this.dataset.cover_img_url) {
        this.imgUrl = this.dataset.cover_img_url;
      }
      if(this.$_.isEmpty(this.tags) && this.dataset.tags) {
        this.tags = this.dataset.tags.slice();
      }
      if(this.desc === '' && this.dataset.desc) {
        this.desc = this.dataset.desc;
      }
    },

    // 编辑数据集名
    toNameEdit() {
      this.initInfo();
      this.isNameEdit = true;
    },

    // 编辑图片
    toImgEdit() {
      this.initInfo();
      this.isImgEdit = true;
    },

    // // 开始编辑类型
    // toTypeEdit() {
    //   this.initInfo();
    //   this.isTypeEdit = true;
    // },

    // 开始编辑标签
    toTagEdit() {
      this.initInfo();
      this.isTagEdit = true;
    },

    // 输入框输入标签添加
    addTag(){
      if(this.tags.includes(this.inputTagText)) {
        // TODO
        console.log('已存在')
      } else {
        this.tags = [...this.tag, this.inputTagText];
      }
    },

    // 移除某一个标签
    removeTag(text) {
      const index = this.selectLibs.findIndex(x => x.text === text);
      this.selectLibs.splice(index, 1);
    },

    // 开始编辑说明
    toDescEdit() {
      this.initInfo();
      this.isDescEdit = true;
    },
    
    // 取消编辑 - 事件代理
    cancelEdit(e) {

      let target = e.target;
      // console.log(target);

      // 取消编辑缩略图
      if(this.isImgEdit && !target.matches('.img-edit')) {
        if(target.matches('input')) {
          console.log('点击了img选择')
        } else {
          if(this.$_.isEqual(this.imgUrl, this.dataset.cover_img_url?this.dataset.cover_img_url:'')) {
            return this.isImgEdit = false;
          }
          Swal.fire({
            icon:'question',
            title: '确认修改数据集缩略图?',
            showCancelButton: true,
            confirmButtonText: `确认`,
            cancelButtonText: `取消`
          }).then((result) => {
            if (result.isConfirmed) {
              console.log('发出修改提交')
              this.updateInfo()
            } else if (result.isDismissed) {
              console.log('取消编辑');
              this.isImgEdit = false;
            }
          })
        }
      }

      // // 取消编辑类型
      // if(this.isTypeEdit && !target.matches('i.bx.bx-edit-alt.type-edit')) {
        
      //   if(target.matches('.type-select .multiselect') || target.matches('.type-select .multiselect__tags') ||target.matches('.type-select .multiselect__option')) {
      //     console.log('点击了type选择')
      //   } else {
      //     if(this.$_.isEqual(this.selectTypes, this.dataset.types)) {
      //       return this.isTypeEdit = false;
      //     }
      //     Swal.fire({
      //       icon:'question',
      //       title: '确认修改数据集类型?',
      //       showCancelButton: true,
      //       confirmButtonText: `确认`,
      //       cancelButtonText: `取消`
      //     }).then((result) => {
      //       if (result.isConfirmed) {
      //         console.log('发出修改提交')
      //         this.updateInfo()
      //       } else if (result.isDismissed) {
      //         console.log('取消编辑');
      //         this.isTypeEdit = false;
      //       }
      //     })
      //   }
      // }

      // 取消编辑名称
      if(this.isNameEdit && !target.matches('i.bx.bx-edit-alt.name-edit')) {
        
        if(target.matches('input')) {
          console.log('点击了tag选择')
        } else {
          if(this.$_.isEqual(this.name, this.dataset.name)) {
            return this.isNameEdit = false;
          }
          Swal.fire({
            icon:'question',
            title: '确认修改数据集名称?',
            showCancelButton: true,
            confirmButtonText: `确认`,
            cancelButtonText: `取消`
          }).then((result) => {
            if (result.isConfirmed) {
              console.log('发出修改提交')
              this.updateInfo()
            } else if (result.isDismissed) {
              console.log('取消编辑');
              this.isNameEdit = false;
            }
          })
        }
      }

      // 取消编辑标签
      if(this.isTagEdit && !target.matches('i.bx.bx-edit-alt.tag-edit')) {
        
        if(target.matches('input') || target.matches('.tag') || target.matches('.tag-icon')) {
          console.log('点击了tag选择')
        } else {
          if(this.$_.isEqual(this.tags, this.dataset.tags)) {
            return this.isTagEdit = false;
          }
          Swal.fire({
            icon:'question',
            title: '确认修改数据集标签?',
            showCancelButton: true,
            confirmButtonText: `确认`,
            cancelButtonText: `取消`
          }).then((result) => {
            if (result.isConfirmed) {
              console.log('发出修改提交')
              this.updateInfo()
            } else if (result.isDismissed) {
              console.log('取消编辑');
              this.isTagEdit = false;
            }
          })
        }
      }

      // 取消编辑说明
      if(this.isDescEdit && !target.matches('i.bx.bx-edit-alt.desc-edit')) {
        
        if(target.matches('textarea')) {
          console.log('点击了desc选择')
        } else {
          if(this.$_.isEqual(this.desc, this.dataset.desc)) {
            return this.isDescEdit = false;
          }
          Swal.fire({
            icon:'question',
            title: '确认修改数据集说明?',
            showCancelButton: true,
            confirmButtonText: `确认`,
            cancelButtonText: `取消`
          }).then((result) => {
            if (result.isConfirmed) {
              console.log('发出修改提交')
              this.updateInfo()
            } else if (result.isDismissed) {
              console.log('取消编辑');
              this.isDescEdit = false;
            }
          })
        }
      }
    },

    // 更新数据集信息
    updateInfo() {
      let temp = {
        "name": this.name,
        "url": this.dataset.url,
        "tags": this.tags,
        "cover_img_url": this.imgUrl,
        "desc": this.desc,
      }
      this.$request.post('datasets/'+this.dataset.id,temp)
      .then(({data})=>{
        console.log(data)
        if(data.code === 1) {
          Swal.fire("修改成功!", "", "success").then((res) => {
            if (res.isConfirmed) {
              this.isNameEdit = false;
              this.isImgEdit = false;
              this.isTagEdit = false;
              this.isDescEdit = false;
              EventBus.$emit("update");
            }
          });
        } else {
          Swal.fire("数据集信息修改失败!", "", "error");
        }
      })
    },
  }
};
</script>
<template>
<div v-if="dataset">
  <div class="card" @click="cancelEdit">
    <div class="card-body">

      <div class="row">

        <div v-if="dataset.id" class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">ID</p>
        </div>

        <div v-if="dataset.id" class="col-sm-12 col-md-10 mb-2">
          <span>{{dataset.id}}</span>
        </div>

      </div>

      <div class="row">

        <div v-if="dataset.name" class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">名称</p>
        </div>

        <div v-if="dataset.name" class="col-sm-12 col-md-10 mb-2">
          <span v-if="!isNameEdit">
            <span class="me-2">{{dataset.name}}</span>
            <i v-if="canEdit" class="bx bx-edit-alt name-edit font-size-16 cursor-pointer me-2" @click="toNameEdit"></i>
          </span>
          <div v-else>
            <b-form-input
              size="sm"
              v-model="name"
              placeholder="请输入数据集名称..."
            ></b-form-input>
          </div>
        </div>

      </div>

      <div class="row">

        <div class="col-sm-12 col-md-2 mb-2">
          <p class="text-muted mb-2">缩略图</p>
        </div>

        <div class="col-sm-12 col-md-10 i-text-middle mb-2">
          <div v-if="!isImgEdit" class="cover-img">
            <CoverImg :src="dataset.cover_img_url" :imgClass="'img-sm'" :imgColor="'#50a5f1'"/>
            <div v-if="canEdit" class="mask d-flex align-items-center justify-content-center cursor-pointer img-edit" @click="toImgEdit">
              <i class="bx bx-camera img-edit font-size-18"></i>
            </div>
          </div>
          <b-form-input
            v-else
            size="sm"
            v-model="imgUrl"
            placeholder="请输入缩略图url..."
          ></b-form-input>
        </div>

      </div>

      <div class="row">

        <div v-if="dataset.url" class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">URL</p>
        </div>

        <div v-if="dataset.url" class="col-sm-12 col-md-10 mb-2">
          <span>{{dataset.url}}</span>
        </div>

      </div>

      <!-- <div class="row">
        
        <div class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">标签</p>
        </div>

        <div class="col-sm-12 col-md-10 lib-select">

          <span v-if="!isLibEdit" class="i-text-middle mb-2">
            <span v-for="item in libs" class="badge bg-info me-1" :key="item.text">
            {{ item.name }} {{ item.tag }}
            </span>
            <i v-if="canEdit" class="bx bx-edit-alt lib-edit font-size-16 cursor-pointer me-2" @click="toLibEdit"></i>
          </span>
          <div v-else>
            <b-form-input
              class="mb-2"
              size="sm"
              v-model="inputLibText"
              placeholder="类库和版本号用空格分开，输入回车添加类库"
              @keyup.enter="addLib"
            ></b-form-input>
            <span v-for="item in selectLibs" :key="item.text" class="lib-tag">
              <span>{{item.name}} {{item.tag}}</span>
              <i class="tag-icon" @click="removeLib(item.text)"></i>
            </span>
          </div>

        </div>
      </div> -->

      <div class="row">

        <div class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">标签</p>
        </div>

        <div class="col-sm-12 col-md-10 mb-2">
          <span v-if="!isTagEdit">
            <span v-for="item in dataset.tags" class="badge bg-primary me-1" :key="item">
              {{ item }}
            </span>
            <i v-if="canEdit" class="bx bx-edit-alt tag-edit font-size-16 cursor-pointer me-2" @click="toTagEdit"></i>
          </span>
          <div v-else>
            <b-form-input
              class="mb-2"
              size="sm"
              v-model="inputTagText"
              placeholder="输入回车添加标签"
              @keyup.enter="addTag"
            ></b-form-input>
            <span v-for="item in tags" :key="item" class="tag">
              <span>{{item}}</span>
              <i class="tag-icon" @click="removeTag(item)"></i>
            </span>
          </div>
        </div>

      </div>

      <div class="row">

        <div class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">说明</p>
        </div>

        <div class="col-sm-12 col-md-10 i-text-middle">
          <span v-if="!isDescEdit">
            <span v-if="dataset.desc" class="me-2 mb-2">{{dataset.desc}}</span>
            <i v-if="canEdit" class="bx bx-edit-alt desc-edit font-size-16 cursor-pointer me-2" @click="toDescEdit"></i>
          </span>
          <textarea
            v-else
            v-model="desc"
            class="form-control"
            placeholder="请输入数据集说明..."
            rows="5"
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
.tag {
  position: relative;
  display: inline-block;
  font-size: 12px;
  padding: 4px 26px 4px 10px;
  border-radius: 5px;
  margin-right: 10px;
  color: #fff;
  line-height: 1;
  background: #50a5f1;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  text-overflow: ellipsis;
}
.tag-icon {
  cursor: pointer;
  margin-left: 7px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  font-weight: 700;
  font-style: normal;
  width: 22px;
  text-align: center;
  line-height: 19px;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  border-radius: 5px;
}
.tag-icon:after {
  content: "×";
  color: #fff;
  font-size: 14px;
}
</style>