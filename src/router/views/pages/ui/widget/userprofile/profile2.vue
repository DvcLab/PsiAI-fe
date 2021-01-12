<template>
  <div class="card profile-widget">
    <img src="@assets/images/covers/2.jpg" alt="Shreyu" class="card-img-top" />
    <b-dropdown
      class="card-action float-right"
      variant="black"
      right
      toggle-class="arrow-none p-0"
    >
      <template v-slot:button-content>
        <i class="uil uil-ellipsis-v font-size-16 text-white"></i>
      </template>
      <!-- item-->
      <b-dropdown-item href="javascript:void(0);">
        <i class="uil uil-edit-alt mr-2"></i>Edit
      </b-dropdown-item>
      <!-- item-->
      <b-dropdown-item href="javascript:void(0);">
        <i class="uil uil-refresh mr-2"></i>Refresh
      </b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <!-- item-->
      <b-dropdown-item href="javascript:void(0);" variant="danger">
        <i class="uil uil-trash mr-2"></i>Delete
      </b-dropdown-item>
    </b-dropdown>

    <div class="card-body text-center p-0">
      <div class="profile-info pb-3">
        <img
          src="@assets/images/users/avatar-7.jpg"
          alt
          class="img-thumbnail avatar-xl rounded-circle"
        />
        <h5 class="mt-2 mb-0">Shreyu N</h5>
        <h6 class="text-muted font-weight-normal mt-2 mb-4">
          User Experience Specialist
        </h6>
        <button type="button" class="btn btn-primary btn-sm mr-1"
          >Follow</button
        >
        <button type="button" class="btn btn-white btn-sm">Message</button>
      </div>
    </div>
  </div>
</template>
