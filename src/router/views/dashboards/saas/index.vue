<script>
import Layout from "../../../layouts/main";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";
import Sellingchart from "./sellingchart";

import simplebar from "simplebar-vue";
import { required } from "vuelidate/lib/validators";

import { earningLineChart, salesAnalyticsDonutChart, ChatData } from "./data";

/**
 * Saas Dashboard Component
 */
export default {
  page: {
    title: "Saas Dashboard",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: {
    simplebar,
    Layout,
    PageHeader,
    Sellingchart,
  },
  data() {
    return {
      earningLineChart: earningLineChart,
      salesAnalyticsDonutChart: salesAnalyticsDonutChart,
      ChatData: ChatData,
      title: "Saas",
      items: [
        {
          text: "Dashboards",
          href: "/",
        },
        {
          text: "Saas",
          active: true,
        },
      ],
      submitted: false,
      chat: {
        message: "",
      },
    };
  },
  validations: {
    chat: {
      message: {
        required,
      },
    },
  },
  methods: {
    /**
     * Char form Submit
     */
    // eslint-disable-next-line no-unused-vars
    formSubmit(e) {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      } else {
        const id = this.ChatData.length;
        const message = this.chat.message;
        const currentDate = new Date();
        this.ChatData.push({
          id: id + 1,
          align: "right",
          name: "Henry Wells",
          message,
          time: currentDate.getHours() + ":" + currentDate.getMinutes(),
        });
        this.handleScroll();
      }
      this.submitted = false;
      this.chat = {};
    },

    handleScroll() {
      if (this.$refs.current.$el) {
        setTimeout(() => {
          this.$refs.current.SimpleBar.getScrollElement().scrollTop =
            this.$refs.current.SimpleBar.getScrollElement().scrollHeight + 1500;
        }, 500);
      }
    },
  },
  mounted() {
    var container2 = document.querySelector(
      "#containerElement .simplebar-content-wrapper"
    );
    container2.scrollTo({ top: 500, behavior: "smooth" });
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-4">
                <div class="media">
                  <div class="me-3">
                    <img
                      src="@/assets/images/users/avatar-1.jpg"
                      alt
                      class="avatar-md rounded-circle img-thumbnail"
                    />
                  </div>
                  <div class="media-body align-self-center">
                    <div class="text-muted">
                      <p class="mb-2">Welcome to skote dashboard</p>
                      <h5 class="mb-1">Henry wells</h5>
                      <p class="mb-0">UI / UX Designer</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 align-self-center">
                <div class="text-lg-center mt-4 mt-lg-0">
                  <div class="row">
                    <div class="col-4">
                      <div>
                        <p class="text-muted text-truncate mb-2">
                          Total Projects
                        </p>
                        <h5 class="mb-0">48</h5>
                      </div>
                    </div>
                    <div class="col-4">
                      <div>
                        <p class="text-muted text-truncate mb-2">Projects</p>
                        <h5 class="mb-0">40</h5>
                      </div>
                    </div>
                    <div class="col-4">
                      <div>
                        <p class="text-muted text-truncate mb-2">Clients</p>
                        <h5 class="mb-0">18</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 d-none d-lg-block">
                <div class="clearfix mt-4 mt-lg-0">
                  <b-dropdown
                    class="float-end"
                    right
                    variant="primary"
                    menu-class="dropdown-menu-end"
                  >
                    <template v-slot:button-content>
                      <i class="bx bxs-cog align-middle me-1"></i> Setting
                    </template>
                    <b-dropdown-item>Action</b-dropdown-item>
                    <b-dropdown-item>Another action</b-dropdown-item>
                    <b-dropdown-item>Something else</b-dropdown-item>
                  </b-dropdown>
                </div>
              </div>
            </div>
            <!-- end row -->
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-4">
        <div class="card bg-soft bg-primary">
          <div>
            <div class="row">
              <div class="col-7">
                <div class="text-primary p-3">
                  <h5 class="text-primary">Welcome Back !</h5>
                  <p>Skote Saas Dashboard</p>

                  <ul class="ps-3 mb-0">
                    <li class="py-1">7 + Layouts</li>
                    <li class="py-1">Multiple apps</li>
                  </ul>
                </div>
              </div>
              <div class="col-5 align-self-end">
                <img
                  src="@/assets/images/profile-img.png"
                  alt
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-8">
        <div class="row">
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center mb-3">
                  <div class="avatar-xs me-3">
                    <span
                      class="avatar-title rounded-circle bg-soft bg-primary text-primary font-size-18"
                    >
                      <i class="bx bx-copy-alt"></i>
                    </span>
                  </div>
                  <h5 class="font-size-14 mb-0">Orders</h5>
                </div>
                <div class="text-muted mt-4">
                  <h4>
                    1,452
                    <i class="mdi mdi-chevron-up ms-1 text-success"></i>
                  </h4>
                  <div class="d-flex">
                    <span class="badge badge-soft-success font-size-12"
                      >+ 0.2%</span
                    >
                    <span class="ms-2 text-truncate">From previous period</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center mb-3">
                  <div class="avatar-xs me-3">
                    <span
                      class="avatar-title rounded-circle bg-soft bg-primary text-primary font-size-18"
                    >
                      <i class="bx bx-archive-in"></i>
                    </span>
                  </div>
                  <h5 class="font-size-14 mb-0">Revenue</h5>
                </div>
                <div class="text-muted mt-4">
                  <h4>
                    $ 28,452
                    <i class="mdi mdi-chevron-up ms-1 text-success"></i>
                  </h4>
                  <div class="d-flex">
                    <span class="badge badge-soft-success font-size-12"
                      >+ 0.2%</span
                    >
                    <span class="ms-2 text-truncate">From previous period</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center mb-3">
                  <div class="avatar-xs me-3">
                    <span
                      class="avatar-title rounded-circle bg-soft bg-primary text-primary font-size-18"
                    >
                      <i class="bx bx-purchase-tag-alt"></i>
                    </span>
                  </div>
                  <h5 class="font-size-14 mb-0">Average Price</h5>
                </div>
                <div class="text-muted mt-4">
                  <h4>
                    $ 16.2
                    <i class="mdi mdi-chevron-up ms-1 text-success"></i>
                  </h4>

                  <div class="d-flex">
                    <span class="badge badge-soft-warning font-size-12"
                      >0%</span
                    >
                    <span class="ms-2 text-truncate">From previous period</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end row -->
      </div>
    </div>
    <div class="row">
      <div class="col-xl-8">
        <div class="card">
          <div class="card-body">
            <div class="clearfix">
              <div class="float-end">
                <div class="input-group input-group-sm">
                  <select class="form-select form-select-sm">
                    <option value="JA" selected>Jan</option>
                    <option value="DE">Dec</option>
                    <option value="NO">Nov</option>
                    <option value="OC">Oct</option>
                  </select>
                  <label class="input-group-text">Month</label>
                </div>
              </div>
              <h4 class="card-title mb-4">Earning</h4>
            </div>

            <div class="row">
              <div class="col-lg-4">
                <div class="text-muted">
                  <div class="mb-4">
                    <p>This month</p>
                    <h4>$2453.35</h4>
                    <div>
                      <span class="badge badge-soft-success font-size-12 me-1"
                        >+ 0.2%</span
                      >
                      From previous period
                    </div>
                  </div>

                  <div>
                    <a
                      href="javascript: void(0);"
                      class="btn btn-primary btn-sm"
                    >
                      View Details
                      <i class="mdi mdi-chevron-right ms-1"></i>
                    </a>
                  </div>

                  <div class="mt-4">
                    <p class="mb-2">Last month</p>
                    <h5>$2281.04</h5>
                  </div>
                </div>
              </div>
              <div class="col-lg-8">
                <apexchart
                  class="apex-charts"
                  dir="ltr"
                  height="300"
                  :series="earningLineChart.series"
                  :options="earningLineChart.chartOptions"
                ></apexchart>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-4">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Sales Analytics</h4>

            <div>
              <apexchart
                class="apex-charts"
                dir="ltr"
                height="240"
                :series="salesAnalyticsDonutChart.series"
                :options="salesAnalyticsDonutChart.chartOptions"
              ></apexchart>
            </div>

            <div class="text-center text-muted">
              <div class="row">
                <div class="col-4">
                  <div class="mt-4">
                    <p class="mb-2 text-truncate">
                      <i class="mdi mdi-circle text-primary me-1"></i>
                      Product A
                    </p>
                    <h5>$ 2,132</h5>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mt-4">
                    <p class="mb-2 text-truncate">
                      <i class="mdi mdi-circle text-success me-1"></i>
                      Product B
                    </p>
                    <h5>$ 1,763</h5>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mt-4">
                    <p class="mb-2 text-truncate">
                      <i class="mdi mdi-circle text-danger me-1"></i>
                      Product C
                    </p>
                    <h5>$ 973</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-xl-4">
        <div class="card">
          <div class="card-body pb-0">
            <div class="clearfix">
              <div class="float-end">
                <div class="input-group input-group-sm">
                  <select class="form-select form-select-sm">
                    <option value="JA" selected>Jan</option>
                    <option value="DE">Dec</option>
                    <option value="NO">Nov</option>
                    <option value="OC">Oct</option>
                  </select>
                  <label class="input-group-text">Month</label>
                </div>
              </div>
              <h4 class="card-title mb-4">Top Selling product</h4>
            </div>

            <div class="text-muted text-center">
              <p class="mb-2">Product A</p>
              <h4>$ 6385</h4>
              <p class="mt-4 mb-0">
                <span class="badge badge-soft-success font-size-11 me-2">
                  0.6%
                  <i class="mdi mdi-arrow-up"></i>
                </span>
                From previous period
              </p>
            </div>

            <div class="table-responsive mt-4 mb-0">
              <table class="table align-middle mb-0">
                <tbody>
                  <tr>
                    <td>
                      <h5 class="font-size-14 mb-1">Product A</h5>
                      <p class="text-muted mb-0">Neque quis est</p>
                    </td>

                    <td>
                      <Sellingchart :seriesvalue="37" :Chartcolor="'#556ee6'" />
                    </td>
                    <td>
                      <p class="text-muted mb-1">Sales</p>
                      <h5 class="mb-0">37 %</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5 class="font-size-14 mb-1">Product B</h5>
                      <p class="text-muted mb-0">Quis autem iure</p>
                    </td>

                    <td>
                      <Sellingchart :seriesvalue="72" :Chartcolor="'#34c38f'" />
                    </td>
                    <td>
                      <p class="text-muted mb-1">Sales</p>
                      <h5 class="mb-0">72 %</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5 class="font-size-14 mb-1">Product C</h5>
                      <p class="text-muted mb-0">Sed aliquam mauris.</p>
                    </td>

                    <td>
                      <Sellingchart :seriesvalue="54" :Chartcolor="'#f46a6a'" />
                    </td>
                    <td>
                      <p class="text-muted mb-1">Sales</p>
                      <h5 class="mb-0">54 %</h5>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Tasks</h4>

            <b-tabs pills nav-class="bg-light rounded" content-class="mt-4">
              <b-tab title="In Process" active>
                <b-card-text>
                  <simplebar style="max-height: 250px">
                    <div class="table-responsive">
                      <table
                        class="table table-nowrap align-mid table-hover mb-0"
                      >
                        <tbody>
                          <tr>
                            <td style="width: 50px">
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="tasklistCheck01"
                                />
                                <label
                                  class="form-check-label"
                                  for="tasklistCheck01"
                                ></label>
                              </div>
                            </td>
                            <td>
                              <h5 class="text-truncate font-size-14 mb-1">
                                <a
                                  href="javascript: void(0);"
                                  class="text-dark"
                                >
                                  Skote Saas Dashboard
                                </a>
                              </h5>
                              <p class="text-muted mb-0">Assigned to Mark</p>
                            </td>
                            <td style="width: 90px">
                              <div>
                                <ul class="list-inline mb-0 font-size-16">
                                  <li class="list-inline-item">
                                    <a
                                      href="javascript: void(0);"
                                      class="text-success p-1"
                                    >
                                      <i class="bx bxs-edit-alt"></i>
                                    </a>
                                  </li>
                                  <li class="list-inline-item">
                                    <a
                                      href="javascript: void(0);"
                                      class="text-danger p-1"
                                    >
                                      <i class="bx bxs-trash"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="tasklistCheck02"
                                />
                                <label
                                  class="form-check-label"
                                  for="tasklistCheck02"
                                ></label>
                              </div>
                            </td>
                            <td>
                              <h5 class="text-truncate font-size-14 mb-1">
                                <a href="javascript: void(0);" class="text-dark"
                                  >New Landing UI</a
                                >
                              </h5>
                              <p class="text-muted mb-0">Assigned to Team A</p>
                            </td>
                            <td>
                              <div>
                                <ul class="list-inline mb-0 font-size-16">
                                  <li class="list-inline-item">
                                    <a
                                      href="javascript: void(0);"
                                      class="text-success p-1"
                                    >
                                      <i class="bx bxs-edit-alt"></i>
                                    </a>
                                  </li>
                                  <li class="list-inline-item">
                                    <a
                                      href="javascript: void(0);"
                                      class="text-danger p-1"
                                    >
                                      <i class="bx bxs-trash"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="tasklistCheck03"
                                />
                                <label
                                  class="form-check-label"
                                  for="tasklistCheck03"
                                ></label>
                              </div>
                            </td>
                            <td>
                              <h5 class="text-truncate font-size-14 mb-1">
                                <a
                                  href="javascript: void(0);"
                                  class="text-dark"
                                >
                                  Brand logo design
                                </a>
                              </h5>
                              <p class="text-muted mb-0">Assigned to Janis</p>
                            </td>
                            <td>
                              <div>
                                <ul class="list-inline mb-0 font-size-16">
                                  <li class="list-inline-item">
                                    <a
                                      href="javascript: void(0);"
                                      class="text-success p-1"
                                    >
                                      <i class="bx bxs-edit-alt"></i>
                                    </a>
                                  </li>
                                  <li class="list-inline-item">
                                    <a
                                      href="javascript: void(0);"
                                      class="text-danger p-1"
                                    >
                                      <i class="bx bxs-trash"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="tasklistCheck04"
                                />
                                <label
                                  class="form-check-label"
                                  for="tasklistCheck04"
                                ></label>
                              </div>
                            </td>
                            <td>
                              <h5 class="text-truncate font-size-14 mb-1">
                                <label
                                  href="javascript: void(0);"
                                  class="text-dark"
                                >
                                  Blog Template UI
                                </label>
                              </h5>
                              <p class="text-muted mb-0">Assigned to Dianna</p>
                            </td>
                            <td>
                              <div>
                                <ul class="list-inline mb-0 font-size-16">
                                  <li class="list-inline-item">
                                    <a
                                      href="javascript: void(0);"
                                      class="text-success p-1"
                                    >
                                      <i class="bx bxs-edit-alt"></i>
                                    </a>
                                  </li>
                                  <li class="list-inline-item">
                                    <a
                                      href="javascript: void(0);"
                                      class="text-danger p-1"
                                    >
                                      <i class="bx bxs-trash"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="tasklistCheck05"
                                />
                                <label
                                  class="form-check-label"
                                  for="tasklistCheck05"
                                ></label>
                              </div>
                            </td>
                            <td>
                              <h5 class="text-truncate font-size-14 mb-1">
                                <a
                                  href="javascript: void(0);"
                                  class="text-dark"
                                >
                                  Multipurpose Landing
                                </a>
                              </h5>
                              <p class="text-muted mb-0">Assigned to Team B</p>
                            </td>
                            <td>
                              <div>
                                <ul class="list-inline mb-0 font-size-16">
                                  <li class="list-inline-item">
                                    <a
                                      href="javascript: void(0);"
                                      class="text-success p-1"
                                    >
                                      <i class="bx bxs-edit-alt"></i>
                                    </a>
                                  </li>
                                  <li class="list-inline-item">
                                    <a
                                      href="javascript: void(0);"
                                      class="text-danger p-1"
                                    >
                                      <i class="bx bxs-trash"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="tasklistCheck06"
                                />
                                <label
                                  class="form-check-label"
                                  for="tasklistCheck06"
                                ></label>
                              </div>
                            </td>
                            <td>
                              <h5 class="text-truncate font-size-14 mb-1">
                                <a
                                  href="javascript: void(0);"
                                  class="text-dark"
                                >
                                  Redesign - Landing page
                                </a>
                              </h5>
                              <p class="text-muted mb-0">Assigned to Jerry</p>
                            </td>
                            <td>
                              <div>
                                <ul class="list-inline mb-0 font-size-16">
                                  <li class="list-inline-item">
                                    <a
                                      href="javascript: void(0);"
                                      class="text-success p-1"
                                    >
                                      <i class="bx bxs-edit-alt"></i>
                                    </a>
                                  </li>
                                  <li class="list-inline-item">
                                    <a
                                      href="javascript: void(0);"
                                      class="text-danger p-1"
                                    >
                                      <i class="bx bxs-trash"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="tasklistCheck07"
                                />
                                <label
                                  class="form-check-label"
                                  for="tasklistCheck07"
                                ></label>
                              </div>
                            </td>
                            <td>
                              <h5 class="text-truncate font-size-14 mb-1">
                                <a
                                  href="javascript: void(0);"
                                  class="text-dark"
                                >
                                  Skote Crypto Dashboard
                                </a>
                              </h5>
                              <p class="text-muted mb-0">Assigned to Eric</p>
                            </td>
                            <td>
                              <div>
                                <ul class="list-inline mb-0 font-size-16">
                                  <li class="list-inline-item">
                                    <a
                                      href="javascript: void(0);"
                                      class="text-success p-1"
                                    >
                                      <i class="bx bxs-edit-alt"></i>
                                    </a>
                                  </li>
                                  <li class="list-inline-item">
                                    <a
                                      href="javascript: void(0);"
                                      class="text-danger p-1"
                                    >
                                      <i class="bx bxs-trash"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </simplebar>
                </b-card-text>
              </b-tab>
              <b-tab title="Upcoming">
                <b-card-text>
                  <simplebar style="max-height: 250px">
                    <div class="table-responsive">
                      <table
                        class="table table-nowrap align-mid table-hover mb-0"
                      >
                        <tbody>
                          <tr>
                            <td style="width: 50px">
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="tasklistCheck01"
                                />
                                <label
                                  class="form-check-label"
                                  for="tasklistCheck01"
                                ></label>
                              </div>
                            </td>
                            <td>
                              <h5 class="text-truncate font-size-14 mb-1">
                                <a
                                  href="javascript: void(0);"
                                  class="text-dark"
                                >
                                  Skote Saas Dashboard
                                </a>
                              </h5>
                              <p class="text-muted mb-0">Assigned to Mark</p>
                            </td>
                            <td style="width: 90px">
                              <div>
                                <ul class="list-inline mb-0 font-size-16">
                                  <li class="list-inline-item">
                                    <a
                                      href="javascript: void(0);"
                                      class="text-success p-1"
                                    >
                                      <i class="bx bxs-edit-alt"></i>
                                    </a>
                                  </li>
                                  <li class="list-inline-item">
                                    <a
                                      href="javascript: void(0);"
                                      class="text-danger p-1"
                                    >
                                      <i class="bx bxs-trash"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="tasklistCheck02"
                                />
                                <label
                                  class="form-check-label"
                                  for="tasklistCheck02"
                                ></label>
                              </div>
                            </td>
                            <td>
                              <h5 class="text-truncate font-size-14 mb-1">
                                <a href="javascript: void(0);" class="text-dark"
                                  >New Landing UI</a
                                >
                              </h5>
                              <p class="text-muted mb-0">Assigned to Team A</p>
                            </td>
                            <td>
                              <div>
                                <ul class="list-inline mb-0 font-size-16">
                                  <li class="list-inline-item">
                                    <a
                                      href="javascript: void(0);"
                                      class="text-success p-1"
                                    >
                                      <i class="bx bxs-edit-alt"></i>
                                    </a>
                                  </li>
                                  <li class="list-inline-item">
                                    <a
                                      href="javascript: void(0);"
                                      class="text-danger p-1"
                                    >
                                      <i class="bx bxs-trash"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="tasklistCheck03"
                                />
                                <label
                                  class="form-check-label"
                                  for="tasklistCheck03"
                                ></label>
                              </div>
                            </td>
                            <td>
                              <h5 class="text-truncate font-size-14 mb-1">
                                <a
                                  href="javascript: void(0);"
                                  class="text-dark"
                                >
                                  Brand logo design
                                </a>
                              </h5>
                              <p class="text-muted mb-0">Assigned to Janis</p>
                            </td>
                            <td>
                              <div>
                                <ul class="list-inline mb-0 font-size-16">
                                  <li class="list-inline-item">
                                    <a
                                      href="javascript: void(0);"
                                      class="text-success p-1"
                                    >
                                      <i class="bx bxs-edit-alt"></i>
                                    </a>
                                  </li>
                                  <li class="list-inline-item">
                                    <a
                                      href="javascript: void(0);"
                                      class="text-danger p-1"
                                    >
                                      <i class="bx bxs-trash"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="tasklistCheck04"
                                />
                                <label
                                  class="form-check-label"
                                  for="tasklistCheck04"
                                ></label>
                              </div>
                            </td>
                            <td>
                              <h5 class="text-truncate font-size-14 mb-1">
                                <a
                                  href="javascript: void(0);"
                                  class="text-dark"
                                >
                                  Blog Template UI
                                </a>
                              </h5>
                              <p class="text-muted mb-0">Assigned to Dianna</p>
                            </td>
                            <td>
                              <div>
                                <ul class="list-inline mb-0 font-size-16">
                                  <li class="list-inline-item">
                                    <a
                                      href="javascript: void(0);"
                                      class="text-success p-1"
                                    >
                                      <i class="bx bxs-edit-alt"></i>
                                    </a>
                                  </li>
                                  <li class="list-inline-item">
                                    <a
                                      href="javascript: void(0);"
                                      class="text-danger p-1"
                                    >
                                      <i class="bx bxs-trash"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="tasklistCheck05"
                                />
                                <label
                                  class="form-check-label"
                                  for="tasklistCheck05"
                                ></label>
                              </div>
                            </td>
                            <td>
                              <h5 class="text-truncate font-size-14 mb-1">
                                <a
                                  href="javascript: void(0);"
                                  class="text-dark"
                                >
                                  Multipurpose Landing
                                </a>
                              </h5>
                              <p class="text-muted mb-0">Assigned to Team B</p>
                            </td>
                            <td>
                              <div>
                                <ul class="list-inline mb-0 font-size-16">
                                  <li class="list-inline-item">
                                    <a
                                      href="javascript: void(0);"
                                      class="text-success p-1"
                                    >
                                      <i class="bx bxs-edit-alt"></i>
                                    </a>
                                  </li>
                                  <li class="list-inline-item">
                                    <a
                                      href="javascript: void(0);"
                                      class="text-danger p-1"
                                    >
                                      <i class="bx bxs-trash"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="tasklistCheck06"
                                />
                                <label
                                  class="form-check-label"
                                  for="tasklistCheck06"
                                ></label>
                              </div>
                            </td>
                            <td>
                              <h5 class="text-truncate font-size-14 mb-1">
                                <a
                                  href="javascript: void(0);"
                                  class="text-dark"
                                >
                                  Redesign - Landing page
                                </a>
                              </h5>
                              <p class="text-muted mb-0">Assigned to Jerry</p>
                            </td>
                            <td>
                              <div>
                                <ul class="list-inline mb-0 font-size-16">
                                  <li class="list-inline-item">
                                    <a
                                      href="javascript: void(0);"
                                      class="text-success p-1"
                                    >
                                      <i class="bx bxs-edit-alt"></i>
                                    </a>
                                  </li>
                                  <li class="list-inline-item">
                                    <a
                                      href="javascript: void(0);"
                                      class="text-danger p-1"
                                    >
                                      <i class="bx bxs-trash"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="tasklistCheck07"
                                />
                                <label
                                  class="form-check-label"
                                  for="tasklistCheck07"
                                ></label>
                              </div>
                            </td>
                            <td>
                              <h5 class="text-truncate font-size-14 mb-1">
                                <a
                                  href="javascript: void(0);"
                                  class="text-dark"
                                >
                                  Skote Crypto Dashboard
                                </a>
                              </h5>
                              <p class="text-muted mb-0">Assigned to Eric</p>
                            </td>
                            <td>
                              <div>
                                <ul class="list-inline mb-0 font-size-16">
                                  <li class="list-inline-item">
                                    <a
                                      href="javascript: void(0);"
                                      class="text-success p-1"
                                    >
                                      <i class="bx bxs-edit-alt"></i>
                                    </a>
                                  </li>
                                  <li class="list-inline-item">
                                    <a
                                      href="javascript: void(0);"
                                      class="text-danger p-1"
                                    >
                                      <i class="bx bxs-trash"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </simplebar>
                </b-card-text>
              </b-tab>
            </b-tabs>
          </div>

          <div class="card-footer bg-transparent border-top">
            <div class="text-center">
              <a href="javascript: void(0);" class="btn btn-primary">
                Add new Task
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4">
        <div class="card">
          <div class="card-body border-bottom">
            <div class="row">
              <div class="col-md-4 col-9">
                <h5 class="font-size-15 mb-1">Steven Franklin</h5>
                <p class="text-muted mb-0">
                  <i class="mdi mdi-circle text-success align-middle me-1"></i>
                  Active now
                </p>
              </div>
              <div class="col-md-8 col-3">
                <ul class="list-inline user-chat-nav text-end mb-0">
                  <li class="list-inline-item d-none d-sm-inline-block">
                    <b-dropdown
                      right
                      menu-class="dropdown-menu-end py-0 dropdown-menu-md"
                      variant="white"
                      toggle-class="p-0 nav-btn"
                    >
                      <template v-slot:button-content>
                        <i class="bx bx-search-alt-2"></i>
                      </template>
                      <form class="p-3">
                        <div class="form-group m-0">
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Search ..."
                              aria-label="Recipient's username"
                            />
                            <div class="input-group-append">
                              <button class="btn btn-primary" type="submit">
                                <i class="mdi mdi-magnify"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </b-dropdown>
                  </li>
                  <li class="list-inline-item d-none d-sm-inline-block">
                    <b-dropdown
                      toggle-class="nav-btn"
                      menu-class="dropdown-menu-end"
                      right
                      variant="white"
                    >
                      <template v-slot:button-content>
                        <i class="bx bx-cog"></i>
                      </template>
                      <b-dropdown-item>View Profile</b-dropdown-item>
                      <b-dropdown-item>Clear chat</b-dropdown-item>
                      <b-dropdown-item>Muted</b-dropdown-item>
                      <b-dropdown-item>Delete</b-dropdown-item>
                    </b-dropdown>
                  </li>

                  <li class="list-inline-item">
                    <b-dropdown
                      toggle-class="nav-btn"
                      menu-class="dropdown-menu-end"
                      right
                      variant="white"
                    >
                      <template v-slot:button-content>
                        <i class="bx bx-dots-horizontal-rounded"></i>
                      </template>
                      <b-dropdown-item>Action</b-dropdown-item>
                      <b-dropdown-item>Another action</b-dropdown-item>
                      <b-dropdown-item>Something else</b-dropdown-item>
                    </b-dropdown>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card-body pb-0">
            <div>
              <div class="chat-conversation">
                <ul class="list-unstyled">
                  <simplebar
                    style="max-height: 260px"
                    ref="current"
                    id="containerElement"
                  >
                    <li>
                      <div class="chat-day-title">
                        <span class="title">Today</span>
                      </div>
                    </li>
                    <li
                      v-for="data of ChatData"
                      :key="data.id"
                      :class="{ right: `${data.align}` === 'right' }"
                    >
                      <div class="conversation-list">
                        <b-dropdown
                          variant="white"
                          menu-class="dropdown-menu-end"
                        >
                          <template v-slot:button-content>
                            <i class="bx bx-dots-vertical-rounded"></i>
                          </template>
                          <b-dropdown-item>Copy</b-dropdown-item>
                          <b-dropdown-item>Save</b-dropdown-item>
                          <b-dropdown-item>Forward</b-dropdown-item>
                          <b-dropdown-item>Delete</b-dropdown-item>
                        </b-dropdown>
                        <div class="ctext-wrap">
                          <div class="conversation-name">{{ data.name }}</div>
                          <p>{{ data.message }}</p>
                          <p class="chat-time mb-0">
                            <i class="bx bx-time-five align-middle me-1"></i>
                            {{ data.time }}
                          </p>
                        </div>
                      </div>
                    </li>
                  </simplebar>
                </ul>
              </div>
            </div>
          </div>
          <div class="p-3 chat-input-section">
            <form @submit.prevent="formSubmit" class="row">
              <div class="col">
                <div class="position-relative">
                  <input
                    type="text"
                    v-model="chat.message"
                    class="form-control chat-input"
                    placeholder="Enter Message..."
                    :class="{
                      'is-invalid': submitted && $v.chat.message.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.chat.message.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.chat.message.required"
                      >This value is required.</span
                    >
                  </div>
                  <div class="chat-input-links">
                    <ul class="list-inline mb-0">
                      <li class="list-inline-item">
                        <a
                          href="javascript: void(0);"
                          placement="top"
                          v-b-tooltip.hover
                          title="Emoji"
                        >
                          <i class="mdi mdi-emoticon-happy-outline"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a
                          href="javascript: void(0);"
                          placement="top"
                          v-b-tooltip.hover
                          title="Images"
                        >
                          <i class="mdi mdi-file-image-outline"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a
                          href="javascript: void(0);"
                          placement="top"
                          v-b-tooltip.hover
                          title="Add Files"
                        >
                          <i class="mdi mdi-file-document-outline"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-auto">
                <button type="submit" class="btn btn-primary chat-send w-md">
                  <span class="d-none d-sm-inline-block me-2">Send</span>
                  <i class="mdi mdi-send"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
