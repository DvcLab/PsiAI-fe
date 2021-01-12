<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

import Multiselect from 'vue-multiselect'

export default {
  page: {
    title: 'Advanced Forms',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader, Multiselect },
  data() {
    return {
      title: 'Advanced Forms',
      items: [
        {
          text: 'Shreyu',
          href: '/',
        },
        {
          text: 'Forms',
          href: '/',
        },
        {
          text: 'Advanced',
          active: true,
        },
      ],
      value: null,
      value1: null,
      options: [
        'Alaska',
        'Hawaii',
        'California',
        'Nevada',
        'Oregon',
        'Washington',
        'Arizona',
        'Colorado',
        'Idaho',
        'Montana',
        'Nebraska',
        'New Mexico',
        'North Dakota',
        'Utah',
        'Wyoming',
        'Alabama',
        'Arkansas',
        'Illinois',
        'Iowa',
      ],
      date: null,
      dateTimePicker: {
        enableTime: true,
        dateFormat: 'd-m-Y H:i',
      },
      wrap: {
        wrap: true,
        altInput: true,
        dateFormat: 'Y-m-d',
      },
      dateTime: null,
      humanFriendly: null,
      inlinepicker: +new Date(),
      min: null,
      time: null,
      format24: null,
      limit: null,
      loadtime: null,
      minmax: {
        minDate: '2020-01',
        maxDate: '2020-03',
      },
      inline: {
        inline: true,
      },
      timePicker: {
        wrap: true,
        enableTime: true,
        noCalendar: true,
      },
      format: {
        noCalendar: true,
        enableTime: true,
        dateFormat: 'H:i',
      },
      timelimit: {
        enableTime: true,
        noCalendar: true,
        dateFormat: 'H:i',
        minDate: '16:00',
        maxDate: '22:30',
      },
      preload: {
        enableTime: true,
        noCalendar: true,
        dateFormat: 'H:i',
        defaultDate: '01:45',
      },
      digit: '',
      zipcode: '',
      crazyzip: '',
      money: '',
      datemask: '',
      hour: '',
      datetime: '',
      ipaddress: '',
      cnpj: '',
      cpf: '',
      celphone: '',
      ustelephone: '',
      areacode: '',
      telephone: '',
      maxlen: '',
      data: '',
      option: '',
      textarea: '',
    }
  },
}
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <!-- select -->
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mt-0 mb-1">Select</h4>
            <p class="sub-header"
              >Vue Multiselect - A custom selection solution for Vue JS.</p
            >

            <div class="row">
              <div class="col-xl-6 col-sm-6">
                <div class="form-group mt-3 mt-sm-0">
                  <label for="default">Default</label>
                  <multiselect v-model="value" :options="options"></multiselect>
                </div>
              </div>
              <div class="col-xl-6 col-sm-6">
                <div class="form-group mt-3 mt-sm-0">
                  <label for="default">Multiple select</label>
                  <multiselect
                    v-model="value1"
                    :options="options"
                    :multiple="true"
                  ></multiselect>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
    <div class="row">
      <!-- Date picker -->
      <div class="col-lg-6">
        <div class="card-box">
          <h4 class="header-title mt-0 mb-1">Flatpickr - Date picker</h4>
          <p class="sub-header">Examples of date and time pickers</p>

          <div>
            <div class="form-group mb-3">
              <label>Basic</label>
              <flat-pickr
                v-model="date"
                class="form-control"
                placeholder="Basic datepicker"
                name="date"
              ></flat-pickr>
            </div>
            <div class="form-group mb-3">
              <label>Date & Time</label>
              <flat-pickr
                v-model="dateTime"
                :config="dateTimePicker"
                class="form-control"
                placeholder="Date and Time"
              ></flat-pickr>
            </div>
            <div class="form-group mb-3">
              <label>Human-friendly Dates</label>
              <flat-pickr
                v-model="humanFriendly"
                :config="wrap"
                class="form-control"
                placeholder="October 9, 2018"
              ></flat-pickr>
            </div>
            <div class="form-group mb-3">
              <label>MinDate and MaxDate</label>
              <flat-pickr
                v-model="min"
                class="form-control"
                :config="minmax"
                placeholder="mindate - maxdate"
              ></flat-pickr>
            </div>
            <div class="form-group mb-3">
              <label>Inline Calendar</label>
              <flat-pickr
                v-model="inlinepicker"
                :config="inline"
                class="form-control"
              ></flat-pickr>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mt-0 mb-1">Flatpickr - Time Picker</h4>
            <p class="sub-header">A lightweight and powerful time picker</p>

            <div class="form-group mb-3">
              <label>Basic</label>
              <flat-pickr
                v-model="time"
                :config="timePicker"
                class="form-control"
                placeholder="Basic timepicker"
              ></flat-pickr>
            </div>
            <div class="form-group mb-3">
              <label>24-hour Time Picker</label>
              <flat-pickr
                v-model="format24"
                :config="format"
                class="form-control"
                placeholder="16:21"
              ></flat-pickr>
            </div>
            <div class="form-group mb-3">
              <label>Time Picker w/ Limits</label>
              <flat-pickr
                v-model="limit"
                :config="timelimit"
                class="form-control"
                placeholder="Limits"
              ></flat-pickr>
            </div>
            <div class="form-group mb-3">
              <label>Preloading Time</label>
              <flat-pickr
                v-model="loadtime"
                :config="preload"
                class="form-control"
                placeholder="Pick a time"
              ></flat-pickr>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="card-box">
          <h4 class="header-title mt-0 mb-1">Input Masks</h4>
          <p class="sub-header">
            A simple masking for multiple types of input
          </p>

          <div class="row">
            <div class="col-md-6">
              <form action="#">
                <div class="form-group">
                  <label>Date</label>
                  <input
                    v-model="datemask"
                    v-mask="'##/##/####'"
                    type="text"
                    class="form-control"
                  />
                  <span class="font-13 text-muted">e.g "DD/MM/YYYY"</span>
                </div>
                <div class="form-group">
                  <label>Hour</label>
                  <input
                    v-model="hour"
                    v-mask="'##:##:##'"
                    type="text"
                    class="form-control"
                  />
                  <span class="font-13 text-muted">e.g "HH:MM:SS"</span>
                </div>
                <div class="form-group">
                  <label>Date & Hour</label>
                  <input
                    v-model="datetime"
                    v-mask="'##/##/#### ##:##:##'"
                    type="text"
                    class="form-control"
                  />
                  <span class="font-13 text-muted"
                    >e.g "DD/MM/YYYY HH:MM:SS"</span
                  >
                </div>
                <div class="form-group">
                  <label>ZIP Code</label>
                  <input
                    v-model="zipcode"
                    v-mask="'#####-###'"
                    type="text"
                    class="form-control"
                  />
                  <span class="font-13 text-muted">e.g "xxxxx-xxx"</span>
                </div>
                <div class="form-group">
                  <label>Crazy Zip Code</label>
                  <input
                    v-model="crazyzip"
                    v-mask="'#-##-##-##'"
                    type="text"
                    class="form-control"
                  />
                  <span class="font-13 text-muted">e.g "x-xx-xx-xx"</span>
                </div>
                <div class="form-group">
                  <label>Money</label>
                  <input
                    v-model="money"
                    v-mask="'###.###.###.###.###,##'"
                    type="text"
                    class="form-control"
                  />
                  <span class="font-13 text-muted">e.g "Your money"</span>
                </div>
                <div class="form-group">
                  <label>4 digit Group</label>
                  <input
                    v-model="digit"
                    v-mask="'#,####,####,####'"
                    type="text"
                    class="form-control"
                  />
                  <span class="font-13 text-muted"
                    >e.g. "x,xxxx,xxxx,xxxx"</span
                  >
                </div>
              </form>
            </div>
            <!-- end col -->

            <div class="col-md-6">
              <form action="#">
                <div class="form-group">
                  <label>Telephone</label>
                  <input
                    v-model="telephone"
                    v-mask="'####-####'"
                    type="text"
                    class="form-control"
                  />
                  <span class="font-13 text-muted">e.g "xxxx-xxxx"</span>
                </div>
                <div class="form-group">
                  <label>Telephone with Code Area</label>
                  <input
                    v-model="areacode"
                    v-mask="'(##) ####-####'"
                    type="text"
                    class="form-control"
                  />
                  <span class="font-13 text-muted">e.g "(xx) xxxx-xxxx"</span>
                </div>
                <div class="form-group">
                  <label>US Telephone</label>
                  <input
                    v-model="ustelephone"
                    v-mask="'(###) ###-####'"
                    type="text"
                    class="form-control"
                  />
                  <span class="font-13 text-muted">e.g "(xxx) xxx-xxxx"</span>
                </div>
                <div class="form-group">
                  <label>São Paulo Celphones</label>
                  <input
                    v-model="celphone"
                    v-mask="'(##) #####-####'"
                    type="text"
                    class="form-control"
                  />
                  <span class="font-13 text-muted">e.g "(xx) xxxxx-xxxx"</span>
                </div>
                <div class="form-group">
                  <label>CPF</label>
                  <input
                    v-model="cpf"
                    v-mask="'###.###.###-##'"
                    type="text"
                    class="form-control"
                  />
                  <span class="font-13 text-muted">e.g "xxx.xxx.xxxx-xx"</span>
                </div>
                <div class="form-group">
                  <label>CNPJ</label>
                  <input
                    v-model="cnpj"
                    v-mask="'##.###.###/####-##'"
                    type="text"
                    class="form-control"
                  />
                  <span class="font-13 text-muted"
                    >e.g "xx.xxx.xxx/xxxx-xx"</span
                  >
                </div>
                <div class="form-group">
                  <label>IP Address</label>
                  <input
                    v-model="ipaddress"
                    v-mask="'###.###.###.###'"
                    type="text"
                    class="form-control"
                  />
                  <span class="font-13 text-muted">e.g "xxx.xxx.xxx.xxx"</span>
                </div>
              </form>
            </div>
            <!-- end col -->
          </div>
          <!-- end row -->
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mt-0 mb-1">MaxLength</h4>
            <p class="sub-header"
              >Uses the HTML5 attribute "maxlength" to work.</p
            >

            <label class="mb-1 font-weight-medium text-muted"
              >Default usage</label
            >
            <p class="text-muted font-13"
              >The badge will show up by default when the remaining chars are 10
              or less:</p
            >
            <input
              v-model="maxlen"
              type="text"
              class="form-control"
              :maxlength="10"
            />
            <div v-if="maxlen" class="text-center">
              <p
                class="badge position-absolute"
                :class="{
                  'badge-success': maxlen.length !== 10,
                  'badge-danger': maxlen.length === 10,
                }"
                >{{ maxlen.length }} / 10</p
              >
            </div>

            <div>
              <label class="mb-1 mt-3 font-weight-medium text-muted"
                >Threshold value</label
              >
              <p class="text-muted font-13">
                Do you want the badge to show up when there are 20 chars or
                less? Use the
                <code>threshold</code>
                option:
              </p>
              <input
                v-model="data"
                type="text"
                :maxlength="25"
                class="form-control"
              />
              <div class="text-center">
                <p
                  v-if="data"
                  class="badge position-absolute"
                  :class="{
                    'badge-success': data.length !== 25,
                    'badge-danger': data.length === 25,
                  }"
                  >{{ data.length }} / 25</p
                >
              </div>
            </div>

            <div>
              <label class="mb-1 mt-3 font-weight-medium text-muted"
                >All the options</label
              >
              <p class="text-muted font-13">
                Please note: if the
                <code>alwaysShow</code> option is enabled, the
                <code>threshold</code> option is ignored.
              </p>
              <input
                v-model="option"
                type="text"
                class="form-control"
                :maxlength="25"
              />
              <div class="text-center">
                <p
                  v-if="option"
                  class="badge position-absolute"
                  :class="{
                    'badge-success': option.length !== 25,
                    'badge-danger': option.length === 25,
                  }"
                >
                  You typed
                  {{ option.length }} out of 25 chars available.
                </p>
              </div>
            </div>

            <div>
              <label class="mb-1 mt-3 font-weight-medium text-muted"
                >Textareas</label
              >
              <p class="text-muted font-13"
                >Bootstrap maxlength supports textarea as well as inputs. Even
                on old IE.</p
              >
              <textarea
                v-model="textarea"
                class="form-control"
                :maxlength="225"
                rows="3"
                placeholder="This textarea has a limit of 225 chars."
              ></textarea>
              <div class="text-center">
                <p
                  v-if="textarea"
                  class="badge position-absolute"
                  :class="{
                    'badge-success': textarea.length !== 225,
                    'badge-danger': textarea.length === 225,
                  }"
                >
                  {{ textarea.length }} / 225
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
