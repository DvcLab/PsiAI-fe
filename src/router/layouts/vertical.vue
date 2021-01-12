<script>
import { layoutComputed } from '@state/helpers'
import Topbar from '@components/topbar'
import SideBar from '@components/side-bar'
import Rightsidebar from '@components/right-sidebar'
import Footer from '@components/footer'

export default {
	components: { Topbar, SideBar, Rightsidebar, Footer },
	data() {
		return {
			// isMenuCondensed: false,
			isMenuCondensed: true,
			isMobileMenuOpened: false,
			user: this.$store ? this.$store.state.auth.currentUser : {} || {},
			layout: this.$store ? this.$store.state.layout.layoutType : null || null,
			theme: this.$store
				? this.$store.state.layout.leftSidebarTheme
				: null || null,
			type: this.$store
				? this.$store.state.layout.leftSidebarType
				: null || null,
			width: this.$store ? this.$store.state.layout.layoutWidth : null || null,
		}
	},
	computed: {
		...layoutComputed,
	},
	created: () => {
		document.body.classList.remove('authentication-bg')
		document.body.classList.remove('authentication-bg-pattern')
		document.body.removeAttribute('data-layout')
		if (
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(
				navigator.userAgent
			)
		) {
			if (window.screen.width >= 728 && window.screen.width <= 1028) {
				document.body.classList.add('left-side-menu-condensed')
			}
		}
	},
	methods: {
		toggleMenu() {
			document.body.classList.toggle('left-side-menu-condensed')
			this.isMenuCondensed = !this.isMenuCondensed
			if (
				/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(
					navigator.userAgent
				)
			) {
				this.isMobileMenuOpened = !this.isMobileMenuOpened
				document.body.classList.toggle('sidebar-enable')
				if (window.screen.width <= 425) {
					document.body.classList.remove('left-side-menu-condensed')
				}
			}
		},
		toggleRightSidebar() {
			document.body.classList.toggle('right-bar-enabled')
		},
		hideRightSidebar() {
			document.body.classList.remove('right-bar-enabled')
		},
	},
}
</script>

<template>
	<div id="wrapper">
		<Topbar :user="user" :is-menu-opened="isMobileMenuOpened" />
		<SideBar
			:is-condensed="isMenuCondensed"
			:theme="leftSidebarTheme"
			:type="leftSidebarType"
			:width="layoutWidth"
			:user="user"
		/>
		<!-- ============================================================== -->
		<!-- Start Page Content here -->
		<!-- ============================================================== -->

		<div class="content-page">
			<div class="content">
				<!-- Start Content-->
				<div class="container-fluid">
					<slot />
				</div>
			</div>
			<Footer />
		</div>
		<Rightsidebar />
	</div>
</template>
