<script>
import { VueEditor } from 'vue2-editor'
import 'quill/dist/quill.bubble.css'

export default {
	components: { VueEditor },
	props: {
		task: {
			type: Object,
			default: () => {
				return {}
			},
		},
	},
	data: () => {
		return {
			editorOptions: {
				theme: 'bubble',
			},
		}
	},
}
</script>
<template>
	<div class="card">
		<div class="card-body">
			<div class="row pb-3 border-bottom">
				<div class="col">
					<b-dropdown
						class="float-right"
						variant="link"
						toggle-class="p-0"
						right
					>
						<template v-slot:button-content>
							<i class="uil uil-ellipsis-h text-muted"></i>
						</template>
						<!-- item-->
						<b-dropdown-item href="javascript:void(0);">
							<i class="uil uil-file-upload mr-1"></i>Attachment
						</b-dropdown-item>
						<!-- item-->
						<b-dropdown-item href="javascript:void(0);">
							<i class="uil uil-edit mr-1"></i>Edit
						</b-dropdown-item>
						<!-- item-->
						<b-dropdown-item href="javascript:void(0);">
							<i class="uil uil-file-copy-alt mr-1"></i>Mark as Duplicate
						</b-dropdown-item>
						<b-dropdown-divider></b-dropdown-divider>
						<!-- item-->
						<b-dropdown-item href="javascript:void(0);" variant="danger">
							<i class="uil uil-trash-alt mr-1"></i>Delete
						</b-dropdown-item>
						<!-- end dropdown menu-->
					</b-dropdown>
					<!-- end dropdown-->

					<div class="custom-control custom-checkbox float-left">
						<input
							id="completedCheck"
							type="checkbox"
							class="custom-control-input"
						/>
						<label class="custom-control-label" for="completedCheck"
							>Mark as completed</label
						>
					</div>
					<!-- end custom-checkbox-->
				</div>
			</div>

			<div class="row">
				<div class="col">
					<h4 class="mt-3">{{ task.title }}</h4>
					<div class="row">
						<div class="col-6">
							<!-- assignee -->
							<p class="mt-2 mb-1 text-muted">Assigned To</p>
							<div class="media">
								<img
									:src="`${task.assignee_avatar}`"
									alt=""
									class="rounded-circle mr-2"
									height="24"
								/>
								<div class="media-body">
									<h5 class="mt-1 font-size-14">{{ task.assigned_to }}</h5>
								</div>
							</div>
							<!-- end assignee -->
						</div>
						<!-- end col -->

						<div class="col-6">
							<!-- start due date -->
							<p class="mt-2 mb-1 text-muted">Due Date</p>
							<div class="media">
								<i class="uil uil-schedule font-18 text-success mr-1"></i>
								<div class="media-body">
									<h5 class="mt-1 font-size-14">{{ task.due_date }}</h5>
								</div>
							</div>
							<!-- end due date -->
						</div>
						<!-- end col -->
					</div>
					<!-- end row -->

					<!-- task description -->
					<div class="row mt-3">
						<div class="col">
							<div id="taskDesk">
								<vue-editor
									v-model="task.description"
									:editor-options="editorOptions"
								></vue-editor>
							</div>
						</div>
						<!-- end col -->
					</div>
					<!-- end task description -->

					<!-- start sub tasks/checklists -->
					<h5 class="mt-4 mb-2 font-size-16">Checklists/Sub-tasks</h5>
					<div
						v-for="(subtask, index) of task.checklists"
						:key="index"
						class="custom-control custom-checkbox mt-1"
					>
						<input
							:id="`checklist-${index}`"
							type="checkbox"
							class="custom-control-input"
							:checked="subtask.completed"
						/>
						<label
							class="custom-control-label strikethrough"
							:for="`checklist-${index}`"
							>{{ subtask.title }}</label
						>
					</div>
					<!-- end sub tasks/checklists -->

					<!-- start attachments -->
					<h5 class="mt-4 mb-2 font-size-16">Attachments</h5>

					<div
						v-for="file of task.attachments"
						:key="`file-${file.id}`"
						class="card mb-2 shadow-none border"
					>
						<div class="p-1 px-2">
							<div class="row align-items-center">
								<div class="col-auto">
									<div class="avatar-sm font-weight-bold mr-3">
										<span
											class="avatar-title rounded bg-soft-primary text-primary"
										>
											<i class="uil-file-plus-alt font-size-18"></i>
										</span>
									</div>
								</div>
								<div class="col pl-0">
									<a
										href="javascript:void(0);"
										class="text-muted font-weight-bold"
										>{{ file.filename }}</a
									>
									<p class="mb-0">{{ file.size }}</p>
								</div>
								<div class="col-auto">
									<!-- Button -->
									<a
										v-b-tooltip.hover
										title="Download"
										href="javascript:void(0);"
										class="btn btn-link text-muted btn-lg p-0"
									>
										<i class="uil uil-cloud-download font-size-14"></i>
									</a>
									<a
										v-b-tooltip.hover
										title="Delete"
										href="javascript:void(0);"
										class="btn btn-link text-danger btn-lg p-0"
									>
										<i class="uil uil-multiply font-size-14"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					<!-- end attachments -->

					<!-- comments -->
					<div class="row mt-3">
						<div class="col">
							<h5 class="mb-2 font-size-16">Comments</h5>

							<div
								v-for="comment of task.comments"
								:key="`comment-${comment.id}`"
								class="media mt-3 p-1 border-bottom pb-2"
							>
								<img
									:src="comment.author_avatar"
									class="mr-2 rounded-circle"
									height="36"
									alt=""
								/>
								<div class="media-body">
									<h5 class="mt-0 mb-0 font-size-14">
										<span class="float-right text-muted font-size-12">{{
											comment.posted_on
										}}</span>
										{{ comment.author }}
									</h5>
									<p class="mt-1 mb-0 text-muted">
										{{ comment.text }}
									</p>
								</div>
							</div>
							<!-- end comment -->
						</div>
						<!-- end col -->
					</div>
					<!-- end row -->

					<div class="row mt-2">
						<div class="col">
							<div class="border rounded">
								<form action="#" class="comment-area-box">
									<textarea
										rows="3"
										class="form-control border-0 resize-none"
										placeholder="Your comment..."
									></textarea>
									<div class="p-2 bg-light">
										<div class="float-right">
											<button type="submit" class="btn btn-sm btn-success">
												<i class="uil uil-message mr-1"></i>Submit
											</button>
										</div>
										<div>
											<a href="#" class="btn btn-sm px-1 btn-light">
												<i class="uil uil-cloud-upload"></i>
											</a>
											<a href="#" class="btn btn-sm px-1 btn-light">
												<i class="uil uil-at"></i>
											</a>
										</div>
									</div>
								</form>
							</div>
							<!-- end .border-->
						</div>
						<!-- end col-->
					</div>
					<!-- end row-->
					<!-- end comments -->
				</div>
				<!-- end col -->
			</div>
			<!-- end row-->
		</div>
		<!-- end card-body -->
	</div>
	<!-- end card-->
</template>

<style>
.ql-bubble .ql-tooltip {
	border-radius: 4px !important;
}
</style>
