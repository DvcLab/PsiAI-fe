<template>
	<div class="card">
		<div class="card-body">
			<h5 class="header-title mb-1 mt-0">Popovers</h5>
			<p class="sub-header">
				Add small overlays of content, like those on the iPad, to any element
				for housing secondary information.
			</p>

			<div class="button-list">
				<b-button
					v-b-popover.top="
						'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'
					"
					variant="light"
					>Popover on top</b-button
				>

				<b-button
					v-b-popover.bottom="
						'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'
					"
					variant="light"
					>Popover on bottom</b-button
				>
				<b-button
					v-b-popover.right="
						'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'
					"
					variant="light"
					>Popover on right</b-button
				>
				<b-button
					v-b-popover.left="
						'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'
					"
					variant="light"
					>Popover on left</b-button
				>
			</div>
		</div>
	</div>
</template>