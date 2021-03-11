<script>
import Layout from "../../../layouts/main";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

/**
 * Buy/Sell component
 */
export default {
  page: {
    title: "Buy/Sell",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Buy/Sell",
      items: [
        {
          text: "Crypto",
          href: "/"
        },
        {
          text: "Buy/Sell",
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
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <div class="float-end">
              <b-dropdown ngbDropdown menu-class="dropdown-menu-md dropdown-menu-end" right variant="light">
                <template v-slot:button-content>
                  <i class="mdi mdi-wallet me-1"></i>
                  <span class="d-none d-sm-inline-block" ngbDropdownToggle>
                    Wallet Balance
                    <i class="mdi mdi-chevron-down"></i>
                  </span>
                </template>

                <div class="dropdown-item-text">
                  <div>
                    <p class="text-muted mb-2">Available Balance</p>
                    <h5 class="mb-0">$ 9148.23</h5>
                  </div>
                </div>

                <div class="dropdown-divider"></div>

                <a class="dropdown-item" href="javascript: void(0);">
                  BTC :
                  <span class="float-end">1.02356</span>
                </a>
                <a class="dropdown-item" href="javascript: void(0);">
                  ETH :
                  <span class="float-end">0.04121</span>
                </a>
                <a class="dropdown-item" href="javascript: void(0);">
                  LTC :
                  <span class="float-end">0.00356</span>
                </a>

                <div class="dropdown-divider"></div>

                <a
                  class="dropdown-item text-primary text-center"
                  href="javascript: void(0);"
                >Learn more</a>
              </b-dropdown>
            </div>
            <h4 class="card-title mb-4">Buy/Sell Crypto</h4>
            <b-tabs content-class="crypto-buy-sell-nav-content p-4" nav-class="nav-tabs-custom">
              <b-tab title="Buy" active>
                <form>
                  <div class="mb-2">
                    <label>Currency :</label>
                    <div class="row">
                      <div class="col-xl-2 col-sm-4">
                        <div class="mb-3">
                          <label class="card-radio-label mb-2">
                            <input
                              type="radio"
                              name="currency"
                              id="buycurrencyoption1"
                              class="card-radio-input"
                              checked
                            />

                            <div class="card-radio">
                              <div>
                                <i
                                  class="mdi mdi-bitcoin font-size-24 text-warning align-middle me-2"
                                ></i>
                                <span>Bitcoin</span>
                              </div>
                            </div>
                          </label>

                          <div>
                            <p class="text-muted mb-1">Current price :</p>
                            <h5 class="font-size-16">0.00016 BTC</h5>
                          </div>
                        </div>
                      </div>

                      <div class="col-xl-2 col-sm-4">
                        <div class="mb-3">
                          <label class="card-radio-label mb-2">
                            <input
                              type="radio"
                              name="currency"
                              id="buycurrencyoption2"
                              class="card-radio-input"
                            />

                            <div class="card-radio">
                              <div>
                                <i
                                  class="mdi mdi-ethereum font-size-24 text-primary align-middle me-2"
                                ></i>
                                <span>Ethereum</span>
                              </div>
                            </div>
                          </label>

                          <div>
                            <p class="text-muted mb-1">Current price :</p>
                            <h5 class="font-size-16">0.0073 ETH</h5>
                          </div>
                        </div>
                      </div>

                      <div class="col-xl-2 col-sm-4">
                        <div class="mb-3">
                          <label class="card-radio-label mb-2">
                            <input
                              type="radio"
                              name="currency"
                              id="buycurrencyoption3"
                              class="card-radio-input"
                            />

                            <div class="card-radio">
                              <div>
                                <i
                                  class="mdi mdi-litecoin font-size-24 text-info align-middle me-2"
                                ></i>
                                <span>litecoin</span>
                              </div>
                            </div>
                          </label>

                          <div>
                            <p class="text-muted mb-1">Current price :</p>
                            <h5 class="font-size-16">0.025 LTC</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="mb-2">
                    <label>Payment method :</label>

                    <div class="row">
                      <div class="col-xl-2 col-sm-4">
                        <label class="card-radio-label mb-3">
                          <input
                            type="radio"
                            name="pay-method"
                            id="pay-methodoption1"
                            class="card-radio-input"
                          />
                          <div class="card-radio">
                            <i
                              class="fab fa-cc-mastercard font-size-24 text-primary align-middle me-2"
                            ></i>
                            <span>Credit / Debit Card</span>
                          </div>
                        </label>
                      </div>

                      <div class="col-xl-2 col-sm-4">
                        <label class="card-radio-label mb-3">
                          <input
                            type="radio"
                            name="pay-method"
                            id="pay-methodoption3"
                            class="card-radio-input"
                            checked
                          />
                          <div class="card-radio">
                            <i class="fab fa-cc-paypal font-size-24 text-primary align-middle me-2"></i>
                            <span>Paypal</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label>Add value :</label>

                    <div class="row">
                      <div class="col-sm-6">
                        <div class="input-group mb-2 currency-value">
                          <div class="input-group-prepend">
                            <span class="input-group-text">Bitcoin</span>
                          </div>
                          <input type="text" class="form-control" />
                        </div>
                      </div>

                      <div class="col-sm-6">
                        <div class="input-group mb-2">
                          <input type="text" class="form-control text-sm-right" />

                          <div class="input-group-append">
                            <span class="input-group-text">USD Amount</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label>Wallet Address :</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="text-center mt-4">
                    <button type="button" class="btn btn-success">Buy Crypto currency</button>
                  </div>
                </form>
              </b-tab>
              <b-tab title="Sell">
                <form>
                  <div class="mb-2">
                    <label>Currency :</label>

                    <div class="row">
                      <div class="col-xl-2 col-sm-4">
                        <div class="mb-3">
                          <label class="card-radio-label mb-2">
                            <input
                              type="radio"
                              name="currency"
                              id="sellcurrencyoption1"
                              class="card-radio-input"
                              checked
                            />

                            <div class="card-radio">
                              <div>
                                <i
                                  class="mdi mdi-bitcoin font-size-24 text-warning align-middle me-2"
                                ></i>
                                <span>Bitcoin</span>
                              </div>
                            </div>
                          </label>
                          <div>
                            <p class="text-muted mb-1">Current price :</p>
                            <h5 class="font-size-16">0.00016 BTC</h5>
                          </div>
                        </div>
                      </div>

                      <div class="col-xl-2 col-sm-4">
                        <div class="mb-3">
                          <label class="card-radio-label mb-2">
                            <input
                              type="radio"
                              name="currency"
                              id="sellcurrencyoption2"
                              class="card-radio-input"
                            />

                            <div class="card-radio">
                              <div>
                                <i
                                  class="mdi mdi-ethereum font-size-24 text-primary align-middle me-2"
                                ></i>
                                <span>Ethereum</span>
                              </div>
                            </div>
                          </label>
                          <div>
                            <p class="text-muted mb-1">Current price :</p>
                            <h5 class="font-size-16">0.0073 ETH</h5>
                          </div>
                        </div>
                      </div>

                      <div class="col-xl-2 col-sm-4">
                        <div class="mb-3">
                          <label class="card-radio-label mb-2">
                            <input
                              type="radio"
                              name="currency"
                              id="sellcurrencyoption3"
                              class="card-radio-input"
                            />

                            <div class="card-radio">
                              <div>
                                <i
                                  class="mdi mdi-litecoin font-size-24 text-info align-middle me-2"
                                ></i>
                                <span>litecoin</span>
                              </div>
                            </div>
                          </label>

                          <div>
                            <p class="text-muted mb-1">Current price :</p>
                            <h5 class="font-size-16">0.025 LTC</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label>Email :</label>
                    <input type="email" class="form-control" />
                  </div>

                  <div class="mb-3">
                    <label>Add value :</label>

                    <div class="row">
                      <div class="col-sm-6">
                        <div class="input-group mb-2 currency-value">
                          <div class="input-group-prepend">
                            <span class="input-group-text">Crypto value</span>
                          </div>
                          <input type="text" class="form-control" />
                        </div>
                      </div>

                      <div class="col-sm-6">
                        <div class="input-group mb-2">
                          <input type="text" class="form-control text-sm-right" />

                          <div class="input-group-append">
                            <span class="input-group-text">USD Amount</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label>Wallet Address :</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="text-center mt-4">
                    <button type="button" class="btn btn-danger">Sell Crypto currency</button>
                  </div>
                </form>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>