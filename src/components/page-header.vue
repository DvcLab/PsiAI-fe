<script>
/**
 * A page title component - Renders the title with breadcrumbs
 */
export default {
	components: {},
	props: {
		title: {
			type: String,
			default: '',
		},
		items: {
			type: Array,
			default: () => {
				return []
			},
		},
	},
}
</script>

<template>
	<!-- start page title -->
	<div class="row page-title">
		<div class="col-md-12">
			<b-breadcrumb :items="items" class="float-right mt-1"></b-breadcrumb>
			<h4 class="mb-1 mt-0">{{ title }}</h4>
		</div>
	</div>
	<!-- end page title -->
</template>
