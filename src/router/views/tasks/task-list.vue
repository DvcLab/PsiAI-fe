<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import { tasksChart, tasks } from "./data-tasklist";
import { required } from "vuelidate/lib/validators";

/**
 * Task-list component
 */
export default {
  page: {
    title: "Task List",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      tasksChart: tasksChart,
      inprogressTasks: "",
      upcomingTasks: "",
      completedTasks: "",
      title: "Task List",
      items: [
        {
          text: "Tasks",
          href: "/",
        },
        {
          text: "Task List",
          active: true,
        },
      ],
      taskList: {
        name: "",
      },
      myFiles: [],
      selected: "",
      selected2: "",
      submitted: false,
      showModal: false,
    };
  },
  validations: {
    taskList: {
      name: { required },
    },
  },
  mounted() {
    this.isMountData();
    // all tasks
  },
  methods: {
    onFileChange(event) {
      for (var i = 0; i < event.target.files.length; i++) {
        this.myFiles.push(
          require("@/assets/images/users/" + event.target.files[i].name)
        );
      }
    },

    handleSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
        this.tasks.push({
          index: this.tasks.length + 1,
          taskType: this.selected,
          name: this.taskList.name,
          images: this.myFiles,
          status: this.selected2,
          checked: false,
        });
        this.isMountData();
        this.showModal = false;
        this.taskList = {};
        this.selected = "";
        this.selected2 = "";
        this.myFiles = [];
      }
      this.submitted = false;
    },

    isMountData() {
      this.tasks = tasks;
      this.inprogressTasks = tasks.filter((t) => t.taskType === "inprogress");
      this.upcomingTasks = tasks.filter((t) => t.taskType === "upcoming");
      this.completedTasks = tasks.filter((t) => t.taskType === "completed");
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-lg-8">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-start">
              <h4 class="card-title mb-4">Upcoming</h4>
              <b-button
                class="btn btn-success ms-auto"
                @click="showModal = true"
                >Add Task</b-button
              >
            </div>
            <b-modal title="Add Task" v-model="showModal" hide-footer>
              <form @submit.prevent="handleSubmit">
                <div class="row">
                  <div class="col-12">
                    <div class="mb-3">
                      <label for="name">Event Name</label>
                      <input
                        id="name"
                        v-model="taskList.name"
                        type="text"
                        class="form-control"
                        placeholder="Insert name"
                        :class="{
                          'is-invalid': submitted && $v.taskList.name.$error,
                        }"
                      />
                      <div
                        v-if="submitted && !$v.taskList.name.required"
                        class="invalid-feedback"
                      >
                        This value is required.
                      </div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="file">File</label>
                    <input
                      id="file"
                      type="file"
                      multiple
                      class="form-control"
                      @change="onFileChange($event)"
                    />
                  </div>
                  <div class="col-12">
                    <div class="mb-3">
                      Task Type
                      <b-form-select
                        v-model="selected"
                        class="mb-3 form-select"
                      >
                        <b-form-select-option value="upcoming"
                          >Upcoming</b-form-select-option
                        >
                        <b-form-select-option value="inprogress"
                          >In-progress</b-form-select-option
                        >
                        <b-form-select-option value="completed"
                          >Completed</b-form-select-option
                        >
                      </b-form-select>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="mb-3">
                      Task Status
                      <b-form-select
                        v-model="selected2"
                        class="mb-3 form-select"
                      >
                        <b-form-select-option value="Approved"
                          >Approved</b-form-select-option
                        >
                        <b-form-select-option value="Waiting"
                          >Waiting</b-form-select-option
                        >
                        <b-form-select-option value="Pending"
                          >Pending</b-form-select-option
                        >
                        <b-form-select-option value="Complete"
                          >Complete</b-form-select-option
                        >
                      </b-form-select>
                    </div>
                  </div>
                </div>
                <div class="text-end mt-3">
                  <b-button variant="light">Close</b-button>
                  <b-button type="submit" variant="success" class="ms-1"
                    >Create event</b-button
                  >
                </div>
              </form>
            </b-modal>
            <div class="table-responsive mb-0">
              <table class="table table-nowrap align-middle mb-0">
                <tbody>
                  <tr v-for="task of upcomingTasks" :key="task.index">
                    <td style="width: 40px">
                      <b-form-checkbox
                        class="form-check"
                        v-model="task.checked"
                      >
                      </b-form-checkbox>
                    </td>
                    <td>
                      <h5 class="text-truncate font-size-14 m-0">
                        <a href="javascript: void(0);" class="text-dark">{{
                          task.name
                        }}</a>
                      </h5>
                    </td>
                    <td>
                      <div class="avatar-group">
                        <div
                          class="avatar-group-item"
                          v-for="(data, index) of task.images"
                          :key="index"
                        >
                          <a href="javascript: void(0);" class="d-inline-block">
                            <img
                              :src="`${data}`"
                              alt=""
                              class="rounded-circle avatar-xs"
                            />
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="text-center">
                        <span
                          class="badge rounded-pill font-size-11"
                          :class="{
                            'badge-soft-success': task.status === 'Complete',
                            'badge-soft-warning': task.status === 'Pending',
                            'badge-soft-primary': task.status === 'Approved',
                            'badge-soft-secondary': task.status === 'Waiting',
                          }"
                          >{{ task.status }}</span
                        >
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-start">
              <h4 class="card-title mb-4">In Progress</h4>
              <b-button
                class="btn btn-success ms-auto"
                @click="showModal = true"
                >Add Task</b-button
              >
            </div>
            <div class="table-responsive mb-0">
              <table class="table table-nowrap table-centered">
                <tbody>
                  <tr v-for="task of inprogressTasks" :key="task.index">
                    <td style="width: 40px">
                        <b-form-checkbox
                        class="form-check" v-model="task.checked">
                      </b-form-checkbox>
                    </td>
                    <td>
                      <h5 class="text-truncate font-size-14 m-0">
                        <a href="javascript: void(0);" class="text-dark">{{
                          task.name
                        }}</a>
                      </h5>
                    </td>
                    <td>
                      <div class="avatar-group">
                        <div
                          class="avatar-group-item"
                          v-for="(data, index) of task.images"
                          :key="index"
                        >
                          <a href="javascript: void(0);" class="d-inline-block">
                            <img
                              :src="`${data}`"
                              alt=""
                              class="rounded-circle avatar-xs"
                            />
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="text-center">
                        <span
                          class="badge rounded-pill font-size-11"
                          :class="{
                            'badge-soft-success': task.status === 'Complete',
                            'badge-soft-warning': task.status === 'Pending',
                            'badge-soft-primary': task.status === 'Approved',
                            'badge-soft-secondary': task.status === 'Waiting',
                          }"
                          >{{ task.status }}</span
                        >
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-start">
              <h4 class="card-title mb-4">Completed</h4>
              <b-button
                class="btn btn-success ms-auto"
                @click="showModal = true"
                >Add Task</b-button
              >
            </div>
            <div class="table-responsive mb-0">
              <table class="table table-nowrap table-centered">
                <tbody>
                  <tr v-for="task of completedTasks" :key="task.index">
                    <td style="width: 40px">
                       <b-form-checkbox
                        class="form-check" v-model="task.checked">
                      </b-form-checkbox>
                    </td>
                    <td>
                      <h5 class="text-truncate font-size-14 m-0">
                        <a href="javascript: void(0);" class="text-dark">{{
                          task.name
                        }}</a>
                      </h5>
                    </td>
                    <td>
                      <div class="avatar-group">
                        <div
                          class="avatar-group-item"
                          v-for="(data, index) of task.images"
                          :key="index"
                        >
                          <a href="javascript: void(0);" class="d-inline-block">
                            <img
                              :src="`${data}`"
                              alt=""
                              class="rounded-circle avatar-xs"
                            />
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="text-center">
                        <span
                          class="badge rounded-pill font-size-11"
                          :class="{
                            'badge-soft-success': task.status === 'Complete',
                            'badge-soft-warning': task.status === 'Pending',
                            'badge-soft-primary': task.status === 'Approved',
                            'badge-soft-secondary': task.status === 'Waiting',
                          }"
                          >{{ task.status }}</span
                        >
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->

      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-3">Tasks</h4>

            <apexchart
              class="apex-charts"
              type="line"
              height="280"
              :series="tasksChart.series"
              :options="tasksChart.chartOptions"
            ></apexchart>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Recent Tasks</h4>

            <div class="table-responsive">
              <table class="table table-nowrap align-middle mb-0">
                <tbody>
                  <tr>
                    <td>
                      <h5 class="text-truncate font-size-14 m-0">
                        <a href="#" class="text-dark">Brand logo design</a>
                      </h5>
                    </td>
                    <td>
                      <div class="avatar-group">
                        <div class="avatar-group-item">
                          <a href="javascript: void(0);" class="d-inline-block">
                            <img
                              src="@/assets/images/users/avatar-4.jpg"
                              alt=""
                              class="rounded-circle avatar-xs"
                            />
                          </a>
                        </div>
                        <div class="avatar-group-item">
                          <a href="javascript: void(0);" class="d-inline-block">
                            <img
                              src="@/assets/images/users/avatar-5.jpg"
                              alt=""
                              class="rounded-circle avatar-xs"
                            />
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5 class="text-truncate font-size-14 m-0">
                        <a href="#" class="text-dark"
                          >Create a Blog Template UI</a
                        >
                      </h5>
                    </td>
                    <td>
                      <div class="avatar-group">
                        <div class="avatar-group-item">
                          <a href="javascript: void(0);" class="d-inline-block">
                            <img
                              src="@/assets/images/users/avatar-1.jpg"
                              alt=""
                              class="rounded-circle avatar-xs"
                            />
                          </a>
                        </div>
                        <div class="avatar-group-item">
                          <a href="javascript: void(0);" class="d-inline-block">
                            <img
                              src="@/assets/images/users/avatar-2.jpg"
                              alt=""
                              class="rounded-circle avatar-xs"
                            />
                          </a>
                        </div>
                        <div class="avatar-group-item">
                          <a href="javascript: void(0);" class="d-inline-block">
                            <img
                              src="@/assets/images/users/avatar-3.jpg"
                              alt=""
                              class="rounded-circle avatar-xs"
                            />
                          </a>
                        </div>
                        <div class="avatar-group-item">
                          <a href="javascript: void(0);" class="d-inline-block">
                            <div class="avatar-xs">
                              <span
                                class="avatar-title rounded-circle bg-info text-white font-size-16"
                              >
                                D
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5 class="text-truncate font-size-14 m-0">
                        <a href="#" class="text-dark"
                          >Redesign - Landing page</a
                        >
                      </h5>
                    </td>
                    <td>
                      <div class="avatar-group">
                        <div class="avatar-group-item">
                          <a href="javascript: void(0);" class="d-inline-block">
                            <img
                              src="@/assets/images/users/avatar-8.jpg"
                              alt=""
                              class="rounded-circle avatar-xs"
                            />
                          </a>
                        </div>
                        <div class="avatar-group-item">
                          <a href="javascript: void(0);" class="d-inline-block">
                            <img
                              src="@/assets/images/users/avatar-7.jpg"
                              alt=""
                              class="rounded-circle avatar-xs"
                            />
                          </a>
                        </div>
                        <div class="avatar-group-item">
                          <a href="javascript: void(0);" class="d-inline-block">
                            <div class="avatar-xs">
                              <span
                                class="avatar-title rounded-circle bg-danger text-white font-size-16"
                              >
                                P
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- end table responsive -->
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>
