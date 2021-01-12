<script>
/**
 * Activities
 */
export default {}
</script>

<template>
	<div class="card">
		<div class="card-body pt-2 pb-3">
			<router-link
				to="/"
				class="btn btn-primary btn-sm mt-2 float-right"
				href="javascript: void(0);"
				>View All</router-link
			>
			<h6 class="header-title mb-4">Activities</h6>

			<div class="media">
				<img
					src="@assets/images/users/avatar-7.jpg"
					class="mr-3 avatar rounded-circle"
					alt="shreyu"
				/>
				<div class="media-body">
					<h6 class="mt-0 mb-0 font-size-15 font-weight-normal">
						<a href class="font-weight-bold">Shreyu</a> has attached
						design-draft.sketch in project
						<span class="font-weight-bold text-primary">Admin</span>
					</h6>
					<p class="text-muted">2 Min Ago</p>
				</div>
			</div>

			<div class="media mt-3">
				<div class="avatar mr-3 font-size-24 font-weight-normal">
					<span class="avatar-title rounded-circle bg-soft-primary text-primary"
						>G</span
					>
				</div>
				<div class="media-body">
					<h6 class="mt-0 mb-0 font-size-15 font-weight-normal">
						<a href class="font-weight-bold">Greeva</a> has commented on project
						<span class="font-weight-bold text-primary">Admin</span>
					</h6>
					<p class="text-muted">12 Min Ago</p>
				</div>
			</div>

			<div class="media mt-3">
				<img
					src="@assets/images/users/avatar-9.jpg"
					class="mr-3 avatar rounded-circle"
					alt="Mannat"
				/>
				<div class="media-body">
					<h6 class="mt-0 mb-0 font-size-15 font-weight-normal">
						<a href class="font-weight-bold">Mannat</a> has reacted with
						<i class="uil uil-thumbs-up text-success font-size-13"></i> on
						comment from
						<span class="font-weight-bold text-primary">Shreyu</span> on project
						<span class="font-weight-bold text-primary">Admin</span>
					</h6>
					<p class="text-muted">14 Min Ago</p>
				</div>
			</div>

			<div class="media mt-3">
				<div class="avatar mr-3 font-size-24 font-weight-normal">
					<span class="avatar-title rounded-circle bg-soft-success text-success"
						>D</span
					>
				</div>
				<div class="media-body">
					<h6 class="mt-0 mb-0 font-size-15 font-weight-normal">
						<a href class="font-weight-bold">Dhyani</a> has reacted with
						<i class="uil uil-heart-sign text-danger font-size-13"></i> on
						comment from
						<span class="font-weight-bold text-primary">Shreyu</span> on project
						<span class="font-weight-bold text-primary">Admin</span>
					</h6>
					<p class="text-muted">14 Min Ago</p>
				</div>
			</div>
		</div>
	</div>
</template>
