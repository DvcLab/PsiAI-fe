<script>
import Layout from "../../../layouts/main";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

import simplebar from "simplebar-vue";

import {
  walletRadialChart,
  overviewChart,
  transactionsData,
  bitconinChart,
  ethereumChart,
  litecoinChart,
} from "./data";

/**
 * Crypto Dashboard Component
 */
export default {
  page: {
    title: "Crypto Dashboard",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: { Layout, PageHeader, simplebar },
  data() {
    return {
      walletRadialChart: walletRadialChart,
      overviewChart: overviewChart,
      transactionsData: transactionsData,
      bitconinChart: bitconinChart,
      ethereumChart: ethereumChart,
      litecoinChart: litecoinChart,
      title: "Crypto",
      items: [
        {
          text: "Dashboards",
          href: "/",
        },
        {
          text: "Crypto",
          active: true,
        },
      ],
    };
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
            <b-dropdown
              class="float-end ms-2"
              variant="white"
              right
              toggle-class="text-muted p-0"
              menu-class="dropdown-menu-end"
            >
              <template v-slot:button-content>
                <i class="mdi mdi-dots-horizontal font-size-18"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here</b-dropdown-item>
            </b-dropdown>
            <div>
              <div class="mb-4 me-3">
                <i class="mdi mdi-account-circle text-primary h1"></i>
              </div>

              <div>
                <h5>Henry Wells</h5>
                <p class="text-muted mb-1">henrywells@abc.com</p>
                <p class="text-muted mb-0">Id no: #SK0234</p>
              </div>
            </div>
          </div>

          <div class="card-body border-top">
            <div class="row">
              <div class="col-sm-6">
                <div>
                  <p class="fw-medium mb-2">Balance :</p>
                  <h4>$ 6134.39</h4>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="mt-4 mt-sm-0">
                  <p class="fw-medium mb-2">Coin :</p>
                  <div class="d-inline-flex align-items-center mt-1">
                    <a
                      href="javascript: void(0);"
                      class="m-1"
                      v-b-tooltip.hover
                      data-placement="top"
                      title="Bitcoin"
                    >
                      <div class="avatar-xs">
                        <span
                          class="avatar-title rounded-circle bg-soft bg-warning text-warning font-size-18"
                        >
                          <i class="mdi mdi-bitcoin"></i>
                        </span>
                      </div>
                    </a>
                    <a
                      href="javascript: void(0);"
                      class="m-1"
                      data-placement="top"
                      v-b-tooltip.hover
                      title="Ethereum"
                    >
                      <div class="avatar-xs">
                        <span
                          class="avatar-title rounded-circle bg-soft bg-primary text-primary font-size-18"
                        >
                          <i class="mdi mdi-ethereum"></i>
                        </span>
                      </div>
                    </a>
                    <a
                      href="javascript: void(0);"
                      class="m-1"
                      data-placement="top"
                      v-b-tooltip.hover
                      title="Litecoin"
                    >
                      <div class="avatar-xs">
                        <span
                          class="avatar-title rounded-circle bg-soft bg-info text-info font-size-18"
                        >
                          <i class="mdi mdi-litecoin"></i>
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card-footer bg-transparent border-top">
            <div class="text-center">
              <a
                href="javascript: void(0);"
                class="btn btn-outline-light me-2 w-md"
                >Deposit</a
              >
              <a href="javascript: void(0);" class="btn btn-primary me-2 w-md"
                >Buy / Sell</a
              >
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-8">
        <div class="card">
          <div>
            <div class="row">
              <div class="col-lg-9 col-sm-8">
                <div class="p-4">
                  <h5 class="text-primary">Welcome Back !</h5>
                  <p>Skote Crypto Dashboard</p>

                  <div class="text-muted">
                    <p class="mb-1">
                      <i
                        class="mdi mdi-circle-medium align-middle text-primary me-1"
                      ></i>
                      If several languages coalesce
                    </p>
                    <p class="mb-1">
                      <i
                        class="mdi mdi-circle-medium align-middle text-primary me-1"
                      ></i>
                      Sed ut perspiciatis unde
                    </p>
                    <p class="mb-0">
                      <i
                        class="mdi mdi-circle-medium align-middle text-primary me-1"
                      ></i>
                      It would be necessary
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-4 align-self-center">
                <div>
                  <img
                    src="@/assets/images/crypto/features-img/img-1.png"
                    alt
                    class="img-fluid d-block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <p class="text-muted mb-4">
                  <i
                    class="mdi mdi-bitcoin h2 text-warning align-middle mb-0 me-3"
                  ></i>
                  Bitcoin
                </p>

                <div class="row">
                  <div class="col-6">
                    <div>
                      <h5>$ 9134.39</h5>
                      <p class="text-muted text-truncate mb-0">
                        + 0.0012 ( 0.2 % )
                        <i class="mdi mdi-arrow-up ms-1 text-success"></i>
                      </p>
                    </div>
                  </div>
                  <div class="col-6">
                    <div>
                      <apexchart
                        class="apex-charts"
                        height="40"
                        type="area"
                        dir="ltr"
                        :series="bitconinChart.series"
                        :options="bitconinChart.chartOptions"
                      ></apexchart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <p class="text-muted mb-4">
                  <i
                    class="mdi mdi-ethereum h2 text-primary align-middle mb-0 me-3"
                  ></i>
                  Ethereum
                </p>

                <div class="row">
                  <div class="col-6">
                    <div>
                      <h5>$ 245.44</h5>
                      <p class="text-muted text-truncate mb-0">
                        - 4.102 ( 0.1 % )
                        <i class="mdi mdi-arrow-down ms-1 text-danger"></i>
                      </p>
                    </div>
                  </div>
                  <div class="col-6">
                    <div>
                      <apexchart
                        class="apex-charts"
                        height="40"
                        type="area"
                        dir="ltr"
                        :series="ethereumChart.series"
                        :options="ethereumChart.chartOptions"
                      ></apexchart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <p class="text-muted mb-4">
                  <i
                    class="mdi mdi-litecoin h2 text-info align-middle mb-0 me-3"
                  ></i>
                  litecoin
                </p>

                <div class="row">
                  <div class="col-6">
                    <div>
                      <h5>$ 63.61</h5>
                      <p class="text-muted text-truncate mb-0">
                        + 1.792 ( 0.1 % )
                        <i class="mdi mdi-arrow-up ms-1 text-success"></i>
                      </p>
                    </div>
                  </div>
                  <div class="col-6">
                    <div>
                      <apexchart
                        class="apex-charts"
                        height="40"
                        type="area"
                        dir="ltr"
                        :series="litecoinChart.series"
                        :options="litecoinChart.chartOptions"
                      ></apexchart>
                    </div>
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
      <div class="col-xl-8">
        <div class="card">
          <div class="card-body">
            <div class="float-end">
              <select class="form-select form-select-sm ms-2">
                <option value="MA" selected>March</option>
                <option value="FE">February</option>
                <option value="JA">January</option>
                <option value="DE">December</option>
              </select>
            </div>
            <h4 class="card-title mb-3">Wallet Balance</h4>

            <div class="row">
              <div class="col-lg-4">
                <div class="mt-4">
                  <p>Available Balance</p>
                  <h4>$ 6134.39</h4>

                  <p class="text-muted mb-4">
                    + 0.0012.23 ( 0.2 % )
                    <i class="mdi mdi-arrow-up ms-1 text-success"></i>
                  </p>

                  <div class="row">
                    <div class="col-6">
                      <div>
                        <p class="mb-2">Income</p>
                        <h5>$ 2632.46</h5>
                      </div>
                    </div>
                    <div class="col-6">
                      <div>
                        <p class="mb-2">Expense</p>
                        <h5>$ 924.38</h5>
                      </div>
                    </div>
                  </div>

                  <div class="mt-4">
                    <a href="#" class="btn btn-primary btn-sm">
                      View more
                      <i class="mdi mdi-arrow-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-sm-6">
                <div>
                  <apexchart
                    class="apex-charts"
                    dir="ltr"
                    type="radialBar"
                    height="300"
                    :series="walletRadialChart.series"
                    :options="walletRadialChart.chartOptions"
                  ></apexchart>
                </div>
              </div>

              <div class="col-lg-4 col-sm-6 align-self-center">
                <div>
                  <p class="mb-2">
                    <i
                      class="mdi mdi-circle align-middle font-size-10 me-2 text-primary"
                    ></i>
                    Ethereum
                  </p>
                  <h5>
                    4.5701 ETH =
                    <span class="text-muted font-size-14">$ 1123.64</span>
                  </h5>
                </div>

                <div class="mt-4 pt-2">
                  <p class="mb-2">
                    <i
                      class="mdi mdi-circle align-middle font-size-10 me-2 text-warning"
                    ></i>
                    Bitcoin
                  </p>
                  <h5>
                    0.4412 BTC =
                    <span class="text-muted font-size-14">$ 4025.32</span>
                  </h5>
                </div>

                <div class="mt-4 pt-2">
                  <p class="mb-2">
                    <i
                      class="mdi mdi-circle align-middle font-size-10 me-2 text-info"
                    ></i>
                    Litecoin
                  </p>
                  <h5>
                    35.3811 LTC =
                    <span class="text-muted font-size-14">$ 2263.09</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-3">Overview</h4>

            <div>
              <div id="overview-chart" class="apex-charts" dir="ltr">
                <div class="toolbar button-items text-center">
                  <button
                    type="button"
                    class="btn btn-light btn-sm"
                    id="one_month"
                  >
                    1M
                  </button>
                  <button
                    type="button"
                    class="btn btn-light btn-sm"
                    id="six_months"
                  >
                    6M
                  </button>
                  <button
                    type="button"
                    class="btn btn-light btn-sm active"
                    id="one_year"
                  >
                    1Y
                  </button>
                  <button type="button" class="btn btn-light btn-sm" id="all">
                    ALL
                  </button>
                </div>
                <apexchart
                  class="apex-charts"
                  type="area"
                  height="254"
                  dir="ltr"
                  :series="overviewChart.series"
                  :options="overviewChart.chartOptions"
                ></apexchart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-4">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Transactions</h4>
            <b-tabs pills nav-class="bg-light rounded" content-class="mt-4">
              <b-tab title="All" active>
                <b-card-text>
                  <simplebar style="max-height: 330px">
                    <table class="table table-centered table-nowrap align-middle">
                      <tbody>
                        <tr v-for="data of transactionsData" :key="data.icon">
                          <td style="width: 50px">
                            <div :class="`font-size-22 text-${data.color}`">
                              <i
                                :class="{
                                  'bx bx-down-arrow-circle':
                                    `${data.color}` === 'primary',
                                  'bx bx-up-arrow-circle':
                                    `${data.color}` === 'danger',
                                }"
                              ></i>
                            </div>
                          </td>
                          <td>
                            <div>
                              <h5 class="font-size-14 mb-1">{{ data.name }}</h5>
                              <p class="text-muted mb-0">{{ data.date }}</p>
                            </div>
                          </td>
                          <td>
                            <div class="text-end">
                              <h5 class="font-size-14 mb-0">{{ data.text }}</h5>
                            </div>
                          </td>
                          <td>
                            <div class="text-end">
                              <h5 class="font-size-14 text-muted mb-0">
                                {{ data.price }}
                              </h5>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </simplebar>
                </b-card-text>
              </b-tab>
              <b-tab title="Buy">
                <b-card-text>
                  <simplebar style="max-height: 330px">
                    <table class="table table-centered table-nowrap align-middle">
                      <tbody>
                        <tr v-for="data of transactionsData" :key="data.id">
                          <td style="width: 50px">
                            <div :class="`font-size-22 text-${data.color}`">
                              <i
                                :class="{
                                  'bx bx-down-arrow-circle':
                                    `${data.color}` === 'primary',
                                  'bx bx-up-arrow-circle':
                                    `${data.color}` === 'danger',
                                }"
                              ></i>
                            </div>
                          </td>
                          <td>
                            <div>
                              <h5 class="font-size-14 mb-1">{{ data.name }}</h5>
                              <p class="text-muted mb-0">{{ data.date }}</p>
                            </div>
                          </td>
                          <td>
                            <div class="text-end">
                              <h5 class="font-size-14 mb-0">{{ data.text }}</h5>
                            </div>
                          </td>
                          <td>
                            <div class="text-end">
                              <h5 class="font-size-14 text-muted mb-0">
                                {{ data.price }}
                              </h5>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </simplebar>
                </b-card-text>
              </b-tab>
              <b-tab title="Sell">
                <b-card-text>
                  <simplebar style="max-height: 330px">
                    <table class="table table-centered table-nowrap align-middle">
                      <tbody>
                        <tr v-for="data of transactionsData" :key="data.id">
                          <td style="width: 50px">
                            <div :class="`font-size-22 text-${data.color}`">
                              <i
                                :class="{
                                  'bx bx-down-arrow-circle':
                                    `${data.color}` === 'primary',
                                  'bx bx-up-arrow-circle':
                                    `${data.color}` === 'danger',
                                }"
                              ></i>
                            </div>
                          </td>
                          <td>
                            <div>
                              <h5 class="font-size-14 mb-1">{{ data.name }}</h5>
                              <p class="text-muted mb-0">{{ data.date }}</p>
                            </div>
                          </td>
                          <td>
                            <div class="text-end">
                              <h5 class="font-size-14 mb-0">{{ data.text }}</h5>
                            </div>
                          </td>
                          <td>
                            <div class="text-end">
                              <h5 class="font-size-14 text-muted mb-0">
                                {{ data.price }}
                              </h5>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </simplebar>
                </b-card-text>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
      <div class="col-xl-4">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Notifications</h4>

            <ul class="list-group">
              <simplebar style="max-height: 390px">
                <li class="list-group-item border-0">
                  <div class="media">
                    <div class="avatar-xs me-3">
                      <span class="avatar-title rounded-circle bg-light">
                        <img
                          src="@/assets/images/companies/img-1.png"
                          alt
                          height="18"
                        />
                      </span>
                    </div>
                    <div class="media-body">
                      <h5 class="font-size-14">Donec vitae sapien ut</h5>
                      <p class="text-muted">
                        If several languages coalesce, the grammar of the
                        resulting language
                      </p>

                      <div class="float-end">
                        <p class="text-muted mb-0">
                          <i class="mdi mdi-account me-1"></i> Joseph
                        </p>
                      </div>
                      <p class="text-muted mb-0">12 Mar, 2020</p>
                    </div>
                  </div>
                </li>
                <li class="list-group-item border-0">
                  <div class="media">
                    <div class="avatar-xs me-3">
                      <span class="avatar-title rounded-circle bg-light">
                        <img
                          src="@/assets/images/companies/img-2.png"
                          alt
                          height="18"
                        />
                      </span>
                    </div>
                    <div class="media-body">
                      <h5 class="font-size-14">Cras ultricies mi eu turpis</h5>
                      <p class="text-muted">
                        To an English person, it will seem like simplified
                        English, as a skeptical cambridge
                      </p>

                      <div class="float-end">
                        <p class="text-muted mb-0">
                          <i class="mdi mdi-account me-1"></i> Jerry
                        </p>
                      </div>
                      <p class="text-muted mb-0">13 Mar, 2020</p>
                    </div>
                  </div>
                </li>
                <li class="list-group-item border-0">
                  <div class="media">
                    <div class="avatar-xs me-3">
                      <span class="avatar-title rounded-circle bg-light">
                        <img
                          src="@/assets/images/companies/img-3.png"
                          alt
                          height="18"
                        />
                      </span>
                    </div>
                    <div class="media-body">
                      <h5 class="font-size-14">Duis arcu tortor suscipit</h5>
                      <p class="text-muted">
                        It va esser tam simplic quam occidental in fact, it va
                        esser occidental.
                      </p>

                      <div class="float-end">
                        <p class="text-muted mb-0">
                          <i class="mdi mdi-account me-1"></i> Calvin
                        </p>
                      </div>
                      <p class="text-muted mb-0">14 Mar, 2020</p>
                    </div>
                  </div>
                </li>
                <li class="list-group-item border-0">
                  <div class="media">
                    <div class="avatar-xs me-3">
                      <span class="avatar-title rounded-circle bg-light">
                        <img
                          src="@/assets/images/companies/img-1.png"
                          alt
                          height="18"
                        />
                      </span>
                    </div>
                    <div class="media-body">
                      <h5 class="font-size-14">Donec vitae sapien ut</h5>
                      <p class="text-muted">
                        If several languages coalesce, the grammar of the
                        resulting language
                      </p>

                      <div class="float-end">
                        <p class="text-muted mb-0">
                          <i class="mdi mdi-account me-1"></i> Joseph
                        </p>
                      </div>
                      <p class="text-muted mb-0">12 Mar, 2020</p>
                    </div>
                  </div>
                </li>
              </simplebar>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-xl-4">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Buy / Sell</h4>
            <b-tabs pills nav-class="bg-light rounded" content-class="mt-4">
              <b-tab title="Buy" active>
                <b-card-text>
                  <div class="float-end ms-2">
                    <h5 class="font-size-14">
                      <i
                        class="bx bx-wallet text-primary font-size-16 align-middle me-1"
                      ></i>
                      $4235.23
                    </h5>
                  </div>
                  <h5 class="font-size-14 mb-4">Buy Coin</h5>

                  <div>
                    <div class="form-group mb-3">
                      <label>Payment method :</label>
                      <select class="form-select">
                        <option>Credit / Debit Card</option>
                        <option>Paypal</option>
                      </select>
                    </div>

                    <div>
                      <label>Add Amount :</label>
                      <div class="input-group mb-3">
                        <label class="input-group-text">Amount</label>
                        <select class="form-select" style="max-width: 90px">
                          <option value="BT" selected>BTC</option>
                          <option value="ET">ETH</option>
                          <option value="LT">LTC</option>
                        </select>
                        <input type="text" class="form-control" />
                      </div>

                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <label class="input-group-text">Price</label>
                        </div>
                        <input type="text" class="form-control" />
                        <div class="input-group-append">
                          <label class="input-group-text">$</label>
                        </div>
                      </div>

                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <label class="input-group-text">Total</label>
                        </div>
                        <input type="text" class="form-control" />
                      </div>
                    </div>

                    <div class="text-center">
                      <button type="button" class="btn btn-success w-md">
                        Buy Coin
                      </button>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Sell">
                <b-card-text>
                  <div class="float-end ms-2">
                    <h5 class="font-size-14">
                      <i
                        class="bx bx-wallet text-primary font-size-16 align-middle me-1"
                      ></i>
                      $4235.23
                    </h5>
                  </div>
                  <h5 class="font-size-14 mb-4">Sell Coin</h5>

                  <div>
                    <div class="form-group mb-3">
                      <label>Email :</label>
                      <input type="email" class="form-control" />
                    </div>
                    <div>
                      <label>Add Amount :</label>
                      <div class="input-group mb-3">
                        <label class="input-group-text">Amount</label>

                        <select class="form-select" style="max-width: 90px">
                          <option value="BT" selected>BTC</option>
                          <option value="ET">ETH</option>
                          <option value="LT">LTC</option>
                        </select>
                        <input type="text" class="form-control" />
                      </div>

                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <label class="input-group-text">Price</label>
                        </div>
                        <input type="text" class="form-control" />
                        <div class="input-group-append">
                          <label class="input-group-text">$</label>
                        </div>
                      </div>

                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <label class="input-group-text">Total</label>
                        </div>
                        <input type="text" class="form-control" />
                      </div>
                    </div>

                    <div class="text-center">
                      <button type="button" class="btn btn-danger w-md">
                        Sell Coin
                      </button>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>