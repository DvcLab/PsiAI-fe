<script>
import vue2Dropzone from 'vue2-dropzone'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

export default {
	page: {
		title: 'File Upload',
		meta: [{ name: 'description', content: appConfig.description }],
	},
	components: { Layout, PageHeader, vueDropzone: vue2Dropzone },
	data() {
		return {
			title: 'File Upload',
			items: [
				{
					text: 'Shreyu',
					href: '/',
				},
				{
					text: 'Forms',
					href: '/',
				},
				{
					text: 'File Upload',
					active: true,
				},
			],
			dropzoneOptions: {
				url: 'https://httpbin.org/post',
				thumbnailWidth: 150,
				maxFilesize: 0.5,
				headers: { content: 'header value' },
			},
		}
	},
}
</script>

<template>
	<Layout>
		<PageHeader :title="title" :items="items" />
		<div class="row">
			<div class="col-12">
				<div class="card">
					<div class="card-body">
						<h4 class="vue-editor mt-0 mb-1">Dropzone File Upload</h4>
						<p class="text-muted font-13 m-b-30"
							>DropzoneJS is an open source library that provides drag’n’drop
							file uploads with image previews.</p
						>
						<!-- file upload -->
						<vue-dropzone
							id="dropzone"
							ref="myVueDropzone"
							:options="dropzoneOptions"
							:use-custom-slot="true"
						>
							<div class="text-center">
								<i class="h1 text-muted uil-cloud-upload"></i>
								<h3>Drop files here or click to upload.</h3>
								<span class="text-muted font-size-13">
									(This is just a demo dropzone. Selected files are
									<strong>not</strong> actually uploaded.)
								</span>
							</div>
						</vue-dropzone>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>
