<script>
/**
 * Blog-post component
 */
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
          <h5 class="card-title mb-4">Popular post</h5>
        </div>
        <b-dropdown
          text="Button text via Prop"
          toggle-tag="a"
          class="ms-auto"
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

      <div class="table-responsive mb-0">
        <table class="table align-middle table-nowrap">
          <tbody>
            <tr>
              <th scope="col" colspan="2">Post</th>
              <th scope="col">Likes</th>
              <th scope="col">Comments</th>
              <th scope="col">Action</th>
            </tr>

            <tr>
              <td style="width: 100px">
                <img
                  src="@/assets/images/small/img-2.jpg"
                  alt=""
                  class="avatar-md h-auto d-block rounded"
                />
              </td>
              <td>
                <h5 class="font-size-13 text-truncate mb-1">
                  <a href="#" class="text-dark">Beautiful Day with Friends</a>
                </h5>
                <p class="text-muted mb-0">10 Nov, 2020</p>
              </td>
              <td><i class="bx bx-like align-middle me-1"></i> 125</td>
              <td><i class="bx bx-comment-dots align-middle me-1"></i> 68</td>
              <td>
                <b-dropdown
                  text="Button text via Prop"
                  toggle-class="text-muted font-size-16 p-0"
                  menu-class="dropdown-menu-end"
                  variant="white"
                  right
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
              </td>
            </tr>

            <tr>
              <td>
                <img
                  src="@/assets/images/small/img-6.jpg"
                  alt=""
                  class="avatar-md h-auto d-block rounded"
                />
              </td>
              <td>
                <h5 class="font-size-13 text-truncate mb-1">
                  <a href="#" class="text-dark">Drawing a sketch</a>
                </h5>
                <p class="text-muted mb-0">02 Nov, 2020</p>
              </td>
              <td><i class="bx bx-like align-middle me-1"></i> 102</td>
              <td><i class="bx bx-comment-dots align-middle me-1"></i> 48</td>
              <td>
                <b-dropdown
                  text="Button text via Prop"
                  toggle-class="text-muted font-size-16 p-0"
                  variant="white"
                  right
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
              </td>
            </tr>

            <tr>
              <td>
                <img
                  src="@/assets/images/small/img-1.jpg"
                  alt=""
                  class="avatar-md h-auto d-block rounded"
                />
              </td>
              <td>
                <h5 class="font-size-13 text-truncate mb-1">
                  <a href="#" class="text-dark">Riding bike on road</a>
                </h5>
                <p class="text-muted mb-0">24 Oct, 2020</p>
              </td>
              <td><i class="bx bx-like align-middle me-1"></i> 98</td>
              <td><i class="bx bx-comment-dots align-middle me-1"></i> 35</td>
              <td>
                <b-dropdown
                  text="Button text via Prop"
                  toggle-class="text-muted font-size-16 p-0"
                  variant="white"
                  right
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
              </td>
            </tr>

            <tr>
              <td>
                <img
                  src="@/assets/images/small/img-2.jpg"
                  alt=""
                  class="avatar-md h-auto d-block rounded"
                />
              </td>
              <td>
                <h5 class="font-size-13 text-truncate mb-1">
                  <a href="#" class="text-dark">Project discussion with team</a>
                </h5>
                <p class="text-muted mb-0">15 Oct, 2020</p>
              </td>
              <td><i class="bx bx-like align-middle me-1"></i> 92</td>
              <td><i class="bx bx-comment-dots align-middle me-1"></i> 22</td>
              <td>
                <b-dropdown
                  text="Button text via Prop"
                  toggle-class="text-muted font-size-16 p-0"
                  variant="white"
                  right
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
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- end card -->
</template>