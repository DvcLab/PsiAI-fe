<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

import { required } from "vuelidate/lib/validators";

import { customersData } from "./data-customers";
import appConfig from "@/app.config";

/**
 * Customers component
 */
export default {
  page: {
    title: "Customers",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      customersData: customersData,
      title: "Customers",
      items: [
        {
          text: "Ecommerce",
          href: "/",
        },
        {
          text: "Customers",
          active: true,
        },
      ],
      showModal: false,
      submitted: false,
      customers: {
        username: "",
        phone: "",
        email: "",
        address: "",
        balance: "",
      },
    };
  },
  validations: {
    customers: {
      username: { required },
      phone: { required },
      email: { required },
      address: { required },
      balance: { required },
    },
  },
  methods: {
    /**
     * Modal form submit
     */
    // eslint-disable-next-line no-unused-vars
    handleSubmit(e) {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
        const currentDate = new Date();
        this.customersData.push({
          username: this.customers.username,
          phone: this.customers.phone,
          email: this.customers.email,
          address: this.customers.address,
          balance: this.customers.balance,
          rating: "4.3",
          date: currentDate.getHours() + ":" + currentDate.getMinutes(),
        });
        this.showModal = false;
        this.customers = {};
      }
      this.submitted = false;
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row mb-2">
              <div class="col-sm-4">
                <div class="search-box me-2 mb-2 d-inline-block">
                  <div class="position-relative">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search..."
                    />
                    <i class="bx bx-search-alt search-icon"></i>
                  </div>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="text-sm-end">
                  <button
                    type="button"
                    class="btn btn-success btn-rounded mb-2 me-2"
                    @click="showModal = true"
                  >
                    <i class="mdi mdi-plus me-1"></i> New Customers
                  </button>
                  <b-modal
                    v-model="showModal"
                    title="Add New Customer"
                    title-class="text-black font-18"
                    body-class="p-3"
                    hide-footer
                  >
                    <form @submit.prevent="handleSubmit">
                      <div class="row">
                        <div class="col-12">
                          <div class="mb-3">
                            <label for="name">Event Name</label>
                            <input
                              id="name"
                              v-model="customers.username"
                              type="text"
                              class="form-control"
                              placeholder="Insert username"
                              :class="{
                                'is-invalid':
                                  submitted && $v.customers.username.$error,
                              }"
                            />
                            <div
                              v-if="
                                submitted && !$v.customers.username.required
                              "
                              class="invalid-feedback"
                            >
                              This value is required.
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="mb-3">
                            <label for="phone">Phone</label>
                            <input
                              id="phone"
                              v-model="customers.phone"
                              type="text"
                              class="form-control"
                              placeholder="Insert phone"
                              :class="{
                                'is-invalid':
                                  submitted && $v.customers.phone.$error,
                              }"
                            />
                            <div
                              v-if="submitted && !$v.customers.phone.required"
                              class="invalid-feedback"
                            >
                              This value is required.
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="mb-3">
                            <label for="email">Email</label>
                            <input
                              id="email"
                              v-model="customers.email"
                              type="email"
                              class="form-control"
                              placeholder="Insert email"
                              :class="{
                                'is-invalid':
                                  submitted && $v.customers.email.$error,
                              }"
                            />
                            <div
                              v-if="submitted && !$v.customers.email.required"
                              class="invalid-feedback"
                            >
                              This value is required.
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="mb-3">
                            <label for="address">Address</label>
                            <input
                              id="address"
                              v-model="customers.address"
                              type="text"
                              class="form-control"
                              placeholder="Insert address"
                              :class="{
                                'is-invalid':
                                  submitted && $v.customers.address.$error,
                              }"
                            />
                            <div
                              v-if="submitted && !$v.customers.address.required"
                              class="invalid-feedback"
                            >
                              This value is required.
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="mb-3">
                            <label for="balance">Balance</label>
                            <input
                              id="balance"
                              v-model="customers.balance"
                              type="text"
                              class="form-control"
                              placeholder="Insert balance"
                              :class="{
                                'is-invalid':
                                  submitted && $v.customers.balance.$error,
                              }"
                            />
                            <div
                              v-if="submitted && !$v.customers.balance.required"
                              class="invalid-feedback"
                            >
                              This value is required.
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="text-end pt-5 mt-3">
                        <b-button variant="light" @click="showModal = false">Close</b-button>
                        <b-button type="submit" variant="success" class="ms-1"
                          >Create event</b-button
                        >
                      </div>
                    </form>
                  </b-modal>
                </div>
              </div>
              <!-- end col-->
            </div>
            <div class="table-responsive">
              <table class="table table-centered table-nowrap align-middle">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Phone / Email</th>
                    <th>Address</th>
                    <th>Rating</th>
                    <th>Wallet Balance</th>
                    <th>Joining Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="customers in customersData" :key="customers.id">
                    <td>
                      <div class="form-check font-size-16">
                        <input
                          :id="`customCheck${customers.id}`"
                          type="checkbox"
                          class="form-check-input"
                        />
                        <label
                          class="form-check-label"
                          :for="`customCheck${customers.id}`"
                          >&nbsp;</label
                        >
                      </div>
                    </td>
                    <td>{{ customers.username }}</td>
                    <td>
                      <p class="mb-1">{{ customers.phone }}</p>
                      <p class="mb-0">{{ customers.email }}</p>
                    </td>
                    <td>{{ customers.address }}</td>
                    <td>
                      <span class="badge bg-success font-size-12">
                        <i class="mdi mdi-star me-1"></i>
                        {{ customers.rating }}
                      </span>
                    </td>
                    <td>{{ customers.balance }}</td>
                    <td>{{ customers.date }}</td>
                    <td>
                      <b-dropdown
                        class="card-drop"
                        variant="white"
                        right
                        toggle-class="p-0"
                        menu-class="dropdown-menu-end"
                      >
                        <template v-slot:button-content>
                          <i class="mdi mdi-dots-horizontal font-size-18"></i>
                        </template>

                        <b-dropdown-item>
                          <i class="fas fa-pencil-alt text-success me-1"></i>
                          Edit
                        </b-dropdown-item>

                        <b-dropdown-item>
                          <i class="fas fa-trash-alt text-danger me-1"></i>
                          Delete
                        </b-dropdown-item>
                      </b-dropdown>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ul class="pagination pagination-rounded justify-content-end mb-2">
              <li class="page-item disabled">
                <a
                  class="page-link"
                  href="javascript: void(0);"
                  aria-label="Previous"
                >
                  <i class="mdi mdi-chevron-left"></i>
                </a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="javascript: void(0);">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript: void(0);">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript: void(0);">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript: void(0);">4</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript: void(0);">5</a>
              </li>
              <li class="page-item">
                <a
                  class="page-link"
                  href="javascript: void(0);"
                  aria-label="Next"
                >
                  <i class="mdi mdi-chevron-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>
