<script>
export default {
	data: () => {
		return {
			show: false,
			scrollModal: false,
			errorModal: false,
		}
	},
}
</script>
<template>
	<div class="card">
		<div class="card-body">
			<h4 class="mt-0 mb-1 header-title">Modals</h4>

			<p class="sub-header"
				>A rendered modal with header, body, and set of actions in the
				footer.</p
			>
			<div class="row">
				<div class="col-xl-4">
					<h5 class="font-size-16 mb-3">Examples</h5>
					<div class="button-list">
						<b-button variant="primary" @click="show = true"
							>Standard modal</b-button
						>
					</div>
					<b-modal v-model="show" title="Modal Heading" title-class="font-18">
						<h6>Text in a modal</h6>
						<p
							>Duis mollis, est non commodo luctus, nisi erat porttitor
							ligula.</p
						>
						<hr />
						<h6>Overflowing text to show scroll behavior</h6>
						<p
							>Cras mattis consectetur purus sit amet fermentum. Cras justo
							odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
							porta ac consectetur ac, vestibulum at eros.</p
						>
						<p
							>Praesent commodo cursus magna, vel scelerisque nisl consectetur
							et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
							auctor.</p
						>
						<p
							>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
							cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
							dui. Donec ullamcorper nulla non metus auctor fringilla.</p
						>
						<template v-slot:modal-footer>
							<b-button variant="light" @click="show = false">Close</b-button>
							<b-button variant="primary">Save Changes</b-button>
						</template>
					</b-modal>
				</div>

				<div class="col-xl-4">
					<div class="mt-4 mt-xl-0">
						<h5 class="font-size-16 mb-3">Modal sizes</h5>
						<div class="button-list">
							<!-- Extra large modal -->
							<b-button v-b-modal.modal-xlg variant="secondary"
								>Extra large modal</b-button
							>
							<b-modal
								id="modal-xlg"
								size="xl"
								title="Extra large modal"
								title-class="font-18"
								hide-footer
								>...</b-modal
							>
							<!-- Large modal -->
							<b-button v-b-modal.modal-lg variant="success"
								>Large modal</b-button
							>
							<b-modal
								id="modal-lg"
								size="lg"
								title="Large modal"
								title-class="font-18"
								hide-footer
								>...</b-modal
							>
							<!-- Small modal -->
							<b-button v-b-modal.modal-sm variant="info">Small modal</b-button>
							<b-modal
								id="modal-sm"
								size="sm"
								title="Small modal"
								title-class="font-18"
								hide-footer
								>...</b-modal
							>
						</div>
					</div>
				</div>

				<div class="col-xl-4">
					<div class="mt-4 mt-xl-0">
						<h5 class="font-size-16 mb-3">Other exmaples</h5>
						<div class="button-list">
							<!-- Center modal -->
							<b-button v-b-modal.modal-center variant="warning"
								>Center modal</b-button
							>
							<b-modal
								id="modal-center"
								centered
								title="Center modal"
								title-class="font-18"
								hide-footer
							>
								<h5>Overflowing text to show scroll behavior</h5>
								<p
									>Cras mattis consectetur purus sit amet fermentum. Cras justo
									odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
									risus, porta ac consectetur ac, vestibulum at eros.</p
								>
								<p class="mb-0"
									>Praesent commodo cursus magna, vel scelerisque nisl
									consectetur et. Vivamus sagittis lacus vel augue laoreet
									rutrum faucibus dolor auctor.</p
								>
							</b-modal>
							<!-- Scrollable -->
							<b-button variant="dark" @click="scrollModal = true"
								>Scrollable</b-button
							>
							<b-modal
								v-model="scrollModal"
								scrollable
								title="Scrollable Content"
								title-class="font-18"
							>
								<p
									>Cras mattis consectetur purus sit amet fermentum. Cras justo
									odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
									risus, porta ac consectetur ac, vestibulum at eros.</p
								>
								<p
									>Praesent commodo cursus magna, vel scelerisque nisl
									consectetur et. Vivamus sagittis lacus vel augue laoreet
									rutrum faucibus dolor auctor.</p
								>
								<p
									>Aenean lacinia bibendum nulla sed consectetur. Praesent
									commodo cursus magna, vel scelerisque nisl consectetur et.
									Donec sed odio dui. Donec ullamcorper nulla non metus auctor
									fringilla.</p
								>
								<p
									>Cras mattis consectetur purus sit amet fermentum. Cras justo
									odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
									risus, porta ac consectetur ac, vestibulum at eros.</p
								>
								<p
									>Praesent commodo cursus magna, vel scelerisque nisl
									consectetur et. Vivamus sagittis lacus vel augue laoreet
									rutrum faucibus dolor auctor.</p
								>
								<p
									>Aenean lacinia bibendum nulla sed consectetur. Praesent
									commodo cursus magna, vel scelerisque nisl consectetur et.
									Donec sed odio dui. Donec ullamcorper nulla non metus auctor
									fringilla.</p
								>
								<p
									>Cras mattis consectetur purus sit amet fermentum. Cras justo
									odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
									risus, porta ac consectetur ac, vestibulum at eros.</p
								>
								<p
									>Praesent commodo cursus magna, vel scelerisque nisl
									consectetur et. Vivamus sagittis lacus vel augue laoreet
									rutrum faucibus dolor auctor.</p
								>
								<p
									>Aenean lacinia bibendum nulla sed consectetur. Praesent
									commodo cursus magna, vel scelerisque nisl consectetur et.
									Donec sed odio dui. Donec ullamcorper nulla non metus auctor
									fringilla.</p
								>
								<p
									>Cras mattis consectetur purus sit amet fermentum. Cras justo
									odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
									risus, porta ac consectetur ac, vestibulum at eros.</p
								>
								<p
									>Praesent commodo cursus magna, vel scelerisque nisl
									consectetur et. Vivamus sagittis lacus vel augue laoreet
									rutrum faucibus dolor auctor.</p
								>
								<p
									>Aenean lacinia bibendum nulla sed consectetur. Praesent
									commodo cursus magna, vel scelerisque nisl consectetur et.
									Donec sed odio dui. Donec ullamcorper nulla non metus auctor
									fringilla.</p
								>
								<p
									>Cras mattis consectetur purus sit amet fermentum. Cras justo
									odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
									risus, porta ac consectetur ac, vestibulum at eros.</p
								>
								<p
									>Praesent commodo cursus magna, vel scelerisque nisl
									consectetur et. Vivamus sagittis lacus vel augue laoreet
									rutrum faucibus dolor auctor.</p
								>
								<p
									>Aenean lacinia bibendum nulla sed consectetur. Praesent
									commodo cursus magna, vel scelerisque nisl consectetur et.
									Donec sed odio dui. Donec ullamcorper nulla non metus auctor
									fringilla.</p
								>
								<p
									>Cras mattis consectetur purus sit amet fermentum. Cras justo
									odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
									risus, porta ac consectetur ac, vestibulum at eros.</p
								>
								<template v-slot:modal-footer>
									<b-button variant="light" @click="scrollModal = false"
										>Close</b-button
									>
									<b-button variant="primary">Save Changes</b-button>
								</template>
							</b-modal>
							<b-button variant="danger" @click="errorModal = true"
								>Error</b-button
							>
							<b-modal
								v-model="errorModal"
								centered
								hide-footer
								title="Error modal"
								title-class="font-18"
							>
								<div class="text-center">
									<i class="uil-no-entry text-warning display-3"></i>
									<h4 class="text-danger mt-4">Page not Found</h4>
									<p class="w-75 mx-auto text-muted"
										>Praesent commodo cursus magna, vel scelerisque nisl
										consectetur et.</p
									>
									<div class="mt-4">
										<a
											class="btn btn-outline-primary btn-rounded width-md"
											href="javascript: void(0);"
											@click="errorModal = false"
										>
											<i class="uil uil-arrow-left mr-1"></i> Back
										</a>
									</div>
								</div>
							</b-modal>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>