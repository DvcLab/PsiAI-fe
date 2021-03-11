<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="card">
    <div class="card-body">
      <div class="d-flex flex-wrap">
        <div class="me-2">
          <h5 class="card-title mb-3">Top Visitors</h5>
        </div>
        <b-dropdown
          text="Button text via Prop"
          class="ms-auto"
          toggle-tag="a"
          menu-class="dropdown-menu-end"
          toggle-class="font-size-16 p-0"
          variant="white"
          right
        >
          <template #button-content>
            <i class="mdi mdi-dots-horizontal"></i>
          </template>
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
          <b-dropdown-item href="#">Something else here</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item href="#">Separated link</b-dropdown-item>
        </b-dropdown>
      </div>
      <div class="row text-center">
        <div class="col-6">
          <div class="mt-3">
            <p class="text-muted mb-1">Today</p>
            <h5>1024</h5>
          </div>
        </div>

        <div class="col-6">
          <div class="mt-3">
            <p class="text-muted mb-1">This Month</p>
            <h5>
              12356
              <span class="text-success font-size-13"
                >0.2 % <i class="mdi mdi-arrow-up ms-1"></i
              ></span>
            </h5>
          </div>
        </div>
      </div>

      <hr />

      <div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="py-2">
              <h5 class="font-size-14">
                California <span class="float-end">78%</span>
              </h5>
              <div class="progress animated-progess progress-sm">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 78%"
                  aria-valuenow="78"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="py-2">
              <h5 class="font-size-14">
                Nevada <span class="float-end">69%</span>
              </h5>
              <div class="progress animated-progess progress-sm">
                <div
                  class="progress-bar bg-warning"
                  role="progressbar"
                  style="width: 69%"
                  aria-valuenow="69"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="py-2">
              <h5 class="font-size-14">
                Texas <span class="float-end">61%</span>
              </h5>
              <div class="progress animated-progess progress-sm">
                <div
                  class="progress-bar bg-success"
                  role="progressbar"
                  style="width: 61%"
                  aria-valuenow="61"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>