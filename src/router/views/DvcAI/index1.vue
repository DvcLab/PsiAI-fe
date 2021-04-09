<script>
// import { Carousel, Slide } from "vue-carousel";
import { mapState } from 'vuex';

/**
 * DvcAI Index page
 */
export default {
  // components: { Carousel, Slide },
  data() {
    return {
      start: "",
      end: "",
      interval: "",
      days: "",
      minutes: "",
      hours: "",
      seconds: "",
      starttime: "Nov 5, 2020 15:37:25",
      endtime: "Dec 31, 2021 16:37:25"
    };
  },
  filters:{
    ellipsis(value){
        if (!value) return '';
        if (value.length > 20) {
            return value.slice(0,20) + '...'
        }
        return value
    }
  },
  created() {
    window.addEventListener("scroll", this.windowScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.windowScroll);
  },
  mounted() {
    this.start = new Date(this.starttime).getTime();
    this.end = new Date(this.endtime).getTime();
    // Update the count down every 1 second
    this.timerCount(this.start, this.end);
    this.interval = setInterval(() => {
      this.timerCount(this.start, this.end);
    }, 1000);
  },
  computed: {
    ...mapState({
      userInfo(state){
        if(state.auth.currentUser) {
          return state.auth.currentUser
        } else {
          return null;
          // return {
          //   attributes: {
          //     headimgurl: [],
          //   },
          //   username: ''
          // }
        }
      } 
    }),
    avatarUrl() {
      return this.userInfo.attributes.headimgurl ? this.userInfo.attributes.headimgurl[0] : require('@/assets/images/users/avatar-1.jpg')
    }
  },
  methods: {
    timerCount: function(start, end) {
      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = start - now;
      var passTime = end - now;

      if (distance < 0 && passTime < 0) {
        clearInterval(this.interval);
        return;
      } else if (distance < 0 && passTime > 0) {
        this.calcTime(passTime);
      } else if (distance > 0 && passTime > 0) {
        this.calcTime(distance);
      }
    },
    calcTime: function(dist) {
      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
    },
    /**
     * Window scroll method
     */
    windowScroll() {
      const navbar = document.getElementById("navbar");
      if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
      ) {
        navbar.classList.add("nav-sticky");
      } else {
        navbar.classList.remove("nav-sticky");
      }
    },
    /**
     * Toggle menu
     */
    toggleMenu() {
      document.getElementById("topnav-menu-content").classList.toggle("show");
    },
    nextSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getNextPage());
    },
    prevSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getPreviousPage());
    },
    login() {
      this.$keycloak.loginFn()
    },
    logout() {
      this.$keycloak.logoutFn()
    }
  }
};
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navigation fixed-top sticky" id="navbar">
      <div class="container">
        <a class="navbar-logo me-auto" href="/">
          <img src="@/assets/images/DvcAI/logo-dark.png" alt height="19" class="logo logo-dark" />
          <img src="@/assets/images/DvcAI/logo-light.png" alt height="19" class="logo logo-light" />
        </a>

        <button
          type="button"
          class="btn btn-sm px-3 font-size-16 d-lg-none header-item"
          data-toggle="collapse"
          data-target="#topnav-menu-content"
          @click="toggleMenu()"
        >
          <i class="fa fa-fw fa-bars"></i>
        </button>

        <div class="collapse navbar-collapse" id="topnav-menu-content">
          <!-- <ul
            class="navbar-nav ms-auto"
            id="topnav-menu"
            v-scroll-spy-active="{ selector: 'a.nav-link' }"
          > -->
          <ul
            class="navbar-nav ms-auto"
            id="topnav-menu"
          >
            <!-- <li class="nav-item">
              <a class="nav-link" v-scroll-to="'#home'" href="javascript: void(0);">项目</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" v-scroll-to="'#about'" href="javascript: void(0);">数据集</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" v-scroll-to="'#features'" href="javascript: void(0);">文献</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" v-scroll-to="'#roadmap'" href="javascript: void(0);">开发环境</a>
            </li> -->
            <li class="nav-item">
              <router-link class="nav-link" to="/projects">项目</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/datasets">数据集</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/projects">文献</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/projects">开发环境</router-link>
            </li>
          </ul>

          <div class="ms-lg-2 d-none d-md-block">
            <b-dropdown v-if="userInfo && userInfo.attributes" right variant="black" toggle-class="header-item" menu-class="dropdown-menu-end">
              <template v-slot:button-content>
                <img
                  class="rounded-circle header-avatar"
                  :src="avatarUrl"
                  :alt="userInfo.username"
                />
                <span v-if="userInfo" class="d-none d-xl-inline-block text-white-50 ms-1">{{ userInfo.username | ellipsis }}</span>
                <i class="mdi mdi-chevron-down text-white-50 d-none d-xl-inline-block"></i>
              </template>

              <b-dropdown-item @click="logout" class="text-danger">
                <i
                  class="bx bx-power-off font-size-16 align-middle me-1 text-danger"
                ></i>
                {{ $t("navbar.dropdown.henry.list.logout") }}
              </b-dropdown-item>
            </b-dropdown>

            <a v-else href="javascript: void(0);" class="btn btn-outline-success" @click="login">登录</a>
          </div>
        </div>
      </div>
    </nav>
    <div v-scroll-spy>
      <!-- hero section start -->
      <section class="section hero-section hero-custom-section bg-ico-hero" id="home">
        <div class="bg-overlay bg-primary"></div>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <div class="text-white-50">
                <h1
                  class="text-white fw-semibold mb-3 hero-title"
                >DvcAI: 云端协作实验室</h1>
                <p
                  class="font-size-14"
                >以开发者为中心，提供开放、协作、高效、可扩展的一站式AI产学研托管服务。无需硬件环境，通过浏览器交流学习，管理数据，协同标注，实时协作模型训练。</p>

                <div class="button-items mt-4">
                  <a v-if="!userInfo" href="javascript: void(0);" class="btn btn-success" @click="login">快速登录</a>
                  <!-- <a href="javascript: void(0);" class="btn btn-light">How it work</a> -->
                </div>
              </div>
            </div>
            <div class="col-lg-5 col-md-8 col-sm-10 ms-lg-auto">
              <div class="card overflow-hidden mb-0 mt-5 mt-lg-0">
                <div class="card-header text-center">
                  <h5 class="mb-0">ICO Countdown time</h5>
                </div>
                <div class="card-body">
                  <div class="text-center">
                    <h5>Time left to Ico :</h5>
                    <div class="mt-4">
                      <div data-countdown="2020/12/31" class="counter-number ico-countdown">
                        <div class="coming-box">
                          {{ days }}
                          <span>Days</span>
                        </div>
                        <div class="coming-box">
                          {{ hours }}
                          <span>Hours</span>
                        </div>
                        <div class="coming-box">
                          {{ minutes }}
                          <span>Minutes</span>
                        </div>
                        <div class="coming-box">
                          {{ seconds }}
                          <span>Seconds</span>
                        </div>
                      </div>
                    </div>

                    <div class="mt-4">
                      <button type="button" class="btn btn-success w-md">Get Token</button>
                    </div>

                    <div class="mt-5">
                      <h4 class="fw-semibold">1 ETH = 2235 SKT</h4>
                      <div class="clearfix mt-4">
                        <h5 class="float-end font-size-14">5234.43</h5>
                      </div>
                      <div class="progress p-1 progress-xl softcap-progress">
                        <div
                          class="progress-bar bg-info"
                          role="progressbar"
                          style="width: 15%"
                          aria-valuenow="15"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div class="progress-label">15 %</div>
                        </div>
                        <div
                          class="progress-bar progress-bar-striped progress-bar-animated"
                          role="progressbar"
                          style="width: 30%"
                          aria-valuenow="30"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div class="progress-label">30 %</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end row -->
        </div>
        <!-- end container -->
      </section>
      <!-- hero section end -->

      <!-- Footer start -->
      <footer class="landing-footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 d-none d-md-block">
              <div class="mb-4">
                <img src="@/assets/images/DvcAI/logo-light.png" alt height="20" />
              </div>

              <p
                class="mb-2"
              >{{ new Date().getFullYear() }} © DvcAI. Design & Develop by DvcLAB</p>
              <p>All our knowledge has its origins in our perceptions.</p>
            </div>
            <div class="col-lg-2 col-sm-6">
              <div class="mb-4 mb-lg-0">
                <h5 class="mb-3 footer-list-title">关于我们</h5>
                <ul class="list-unstyled footer-list-menu">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Features</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">News</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-sm-6">
              <div class="mb-4 mb-lg-0">
                <h5 class="mb-3 footer-list-title">联系我们</h5>
                <ul class="list-unstyled footer-list-menu">
                  <li>
                    <a href="#">Whitepaper</a>
                  </li>
                  <li>
                    <a href="#">Token sales</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-sm-6">
              <div class="mb-4 mb-lg-0">
                <h5 class="mb-3 footer-list-title">关注我们</h5>
                <ul class="list-unstyled footer-list-menu">
                  <li>
                    <a href="#">Tokens</a>
                  </li>
                  <li>
                    <a href="#">Roadmap</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                </ul>
              </div>
            </div>

            <!-- <div class="col-lg-3 col-sm-6">
              <div class="mb-4 mb-lg-0">
                <h5 class="mb-3 footer-list-title">Latest News</h5>
                <div class="blog-post">
                  <a href="#" class="post">
                    <div class="badge badge-soft-success font-size-11 mb-3">Cryptocurrency</div>
                    <h5 class="post-title">Donec pede justo aliquet nec</h5>
                    <p class="mb-0">
                      <i class="bx bx-calendar me-1"></i> 04 Mar, 2020
                    </p>
                  </a>
                  <a href="#" class="post">
                    <div class="badge badge-soft-success font-size-11 mb-3">Cryptocurrency</div>
                    <h5 class="post-title">In turpis, Pellentesque</h5>
                    <p class="mb-0">
                      <i class="bx bx-calendar me-1"></i> 12 Mar, 2020
                    </p>
                  </a>
                </div>
              </div>
            </div> -->
          </div>
          <!-- end row -->

          <hr class="footer-border my-5 d-md-none" />

          <div class="row d-md-none">
            <div class="col-lg-6">
              <div class="mb-4">
                <img src="@/assets/images/DvcAI/logo-light.png" alt height="20" />
              </div>

              <p
                class="mb-2"
              >{{ new Date().getFullYear() }} © DvcAI. Design & Develop by DvcLAB</p>
              <p>All our knowledge has its origins in our perceptions.</p>
            </div>
          </div>
        </div>
        <!-- end container -->
      </footer>
      <!-- Footer end -->
    </div>
  </div>
</template>
<style scoped>
.header-avatar {
  width: 36px;
  height: 36px;
}
.hero-custom-section {
  padding-top: 350px;
  padding-bottom: 250px;
}
</style>