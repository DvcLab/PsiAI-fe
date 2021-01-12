<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'

import { projectData } from './data-list'

export default {
	page: {
		title: 'Projects List',
		meta: [{ name: 'description', content: appConfig.description }],
	},
	components: { Layout },
	data() {
		return {
			projectData: projectData,
		}
	},
}
</script>

<template>
	<Layout>
		<div class="row page-title align-items-center">
			<div class="col-md-3 col-xl-6">
				<h4 class="mb-1 mt-0">Projects</h4>
			</div>
			<div class="col-md-9 col-xl-6 text-md-right">
				<div class="mt-4 mt-md-0">
					<button type="button" class="btn btn-danger mr-4 mb-3 mb-sm-0">
						<i class="uil-plus mr-1"></i> Create Project
					</button>
					<div class="btn-group mb-3 mb-sm-0">
						<button type="button" class="btn btn-primary">All</button>
					</div>
					<div class="btn-group ml-1">
						<button type="button" class="btn btn-white">Ongoing</button>
						<button type="button" class="btn btn-white">Finished</button>
					</div>
					<div class="btn-group ml-2 d-none d-sm-inline-block">
						<button type="button" class="btn btn-primary btn-sm">
							<i class="uil uil-apps"></i>
						</button>
					</div>
					<div class="btn-group d-none d-sm-inline-block">
						<button type="button" class="btn btn-white btn-sm">
							<i class="uil uil-align-left-justify"></i>
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div
				v-for="project in projectData"
				:key="project.id"
				class="col-xl-4 col-lg-6"
			>
				<div class="card">
					<div class="card-body">
						<div
							class="badge badge-success float-right"
							:class="{ 'badge-warning': `${project.status}` === 'Pending' }"
							>{{ project.status }}</div
						>
						<p
							class="text-success text-uppercase font-size-12 mb-2"
							:class="{ 'text-warning': `${project.type}` === 'Android' }"
							>{{ project.type }}</p
						>
						<h5 cl>
							<a href="javascript: void(0)" class="text-dark">{{
								project.title
							}}</a>
						</h5>
						<p class="text-muted mb-4">{{ project.text }}</p>

						<div>
							<a href="javascript: void(0);">
								<img
									:src="`${project.images[0]}`"
									alt
									class="avatar-sm m-1 rounded-circle"
								/>
							</a>
							<a href="javascript: void(0);">
								<img
									:src="`${project.images[1]}`"
									alt
									class="avatar-sm m-1 rounded-circle"
								/>
							</a>
						</div>
					</div>
					<div class="card-body border-top">
						<div class="row align-items-center">
							<div class="col-sm-auto">
								<ul class="list-inline mb-0">
									<li class="list-inline-item pr-2">
										<a
											:id="`date-tooltip-${project.id}`"
											href="javascript: void(0)"
											class="text-muted d-inline-block"
										>
											<b-tooltip
												:target="`date-tooltip-${project.id}`"
												triggers="hover"
												placement="top"
												>Due date</b-tooltip
											>
											<i class="uil uil-calender mr-1"></i>
											{{ project.date }}
										</a>
									</li>
									<li class="list-inline-item pr-2">
										<a
											:id="`task-tooltip-${project.id}`"
											href="javascript: void(0)"
											class="text-muted d-inline-block"
										>
											<b-tooltip
												:target="`task-tooltip-${project.id}`"
												triggers="hover"
												placement="top"
												>Tasks</b-tooltip
											>
											<i class="uil uil-bars mr-1"></i>
											{{ project.bars }}
										</a>
									</li>
									<li class="list-inline-item">
										<a
											:id="`comment-tooltip-${project.id}`"
											href="javascript: void(0)"
											class="text-muted d-inline-block"
										>
											<b-tooltip
												:target="`comment-tooltip-${project.id}`"
												triggers="hover"
												placement="top"
												>Comments</b-tooltip
											>
											<i class="uil uil-comments-alt mr-1"></i>
											{{ project.comment }}
										</a>
									</li>
								</ul>
							</div>
							<div class="col offset-sm-1">
								<b-progress
									:value="project.progress"
									:variant="project.color"
									height="5px"
									class="m-0"
								></b-progress>
							</div>
						</div>
					</div>
				</div>
				<!-- end card -->
			</div>
		</div>
		<div class="row mb-3 mt-2">
			<div class="col-12">
				<div class="text-center">
					<a href="javascript:void(0);" class="btn btn-white">
						<feather
							type="loader"
							class="icon-dual icon-xs mr-2 align-middle"
						></feather
						>Load more
					</a>
				</div>
			</div>
			<!-- end col-->
		</div>
		<!-- end row -->
	</Layout>
</template>
