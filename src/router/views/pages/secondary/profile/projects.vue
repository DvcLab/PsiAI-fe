<script>
/**
 * Projects
 */
export default {
	props: {
		projects: {
			type: Array,
			default: () => [],
		},
	},
}
</script>

<template>
	<div>
		<h5 class="mt-3">Projects</h5>
		<div class="row">
			<div
				v-for="project in projects"
				:key="project.id"
				class="col-xl-4 col-lg-6"
			>
				<div class="card border">
					<div class="card-body">
						<div
							class="badge badge-success float-right"
							:class="{
								'badge-warning': `${project.status}` === 'Pending',
							}"
							>{{ project.status }}</div
						>
						<p
							class="text-success text-uppercase font-size-12 mb-2"
							:class="{
								'text-warning': `${project.type}` === 'Android',
							}"
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
						<div>
							<div>
								<ul class="list-inline">
									<li class="list-inline-item pr-2">
										<a
											:id="`date-tooltip-${project.id}`"
											href="javascript: void(0)"
											class="text-muted d-inline-block bg-transparent"
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
											class="text-muted d-inline-block bg-transparent"
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
											class="text-muted d-inline-block bg-transparent"
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
							<div class="pt-2">
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
			</div>
		</div>
	</div>
</template>