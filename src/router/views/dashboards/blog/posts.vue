<script>
export default {
  data() {
    return {
      postData: [
        {
          image: require("@/assets/images/small/img-2.jpg"),
          title: "Beautiful Day with Friends",
          date: "10 Nov, 2020",
        },
        {
          image: require("@/assets/images/small/img-6.jpg"),
          title: "Drawing a sketch",
          date: "02 Nov, 2020",
        },
        {
          image: require("@/assets/images/small/img-2.jpg"),
          title: "Project discussion with team",
          date: "24 Oct, 2020",
        },
        {
          image: require("@/assets/images/small/img-1.jpg"),
          title: "Riding bike on road",
          date: "20 Oct, 2020",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="card">
    <div class="card-header bg-transparent border-bottom">
      <div class="">
        <h5 class="card-title mt-2">Posts</h5>
        <b-tabs
          nav-class="nav-tabs-custom card-header-tabs ms-auto"
          nav-wrapper-class="nav-item"
          align="right"
        >
          <b-tab title="Recent" active>
            <div class="card-body pb-1">
              <div data-simplebar style="max-height: 285px">
                <ul class="list-group list-group-flush">
                  <li
                    class="list-group-item"
                    v-for="data of postData"
                    :key="data.title"
                  >
                    <div class="d-flex">
                      <div class="me-3">
                        <img
                          :src="data.image"
                          alt=""
                          class="avatar-md h-auto d-block rounded"
                        />
                      </div>

                      <div class="align-self-center overflow-hidden me-auto">
                        <div>
                          <h5 class="font-size-14 text-truncate">
                            <a href="#" class="text-dark">{{ data.title }}</a>
                          </h5>
                          <p class="text-muted mb-0">{{ data.date }}</p>
                        </div>
                      </div>

                      <b-dropdown
                        class="ms-2"
                        toggle-class="text-muted font-size-16 p-0"
                        toggle-tag="a"
                        variant="white"
                        menu-class="dropdown-menu-end"
                        right
                      >
                        <template #button-content>
                          <i class="mdi mdi-dots-horizontal"></i>
                        </template>
                        <b-dropdown-item>Action</b-dropdown-item>
                        <b-dropdown-item>Another Action</b-dropdown-item>
                        <b-dropdown-item>Third Action</b-dropdown-item>
                        <b-dropdown-item>Something else here</b-dropdown-item>
                      </b-dropdown>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </b-tab>
          <b-tab title="Popular">
            <div class="card-body pb-1">
              <div data-simplebar style="max-height: 285px">
                <ul class="list-group list-group-flush">
                  <li
                    class="list-group-item"
                    v-for="data of postData"
                    :key="data.title"
                  >
                    <div class="d-flex">
                      <div class="me-3">
                        <img
                          :src="data.image"
                          alt=""
                          class="avatar-md h-auto d-block rounded"
                        />
                      </div>

                      <div class="align-self-center overflow-hidden me-auto">
                        <div>
                          <h5 class="font-size-14 text-truncate">
                            <a href="#" class="text-dark">{{ data.title }}</a>
                          </h5>
                          <p class="text-muted mb-0">{{ data.date }}</p>
                        </div>
                      </div>

                      <b-dropdown
                        class="ms-2"
                        toggle-class="text-muted font-size-14 p-0"
                        variant="white"
                        menu-class="dropdown-menu-end"
                        right
                      >
                        <template #button-content>
                          <i class="mdi mdi-dots-horizontal"></i>
                        </template>
                        <b-dropdown-item>Action</b-dropdown-item>
                        <b-dropdown-item>Another Action</b-dropdown-item>
                        <b-dropdown-item>Third Action</b-dropdown-item>
                        <b-dropdown-item>Something else here</b-dropdown-item>
                      </b-dropdown>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>