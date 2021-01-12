<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

import Stat from '@components/widget-stat'
import StatProgress from '@components/widget-stat-progress'
import StatChart from '@components/widget-stat-chart'
import StatChart2 from '@components/widget-stat-chart2'
import Profile1 from './userprofile/profile1'
import Profile2 from './userprofile/profile2'
import Profile3 from './userprofile/profile3'
import Profile4 from './userprofile/profile4'
import Member from '@components/member'
import Chat from '@components/chat'
import Overview from '@components/overview'
import Task from '@components/task'
import Activities from './activities'
import TeamEvents from './team-events'

/**
 * Team events
 */
export default {
	page: {
		title: 'Widgets',
		meta: [{ name: 'description', content: appConfig.description }],
	},
	components: {
		Layout,
		PageHeader,
		Stat,
		StatProgress,
		StatChart,
		StatChart2,
		Profile1,
		Profile2,
		Profile3,
		Profile4,
		Member,
		Chat,
		Overview,
		Task,
		Activities,
		TeamEvents,
	},
	data() {
		return {
			title: 'Widgets',
			items: [
				{
					text: 'Shreyu',
					href: '/',
				},
				{
					text: 'Components',
					href: '/',
				},
				{
					text: 'Widgets',
					active: true,
				},
			],
			statData: [
				{
					title: 'Today Revenue',
					value: 2100,
					icon: 'shopping-bag',
					color: 'primary',
				},
				{
					title: 'Product Sold',
					value: 1065,
					icon: 'coffee',
					color: 'warning',
				},
				{
					title: 'New Customers',
					value: 11,
					icon: 'users',
					color: 'success',
				},
				{
					title: 'New Visitors',
					value: 750,
					icon: 'file-text',
					color: 'info',
				},
			],
			statProgress: [
				{
					title: 'Total Revenue',
					value: 2100,
					progress: 32,
					text: '36% Avg',
					color: 'primary',
				},
				{
					title: 'Product Sold',
					value: 1021,
					progress: 60,
					text: '36 Daily Avg',
					color: 'warning',
				},
				{
					title: 'New Customers',
					value: 11,
					progress: 60,
					text: '3 Daily Avg',
					color: 'success',
				},
				{
					title: 'New Visitors',
					value: 1021,
					progress: 45,
					text: '300 Daily Avg',
					color: 'success',
				},
			],
			statChart: [
				{
					mainTitle: 'today revenue',
					value: 2100,
					subValue: '10.21%',
					chartColor: '#5369f8',
				},
				{
					mainTitle: 'product sold',
					value: 1065,
					subValue: '5.05%',
					chartColor: '#f77e53',
				},
				{
					mainTitle: 'New customers',
					value: 11,
					subValue: '25.16%',
					chartColor: '#43d39e',
				},
				{
					mainTitle: 'new visitors',
					value: 750,
					subValue: '5.05%',
					chartColor: '#ffbe0b',
				},
			],
			chartData: [
				{
					chartColor: '#5369f8',
					mainTitle: 'Visits',
					subValue: '21,000',
					data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39],
				},
				{
					chartColor: '#43d39e',
					mainTitle: 'Customers',
					subValue: '1100',
					data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39],
				},
				{
					chartColor: '#f77e53',
					mainTitle: 'Revenue',
					subValue: '$201,200',
					data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39],
				},
			],
			membersData: [
				{
					image: require('@assets/images/users/avatar-7.jpg'),
					text: 'Senior Sales Guy',
					name: 'Shreyu N',
				},
				{
					image: require('@assets/images/users/avatar-9.jpg'),
					text: 'Social Media Campaign',
					name: 'Greeva Y',
				},
				{
					image: require('@assets/images/users/avatar-4.jpg'),
					text: 'Inventory Manager',
					name: 'Nik G',
				},
				{
					image: require('@assets/images/users/avatar-1.jpg'),
					text: 'Sales Persons',
					name: 'Hardik G',
				},
			],
			overviewData: [
				{
					class: 'py-3 border-bottom',
					icon: 'package',
					value: '2100',
					title: 'Total Tasks Completed',
				},
				{
					class: 'py-3 border-bottom',
					icon: 'clock',
					value: '21,000',
					title: 'Total Hours Worked',
				},
				{
					class: 'py-3 border-bottom',
					icon: 'briefcase',
					value: '1095',
					title: 'Total Issues Fixed',
				},
				{
					class: 'py-3',
					icon: 'tag',
					value: '51,200',
					title: 'Total Commits',
				},
			],
			tasksData: [
				{
					title: 'Draft the new contract document for sales team',
					text: 'Due on 24 Aug, 2019',
					id: 1,
				},
				{
					title: 'iOS App home page',
					text: 'Due on 23 Aug, 2019',
					id: 2,
				},
				{
					title: 'Write a release note for Shreyu',
					text: 'Due on 22 Aug, 2019',
					id: 3,
				},
				{
					title: 'Invite Greeva to a project shreyu admin',
					text: 'Due on 21 Aug, 2019',
					id: 4,
				},
				{
					title: 'Enable analytics tracking for main website',
					text: 'Due on 20 Aug, 2019',
					id: 5,
				},
			],
			chatMessages: [
				{
					id: 1,
					image: require('@assets/images/users/avatar-9.jpg'),
					name: 'Greeva',
					message: 'Hello!',
					time: '10:00',
				},
				{
					id: 2,
					image: require('@assets/images/users/avatar-7.jpg'),
					name: 'Shreyu',
					message: 'Hi, How are you? What about our next meeting?',
					time: '10:01',
				},
				{
					id: 3,
					image: require('@assets/images/users/avatar-9.jpg'),
					name: 'Greeva',
					message: 'Yeah everything is fine',
					time: '10:01',
				},
				{
					id: 4,
					image: require('@assets/images/users/avatar-7.jpg'),
					name: 'Shreyu',
					message: 'Awesome! let me know if we can talk in 20 min',
					time: '10:02',
				},
			],
			maxHeight: '268px',
		}
	},
}
</script>

<template>
	<Layout>
		<PageHeader :title="title" :items="items" />
		<div class="row">
			<div v-for="stat of statData" :key="stat.title" class="col-md-6 col-xl-3">
				<Stat
					:title="stat.title"
					:value="stat.value"
					:icon="stat.icon"
					:color="stat.color"
				/>
			</div>
		</div>
		<div class="row">
			<div
				v-for="item of statProgress"
				:key="item.title"
				class="col-md-6 col-xl-3"
			>
				<StatProgress
					:title="item.title"
					:value="item.value"
					:progress="item.progress"
					:text="item.text"
					:color="item.color"
				/>
			</div>
		</div>
		<div class="row">
			<div
				v-for="stat of statChart"
				:key="stat.mainTitle"
				class="col-md-6 col-xl-3"
			>
				<StatChart
					:main-title="stat.mainTitle"
					:value="stat.value"
					:sub-value="stat.subValue"
					:chart-color="stat.chartColor"
				/>
			</div>
		</div>
		<div class="row">
			<div
				v-for="chart of chartData"
				:key="chart.subValue"
				class="col-md-6 col-xl-4"
			>
				<StatChart2
					:chart-color="chart.chartColor"
					:main-title="chart.mainTitle"
					:sub-value="chart.subValue"
					:chart-data="chart.data"
				/>
			</div>
		</div>

		<h5 class="mb-4">Profile/User</h5>

		<div class="row">
			<div class="col-md-6 col-xl-3">
				<Profile1 />
			</div>
			<div class="col-md-6 col-xl-3">
				<Profile2 />
			</div>
			<div class="col-md-6 col-xl-3">
				<Profile3 />
			</div>
			<div class="col-md-6 col-xl-3">
				<Profile4 />
			</div>
		</div>

		<h5 class="mb-4">Team</h5>
		<div class="row">
			<div class="col-xl-3">
				<div class="card">
					<div class="card-body pt-2">
						<h6 class="header-title mb-4">Team Members</h6>
						<div v-for="member of membersData" :key="member.name">
							<Member
								:image="member.image"
								:name="member.name"
								:text="member.text"
							/>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-5">
				<TeamEvents />
			</div>

			<div class="col-xl-4">
				<Chat
					:chat-window-height="maxHeight"
					:messages="chatMessages"
					title="Team Chat"
				/>
			</div>
		</div>

		<div class="row">
			<div class="col-md-6 col-xl-4">
				<Overview title="Stats" :items="overviewData" />
			</div>
			<!-- tasks -->
			<div class="col-md-6 col-xl-4">
				<div class="card">
					<div class="card-body pt-2 pb-3">
						<router-link
							to="/task/list"
							class="btn btn-primary btn-sm mt-2 float-right"
							>View All</router-link
						>
						<h6 class="header-title mb-4">Tasks</h6>
						<div v-for="task in tasksData" :key="task.id">
							<Task :id="task.id" :text="task.text" :title="task.title" />
						</div>
					</div>
				</div>
			</div>

			<div class="col-xl-4">
				<Activities />
			</div>
		</div>
	</Layout>
</template>
