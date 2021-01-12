<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import bootstrapPlugin from '@fullcalendar/bootstrap'
import listPlugin from '@fullcalendar/list'
import { required } from 'vuelidate/lib/validators'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

import { calendarEvents, categories } from './data-calendar'

export default {
	page: {
		title: 'Calendar',
		meta: [{ name: 'description', content: appConfig.description }],
	},
	components: { FullCalendar, Layout, PageHeader },
	data() {
		return {
			title: 'Calendar',
			items: [
				{
					text: 'Shreyu',
					href: '/',
				},
				{
					text: 'Apps',
					href: '/',
				},
				{
					text: 'Calendar',
					active: true,
				},
			],
			calendarWeekends: true,
			calendarPlugins: [
				dayGridPlugin,
				timeGridPlugin,
				interactionPlugin,
				bootstrapPlugin,
				listPlugin,
			],
			themeSystem: 'bootstrap',
			calendarEvents: calendarEvents,
			createModal: false,
			showmodal: false,
			eventModal: false,
			categories: categories,
			submitted: false,
			submit: false,
			newEventData: {},
			edit: {},
			deleteId: {},
			event: {
				title: '',
				category: '',
			},
			editevent: {
				editTitle: '',
			},
		}
	},
	validations: {
		event: {
			title: { required },
			category: { required },
		},
	},
	methods: {
		/**
		 * Modal form submit
		 */
		handleSubmit(e) {
			this.submitted = true

			// stop here if form is invalid
			this.$v.$touch()
			if (this.$v.$invalid) {
				return
			} else {
				const title = this.event.title
				const category = this.event.category

				this.calendarEvents = this.calendarEvents.concat({
					id: this.calendarEvents.length + 1,
					title,
					start: new Date(),
					end: new Date(),
					classNames: [category],
				})

				this.showmodal = false
				this.newEventData = {}
			}
			this.submitted = false
			this.event = {}
		},
		/**
		 * Hide modal along with form reset
		 */
		hideModal(e) {
			this.submitted = false
			this.showmodal = false
			this.event = {}
		},
		/**
		 * Edit event modal submit
		 */
		editSubmit(e) {
			this.submit = true
			const editTitle = this.editevent.editTitle
			this.edit.setProp('title', editTitle)
			this.eventModal = false
		},

		/**
		 * Delete event
		 */
		deleteEvent() {
			var deleteId = this.edit.id
			this.calendarEvents = this.calendarEvents.filter(
				(x) => '' + x.id !== '' + deleteId
			)
			this.eventModal = false
		},
		/**
		 * Modal open for add event
		 */
		dateClicked(info) {
			this.newEventData = info
			this.showmodal = true
		},
		/**
		 * Modal open for edit event
		 */
		editEvent(info) {
			this.edit = info.event
			this.editevent.editTitle = this.edit.title
			this.eventModal = true
		},
		/**
		 * Closes the modal
		 */
		closeModal() {
			this.eventModal = false
		},
	},
}
</script>

<template>
	<Layout>
		<PageHeader :title="title" :items="items" />
		<div class="row">
			<div class="col-12">
				<div class="card">
					<div class="card-body">
						<div class="row align-items-center">
							<div class="col-xl-2 col-lg-3 col-6">
								<img
									src="@assets/images/cal.png"
									class="mr-4 align-self-center img-fluid"
									alt="cal"
								/>
							</div>
							<div class="col-xl-10 col-lg-9">
								<div class="mt-4 mt-lg-0">
									<h5 class="mt-0 mb-1 font-weight-bold"
										>Welcome to Your Calendar</h5
									>
									<p class="text-muted mb-2">
										The calendar shows the events synced from all your linked
										calendars. Click on event to see or edit the details. You
										can create new event by clicking on "Create New event"
										button or any cell available in calendar below.
									</p>

									<button
										id="btn-new-event"
										class="btn btn-primary mt-2 mr-1"
										@click="showmodal = true"
									>
										<i class="uil-plus-circle"></i> Create New Event
									</button>
									<button class="btn btn-white mt-2">
										<i class="uil-sync"></i> Link Calendars
									</button>
								</div>
							</div>
						</div>
					</div>
					<!-- end card body-->
				</div>
				<!-- end card -->
			</div>
			<!-- end col-12 -->
		</div>
		<!-- end row -->

		<div class="row">
			<div class="col-12">
				<div class="card">
					<div class="card-body">
						<div class="app-calendar">
							<FullCalendar
								ref="fullCalendar"
								default-view="dayGridMonth"
								:header="{
									left: 'prev,next today',
									center: 'title',
									right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
								}"
								:button-text="{
									today: 'Today',
									month: 'Month',
									week: 'Week',
									day: 'Day',
									list: 'List',
									prev: 'Prev',
									next: 'Next',
								}"
								:bootstrap-font-awesome="false"
								:editable="true"
								:droppable="true"
								:plugins="calendarPlugins"
								:events="calendarEvents"
								:weekends="calendarWeekends"
								:theme-system="themeSystem"
								@dateClick="dateClicked"
								@eventClick="editEvent"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
		<b-modal
			v-model="showmodal"
			title="Add New Event"
			title-class="text-black font-18"
			hide-footer
		>
			<form @submit.prevent="handleSubmit">
				<div class="row">
					<div class="col-12">
						<div class="form-group">
							<label for="name">Event Name</label>
							<input
								id="name"
								v-model="event.title"
								type="text"
								class="form-control"
								placeholder="Enter name"
								:class="{ 'is-invalid': submitted && $v.event.title.$error }"
							/>
							<div
								v-if="submitted && !$v.event.title.required"
								class="invalid-feedback"
								>This value is required.</div
							>
						</div>
					</div>
					<div class="col-12">
						<div class="form-group">
							<label class="control-label">Category</label>
							<select
								v-model="event.category"
								class="form-control"
								name="category"
								:class="{ 'is-invalid': submitted && $v.event.category.errors }"
							>
								<option
									v-for="option in categories"
									:key="option.backgroundColor"
									:value="`${option.value}`"
									>{{ option.name }}</option
								>
							</select>
							<div
								v-if="submitted && !$v.event.category.required"
								class="invalid-feedback"
								>This value is required.</div
							>
						</div>
					</div>
				</div>

				<div class="text-right">
					<button type="submit" class="btn btn-success">Save</button>
					<b-button class="ml-1" variant="light" @click="hideModal"
						>Close</b-button
					>
				</div>
			</form>
		</b-modal>

		<!-- Edit Modal -->
		<b-modal
			v-model="eventModal"
			title="Edit Event"
			title-class="text-black font-18"
			hide-footer
			body-class="p-0"
		>
			<form @submit.prevent="editSubmit">
				<div class="p-3">
					<label>Change event name</label>
					<div class="input-group m-b-15">
						<input
							v-model="editevent.editTitle"
							class="form-control"
							type="text"
						/>
						<span class="input-group-append">
							<button type="submit" class="btn btn-success btn-md">
								<i class="fa fa-check"></i> Save
							</button>
						</span>
					</div>
				</div>
				<div class="text-right p-3">
					<b-button variant="light" @click="closeModal">Close</b-button>
					<b-button class="ml-1" variant="danger" @click="deleteEvent"
						>Delete</b-button
					>
				</div>
			</form>
		</b-modal>
	</Layout>
</template>
