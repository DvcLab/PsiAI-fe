<script>
export default {
	data: () => {
		return {
			inlinepicker: +new Date(),
			inline: {
				inline: true,
				shorthandCurrentMonth: true,
			},
		}
	},
}
</script>
<template>
	<div class="card">
		<div class="card-body pt-2">
			<b-dropdown
				class="mt-2 float-right"
				variant="black"
				right
				toggle-class="p-0 arrow-none text-muted"
			>
				<template v-slot:button-content>
					<i class="uil uil-ellipsis-v"></i>
				</template>

				<!-- item-->
				<b-dropdown-item href="javascript:void(0);">
					<i class="uil uil-edit-alt mr-2"></i>Edit
				</b-dropdown-item>
				<!-- item-->
				<b-dropdown-item href="javascript:void(0);">
					<i class="uil uil-refresh mr-2"></i>Refresh
				</b-dropdown-item>
				<b-dropdown-divider></b-dropdown-divider>
				<!-- item-->
				<b-dropdown-item href="javascript:void(0);" variant="danger">
					<i class="uil uil-trash mr-2"></i>Delete
				</b-dropdown-item>
			</b-dropdown>
			<h6 class="header-title mb-4">Team Events</h6>

			<div class="row calendar-widget calendar-widget-inline">
				<div class="col-sm-6">
					<flat-pickr v-model="inlinepicker" :config="inline"></flat-pickr>
				</div>
				<div class="col-sm-6">
					<ul class="list-unstyled ml-sm-3 pl-sm-5 mt-4 mt-sm-0">
						<li class="mb-4">
							<p class="text-muted mb-0 font-size-13">
								<i class="uil uil-calender mr-1"></i>7:30 AM - 10:00 AM
							</p>
							<h6 class="mt-1 font-size-16">UX Planning Meeting</h6>
						</li>
						<li class="mb-4">
							<p class="text-muted mb-0 font-size-13">
								<i class="uil uil-calender mr-1"></i>10:30 AM - 11:45 AM
							</p>
							<h6 class="mt-1 font-size-16">Hyper v3 Scope Review</h6>
						</li>
						<li class="mb-4">
							<p class="text-muted mb-0 font-size-13">
								<i class="uil uil-calender mr-1"></i>12:15 PM - 02:00 PM
							</p>
							<h6 class="mt-1 font-size-16">Shreyu v4 Brainstorming</h6>
						</li>
						<li class="mb-4">
							<p class="text-muted mb-0 font-size-13">
								<i class="uil uil-calender mr-1"></i>5:30 PM - 06:15 PM
							</p>
							<h6 class="mt-1 font-size-16">Shreyu React Planning</h6>
						</li>
						<li>
							<a
								href="javascript: void(0);"
								class="btn btn-primary btn-block w-75 mb-0"
							>
								<i class="uil uil-focus-add mr-2"></i>Add Event
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>