<template>
  <div class="card">
    <div class="card-body">
      <div class="media">
        <img
          src="@assets/images/users/avatar-7.jpg"
          class="avatar-lg rounded-circle mr-2"
          alt="shreyu"
        />
        <div class="media-body">
          <h5 class="mt-2 mb-0">Shreyu N</h5>
          <h6 class="text-muted font-weight-normal mt-1 mb-4">New York, USA</h6>
        </div>
        <b-dropdown
          class="float-right"
          variant="black"
          right
          toggle-class="arrow-none text-muted p-0"
        >
          <template v-slot:button-content>
            <i class="uil uil-ellipsis-v"></i>
          </template>
          <!-- item-->
          <b-dropdown-item href="javascript:void(0);">
            <i class="uil uil-edit-alt mr-2"></i>Edit
          </b-dropdown-item>
          <!-- item-->
          <b-dropdown-item href="javascript:void(0);">
            <i class="uil uil-refresh mr-2"></i>Refresh
          </b-dropdown-item>
          <div class="dropdown-divider"></div>
          <!-- item-->
          <b-dropdown-item href="javascript:void(0);" variant="danger">
            <i class="uil uil-trash mr-2"></i>Delete
          </b-dropdown-item>
        </b-dropdown>
      </div>

      <div class="mt-2 mb-3 row justify-content-between">
        <div class="col-sm-5">
          <span class="font-size-15">
            <i class="uil uil-calendar-alt mr-1"></i>40 Days Ago
          </span>
        </div>
        <div class="col-sm mt-2 mt-sm-0">
          <span class="font-size-15">
            <i class="uil uil-users-alt mr-1"></i>12,001
          </span>
        </div>
        <div class="col-sm mt-2 mt-sm-0 text-sm-right">
          <span class="font-size-15">
            <i class="uil uil-calendar-alt mr-1"></i>1200
          </span>
        </div>
      </div>

      <div class="mt-1 pt-2 border-top text-left">
        <p class="text-muted mb-2">
          Hi I'm Shreyu. I am foodie and love to eat different cuisine!
        </p>
      </div>

      <div class="row mt-4 mb-3">
        <div class="col">
          <img
            src="@assets/images/small/img-4.jpg"
            alt
            class="img-fluid rounded shadow"
          />
        </div>
        <div class="col">
          <img
            src="@assets/images/small/img-5.jpg"
            alt
            class="img-fluid rounded shadow"
          />
        </div>
        <div class="col">
          <img
            src="@assets/images/small/img-6.jpg"
            alt
            class="img-fluid rounded shadow"
          />
        </div>
      </div>

      <div class="row mt-5 text-center">
        <div class="col">
          <button type="button" class="btn btn-primary btn-block mr-1"
            >Follow</button
          >
        </div>
        <div class="col">
          <button type="button" class="btn btn-white btn-block">Message</button>
        </div>
      </div>
    </div>
  </div>
</template>
