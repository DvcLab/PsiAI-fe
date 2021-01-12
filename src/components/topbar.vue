<script>
import { authComputed, authMethods } from '@state/helpers'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
	components: {
		VuePerfectScrollbar,
	},
	props: {
		user: {
			type: Object,
			required: false,
			default: () => ({}),
		},
		isMenuOpened: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {}
	},
	computed: {
		...authComputed,
	},
	methods: {
		...authMethods,
		toggleMenu() {
			this.$parent.toggleMenu()
		},
		toggleRightSidebar() {
			this.$parent.toggleRightSidebar()
		},
		// 退出登录
		logout () {
			this.logOut() // auth/logOut
      this.$keycloak.logoutFn()
    }
	},
}
</script>

<template>
	<!-- Topbar Start -->
	<div class="navbar navbar-expand flex-column flex-md-row navbar-custom">
		<div class="container-fluid">
			<!-- LOGO -->
			<!-- <a href="/" class="navbar-brand mr-0 mr-md-2 logo"> -->
			<a href="/" class="navbar-brand mr-0 logo">
				<span class="logo-lg">
					<!-- <img src="@assets/images/logo.png" alt height="24" /> -->
					<img src="@assets/images/psi.svg" alt height="36" />
					<span class="d-inline h5 ml-2 text-logo">PsiAI</span>
				</span>
				<span class="logo-sm">
					<!-- <img src="@assets/images/logo.png" alt height="24" /> -->
					<img src="@assets/images/psi.svg" alt height="36" />
				</span>
			</a>

			<ul
				class="navbar-nav bd-navbar-nav flex-row list-unstyled menu-left mb-0"
			>
				<li class>
					<!-- <button
						class="button-menu-mobile open-left disable-btn"
						:class="{ open: isMenuOpened }"
						@click="toggleMenu"
					>
						<feather type="menu" class="menu-icon align-middle"></feather>
						<feather type="x" class="close-icon"></feather>
					</button> -->
					<button
						class="button-menu-mobile open-left"
						:class="{ open: isMenuOpened }"
						@click="toggleMenu"
					>
						<feather type="menu" class="menu-icon align-middle"></feather>
						<feather type="x" class="close-icon"></feather>
					</button>
				</li>
			</ul>

			<ul
				class="navbar-nav flex-row ml-auto d-flex list-unstyled topnav-menu float-right mb-0"
			>
				<li class="d-none d-sm-block">
					<div class="app-search">
						<form>
							<div class="input-group">
								<input
									type="text"
									class="form-control"
									placeholder="Search..."
								/>
								<feather type="search" class="align-middle"></feather>
							</div>
						</form>
					</div>
				</li>

				<!-- <b-nav-item-dropdown
					id="globe-tooltip"
					right
					variant="black"
					class="dropdown d-none d-lg-block"
					no-caret
				>
					<template v-slot:button-content>
						<feather type="globe"></feather>
					</template>
					<b-tooltip target="globe-tooltip" placement="left"
						>Change language</b-tooltip
					>

					<b-dropdown-text href="javascript:void(0);" class="notify-item">
						<img
							src="@assets/images/flags/germany.jpg"
							alt="user-image"
							class="mr-2"
							height="12"
						/>
						<span class="align-middle">German</span>
					</b-dropdown-text>

					<b-dropdown-text href="javascript:void(0);" class="notify-item">
						<img
							src="@assets/images/flags/italy.jpg"
							alt="user-image"
							class="mr-2"
							height="12"
						/>
						<span class="align-middle">Italian</span>
					</b-dropdown-text>

					<b-dropdown-text href="javascript:void(0);" class="notify-item">
						<img
							src="@assets/images/flags/spain.jpg"
							alt="user-image"
							class="mr-2"
							height="12"
						/>
						<span class="align-middle">Spanish</span>
					</b-dropdown-text>

					<b-dropdown-text href="javascript:void(0);" class="notify-item">
						<img
							src="@assets/images/flags/russia.jpg"
							alt="user-image"
							class="mr-2"
							height="12"
						/>
						<span class="align-middle">Russian</span>
					</b-dropdown-text>
				</b-nav-item-dropdown> -->

				<b-nav-item-dropdown
					id="bell-notification"
					right
					variant="white"
					class="notification-list"
					title="8 new unread notifications"
					menu-class="dropdown-lg"
				>
					<template v-slot:button-content>
						<feather type="bell" class="align-middle"></feather>
						<span class="noti-icon-badge"></span>
					</template>
					<b-tooltip target="bell-notification" placement="left"
						>8 new unread notifications</b-tooltip
					>
					<!-- item-->
					<b-dropdown-text class="noti-title border-bottom pb-2" tag="div">
						<h5 class="m-0 font-size-16">
							<span class="float-right">
								<a href class="text-dark">
									<small>Clear All</small>
								</a> </span
							>Notification
						</h5>
					</b-dropdown-text>

					<VuePerfectScrollbar v-once class="noti-scroll">
						<!-- item-->
						<b-dropdown-text
							href="javascript:void(0);"
							class="notify-item border-bottom"
						>
							<div class="notify-icon bg-primary">
								<i class="uil uil-user-plus"></i>
							</div>
							<p class="notify-details">
								New user registered.
								<small class="text-muted">5 hours ago</small>
							</p>
						</b-dropdown-text>

						<!-- item-->
						<b-dropdown-text
							href="javascript:void(0);"
							class="notify-item border-bottom"
						>
							<div class="notify-icon">
								<img
									src="@assets/images/users/avatar-1.jpg"
									class="img-fluid rounded-circle"
									alt
								/>
							</div>
							<p class="notify-details">Karen Robinson</p>
							<p class="text-muted mb-0 user-msg">
								<small>Wow ! this admin looks good and awesome design</small>
							</p>
						</b-dropdown-text>

						<!-- item-->
						<b-dropdown-text
							href="javascript:void(0);"
							class="notify-item border-bottom"
						>
							<div class="notify-icon">
								<img
									src="@assets/images/users/avatar-2.jpg"
									class="img-fluid rounded-circle"
									alt
								/>
							</div>
							<p class="notify-details">Cristina Pride</p>
							<p class="text-muted mb-0 user-msg">
								<small>Hi, How are you? What about our next meeting</small>
							</p>
						</b-dropdown-text>

						<!-- item-->
						<b-dropdown-text
							href="javascript:void(0);"
							class="notify-item border-bottom active"
						>
							<div class="notify-icon bg-success">
								<i class="uil uil-comment-message"></i>
							</div>
							<p class="notify-details">
								Jaclyn Brunswick commented on Dashboard
								<small class="text-muted">
									1 min ago
								</small>
							</p>
						</b-dropdown-text>

						<!-- item-->
						<b-dropdown-text
							href="javascript:void(0);"
							class="notify-item border-bottom"
						>
							<div class="notify-icon bg-danger">
								<i class="uil uil-comment-message"></i>
							</div>
							<p class="notify-details">
								Caleb Flakelar commented on Admin
								<small class="text-muted">
									4 days ago
								</small>
							</p>
						</b-dropdown-text>

						<!-- item-->
						<b-dropdown-text href="javascript:void(0);" class="notify-item">
							<div class="notify-icon bg-primary">
								<i class="uil uil-heart"></i>
							</div>
							<p class="notify-details">
								Carlos Crouch liked
								<b>Admin</b>
								<small class="text-muted">13 days ago</small>
							</p>
						</b-dropdown-text>
					</VuePerfectScrollbar>
					<!-- All-->
					<b-dropdown-text
						href="javascript:void(0);"
						class="text-center text-primary notify-item notify-all border-top"
					>
						View all
						<i class="fi-arrow-right"></i>
					</b-dropdown-text>
				</b-nav-item-dropdown>

				<li
					id="setting-tooltip"
					class="dropdown notification-list"
					title="Settings"
				>
					<a
						href="javascript:void(0);"
						class="nav-link right-bar-toggle toggle-right"
						@click="toggleRightSidebar"
					>
						<feather type="settings" class="toggle-right"></feather>
					</a>
					<b-tooltip target="setting-tooltip" placement="left"
						>Settings</b-tooltip
					>
				</li>

				<!-- <b-nav-item-dropdown
					right
					class="notification-list align-self-center profile-dropdown"
					toggle-class="nav-user mr-0"
				> -->
				<b-nav-item-dropdown
					right
					class="notification-list align-self-center profile-dropdown d-block"
					toggle-class="nav-user mr-0"
				>
					<template v-slot:button-content>
						<div class="media user-profile">
							<img
								src="@assets/images/users/avatar.svg"
								alt="user-image"
								class="rounded-circle align-self-center"
							/>
							<!-- <div class="media-body text-left">
								<h6 class="pro-user-name ml-2 my-0">
									<span>{{ user.name }}</span>
									<span class="pro-user-desc text-muted d-block mt-1"
										>Administrator</span
									>
								</h6>
							</div> -->
							<feather
								type="chevron-down"
								class="ml-2 align-self-center"
							></feather>
						</div>
					</template>

					<b-dropdown-item href="/pages/profile" class="notify-item p-0">
						<feather type="user" class="icon-dual icon-xs mr-2"></feather>
						<span class="font-weight-bold">{{ currentUser.username }}</span>
					</b-dropdown-item>

					<b-dropdown-divider></b-dropdown-divider>

					<!-- <b-dropdown-item href="/pages/profile" class="notify-item p-0">
						<feather type="user" class="icon-dual icon-xs mr-2"></feather>
						<span>My Account</span>
					</b-dropdown-item> -->

					<b-dropdown-item href="javascript:void(0);" class="notify-item p-0">
						<feather type="settings" class="icon-dual icon-xs mr-2"></feather>
						<span>Settings</span>
					</b-dropdown-item>

					<b-dropdown-item href="javascript:void(0);" class="notify-item p-0">
						<feather
							type="help-circle"
							class="icon-dual icon-xs mr-2"
						></feather>
						<span>Support</span>
					</b-dropdown-item>

					<b-dropdown-item
						href="pages-lock-screen.html"
						class="notify-item p-0"
					>
						<feather type="lock" class="icon-dual icon-xs mr-2"></feather>
						<span>Lock Screen</span>
					</b-dropdown-item>

					<b-dropdown-divider></b-dropdown-divider>

					<b-dropdown-item @click="logout" class="notify-item p-0">
						<feather type="log-out" class="icon-dual icon-xs mr-2"></feather>
						<span>Logout</span>
					</b-dropdown-item>
				</b-nav-item-dropdown>
			</ul>
		</div>
	</div>
	<!-- end Topbar -->
</template>

<style lang="scss">
.noti-scroll {
	height: 220px;
}
.ps > .ps__scrollbar-y-rail {
	width: 8px !important;
	background-color: transparent !important;
}
.ps > .ps__scrollbar-y-rail > .ps__scrollbar-y,
.ps.ps--in-scrolling.ps--y > .ps__scrollbar-y-rail > .ps__scrollbar-y,
.ps > .ps__scrollbar-y-rail:active > .ps__scrollbar-y,
.ps > .ps__scrollbar-y-rail:hover > .ps__scrollbar-y {
	width: 6px !important;
}
.button-menu-mobile {
	outline: none !important;
}
.left-side-menu-condensed .navbar-custom {
  left: 0 !important;
  padding-left: 0px;
}
.navbar-custom .button-menu-mobile {
	margin-left: 50px;
	line-height: 10px;
}
.left-side-menu-condensed .button-menu-mobile {
	margin-left: 0;
}
</style>
