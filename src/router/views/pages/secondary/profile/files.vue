<template>
	<div>
		<h5 class="mt-3">Files</h5>

		<div class="card mb-2 shadow-none border">
			<div class="p-1 px-2">
				<div class="row align-items-center">
					<div class="col-auto">
						<img
							src="@assets/images/projects/project-1.jpg"
							class="avatar-sm rounded"
							alt="file-image"
						/>
					</div>
					<div class="col pl-0">
						<a href="javascript:void(0);" class="text-muted font-weight-bold"
							>sales-assets.zip</a
						>
						<p class="mb-0">2.3 MB</p>
					</div>
					<div class="col-auto">
						<!-- Button -->
						<a
							href="javascript:void(0);"
							title="Download"
							class="btn btn-link text-muted btn-lg p-0"
						>
							<i id="tooltip" class="uil uil-cloud-download font-size-14"></i>
							<b-tooltip target="tooltip" triggers="hover" placement="bottom"
								>Download</b-tooltip
							>
						</a>
						<a
							href="javascript:void(0);"
							title="Delete"
							class="btn btn-link text-danger btn-lg p-0 ml-1"
						>
							<i id="delete" class="uil uil-multiply font-size-14"></i>
							<b-tooltip target="delete" triggers="hover" placement="bottom"
								>Delete</b-tooltip
							>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="card mb-2 shadow-none border">
			<div class="p-1 px-2">
				<div class="row align-items-center">
					<div class="col-auto">
						<img
							src="@assets/images/projects/project-2.jpg"
							class="avatar-sm rounded"
							alt="file-image"
						/>
					</div>
					<div class="col pl-0">
						<a href="javascript:void(0);" class="text-muted font-weight-bold"
							>new-contarcts.docx</a
						>
						<p class="mb-0">1.25 MB</p>
					</div>
					<div class="col-auto">
						<!-- Button -->
						<a
							href="javascript:void(0);"
							class="btn btn-link text-muted btn-lg p-0"
						>
							<i
								id="tooltip-download"
								class="uil uil-cloud-download font-size-14"
							></i>
							<b-tooltip
								target="tooltip-download"
								triggers="hover"
								placement="bottom"
								>Download</b-tooltip
							>
						</a>
						<a
							href="javascript:void(0);"
							class="btn btn-link text-danger btn-lg p-0 ml-1"
						>
							<i id="tooltip-delete" class="uil uil-multiply font-size-14"></i>
							<b-tooltip
								target="tooltip-delete"
								triggers="hover"
								placement="bottom"
								>Delete</b-tooltip
							>
						</a>
					</div>
				</div>
			</div>
		</div>
		<!-- end attachments -->
	</div>
</template>