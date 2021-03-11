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
          <h5 class="card-title mb-3">Comments</h5>
        </div>
        <b-dropdown text="Button text via Prop" class="ms-auto" variant="white" toggle-tag="a" menu-class="dropdown-menu-end" toggle-class="font-size-16 p-0" right>
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

      <div data-simplebar style="max-height: 310px">
        <ul class="list-group list-group-flush">
          <li class="list-group-item py-3">
            <div class="media">
              <div class="avatar-xs me-3">
                <div class="avatar-title rounded-circle bg-light text-primary">
                  <i class="bx bxs-user"></i>
                </div>
              </div>
              <div class="media-body">
                <h5 class="font-size-14 mb-1">
                  Delores Williams
                  <small class="text-muted float-end">1 hr Ago</small>
                </h5>
                <p class="text-muted">
                  If several languages coalesce, the grammar of the resulting of
                  the individual
                </p>
                <div>
                  <a href="javascript: void(0);" class="text-success"
                    ><i class="mdi mdi-reply me-1"></i> Reply</a
                  >
                </div>
              </div>
            </div>
          </li>

          <li class="list-group-item py-3">
            <div class="media">
              <div class="avatar-xs me-3">
                <img
                  src="@/assets/images/users/avatar-2.jpg"
                  alt=""
                  class="img-fluid d-block rounded-circle"
                />
              </div>
              <div class="media-body">
                <h5 class="font-size-14 mb-1">
                  Clarence Smith
                  <small class="text-muted float-end">2 hrs Ago</small>
                </h5>
                <p class="text-muted">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet
                </p>
                <div>
                  <a href="javascript: void(0);" class="text-success"
                    ><i class="mdi mdi-reply"></i> Reply</a
                  >
                </div>

                <div class="media pt-3">
                  <div class="avatar-xs me-3">
                    <div
                      class="avatar-title rounded-circle bg-light text-primary"
                    >
                      <i class="bx bxs-user"></i>
                    </div>
                  </div>
                  <div class="media-body">
                    <h5 class="font-size-14 mb-1">
                      Silvia Martinez
                      <small class="text-muted float-end">2 hrs Ago</small>
                    </h5>
                    <p class="text-muted">
                      To take a trivial example, which of us ever undertakes
                    </p>
                    <div>
                      <a href="javascript: void(0);" class="text-success"
                        ><i class="mdi mdi-reply"></i> Reply</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li class="list-group-item py-3">
            <div class="media">
              <div class="avatar-xs me-3">
                <div class="avatar-title rounded-circle bg-light text-primary">
                  <i class="bx bxs-user"></i>
                </div>
              </div>
              <div class="media-body">
                <h5 class="font-size-14 mb-1">
                  Keith McCoy
                  <small class="text-muted float-end">12 Aug</small>
                </h5>
                <p class="text-muted">
                  Donec posuere vulputate arcu. phasellus accumsan cursus velit
                </p>
                <div>
                  <a href="javascript: void(0);" class="text-success"
                    ><i class="mdi mdi-reply"></i> Reply</a
                  >
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>