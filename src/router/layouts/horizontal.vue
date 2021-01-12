<script>
import Topbar from '@components/topbar'
import AppMenu from '@components/app-menu'
import RightSidebar from '@components/right-sidebar'

export default {
  components: { Topbar, AppMenu, RightSidebar },
  data() {
    return {
      showMobileMenu: false,
      user: this.$store ? this.$store.state.auth.currentUser : {} || {},
    }
  },
  created: () => {
    document.body.classList.remove('authentication-bg')
    document.body.classList.remove('authentication-bg-pattern')
    document.body.setAttribute('data-layout', 'topnav')
    document.body.classList.remove('right-bar-enabled')
    document.body.classList.remove('left-side-menu-condensed')
    document.body.classList.remove('boxed-layout')
  },
  methods: {
    toggleMenu() {
      this.showMobileMenu = !this.showMobileMenu
    },
    toggleRightSidebar() {
      document.body.classList.toggle('right-bar-enabled')
    },
  },
}
</script>

<template>
  <div>
    <!-- ============================================================== -->
    <!-- Start Page Content here -->
    <!-- ============================================================== -->
    <Topbar :user="user" :is-menu-opened="showMobileMenu" />
    <div class="topnav shadow-sm">
      <div class="container-fluid">
        <nav class="navbar navbar-light navbar-expand-lg topbar-nav">
          <b-collapse
            id="topnav-menu-content"
            v-model="showMobileMenu"
            class="navbar-collapse"
          >
            <AppMenu mode="horizontal" />
          </b-collapse>
        </nav>
      </div>
    </div>
    <div class="content-page">
      <div class="content">
        <div class="container-fluid">
          <slot />
        </div>
      </div>
    </div>
    <RightSidebar />
  </div>
</template>
