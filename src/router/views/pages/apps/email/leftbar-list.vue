<script>
export default {
  data() {
    return {
      emailList: [
        {
          icon: 'uil uil-envelope-alt',
          name: 'Inbox',
          value: 8,
          text: 'danger',
        },
        {
          icon: 'uil uil-envelope-star',
          name: 'Starred',
        },
        {
          icon: 'uil uil-envelope-edit',
          name: 'Draft',
          value: 32,
          text: 'info',
        },
        {
          icon: 'uil uil-envelope-send',
          name: 'Sent Mail',
        },
        {
          icon: 'uil uil-trash',
          name: 'Trash',
        },
      ],
      emailLabel: [
        {
          text: 'primary',
          name: 'Web App',
        },
        {
          text: 'success',
          name: 'Recharge',
        },
        {
          text: 'success',
          name: 'Wallet Balance',
        },
        {
          text: 'warning',
          name: 'Friends',
        },
        {
          text: 'secondary',
          name: 'Family',
        },
      ],
    }
  },
}
</script>

<template>
  <div>
    <!-- List  -->
    <div v-for="list in emailList" :key="list.icon" class="mail-list">
      <a
        href="javascript: void(0);"
        class="list-group-item border-0"
        :class="{ 'text-danger font-weight-bold': `${list.text}` === 'danger' }"
      >
        <i :class="`${list.icon} font-size-15`"></i>
        {{ list.name }}
        <span
          class="badge bagde-danger float-right ml-2 mt-1"
          :class="{
            'badge-danger': `${list.text}` === 'danger',
            'badge-info': `${list.text}` === 'info',
          }"
          >{{ list.value }}</span
        >
      </a>
    </div>
    <!-- End list -->

    <!-- Label -->
    <h6 class="mt-4">Labels</h6>
    <div
      v-for="label in emailLabel"
      :key="label.name"
      class="list-group b-0 mail-list"
    >
      <a href="javascript: void(0);" class="list-group-item border-0">
        <span
          :class="`uil uil-circle text-${label.text} font-size-12 mr-1`"
        ></span>
        {{ label.name }}
      </a>
    </div>
    <!-- End label -->
  </div>
</template>
