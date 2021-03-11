<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import { icons } from "./data-material";

/**
 * Material-design-icon component
 */
export default {
  page: {
    title: "Material Design",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      icons: icons,
      title: "Material Design",
      items: [
        {
          text: "Icons",
          href: "/"
        },
        {
          text: "Material Design",
          active: true
        }
      ],
      iconsCount: 0,
      newIconsCount: 0
    };
  },
  mounted() {
    this.icons.push({ name: "blank", hex: "f68c" });

    this.icons.forEach(icon => {
      var item = this.getIconItem(icon, this.isNew(icon));
      document.getElementById("icons").appendChild(item);
      if (this.isNew(icon)) {
        var newItem = this.getIconItem(icon, false);
        document.getElementById("newIcons").appendChild(newItem);
        this.newIconsCount++;
      }
      this.iconsCount++;
    });
  },
  methods: {
    isNew(icon) {
      return icon.version === "5.0.45";
    },

    getIconItem(icon) {
      var div = document.createElement("div"),
        i = document.createElement("i");
      div.className = "col-xl-3 col-lg-4 col-sm-6";
      i.className = "mdi mdi-" + icon.name;
      div.appendChild(i);
      var span = document.createElement("span");
      span.appendChild(document.createTextNode("mdi-" + icon.name));
      div.appendChild(span);
      return div;
    },

    isDeprecated(icon) {
      return typeof icon.deprecated == "undefined" ? false : icon.deprecated;
    }
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row icons-demo-content">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">New Icons</h4>
            <p class="card-title-desc mb-2">
              Use
              <code>&lt;i class="mdi mdi-speedometer-slow"&gt;&lt;/i&gt;</code>
              <span class="badge bg-success">v 5.8.55</span>.
            </p>

            <div class="row icon-demo-content" id="newIcons"></div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->

        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">All Icons</h4>
            <div class="row icon-demo-content" id="icons"></div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Size</h4>

            <div class="row icon-demo-content">
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-18px mdi-account"></i> mdi-18px
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-24px mdi-account"></i> mdi-24px
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-36px mdi-account"></i> mdi-36px
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-48px mdi-account"></i> mdi-48px
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Rotate</h4>

            <div class="row icon-demo-content">
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-rotate-45 mdi-account"></i> mdi-rotate-45
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-rotate-90 mdi-account"></i> mdi-rotate-90
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-rotate-135 mdi-account"></i> mdi-rotate-135
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-rotate-180 mdi-account"></i> mdi-rotate-180
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-rotate-225 mdi-account"></i> mdi-rotate-225
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-rotate-270 mdi-account"></i> mdi-rotate-270
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-rotate-315 mdi-account"></i> mdi-rotate-315
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Spin</h4>

            <div class="row icon-demo-content">
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-spin mdi-loading"></i> mdi-spin
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <i class="mdi mdi-spin mdi-star"></i> mdi-spin
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>