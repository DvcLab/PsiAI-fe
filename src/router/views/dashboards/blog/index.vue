<script>
import Layout from "../../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import Visitors from "./visitors";
import Posts from "./posts";
import Comments from "./comment";
import TopVisitor from "./top-visitor";
import Activity from "./activity";
import BlogPost from "./blog-post";

/**
 * Blog dashboard component
 */
export default {
  page: {
    title: "Blog",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: {
    Layout,
    PageHeader,
    Visitors,
    Posts,
    Comments,
    TopVisitor,
    Activity,
    BlogPost,
  },
  data() {
    return {
      title: "Blog",
      items: [
        {
          text: "Dashboard",
          href: "/",
        },
        {
          text: "Blog",
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
    <div>
      <div class="row">
        <div class="col-xl-8">
          <div class="row">
            <div class="col-lg-4">
              <div class="card mini-stats-wid">
                <div class="card-body">
                  <div class="d-flex flex-wrap">
                    <div class="me-3">
                      <p class="text-muted mb-2">Total Post</p>
                      <h5 class="mb-0">120</h5>
                    </div>

                    <div class="avatar-sm ms-auto">
                      <div
                        class="avatar-title bg-light rounded-circle text-primary font-size-20"
                      >
                        <i class="bx bxs-book-bookmark"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="card blog-stats-wid">
                <div class="card-body">
                  <div class="d-flex flex-wrap">
                    <div class="me-3">
                      <p class="text-muted mb-2">Pages</p>
                      <h5 class="mb-0">86</h5>
                    </div>

                    <div class="avatar-sm ms-auto">
                      <div
                        class="avatar-title bg-light rounded-circle text-primary font-size-20"
                      >
                        <i class="bx bxs-note"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card blog-stats-wid">
                <div class="card-body">
                  <div class="d-flex flex-wrap">
                    <div class="me-3">
                      <p class="text-muted mb-2">Comments</p>
                      <h5 class="mb-0">4,235</h5>
                    </div>

                    <div class="avatar-sm ms-auto">
                      <div
                        class="avatar-title bg-light rounded-circle text-primary font-size-20"
                      >
                        <i class="bx bxs-message-square-dots"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end row -->

          <div class="card">
            <Visitors />
          </div>
        </div>
        <!-- end col -->

        <div class="col-xl-4">
          <div class="card">
            <div class="card-body">
              <div class="media">
                <div class="me-3">
                  <img
                    src="@/assets/images/users/avatar-1.jpg"
                    alt=""
                    class="avatar-sm rounded-circle img-thumbnail"
                  />
                </div>
                <div class="media-body">
                  <div class="media">
                    <div class="media-body">
                      <div class="text-muted">
                        <h5 class="mb-1">Henry wells</h5>
                        <p class="mb-0">UI / UX Designer</p>
                      </div>
                    </div>

                    <b-dropdown
                      toggle-class="btn-sm"
                      variant="light"
                      right
                      class="ms-2"
                      menu-class="dropdown-menu-end"
                    >
                      <template #button-content>
                        <i class="bx bxs-cog align-middle me-1"></i> Setting
                      </template>
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else</a>
                    </b-dropdown>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-4">
                      <div>
                        <p class="text-muted text-truncate mb-2">Total Post</p>
                        <h5 class="mb-0">32</h5>
                      </div>
                    </div>
                    <div class="col-4">
                      <div>
                        <p class="text-muted text-truncate mb-2">Subscribes</p>
                        <h5 class="mb-0">10k</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <div class="d-flex flex-wrap">
                <h5 class="card-title mb-3 me-2">Subscribes</h5>
                <b-dropdown
                  toggle-class="text-muted font-size-16 p-0"
                  variant="white"
                  right
                  class="ms-auto"
                  menu-class="dropdown-menu-end"
                >
                  <template #button-content>
                    <i class="mdi mdi-dots-horizontal"></i>
                  </template>
                  <b-dropdown-item href="#">Action</b-dropdown-item>
                  <b-dropdown-item href="#">Another action</b-dropdown-item>
                  <b-dropdown-item href="#"
                    >Something else here</b-dropdown-item
                  >
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item href="#">Separated link</b-dropdown-item>
                </b-dropdown>
              </div>

              <div class="d-flex flex-wrap">
                <div>
                  <p class="text-muted mb-1">Total Subscribe</p>
                  <h4 class="mb-3">10,512</h4>
                  <p class="text-success mb-0">
                    <span
                      >0.6 % <i class="mdi mdi-arrow-top-right ms-1"></i
                    ></span>
                  </p>
                </div>
                <div class="ms-auto align-self-end">
                  <i class="bx bx-group display-4 text-light"></i>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-body p-4">
              <div class="text-center">
                <div class="avatar-md mx-auto mb-4">
                  <div
                    class="avatar-title bg-light rounded-circle text-primary h1"
                  >
                    <i class="mdi mdi-email-open"></i>
                  </div>
                </div>

                <div class="row justify-content-center">
                  <div class="col-xl-10">
                    <h4 class="text-primary">Subscribe !</h4>
                    <p class="text-muted font-size-14 mb-4">
                      Subscribe our newletter and get notification to stay
                      update.
                    </p>

                    <div class="input-group bg-light rounded">
                      <input
                        type="email"
                        class="form-control bg-transparent border-0"
                        placeholder="Enter Email address"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                      />
                      <div class="input-group-append">
                        <button
                          class="btn btn-primary rounded"
                          type="button"
                          id="button-addon2"
                        >
                          <i class="bx bxs-paper-plane"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->

      <div class="row">
        <div class="col-xl-4 col-lg-6">
          <Posts />
        </div>
        <!-- end col -->

        <div class="col-xl-4 col-lg-6">
          <Comments />
        </div>
        <!-- end col -->

        <div class="col-xl-4">
          <TopVisitor />
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->

      <div class="row">
        <div class="col-xl-4">
          <Activity />
        </div>
        <!-- end col -->
        <div class="col-xl-8">
          <BlogPost />
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </div>
  </Layout>
</template>