<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

export default {
  page: {
    title: 'Basic Forms',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: 'Basic Forms',
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
          text: 'Basic',
          active: true,
        },
      ],
      selected: '1',
      selectedlg: '1',
      selectedsm: '1',
      checked: true,
      checkedBox: true,
    }
  },
}
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mt-0">Input Types</h4>
            <p class="sub-header">
              Most common form control, text-based input fields. Includes
              support for all HTML5 types:
              <code>text</code>, <code>password</code>, <code>datetime</code>,
              <code>datetime-local</code>, <code>date</code>,
              <code>month</code>, <code>time</code>, <code>week</code>,
              <code>number</code>, <code>email</code>, <code>url</code>,
              <code>search</code>, <code>tel</code>, and <code>color</code>.
            </p>

            <b-form class="form-horizontal">
              <div class="row">
                <div class="col">
                  <b-form-group
                    label-cols-sm="10"
                    label-cols-lg="2"
                    label="Text"
                    label-for="input-horizontal"
                  >
                    <b-form-input
                      id="input-horizontal"
                      value="Some text value..."
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label-cols-sm="10"
                    label-cols-lg="2"
                    label="Email"
                    label-for="example-email"
                  >
                    <b-form-input
                      id="example-email"
                      type="email"
                      placeholder="Email"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label-cols-sm="10"
                    label-cols-lg="2"
                    label="Password"
                    label-for="example-password"
                  >
                    <b-form-input
                      id="example-password"
                      type="password"
                      value="password"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label-cols-sm="10"
                    label-cols-lg="2"
                    label="Placeholder"
                    label-for="example-placeholder"
                  >
                    <b-form-input
                      id="example-placeholder"
                      type="text"
                      placeholder="placeholder"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label-cols-sm="10"
                    label-cols-lg="2"
                    label="Text area"
                    label-for="example-textarea"
                  >
                    <b-form-textarea
                      id="example-textarea"
                      size="lg"
                      rows="4"
                    ></b-form-textarea>
                  </b-form-group>

                  <b-form-group
                    label-cols-sm="10"
                    label-cols-lg="2"
                    label="Readonly"
                    label-for="example-Readonly"
                  >
                    <b-form-input
                      id="example-Readonly"
                      type="text"
                      readonly
                      value="Readonly value"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label-cols-sm="10"
                    label-cols-lg="2"
                    label="Disabled"
                    label-for="example-Disabled"
                  >
                    <b-form-input
                      id="example-Disabled"
                      type="text"
                      disabled
                      value="Disabled value"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label-cols-sm="10"
                    label-cols-lg="2"
                    label="Static control"
                    label-for="example-static"
                  >
                    <b-form-input
                      id="example-static"
                      type="text"
                      plaintext
                      value="email@example.com"
                    ></b-form-input>
                  </b-form-group>

                  <div class="form-group row">
                    <label class="col-lg-2 col-form-label" for="example-helping"
                      >Helping text</label
                    >
                    <div class="col-lg-10">
                      <input
                        id="example-helping"
                        type="text"
                        class="form-control"
                        placeholder="Helping text"
                      />
                      <span class="help-block">
                        <small>
                          A block of help text that breaks onto a new line and
                          may extend beyond one line.
                        </small>
                      </span>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-lg-2 col-form-label">Input Select</label>
                    <div class="col-lg-10">
                      <select class="form-control custom-select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="form-group row">
                    <label
                      class="col-lg-2 col-form-label"
                      for="example-fileinput"
                      >Default file input</label
                    >
                    <div class="col-lg-10">
                      <input
                        id="example-fileinput"
                        type="file"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-lg-2 col-form-label" for="example-date"
                      >Date</label
                    >
                    <div class="col-lg-10">
                      <input
                        id="example-date"
                        class="form-control"
                        type="date"
                        name="date"
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-lg-2 col-form-label" for="example-month"
                      >Month</label
                    >
                    <div class="col-lg-10">
                      <input
                        id="example-month"
                        class="form-control"
                        type="month"
                        name="month"
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-lg-2 col-form-label" for="example-time"
                      >Time</label
                    >
                    <div class="col-lg-10">
                      <input
                        id="example-time"
                        class="form-control"
                        type="time"
                        name="time"
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-lg-2 col-form-label" for="example-week"
                      >Week</label
                    >
                    <div class="col-lg-10">
                      <input
                        id="example-week"
                        class="form-control"
                        type="week"
                        name="week"
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-lg-2 col-form-label" for="example-number"
                      >Number</label
                    >
                    <div class="col-lg-10">
                      <input
                        id="example-number"
                        class="form-control"
                        type="number"
                        name="number"
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-lg-2 col-form-label">URL</label>
                    <div class="col-lg-10">
                      <input class="form-control" type="url" name="url" />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-lg-2 col-form-label">Search</label>
                    <div class="col-lg-10">
                      <input class="form-control" type="search" name="search" />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-lg-2 col-form-label">Tel</label>
                    <div class="col-lg-10">
                      <input class="form-control" type="tel" name="tel" />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-lg-2 col-form-label" for="example-color"
                      >Color</label
                    >
                    <div class="col-lg-10">
                      <input
                        id="example-color"
                        class="form-control"
                        type="color"
                        name="color"
                        value="#5369f8"
                      />
                    </div>
                  </div>

                  <div class="form-group row mb-0">
                    <label class="col-lg-2 col-form-label" for="example-range"
                      >Range</label
                    >
                    <div class="col-lg-10">
                      <b-form-input
                        id="range-1"
                        :v-model="5"
                        type="range"
                        min="0"
                        max="10"
                      ></b-form-input>
                    </div>
                  </div>
                </div>
              </div>
            </b-form>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mt-0">Select menu</h4>
            <p class="sub-header">
              Custom
              <code>&lt;select&gt;</code> menus need only a custom class,
              <code>.custom-select</code> to trigger the custom styles.
            </p>

            <b-form-select v-model="selected" class="mb-2">
              <option value="1">Open this select menu</option>
              <option value="2">One</option>
              <option value="3">Two</option>
              <option value="4">Three</option>
            </b-form-select>
            <b-form-select v-model="selectedlg" size="lg" class="mb-2">
              <option value="1">Open this select menu</option>
              <option value="2">One</option>
              <option value="3">Two</option>
              <option value="4">Three</option>
            </b-form-select>
            <b-form-select v-model="selectedsm" size="sm" class="mb-2">
              <option value="1">Open this select menu</option>
              <option value="2">One</option>
              <option value="3">Two</option>
              <option value="4">Three</option>
            </b-form-select>

            <div class="mt-4">
              <h4 class="header-title">Switches</h4>
              <p class="sub-header">
                A switch has the markup of a custom checkbox but uses the
                <code>.custom-switch</code> class to render a toggle switch.
                Switches also support the <code>disabled</code> attribute.
              </p>
              <b-form-checkbox v-model="checked" name="check-button" switch>
                Toggle this switch element
              </b-form-checkbox>
              <b-form-checkbox name="check-button" switch disabled>
                Disabled switch element
              </b-form-checkbox>
            </div>
          </div>
        </div>
      </div>
      <!-- end col -->
      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mt-0">Checkboxes</h4>
            <div class="mt-3">
              <b-form-checkbox v-model="checkedBox"
                >Check this custom checkbox</b-form-checkbox
              >
              <b-form-checkbox class="mt-2"
                >Check this custom checkbox</b-form-checkbox
              >
            </div>

            <h4 class="font-size-15 mt-3">Radios</h4>
            <div class>
              <div class="custom-control custom-radio mb-2">
                <input
                  id="customRadio1"
                  type="radio"
                  name="customRadio"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="customRadio1">
                  Toggle this custom radio
                </label>
              </div>
              <div class="custom-control custom-radio">
                <input
                  id="customRadio2"
                  type="radio"
                  name="customRadio"
                  class="custom-control-input"
                  checked
                />
                <label class="custom-control-label" for="customRadio2">
                  Or toggle this other custom radio
                </label>
              </div>
            </div>

            <h4 class="font-size-15 mt-3">Disabled</h4>
            <b-form-checkbox class="mb-2" disabled
              >Check this custom checkbox</b-form-checkbox
            >
            <b-form-radio disabled>
              Toggle this custom radio
            </b-form-radio>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="mb-3 header-title mt-0">Basic Example</h4>

            <form>
              <b-form-group
                id="input-group-1"
                label="Email address"
                label-for="input-1"
                description="We'll never share your email with anyone else."
              >
                <b-form-input
                  id="input-1"
                  type="email"
                  required
                  placeholder="Enter email"
                ></b-form-input>
              </b-form-group>
              <b-form-group label="Password">
                <b-form-input
                  type="password"
                  placeholder="Password"
                ></b-form-input>
              </b-form-group>

              <div class="form-group mb-3">
                <div class="custom-control custom-checkbox">
                  <input
                    id="checkmeout0"
                    type="checkbox"
                    class="custom-control-input"
                  />
                  <label class="custom-control-label" for="checkmeout0"
                    >Check me out !</label
                  >
                </div>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
          <!-- end card-body-->
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->

      <div class="col-xl-6">
        <div class="card">
          <div class="card-body">
            <h4 class="mb-3 header-title mt-0">Horizontal form</h4>

            <form class="form-horizontal">
              <b-row class="mb-3">
                <b-col sm="3">
                  <label for="inputEmail3">Email</label>
                </b-col>
                <b-col sm="9">
                  <b-form-input
                    id="inputEmail3"
                    placeholder="Email"
                  ></b-form-input>
                </b-col>
              </b-row>
              <b-row class="mb-3">
                <b-col sm="3">
                  <label for="inputPassword3">Password</label>
                </b-col>
                <b-col sm="9">
                  <b-form-input
                    id="inputPassword3"
                    type="password"
                    placeholder="Password"
                  ></b-form-input>
                </b-col>
              </b-row>
              <b-row class="mb-3">
                <b-col sm="3">
                  <label for="inputPassword5">Re Password</label>
                </b-col>
                <b-col sm="9">
                  <b-form-input
                    id="inputPassword5"
                    type="password"
                    placeholder="Retype Password"
                  ></b-form-input>
                </b-col>
              </b-row>
              <div class="form-group row mb-3 justify-content-end">
                <div class="col-9">
                  <div class="custom-control custom-checkbox">
                    <input
                      id="checkmeout"
                      type="checkbox"
                      class="custom-control-input"
                    />
                    <label class="custom-control-label" for="checkmeout"
                      >Check me out !</label
                    >
                  </div>
                </div>
              </div>
              <div class="form-group mb-0 justify-content-end row">
                <div class="col-9">
                  <button type="submit" class="btn btn-info">Sign in</button>
                </div>
              </div>
            </form>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->

    <!-- Inline Form -->
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <h4 class="mb-1 header-title mt-0">Inline Form</h4>

            <p class="sub-header">
              Use the
              <code>.form-inline</code> class to display a series of labels,
              form controls, and buttons on a single horizontal row. Form
              controls within inline forms vary slightly from their default
              states. Controls only appear inline in viewports that are at least
              576px wide to account for narrow viewports on mobile devices.
            </p>

            <form class="form-inline">
              <div class="form-group mr-3">
                <label for="staticEmail2" class="sr-only">Email</label>
                <input
                  id="staticEmail2"
                  type="text"
                  readonly
                  class="form-control-plaintext"
                  value="email@example.com"
                />
              </div>
              <div class="form-group mr-3">
                <label for="inputPassword2" class="sr-only">Password</label>
                <input
                  id="inputPassword2"
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>
              <button type="submit" class="btn btn-primary"
                >Confirm identity</button
              >
            </form>

            <h6 class="font-13 mt-3">Auto-sizing</h6>

            <b-form inline>
              <label class="sr-only" for="inline-form-input-name">Name</label>
              <b-input
                id="inline-form-input-name"
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="Jane Doe"
              ></b-input>

              <label class="sr-only" for="inline-form-input-username"
                >Username</label
              >
              <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
                <b-input
                  id="inline-form-input-username"
                  placeholder="Username"
                ></b-input>
              </b-input-group>

              <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0"
                >Remember me</b-form-checkbox
              >

              <b-button variant="primary">Submit</b-button>
            </b-form>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>
