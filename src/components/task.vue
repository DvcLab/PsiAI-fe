<script>
export default {
	props: {
		title: {
			type: String,
			default: '',
		},
		text: {
			type: String,
			default: '',
		},
		id: {
			type: Number,
			default: 0,
		},
	},
}
</script>
<template>
	<div>
		<div class="row mt-2">
			<div class="col">
				<div class="custom-control custom-checkbox">
					<input
						:id="`task-${id}`"
						type="checkbox"
						class="custom-control-input"
					/>
					<label class="custom-control-label" :for="`task-${id}`">{{
						title
					}}</label>
					<p class="font-size-13 text-muted">{{ text }}</p>
				</div>
				<!-- end checkbox -->
			</div>
		</div>
	</div>
</template>
