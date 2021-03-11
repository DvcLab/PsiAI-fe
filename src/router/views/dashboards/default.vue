<script>
import Layout from "../../layouts/main";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

import Profile from "@/components/widgets/profile";
import Earning from "@/components/widgets/earning";
import Stat from "@/components/widgets/stat";
import Transaction from "@/components/widgets/transaction";
import Emailsent from "@/components/widgets/emailsent";
import SocialSource from "@/components/widgets/social-source";
import Activity from "@/components/widgets/activity";
import SellingProduct from "@/components/widgets/selling-product";

/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Dashboard",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: {
    Layout,
    PageHeader,
    Profile,
    Stat,
    Transaction,
    Earning,
    Emailsent,
    SocialSource,
    Activity,
    SellingProduct,
  },
  data() {
    return {
      title: "Dashboard",
      items: [
        {
          text: "Dashboards",
          href: "/",
        },
        {
          text: "Default",
          active: true,
        },
      ],
      statData: [
        {
          icon: "bx bx-copy-alt",
          title: "Orders",
          value: "1,235",
        },
        {
          icon: "bx bx-archive-in",
          title: "Revenue",
          value: "$35, 723",
        },
        {
          icon: "bx bx-purchase-tag-alt",
          title: "Average Price",
          value: "$16.2",
        },
      ],
      transactions: [
        {
          id: "#SK2540",
          name: "Neal Matthews",
          date: "07 Oct, 2019",
          total: "$400",
          status: "Paid",
          payment: ["fa-cc-mastercard", "Mastercard"],
          index: 1,
        },
        {
          id: "#SK2541",
          name: "Jamal Burnett",
          date: "07 Oct, 2019",
          total: "$380",
          status: "Chargeback",
          payment: ["fa-cc-visa", "Visa"],
          index: 2,
        },
        {
          id: "#SK2542",
          name: "Juan Mitchell",
          date: "06 Oct, 2019",
          total: "$384",
          status: "Paid",
          payment: ["fab fa-cc-paypal", "Paypal"],
          index: 3,
        },
        {
          id: "#SK2543",
          name: "Barry Dick",
          date: "05 Oct, 2019",
          total: "$412",
          status: "Paid",
          payment: ["fa-cc-mastercard", "Mastercard"],
          index: 4,
        },
        {
          id: "#SK2544",
          name: "Ronald Taylor",
          date: "04 Oct, 2019",
          total: "$404",
          status: "Refund",
          payment: ["fa-cc-visa", "Visa"],
          index: 5,
        },
        {
          id: "#SK2545",
          name: "Jacob Hunter",
          date: "04 Oct, 2019",
          total: "$392",
          status: "Paid",
          payment: ["fab fa-cc-paypal", "Paypal"],
          index: 6,
        },
      ],
      showModal: false,
      isLoading: false,
      fullPage: true,
      canCancel: false,
      useSlot: false,
      loader: "spinner",
      color: "#007bff",
      bgColor: "#ffffff",
      height: 128,
      width: 128,
      timeout: 3000, //ms
      fetchingStats: true,
      earningStatus: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showModal = true;
    }, 1500);
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-xl-4">
        <Profile :updating="fetchingStats" />
        <Earning :updating="earningStatus" />
      </div>
      <!-- end col -->
      <div class="col-xl-8">
        <div class="row">
          <div v-for="stat of statData" :key="stat.icon" class="col-md-4">
            <Stat :icon="stat.icon" :title="stat.title" :value="stat.value" />
          </div>
        </div>
        <Emailsent :updating="fetchingStats" />
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-xl-4">
        <SocialSource :updating="fetchingStats" />
      </div>
      <!-- end col -->
      <div class="col-xl-4">
        <Activity :updating="fetchingStats" />
      </div>
      <!-- end col -->
      <div class="col-xl-4">
        <SellingProduct :updating="fetchingStats" />
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Latest Transaction</h4>
            <!-- Transactions table -->
            <Transaction
              :transactions="transactions"
              :updating="fetchingStats"
            />
          </div>
        </div>
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <b-modal v-model="showModal" hide-footer centered header-class="border-0">
      <div class="text-center mb-4">
        <div class="avatar-md mx-auto mb-4">
          <div class="avatar-title bg-light rounded-circle text-primary h1">
            <i class="mdi mdi-email-open"></i>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-xl-10">
            <h4 class="text-primary">Subscribe !</h4>
            <p class="text-muted font-size-14 mb-4">
              Subscribe our newletter and get notification to stay update.
            </p>

            <div class="input-group bg-light rounded">
              <input
                type="email"
                class="form-control bg-transparent border-0"
                placeholder="Enter Email address"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />

              <button class="btn btn-primary" type="button" id="button-addon2">
                <i class="bx bxs-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </Layout>
</template>
