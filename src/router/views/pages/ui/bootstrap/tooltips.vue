<template>
	<div class="card">
		<div class="card-body">
			<h5 class="header-title mb-1 mt-0">Tooltips</h5>
			<p class="sub-header">
				Four options are available: top, right, bottom, and left aligned.
			</p>

			<div class="button-list">
				<b-button id="tooltip-top" variant="primary">Tooltip on top</b-button>
				<b-tooltip target="tooltip-top">Tooltip on top</b-tooltip>
				<b-button id="tooltip-button" variant="primary"
					>Tooltip on bottom</b-button
				>
				<b-tooltip target="tooltip-button" placement="bottom"
					>Tooltip on bottom</b-tooltip
				>
				<b-button id="tooltip-left-button" variant="primary"
					>Tooltip on left</b-button
				>
				<b-tooltip target="tooltip-left-button">Tooltip on left</b-tooltip>
				<b-button id="tooltip-right-button" variant="primary"
					>Tooltip on right</b-button
				>
				<b-tooltip target="tooltip-right-button" placement="bottom"
					>Tooltip on right</b-tooltip
				>
			</div>
		</div>
	</div>
</template>