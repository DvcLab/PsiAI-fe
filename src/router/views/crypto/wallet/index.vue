<script>
import Layout from "../../../layouts/main";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

import { OveviewChart, activitiesData } from "./data";
/**
 * Wallets component
 */
export default {
  page: {
    title: "Wallets",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: {
    Layout,
    PageHeader,
  },
  data() {
    return {
      OveviewChart: OveviewChart,
      activitiesData: activitiesData,
      title: "Wallets",
      items: [
        {
          text: "Crypto",
          href: "/",
        },
        {
          text: "Wallets",
          active: true,
        },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      filter: null,
      filterOn: [],
      sortBy: "id",
      sortDesc: false,
      fields: [
        {
          key: "id",
          label: "ID No",
          sortable: true,
        },
        {
          key: "date",
          sortable: true,
        },
        {
          key: "type",
          sortable: true,
        },
        {
          key: "currency",
          sortable: true,
        },
        {
          key: "amount",
          sortable: true,
        },
        {
          key: "usd",
          label: "Amount in USD",
          sortable: true,
        },
      ],
    };
  },
  computed: {
    /**
     * Total no. of records
     */
    rows() {
      return this.activitiesData.length;
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

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-xl-4">
        <div class="card">
          <div class="card-body">
            <div class="media">
              <div class="me-4">
                <i class="mdi mdi-account-circle text-primary h1"></i>
              </div>

              <div class="media-body">
                <div class="text-muted">
                  <h5>Henry Wells</h5>
                  <p class="mb-1">henrywells@abc.com</p>
                  <p class="mb-0">Id no: #SK0234</p>
                </div>
              </div>

              <b-dropdown
                class="ms-2 p-0"
                end
                variant="white"
                toggle-class="p-0"
              >
                <template v-slot:button-content>
                  <i class="mdi mdi-dots-horizontal font-size-18"></i>
                </template>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-item>Something else here</b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
          <div class="card-body border-top">
            <div class="row">
              <div class="col-sm-6">
                <div>
                  <p class="text-muted mb-2">Available Balance</p>
                  <h5>$ 9148.23</h5>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="text-sm-end mt-4 mt-sm-0">
                  <p class="text-muted mb-2">Since last month</p>
                  <h5>
                    + $ 248.35
                    <span class="badge bg-success ms-1 align-bottom"
                      >+ 1.3 %</span
                    >
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div class="card-body border-top">
            <p class="text-muted mb-4">In this month</p>
            <div class="text-center">
              <div class="row">
                <div class="col-sm-4">
                  <div>
                    <div class="font-size-24 text-primary mb-2">
                      <i class="bx bx-send"></i>
                    </div>

                    <p class="text-muted mb-2">Send</p>
                    <h5>$ 654.42</h5>

                    <div class="mt-3">
                      <a href="#" class="btn btn-primary btn-sm w-md">Send</a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="mt-4 mt-sm-0">
                    <div class="font-size-24 text-primary mb-2">
                      <i class="bx bx-import"></i>
                    </div>

                    <p class="text-muted mb-2">receive</p>
                    <h5>$ 1054.32</h5>

                    <div class="mt-3">
                      <a href="#" class="btn btn-primary btn-sm w-md"
                        >Receive</a
                      >
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="mt-4 mt-sm-0">
                    <div class="font-size-24 text-primary mb-2">
                      <i class="bx bx-wallet"></i>
                    </div>

                    <p class="text-muted mb-2">Withdraw</p>
                    <h5>$ 824.34</h5>

                    <div class="mt-3">
                      <a href="#" class="btn btn-primary btn-sm w-md"
                        >Withdraw</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-8">
        <div class="row">
          <div class="col-sm-4">
            <div class="card mini-stats-wid">
              <div class="card-body">
                <div class="media">
                  <div class="me-3 align-self-center">
                    <i class="mdi mdi-bitcoin h2 text-warning mb-0"></i>
                  </div>
                  <div class="media-body">
                    <p class="text-muted mb-2">Bitcoin Wallet</p>
                    <h5 class="mb-0">
                      1.02356 BTC
                      <span class="font-size-14 text-muted"> = $ 9148.00 </span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card mini-stats-wid">
              <div class="card-body">
                <div class="media">
                  <div class="me-3 align-self-center">
                    <i class="mdi mdi-ethereum h2 text-primary mb-0"></i>
                  </div>
                  <div class="media-body">
                    <p class="text-muted mb-2">Ethereum Wallet</p>
                    <h5 class="mb-0">
                      0.04121 ETH
                      <span class="font-size-14 text-muted"> = $ 8235.00 </span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card mini-stats-wid">
              <div class="card-body">
                <div class="media">
                  <div class="me-3 align-self-center">
                    <i class="mdi mdi-litecoin h2 text-info mb-0"></i>
                  </div>
                  <div class="media-body">
                    <p class="text-muted mb-2">litecoin Wallet</p>
                    <h5 class="mb-0">
                      0.00356 BTC
                      <span class="font-size-14 text-muted"> = $ 4721.00 </span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end row -->

        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-3">Overview</h4>

            <div>
              <apexchart
                class="apex-charts"
                height="228"
                type="line"
                dir="ltr"
                :series="OveviewChart.series"
                :options="OveviewChart.chartOptions"
              ></apexchart>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Activities</h4>
            <b-tabs content-class="mt-3" nav-class="nav-tabs-custom">
              <b-tab title="All" active>
                <div class="row mt-4">
                  <div class="col-sm-12 col-md-6">
                    <div id="tickets-table_length" class="dataTables_length">
                      <label class="d-inline-flex align-items-center fw-normal">
                        Show&nbsp;
                        <b-form-select
                          v-model="perPage"
                          size="sm"
                          :options="pageOptions"
                          class="form-control form-select form-select-sm"
                        ></b-form-select
                        >&nbsp;entries
                      </label>
                    </div>
                  </div>
                  <!-- Search -->
                  <div class="col-sm-12 col-md-6">
                    <div
                      id="tickets-table_filter"
                      class="dataTables_filter text-md-end"
                    >
                      <label class="d-inline-flex align-items-center">
                        Search:
                        <b-form-input
                          v-model="filter"
                          type="search"
                          class="form-control form-control-sm ms-2"
                        ></b-form-input>
                      </label>
                    </div>
                  </div>
                  <!-- End search -->
                </div>
                <!-- Table -->
                <div class="table-responsive table-hover mb-0">
                  <b-table
                    :items="activitiesData"
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
                      class="dataTables_paginate paging_simple_numbers float-end"
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
              </b-tab>
              <b-tab title="Buy" disabled> </b-tab>
              <b-tab title="Sell" disabled> </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
