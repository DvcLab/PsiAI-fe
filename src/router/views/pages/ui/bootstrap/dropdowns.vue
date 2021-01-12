<template>
	<div class="row">
		<div class="col-lg-6">
			<div class="card">
				<div class="card-body">
					<h5 class="header-title mb-1 mt-0">Dropdown Examples</h5>
					<p class="sub-header"
						>The best part is you can do this with any button variant, too:</p
					>

					<div class="mt-2 mr-1">
						<b-dropdown variant="primary">
							<template slot="button-content">
								Primary
								<i class="uil uil-angle-down"></i>
							</template>
							<b-dropdown-item href="#">Action</b-dropdown-item>
							<b-dropdown-item href="#">Another action</b-dropdown-item>
							<b-dropdown-item href="#">Something else here</b-dropdown-item>
						</b-dropdown>
						<b-dropdown variant="secondary" class="ml-1">
							<template slot="button-content">
								Secondary
								<i class="uil uil-angle-down"></i>
							</template>
							<b-dropdown-item href="#">Action</b-dropdown-item>
							<b-dropdown-item href="#">Another action</b-dropdown-item>
							<b-dropdown-item href="#">Something else here</b-dropdown-item>
						</b-dropdown>
						<b-dropdown variant="success" class="ml-1">
							<template slot="button-content">
								Success
								<i class="uil uil-angle-down"></i>
							</template>
							<b-dropdown-item href="#">Action</b-dropdown-item>
							<b-dropdown-item href="#">Another action</b-dropdown-item>
							<b-dropdown-item href="#">Something else here</b-dropdown-item>
						</b-dropdown>
						<b-dropdown variant="info" class="ml-1">
							<template slot="button-content">
								Info
								<i class="uil uil-angle-down"></i>
							</template>
							<b-dropdown-item href="#">Action</b-dropdown-item>
							<b-dropdown-item href="#">Another action</b-dropdown-item>
							<b-dropdown-item href="#">Something else here</b-dropdown-item>
						</b-dropdown>
						<b-dropdown variant="warning" class="ml-1">
							<template slot="button-content">
								Warning
								<i class="uil uil-angle-down"></i>
							</template>
							<b-dropdown-item href="#">Action</b-dropdown-item>
							<b-dropdown-item href="#">Another action</b-dropdown-item>
							<b-dropdown-item href="#">Something else here</b-dropdown-item>
						</b-dropdown>
						<b-dropdown variant="danger" class="ml-1">
							<template slot="button-content">
								Danger
								<i class="uil uil-angle-down"></i>
							</template>
							<b-dropdown-item href="#">Action</b-dropdown-item>
							<b-dropdown-item href="#">Another action</b-dropdown-item>
							<b-dropdown-item href="#">Something else here</b-dropdown-item>
						</b-dropdown>
					</div>
				</div>
			</div>
		</div>
		<div class="col-lg-6">
			<div class="card">
				<div class="card-body">
					<h5 class="header-title mb-1 mt-0">Dropdown - More Examples</h5>
					<p class="sub-header"
						>You can put a form or simple text within a dropdown menu or set the
						different position</p
					>
					<div class="mt-2 mr-1">
						<b-dropdown variant="primary" class="ml-1">
							<template slot="button-content">
								Simple text
								<i class="uil uil-angle-down"></i>
							</template>
							<b-dropdown-text style="width: 320px;">
								<div class="text-muted">
									<p
										>Some example text that's free-flowing within the dropdown
										menu.</p
									>
									<p class="mb-0">And this is more example text.</p>
								</div>
							</b-dropdown-text>
						</b-dropdown>
						<b-dropdown variant="secondary" class="ml-1">
							<template slot="button-content">
								Dropdown menu Forms
								<i class="uil uil-angle-down"></i>
							</template>
							<b-dropdown-text style="width: 320px;">
								<div class="form-group">
									<label for="exampleDropdownFormEmail2">Email address</label>
									<input
										id="exampleDropdownFormEmail2"
										type="email"
										class="form-control"
										placeholder="email@example.com"
									/>
								</div>
								<div class="form-group">
									<label for="exampleDropdownFormPassword2">Password</label>
									<input
										id="exampleDropdownFormPassword2"
										type="password"
										class="form-control"
										placeholder="Password"
									/>
								</div>
								<div class="form-group">
									<div class="custom-control custom-checkbox">
										<input type="checkbox" class="custom-control-input" />
										<label class="custom-control-label">
											Remember me
										</label>
									</div>
								</div>
								<button type="submit" class="btn btn-primary">Sign in</button>
							</b-dropdown-text>
						</b-dropdown>
						<b-dropdown variant="success" right class="ml-1">
							<template slot="button-content">
								Right Align
								<i class="uil uil-angle-down"></i>
							</template>
							<b-dropdown-item href="#">Action</b-dropdown-item>
							<b-dropdown-item href="#">Another action</b-dropdown-item>
							<b-dropdown-item href="#">Something else here</b-dropdown-item>
						</b-dropdown>
						<b-dropdown variant="info" dropright class="ml-1">
							<template slot="button-content">
								Drop right
								<i class="uil uil-angle-right"></i>
							</template>
							<b-dropdown-item href="#">Action</b-dropdown-item>
							<b-dropdown-item href="#">Another action</b-dropdown-item>
							<b-dropdown-item href="#">Something else here</b-dropdown-item>
						</b-dropdown>
						<b-dropdown variant="danger" dropleft class="ml-1">
							<template slot="button-content">
								<i class="uil uil-angle-left"></i>
								Drop left
							</template>
							<b-dropdown-item href="#">Action</b-dropdown-item>
							<b-dropdown-item href="#">Another action</b-dropdown-item>
							<b-dropdown-item href="#">Something else here</b-dropdown-item>
						</b-dropdown>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>