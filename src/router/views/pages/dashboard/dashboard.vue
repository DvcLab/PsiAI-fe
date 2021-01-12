<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'

import StatChart from '@components/widget-stat-chart'
import Overview from '@components/overview'
import Member from '@components/member'
import Task from '@components/task'
import Chat from '@components/chat'

import {
	revenueAreaChart,
	targetsBarChart,
	salesDonutChart,
	ordersData,
} from './data'

/**
 * Dashboard-1 Component
 */
export default {
	page: {
		title: 'Dashboard',
		meta: [{ name: 'description', content: appConfig.description }],
	},
	components: {
		VuePerfectScrollbar,
		Layout,
		StatChart,
		Overview,
		Member,
		Task,
		Chat,
	},
	data() {
		return {
			revenueAreaChart: revenueAreaChart,
			targetsBarChart: targetsBarChart,
			salesDonutChart: salesDonutChart,
			ordersData: ordersData,

			maxHeight: '328px',
			overviewData: [
				{
					class: 'border-bottom py-4',
					icon: 'users',
					value: '121,000',
					title: 'Total Visitors',
				},
				{
					class: 'border-bottom py-4',
					icon: 'image',
					value: '21,000',
					title: 'Total Product Views',
				},
				{
					class: 'py-4',
					icon: 'shopping-bag',
					value: '$21.5',
					title: 'Revenue Per Visitor',
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
				{
					image: require('@assets/images/users/avatar-2.jpg'),
					text: 'Sales Persons',
					name: 'Stive K',
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
				{
					title: 'Invite user to a project',
					text: 'Due on 28 Aug, 2019',
					id: 6,
				},
				{
					title: 'Write a release note',
					text: 'Due on 14 Aug, 2019',
					id: 7,
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
			dateConfig: {
				mode: 'range',
			},
			selectedDate: [new Date().setDate(new Date().getDate() - 7), new Date()],
		}
	},
}
</script>

<template>
	<Layout>
		<div class="row page-title align-items-center">
			<div class="col-sm-4 col-xl-6">
				<h4 class="mb-1 mt-0">Dashboard</h4>
			</div>
			<div class="col-sm-8 col-xl-6">
				<form class="form-inline float-sm-right mt-3 mt-sm-0">
					<div class="form-group mb-sm-0 mr-2">
						<flat-pickr
							v-model="selectedDate"
							class="form-control"
							:config="dateConfig"
							name="date"
						></flat-pickr>
					</div>
					<div class="btn-group">
						<b-dropdown variant="primary" right>
							<template v-slot:button-content>
								<i class="uil uil-file-alt mr-1"></i>Download
								<i class="icon">
									<feather type="chevron-down" class="align-middle"></feather>
								</i>
							</template>
							<b-dropdown-item href="#" class="notify-item">
								<feather
									type="mail"
									class="icon-dual icon-xs mr-2 align-middle"
								></feather>
								<span>Email</span>
							</b-dropdown-item>
							<b-dropdown-item href="#" class="notify-item">
								<feather
									type="printer"
									class="icon-dual icon-xs mr-2 align-middle"
								></feather>
								<span>Print</span>
							</b-dropdown-item>
							<b-dropdown-divider></b-dropdown-divider>
							<b-dropdown-item href="#" class="notify-item">
								<feather
									type="file"
									class="icon-dual icon-xs mr-2 align-middle"
								></feather>
								<span>Re-Generate</span>
							</b-dropdown-item>
						</b-dropdown>
					</div>
				</form>
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
			<div class="col-xl-3">
				<Overview :items="overviewData" />
			</div>

			<div class="col-xl-6">
				<div class="card">
					<div class="card-body pb-0">
						<ul class="nav card-nav float-right">
							<li class="nav-item">
								<a class="nav-link text-muted" href="javascript: void(0);"
									>Today</a
								>
							</li>
							<li class="nav-item">
								<a class="nav-link text-muted" href="javascript: void(0);"
									>7d</a
								>
							</li>
							<li class="nav-item">
								<a class="nav-link active" href="javascript: void(0);">15d</a>
							</li>
							<li class="nav-item">
								<a class="nav-link text-muted" href="javascript: void(0);"
									>1m</a
								>
							</li>
							<li class="nav-item">
								<a class="nav-link text-muted" href="javascript: void(0);"
									>1y</a
								>
							</li>
						</ul>
						<h5 class="card-title mb-0 header-title">Revenue</h5>
						<!-- Revenue Area Chart -->
						<apexchart
							type="area"
							height="296"
							:series="revenueAreaChart.series"
							:options="revenueAreaChart.chartOptions"
						></apexchart>
						<!-- end revenue chart -->
					</div>
				</div>
			</div>

			<div class="col-xl-3">
				<div class="card">
					<div class="card-body pb-0">
						<h5 class="card-title header-title">Targets</h5>
						<!-- Target Radialbar chart -->
						<div class="mt-3">
							<apexchart
								type="bar"
								height="282"
								:series="targetsBarChart.series"
								:options="targetsBarChart.chartOptions"
							></apexchart>
						</div>
						<!-- end target chart -->
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-xl-5">
				<div class="card">
					<div class="card-body">
						<h5 class="card-title mt-0 pb-2 header-title">Sales By Category</h5>
						<!-- Sales donut chart -->
						<apexchart
							type="donut"
							height="304"
							:series="salesDonutChart.series"
							:options="salesDonutChart.chartOptions"
						></apexchart>
						<!-- end sales chart -->
					</div>
				</div>
			</div>
			<div class="col-xl-7">
				<div class="card">
					<div class="card-body">
						<a
							href="javascript: void(0);"
							class="btn btn-primary btn-sm float-right"
						>
							<i class="uil uil-export ml-1"></i> Export
						</a>
						<h5 class="card-title mt-0 mb-0 header-title">Recent Orders</h5>
						<div class="table-responsive mt-4 mb-0">
							<b-table-simple class="table table-hover table-nowrap mb-0">
								<b-thead class="thead-white">
									<b-tr>
										<b-th>#</b-th>
										<b-th>Product</b-th>
										<b-th>Customer</b-th>
										<b-th>Price</b-th>
										<b-th>Status</b-th>
									</b-tr>
								</b-thead>
								<b-tbody>
									<b-tr v-for="order in ordersData" :key="order.name">
										<b-td>{{ order.id }}</b-td>
										<b-td>{{ order.product }}</b-td>
										<b-td>{{ order.name }}</b-td>
										<b-td>{{ order.price }}</b-td>
										<b-td>
											<span
												class="badge"
												:class="{
													'badge-soft-warning': `${order.status}` === 'Pending',
													'badge-soft-success':
														`${order.status}` === 'Delivered',
													'badge-soft-danger': `${order.status}` === 'Declined',
												}"
												>{{ order.status }}</span
											>
										</b-td>
									</b-tr>
								</b-tbody>
							</b-table-simple>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-xl-4">
				<div class="card">
					<div class="card-body pt-2 pb-2">
						<h5 class="mb-4 header-title">Top Performers</h5>
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

			<div class="col-xl-4">
				<div class="card">
					<div class="card-body pt-2 pb-3">
						<router-link
							to="/task/list"
							class="btn btn-primary btn-sm mt-2 float-right"
							>View All</router-link
						>
						<h5 class="mb-4 header-title">Tasks</h5>

						<VuePerfectScrollbar style="max-height: 390px;">
							<div>
								<div v-for="task in tasksData" :key="task.id">
									<Task :id="task.id" :text="task.text" :title="task.title" />
								</div>
							</div>
						</VuePerfectScrollbar>
					</div>
				</div>
			</div>

			<div class="col-xl-4">
				<Chat
					:chat-window-height="maxHeight"
					:messages="chatMessages"
					title="Recent Conversation"
				/>
			</div>
		</div>
	</Layout>
</template>
