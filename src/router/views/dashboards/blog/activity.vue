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
      <div class="d-flex">
        <div class="me-2">
          <h5 class="card-title mb-4">Activity</h5>
        </div>
        <b-dropdown
          text="Button text via Prop"
          toggle-tag="a"
          toggle-class="text-muted font-size-16 p-0"
          variant="white"
          menu-class="dropdown-menu-end"
          right
          class="ms-auto"
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
      <div data-simplebar class="mt-2" style="max-height: 280px">
        <ul class="verti-timeline list-unstyled">
          <li class="event-list active">
            <div class="event-timeline-dot">
              <i
                class="bx bxs-right-arrow-circle font-size-18 bx-fade-right"
              ></i>
            </div>
            <div class="media">
              <div class="me-3">
                <h5 class="font-size-14">
                  10 Nov
                  <i
                    class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"
                  ></i>
                </h5>
              </div>
              <div class="media-body">
                <div>
                  Posted
                  <span class="font-weight-semibold"
                    >Beautiful Day with Friends</span
                  >
                  blog... <a href="#">View</a>
                </div>
              </div>
            </div>
          </li>
          <li class="event-list">
            <div class="event-timeline-dot">
              <i class="bx bx-right-arrow-circle font-size-18"></i>
            </div>
            <div class="media">
              <div class="me-3">
                <h5 class="font-size-14">
                  08 Nov
                  <i
                    class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"
                  ></i>
                </h5>
              </div>
              <div class="media-body">
                <div>
                  If several languages coalesce, the grammar of the resulting...
                  <a href="#">Read</a>
                </div>
              </div>
            </div>
          </li>
          <li class="event-list">
            <div class="event-timeline-dot">
              <i class="bx bx-right-arrow-circle font-size-18"></i>
            </div>
            <div class="media">
              <div class="me-3">
                <h5 class="font-size-14">
                  02 Nov
                  <i
                    class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"
                  ></i>
                </h5>
              </div>
              <div class="media-body">
                <div>
                  Create
                  <span class="font-weight-semibold"
                    >Drawing a sketch blog</span
                  >
                </div>
              </div>
            </div>
          </li>
          <li class="event-list">
            <div class="event-timeline-dot">
              <i class="bx bx-right-arrow-circle font-size-18"></i>
            </div>
            <div class="media">
              <div class="me-3">
                <h5 class="font-size-14">
                  24 Oct
                  <i
                    class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"
                  ></i>
                </h5>
              </div>
              <div class="media-body">
                <div>
                  In enim justo, rhoncus ut, imperdiet a venenatis vitae
                </div>
              </div>
            </div>
          </li>
          <li class="event-list">
            <div class="event-timeline-dot">
              <i class="bx bx-right-arrow-circle font-size-18"></i>
            </div>
            <div class="media">
              <div class="me-3">
                <h5 class="font-size-14">
                  21 Oct
                  <i
                    class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"
                  ></i>
                </h5>
              </div>
              <div class="media-body">
                <div>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="text-center mt-4">
        <a href="" class="btn btn-primary waves-effect waves-light btn-sm"
          >View More <i class="mdi mdi-arrow-right ms-1"></i
        ></a>
      </div>
    </div>
  </div>
  <!-- end card -->
</template>