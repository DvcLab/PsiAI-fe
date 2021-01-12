<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'

/**
 * Pricing component
 */
export default {
	page: {
		title: 'Pricing',
		meta: [{ name: 'description', content: appConfig.description }],
	},
	components: { Layout },
	data() {
		return {
			title: 'Pricing',
			items: [
				{
					text: 'Shreyu',
					href: '/',
				},
				{
					text: 'Extras',
					href: '/',
				},
				{
					text: 'Pricing',
					active: true,
				},
			],
			plans: [
				{
					id: 1,
					name: 'Professional Pack',
					icon: 'users',
					price: '$19',
					features: [
						'10 GB Storage',
						'500 GB Bandwidth',
						'No Domain',
						'Email Support',
						'24x7 Support',
					],
					isRecommended: false,
				},
				{
					id: 2,
					name: 'Business Pack',
					icon: 'briefcase',
					price: '$29',
					features: [
						'50 GB Storage',
						'900 GB Bandwidth',
						'2 Domain',
						'Email Support',
						'24x7 Support',
					],
					isRecommended: true,
				},
				{
					id: 3,
					name: 'Enterprise Pack',
					icon: 'shopping-bag',
					price: '$49',
					features: [
						'100 GB Storage',
						'Unlimited Bandwidth',
						'10 Domain',
						'Email Support',
						'24x7 Support',
					],
					isRecommended: false,
				},
			],
		}
	},
}
</script>

<template>
	<Layout>
		<div class="row justify-content-center">
			<div class="col-lg-10">
				<div class="text-center mt-4 mb-5">
					<h3>Simple pricing for Everyone</h3>
					<p class="text-muted"
						>Fully functional accounts are starting from $19/month only</p
					>
				</div>
				<div class="row">
					<div v-for="plan in plans" :key="plan.id" class="col-lg-4">
						<div class="card card-pricing">
							<div class="card-body p-4">
								<div class="media">
									<div class="media-body">
										<h5 class="mt-0 mb-2 font-size-16">{{ plan.name }}</h5>
										<h2 class="mt-0 mb-2">
											{{ plan.price }}
											<span class="font-size-14">/ Month</span>
										</h2>
									</div>
									<div class="align-self-center">
										<!-- <i class="icon-dual icon-lg" [attr.data-feather]="plan.icon"></i> -->
										<feather
											class="icon-dual icon-lg"
											:type="plan.icon"
										></feather>
									</div>
								</div>

								<ul
									class="card-pricing-features text-muted border-top pt-2 mt-2 pl-0 list-unstyled"
								>
									<li v-for="feature in plan.features" :key="feature">
										<i class="uil uil-check text-success font-size-15 mr-1"></i>
										{{ feature }}
									</li>
								</ul>

								<div class="mt-5 text-center">
									<button
										class="btn px-sm-4"
										:class="{
											'btn-primary': plan.isRecommended,
											'btn-soft-primary': !plan.isRecommended,
										}"
									>
										<i class="uil uil-arrow-right mr-1"></i>Buy Now for
										{{ plan.price }}
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- end row -->
	</Layout>
</template>
