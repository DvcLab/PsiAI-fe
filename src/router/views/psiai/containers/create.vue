<script>
import Layout from "../../../layouts/main";
import appConfig from "@/app.config";

/**
 * Starter component
 */
export default {
  page: {
    title: "创建容器",
    meta: [{ name: "创建容器", content: appConfig.description }]
  },
  components: { Layout },
  data() {
    return {
      
    };
  }
};
</script>
<template>
  <Layout>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            
            <h4 class="card-title mb-4">创建容器</h4>
            <form>
              <div class="mb-2">
                <label>项目:</label>
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
                <label>镜像:</label>

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
                <label>数据集:</label>

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
              <div class="text-center mt-4">
                <button type="button" class="btn btn-success">创建容器</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>