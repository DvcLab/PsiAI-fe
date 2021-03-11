<script>
import simplebar from "simplebar-vue";

import Layout from "../../layouts/main";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

import { chatData, chatMessagesData } from "./data";

import { required } from "vuelidate/lib/validators";

/**
 * Chat Component
 */
export default {
  page: {
    title: "Chat",
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
    simplebar,
  },
  data() {
    return {
      chatData: chatData,
      chatMessagesData: chatMessagesData,
      title: "Chat",
      items: [
        {
          text: "Skote",
          href: "/",
        },
        {
          text: "Chat",
          active: true,
        },
      ],
      submitted: false,
      form: {
        message: "",
      },
      username: "Steven Franklin",
    };
  },
  validations: {
    form: {
      message: {
        required,
      },
    },
  },
  methods: {
    /**
     * Get the name of user
     */
    chatUsername(name) {
      this.username = name;
      this.usermessage = "Hello";
      this.chatMessagesData = [];
      const currentDate = new Date();

      this.chatMessagesData.push({
        name: this.username,
        message: this.usermessage,
        time: currentDate.getHours() + ":" + currentDate.getMinutes(),
      });
    },

    /**
     * Char form Submit
     */
    // eslint-disable-next-line no-unused-vars
    formSubmit(e) {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      } else {
        const message = this.form.message;
        const currentDate = new Date();
        this.chatMessagesData.push({
          align: "right",
          name: "Henry Wells",
          message,
          time: currentDate.getHours() + ":" + currentDate.getMinutes(),
        });
        this.handleScroll();
      }
      this.submitted = false;
      this.form = {};
    },

    handleScroll() {
      if (this.$refs.current.$el) {
        setTimeout(() => {
          this.$refs.current.SimpleBar.getScrollElement().scrollTop =
            this.$refs.current.SimpleBar.getScrollElement().scrollHeight + 1500;
        }, 500);
      }
    },
  },
  mounted() {
    var container1 = document.querySelector(
      "#chat-list .simplebar-content-wrapper"
    );
    container1.scrollTo({ top: 500, behavior: "smooth" });

    var container2 = document.querySelector(
      "#containerElement .simplebar-content-wrapper"
    );
    container2.scrollTo({ top: 500, behavior: "smooth" });
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="d-lg-flex">
      <div class="chat-leftsidebar me-lg-4">
        <div class>
          <div class="py-4 border-bottom">
            <div class="media">
              <div class="align-self-center me-3">
                <img
                  src="@/assets/images/users/avatar-1.jpg"
                  class="avatar-xs rounded-circle"
                  alt
                />
              </div>
              <div class="media-body">
                <h5 class="font-size-15 mt-0 mb-1">Henry Wells</h5>
                <p class="text-muted mb-0">
                  <i class="mdi mdi-circle text-success align-middle me-1"></i>
                  Active
                </p>
              </div>

              <b-dropdown
                menu-class="dropdown-menu-end"
                class="chat-noti-dropdown active"
                right
                variant="white"
              >
                <template v-slot:button-content>
                  <i class="bx bx-bell bx-tada"></i>
                </template>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-item>Something else here</b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
        </div>

        <div class="search-box chat-search-box py-4">
          <div class="position-relative">
            <input type="text" class="form-control" placeholder="Search..." />
            <i class="bx bx-search-alt search-icon"></i>
          </div>
        </div>

        <div class="chat-leftsidebar-nav">
          <b-tabs pills fill content-class="py-4">
            <b-tab title="Tab 1" active>
              <template v-slot:title>
                <i class="bx bx-chat font-size-20 d-sm-none"></i>
                <span class="d-none d-sm-block">Chat</span>
              </template>
              <b-card-text>
                <div>
                  <h5 class="font-size-14 mb-3">Recent</h5>
                  <simplebar style="max-height: 410px" id="chat-list">
                    <ul class="list-unstyled chat-list">
                      <li
                        class
                        v-for="data of chatData"
                        :key="data.id"
                        @click="chatUsername(data.name)"
                        :class="{ active: username == data.name }"
                      >
                        <a href="javascript: void(0);">
                          <div class="media">
                            <div class="align-self-center me-3">
                              <i
                                :class="`mdi mdi-circle text-${data.color} font-size-10`"
                              ></i>
                            </div>
                            <div
                              class="align-self-center me-3"
                              v-if="data.image"
                            >
                              <img
                                :src="`${data.image}`"
                                class="rounded-circle avatar-xs"
                                alt
                              />
                            </div>
                            <div
                              class="avatar-xs align-self-center me-3"
                              v-if="!data.image"
                            >
                              <span
                                class="avatar-title rounded-circle bg-soft bg-primary text-primary"
                                >{{ data.name.charAt(0) }}</span
                              >
                            </div>
                            <div class="media-body overflow-hidden">
                              <h5 class="text-truncate font-size-14 mb-1">
                                {{ data.name }}
                              </h5>
                              <p class="text-truncate mb-0">
                                {{ data.message }}
                              </p>
                            </div>
                            <div class="font-size-11">{{ data.time }}</div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </simplebar>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template v-slot:title>
                <i class="bx bx-group font-size-20 d-sm-none"></i>
                <span class="d-none d-sm-block">Groups</span>
              </template>
              <b-card-text>
                <h5 class="font-size-14 mb-3">Groups</h5>
                <ul class="list-unstyled chat-list">
                  <li>
                    <a href="#">
                      <div class="media align-items-center">
                        <div class="avatar-xs me-3">
                          <span
                            class="avatar-title rounded-circle bg-soft bg-primary text-primary"
                            >G</span
                          >
                        </div>

                        <div class="media-body">
                          <h5 class="font-size-14 mb-0">General</h5>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <div class="media align-items-center">
                        <div class="avatar-xs me-3">
                          <span
                            class="avatar-title rounded-circle bg-soft bg-primary text-primary"
                            >R</span
                          >
                        </div>

                        <div class="media-body">
                          <h5 class="font-size-14 mb-0">Reporting</h5>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <div class="media align-items-center">
                        <div class="avatar-xs me-3">
                          <span
                            class="avatar-title rounded-circle bg-soft bg-primary text-primary"
                            >M</span
                          >
                        </div>

                        <div class="media-body">
                          <h5 class="font-size-14 mb-0">Meeting</h5>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <div class="media align-items-center">
                        <div class="avatar-xs me-3">
                          <span
                            class="avatar-title rounded-circle bg-soft bg-primary text-primary"
                            >A</span
                          >
                        </div>

                        <div class="media-body">
                          <h5 class="font-size-14 mb-0">Project A</h5>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <div class="media align-items-center">
                        <div class="avatar-xs me-3">
                          <span
                            class="avatar-title rounded-circle bg-soft bg-primary text-primary"
                            >B</span
                          >
                        </div>

                        <div class="media-body">
                          <h5 class="font-size-14 mb-0">Project B</h5>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </b-card-text>
            </b-tab>
            <b-tab>
              <template v-slot:title>
                <i class="bx bx-book-content font-size-20 d-sm-none"></i>
                <span class="d-none d-sm-block">Contacts</span>
              </template>
              <b-card-text>
                <h5 class="font-size-14 mb-3">Contacts</h5>
                <simplebar style="height: 410px">
                  <div>
                    <div class="avatar-xs mb-3">
                      <span
                        class="avatar-title rounded-circle bg-soft bg-primary text-primary"
                        >A</span
                      >
                    </div>

                    <ul class="list-unstyled chat-list">
                      <li>
                        <a href="#">
                          <h5 class="font-size-14 mb-0">Adam Miller</h5>
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          <h5 class="font-size-14 mb-0">Alfonso Fisher</h5>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="mt-4">
                    <div class="avatar-xs mb-3">
                      <span
                        class="avatar-title rounded-circle bg-soft bg-primary text-primary"
                        >B</span
                      >
                    </div>

                    <ul class="list-unstyled chat-list">
                      <li>
                        <a href="#">
                          <h5 class="font-size-14 mb-0">Bonnie Harney</h5>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="mt-4">
                    <div class="avatar-xs mb-3">
                      <span
                        class="avatar-title rounded-circle bg-soft bg-primary text-primary"
                        >C</span
                      >
                    </div>

                    <ul class="list-unstyled chat-list">
                      <li>
                        <a href="#">
                          <h5 class="font-size-14 mb-0">Charles Brown</h5>
                        </a>
                        <a href="#">
                          <h5 class="font-size-14 mb-0">Carmella Jones</h5>
                        </a>
                        <a href="#">
                          <h5 class="font-size-14 mb-0">Carrie Williams</h5>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="mt-4">
                    <div class="avatar-xs mb-3">
                      <span
                        class="avatar-title rounded-circle bg-soft bg-primary text-primary"
                        >D</span
                      >
                    </div>

                    <ul class="list-unstyled chat-list">
                      <li>
                        <a href="#">
                          <h5 class="font-size-14 mb-0">Dolores Minter</h5>
                        </a>
                      </li>
                    </ul>
                  </div>
                </simplebar>
              </b-card-text>
            </b-tab>
          </b-tabs>
        </div>
      </div>
      <div class="w-100 user-chat">
        <div class="card">
          <div class="p-4 border-bottom">
            <div class="row">
              <div class="col-md-4 col-9">
                <h5 class="font-size-15 mb-1">{{ username }}</h5>
                <p class="text-muted mb-0">
                  <i class="mdi mdi-circle text-success align-middle me-1"></i>
                  Active now
                </p>
              </div>
              <div class="col-md-8 col-3">
                <ul class="list-inline user-chat-nav text-end mb-0">
                  <li class="list-inline-item d-none d-sm-inline-block">
                    <b-dropdown
                      menu-class="dropdown-menu-md dropdown-menu-end"
                      variant="white"
                      right
                      toggle-class="nav-btn"
                    >
                      <template v-slot:button-content>
                        <i class="bx bx-search-alt-2"></i>
                      </template>
                      <form class="p-3">
                        <div class="form-group m-0">
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Search ..."
                              aria-label="Recipient's username"
                            />
                            <div class="input-group-append">
                              <button class="btn btn-primary" type="submit">
                                <i class="mdi mdi-magnify"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </b-dropdown>
                  </li>
                  <li class="list-inline-item d-none d-sm-inline-block">
                    <b-dropdown
                      toggle-class="nav-btn"
                      menu-class="dropdown-menu-end"
                      right
                      variant="white"
                    >
                      <template v-slot:button-content>
                        <i class="bx bx-cog"></i>
                      </template>
                      <b-dropdown-item>View Profile</b-dropdown-item>
                      <b-dropdown-item>Clear chat</b-dropdown-item>
                      <b-dropdown-item>Muted</b-dropdown-item>
                      <b-dropdown-item>Delete</b-dropdown-item>
                    </b-dropdown>
                  </li>

                  <li class="list-inline-item">
                    <b-dropdown
                      toggle-class="nav-btn"
                      menu-class="dropdown-menu-end"
                      right
                      variant="white"
                    >
                      <template v-slot:button-content>
                        <i class="bx bx-dots-horizontal-rounded"></i>
                      </template>
                      <b-dropdown-item>Action</b-dropdown-item>
                      <b-dropdown-item>Another action</b-dropdown-item>
                      <b-dropdown-item>Something else</b-dropdown-item>
                    </b-dropdown>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="chat-users">
            <div class="chat-conversation p-3">
              <simplebar
                style="max-height: 470px"
                id="containerElement"
                ref="current"
              >
                <ul class="list-unstyled">
                  <li>
                    <div class="chat-day-title">
                      <span class="title">Today</span>
                    </div>
                  </li>
                  <li
                    v-for="data of chatMessagesData"
                    :key="data.message"
                    :class="{ right: `${data.align}` === 'right' }"
                  >
                    <div class="conversation-list">
                      <b-dropdown
                        variant="white"
                        menu-class="dropdown-menu-end"
                      >
                        <template v-slot:button-content>
                          <i class="bx bx-dots-vertical-rounded"></i>
                        </template>
                        <b-dropdown-item>Copy</b-dropdown-item>
                        <b-dropdown-item>Save</b-dropdown-item>
                        <b-dropdown-item>Forward</b-dropdown-item>
                        <b-dropdown-item>Delete</b-dropdown-item>
                      </b-dropdown>
                      <div class="ctext-wrap">
                        <div class="conversation-name">{{ data.name }}</div>
                        <p>{{ data.message }}</p>
                        <p class="chat-time mb-0">
                          <i class="bx bx-time-five align-middle me-1"></i>
                          {{ data.time }}
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </simplebar>
            </div>
            <div class="p-3 chat-input-section">
              <form @submit.prevent="formSubmit" class="row">
                <div class="col">
                  <div class="position-relative">
                    <input
                      type="text"
                      v-model="form.message"
                      class="form-control chat-input"
                      placeholder="Enter Message..."
                      :class="{
                        'is-invalid': submitted && $v.form.message.$error,
                      }"
                    />
                    <div
                      v-if="submitted && $v.form.message.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.form.message.required"
                        >This value is required.</span
                      >
                    </div>
                    <div class="chat-input-links">
                      <ul class="list-inline mb-0">
                        <li class="list-inline-item">
                          <a
                            href="javascript: void(0);"
                            v-b-tooltip.hover
                            placement="top"
                            title="Emoji"
                          >
                            <i class="mdi mdi-emoticon-happy-outline"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a
                            href="javascript: void(0);"
                            v-b-tooltip.hover
                            placement="top"
                            title="Images"
                          >
                            <i class="mdi mdi-file-image-outline"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a
                            href="javascript: void(0);"
                            v-b-tooltip.hover
                            placement="top"
                            title="Add Files"
                          >
                            <i class="mdi mdi-file-document-outline"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-auto">
                  <button
                    type="submit"
                    class="btn btn-primary btn-rounded chat-send w-md"
                  >
                    <span class="d-none d-sm-inline-block me-2">Send</span>
                    <i class="mdi mdi-send"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- end row -->
  </Layout>
</template>
