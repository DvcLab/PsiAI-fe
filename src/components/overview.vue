<script>
/**
 * Overview - a simple listing to showcase some stats or numbers
 */
export default {
	props: {
		title: {
			type: String,
			default: 'Overview',
		},
		items: {
			type: Array,
			default: () => [],
		},
	},
}
</script>
<template>
	<div class="card">
		<div class="card-body p-0">
			<h5 class="card-title header-title border-bottom p-3 mb-0">Overview</h5>

			<div
				v-for="item in items"
				:key="item.title"
				class="media px-3"
				:class="item.class"
			>
				<div class="media-body">
					<h4 class="mt-0 mb-1 font-size-22 font-weight-normal">{{
						item.value
					}}</h4>
					<span class="text-muted">{{ item.title }}</span>
				</div>
				<feather
					:type="item.icon"
					class="icon-dual icon-lg align-self-center"
				></feather>
			</div>
		</div>
	</div>
</template>
