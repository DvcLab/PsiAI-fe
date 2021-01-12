<script>
import { VueEditor } from 'vue2-editor'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

import Toolbar from './toolbar'
import LeftbarList from './leftbar-list'

/**
 * Email-read component
 */
export default {
  page: {
    title: 'Email Read',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { VueEditor, Layout, PageHeader, Toolbar, LeftbarList },
  data() {
    return {
      title: 'Email Detail',
      items: [
        {
          text: 'Shreyu',
          href: '/',
        },
        {
          text: 'Apps',
          href: '/',
        },
        {
          text: 'Email',
          href: '/',
        },
        {
          text: 'Email Detail',
          active: true,
        },
      ],
    }
  },
}
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <!-- Right Sidebar -->
    <div class="row">
      <div class="col-lg-12">
        <div class="email-container">
          <!-- Left sidebar -->
          <div class="inbox-leftbar">
            <router-link
              to="/email/compose"
              class="btn btn-danger btn-block mb-4"
              >Compose</router-link
            >

            <LeftbarList />
          </div>
          <!-- End Left sidebar -->

          <div class="inbox-rightbar p-4">
            <Toolbar />
            <div class="mt-2">
              <h5>Hi Bro, How are you?</h5>

              <hr />

              <div class="media mb-4 mt-1">
                <img
                  class="d-flex mr-2 rounded-circle avatar-sm"
                  src="@assets/images/users/avatar-2.jpg"
                  alt="Generic placeholder image"
                />
                <div class="media-body">
                  <span class="float-right">07:23 AM</span>
                  <h6 class="m-0 font-14">Jonathan Smith</h6>
                  <small class="text-muted">From: jonathan@domain.com</small>
                </div>
              </div>

              <p>
                <b>Hi Bro...</b>
              </p>
              <div class="text-muted">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem.
                </p>
                <p>
                  Nulla consequat massa quis enim. Donec pede justo, fringilla
                  vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus
                  ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis
                  eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                  Vivamus elementum semper nisi.
                </p>
                <p>
                  Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
                  eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                  dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
                  nulla ut metus varius laoreet. Quisque rutrum. Aenean
                  imperdiet. Etiam ultricies nisi vel augue. Curabitur
                  ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
                  Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                  semper libero, sit amet adipiscing sem neque sed ipsum. Nam
                  quam nunc, blandit vel, luctus pulvinar,
                </p>
              </div>

              <hr />

              <h6>
                <i class="fa fa-paperclip mb-2"></i> Attachments
                <span>(3)</span>
              </h6>

              <div class="row">
                <div class="col-xl-2 col-sm-4">
                  <a href="javascript: void(0);">
                    <img
                      src="@assets/images/attached-files/img-1.jpg"
                      alt="attachment"
                      class="img-thumbnail img-responsive"
                    />
                  </a>
                </div>
                <div class="col-xl-2 col-sm-4 mt-3 mt-sm-0">
                  <a href="javascript: void(0);">
                    <img
                      src="@assets/images/attached-files/img-2.jpg"
                      alt="attachment"
                      class="img-thumbnail img-responsive"
                    />
                  </a>
                </div>
                <div class="col-xl-2 col-sm-4 mt-3 mt-sm-0">
                  <a href="javascript: void(0);">
                    <img
                      src="@assets/images/attached-files/img-3.jpg"
                      alt="attachment"
                      class="img-thumbnail img-responsive"
                    />
                  </a>
                </div>
              </div>
            </div>
            <!-- card-box -->

            <div class="media mb-0 mt-5">
              <img
                class="d-flex mr-3 rounded-circle avatar-sm"
                src="@assets/images/users/avatar-7.jpg"
                alt="Generic placeholder image"
              />
              <div class="media-body">
                <div class="mb-2">
                  <vue-editor></vue-editor>
                </div>
              </div>
            </div>
            <div class="text-right">
              <button
                type="button"
                class="btn btn-primary btn-rounded width-sm mt-1"
                >Send</button
              >
            </div>
          </div>
          <!-- end inbox-rightbar-->

          <div class="clearfix"></div>
        </div>

        <!-- end card -->
      </div>
      <!-- end Col -->
    </div>
    <!-- End row -->
  </Layout>
</template>

<style scoped>
.quillWrapper >>> .ql-snow.ql-toolbar {
  max-height: 50px;
}
</style>
