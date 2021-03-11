<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";
import { required } from "vuelidate/lib/validators";
import Multiselect from "vue-multiselect";  

import { userGridData } from "./data-user";

/**
 * Contacts-grid component
 */
export default {
  page: {
    title: "Contact Users Grid",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: { Layout, PageHeader, Multiselect },
  data() {
    return {
      userGridData: userGridData,
      title: "Users Grid",
      items: [
        {
          text: "Contacts",
          href: "/",
        },
        {
          text: "Users Grid",
          active: true,
        },
      ],
      showModal: false,
      submitted: false,
      users: {
        name: "",
        designation: "",
        email: "",
      },
      value1: null,
      options: [
        "Photoshop",
        "illustrator",
        "Html",
        "Css",
        "Php",
        "Java",
        "Python",
        "Ruby",
      ],
    };
  },
  validations: {
    users: {
      name: { required },
      designation: { required },
      email: { required },
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
        this.userGridData.push({
          id: this.userGridData.length + 1,
          name: this.users.name,
          designation: this.users.designation,
          projects: this.value1,
          email: this.users.email,
        });
        this.showModal = false;
        this.users = {};
        this.value1 = [];
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
     <div class="d-flex">
        <button class="btn btn-success ms-auto mb-2" @click="showModal = true">
          Add Customer
        </button>
      </div>
    </div>
    <b-modal v-model="showModal" title="Add Customer" hide-footer>
      <form @submit.prevent="handleSubmit">
        <div class="row">
          <div class="col-12">
            <div class="mb-3">
              <label for="name">Event Name</label>
              <input
                id="name"
                v-model="users.name"
                type="text"
                class="form-control"
                placeholder="Insert name"
                :class="{
                  'is-invalid': submitted && $v.users.name.$error,
                }"
              />
              <div
                v-if="submitted && !$v.users.name.required"
                class="invalid-feedback"
              >
                This value is required.
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="mb-3">
              <label for="name">Designation</label>
              <input
                id="name"
                v-model="users.designation"
                type="text"
                class="form-control"
                placeholder="Insert designation"
                :class="{
                  'is-invalid': submitted && $v.users.designation.$error,
                }"
              />
              <div
                v-if="submitted && !$v.users.designation.required"
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
                v-model="users.email"
                type="email"
                class="form-control"
                placeholder="Insert email"
                :class="{
                  'is-invalid': submitted && $v.users.email.$error,
                }"
              />
              <div
                v-if="submitted && !$v.users.email.required"
                class="invalid-feedback"
              >
                This value is required.
              </div>
            </div>
          </div>
          <div class="col-12">
            <label for="projects">Projects</label>
            <multiselect
              v-model="value1"
              :options="options"
              :multiple="true"
            ></multiselect>
          </div>
        </div>
        <div class="text-end mt-3">
          <b-button variant="light" @click="showModal = false">Close</b-button>
          <b-button type="submit" variant="success" class="ms-1"
            >Create event</b-button
          >
        </div>
      </form>
    </b-modal>
    <div class="row">
      <div
        v-for="user in userGridData"
        :key="user.id"
        class="col-xl-3 col-sm-6"
      >
        <div class="card text-center">
          <div class="card-body">
            <div v-if="!user.image" class="avatar-sm mx-auto mb-4">
              <span
                class="avatar-title rounded-circle bg-soft bg-primary text-primary font-size-16"
                >{{ user.name.charAt(0) }}</span
              >
            </div>
            <div v-if="user.image" class="mb-4">
              <img
                class="rounded-circle avatar-sm"
                :src="`${user.image}`"
                alt
              />
            </div>
            <h5 class="font-size-15 mb-1">
              <a href="javascript: void(0);" class="text-dark">{{
                user.name
              }}</a>
            </h5>
            <p class="text-muted">{{ user.designation }}</p>

            <div>
              <a
                href="javascript: void(0);"
                class="badge bg-primary font-size-11 m-1"
                >{{ user.projects[0] }}</a
              >
              <a
                href="javascript: void(0);"
                class="badge bg-primary font-size-11 m-1"
                >{{ user.projects[1] }}</a
              >
              <a
                href="javascript: void(0);"
                class="badge bg-primary font-size-11 m-1"
                >{{ user.projects[2] }}</a
              >
            </div>
          </div>
          <div class="card-footer bg-transparent border-top">
            <div class="contact-links d-flex font-size-20">
              <div class="flex-fill">
                <a
                  v-b-tooltip.hover.top
                  title="Message"
                  href="javascript: void(0);"
                >
                  <i class="bx bx-message-square-dots"></i>
                </a>
              </div>
              <div class="flex-fill">
                <a
                  v-b-tooltip.hover.top
                  title="Projects"
                  href="javascript: void(0);"
                >
                  <i class="bx bx-pie-chart-alt"></i>
                </a>
              </div>
              <div class="flex-fill">
                <a
                  v-b-tooltip.hover.top
                  title="Profile"
                  href="javascript: void(0);"
                >
                  <i class="bx bx-user-circle"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
    <div class="row">
      <div class="col-12">
        <div class="text-center my-3">
          <a href="javascript:void(0);" class="text-success">
            <i class="bx bx-hourglass bx-spin me-2"></i> Load more
          </a>
        </div>
      </div>
      <!-- end col-->
    </div>
    <!-- end row -->
  </Layout>
</template>