<script>
import Multiselect from "vue-multiselect";
/**
 * 镜像配置信息
 */

export default {
  components: { Multiselect },
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
      typesList: ['CPU','GPU'],
      selectTypes: [],
      libsList: [{name:"tensorflow",tag:"2.2.0"}],
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
          tag: libs[i]
        };
        libsList.push(tmp);
      }
      return libsList;
    },
    // types() {
    //   if (!this.image.types) return [];
    //   return this.image.types
    // },
    // types: {
    //   get(){
    //     if (!this.image.types) return [];
    //     return this.image.types
    //   },
    //   set(newVal){
    //     return newVal
    //   }
    // },

  },
  methods: {
    toTypeEdit() {
      this.selectTypes = this.image.types;
      this.isTypeEdit = true;
      console.log(this.types)
    },
    cancelTypeEdit() {
      this.isTypeEdit = false;
    },
    toLibEdit() {
      this.selectLibs = this.libs;
      this.isLibEdit = true;
    },
    cancelLibEdit() {
      this.isLibEdit = false;
    },
    toDescEdit() {
      this.desc = this.image.desc;
      this.isDescEdit = true;
    },
    cancelDescEdit() {
      this.isDescEdit = false;
    },
  }
};
</script>
<template>
<div v-if="image">
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div v-if="image.id" class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">ID</p>
        </div>
        <div v-if="image.id" class="col-sm-12 col-md-10">
          <span>{{image.id}}</span>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">类型</p>
        </div>
        <div class="col-sm-12 col-md-10  type-select">
          <span v-if="!isTypeEdit" class="i-text-middle">
            <span v-for="item in image.types" class="badge bg-warning me-1" :key="item">{{ item }}</span>
            <i v-if="canEdit" class="bx bx-edit-alt font-size-16 cursor-pointer me-2" @click="toTypeEdit"></i>
          </span>
          <multiselect
            v-else
            class="d-inline-block btn-item me-2 mb-2"
            v-model="selectTypes"
            :options="typesList"
            :multiple="true"
            @blur="cancelTypeEdit"
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
          <span v-if="!isLibEdit" class="i-text-middle">
            <span v-for="item in libs" class="badge bg-info me-1" :key="item">
            {{ item.name }} {{ item.tag }}
            </span>
            <i v-if="canEdit" class="bx bx-edit-alt font-size-16 cursor-pointer me-2" @click="toLibEdit"></i>
          </span>
          <multiselect
            v-else
            class="d-inline-block btn-item me-2 mb-2"
            v-model="selectLibs"
            :options="libsList"
            @blur="cancelLibEdit"
            placeholder="选择类型"
            select-label="选择类型"
            selectedLabel="已选"
            deselectLabel="点击取消"
          >
            <template slot="option" slot-scope="{ option }">
              <span>
                {{ option.name }} {{ option.tag }}
              </span>
            </template>
            <template
              slot="singleLabel"
              slot-scope="{ option }"
              class="i-text-middle"
            >
              <div class="text-truncate i-text-middle">
                {{ option.name }} {{ option.tag }}
              </div>
            </template>
          </multiselect>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-2">
          <p class="text-muted mb-2">标签</p>
        </div>
        <div class="col-sm-12 col-md-10">
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
            <span v-if="image.desc" class="me-2">{{image.desc}}</span>
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
