<template>
	<div class="card">
		<div class="card-body">
			<h4 class="mb-3 mt-0 header-title">Cards</h4>
			<div class="row bg-light p-3">
				<div class="col-lg-6 col-xl-3">
					<!-- Simple card -->

					<b-card
						:img-src="require('@assets/images/small/img-1.jpg')"
						img-alt="Card image"
						img-top
					>
						<b-card-title>
							<h5 class="card-title font-size-16">Card title</h5>
						</b-card-title>
						<b-card-text
							>Some quick example text to build on the card title and make up
							the bulk of the card's content. With supporting text below as a
							natural lead-in to additional content.</b-card-text
						>
						<b-button href="javascript:void(0);" variant="primary"
							>Button</b-button
						>
					</b-card>
				</div>

				<div class="col-lg-6 col-xl-3">
					<b-card
						no-body
						:img-src="require('@assets/images/small/img-2.jpg')"
						img-alt="Card image"
						img-top
					>
						<b-card-body>
							<b-card-title>
								<h5 class="card-title font-size-16">Card title</h5>
							</b-card-title>
							<b-card-text
								>Some quick example text to build on the card
								title.</b-card-text
							>
						</b-card-body>
						<ul class="list-group list-group-flush">
							<li class="list-group-item">Dapibus ac facilisis in</li>
						</ul>
						<div class="card-body">
							<a href="javascript:void(0);" class="card-link text-custom"
								>Card link</a
							>
							<a href="javascript:void(0);" class="card-link text-custom"
								>Another link</a
							>
						</div>
					</b-card>
				</div>

				<div class="col-xl-6">
					<div class="card">
						<div class="row no-gutters align-items-center">
							<div class="col-md-5">
								<img
									src="@assets/images/small/img-6.jpg"
									class="card-img"
									alt="..."
								/>
							</div>
							<div class="col-md-7">
								<div class="card-body">
									<h5 class="card-title font-size-16">Card title</h5>
									<p class="card-text text-muted"
										>This is a wider card with supporting text lead-in to
										additional content.</p
									>
									<p class="card-text">
										<small class="text-muted">Last updated 3 mins ago</small>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="card">
						<div class="row no-gutters align-items-center">
							<div class="col-md-7">
								<div class="card-body">
									<h5 class="card-title font-size-16">Card title</h5>
									<p class="card-text text-muted"
										>This is a wider card with supporting text lead-in to
										additional content.</p
									>
									<p class="card-text">
										<small class="text-muted">Last updated 3 mins ago</small>
									</p>
								</div>
							</div>
							<div class="col-md-5">
								<img
									src="@assets/images/small/img-4.jpg"
									class="card-img"
									alt="..."
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>