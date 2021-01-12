<script>
import { VueEditor } from 'vue2-editor'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

export default {
	page: {
		title: 'Forms Editor',
		meta: [{ name: 'description', content: appConfig.description }],
	},
	components: { Layout, PageHeader, VueEditor },
	data() {
		return {
			title: 'Forms Editor',
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
					text: 'Editor',
					active: true,
				},
			],
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
						<h4 class="header-title mt-0 mb-1">Default Editor</h4>
						<p class="sub-header">Quilljs - a powerful rich text editor</p>
						<!-- Editor -->
						<vue-editor height="300"></vue-editor>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>
