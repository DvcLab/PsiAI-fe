<script>
import draggable from 'vuedraggable'
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

import Task from './board-task'
import { tasks } from './data-taskboard'

export default {
	page: {
		title: 'Project Tasks Board',
		meta: [{ name: 'description', content: appConfig.description }],
	},
	components: { draggable, Layout, PageHeader, Task },
	data() {
		return {
			todoTasks: [...tasks[0].items],
			inProgressTasks: [...tasks[1].items],
			reviewTasks: [...tasks[2].items],
			doneTasks: [...tasks[3].items],
			title: 'Project Tasks Board',
			items: [
				{
					text: 'Shreyu',
					href: '/',
				},
				{
					text: 'Apps',
					href: '/',
				},
				{
					text: 'Tasks',
					href: '/',
				},
				{
					text: 'Tasks Board',
					active: true,
				},
			],
		}
	},
	computed: {
		dragOptions() {
			return {
				group: 'tasks',
			}
		},
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
						<div class="row align-items-center">
							<div class="col">
								<label class="font-weight-bold d-inline mr-2">
									<feather
										type="hard-drive"
										class="icon-dual icon-xs mr-2 align-middle"
									></feather
									>Project:
								</label>
								<b-dropdown
									class="d-inline"
									variant="link"
									toggle-class="font-weight-bold p-0 align-middle"
								>
									<template v-slot:button-content>
										Shreyu Design
										<i class="uil uil-angle-down font-size-16 align-middle"></i>
									</template>
									<a class="dropdown-item" href="#">
										<feather
											class="icon-dual icon-xs mr-2 align-middle"
											type="hard-drive"
										></feather
										>Shreyu Design
									</a>
									<a class="dropdown-item" href="#">
										<feather
											class="icon-dual icon-xs mr-2 align-middle"
											type="briefcase"
										></feather
										>Development
									</a>
									<div class="dropdown-divider"></div>
									<a class="dropdown-item" href="#">
										<feather
											class="icon-dual icon-xs mr-2 align-middle"
											type="folder-plus"
										></feather
										>Shreyu Angular
									</a>
									<a class="dropdown-item" href="#">
										<feather
											class="icon-dual icon-xs mr-2 align-middle"
											type="folder-plus"
										></feather
										>Shreyu React
									</a>
								</b-dropdown>
							</div>
							<div class="col text-right">
								<button id="btn-new-event" class="btn btn-primary">
									<i class="uil-plus mr-1"></i>Add New
								</button>
							</div>
						</div>
					</div>
					<!-- end card body-->
				</div>
				<!-- end card -->
			</div>
			<!-- end col-12 -->
		</div>

		<div class="row">
			<div class="col-12">
				<div class="board">
					<!-- todo tasks -->
					<div class="tasks border">
						<h5 class="mt-0 task-header header-title"
							>Todo <span class="font-size-13">({{ todoTasks.length }})</span>
						</h5>

						<div id="task-list-one" class="task-list-items">
							<draggable v-model="todoTasks" v-bind="dragOptions">
								<transition-group type="transition" :name="'flip-list'">
									<div v-for="task in todoTasks" :key="task.id">
										<Task :task="task" />
									</div>
								</transition-group>
							</draggable>
						</div>
					</div>
					<!-- end - todo tasks -->

					<!-- in progress tasks -->
					<div class="tasks border">
						<h5 class="mt-0 task-header header-title"
							>In Progress
							<span class="font-size-13">({{ inProgressTasks.length }})</span>
						</h5>

						<div id="task-list-one" class="task-list-items">
							<draggable v-model="inProgressTasks" v-bind="dragOptions">
								<transition-group type="transition" :name="'flip-list'">
									<div v-for="task in inProgressTasks" :key="task.id">
										<Task :task="task" />
									</div>
								</transition-group>
							</draggable>
						</div>
					</div>
					<!-- end - in progress -->

					<!-- review tasks -->
					<div class="tasks border">
						<h5 class="mt-0 task-header header-title"
							>Review
							<span class="font-size-13">({{ reviewTasks.length }})</span>
						</h5>

						<div id="task-list-one" class="task-list-items">
							<draggable v-model="reviewTasks" v-bind="dragOptions">
								<transition-group type="transition" :name="'flip-list'">
									<div v-for="task in reviewTasks" :key="task.id">
										<Task :task="task" />
									</div>
								</transition-group>
							</draggable>
						</div>
					</div>
					<!-- end - review -->

					<!-- done tasks -->
					<div class="tasks border">
						<h5 class="mt-0 task-header header-title"
							>Done
							<span class="font-size-13">({{ doneTasks.length }})</span>
						</h5>

						<div id="task-list-one" class="task-list-items">
							<draggable v-model="doneTasks" v-bind="dragOptions">
								<transition-group type="transition" :name="'flip-list'">
									<div v-for="task in doneTasks" :key="task.id">
										<Task :task="task" />
									</div>
								</transition-group>
							</draggable>
						</div>
					</div>
					<!-- end - done -->
				</div>
			</div>
		</div>
	</Layout>
</template>
