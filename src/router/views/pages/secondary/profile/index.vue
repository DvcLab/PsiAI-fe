<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

import UserCard from './user-card'
import Activities from './activities'
import Messages from './messages'
import Projects from './projects'
import Tasks from './tasks'
import Files from './files'
import { activities, messageData, projectData, tasks } from './data-profile'

/**
 * Profile component
 */
export default {
	page: {
		title: 'Profile',
		meta: [{ name: 'description', content: appConfig.description }],
	},
	components: {
		Layout,
		PageHeader,
		UserCard,
		Activities,
		Messages,
		Projects,
		Tasks,
		Files,
	},
	data() {
		return {
			activities: activities,
			messageData: messageData,
			projectData: projectData,
			tasks: tasks,
			title: 'Profile',
			items: [
				{
					text: 'Shreyu',
					href: '/',
				},
				{
					text: 'Pages',
					href: '/',
				},
				{
					text: 'Profile',
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
			<div class="col-lg-3">
				<UserCard />
			</div>

			<div class="col-lg-9">
				<div class="card">
					<div class="card-body">
						<b-tabs class="navtab-bg" pills justified>
							<b-tab title="Activity" active>
								<Activities :activities="activities" />
							</b-tab>
							<b-tab title="Messages">
								<Messages :messages="messageData" />
							</b-tab>
							<b-tab title="Projects">
								<Projects :projects="projectData" />
							</b-tab>
							<b-tab title="Tasks">
								<Tasks :tasks="tasks" />
							</b-tab>
							<b-tab title="Files">
								<Files />
							</b-tab>
						</b-tabs>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>
