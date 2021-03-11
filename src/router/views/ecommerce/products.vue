<script>
import VueSlideBar from "vue-slide-bar";
// import axios from "axios";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import { clothsData } from "./data-products";

/**
 * Products component
 */
export default {
  page: {
    title: "Product",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: { VueSlideBar, Layout, PageHeader },
  data() {
    return {
      clothsData: clothsData,
      title: "Product",
      items: [
        {
          text: "Ecommerce",
          href: "/",
        },
        {
          text: "Products",
          active: true,
        },
      ],
      sliderPrice: 800,
      currentPage: 1,
      discountRates: [],
    };
  },
  mounted() {
    //** Get data from product api */
    // axios
    //   .get(`http://localhost:8000/api/products`)
    //   .then((res) => {
    //     this.clothsData = res.data.data;
    //   })
    //   .catch((err) => {
    //     return err;
    //   });
  },
  methods: {
    valuechange(value) {
      this.clothsData = clothsData.filter(function (product) {
        return product.newprice <= value.currentValue;
      });
    },

    searchFilter(e) {
      const searchStr = e.target.value;
      this.clothsData = clothsData.filter((product) => {
        return (
          product.name.toLowerCase().search(searchStr.toLowerCase()) !== -1
        );
      });
    },

    discountLessFilter(e, percentage) {
      if (e === "accepted" && this.discountRates.length === 0) {
        this.clothsData = clothsData.filter((product) => {
          return product.discount < percentage;
        });
      } else {
        this.clothsData = clothsData.filter((product) => {
          return product.discount >= Math.max.apply(null, this);
        }, this.discountRates);
      }
    },

    discountMoreFilter(e, percentage) {
      if (e === "accepted") {
        this.discountRates.push(percentage);
      } else {
        this.discountRates.splice(this.discountRates.indexOf(percentage), 1);
      }
      this.clothsData = clothsData.filter((product) => {
        return product.discount >= Math.max.apply(null, this);
      }, this.discountRates);
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

    <div class="row">
      <div class="col-lg-3">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Filter</h4>

            <div>
              <h5 class="font-size-14 mb-3">Clothes</h5>
              <ul class="list-unstyled product-list">
                <li>
                  <a href="javascript: void(0);">
                    <i class="mdi mdi-chevron-right me-1"></i> T-shirts
                  </a>
                </li>
                <li>
                  <a href="javascript: void(0);">
                    <i class="mdi mdi-chevron-right me-1"></i> Shirts
                  </a>
                </li>
                <li>
                  <a href="javascript: void(0);">
                    <i class="mdi mdi-chevron-right me-1"></i> Jeans
                  </a>
                </li>
                <li>
                  <a href="javascript: void(0);">
                    <i class="mdi mdi-chevron-right me-1"></i> Jackets
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-4 pt-3">
              <h5 class="font-size-14 mb-3">Price</h5>
              <vue-slide-bar
                v-model="sliderPrice"
                :min="0"
                :max="1000"
                @dragEnd="valuechange"
              />
            </div>

            <div class="mt-4 pt-3">
              <h5 class="font-size-14 mb-3">Discount</h5>

              <b-form-checkbox
                id="productdiscountCheck1"
                class="mt-2 form-check"
                value="accepted"
                unchecked-value="not_accepted"
                @change="discountLessFilter($event, 10)"
                >Less than 10%</b-form-checkbox
              >

              <b-form-checkbox
                id="productdiscountCheck2"
                class="mt-2 form-check"
                value="accepted"
                unchecked-value="not_accepted"
                @change="discountMoreFilter($event, 10)"
                >10% or more</b-form-checkbox
              >

              <b-form-checkbox
                id="productdiscountCheck3"
                class="mt-2 form-check"
                value="accepted"
                unchecked-value="not_accepted"
                @change="discountMoreFilter($event, 20)"
                >20% or more</b-form-checkbox
              >

              <b-form-checkbox
                id="productdiscountCheck4"
                class="mt-2 form-check"
                value="accepted"
                unchecked-value="not_accepted"
                @change="discountMoreFilter($event, 30)"
                >30% or more</b-form-checkbox
              >

              <b-form-checkbox
                id="productdiscountCheck5"
                class="mt-2 form-check"
                value="accepted"
                unchecked-value="not_accepted"
                @change="discountMoreFilter($event, 40)"
                >40% or more</b-form-checkbox
              >

              <b-form-checkbox
                id="productdiscountCheck6"
                class="mt-2 form-check"
                value="accepted"
                unchecked-value="not_accepted"
                @change="discountMoreFilter($event, 50)"
                >50% or more</b-form-checkbox
              >
            </div>

            <div class="mt-4 pt-3">
              <h5 class="font-size-14 mb-3">Customer Rating</h5>
              <div>
                <b-form-checkbox
                  class="form-check"
                  id="checkbox-1"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                >
                  4
                  <i class="bx bx-star text-warning"></i> & Above
                </b-form-checkbox>

                <b-form-checkbox
                  id="checkbox-2"
                  class="mt-2 form-check"
                  name="checkbox-2"
                  value="accepted"
                  unchecked-value="not_accepted"
                >
                  3
                  <i class="bx bx-star text-warning"></i> & Above
                </b-form-checkbox>

                <b-form-checkbox
                  id="checkbox-3"
                  class="mt-2 form-check"
                  name="checkbox-3"
                  value="accepted"
                  unchecked-value="not_accepted"
                >
                  2
                  <i class="bx bx-star text-warning"></i> & Above
                </b-form-checkbox>
                <b-form-checkbox
                  id="checkbox-4"
                  class="mt-2 form-check"
                  name="checkbox-4"
                  value="accepted"
                  unchecked-value="not_accepted"
                >
                  1
                  <i class="bx bx-star text-warning"></i>
                </b-form-checkbox>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-9">
        <div class="row mb-3">
          <div class="col-xl-4 col-sm-6">
            <div class="mt-2">
              <h5>Clothes</h5>
            </div>
          </div>
          <div class="col-lg-8 col-sm-6">
            <form class="mt-4 mt-sm-0 float-sm-end d-flex align-items-center">
              <div class="search-box me-2">
                <div class="position-relative">
                  <input
                    type="text"
                    class="form-control border-0"
                    placeholder="Search..."
                    @input="searchFilter($event)"
                  />
                  <i class="bx bx-search-alt search-icon"></i>
                </div>
              </div>
              <ul class="nav nav-pills product-view-nav">
                <li class="nav-item">
                  <a class="nav-link active" href="javascript: void(0);">
                    <i class="bx bx-grid-alt"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="javascript: void(0);">
                    <i class="bx bx-list-ul"></i>
                  </a>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div class="row">
          <div
            v-for="data in clothsData"
            :key="data.id"
            class="col-xl-4 col-sm-6"
          >
            <div class="card">
              <div class="card-body">
                <div class="product-img position-relative">
                  <div v-if="data.discount" class="avatar-sm product-ribbon">
                    <span class="avatar-title rounded-circle bg-primary"
                      >-{{ data.discount }}%</span
                    >
                  </div>
                  <router-link
                    tag="a"
                    :to="`/ecommerce/product-detail/${data.id}`"
                  >
                    <img
                      :src="`${data.product}`"
                      alt
                      class="img-fluid mx-auto d-block"
                    />
                  </router-link>
                </div>
                <div class="mt-4 text-center">
                  <h5 class="mb-3 text-truncate">
                    <router-link
                      tag="a"
                      class="text-dark"
                      :to="`/ecommerce/product-detail/${data.id}`"
                      >{{ data.name }}</router-link
                    >
                  </h5>
                  <p class="text-muted">
                    <i class="bx bxs-star text-warning"></i>
                    <i class="bx bxs-star text-warning"></i>
                    <i class="bx bxs-star text-warning"></i>
                    <i class="bx bxs-star text-warning"></i>
                    <i class="bx bxs-star"></i>
                  </p>
                  <h5 class="my-0">
                    <span class="text-muted me-2">
                      <del>${{ data.oldprice }}</del>
                    </span>
                    <b>${{ data.newprice }}</b>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end row -->

        <div class="row">
          <div class="col-lg-12">
            <b-pagination
              v-if="clothsData.length > 0"
              class="justify-content-center"
              pills
              v-model="currentPage"
              :total-rows="clothsData.length"
              :per-page="6"
              aria-controls="my-table"
            ></b-pagination>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>
