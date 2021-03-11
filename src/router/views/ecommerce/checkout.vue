<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import Multiselect from "vue-multiselect";

/**
 * Product-checkout Component
 */
export default {
  page: {
    title: "Checkout",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: { Multiselect, Layout, PageHeader },
  data() {
    return {
      title: "Checkout",
      items: [
        {
          text: "Ecommerce",
          href: "/",
        },
        {
          text: "Checkout",
          active: true,
        },
      ],
      stateValue: null,
      countryValue: null,
      stateOptions: [
        "Alaska",
        "Hawaii",
        "California",
        "Nevada",
        "Oregon",
        "Washington",
        "Arizona",
        "Colorado",
        "Idaho",
        "Montana",
        "Nebraska",
        "New Mexico",
        "North Dakota",
        "Utah",
        "Wyoming",
        "Alabama",
        "Arkansas",
        "Illinois",
        "Iowa",
      ],
      countryOptions: [
        "Afghanistan",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antarctica",
        "Argentina",
        "Hawaii",
        "California",
        "Colombia",
        "Congo",
        "Dominica",
        "Denmark",
        "Nevada",
        "Oregon",
        "Washington",
        "Ecuador",
        "Idaho",
        "Montana",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "Nicaragua",
        "New Caledonia",
        "North Dakota",
        "Tonga",
        "Tunisia",
        "Thailand",
        "Turkey",
        "Illinois",
        "Tuvalu",
        "Uganda",
        "Uruguay",
        "United Arab Emirates",
        "United Kingdom",
        "Venezuela",
        "Zimbabwe",
        "Uruguay",
      ],
    };
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="checkout-tabs">
      <b-tabs
        pills
        vertical
        nav-class="p-0"
        nav-wrapper-class="col-xl-2 col-sm-3"
      >
        <b-tab active>
          <template v-slot:title>
            <i class="bx bxs-truck d-block check-nav-icon mt-4 mb-2"></i>
            <p class="fw-bold mb-4">Shipping Info</p>
          </template>
          <b-card-text>
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Shipping information</h4>
                <p class="card-title-desc">Fill all information below</p>
                <form>
                  <b-row class="mb-4">
                    <b-col md="2">
                      <label for="input-name">Name</label>
                    </b-col>
                    <b-col md="10">
                      <b-form-input
                        id="input-name"
                        placeholder="Enter your name"
                      ></b-form-input>
                    </b-col>
                  </b-row>

                  <b-row class="mb-4">
                    <b-col md="2">
                      <label for="billing-email-address">Email Address</label>
                    </b-col>
                    <b-col md="10">
                      <b-form-input
                        id="billing-email-address"
                        placeholder="Enter your email"
                      ></b-form-input>
                    </b-col>
                  </b-row>

                  <b-row class="mb-4">
                    <b-col md="2">
                      <label for="billing-phone">Phone</label>
                    </b-col>
                    <b-col md="10">
                      <b-form-input
                        id="billing-phone"
                        placeholder="Enter your Phone no."
                      ></b-form-input>
                    </b-col>
                  </b-row>

                  <b-row class="mb-4">
                    <b-col md="2">
                      <label for="billing-address">Address</label>
                    </b-col>
                    <b-col md="10">
                      <b-form-textarea
                        id="billing-address"
                        rows="3"
                        placeholder="Enter full address"
                      ></b-form-textarea>
                    </b-col>
                  </b-row>

                  <div class="form-group row mb-4">
                    <label class="col-md-2 col-form-label">Country</label>
                    <div class="col-md-10">
                      <multiselect
                        v-model="countryValue"
                        :options="countryOptions"
                      ></multiselect>
                    </div>
                  </div>

                  <div class="form-group row mb-4">
                    <label class="col-md-2 col-form-label">States</label>
                    <div class="col-md-10">
                      <multiselect
                        v-model="stateValue"
                        :options="stateOptions"
                      ></multiselect>
                    </div>
                  </div>
                  <b-row class="mb-4">
                    <b-col md="2">
                      <label for="example-textarea">Order Notes:</label>
                    </b-col>
                    <b-col md="10">
                      <b-form-textarea
                        id="example-textarea"
                        rows="3"
                        placeholder="Write some note.."
                      ></b-form-textarea>
                    </b-col>
                  </b-row>
                </form>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-sm-6">
                <router-link
                  tag="a"
                  to="/ecommerce/cart"
                  class="btn text-muted d-none d-sm-inline-block btn-link"
                >
                  <i class="mdi mdi-arrow-left me-1"></i> Back to Shopping Cart
                </router-link>
              </div>
              <!-- end col -->
              <div class="col-sm-6">
                <div class="text-end">
                  <router-link
                    tag="a"
                    to="/ecommerce/checkout"
                    class="btn btn-success"
                  >
                    <i class="mdi mdi-truck-fast me-1"></i> Proceed to Shipping
                  </router-link>
                </div>
              </div>
              <!-- end col -->
            </div>
          </b-card-text>
        </b-tab>
        <b-tab>
          <template v-slot:title>
            <i class="bx bx-money d-block check-nav-icon mt-4 mb-2"></i>
            <p class="fw-bold mb-4">Payment Info</p>
          </template>
          <b-card-text>
            <div class="card">
              <div class="card-body">
                <div>
                  <h4 class="card-title">Payment information</h4>
                  <p class="card-title-desc">Fill all information below</p>

                  <div>
                    <div class="form-check form-check-inline font-size-16">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="paymentoptionsRadio"
                        id="paymentoptionsRadio1"
                        checked=""
                      />
                      <label
                        class="form-check-label font-size-13"
                        for="paymentoptionsRadio1"
                        ><i
                          class="fab fa-cc-mastercard me-1 font-size-20 align-top"
                        ></i>
                        Credit / Debit Card</label
                      >
                    </div>
                    <div class="form-check form-check-inline font-size-16">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="paymentoptionsRadio"
                        id="paymentoptionsRadio2"
                      />
                      <label
                        class="form-check-label font-size-13"
                        for="paymentoptionsRadio2"
                        ><i
                          class="fab fa-cc-paypal me-1 font-size-20 align-top"
                        ></i>
                        Paypal</label
                      >
                    </div>
                    <div class="form-check form-check-inline font-size-16">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="paymentoptionsRadio"
                        id="paymentoptionsRadio3"
                      />
                      <label
                        class="form-check-label font-size-13"
                        for="paymentoptionsRadio3"
                        ><i
                          class="far fa-money-bill-alt me-1 font-size-20 align-top"
                        ></i>
                        Cash on Delivery</label
                      >
                    </div>
                  </div>

                  <h5 class="mt-5 mb-3 font-size-15">For card Payment</h5>
                  <div class="p-4 border">
                    <form>
                      <b-form-group
                        id="input-group-2"
                        label="Card Number"
                        label-for="input-card"
                        class="mb-0"
                      >
                        <b-form-input
                          id="input-card"
                          placeholder="0000 0000 0000 0000"
                        ></b-form-input>
                      </b-form-group>

                      <b-row class="mt-4">
                        <b-col lg="6">
                          <b-form-group
                            id="input-group-2"
                            label="Name on card"
                            label-for="input-number"
                            class="mb-0"
                          >
                            <b-form-input
                              id="input-number"
                              placeholder="Name on Card"
                            ></b-form-input>
                          </b-form-group>
                        </b-col>
                        <b-col lg="3">
                          <b-form-group
                            id="input-group-2"
                            label="Expiry date"
                            label-for="input-date"
                            class="mb-0"
                          >
                            <b-form-input
                              id="input-date"
                              placeholder="MM/YY"
                            ></b-form-input>
                          </b-form-group>
                        </b-col>

                        <b-col lg="3">
                          <b-form-group
                            id="input-group-2"
                            label="CVV Code"
                            label-for="cvvcodeInput"
                            class="mb-0"
                          >
                            <b-form-input
                              id="cvvcodeInput"
                              placeholder="Enter CVV Code"
                            ></b-form-input>
                          </b-form-group>
                        </b-col>
                      </b-row>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-sm-6">
                <router-link
                  tag="a"
                  to="/ecommerce/cart"
                  class="btn text-muted d-none d-sm-inline-block btn-link"
                >
                  <i class="mdi mdi-arrow-left me-1"></i> Back to Shopping Cart
                </router-link>
              </div>
              <!-- end col -->
              <div class="col-sm-6">
                <div class="text-end">
                  <router-link
                    tag="a"
                    to="/ecommerce/checkout"
                    class="btn btn-success"
                  >
                    <i class="mdi mdi-truck-fast me-1"></i> Proceed to Shipping
                  </router-link>
                </div>
              </div>
              <!-- end col -->
            </div>
          </b-card-text>
        </b-tab>
        <b-tab>
          <template v-slot:title>
            <i class="bx bx-badge-check d-block check-nav-icon mt-4 mb-2"></i>
            <p class="fw-bold mb-4">Confirmation</p>
          </template>
          <b-card-text>
            <div class="card">
              <div class="card-body">
                <div class="card shadow-none border mb-0">
                  <div class="card-body">
                    <h4 class="card-title mb-4">Order Summary</h4>

                    <div class="table-responsive">
                      <table class="table align-middle mb-0 table-nowrap">
                        <thead class="table-light">
                          <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Product Desc</th>
                            <th scope="col">Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <img
                                src="@/assets/images/product/img-1.png"
                                alt="product-img"
                                title="product-img"
                                class="avatar-md"
                              />
                            </th>
                            <td>
                              <h5 class="font-size-14 text-truncate">
                                <router-link
                                  tag="a"
                                  to="/ecommerce/product-detail"
                                  class="text-dark"
                                  >Half sleeve T-shirt (64GB)</router-link
                                >
                              </h5>
                              <p class="text-muted mb-0">$ 450 x 1</p>
                            </td>
                            <td>$ 450</td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <img
                                src="@/assets/images/product/img-7.png"
                                alt="product-img"
                                title="product-img"
                                class="avatar-md"
                              />
                            </th>
                            <td>
                              <h5 class="font-size-14 text-truncate">
                                <router-link
                                  tag="a"
                                  to="/ecommerce/product-detail"
                                  class="text-dark"
                                  >Wirless Headphone</router-link
                                >
                              </h5>
                              <p class="text-muted mb-0">$ 225 x 1</p>
                            </td>
                            <td>$ 225</td>
                          </tr>
                          <tr>
                            <td colspan="2">
                              <h6 class="m-0 text-end">Sub Total:</h6>
                            </td>
                            <td>$ 675</td>
                          </tr>
                          <tr>
                            <td colspan="3">
                              <div class="bg-soft bg-primary p-3 rounded">
                                <h5 class="font-size-14 text-primary mb-0">
                                  <i class="fas fa-shipping-fast me-2"></i>
                                  Shipping
                                  <span class="float-end">Free</span>
                                </h5>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                              <h6 class="m-0 text-end">Total:</h6>
                            </td>
                            <td>$ 675</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-sm-6">
                <router-link
                  tag="a"
                  to="/ecommerce/cart"
                  class="btn text-muted d-none d-sm-inline-block btn-link"
                >
                  <i class="mdi mdi-arrow-left me-1"></i> Back to Shopping Cart
                </router-link>
              </div>
              <!-- end col -->
              <div class="col-sm-6">
                <div class="text-end">
                  <router-link
                    tag="a"
                    to="/ecommerce/checkout"
                    class="btn btn-success"
                  >
                    <i class="mdi mdi-truck-fast me-1"></i> Proceed to Shipping
                  </router-link>
                </div>
              </div>
              <!-- end col -->
            </div>
          </b-card-text>
        </b-tab>
      </b-tabs>
    </div>
  </Layout>
</template>
