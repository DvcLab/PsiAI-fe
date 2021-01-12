<script>
import { FormWizard, TabContent } from 'vue-form-wizard'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

import Step1 from './step1'
import Step2 from './step2'

export default {
	page: {
		title: 'Forms Wizard',
		meta: [{ name: 'description', content: appConfig.description }],
	},
	components: { Layout, PageHeader, FormWizard, TabContent, Step1, Step2 },
	data() {
		return {
			title: 'Forms Wizard',
			items: [
				{
					text: 'Shreyu',
					href: '/',
				},
				{
					text: 'Forms',
					href: '/',
				},
				{
					text: 'Wizard',
					active: true,
				},
			],
			finalModel: {},
		}
	},
	methods: {
		validateStep(name) {
			var refToValidate = this.$refs[name]
			return refToValidate.validate()
		},
		mergePartialModels(model, isValid) {
			if (isValid) {
				// merging each step model into the final model
				this.finalModel = Object.assign({}, this.finalModel, model)
			}
		},
	},
}
</script>

<template>
	<Layout>
		<PageHeader :title="title" :items="items" />
		<div class="row">
			<div class="col-xl-6">
				<div class="card">
					<div class="card-body">
						<h4 class="header-title mt-0 mb-1">Basic Wizard</h4>
						<form-wizard color="#5369f8">
							<tab-content title="Account">
								<div class="row">
									<div class="col-12">
										<div class="form-group row mb-3">
											<label class="col-md-3 col-form-label">User name</label>
											<div class="col-md-9">
												<input
													type="text"
													class="form-control"
													name="userName"
													value="Coderthemes"
												/>
											</div>
										</div>
										<div class="form-group row mb-3">
											<label class="col-md-3 col-form-label">Password</label>
											<div class="col-md-9">
												<input
													type="password"
													class="form-control"
													value="123456789"
												/>
											</div>
										</div>

										<div class="form-group row mb-3">
											<label class="col-md-3 col-form-label">Re Password</label>
											<div class="col-md-9">
												<input
													type="password"
													class="form-control"
													value="123456789"
												/>
											</div>
										</div>
									</div>
									<!-- end col -->
								</div>
								<!-- end row -->
							</tab-content>
							<tab-content title="Profile">
								<div class="row">
									<div class="col-12">
										<div class="form-group row mb-3">
											<label class="col-md-3 col-form-label" for="name"
												>First name</label
											>
											<div class="col-md-9">
												<input
													type="text"
													name="name"
													class="form-control"
													value="Francis"
												/>
											</div>
										</div>
										<div class="form-group row mb-3">
											<label class="col-md-3 col-form-label" for="surname"
												>Last name</label
											>
											<div class="col-md-9">
												<input
													type="text"
													name="surname"
													class="form-control"
													value="Brinkman"
												/>
											</div>
										</div>

										<div class="form-group row mb-3">
											<label class="col-md-3 col-form-label" for="email"
												>Email</label
											>
											<div class="col-md-9">
												<input
													type="email"
													name="email"
													class="form-control"
													value="cory1979@hotmail.com"
												/>
											</div>
										</div>
									</div>
									<!-- end col -->
								</div>
								<!-- end row -->
							</tab-content>
							<tab-content title="Finish">
								<div class="row">
									<div class="col-12">
										<div class="text-center">
											<h2 class="mt-0">
												<i class="mdi mdi-check-all"></i>
											</h2>
											<h3 class="mt-0">Thank you !</h3>

											<p class="w-75 mb-2 mx-auto">
												Quisque nec turpis at urna dictum luctus. Suspendisse
												convallis dignissim eros at volutpat. In egestas mattis
												dui. Aliquam mattis dictum aliquet.
											</p>

											<div class="mb-3">
												<div class="custom-control custom-checkbox">
													<input
														id="customCheck1"
														type="checkbox"
														class="custom-control-input"
													/>
													<label class="custom-control-label" for="customCheck1"
														>I agree with the Terms and Conditions</label
													>
												</div>
											</div>
										</div>
									</div>
									<!-- end col -->
								</div>
								<!-- end row -->
							</tab-content>
						</form-wizard>
					</div>
				</div>
			</div>
			<div class="col-xl-6">
				<div class="card">
					<div class="card-body">
						<h4 class="header-title mt-0 mb-1">Validation</h4>
						<form-wizard color="#5369f8" error-color="#ff5c75">
							<tab-content
								title="Account"
								:before-change="() => validateStep('step1')"
							>
								<Step1 ref="step1" @on-validate="mergePartialModels" />
							</tab-content>
							<tab-content
								title="Profile"
								:before-change="() => validateStep('step2')"
							>
								<Step2 ref="step2" @on-validate="mergePartialModels" />
							</tab-content>
							<tab-content title="Finish">
								<div class="row">
									<div class="col-12">
										<div class="text-center">
											<h2 class="mt-0">
												<i class="mdi mdi-check-all"></i>
											</h2>
											<h3 class="mt-0">Thank you !</h3>

											<p class="w-75 mb-2 mx-auto">
												Quisque nec turpis at urna dictum luctus. Suspendisse
												convallis dignissim eros at volutpat. In egestas mattis
												dui. Aliquam mattis dictum aliquet.
											</p>

											<div class="mb-3">
												<div class="custom-control custom-checkbox">
													<input
														id="customCheck1"
														type="checkbox"
														class="custom-control-input"
													/>
													<label class="custom-control-label" for="customCheck1"
														>I agree with the Terms and Conditions</label
													>
												</div>
											</div>
										</div>
									</div>
									<!-- end col -->
								</div>
								<!-- end row -->
							</tab-content>
						</form-wizard>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>
