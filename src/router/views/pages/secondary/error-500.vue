<script>
export default {}
</script>

<template>
  <div class="account-pages my-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-4 col-lg-5 col-8">
          <div class="text-center">
            <div>
              <img src="@assets/images/server-down.png" alt class="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 text-center">
          <h3 class="mt-3">Opps, something went wrong</h3>
          <p class="text-muted mb-5">
            Server Error 500. We apoligise and are fixing the problem.
            <br />Please try again at a later stage.
          </p>

          <router-link to="/" class="btn btn-lg btn-primary mt-4"
            >Take me back to Home</router-link
          >
        </div>
      </div>
    </div>
    <!-- end container -->
  </div>
  <!-- end account-pages -->
</template>
