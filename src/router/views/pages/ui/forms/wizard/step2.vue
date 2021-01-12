<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
    }
  },
  validations: {
    firstName: {
      required,
    },
    lastName: {
      required,
    },
    email: {
      required,
      email,
    },
    form: ['firstName', 'lastName', 'email'],
  },
  methods: {
    validate() {
      this.$v.form.$touch()
      var isValid = !this.$v.form.$invalid
      this.$emit('on-validate', this.$data, isValid)
      return isValid
    },
  },
}
</script>

<template>
  <div>
    <div
      class="form-group row mb-3"
      :class="{ 'has-error': $v.firstName.$error }"
    >
      <label class="col-md-3 col-form-label">First name</label>
      <div class="col-md-9">
        <input
          v-model.trim="firstName"
          class="form-control"
          :class="{ 'is-invalid': $v.firstName.$error }"
        />
        <span
          v-if="$v.firstName.$error && !$v.firstName.required"
          class="help-block invalid-feedback"
          >First name is required</span
        >
      </div>
    </div>
    <div
      class="form-group row mb-3"
      :class="{ 'has-error': $v.lastName.$error }"
    >
      <label class="col-md-3 col-form-label">Last name</label>
      <div class="col-md-9">
        <input
          v-model.trim="lastName"
          class="form-control"
          :class="{ 'is-invalid': $v.lastName.$error }"
        />
        <span
          v-if="$v.lastName.$error && !$v.lastName.required"
          class="help-block invalid-feedback"
          >Last name is required</span
        >
      </div>
    </div>

    <div class="form-group row mb-3" :class="{ 'has-error': $v.email.$error }">
      <label class="col-md-3 col-form-label">Email</label>
      <div class="col-md-9">
        <input
          v-model.trim="email"
          class="form-control"
          :class="{ 'is-invalid': $v.email.$error }"
        />
        <span
          v-if="$v.email.$error && !$v.email.required"
          class="help-block invalid-feedback"
          >Email is required</span
        >
        <span
          v-if="$v.email.$error && !$v.email.email"
          class="help-block invalid-feedback"
          >This is not a valid email!</span
        >
      </div>
    </div>
  </div>
</template>
