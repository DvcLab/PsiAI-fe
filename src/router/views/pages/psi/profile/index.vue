<script>
import Layout from '@layouts/main'
import UserCard from './user-card'
import Projects from './projects'
import Datasets from './datasets'
import Notes from './notes'
import Containers from './containers'

import { projects, datasets, notes, containers } from './data'

/**
 * Profile component
 */
export default {
	components: {
		Layout,
		UserCard,
		Projects,
		Datasets,
		Notes,
		Containers
	},
	data() {
		return {
			projectData: projects,
			datasetData: datasets,
			noteData: notes,
			containerData: containers,
			title: 'Profile',
		}
	},
}
</script>

<template>
	<Layout>
		<div class="row mt-4">
			<div class="col-lg-3">
				<UserCard />
			</div>

			<div class="col-lg-9">
				<div class="card">
					<div class="card-body">
						<b-tabs class="navtab-bg" pills justified>

							<b-tab title="项目" active>
								<Projects :projects="projectData" :stars="projectData" />
							</b-tab>

							<b-tab title="数据">
								<Datasets :datasets="datasetData" :stars="datasetData" />
							</b-tab>

							<b-tab title="笔记">
								<Notes :notes="noteData" :stars="noteData" />
							</b-tab>

							<b-tab title="容器">
								<Containers :containers="containerData" :stars="containerData" />
							</b-tab>

						</b-tabs>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>
<style  lang="scss">
.navtab-bg li > a {
	background-color: transparent;
}
</style>