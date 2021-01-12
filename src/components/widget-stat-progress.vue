<script>
/**
 * A simple widget with progress
 */
export default {
	props: {
		title: {
			type: String,
			default: '',
		},
		value: {
			type: Number,
			default: 0,
		},
		progress: {
			type: Number,
			default: 0,
		},
		text: {
			type: String,
			default: '',
		},
		color: {
			type: String,
			default: '#5369f8',
		},
	},
}
</script>

<template>
	<div class="card">
		<div class="card-body p-0">
			<div class="p-3">
				<span class="text-muted text-uppercase font-size-12 font-weight-bold">{{
					title
				}}</span>
				<h2>{{ value }}</h2>
				<div class="my-2">
					<b-progress
						:value="progress"
						:variant="`${color}`"
						height="5px"
						class="m-0"
					></b-progress>
				</div>
				<span class="text-muted font-weight-semibold">{{ text }}</span>
			</div>
		</div>
	</div>
</template>
