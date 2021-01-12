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
              <img src="@assets/images/not-found.png" alt class="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 text-center">
          <h3 class="mt-3">We couldn’t connect the dots</h3>
          <p class="text-muted mb-5">
            This page was not found.
            <br />You may have mistyped the address or the page may have moved.
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
