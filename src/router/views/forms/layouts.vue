<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Form Layouts component
 */
export default {
  page: {
    title: "Form Layouts",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Form Layouts",
      items: [
        {
          text: "Forms",
          href: "/",
        },
        {
          text: "Form Layouts",
          active: true,
        },
      ],
       selected: null
    };
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Form grid layout</h4>

            <b-form>
              <b-form-group
                class="mb-3"
                label="First name"
                label-for="formrow-firstname-input"
              >
                <b-form-input
                  id="formrow-firstname-input"
                  type="text"
                ></b-form-input>
              </b-form-group>

              <div class="row">
                <div class="col-md-6">
                  <b-form-group
                    class="mb-3"
                    label="Email"
                    label-for="formrow-email-input"
                  >
                    <b-form-input
                      id="formrow-email-input"
                      type="email"
                    ></b-form-input>
                  </b-form-group>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <b-form-group
                      class="mb-3"
                      label="Password"
                      label-for="formrow-password-input"
                    >
                      <b-form-input
                        id="formrow-password-input"
                        type="password"
                      ></b-form-input>
                    </b-form-group>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-4">
                  <b-form-group
                    class="mb-3"
                    label="City"
                    label-for="formrow-inputCity"
                  >
                    <b-form-input
                      id="formrow-inputCity"
                      type="text"
                    ></b-form-input>
                  </b-form-group>
                </div>
                <div class="col-lg-4">
                  <b-form-group
                    class="mb-3 form-label"
                    id="input-group-1"
                    label="State"
                    label-for="formrow-inputState"
                  >
                    <b-form-select
                      class="form-select"
                      id="formrow-inputState"
                      :options="['Choose...', '...']"
                      type="text"
                    ></b-form-select>
                  </b-form-group>
                </div>

                <div class="col-lg-4">
                  <b-form-group
                    class="mb-3"
                    label="Zip"
                    label-for="formrow-inputZip"
                  >
                    <b-form-input
                      id="formrow-inputZip"
                      type="text"
                    ></b-form-input>
                  </b-form-group>
                </div>
              </div>

              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label" for="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <div>
                <b-button variant="primary">Submit</b-button>
              </div>
            </b-form>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Horizontal form layout</h4>

            <b-form>
              <b-form-group
                class="mb-3"
                label="First name"
                label-for="horizontal-firstname-input"
                label-cols-sm="3"
              >
                <b-form-input
                  id="horizontal-firstname-input"
                  type="text"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                class="mb-4"
                label="Email"
                label-for="horizontal-email-input"
                label-cols-sm="3"
              >
                <b-form-input
                  id="horizontal-email-input"
                  type="email"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                class="mb-4"
                label="Password"
                label-for="horizontal-password-input"
                label-cols-sm="3"
              >
                <b-form-input
                  id="horizontal-password-input"
                  type="password"
                ></b-form-input>
              </b-form-group>

              <div class="row justify-content-end">
                <div class="col-sm-9">
                  <div class="form-check mb-4">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="horizontalLayout-Check"
                    />
                    <label
                      class="form-check-label"
                      for="horizontalLayout-Check"
                    >
                      Remember me
                    </label>
                  </div>

                  <div>
                    <b-button variant="primary">Submit</b-button>
                  </div>
                </div>
              </div>
            </b-form>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-4">Inline forms layout</h5>

            <b-form inline class="row gy-2 gx-3 align-items-center">
              <div class="col-sm-auto">
                <label class="visually-hidden" for="inlineFormInputName2"
                  >Name</label
                >
                <b-input
                  id="inlineFormInputName2"
                  class="mb-3"
                  placeholder="Jane Doe"
                ></b-input>
              </div>
              <div class="col-sm-auto">
                <label class="sr-only" for="inlineFormemail2">Email</label>
                <b-input-group prepend="@" class="mb-3">
                  <b-input
                    type="email"
                    id="inlineFormemail2"
                    placeholder="Enter Email"
                  ></b-input>
                </b-input-group>
              </div>
              <div class="col-sm-auto pt-1">
                <label class="visually-hidden" for="autoSizingSelect"
                  >Preference</label
                >

                <b-form-select class="form-select mb-3" v-model="selected">
                  <b-form-select-option :value="null"
                    >Choose...</b-form-select-option
                  >
                  <b-form-select-option value="a">One</b-form-select-option>
                  <b-form-select-option value="b">Two</b-form-select-option>
                  <b-form-select-option value="b">Thress</b-form-select-option>
                </b-form-select>
              </div>
              <div class="col-sm-auto">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="autoSizingCheck"
                  />
                  <label class="form-check-label" for="autoSizingCheck">
                    Remember me
                  </label>
                </div>
              </div>
              <div class="col-sm-auto">
                <b-button variant="primary" class="w-md">Submit</b-button>
              </div>
            </b-form>
          </div>
        </div>
      </div>
    </div>
    <!--  end row -->
  </Layout>
</template>