<template>
	<div class="card">
		<div class="card-body">
			<h4 class="mb-3 mt-0 header-title">Spinners</h4>

			<div class="row">
				<div class="col-xl-6">
					<div>
						<h5 class="font-size-15 mb-1">Border spinner</h5>
						<p class="sub-header"
							>Use the border spinners for a lightweight loading indicator.</p
						>

						<div>
							<b-spinner label="Loading..." variant="primary"></b-spinner>
							<b-spinner
								label="Loading..."
								variant="secondary"
								class="ml-3"
							></b-spinner>
							<b-spinner
								label="Loading..."
								variant="success"
								class="ml-3"
							></b-spinner>
							<b-spinner
								label="Loading..."
								variant="danger"
								class="ml-3"
							></b-spinner>
							<b-spinner
								label="Loading..."
								variant="warning"
								class="ml-3"
							></b-spinner>
							<b-spinner
								label="Loading..."
								variant="info"
								class="ml-3"
							></b-spinner>
						</div>
					</div>
				</div>

				<div class="col-xl-6">
					<div class="mt-4 mt-lg-0">
						<h5 class="font-size-15 mb-1">Growing spinner</h5>
						<p class="sub-header"
							>If you don’t fancy a border spinner, switch to the grow spinner.
							While it doesn’t technically spin, it does repeatedly grow!</p
						>

						<div>
							<b-spinner type="grow" variant="primary"></b-spinner>
							<b-spinner
								type="grow"
								variant="secondary"
								class="ml-3"
							></b-spinner>
							<b-spinner type="grow" variant="success" class="ml-3"></b-spinner>
							<b-spinner type="grow" variant="danger" class="ml-3"></b-spinner>
							<b-spinner type="grow" variant="warning" class="ml-3"></b-spinner>
							<b-spinner type="grow" variant="info" class="ml-3"></b-spinner>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>