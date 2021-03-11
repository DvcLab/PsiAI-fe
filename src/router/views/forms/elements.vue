<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Form-element component
 */
export default {
  page: {
    title: "Form Elements",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Form Elements",
      items: [
        {
          text: "Forms",
          href: "/",
        },
        {
          text: "Form Elements",
          active: true,
        },
      ],
      selectedprimary: "primary",
      selectedinfo: "info",
      selecteddanger: "danger",
      selectedwarning: "warning",
      selectedsuccess: "success",
      selectedToogle: "A",
      selectedDefault: "a",
      status: "accepted",
      rightcheck: "accepted",
      primarycheck: "accepted",
      successcheck: "accepted",
      infocheck: "accepted",
      warningcheck: "accepted",
      dangercheck: "accepted",
      primaryoutlinecheck: "accepted",
      infooutlinecheck: "accepted",
      warningoutlinecheck: "accepted",
      dangeroutlinecheck: "accepted",
      checked: true,
      smchecked: true,
      lgchecked: true,
    };
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Textual inputs</h4>
            <p class="card-title-desc">
              Here are examples of
              <code>.form-control</code> applied to each textual HTML5
              <code>&lt;input&gt;</code>
              <code>type</code>.
            </p>

            <div class="row">
              <div class="col-12">
                <form class="form-horizontal" role="form">
                  <b-form-group
                    class="mb-3"
                    id="example text"
                    label-cols-lg="2"
                    label="Text"
                    label-for="text"
                  >
                    <b-form-input
                      for="text"
                      value="Artisanal kale"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    class="mb-3"
                    id="example-search"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Search"
                    label-for="search"
                  >
                    <b-form-input
                      id="search"
                      value="How do I shoot web"
                      type="search"
                      name="search"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    class="mb-3"
                    id="example-email"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Email"
                    label-for="email"
                  >
                    <b-form-input
                      id="email"
                      value="bootstrap@example.com"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    class="mb-3"
                    id="example-url"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="URL"
                    label-for="url"
                  >
                    <b-form-input
                      id="url"
                      value="https://getbootstrap.com"
                      type="url"
                      name="url"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    class="mb-3"
                    id="example-tel"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Telephone"
                    label-for="tele"
                  >
                    <b-form-input
                      id="tele"
                      value="1-(555)-555-5555"
                      type="tel"
                      name="tel"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    class="mb-3"
                    id="example-password"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Password"
                    label-for="pwd"
                  >
                    <b-form-input
                      id="pwd"
                      type="password"
                      value="password"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    class="mb-3"
                    id="example-number"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Number"
                    label-for="number"
                  >
                    <b-form-input
                      id="number"
                      value="42"
                      type="number"
                      name="number"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    class="mb-3"
                    id="example-date-time"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Date and time"
                    label-for="date-time"
                  >
                    <b-form-input
                      id="date-time"
                      value="2019-08-19T13:45:00"
                      type="datetime-local"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    class="mb-3"
                    id="example-date"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Date"
                    label-for="date"
                  >
                    <b-form-input
                      id="date"
                      value="2019-08-19"
                      type="date"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    class="mb-3"
                    id="example-month"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Month"
                    label-for="month"
                  >
                    <b-form-input
                      id="month"
                      value="2019-08"
                      type="month"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    class="mb-3"
                    id="example-week"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Week"
                    label-for="week"
                  >
                    <b-form-input
                      id="week"
                      value="2019-W33"
                      type="week"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    class="mb-3"
                    id="example-time"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Time"
                    label-for="time"
                  >
                    <b-form-input
                      id="time"
                      value="13:45:00"
                      type="time"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    class="mb-3"
                    id="example-color"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Color"
                    label-for="color"
                  >
                    <b-form-input
                      class="form-control-color mw-100"
                      id="color"
                      type="color"
                      name="color"
                      value="#556ee6"
                    ></b-form-input>
                  </b-form-group>

                  <div class="mb-3 row">
                    <label class="col-md-2 col-form-label">Select</label>
                    <div class="col-md-10">
                      <select class="form-control">
                        <option>Select</option>
                        <option>Large select</option>
                        <option>Small select</option>
                      </select>
                    </div>
                  </div>

                  <div class="row">
                    <label for="exampleDataList" class="col-md-2 col-form-label"
                      >Datalists</label
                    >
                    <div class="col-md-10">
                      <input
                        class="form-control"
                        list="datalistOptions"
                        id="exampleDataList"
                        placeholder="Type to search..."
                      />
                      <datalist id="datalistOptions">
                        <option value="San Francisco"></option>
                        <option value="New York"></option>
                        <option value="Seattle"></option>
                        <option value="Los Angeles"></option>
                        <option value="Chicago"></option>
                      </datalist>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <!-- end row -->
          </div>
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Sizing</h4>
            <p class="card-title-desc">
              Set heights using size like
              <code>lg</code> and <code>sm</code>.
            </p>
            <div>
              <div class="mb-4">
                <b-form-input
                  id="input-md"
                  placeholder="Default input"
                ></b-form-input>
              </div>
              <div class="mb-4">
                <b-form-input
                  id="input-small"
                  size="sm"
                  placeholder=".form-control-sm"
                ></b-form-input>
              </div>
              <div class="mb-4">
                <b-form-input
                  id="input-lg"
                  size="lg"
                  placeholder=".form-control-lg"
                ></b-form-input>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Range Inputs</h4>
            <p class="card-title-desc">
              Set horizontally scrollable range inputs using
              <code>.form-control-range</code>.
            </p>

            <div>
              <h5 class="font-size-14">Example</h5>
              <input
                id="formControlRange"
                type="range"
                class="form-control-range form-range"
              />
            </div>
            <div class="mt-4">
              <h5 class="font-size-14">Custom Range</h5>
              <b-form-input
                id="custom-range"
                type="range"
                class="form-range"
              ></b-form-input>

              <b-form-input
                id="customRange2"
                class="mt-4 form-range"
                type="range"
                min="0"
                max="5"
              ></b-form-input>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Checkboxes</h4>

            <div class="row">
              <div class="col-xl-3 col-sm-6">
                <div class="mt-4">
                  <h5 class="font-size-14 mb-4">
                    <i class="mdi mdi-arrow-right text-primary me-1"></i>
                    Default Checkboxes
                  </h5>
                  <b-form-checkbox
                    value="accepted"
                    unchecked-value="not_accepted"
                    class="mb-3"
                    checked
                    plain
                    >Default checkbox</b-form-checkbox
                  >

                  <b-form-checkbox
                    value="accepted"
                    unchecked-value="not_accepted"
                    class="form-check-right"
                    v-model="rightcheck"
                    plain
                    >Default checkbox Right</b-form-checkbox
                  >
                </div>
              </div>
              <div class="col-xl-3 col-sm-6">
                <div class="mt-4">
                  <h5 class="font-size-14 mb-4">
                    <i class="mdi mdi-arrow-right text-primary me-1"></i> Form
                    Checkboxes Right
                  </h5>

                  <div>
                    <div class="form-check form-check-right mb-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="formCheckRight1"
                      />
                      <label class="form-check-label" for="formCheckRight1">
                        Form Checkbox Right
                      </label>
                    </div>
                  </div>
                  <div>
                    <div class="form-check form-check-right">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="formCheckRight2"
                        checked=""
                      />
                      <label class="form-check-label" for="formCheckRight2">
                        Form Checkbox Right checked
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6">
                <div class="mt-4">
                  <h5 class="font-size-14">
                    <i class="mdi mdi-arrow-right text-primary me-1"></i> Custom
                    Checkboxes colors
                  </h5>
                  <p class="sub-header mb-4">
                    Add class
                    <code>.form-check-*</code> for a color Checkboxes
                  </p>

                  <div>
                    <div class="form-check form-check-primary mb-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="formCheckcolor1"
                        checked=""
                      />
                      <label class="form-check-label" for="formCheckcolor1">
                        Checkbox Primary
                      </label>
                    </div>

                    <div class="form-check form-check-success mb-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="formCheckcolor1"
                        checked=""
                      />
                      <label class="form-check-label" for="formCheckcolor1">
                        Checkbox Success
                      </label>
                    </div>

                    <div class="form-check form-check-info mb-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="formCheckcolor1"
                        checked=""
                      />
                      <label class="form-check-label" for="formCheckcolor1">
                        Checkbox Info
                      </label>
                    </div>

                    <div class="form-check form-check-warning mb-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="formCheckcolor1"
                        checked=""
                      />
                      <label class="form-check-label" for="formCheckcolor1">
                        Checkbox Warning
                      </label>
                    </div>

                    <div class="form-check form-check-danger mb-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="formCheckcolor1"
                        checked=""
                      />
                      <label class="form-check-label" for="formCheckcolor1">
                        Checkbox Danger
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6">
                <div class="mt-4">
                  <h5 class="font-size-14">
                    <i class="mdi mdi-arrow-right text-primary me-1"></i> Custom
                    Checkboxes Outline
                  </h5>
                  <p class="sub-header mb-4">
                    Add class
                    <code>.form-checkbox-outline</code> &amp;
                    <code>.form-check-*</code> for a color Checkboxes
                  </p>

                  <div>
                    <div>
                      <div
                        class="form-check form-checkbox-outline form-check-primary mb-3"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="customCheckcolor1"
                          checked=""
                        />
                        <label class="form-check-label" for="customCheckcolor1">
                          Checkbox Outline Primary
                        </label>
                      </div>

                      <div
                        class="form-check form-checkbox-outline form-check-success mb-3"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="customCheckcolor2"
                          checked=""
                        />
                        <label class="form-check-label" for="customCheckcolor2">
                          Checkbox Outline Success
                        </label>
                      </div>

                      <div
                        class="form-check form-checkbox-outline form-check-info mb-3"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="customCheckcolor3"
                          checked=""
                        />
                        <label class="form-check-label" for="customCheckcolor3">
                          Checkbox Outline Info
                        </label>
                      </div>

                      <div
                        class="form-check form-checkbox-outline form-check-warning mb-3"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="customCheckcolor4"
                          checked=""
                        />
                        <label class="form-check-label" for="customCheckcolor4">
                          Checkbox Outline Warning
                        </label>
                      </div>

                      <div
                        class="form-check form-checkbox-outline form-check-danger"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="customCheckcolor5"
                          checked=""
                        />
                        <label class="form-check-label" for="customCheckcolor5">
                          Checkbox Outline Danger
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Radios</h4>

            <div class="row">
              <div class="col-xl-3 col-sm-6">
                <div class="mt-4">
                  <h5 class="font-size-14 mb-4">Default Radios</h5>

                  <b-form-group>
                    <b-form-radio
                      v-model="selectedDefault"
                      class="mb-3"
                      value="a"
                      plain
                      >Default radio</b-form-radio
                    >
                    <b-form-radio
                      v-model="selectedDefault"
                      class="form-check-right"
                      value="b"
                      plain
                      >Default radio Right</b-form-radio
                    >
                  </b-form-group>
                </div>
              </div>

              <div class="col-xl-3 col-sm-6">
                <div class="mt-4">
                  <h5 class="font-size-14 mb-4">Form Radios Right</h5>
                  <div>
                    <div class="form-check form-check-right mb-3">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="formRadiosRight"
                        id="formRadiosRight1"
                        checked=""
                      />
                      <label class="form-check-label" for="formRadiosRight1">
                        Form Radio Right
                      </label>
                    </div>
                  </div>

                  <div>
                    <div class="form-check form-check-right">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="formRadiosRight"
                        id="formRadiosRight2"
                      />
                      <label class="form-check-label" for="formRadiosRight2">
                        Form Radio Right checked
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-sm-6">
                <div class="mt-4">
                  <h5 class="font-size-14">
                    <i class="mdi mdi-arrow-right text-primary mr-1"></i> Form
                    Radio colors
                  </h5>
                  <p class="sub-header mb-4">
                    Add class <code>.form-radio-* </code> for a color Radios
                  </p>

                  <div>
                    <div class="form-check form-radio-primary mb-3">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="formRadioColor1"
                        id="formRadioColor1"
                        checked=""
                      />
                      <label class="form-check-label" for="formRadioColor1">
                        Radio Primary
                      </label>
                    </div>

                    <div class="form-check form-radio-success mb-3">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="formRadioColor2"
                        id="formRadioColor2"
                        checked=""
                      />
                      <label class="form-check-label" for="formRadioColor2">
                        Radio Success
                      </label>
                    </div>

                    <div class="form-check form-radio-info mb-3">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="formRadioColor3"
                        id="formRadioColor3"
                        checked=""
                      />
                      <label class="form-check-label" for="formRadioColor3">
                        Radio Info
                      </label>
                    </div>

                    <div class="form-check form-radio-warning mb-3">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="formRadioColor4"
                        id="formRadioColor4"
                        checked=""
                      />
                      <label class="form-check-label" for="formRadioColor4">
                        Radio warning
                      </label>
                    </div>

                    <div class="form-check form-radio-danger mb-3">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="formRadioColor5"
                        id="formRadioColor5"
                        checked=""
                      />
                      <label class="form-check-label" for="formRadioColor5">
                        Radio Danger
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6">
                <div class="mt-4">
                  <h5 class="font-size-14">
                    <i class="mdi mdi-arrow-right text-primary mr-1"></i> Form
                    Radio Outline
                  </h5>
                  <p class="sub-header mb-4">
                    Add class <code>form-radio-outline</code> &amp;
                    <code>.form-radio-* </code> for a color Checkboxes
                  </p>

                  <div>
                    <div
                      class="form-check form-radio-outline form-radio-primary mb-3"
                    >
                      <input
                        class="form-check-input"
                        type="radio"
                        name="formRadio1"
                        id="formRadio1"
                        checked
                      />
                      <label class="form-check-label" for="formRadio1">
                        Radio Outline Primary
                      </label>
                    </div>
                    <div
                      class="form-check form-radio-outline form-radio-success mb-3"
                    >
                      <input
                        class="form-check-input"
                        type="radio"
                        name="formRadio2"
                        id="formRadio2"
                        checked
                      />
                      <label class="form-check-label" for="formRadio2">
                        Radio Outline Success
                      </label>
                    </div>
                    <div
                      class="form-check form-radio-outline form-radio-info mb-3"
                    >
                      <input
                        class="form-check-input"
                        type="radio"
                        name="formRadio3"
                        id="formRadio3"
                        checked
                      />
                      <label class="form-check-label" for="formRadio3">
                        Radio Outline Info
                      </label>
                    </div>
                    <div
                      class="form-check form-radio-outline form-radio-warning mb-3"
                    >
                      <input
                        class="form-check-input"
                        type="radio"
                        name="formRadio4"
                        id="formRadio4"
                        checked
                      />
                      <label class="form-check-label" for="formRadio4">
                        Radio Outline Warning
                      </label>
                    </div>
                    <div
                      class="form-check form-radio-outline form-radio-danger mb-3"
                    >
                      <input
                        class="form-check-input"
                        type="radio"
                        name="formRadio5"
                        id="formRadio5"
                        checked
                      />
                      <label class="form-check-label" for="formRadio5">
                        Radio Outline Danger
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Switches</h4>
            <p class="card-title-desc">
              A switch has the markup of a custom checkbox but uses the
              <code>.custom-switch</code> class to render a toggle switch.
              Switches also support the <code>disabled</code> attribute.
            </p>

            <div class="row">
              <div class="col-sm-6">
                <div>
                  <h5 class="font-size-14 mb-3">Switch examples</h5>
                  <div class="form-check form-switch mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                    />
                    <label class="form-check-label" for="flexSwitchCheckDefault"
                      >Default switch checkbox input</label
                    >
                  </div>
                  <div class="form-check form-switch mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckChecked"
                      checked=""
                    />
                    <label class="form-check-label" for="flexSwitchCheckChecked"
                      >Checked switch checkbox input</label
                    >
                  </div>
                  <div class="form-check form-switch mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDisabled"
                      disabled=""
                    />
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckDisabled"
                      >Disabled switch checkbox input</label
                    >
                  </div>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckCheckedDisabled"
                      checked=""
                      disabled=""
                    />
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckCheckedDisabled"
                      >Disabled checked switch checkbox input</label
                    >
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="mt-4 mt-sm-0">
                  <h5 class="font-size-14 mb-3">Switch sizes</h5>

                  <div class="form-check form-switch mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="SwitchCheckSizesm"
                      checked
                    />
                    <label class="form-check-label" for="SwitchCheckSizesm"
                      >Small Size Switch</label
                    >
                  </div>

                  <div class="form-check form-switch form-switch-md mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="SwitchCheckSizemd"
                    />
                    <label class="form-check-label" for="SwitchCheckSizemd"
                      >Medium Size Switch</label
                    >
                  </div>

                  <div class="form-check form-switch form-switch-lg mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="SwitchCheckSizelg"
                      checked
                    />
                    <label class="form-check-label" for="SwitchCheckSizelg"
                      >Large Size Switch</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">File browser</h4>

            <div>
              <h5 class="font-size-14">
                <i class="mdi mdi-arrow-right text-primary"></i> Default file
                input
              </h5>
              <div class="row">
                <div class="col-sm-6">
                  <div class="mt-3">
                    <label for="formFile" class="form-label"
                      >Default file input example</label
                    >
                    <input class="form-control" type="file" id="formFile" />
                  </div>
                </div>
              </div>
              <!-- end row -->

              <div class="row">
                <div class="col-sm-6">
                  <div class="mt-4">
                    <div>
                      <label for="formFileSm" class="form-label"
                        >Small file input example</label
                      >
                      <input
                        class="form-control form-control-sm"
                        id="formFileSm"
                        type="file"
                      />
                    </div>
                  </div>
                </div>
                <!-- end col -->
                <div class="col-sm-6">
                  <div class="mt-4">
                    <div>
                      <label for="formFileLg" class="form-label"
                        >Large file input example</label
                      >
                      <input
                        class="form-control form-control-lg"
                        id="formFileLg"
                        type="file"
                      />
                    </div>
                  </div>
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->
            </div>

            <div class="mt-4 pt-2">
              <h5 class="font-size-14 mb-0">
                <i class="mdi mdi-arrow-right text-primary"></i> Custom file
                input
              </h5>
            </div>

            <div class="row">
              <div class="col-sm-6">
                <div class="mt-4">
                  <div>
                    <label class="form-label">With Label</label>
                    <div class="input-group mb-3">
                      <label class="input-group-text" for="inputGroupFile01"
                        >Upload</label
                      >
                      <input
                        type="file"
                        class="form-control"
                        id="inputGroupFile01"
                      />
                    </div>
                    <div class="input-group">
                      <input
                        type="file"
                        class="form-control"
                        id="inputGroupFile02"
                      />
                      <label class="input-group-text" for="inputGroupFile02"
                        >Upload</label
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-6">
                <div class="mt-4">
                  <div>
                    <label class="form-label">With Button</label>
                    <div class="input-group mb-3">
                      <button
                        class="btn btn-primary"
                        type="button"
                        id="inputGroupFileAddon03"
                      >
                        Button
                      </button>
                      <input
                        type="file"
                        class="form-control"
                        id="inputGroupFile03"
                        aria-describedby="inputGroupFileAddon03"
                        aria-label="Upload"
                      />
                    </div>

                    <div class="input-group">
                      <input
                        type="file"
                        class="form-control"
                        id="inputGroupFile04"
                        aria-describedby="inputGroupFileAddon04"
                        aria-label="Upload"
                      />
                      <button
                        class="btn btn-primary"
                        type="button"
                        id="inputGroupFileAddon04"
                      >
                        Button
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>