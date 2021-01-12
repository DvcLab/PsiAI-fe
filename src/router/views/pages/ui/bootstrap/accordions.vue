<script>
export default {
	data: () => {
		return {
			tabContent: `Vakal text here dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.`,
			content: ` Donec pede justo, fringilla vel, aliquet nec, vulputate
                  eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                  consequat vitae, eleifend ac, enim.`,
		}
	},
}
</script>

<template>
	<div class="row">
		<div class="col-lg-6">
			<div class="card">
				<div class="card-body">
					<h5 class="header-title mb-3 mt-0">Accordions Example</h5>

					<div role="tablist" class="custom-accordionwitharrow">
						<b-card no-body class="mb-1 border shadow-none">
							<b-card-header header-tag="header" role="tab">
								<a href="javascript: void(0);" class="text-black">
									<h5 v-b-toggle.accordion-1 class="h5 m-0 font-size-16"
										>What is Lorem Ipsum?</h5
									>
								</a>
							</b-card-header>
							<b-collapse
								id="accordion-1"
								visible
								accordion="my-accordion"
								role="tabpanel"
							>
								<b-card-body>
									<b-card-text>{{ content }}</b-card-text>
								</b-card-body>
							</b-collapse>
						</b-card>

						<b-card no-body class="mb-1 border shadow-none">
							<b-card-header header-tag="header" role="tab">
								<a href="javascript: void(0);" class="text-black">
									<h5 v-b-toggle.accordion-2 class="m-0 font-size-16"
										>Why do we use it?</h5
									>
								</a>
							</b-card-header>
							<b-collapse
								id="accordion-2"
								accordion="my-accordion"
								role="tabpanel"
							>
								<b-card-body>
									<b-card-text>{{ content }}</b-card-text>
								</b-card-body>
							</b-collapse>
						</b-card>

						<b-card no-body class="mb-1 border shadow-none">
							<b-card-header header-tag="header" role="tab">
								<a href="javascript: void(0);" class="text-black">
									<h5 v-b-toggle.accordion-3 class="m-0 font-size-16"
										>Where does it come from?</h5
									>
								</a>
							</b-card-header>
							<b-collapse
								id="accordion-3"
								accordion="my-accordion"
								role="tabpanel"
							>
								<b-card-body>
									<b-card-text>{{ content }}</b-card-text>
								</b-card-body>
							</b-collapse>
						</b-card>
					</div>
				</div>
			</div>
		</div>

		<div class="col-lg-6">
			<div class="card">
				<div class="card-body">
					<h5 class="header-title mb-3 mt-0">Custom Accordion</h5>

					<div role="tablist" class="custom-accordion ml-4">
						<b-card no-body class="mb-1">
							<b-card-header header-tag="header" role="tab">
								<a href="javascript: void(0);" class="text-black">
									<h5 v-b-toggle.custom-1 class="m-0 font-size-14">
										<i class="uil uil-question-circle h3 text-primary icon"></i>
										What is Anim text here?
									</h5>
								</a>
							</b-card-header>
							<b-collapse
								id="custom-1"
								visible
								accordion="accordion"
								role="tabpanel"
							>
								<b-card-body>
									<b-card-text>{{ content }}</b-card-text>
								</b-card-body>
							</b-collapse>
						</b-card>

						<b-card no-body class="mb-1">
							<b-card-header header-tag="header" role="tab">
								<a href="javascript: void(0);" class="text-black">
									<h5 v-b-toggle.custom-2 class="m-0 font-size-14">
										<i class="uil uil-question-circle h3 text-primary icon"></i>
										Why use Anim text here?
									</h5>
								</a>
							</b-card-header>
							<b-collapse id="custom-2" accordion="accordion" role="tabpanel">
								<b-card-body>
									<b-card-text>{{ content }}</b-card-text>
								</b-card-body>
							</b-collapse>
						</b-card>

						<b-card no-body class="mb-1">
							<b-card-header header-tag="header" role="tab">
								<a href="javascript: void(0);" class="text-black">
									<h5 v-b-toggle.custom-3 class="m-0 font-size-14">
										<i class="uil uil-question-circle h3 text-primary icon"></i>
										How many variations exist?
									</h5>
								</a>
							</b-card-header>
							<b-collapse id="custom-3" accordion="accordion" role="tabpanel">
								<b-card-body>
									<b-card-text>{{ content }}</b-card-text>
								</b-card-body>
							</b-collapse>
						</b-card>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- end row -->
</template>