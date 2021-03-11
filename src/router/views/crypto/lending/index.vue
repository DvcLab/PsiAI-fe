<script>
import Layout from "../../../layouts/main";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

/**
 * Lending component
 */
export default {
  page: {
    title: "Lending",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Lending",
      items: [
        {
          text: "Crypto",
          href: "/"
        },
        {
          text: "Lending",
          active: true
        }
      ]
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

    <div class="row">
      <div class="col-xl-4">
        <div class="card">
          <div class="card-body border-bottom">
            <b-dropdown
              class="float-end ms-2"
              toggle-class="text-muted p-0"
              menu-class="dropdown-menu-end"
              right
              variant="white"
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
                <h5 class>Henry Wells</h5>
                <p class="text-muted mb-1">henrywells@abc.com</p>
                <p class="text-muted mb-0">Id no: #SK0234</p>
              </div>
            </div>
          </div>
          <div class="card-body border-bottom">
            <div>
              <div class="row">
                <div class="col-sm-6">
                  <div>
                    <p class="text-muted mb-2">Available Balance</p>
                    <h5>$ 9148.00</h5>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="text-sm-end mt-4 mt-sm-0">
                    <p class="text-muted mb-2">Since last month</p>
                    <h5>
                      + $ 215.53
                      <span class="badge bg-success ms-1 align-bottom">+ 1.3 %</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">How it work</h4>

            <div>
              <ul class="verti-timeline list-unstyled">
                <li class="event-list">
                  <div class="event-timeline-dot">
                    <i class="bx bx-right-arrow-circle"></i>
                  </div>
                  <div class="media">
                    <div class="me-3">
                      <i class="bx bx-user-plus h2 text-primary"></i>
                    </div>
                    <div class="media-body">
                      <div>
                        <h5 class="font-size-14">Register account</h5>
                        <p class="text-muted">
                          New common language will be more simple and regular
                          than the existing.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="event-list">
                  <div class="event-timeline-dot">
                    <i class="bx bx-right-arrow-circle"></i>
                  </div>
                  <div class="media">
                    <div class="me-3">
                      <i class="bx bx-copy-alt h2 text-primary"></i>
                    </div>
                    <div class="media-body">
                      <div>
                        <h5 class="font-size-14">Select Deposit</h5>
                        <p class="text-muted">
                          To achieve this, it would be necessary to have uniform
                          grammar.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>

                <li class="event-list">
                  <div class="event-timeline-dot">
                    <i class="bx bx-right-arrow-circle"></i>
                  </div>
                  <div class="media">
                    <div class="me-3">
                      <i class="bx bx-cloud-download h2 text-primary"></i>
                    </div>
                    <div class="media-body">
                      <div>
                        <h5 class="font-size-14">Get Earnings</h5>
                        <p class="text-muted">
                          New common language will be more simple and regular
                          than the existing.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-8">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Deposits</h4>

            <div class="row">
              <div class="col-lg-4">
                <div class="border p-3 rounded mt-4">
                  <div class="d-flex align-items-center mb-3">
                    <div class="avatar-xs me-3">
                      <span
                        class="avatar-title rounded-circle bg-soft bg-warning text-warning font-size-18"
                      >
                        <i class="mdi mdi-bitcoin"></i>
                      </span>
                    </div>
                    <h5 class="font-size-14 mb-0">Bitcoin</h5>
                  </div>

                  <div class="row">
                    <div class="col-lg-6">
                      <div class="text-muted mt-3">
                        <p>Annual Yield</p>
                        <h4>4.05 %</h4>
                        <p class="mb-0">0.00745 BTC</p>
                      </div>
                    </div>

                    <div class="col-lg-6 align-self-end">
                      <div class="float-end mt-3">
                        <a href="javascript: void(0);" class="btn btn-primary">Select</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="border p-3 rounded mt-4">
                  <div class="d-flex align-items-center mb-3">
                    <div class="avatar-xs me-3">
                      <span
                        class="avatar-title rounded-circle bg-soft bg-primary text-primary font-size-18"
                      >
                        <i class="mdi mdi-ethereum"></i>
                      </span>
                    </div>
                    <h5 class="font-size-14 mb-0">Ethereum</h5>
                  </div>

                  <div class="row">
                    <div class="col-lg-6">
                      <div class="text-muted mt-3">
                        <p>Annual Yield</p>
                        <h4>5.08 %</h4>
                        <p class="mb-0">0.0056 ETH</p>
                      </div>
                    </div>

                    <div class="col-lg-6 align-self-end">
                      <div class="float-end mt-3">
                        <a href="javascript: void(0);" class="btn btn-primary">Select</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="border p-3 rounded mt-4">
                  <div class="d-flex align-items-center mb-3">
                    <div class="avatar-xs me-3">
                      <span class="avatar-title rounded-circle bg-soft bg-info text-info font-size-18">
                        <i class="mdi mdi-litecoin"></i>
                      </span>
                    </div>
                    <h5 class="font-size-14 mb-0">Litecoin</h5>
                  </div>

                  <div class="row">
                    <div class="col-lg-6">
                      <div class="text-muted mt-3">
                        <p>Annual Yield</p>
                        <h4>4.12 %</h4>
                        <p class="mb-0">0.00245 LTC</p>
                      </div>
                    </div>

                    <div class="col-lg-6 align-self-end">
                      <div class="float-end mt-3">
                        <a href="javascript: void(0);" class="btn btn-primary">Select</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">My Assets</h4>

            <div class="table-responsive">
              <table class="table table-nowrap table-centered mb-0 align-middle">
                <thead>
                  <tr>
                    <th scope="col">Token</th>
                    <th scope="col">Price</th>
                    <th scope="col">Invest</th>
                    <th scope="col">Loans</th>
                    <th scope="col" colspan="2">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <div class="d-flex align-items-center">
                        <div class="avatar-xs me-3">
                          <span
                            class="avatar-title rounded-circle bg-soft bg-warning text-warning font-size-18"
                          >
                            <i class="mdi mdi-bitcoin"></i>
                          </span>
                        </div>
                        <span>BTC</span>
                      </div>
                    </th>
                    <td>
                      <div class="text-muted">$ 7525.47</div>
                    </td>
                    <td>
                      <h5 class="font-size-14 mb-1">1.2601</h5>
                      <div class="text-muted">$6225.74</div>
                    </td>
                    <td>
                      <h5 class="font-size-14 mb-1">0.1512</h5>
                      <div class="text-muted">$742.32</div>
                    </td>
                    <td>
                      <h5 class="font-size-14 mb-1">4.2562</h5>
                      <div class="text-muted">$6425.42</div>
                    </td>
                    <td style="width: 120px;">
                      <a href="javascript: void(0);" class="btn btn-primary btn-sm w-xs">View</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div class="d-flex align-items-center">
                        <div class="avatar-xs me-3">
                          <span
                            class="avatar-title rounded-circle bg-soft bg-primary text-primary font-size-18"
                          >
                            <i class="mdi mdi-ethereum"></i>
                          </span>
                        </div>
                        <span>ETH</span>
                      </div>
                    </th>
                    <td>
                      <div class="text-muted">$ 4235.78</div>
                    </td>
                    <td>
                      <h5 class="font-size-14 mb-1">0.0814</h5>
                      <div class="text-muted">$3256.29</div>
                    </td>
                    <td>
                      <h5 class="font-size-14 mb-1">0.0253</h5>
                      <div class="text-muted">$675.04</div>
                    </td>
                    <td>
                      <h5 class="font-size-14 mb-1">0.0921</h5>
                      <div class="text-muted">$4536.24</div>
                    </td>
                    <td>
                      <a href="javascript: void(0);" class="btn btn-primary btn-sm w-xs">View</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div class="d-flex align-items-center">
                        <div class="avatar-xs me-3">
                          <span
                            class="avatar-title rounded-circle bg-soft bg-info text-info font-size-18"
                          >
                            <i class="mdi mdi-litecoin"></i>
                          </span>
                        </div>
                        <span>LTC</span>
                      </div>
                    </th>
                    <td>
                      <div class="text-muted">$ 3726.06</div>
                    </td>
                    <td>
                      <h5 class="font-size-14 mb-1">0.0682</h5>
                      <div class="text-muted">$2936.14</div>
                    </td>
                    <td>
                      <h5 class="font-size-14 mb-1">0.0234</h5>
                      <div class="text-muted">$523.17</div>
                    </td>
                    <td>
                      <h5 class="font-size-14 mb-1">0.0823</h5>
                      <div class="text-muted">$3254.23</div>
                    </td>
                    <td>
                      <a href="javascript: void(0);" class="btn btn-primary btn-sm w-xs">View</a>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">
                      <div class="d-flex align-items-center">
                        <div class="avatar-xs me-3">
                          <span
                            class="avatar-title rounded-circle bg-soft bg-warning text-warning font-size-18"
                          >
                            <i class="mdi mdi-bitcoin"></i>
                          </span>
                        </div>
                        <span>BTC</span>
                      </div>
                    </th>
                    <td>
                      <div class="text-muted">$ 7525.47</div>
                    </td>
                    <td>
                      <h5 class="font-size-14 mb-1">1.2601</h5>
                      <div class="text-muted">$6225.74</div>
                    </td>
                    <td>
                      <h5 class="font-size-14 mb-1">0.1512</h5>
                      <div class="text-muted">$742.32</div>
                    </td>
                    <td>
                      <h5 class="font-size-14 mb-1">4.2562</h5>
                      <div class="text-muted">$6425.42</div>
                    </td>
                    <td>
                      <a href="javascript: void(0);" class="btn btn-primary btn-sm w-xs">View</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>