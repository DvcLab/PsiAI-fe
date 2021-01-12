<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import { authComputed, layoutMethods } from '@state/helpers'

/**
 * A right sidebar component
 */
export default {
  components: { VuePerfectScrollbar },
  data() {
    return {
      config: {
        handler: this.handleRightBarClick,
        middleware: this.middleware,
        events: ['click'],
      },
      layout: this.$store ? this.$store.state.layout.layoutType : {} || {},
    }
  },
  computed: {
    ...authComputed,
  },
  methods: {
    ...layoutMethods,
    hide() {
      this.$parent.toggleRightSidebar()
    },
    handleRightBarClick(e, el) {
      if (e.target && e.target.classList.contains('rightbar-overlay'))
        this.$parent.hideRightSidebar()
    },
    middleware(event, el) {
      return !event.target.classList.contains('toggle-right')
    },
    changeLayout(layout) {
      this.changeLeftSidebarTheme({ leftSidebarTheme: 'default' })
      this.changeLayoutWidth({ layoutWidth: 'default' })
      this.changeLayoutType({ layoutType: layout })
      this.hide()
    },
    changeTheme(theme) {
      this.changeLayoutType({ layoutType: 'vertical' })
      this.changeLeftSidebarTheme({ leftSidebarTheme: theme })
      this.hide()
    },
    changeType(condensed) {
      this.changeLayoutType({ layoutType: 'vertical' })
      this.changeLeftSidebarType({ leftSidebarType: condensed })
      this.hide()
    },
    changeWidth(boxed) {
      this.changeLayoutType({ layoutType: 'vertical' })
      this.changeLayoutWidth({ layoutWidth: boxed })
      this.hide()
    },
  },
}
</script>

<template>
  <div>
    <!-- Right Sidebar -->
    <div v-click-outside="config" class="right-bar">
      <div class="rightbar-title">
        <a
          href="javascript:void(0);"
          class="right-bar-toggle float-right"
          @click="hide"
        >
          <feather type="x-circle"></feather>
        </a>
        <h5 class="m-0">Customization</h5>
      </div>

      <div class="slimscroll-menu pb-5">
        <VuePerfectScrollbar style="height: 100%">
          <h5 class="font-size-16 pl-3 mt-4">Choose Variation</h5>
          <div class="p-3">
            <h6>Default</h6>
            <a href="javascript: void(0);" @click="changeLayout('vertical')">
              <img
                src="@assets/images/layouts/vertical.jpg"
                alt="vertical"
                class="img-thumbnail demo-img"
              />
            </a>
          </div>
          <div class="px-3 py-1">
            <h6>Top Nav</h6>
            <a href="javascript: void(0);" @click="changeLayout('horizontal')">
              <img
                src="@assets/images/layouts/horizontal.jpg"
                alt="horizontal"
                class="img-thumbnail demo-img"
              />
            </a>
          </div>
          <div class="px-3 py-1">
            <h6>Dark Side Nav</h6>
            <a href="javascript: void(0);" @click="changeTheme('dark')">
              <img
                src="@assets/images/layouts/vertical-dark-sidebar.jpg"
                alt="dark sidenav"
                class="img-thumbnail demo-img"
              />
            </a>
          </div>
          <div class="px-3 py-1">
            <h6>Condensed Side Nav</h6>
            <a href="javascript: void(0);" @click="changeType('condensed')">
              <img
                src="@assets/images/layouts/vertical-condensed.jpg"
                alt="condensed"
                class="img-thumbnail demo-img"
              />
            </a>
          </div>
          <div class="px-3 py-1">
            <h6>Fixed Width (Boxed)</h6>
            <a href="javascript: void(0);" @click="changeWidth('boxed')">
              <img
                src="@assets/images/layouts/boxed.jpg"
                alt="boxed"
                class="img-thumbnail demo-img"
              />
            </a>
          </div>
        </VuePerfectScrollbar>
      </div>
      <!-- end slimscroll-menu-->
    </div>
    <!-- /Right-bar -->

    <!-- Right bar overlay-->
    <div class="rightbar-overlay"></div>
  </div>
</template>
