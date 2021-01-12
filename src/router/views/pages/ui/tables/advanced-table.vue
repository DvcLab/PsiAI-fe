<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

import { tableData } from './data-advanced'

export default {
	page: {
		title: 'Advanced Tables',
		meta: [{ name: 'description', content: appConfig.description }],
	},
	components: { Layout, PageHeader },
	data() {
		return {
			tableData: tableData,
			title: 'Advanced Tables',
			items: [
				{
					text: 'Shreyu',
					href: '/',
				},
				{
					text: 'Icons',
					href: '/',
				},
				{
					text: 'Advanced',
					active: true,
				},
			],
			totalRows: 1,
			currentPage: 1,
			perPage: 10,
			pageOptions: [10, 25, 50, 100],
			filter: null,
			filterOn: [],
			sortBy: 'age',
			sortDesc: false,
			fields: [
				{ key: 'name', sortable: true },
				{ key: 'position', sortable: true },
				{ key: 'office', sortable: true },
				{ key: 'age', sortable: true },
				{ key: 'date', sortable: true },
				{ key: 'salary', sortable: true },
			],
		}
	},
	computed: {
		/**
		 * Total no. of records
		 */
		rows() {
			return this.tableData.length
		},
	},
	mounted() {
		// Set the initial number of items
		this.totalRows = this.items.length
	},
	methods: {
		/**
		 * Search the table data with search input
		 */
		onFiltered(filteredItems) {
			// Trigger pagination to update the number of buttons/pages due to filtering
			this.totalRows = filteredItems.length
			this.currentPage = 1
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
						<h4 class="header-title mt-0 mb-1">Advanced Data Table</h4>
						<p class="text-muted font-13 mb-4"></p>
						<div class="row mb-md-2">
							<div class="col-sm-12 col-md-6">
								<div id="tickets-table_length" class="dataTables_length">
									<label class="d-inline-flex align-items-center">
										Show&nbsp;
										<b-form-select
											v-model="perPage"
											size="sm"
											:options="pageOptions"
										></b-form-select
										>&nbsp;entries
									</label>
								</div>
							</div>
							<!-- Search -->
							<div class="col-sm-12 col-md-6">
								<div
									id="tickets-table_filter"
									class="dataTables_filter text-md-right"
								>
									<label class="d-inline-flex align-items-center">
										Search:
										<b-form-input
											v-model="filter"
											type="search"
											placeholder="Search..."
											class="form-control form-control-sm ml-2"
										></b-form-input>
									</label>
								</div>
							</div>
							<!-- End search -->
						</div>
						<!-- Table -->
						<div class="table-responsive mb-0">
							<b-table
								:items="tableData"
								:fields="fields"
								responsive="sm"
								:per-page="perPage"
								:current-page="currentPage"
								:sort-by.sync="sortBy"
								:sort-desc.sync="sortDesc"
								:filter="filter"
								:filter-included-fields="filterOn"
								@filtered="onFiltered"
							></b-table>
						</div>
						<div class="row">
							<div class="col">
								<div
									class="dataTables_paginate paging_simple_numbers float-right"
								>
									<ul class="pagination pagination-rounded mb-0">
										<!-- pagination -->
										<b-pagination
											v-model="currentPage"
											:total-rows="rows"
											:per-page="perPage"
										></b-pagination>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>
