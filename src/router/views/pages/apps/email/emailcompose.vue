<script>
import { VueEditor } from 'vue2-editor'

import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

import LeftbarList from './leftbar-list'

/**
 * Email-compose component
 */
export default {
  page: {
    title: 'Email Compose',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { VueEditor, Layout, PageHeader, LeftbarList },
  data() {
    return {
      title: 'Compose Email',
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
          text: 'Compose Email',
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
    <div class="row">
      <div class="col-lg-12">
        <div class="email-container">
          <!-- Left sidebar -->
          <div class="inbox-leftbar">
            <router-link to="/email/inbox" class="btn btn-danger btn-block mb-4"
              >Inbox</router-link
            >
            <LeftbarList />
          </div>
          <!-- End Left sidebar -->

          <div class="inbox-rightbar p-4">
            <div>
              <form>
                <div class="form-group">
                  <input type="email" class="form-control" placeholder="To" />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Subject"
                  />
                </div>

                <div class="form-group">
                  <vue-editor></vue-editor>
                </div>

                <div class="form-group pt-2">
                  <div class="text-right">
                    <button type="button" class="btn btn-success mr-1">
                      <i class="uil uil-envelope-edit"></i> Draft
                    </button>
                    <button class="btn btn-primary">
                      <span>Send</span>
                      <i class="uil uil-message ml-2"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <!-- end card-->
          </div>
          <!-- end inbox-rightbar-->

          <div class="clearfix"></div>
        </div>
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
