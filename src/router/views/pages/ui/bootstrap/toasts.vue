<template>
	<div class="card">
		<div class="card-body">
			<div>
				<h5 class="header-title mb-1 mt-0">Toasts</h5>
				<p class="sub-header"
					>Push notifications to your visitors with a toast, a lightweight and
					easily customizable alert message</p
				>

				<div class="pt-4 px-3">
					<b-toast visible static no-auto-hide>
						<div slot="toast-title">
							<b-img
								:src="require('@assets/images/logo.svg')"
								class="mr-1"
								height="18"
							></b-img>
							<strong class="mr-auto">Shreyu</strong>
							<small>11 min ago</small> </div
						>Hello, world! This is a toast message.
					</b-toast>

					<b-toast visible static no-auto-hide>
						<div slot="toast-title">
							<b-img
								:src="require('@assets/images/logo.svg')"
								class="mr-1"
								height="18"
							></b-img>
							<strong class="mr-auto">Shreyu</strong>
							<small>11 min ago</small> </div
						>Hello, world! This is a toast message.
					</b-toast>
					<b-toast visible static no-auto-hide>
						<div slot="toast-title">
							<b-img
								:src="require('@assets/images/logo.svg')"
								class="mr-1"
								height="18"
							></b-img>
							<strong class="mr-auto">Shreyu</strong>
							<small>11 min ago</small> </div
						>Hello, world! This is a toast message.
					</b-toast>

					<b-toast visible static no-auto-hide>
						<div slot="toast-title">
							<b-img
								:src="require('@assets/images/logo.svg')"
								class="mr-1"
								height="18"
							></b-img>
							<strong class="mr-auto">Shreyu</strong>
							<small>11 min ago</small> </div
						>Hello, world! This is a toast message.
					</b-toast>
				</div>
			</div>
		</div>
	</div>
</template>