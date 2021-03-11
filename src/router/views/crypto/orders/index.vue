<script>
import DatePicker from "vue2-datepicker";

import Layout from "../../../layouts/main";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

import { ordersData } from "./data";

/**
 * Orders component
 */
export default {
  page: {
    title: "Orders",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: {
    DatePicker,
    Layout,
    PageHeader,
  },
  data() {
    return {
      ordersData: ordersData,
      title: "Orders",
      items: [
        {
          text: "Crypto",
          href: "/",
        },
        {
          text: "Orders",
          active: true,
        },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      filter: null,
      filterOn: [],
      sortBy: "value",
      sortDesc: false,
      fields: [
        {
          key: "date",
          sortable: true,
        },
        {
          key: "type",
          sortable: true,
        },
        {
          key: "coin",
          sortable: true,
        },
        {
          key: "value",
          sortable: true,
        },
        {
          key: "usd",
          sortable: true,
        },
        {
          key: "status",
          sortable: true,
        },
      ],
      coinvalue: "",
      statusValue: "",
      typeValue: null,
      datepickervalue: "",
    };
  },
  computed: {
    /**
     * Total no. of records
     */
    rows() {
      return this.ordersData.length;
    },
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
  methods: {
    /**
     * Search the table data with search input
     */
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
};
</script>

<template lang="en">
<Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title mb-3">Orders</h4>
                    <b-tabs content-class="p-3" nav-class="nav-tabs-custom">
                        <b-tab title="All Orders" active>
                            <form>
                                <div class="row">
                                    <div class="col-xl col-sm-6">
                                        <div class="form-group mt-3 mb-0">
                                            <label>Date :</label>
                                            <date-picker v-model="datepickervalue" :first-day-of-week="1" lang="en"></date-picker>
                                        </div>
                                    </div>

                                    <div class="col-xl col-sm-6">
                                        <div class="form-group mt-3 mb-0">
                                            <label>Coin</label>
                                            <select class="form-control select2-search-disable">
                                                <option value="BTC" selected>Bitcoin</option>
                                                <option value="ETH">Ethereum</option>
                                                <option value="LTC">litecoin</option>
                                            </select>
                                        </div>
                                    </div>

                                     <div class="col-xl col-sm-6">
                                        <div class="form-group mt-3 mb-0">
                                            <label>Type</label>
                                            <select class="form-control select2-search-disable">
                                                <option value="BU" selected>Buy</option>
                                                <option value="SE">Sell</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-xl col-sm-6">
                                        <div class="form-group mt-3 mb-0">
                                            <label>Status</label>
                                            <select class="form-control select2-search-disable">
                                                <option value="CO" selected>Completed</option>
                                                <option value="PE">Pending</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-xl col-sm-6 align-self-end">
                                        <div class="mt-3">
                                            <button type="button" class="btn btn-primary w-md">
                                                Add Order
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div class="row mt-5">
                                <div class="col-sm-12 col-md-6">
                                    <div id="tickets-table_length" class="dataTables_length">
                                        <label class="d-inline-flex align-items-center fw-normal">
                                            Show&nbsp;
                                            <b-form-select v-model="perPage" size="sm" class="form-select form-select-sm" :options="pageOptions"></b-form-select>&nbsp;entries
                                        </label>
                                    </div>
                                </div>
                                <!-- Search -->
                                <div class="col-sm-12 col-md-6">
                                    <div id="tickets-table_filter" class="dataTables_filter text-end">
                                        <label class="d-inline-flex align-items-center fw-normal">
                                            Search:
                                            <b-form-input v-model="filter" type="search" class="form-control form-control-sm ms-2"></b-form-input>
                                        </label>
                                    </div>
                                </div>
                                <!-- End search -->
                            </div>
                            <!-- Table -->
                            <div class="table-responsive mt-3 mb-0">
                                <b-table :items="ordersData" :fields="fields" responsive="sm" :per-page="perPage" :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered"></b-table>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="dataTables_paginate paging_simple_numbers float-end">
                                        <ul class="pagination pagination-rounded mb-0">
                                            <!-- pagination -->
                                            <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </b-tab>
                        <b-tab title="Processing">
                            <div class="row mt-3">
                                <div class="col-sm-12 col-md-6">
                                    <div id="tickets-table_length" class="dataTables_length">
                                        <label class="d-inline-flex align-items-center fw-normal">
                                            Show&nbsp;
                                            <b-form-select v-model="perPage" size="sm" :options="pageOptions" class="form-select form-select-sm"></b-form-select>&nbsp;entries
                                        </label>
                                    </div>
                                </div>
                                <!-- Search -->
                                <div class="col-sm-12 col-md-6">
                                    <div id="tickets-table_filter" class="dataTables_filter text-md-end">
                                        <label class="d-inline-flex align-items-center fw-normal">
                                            Search:
                                            <b-form-input v-model="filter" type="search" class="form-control form-control-sm ms-2"></b-form-input>
                                        </label>
                                    </div>
                                </div>
                                <!-- End search -->
                            </div>
                            <div class="table-responsive mt-3 mb-0">
                                <b-table :items="ordersData" :fields="fields" responsive="sm" :per-page="perPage" :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered"></b-table>
                            </div>
                        </b-tab>
                    </b-tabs>
                </div>
            </div>
        </div>
    </div>
</Layout>
</template>
