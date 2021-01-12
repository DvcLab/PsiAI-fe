<template>
	<div class="row">
		<div class="col-lg-6">
			<div class="card">
				<div class="card-body">
					<h5 class="header-title mb-1 mt-0">Basic Progressbars</h5>
					<p class="sub-header">Simple examples of progressbar</p>
					<div>
						<b-progress :value="0" :max="100" class="mb-3"></b-progress>
						<b-progress :value="33" :max="100" class="mb-3"></b-progress>
						<b-progress :value="66" :max="100" class="mb-3"></b-progress>
						<b-progress :value="100" :max="100" class="mb-3"></b-progress>
						<b-progress :value="25" show-value :max="100"></b-progress>
					</div>

					<div class="mt-5">
						<h5 class="font-size-16 mb-1 mt-0">Striped Progressbars</h5>
						<p class="sub-header"
							>Uses a gradient to create a striped effect.</p
						>
						<div>
							<b-progress
								:value="10"
								:max="100"
								class="mb-3"
								variant="primary"
								animated
							></b-progress>
							<b-progress
								:value="25"
								:max="100"
								class="mb-3"
								variant="success"
								animated
							></b-progress>
							<b-progress
								:value="50"
								:max="100"
								class="mb-3"
								variant="info"
								animated
							></b-progress>
							<b-progress
								:value="75"
								:max="100"
								class="mb-3"
								variant="warning"
								animated
							></b-progress>
							<b-progress
								:value="100"
								:max="100"
								class="mb-3"
								variant="danger"
								animated
							></b-progress>
							<b-progress
								:value="75"
								:max="100"
								variant="primary"
								animated
							></b-progress>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="col-lg-6">
			<div class="card">
				<div class="card-body">
					<div class="mt-4 mt-xl-0">
						<h5 class="font-size-16 mb-1 mt-0">Contextual Progressbars</h5>
						<p class="sub-header">
							Progress bars use some of the same button and alert classes for
							consistent styles.
						</p>
						<div>
							<b-progress
								:value="25"
								:max="100"
								class="mb-3"
								variant="success"
							></b-progress>
							<b-progress
								:value="50"
								:max="100"
								class="mb-3"
								variant="info"
							></b-progress>
							<b-progress
								:value="75"
								:max="100"
								class="mb-3"
								variant="warning"
							></b-progress>
							<b-progress
								:value="100"
								:max="100"
								class="mb-3"
								variant="danger"
							></b-progress>
							<b-progress class="mt-3" :max="100">
								<b-progress-bar
									:value="45 * (3 / 10)"
									variant="primary"
								></b-progress-bar>
								<b-progress-bar
									:value="45 * (6.6 / 10)"
									variant="success"
								></b-progress-bar>
								<b-progress-bar
									:value="45 * (4.8 / 10)"
									variant="info"
								></b-progress-bar>
							</b-progress>
						</div>

						<div class="mt-5">
							<h5 class="font-size-16 mb-1 mt-0">Progressbars Size</h5>
							<p class="sub-header">
								We can set a
								<code>height</code> value on the <code>.progress</code>. The
								inner <code>.progress-bar</code> will automatically resize
								accordingly.
							</p>
							<div>
								<b-progress
									:value="70"
									:max="100"
									class="mb-3"
									variant="primary"
									height="2px"
								></b-progress>
								<b-progress
									:value="30"
									:max="100"
									class="mb-3"
									variant="primary"
									height="5px"
								></b-progress>
								<b-progress
									:value="25"
									:max="100"
									class="mb-3"
									variant="success"
									height="8px"
								></b-progress>
								<b-progress
									:value="50"
									:max="100"
									class="mb-3"
									variant="info"
									height="12px"
								></b-progress>
								<b-progress
									:value="75"
									:max="100"
									class="mb-3"
									variant="warning"
									height="15px"
								></b-progress>
								<b-progress
									:value="38"
									:max="100"
									variant="danger"
									height="25px"
								></b-progress>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>