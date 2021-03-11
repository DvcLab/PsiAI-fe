<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import vue2Dropzone from "vue2-dropzone";

import Layout from "../../../layouts/main";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

/**
 * KYC Application component
 */
export default {
  page: {
    title: "KYC Application",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: {
    Layout,
    PageHeader,
    vueDropzone: vue2Dropzone,
    FormWizard,
    TabContent
  },
  data() {
    return {
      title: "KYC Application",
      items: [
        {
          text: "Crypto",
          href: "/"
        },
        {
          text: "KYC Application",
          active: true
        }
      ],
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 120,
        maxFilesize: 0.5,
        headers: { "My-Awesome-Header": "header value" }
      }
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row justify-content-center mt-lg-5">
      <div class="col-xl-5 col-sm-8">
        <div class="card">
          <div class="card-body">
            <div class="text-center">
              <div class="row justify-content-center">
                <div class="col-lg-10">
                  <h4 class="mt-4 fw-semibold">KYC Verification</h4>
                  <p
                    class="text-muted mt-3"
                  >Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis perferendis asperiores repellat.</p>
                  <div class="mt-4">
                    <!-- Button trigger modal -->
                    <button
                      type="button"
                      class="btn btn-primary"
                      v-b-modal.verificationModal
                      data-toggle="modal"
                      data-target="#verificationModal"
                    >Click here for Verification</button>
                  </div>
                </div>
                <div class="row justify-content-center mt-5 mb-2">
                  <div class="col-sm-6 col-8">
                    <div>
                      <img src="@/assets/images/verification-img.png" alt class="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal id="verificationModal" size="lg" centered title="Verify your Account" hide-footer>
      <form-wizard shape="tab" color="#556ee6">
        <tab-content icon="mdi mdi-account-circle" title="Personal Info" class="kyc-wizard">
          <form>
            <div class="row">
              <div class="col-lg-6">
                <div class="mb-3">
                  <label for="kycfirstname-input">First name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="kycfirstname-input"
                    placeholder="Enter First name"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label for="kyclastname-input">Last name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="kyclastname-input"
                    placeholder="Enter Last name"
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-6">
                <div class="mb-3">
                  <label for="kycphoneno-input">Phone</label>
                  <input
                    type="text"
                    class="form-control"
                    id="kycphoneno-input"
                    placeholder="Enter Phone number"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label for="kycbirthdate-input">Date of birth</label>
                  <input
                    type="text"
                    class="form-control"
                    id="kycbirthdate-input"
                    placeholder="Enter Date of birth"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="mb-3">
                    <label for="kycselectcity-input" class="form-label">City</label>
                    <select class="form-select" id="kycselectcity-input">
                        <option value="SF" selected>San Francisco</option>
                        <option value="LA">Los Angeles</option>
                        <option value="SD">San Diego</option>
                    </select>
                </div>
              </div>
            </div>
          </form>
        </tab-content>
        <tab-content icon="mdi mdi-email" title="Confirm Email" class="kyc-wizard">
          <form>
            <div class="row">
              <div class="col-lg-12">
                <div class="mb-3">
                  <label for="kycemail-input">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="kycemail-input"
                    placeholder="Enter Email Address"
                  />
                </div>

                <div class="mb-3">
                  <label for="kycconfirmcode-input">Confirm code</label>
                  <input
                    type="email"
                    class="form-control"
                    id="kycconfirmcode-input"
                    placeholder="Enter Confirm code"
                  />
                </div>

                <div class="mb-3">
                  Didn't recieve code ?
                  <button type="button" class="btn btn-link">Resend Code</button>
                </div>
              </div>
            </div>
          </form>
        </tab-content>
        <tab-content
          icon="mdi mdi-checkbox-marked-circle-outline"
          title="Document Verification"
          class="kyc-wizard"
        >
          <h5 class="font-size-14 mb-3">Upload document file for a verification</h5>
          <div class="kyc-doc-verification">
            <vue-dropzone
              id="dropzone"
              ref="myVueDropzone"
              :use-custom-slot="true"
              :options="dropzoneOptions"
            >
              <div class="dropzone-custom-content">
                <i class="display-4 text-muted bx bxs-cloud-upload"></i>
                <h4>Drop files here or click to upload.</h4>
              </div>
            </vue-dropzone>
            <!-- end row -->
          </div>
        </tab-content>
      </form-wizard>
    </b-modal>
  </Layout>
</template>