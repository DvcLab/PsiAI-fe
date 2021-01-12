<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

import {
  required,
  email,
  minLength,
  sameAs,
  maxLength,
  minValue,
  maxValue,
  numeric,
  url,
  alphaNum,
} from 'vuelidate/lib/validators'

export default {
  page: {
    title: 'Forms Validation',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: 'Forms Validation',
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
          text: 'Validation',
          active: true,
        },
      ],
      form: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      horizontal: {
        email: '',
        password: '',
        confirmPassword: '',
        website: '',
      },
      range: {
        minlen: '',
        maxlength: '',
        between: '',
        minval: '',
        maxval: '',
        rangeval: '',
        expr: '',
      },
      typeform: {
        name: '',
        password: '',
        confirmPassword: '',
        email: '',
        url: '',
        digit: '',
        number: '',
        alphanum: '',
        textarea: '',
      },
      submit: false,
      submitted: false,
      formsubmit: false,
      typesubmit: false,
    }
  },
  validations: {
    form: {
      name: { required },
      email: { required, email },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs('password') },
    },
    horizontal: {
      email: { required, email },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs('password') },
      website: { required, url },
    },
    range: {
      minlen: { required, minLength: minLength(6) },
      maxlength: { required, maxLength: maxLength(6) },
      between: { required, minLength: minLength(5), maxLength: maxLength(10) },
      minval: { required, minValue: minValue(6) },
      maxval: { required, maxValue: maxValue(6) },
      rangeval: { required, minValue: minValue(6), maxValue: maxValue(100) },
      expr: { required },
    },
    typeform: {
      name: { required },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs('password') },
      email: { required, email },
      url: { required, url },
      digit: { required, numeric },
      number: { required, numeric },
      alphanum: { required, alphaNum },
      textarea: { required },
    },
  },
  methods: {
    /**
     * Basic Form submit
     */
    handleSubmit(e) {
      this.submitted = true

      // stop here if form is invalid
      this.$v.$touch()
    },
    /**
     * Horizontal form submit
     */
    horizontalForm(e) {
      this.formsubmit = true
      // stop here if form is invalid
      this.$v.$touch()
    },
    /**
     * Range validation form submit
     */
    rangeform(e) {
      this.submit = true
      // stop here if form is invalid
      this.$v.$touch()
    },
    /**
     * Validation type submit
     */
    typeForm(e) {
      this.typesubmit = true
      // stop here if form is invalid
      this.$v.$touch()
    },
  },
}
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mt-0 mb-1">Basic Form</h4>
            <p class="sub-header"
              >Vuelidate is a validation library in Vue. It helps you provide
              your users with feedback on their form submission before sending
              it to your server.</p
            >
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="name">
                  User Name
                  <span class="text-danger">*</span>
                </label>
                <input
                  id="username"
                  v-model="form.name"
                  name="username"
                  class="form-control"
                  :class="{ 'is-invalid': submitted && $v.form.name.$error }"
                  type="text"
                  placeholder="Enter user name"
                />
                <div
                  v-if="submitted && !$v.form.name.required"
                  class="invalid-feedback"
                  >This value is required.</div
                >
              </div>
              <div class="form-group">
                <label>
                  Email address
                  <span class="text-danger">*</span>
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  name="email"
                  class="form-control"
                  :class="{ 'is-invalid': submitted && $v.form.email.$error }"
                  placeholder="Enter email"
                />
                <div
                  v-if="submitted && $v.form.email.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.form.email.required"
                    >This value is required.</span
                  >
                  <span v-if="!$v.form.email.email"
                    >This value should be a valid email.</span
                  >
                </div>
              </div>
              <div class="form-group">
                <label>
                  Password
                  <span class="text-danger">*</span>
                </label>
                <input
                  v-model="form.password"
                  type="password"
                  name="password"
                  class="form-control"
                  :class="{
                    'is-invalid': submitted && $v.form.password.$error,
                  }"
                  placeholder="Password"
                />
                <div
                  v-if="submitted && $v.form.password.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.form.password.required"
                    >This value is required.</span
                  >
                  <span v-if="!$v.form.password.minLength"
                    >Password must be at least 6 characters.</span
                  >
                </div>
              </div>
              <div class="form-group">
                <label for="passWord2">
                  Confirm Password
                  <span class="text-danger">*</span>
                </label>
                <input
                  id="passWord2"
                  v-model="form.confirmPassword"
                  type="password"
                  name="confirmPassword"
                  class="form-control"
                  :class="{
                    'is-invalid': submitted && $v.form.confirmPassword.$error,
                  }"
                  placeholder="Password"
                />
                <div
                  v-if="submitted && $v.form.confirmPassword.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.form.confirmPassword.required"
                    >This value is required.</span
                  >
                  <span v-else-if="!$v.form.confirmPassword.sameAsPassword"
                    >This value should be the same.</span
                  >
                </div>
              </div>
              <div class="form-group">
                <div class="checkbox checkbox-purple">
                  <input id="checkbox6a" type="checkbox" />
                  <label for="checkbox6a">Remember me</label>
                </div>
              </div>

              <div class="form-group text-right m-b-0">
                <button class="btn btn-primary" type="submit">Submit</button>
                <button type="reset" class="btn btn-secondary m-l-5 ml-1"
                  >Cancel</button
                >
              </div>
            </form>
          </div>
        </div>
        <!-- end card--->
      </div>
      <!-- end col -->

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mt-0 mb-1">Horizontal Form</h4>
            <p class="text-muted font-14 m-b-20"
              >Vuelidate is a validation library in Vue. It helps you provide
              your users with feedback on their form submission before sending
              it to your server.</p
            >

            <form @submit.prevent="horizontalForm">
              <div class="form-group row">
                <label class="col-4 col-form-label">
                  Email
                  <span class="text-danger">*</span>
                </label>
                <div class="col-7">
                  <input
                    v-model="horizontal.email"
                    type="email"
                    name="email"
                    class="form-control"
                    :class="{
                      'is-invalid': formsubmit && $v.horizontal.email.$error,
                    }"
                    placeholder="Enter email"
                  />
                  <div
                    v-if="formsubmit && $v.horizontal.email.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.horizontal.email.required"
                      >This value is required.</span
                    >
                    <span v-if="!$v.horizontal.email.email"
                      >This value should be a valid email.</span
                    >
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-4 col-form-label">
                  Password
                  <span class="text-danger">*</span>
                </label>
                <div class="col-7">
                  <input
                    v-model="horizontal.password"
                    type="password"
                    name="password"
                    class="form-control"
                    :class="{
                      'is-invalid': formsubmit && $v.horizontal.password.$error,
                    }"
                    placeholder="Password"
                  />
                  <div
                    v-if="formsubmit && $v.horizontal.password.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.horizontal.password.required"
                      >This value is required.</span
                    >
                    <span v-if="!$v.horizontal.password.minLength"
                      >Password must be at least 6 characters.</span
                    >
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-4 col-form-label">
                  Confirm Password
                  <span class="text-danger">*</span>
                </label>
                <div class="col-7">
                  <input
                    v-model="horizontal.confirmPassword"
                    type="password"
                    name="confirmPassword"
                    class="form-control"
                    :class="{
                      'is-invalid':
                        formsubmit && $v.horizontal.confirmPassword.$error,
                    }"
                    placeholder="Password"
                  />
                  <div
                    v-if="formsubmit && $v.horizontal.confirmPassword.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.horizontal.confirmPassword.required"
                      >This value is required.</span
                    >
                    <span
                      v-else-if="!$v.horizontal.confirmPassword.sameAsPassword"
                      >This value should be the same.</span
                    >
                  </div>
                </div>
              </div>

              <div class="form-group row">
                <label for="webSite" class="col-4 col-form-label">
                  Web Site
                  <span class="text-danger">*</span>
                </label>
                <div class="col-7">
                  <input
                    id="website"
                    v-model="horizontal.website"
                    type="text"
                    name="website"
                    class="form-control"
                    :class="{
                      'is-invalid': formsubmit && $v.horizontal.website.$error,
                    }"
                    placeholder="URL"
                  />
                  <div
                    v-if="formsubmit && $v.horizontal.website.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.horizontal.website.required"
                      >This value is required.</span
                    >
                    <span v-if="!$v.horizontal.website.url"
                      >This value should be a valid url.</span
                    >
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-8 offset-4">
                  <div class="checkbox checkbox-purple">
                    <input id="checkbox6" type="checkbox" />
                    <label for="checkbox6">Remember me</label>
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-8 offset-4">
                  <button type="submit" class="btn btn-primary"
                    >Register</button
                  >
                  <button type="reset" class="btn btn-secondary m-l-5 ml-1"
                    >Cancel</button
                  >
                </div>
              </div>
            </form>
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
          <div class="card-box">
            <h4 class="header-title mt-0 mb-1">Validation type</h4>
            <p class="text-muted font-14 m-b-20"
              >Vuelidate is a validation library in Vue. It helps you provide
              your users with feedback on their form submission before sending
              it to your server.</p
            >

            <form action="#" @submit.prevent="typeForm">
              <div class="form-group">
                <label>Required</label>
                <input
                  v-model="typeform.name"
                  type="text"
                  class="form-control"
                  placeholder="Type something"
                  name="name"
                  :class="{
                    'is-invalid': typesubmit && $v.typeform.name.$error,
                  }"
                />
                <div
                  v-if="typesubmit && $v.typeform.name.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.typeform.name.required"
                    >This value is required.</span
                  >
                </div>
              </div>

              <div class="form-group">
                <label>Equal To</label>
                <div>
                  <input
                    v-model="typeform.password"
                    type="password"
                    name="password"
                    class="form-control"
                    :class="{
                      'is-invalid': typesubmit && $v.typeform.password.$error,
                    }"
                    placeholder="Password"
                  />
                  <div
                    v-if="typesubmit && $v.typeform.password.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.typeform.password.required"
                      >This value is required.</span
                    >
                    <span v-if="!$v.typeform.password.minLength"
                      >Password must be at least 6 characters.</span
                    >
                  </div>
                </div>
                <div class="mt-2">
                  <input
                    v-model="typeform.confirmPassword"
                    type="password"
                    name="confirmPassword"
                    class="form-control"
                    :class="{
                      'is-invalid':
                        typesubmit && $v.typeform.confirmPassword.$error,
                    }"
                    placeholder="Password"
                  />
                  <div
                    v-if="typesubmit && $v.typeform.confirmPassword.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.typeform.confirmPassword.required"
                      >This value is required.</span
                    >
                    <span
                      v-else-if="!$v.typeform.confirmPassword.sameAsPassword"
                      >This value should be the same.</span
                    >
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label>E-Mail</label>
                <div>
                  <input
                    v-model="typeform.email"
                    type="email"
                    name="email"
                    class="form-control"
                    :class="{
                      'is-invalid': typesubmit && $v.typeform.email.$error,
                    }"
                    placeholder="Enter a valid email"
                  />
                  <div
                    v-if="typesubmit && $v.typeform.email.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.typeform.email.required"
                      >This value is required.</span
                    >
                    <span v-if="!$v.typeform.email.email"
                      >This value should be a valid email.</span
                    >
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>URL</label>
                <div>
                  <input
                    v-model="typeform.url"
                    type="url"
                    name="url"
                    class="form-control"
                    placeholder="URL"
                    :class="{
                      'is-invalid': typesubmit && $v.typeform.url.$error,
                    }"
                  />
                  <div
                    v-if="typesubmit && $v.typeform.url.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.typeform.url.required"
                      >This value is required.</span
                    >
                    <span v-if="!$v.typeform.url.url"
                      >This value should be a valid url.</span
                    >
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Digits</label>
                <div>
                  <input
                    v-model="typeform.digit"
                    type="text"
                    name="digit"
                    class="form-control"
                    :class="{
                      'is-invalid': typesubmit && $v.typeform.digit.$error,
                    }"
                    placeholder="Enter only digits"
                  />
                  <div
                    v-if="typesubmit && $v.typeform.digit.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.typeform.digit.required"
                      >This value is required.</span
                    >
                    <span v-if="!$v.typeform.digit.numeric"
                      >This value should be digits.</span
                    >
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Number</label>
                <div>
                  <input
                    v-model="typeform.number"
                    type="text"
                    name="number"
                    class="form-control"
                    :class="{
                      'is-invalid': typesubmit && $v.typeform.number.$error,
                    }"
                    placeholder="Enter only numbers"
                  />
                  <div
                    v-if="typesubmit && $v.typeform.number.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.typeform.number.required"
                      >This value is required.</span
                    >
                    <span v-if="!$v.typeform.number.numeric"
                      >This value should be a valid number.</span
                    >
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Alphanumeric</label>
                <div>
                  <input
                    v-model="typeform.alphanum"
                    type="text"
                    name="alphanum"
                    class="form-control"
                    :class="{
                      'is-invalid': typesubmit && $v.typeform.alphanum.$error,
                    }"
                    placeholder="Enter alphanumeric value"
                  />
                  <div
                    v-if="typesubmit && $v.typeform.alphanum.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.typeform.alphanum.required"
                      >This value is required.</span
                    >
                    <span v-if="!$v.typeform.alphanum.alphaNum"
                      >This value should be alphanumeric.</span
                    >
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Textarea</label>
                <div>
                  <textarea
                    v-model="typeform.textarea"
                    class="form-control"
                    name="textarea"
                    :class="{
                      'is-invalid': typesubmit && $v.typeform.textarea.$error,
                    }"
                  ></textarea>
                  <div
                    v-if="typesubmit && $v.typeform.textarea.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.typeform.textarea.required"
                      >This value is required.</span
                    >
                  </div>
                </div>
              </div>
              <div class="form-group mb-0">
                <div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                  <button type="reset" class="btn btn-secondary m-l-5 ml-1"
                    >Cancel</button
                  >
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- end col-->

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mt-0 mb-1">Range validation</h4>
            <p class="text-muted font-14 m-b-20"
              >Vuelidate is a validation library in Vue. It helps you provide
              your users with feedback on their form submission before sending
              it to your server.</p
            >

            <form action="#" @submit.prevent="rangeform">
              <div class="form-group">
                <label>Min Length</label>
                <div>
                  <input
                    v-model="range.minlen"
                    type="text"
                    name="minlen"
                    class="form-control"
                    :class="{ 'is-invalid': submit && $v.range.minlen.$error }"
                    placeholder="Min 6 chars."
                  />
                  <div
                    v-if="submit && $v.range.minlen.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.range.minlen.required"
                      >This value is required.</span
                    >
                    <span v-if="!$v.range.minlen.minLength"
                      >This value is too short. It should have 6 characters or
                      more.</span
                    >
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Max Length</label>
                <div>
                  <input
                    v-model="range.maxlength"
                    type="text"
                    class="form-control"
                    name="maxlength"
                    :class="{
                      'is-invalid': submit && $v.range.maxlength.$error,
                    }"
                    placeholder="Max 6 chars."
                  />
                  <div
                    v-if="submit && $v.range.maxlength.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.range.maxlength.required"
                      >This value is required.</span
                    >
                    <span v-if="!$v.range.maxlength.maxLength"
                      >This value is too long. It should have 6 characters or
                      fewer.</span
                    >
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Range Length</label>
                <div>
                  <input
                    v-model="range.between"
                    type="text"
                    class="form-control"
                    name="between"
                    :class="{ 'is-invalid': submit && $v.range.between.$error }"
                    placeholder="Text between 5 - 10 chars length"
                  />
                  <div
                    v-if="submit && $v.range.between.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.range.between.required"
                      >This value is required.</span
                    >
                    <span v-if="!$v.range.between.maxLength"
                      >This value length is invalid. It should be between 5 and
                      10 characters long.</span
                    >
                    <span v-if="!$v.range.between.minLength"
                      >This value length is invalid. It should be between 5 and
                      10 characters long.</span
                    >
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Min Value</label>
                <div>
                  <input
                    v-model="range.minval"
                    type="text"
                    name="minval"
                    class="form-control"
                    :class="{ 'is-invalid': submit && $v.range.minval.$error }"
                    placeholder="Min value is 6"
                  />
                  <div
                    v-if="submit && $v.range.minval.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.range.minval.required"
                      >This value is required.</span
                    >
                    <span v-if="!$v.range.minval.minValue"
                      >This value should be greater than or equal to 6.</span
                    >
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Max Value</label>
                <div>
                  <input
                    v-model="range.maxval"
                    type="text"
                    class="form-control"
                    name="maxval"
                    :class="{ 'is-invalid': submit && $v.range.maxval.$error }"
                    placeholder="Max value is 6"
                  />
                  <div
                    v-if="submit && $v.range.maxval.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.range.maxval.required"
                      >This value is required.</span
                    >
                    <span v-if="!$v.range.maxval.maxValue"
                      >This value should be lower than or equal to 6.</span
                    >
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Range Value</label>
                <div>
                  <input
                    v-model="range.rangeval"
                    type="text"
                    class="form-control"
                    name="rangeval"
                    :class="{
                      'is-invalid': submit && $v.range.rangeval.$error,
                    }"
                    placeholder="Number between 6 - 100"
                  />
                  <div
                    v-if="submit && $v.range.rangeval.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.range.rangeval.required"
                      >This value is required.</span
                    >
                    <span v-if="!$v.range.rangeval.minValue"
                      >This value should be between 6 and 100.</span
                    >
                    <span v-if="!$v.range.rangeval.maxValue"
                      >This value should be between 6 and 100.</span
                    >
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Regular Exp</label>
                <div>
                  <input
                    v-model="range.expr"
                    type="text"
                    class="form-control"
                    name="expr"
                    :class="{ 'is-invalid': submit && $v.range.expr.$error }"
                    placeholder="Hex. Color"
                  />
                  <div
                    v-if="submit && $v.range.expr.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.range.expr.required"
                      >This value is required.</span
                    >
                  </div>
                </div>
              </div>

              <div class="form-group mb-0">
                <div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                  <button type="reset" class="btn btn-secondary m-l-5 ml-1"
                    >Cancel</button
                  >
                </div>
              </div>
            </form>
          </div>
        </div>
        <!-- end card-->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>
