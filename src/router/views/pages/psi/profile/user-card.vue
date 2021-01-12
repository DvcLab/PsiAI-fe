<script>
import Multiselect from 'vue-multiselect'
import { authComputed } from '@state/helpers'

import { user } from './data'

export default {
  components: { Multiselect },
	data () {
		return {
			user: user,            // 用户信息
      isEdit: false,         // 编辑状态
      isFollow: false,       // 关注状态
      imgShow: null,         // 选择图片路径
      detail: user.detail,   // 用户个人简介缓存
      email: user.email,     // 用户邮箱缓存
      blog: user.blog,       // 用户个人博客缓存
      newSkill: user.skills, // 用户技能缓存
      skillOptions: ['UI design', 'UX', 'Sketch', 'Photoshop', 'Frontend'], // 技能多选项
		}
	},
	computed: {
    ...authComputed,
    // 是否是用户本人
    isSelf () {
      return this.currentUser.username === this.user.username
    },
    // 平台登录认证
    fromApp () {
    	const vm = this
    	let app = vm.user.from
    	switch (app) {
    		case 'wechat':
    			return {
    				class: 'badge-soft-success',
    				text:'微信'
    			}
    		case 'github':
    			return {
    				class: 'badge-soft-primary',
    				text:'github'
    			}
    		default:
    			return {
    				class: 'badge-soft-secondary',
    				text:'未'
    			}
    	}
    },
    // 个人信息完成度
    profileCompeted () {
    	return this.user.profileCompeted * 100
    }
  },
  methods: {
    // 选择图片
    selectImg () {
      const selectBtn = this.$refs.selectBtn
      selectBtn.click()
    },
    // 获得图片信息并回显
    changeImg (img) {
      console.log(img)

      let file = img.target.files[0]

      if(!file) return null

      if(!/image\/\w+/.test(file.type)) {
        console.log('必须为图片！')
        return null
      }

      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (e) => {
        this.imgShow = e.target.result
      }

    },
    // 点击编辑按钮
    editInfo () {
      this.isEdit = true
    },
    // 取消编辑
    cancelEdit () {
      this.isEdit = false
    },
    // 提交编辑
    submitEdit () {
      this.isEdit = false
    },
  }
}
</script>
<template>
	<div class="card">
		<div class="card-body">

			<div class="text-center mt-3">

        <div class="avatar-con">
          <img
            :src="imgShow || user.avatar"
            alt
            class="avatar-lg rounded-circle"
          />
          <div v-if="isEdit" class="avatar-overlay" @click="selectImg">修改头像</div>
          <input
            ref="selectBtn"
            type="file"
            style="display: none"
            @change="changeImg"
          />
        </div>
				
				<h5 class="mt-2 mb-0">{{ user.nickname }}</h5>
        <h5 class="text-muted font-weight-normal mt-0 mb-2">
          ({{ user.username }})
        </h5>
				<b-badge class="mb-4"
					:class="fromApp.class"
	      >{{ fromApp.text }}认证</b-badge>

				<div v-if="profileCompeted !== 100 && isSelf" class="progress mb-4" style="height: 14px;">
					<div
						class="progress-bar bg-success"
						role="progressbar"
						:style="{
							width: profileCompeted + '%',
						}"
						:aria-valuenow="profileCompeted"
						aria-valuemin="0"
						aria-valuemax="100"
					>
						<span class="font-size-12 font-weight-bold">
							已完成
							<span class="font-size-11">{{ profileCompeted + '%' }}</span>
						</span>
					</div>
				</div>

        <div v-if="isSelf">
          <button v-if="!isEdit" type="button" class="btn btn-white btn-sm" :disable="isEdit" @click="editInfo">
            编辑
          </button>
        </div>
        <div v-else>
          <button v-if="isFollow" type="button" class="btn btn-white btn-sm">取消关注</button>
          <button v-else type="button" class="btn btn-primary btn-sm">关注</button>
        </div>

			</div>

			<div class="mt-5 pt-2 border-top">

				<h4 class="mb-3 font-size-15">简介</h4>

        <div v-if="isEdit" class="custom-textarea">
          <b-form-textarea
            v-model="detail"
            rows="4"
            maxlength="150"
            no-resize
            class="pb-4"
          ></b-form-textarea>
          <span class="custom-textarea-tip-text d-none d-xl-block">{{ detail.length + '/150'}}</span>
        </div>
        
				<p v-else class="text-muted mb-4">
					{{ user.detail || (isSelf ? '你' : '这个人') + '的简介空空如也...' }}
				</p>

			</div>

			<div v-if="user.email || user.blog" class="mt-3 pt-2 border-top">

				<h4 class="mb-3 font-size-15">联系方式</h4>

				<div v-if="user.email" class="row w-100 align-items-center m-0 mb-2 text-muted">
					<div class="col-3 pl-3 font-weight-bold">邮箱</div>
          <b-form-input
            v-if="isEdit"
            v-model="email"
            type="email"
            placeholder="输入邮箱（对外公开）"
            class="col-9"
          ></b-form-input>
					<div v-else class="col-9">{{ user.email }}</div>
				</div>

				<div v-if="user.blog" class="row w-100 align-items-center m-0 mb-2 text-muted">
					<div class="col-3 pl-3 font-weight-bold">博客</div>
          <b-form-input
            v-if="isEdit"
            v-model="blog"
            type="url"
            placeholder="输入个人博客URL"
            class="col-9"
          ></b-form-input>
					<div v-else class="col-9"><a :href="user.blog">{{ user.blog }}</a></div>
				</div>

			</div>

			<div class="mt-3 pt-2 border-top">

				<h4 class="mb-3 font-size-15">技能</h4>
        <multiselect
          v-if="isEdit"
          v-model="newSkill"
          :options="skillOptions"
          :multiple="true"
        ></multiselect>
        <label v-for="skill in user.skills" v-else :key="skill" class="badge badge-soft-primary ml-1">
          {{ skill }}
        </label>

			</div>

      <div v-if="isEdit" class="mt-3 pt-2 border-top text-center">
        <button type="button" class="btn btn-primary btn-sm mr-1" @click="submitEdit">保存</button>
        <button type="button" class="btn btn-white btn-sm ml-1" @click="cancelEdit">取消</button>
      </div>

		</div>
	</div>
</template>
<style>
.avatar-con {
  display: inline-block;
  position: relative;
}
.avatar-overlay {
  position:absolute;
  top: 0;
  left: 0;
  width: 4.5rem;
  height: 4.5rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  line-height: 4.5rem;
  transition: .5s ease;
  cursor: pointer;
}
.custom-textarea {
  position: relative;
}
.custom-textarea-tip-text {
  position:absolute;
  bottom: 0.5rem;
  right: 1rem;
  color: #6c757d;
  font-size: 0.5rem;
}
</style>