<template>
  <div>
    <div class="btn-group mb-2">
      <button id="archive-tooltip" type="button" class="btn btn-light">
        <b-tooltip target="archive-tooltip">Archive</b-tooltip>
        <i class="uil uil-archive-alt"></i>
      </button>
      <button id="spam-tooltip" type="button" class="btn btn-light">
        <b-tooltip target="spam-tooltip">Mark as spam</b-tooltip>
        <i class="uil uil-exclamation-octagon"></i>
      </button>
      <button id="delete-tooltip" type="button" class="btn btn-light">
        <b-tooltip target="delete-tooltip">Delete</b-tooltip>
        <i class="uil uil-trash-alt"></i>
      </button>
    </div>

    <b-dropdown id="folder-tooltip" class="btn-group mb-2 ml-1" variant="light">
      <template v-slot:button-content>
        <i class="uil uil-folder"></i>
        <i class="uil uil-angle-down ml-1"></i>
      </template>
      <b-dropdown-header>Move to</b-dropdown-header>
      <b-dropdown-item href="javascript: void(0);">Social</b-dropdown-item>
      <b-dropdown-item href="javascript: void(0);">Promotions</b-dropdown-item>
      <b-dropdown-item href="javascript: void(0);">Updates</b-dropdown-item>
      <b-dropdown-item href="javascript: void(0);">Forums</b-dropdown-item>
    </b-dropdown>
    <b-tooltip target="folder-tooltip">Folder</b-tooltip>

    <b-dropdown
      id="label-tooltip"
      class="btn-group mb-2 ml-1"
      toggle-class="btn-light"
    >
      <template v-slot:button-content>
        <i class="uil uil-label"></i>
        <i class="uil uil-angle-down ml-1"></i>
      </template>
      <b-dropdown-header>Label as:</b-dropdown-header>
      <b-dropdown-item href="javascript: void(0);">Updates</b-dropdown-item>
      <b-dropdown-item href="javascript: void(0);">Social</b-dropdown-item>
      <b-dropdown-item href="javascript: void(0);">Promotions</b-dropdown-item>
      <b-dropdown-item href="javascript: void(0);">Forums</b-dropdown-item>
    </b-dropdown>
    <b-tooltip target="label-tooltip">Labels</b-tooltip>

    <b-dropdown
      id="action-tooltip"
      class="btn-group mb-2 ml-1"
      toggle-class="btn-light"
    >
      <template v-slot:button-content>
        <i class="uil uil-ellipsis-h font-size-13"></i> More
        <i class="uil uil-angle-down"></i>
      </template>
      <b-dropdown-header>More Option :</b-dropdown-header>
      <b-dropdown-item href="javascript: void(0);"
        >Mark as Unread</b-dropdown-item
      >
      <b-dropdown-item href="javascript: void(0);"
        >Add to Tasks</b-dropdown-item
      >
      <b-dropdown-item href="javascript: void(0);">Add Star</b-dropdown-item>
      <b-dropdown-item href="javascript: void(0);">Mute</b-dropdown-item>
    </b-dropdown>
    <b-tooltip target="action-tooltip">More Actions</b-tooltip>
  </div>
</template>
