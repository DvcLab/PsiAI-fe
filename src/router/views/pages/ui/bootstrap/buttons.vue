<template>
	<div class="row">
		<div class="col-xl-6">
			<div class="card">
				<div class="card-body">
					<div>
						<h5 class="header-title mb-1 mt-0">Buttons</h5>
						<p class="sub-header">
							Use the button classes on an
							<code>&lt;a&gt;</code>, <code>&lt;button&gt;</code>, or
							<code>&lt;input&gt;</code> element.
						</p>

						<div class="button-list">
							<b-button variant="primary">Primary</b-button>
							<b-button variant="secondary">Secondary</b-button>
							<b-button variant="success">Success</b-button>
							<b-button variant="danger">Danger</b-button>
							<b-button variant="warning">Warning</b-button>
							<b-button variant="info">Info</b-button>
							<b-button variant="light">Light</b-button>
							<b-button variant="dark">Dark</b-button>
							<b-button variant="link">Link</b-button>
						</div>
					</div>
					<div class="mt-4 pt-1">
						<h5 class="font-size-16 mb-1">Outline buttons</h5>
						<p class="sub-header">
							Use a classes
							<code>.btn-outline-**</code> to quickly create a bordered buttons.
						</p>

						<div class="button-list">
							<b-button variant="outline-primary">Primary</b-button>
							<b-button variant="outline-secondary">Secondary</b-button>
							<b-button variant="outline-success">Success</b-button>
							<b-button variant="outline-danger">Danger</b-button>
							<b-button variant="outline-warning">Warning</b-button>
							<b-button variant="outline-info">Info</b-button>
							<b-button variant="outline-dark">Dark</b-button>
						</div>
					</div>
					<div class="mt-4 pt-1">
						<h5 class="font-size-16 mb-1">Soft buttons</h5>
						<p class="sub-header">
							Use a classes
							<code>.btn-soft-**</code> to quickly create buttons with soft
							background.
						</p>

						<div class="button-list">
							<button type="button" class="btn btn-soft-primary"
								>Primary</button
							>
							<button type="button" class="btn btn-soft-secondary"
								>Secondary</button
							>
							<button type="button" class="btn btn-soft-success"
								>Success</button
							>
							<button type="button" class="btn btn-soft-danger">Danger</button>
							<button type="button" class="btn btn-soft-warning"
								>Warning</button
							>
							<button type="button" class="btn btn-soft-info">Info</button>
							<button type="button" class="btn btn-soft-dark">Dark</button>
						</div>
					</div>
					<div class="mt-4 pt-1">
						<h5 class="font-size-16 mb-1">Button-Rounded</h5>
						<p class="sub-header">
							Add
							<code>.btn-rounded</code> to default button to get rounded
							corners.
						</p>

						<div class="button-list">
							<b-button pill variant="primary">Primary</b-button>
							<b-button pill variant="secondary">Secondary</b-button>
							<b-button pill variant="success">Success</b-button>
							<b-button pill variant="danger">Danger</b-button>
							<b-button pill variant="warning">Warning</b-button>
							<b-button pill variant="info">Info</b-button>
							<b-button pill variant="dark">Dark</b-button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="col-xl-6">
			<div class="card">
				<div class="card-body">
					<div class="mt-4 mt-xl-0">
						<h5 class="font-size-16 mb-1 mt-0">Button Width</h5>
						<p class="sub-header">
							Create buttons with minimum width by adding add
							<code>.width-xs</code>, <code>.width-sm</code>,
							<code>.width-md</code> or <code>.width-lg</code>.
						</p>

						<div class="button-list">
							<button type="button" class="btn btn-primary width-xs">Xs</button>
							<button type="button" class="btn btn-success width-sm"
								>Small</button
							>
							<button type="button" class="btn btn-info width-md"
								>Middle</button
							>
							<button type="button" class="btn btn-warning width-lg"
								>Large</button
							>
						</div>
					</div>

					<div class="mt-4 pt-1">
						<h5 class="font-size-16 mb-1">Button Sizes</h5>
						<p class="sub-header">
							Add
							<code>.btn-lg</code>, <code>.btn-sm</code> for additional sizes.
						</p>

						<div class="button-list">
							<b-button variant="primary" size="lg">Large button</b-button>
							<b-button variant="danger">Normal button</b-button>
							<b-button size="sm" variant="success">Small Button</b-button>
							<b-button block variant="primary">Block Button</b-button>
						</div>
					</div>
					<div class="mt-4 pt-1">
						<h5 class="font-size-16 mb-1">Button Group</h5>
						<p class="sub-header">
							Wrap a series of buttons with
							<code>.btn</code> in <code>.btn-group</code>.
						</p>

						<div class="row">
							<div class="col-md-6">
								<div class="btn-group mb-2">
									<button type="button" class="btn btn-info">Left</button>
									<button type="button" class="btn btn-info">Middle</button>
									<button type="button" class="btn btn-info">Right</button>
								</div>
								<br />
								<div class="btn-group mb-2 mr-1">
									<button type="button" class="btn btn-primary">1</button>
									<button type="button" class="btn btn-primary">2</button>
									<button type="button" class="btn btn-primary">3</button>
									<button type="button" class="btn btn-primary">4</button>
								</div>
								<div class="btn-group mb-2 mr-1">
									<button type="button" class="btn btn-danger">5</button>
									<button type="button" class="btn btn-danger">6</button>
									<button type="button" class="btn btn-danger">7</button>
								</div>
								<div class="btn-group mb-2">
									<button type="button" class="btn btn-success">8</button>
								</div>
								<br />
								<b-button-group>
									<b-button variant="info">1</b-button>
									<b-button variant="info">2</b-button>
									<b-button variant="info">3</b-button>
									<b-dropdown variant="primary">
										<template slot="button-content">
											Dropdown
											<i class="uil uil-angle-down"></i>
										</template>
										<b-dropdown-item>Dropdown Link</b-dropdown-item>
										<b-dropdown-item>Dropdown Link</b-dropdown-item>
									</b-dropdown>
								</b-button-group>
							</div>
							<div class="col-md-6">
								<div class="row">
									<div class="col-md-3">
										<div class="mt-2">
											<b-button-group vertical>
												<b-button variant="primary">Top</b-button>
												<b-button variant="primary">Middle</b-button>
												<b-button variant="primary">Bottom</b-button>
											</b-button-group>
										</div>
									</div>
									<div class="col-md-3">
										<div class="mt-2">
											<b-button-group vertical>
												<b-button variant="info">Button 1</b-button>
												<b-button variant="info">Button 2</b-button>
												<b-dropdown variant="info">
													<template slot="button-content">
														Button 3
														<i class="uil uil-angle-down"></i>
													</template>
													<b-dropdown-item>Dropdown Link</b-dropdown-item>
													<b-dropdown-item>Dropdown Link</b-dropdown-item>
												</b-dropdown>
											</b-button-group>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- end row -->
</template>