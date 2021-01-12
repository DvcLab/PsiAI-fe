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
		<div class="col-xl-6">
			<div class="card">
				<div class="card-body">
					<h5 class="header-title mb-3 mt-0">Nav Tabs</h5>
					<b-tabs>
						<b-tab title="Home" active>
							<p>{{ tabContent }}</p>
							<p class="mb-0">{{ content }}</p>
						</b-tab>
						<b-tab title="Profile">
							<p>{{ content }}</p>
							<p class="mb-0">{{ tabContent }}</p>
						</b-tab>
						<b-tab title="Message">
							<p>{{ tabContent }}</p>
							<p class="mb-0">{{ content }}</p>
						</b-tab>
					</b-tabs>
				</div>
			</div>
		</div>
		<div class="col-xl-6">
			<div class="card">
				<div class="card-body">
					<h5 class="header-title mb-3 mt-0">Nav Pills</h5>
					<b-tabs pills justified class="navtab-bg">
						<b-tab title="Home" active>
							<p>{{ tabContent }}</p>
							<p class="mb-0">{{ content }}</p>
						</b-tab>
						<b-tab title="Profile">
							<p>{{ content }}</p>
							<p class="mb-0">{{ tabContent }}</p>
						</b-tab>
						<b-tab title="Message">
							<p>{{ tabContent }}</p>
							<p class="mb-0">{{ content }}</p>
						</b-tab>
					</b-tabs>
				</div>
			</div>
		</div>
	</div>
	<!-- end row -->
</template>