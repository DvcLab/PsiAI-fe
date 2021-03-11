<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import { projectData } from "./data-projects";

/**
 * Projects-grid component
 */
export default {
  page: {
    title: "Projects Grid",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: {
    Layout,
    PageHeader,
  },
  data() {
    return {
      projectData: projectData,
      title: "Projects Grid",
      items: [
        {
          text: "Projects",
          href: "/",
        },
        {
          text: "Projects Grid",
          active: true,
        },
      ],
    };
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div v-for="grid in projectData" :key="grid.id" class="col-xl-4 col-sm-6">
        <div class="card">
          <div class="card-body">
            <div class="media">
              <div class="avatar-md me-4">
                <span
                  class="avatar-title rounded-circle bg-light text-danger font-size-16"
                >
                  <img :src="`${grid.image}`" alt height="30" />
                </span>
              </div>

              <div class="media-body overflow-hidden">
                <h5 class="text-truncate font-size-15">
                  <a href="javascript: void(0);" class="text-dark">{{
                    grid.text
                  }}</a>
                </h5>
                <p class="text-muted mb-4">{{ grid.subtext }}</p>
                <div class="avatar-group">
                  <div class="avatar-group-item">
                    <a
                      href="javascript: void(0);"
                      class="d-inline-block"
                    >
                      <img
                        :src="`${grid.users[0]}`"
                        class="rounded-circle avatar-xs"
                        alt
                      />
                    </a>
                  </div>
                  <div class="avatar-group-item" v-if="grid.users[1]">
                    <a
                      href="javascript: void(0);"
                      class="d-inline-block"
                    >
                      <img
                        :src="`${grid.users[1]}`"
                        class="rounded-circle avatar-xs"
                        alt
                      />
                    </a>
                  </div>
                  <div class="avatar-group-item" v-if="grid.users[2]">
                    <a
                      href="javascript: void(0);"
                      class="d-inline-block"
                    >
                      <img
                        :src="`${grid.users[2]}`"
                        class="rounded-circle avatar-xs"
                        alt
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 border-top">
            <ul class="list-inline mb-0">
              <li class="list-inline-item me-3">
                <span
                  class="badge"
                  :class="{
                    'bg-success': `${grid.status}` === 'Completed',
                    'bg-warning': `${grid.status}` === 'Pending',
                    'bg-danger': `${grid.status}` === 'Delay',
                  }"
                  >{{ grid.status }}</span
                >
              </li>
              <li
                v-b-tooltip.hover.top
                class="list-inline-item me-3"
                title="Due Date"
              >
                <i class="bx bx-calendar me-1"></i>
                {{ grid.date }}
              </li>
              <li
                v-b-tooltip.hover.top
                class="list-inline-item me-3"
                title="Comments"
              >
                <i class="bx bx-comment-dots me-1"></i>
                {{ grid.comment }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <ul
          class="pagination pagination-rounded justify-content-center mt-2 mb-5"
        >
          <li class="page-item disabled">
            <a href="#" class="page-link">
              <i class="mdi mdi-chevron-left"></i>
            </a>
          </li>
          <li class="page-item">
            <a href="#" class="page-link">1</a>
          </li>
          <li class="page-item active">
            <a href="#" class="page-link">2</a>
          </li>
          <li class="page-item">
            <a href="#" class="page-link">3</a>
          </li>
          <li class="page-item">
            <a href="#" class="page-link">4</a>
          </li>
          <li class="page-item">
            <a href="#" class="page-link">5</a>
          </li>
          <li class="page-item">
            <a href="#" class="page-link">
              <i class="mdi mdi-chevron-right"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- end ro w -->
  </Layout>
</template>
