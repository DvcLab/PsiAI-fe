<template>
	<div class="card">
		<div class="card-body">
			<h4 class="mb-3 mt-0 header-title">Badges</h4>

			<div class="row">
				<div class="col-xl-4">
					<div>
						<h5 class="font-size-15 mb-1">Default</h5>
						<p class="sub-header">
							Badges scale to match the size of the immediate parent element by
							using relative font sizing and
							<code class="highlighter-rouge">em</code> units.
						</p>
						<b-badge variant="primary">Primary</b-badge>
						<b-badge variant="secondary" class="ml-1">Secondary</b-badge>
						<b-badge variant="success" class="ml-1">Success</b-badge>
						<b-badge variant="danger" class="ml-1">Danger</b-badge>
						<b-badge variant="warning" class="ml-1">Warning</b-badge>
						<b-badge variant="info" class="ml-1">Info</b-badge>
					</div>
				</div>
				<div class="col-xl-4">
					<div class="mt-4 mt-xl-0">
						<h5 class="font-size-15 mb-1">Pill Badges</h5>
						<p class="sub-header">
							Use the
							<code>.badge-pill</code> modifier class to make badges more
							rounded.
						</p>
						<b-badge pill variant="primary">Primary</b-badge>
						<b-badge pill variant="secondary" class="ml-1">Secondary</b-badge>
						<b-badge pill variant="success" class="ml-1">Success</b-badge>
						<b-badge pill variant="danger" class="ml-1">Danger</b-badge>
						<b-badge pill variant="warning" class="ml-1">Warning</b-badge>
						<b-badge pill variant="info" class="ml-1">Info</b-badge>
					</div>
				</div>

				<div class="col-xl-4">
					<div class="mt-4 mt-xl-0">
						<h5 class="font-size-15 mb-1">Badges Lighten</h5>
						<p class="sub-header">
							Use the
							<code>.badge-soft-*</code> for a badge lighten.
						</p>
						<b-badge class="badge-soft-primary">Primary</b-badge>
						<b-badge class="badge-soft-secondary ml-1">Secondary</b-badge>
						<b-badge class="badge-soft-success ml-1">Success</b-badge>
						<b-badge class="badge-soft-danger ml-1">Danger</b-badge>
						<b-badge class="badge-soft-warning ml-1">Warning</b-badge>
						<b-badge class="badge-soft-info ml-1">Info</b-badge>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>