<script>
export default {
  props: {
    task: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>
<template>
  <div class="card border mb-0">
    <div class="card-body p-3">
      <b-dropdown
        variant="link"
        class="float-right"
        toggle-class="p-0 text-muted arrow-none"
      >
        <template v-slot:button-content>
          <i class="uil uil-ellipsis-v font-size-14"></i>
        </template>
        <b-dropdown-item href="javascript: void(0);"
          ><i class="uil uil-edit-alt mr-2"></i>Edit</b-dropdown-item
        >
        <b-dropdown-item href="javascript: void(0);"
          ><i class="uil uil-user-plus mr-2"></i>Add People</b-dropdown-item
        >
        <b-dropdown-item href="javascript: void(0);" variant="warning"
          ><i class="uil uil-exit mr-2"></i>Leave</b-dropdown-item
        >
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item href="javascript: void(0);" variant="danger">
          <i class="uil uil-trash mr-2"></i>Delete
        </b-dropdown-item>
      </b-dropdown>

      <h6 class="mt-0 mb-2 font-size-15">
        <a href="javascript: void(0);" class="text-body">{{ task.title }}</a>
      </h6>

      <span v-if="task.priority === 'High'" class="badge badge-soft-danger"
        >High</span
      >

      <span v-else-if="task.priority === 'Normal'" class="badge badge-soft-info"
        >Normal</span
      >

      <span v-else class="badge badge-soft-success">Low</span>

      <p class="mb-0 mt-4">
        <img
          :src="task.user"
          alt="user-img"
          class="avatar-xs rounded-circle mr-2"
        />

        <span class="text-nowrap align-middle font-size-13 mr-2">
          <i class="uil uil-comments-alt text-muted mr-1"></i
          >{{ task.comments }}
        </span>

        <span class="text-nowrap align-middle font-size-13">
          <i class="uil uil-check-square mr-1 text-muted"></i
          >{{ task.subTasks }}
        </span>
        <small class="float-right text-muted">{{ task.dueDate }}</small>
      </p>
    </div>
    <!-- end card-body -->
  </div>
</template>
