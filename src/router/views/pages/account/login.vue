<script>
import Layout from '@layouts/default'
import { authMethods } from '@state/helpers'
import appConfig from '@src/app.config'

/**
 * Login component
 */
export default {
	page: {
		title: 'Log in',
		meta: [{ name: 'description', content: `Log in to ${appConfig.title}` }],
	},
	components: { Layout },
	data() {
		return {
			username: 'admin',
			password: 'password',
			authError: null,
			tryingToLogIn: false,
			isAuthError: false,
		}
	},
	computed: {
		placeholders() {
			return process.env.NODE_ENV === 'production'
				? {}
				: {
						username: 'Use "admin" to log in with the mock API',
						password: 'Use "password" to log in with the mock API',
				  }
		},
	},
	methods: {
		...authMethods,
		// Try to log the user in with the username
		// and password they provided.
		tryToLogIn() {
			this.tryingToLogIn = true
			// Reset the authError if it existed.
			this.authError = null
			return this.logIn({
				username: this.username,
				password: this.password,
			})
				.then((token) => {
					this.tryingToLogIn = false
					this.isAuthError = false
					// Redirect to the originally requested page, or to the home page
					this.$router.push(
						this.$route.query.redirectFrom || { name: 'Dashboard' }
					)
				})
				.catch((error) => {
					this.tryingToLogIn = false
					this.authError = error.response ? error.response.data.message : ''
					this.isAuthError = true
				})
		},
	},
}
</script>

<template>
	<Layout>
		<!-- end row -->
		<div class="account-pages my-5">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-xl-10">
						<div class="card">
							<div class="card-body p-0">
								<div class="row">
									<div class="col-md-6 p-5">
										<div class="mx-auto mb-5">
											<a routerLink="/">
												<img src="@assets/images/logo.png" alt height="24" />
												<h3 class="d-inline align-middle ml-1 text-logo"
													>Shreyu</h3
												>
											</a>
										</div>

										<h6 class="h5 mb-0 mt-4">Welcome back!</h6>
										<p class="text-muted mt-1 mb-4">
											Enter your email address and password to access admin
											panel.
										</p>

										<b-alert
											v-model="isAuthError"
											variant="danger"
											dismissible
											>{{ authError }}</b-alert
										>

										<b-form
											class="authentication-form"
											@submit.prevent="tryToLogIn"
										>
											<div class="form-group">
												<div class="input-group input-group-merge">
													<div class="input-group-prepend">
														<span class="input-group-text">
															<feather
																type="mail"
																class="align-middle icon-dual"
															></feather>
														</span>
													</div>
													<b-form-input
														id="input-1"
														v-model="username"
														type="text"
														required
														placeholder="Enter username"
													></b-form-input>
												</div>
											</div>
											<div class="form-group mt-4">
												<label class="form-control-label">Password</label>
												<router-link
													to="forget-password"
													class="float-right text-muted text-unline-dashed ml-1"
													>Forgot your password?</router-link
												>
												<div class="input-group input-group-merge">
													<div class="input-group-prepend">
														<span class="input-group-text">
															<feather
																type="lock"
																class="align-middle icon-dual"
															></feather>
														</span>
													</div>
													<b-form-input
														id="password"
														v-model="password"
														type="password"
														required
														placeholder="Enter your password"
													></b-form-input>
												</div>
											</div>
											<div class="form-group mb-4">
												<div class="custom-control custom-checkbox">
													<input
														id="checkbox-signin"
														type="checkbox"
														class="custom-control-input"
														checked
													/>
													<label
														class="custom-control-label"
														for="checkbox-signin"
													>
														Remember me
													</label>
												</div>
											</div>
											<b-form-group id="button-group" class="mt-4 mb-1">
												<b-button
													type="submit"
													variant="primary"
													class="btn-block"
													>Log In</b-button
												>
											</b-form-group>
										</b-form>
										<div class="py-3 text-center">
											<span class="font-size-16 font-weight-bold">Or</span>
										</div>
										<div class="row">
											<div class="col-6">
												<a href="javascript: void(0);" class="btn btn-white">
													<i class="uil uil-google icon-google mr-2"></i>With
													Google
												</a>
											</div>
											<div class="col-6 text-right">
												<a href="javascript: void(0);" class="btn btn-white">
													<i class="uil uil-facebook mr-2 icon-fb"></i>With
													Facebook
												</a>
											</div>
										</div>
									</div>
									<div class="col-lg-6 d-none d-md-inline-block">
										<div class="auth-page-sidebar">
											<div class="overlay"></div>
											<div class="auth-user-testimonial">
												<p class="font-size-24 font-weight-bold text-white mb-1"
													>I simply love it!</p
												>
												<p class="lead"
													>"It's a elegent templete. I love it very much!"</p
												>
												<p>- Admin User</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- end card-body -->
						</div>
						<!-- end card -->

						<div class="row mt-3">
							<div class="col-12 text-center">
								<p class="text-muted">
									Don't have an account?
									<router-link
										tag="a"
										to="/register"
										class="text-primary font-weight-bold ml-1"
									>
										<b>Sign Up</b>
									</router-link>
									<!-- <a
                    routerLink="/account/signup"
                    class="text-primary font-weight-bold ml-1"
                  >Sign Up</a>-->
								</p>
							</div>
							<!-- end col -->
						</div>
						<!-- end row -->
					</div>
					<!-- end col -->
				</div>
				<!-- end row -->
			</div>
			<!-- end container -->
		</div>
	</Layout>
</template>

<style lang="scss" module></style>
