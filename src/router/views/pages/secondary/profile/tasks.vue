<script>
/**
 * Tasks
 */
export default {
	props: {
		tasks: {
			type: Array,
			default: () => [],
		},
	},
}
</script>
<template>
	<div>
		<h5 class="mt-3 mb-0">Tasks</h5>
		<div class="card mb-0 shadow-none">
			<div class="card-body">
				<div
					v-for="(task, index) in tasks"
					:key="index"
					class="row justify-content-sm-between border-bottom mt-2 pt-2"
				>
					<div class="col-lg-6 mb-2 mb-lg-0">
						<div class="custom-control custom-checkbox">
							<input
								:id="`task${index}`"
								type="checkbox"
								class="custom-control-input"
							/>
							<label class="custom-control-label" :for="`task${index}`">{{
								task.name
							}}</label>
						</div>
						<!-- end checkbox -->
					</div>
					<!-- end col -->
					<div class="col-lg-6">
						<div class="d-sm-flex justify-content-between">
							<div>
								<img
									:src="`${task.user}`"
									alt="image"
									class="avatar-xs rounded-circle"
								/>
							</div>
							<div class="mt-3 mt-sm-0">
								<ul class="list-inline font-13 text-sm-right">
									<li class="list-inline-item pr-1">
										<i class="uil uil-schedule font-16 mr-1"></i>
										{{ task.time }}
									</li>
									<li class="list-inline-item pr-1">
										<i class="uil uil-align-alt font-16 mr-1"></i>
										{{ task.task }}
									</li>
									<li class="list-inline-item pr-2">
										<i class="uil uil-comment-message font-16 mr-1"></i>
										{{ task.message }}
									</li>
									<li class="list-inline-item">
										<span
											class="badge p-1"
											:class="{
												'badge-soft-danger': `${task.status}` === 'High',
												'badge-soft-info': `${task.status}` === 'Medium',
												'badge-soft-success': `${task.status}` === 'Low',
											}"
											>{{ task.status }}</span
										>
									</li>
								</ul>
							</div>
						</div>
						<!-- end .d-flex-->
					</div>
					<!-- end col -->
				</div>
			</div>
		</div>
	</div>
</template>