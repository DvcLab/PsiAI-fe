<script>
/**
 * Messages
 */
export default {
	props: {
		messages: {
			type: Array,
			default: () => [],
		},
	},
}
</script>
<template>
	<div>
		<h5 class="mt-3">Messages</h5>
		<ul class="list-unstyled">
			<li
				v-for="media in messages"
				:key="media.name"
				class="py-3 border-bottom"
			>
				<div class="media">
					<div v-if="media.image" class="mr-3">
						<img :src="`${media.image}`" alt class="avatar-md rounded-circle" />
					</div>
					<div
						v-if="media.font"
						class="avatar-md rounded-circle bg-soft-primary mr-3"
					>
						<span
							class="font-size-18 avatar-title text-primary font-weight-semibold"
							>{{ media.font }}</span
						>
					</div>
					<div class="media-body overflow-hidden">
						<h5 class="font-size-15 mt-2 mb-1">
							<a href="#" class="text-dark">{{ media.name }}</a>
						</h5>
						<p class="text-muted font-size-13 text-truncate mb-0">{{
							media.text
						}}</p>
					</div>
				</div>
			</li>
		</ul>
		<div class="text-center">
			<a href="javascript: void(0);" class="btn btn-primary btn-sm"
				>Load more</a
			>
		</div>
	</div>
</template>