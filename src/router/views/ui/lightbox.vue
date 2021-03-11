<script>
import VueEasyLightbox from "vue-easy-lightbox";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Lightbox component
 */
export default {
  page: {
    title: "Lightbox",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { VueEasyLightbox, Layout, PageHeader },
  data() {
    return {
      title: "Lightbox",
      items: [
        {
          text: "UI Elements",
          href: "/"
        },
        {
          text: "Lightbox",
          active: true
        }
      ],
      visible: false,
      singleImage: false,
      visibleCaption: false,
      index: 0, // default: 0
      imgs: [
        require("@/assets/images/small/img-1.jpg"),
        require("@/assets/images/small/img-2.jpg"),
        require("@/assets/images/small/img-3.jpg"),
        require("@/assets/images/small/img-4.jpg"),
        require("@/assets/images/small/img-5.jpg"),
        require("@/assets/images/small/img-6.jpg")
      ],
      captionimgs: [
        { src: require("@/assets/images/small/img-3.jpg"), title: "Caption 1" },
        { src: require("@/assets/images/small/img-7.jpg"), title: "Caption 2" }
      ]
    };
  },
  methods: {
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
    showCaptiomImg(index) {
      this.index = index;
      this.visibleCaption = true;
    },
    handleCaptionHide() {
      this.visibleCaption = false;
    }
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Single image lightbox</h4>
            <p class="card-title-desc">Example of image popup.</p>
            <div class="popup-gallery">
              <img src="@/assets/images/small/img-1.jpg" width="120" @click="singleImage = true" />
              <vue-easy-lightbox
                :visible="singleImage"
                :imgs="require('@/assets/images/small/img-1.jpg')"
                @hide="singleImage = false"
              ></vue-easy-lightbox>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Lightbox gallery</h4>
            <p
              class="card-title-desc"
            >In this example lazy-loading of images is enabled for the next image based on move direction.</p>
            <div class="popup-gallery d-flex flex-wrap">
              <div
                v-for="(src, index) in imgs"
                :key="index"
                class="float-left"
                @click="() => showImg(index)"
              >
                <img :src="src" width="120" />
              </div>
              <vue-easy-lightbox :visible="visible" :imgs="imgs" :index="index" @hide="handleHide"></vue-easy-lightbox>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Caption</h4>
            <p class="card-title-desc">Show caption with popup.</p>
            <div class="popup-gallery d-flex flex-wrap">
              <div
                v-for="(src, index) in captionimgs"
                :key="index"
                class="float-left"
                @click="() => showCaptiomImg(index)"
              >
                <img :src="src.src" width="275" />
              </div>
              <vue-easy-lightbox
                :visible="visibleCaption"
                :imgs="captionimgs"
                :index="index"
                @hide="handleCaptionHide"
              ></vue-easy-lightbox>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Popup with form</h4>
            <div>
              <a
                class="popup-form btn btn-primary"
                href="javascript: void(0);"
                v-b-modal.modal-1
              >Popup form</a>

              <b-modal id="modal-1" title="Form" hide-footer size="lg" centered>
                <div class="card-body">
                  <form>
                    <div class="row">
                      <div class="col-lg-4">
                        <div class="mb-3">
                          <label for="name">Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="name"
                            placeholder="Enter Name"
                          />
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="mb-3">
                          <label for="email">Email</label>
                          <input
                            type="email"
                            class="form-control"
                            id="email"
                            placeholder="Enter Email"
                          />
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="mb-3">
                          <label for="password">Password</label>
                          <input
                            type="password"
                            class="form-control"
                            id="password"
                            placeholder="Enter Password"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="mb-3">
                          <label for="subject">Subject</label>
                          <textarea class="form-control" id="subject" rows="3"></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="text-end">
                          <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </b-modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>