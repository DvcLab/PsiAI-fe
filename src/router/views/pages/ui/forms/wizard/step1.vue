<script>
import { required } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      username: '',
      password: '',
      repassword: '',
    }
  },
  validations: {
    username: {
      required,
    },
    password: {
      required,
    },
    repassword: {
      required,
    },
    form: ['username', 'password', 'repassword'],
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
      :class="{ 'has-error': $v.username.$error }"
    >
      <label class="col-md-3 col-form-label">Username</label>
      <div class="col-md-9">
        <input
          v-model.trim="username"
          class="form-control"
          :class="{ 'is-invalid': $v.username.$error }"
        />
        <span
          v-if="$v.username.$error && !$v.username.required"
          class="help-block invalid-feedback"
          >Username is required</span
        >
      </div>
    </div>
    <div
      class="form-group row mb-3"
      :class="{ 'has-error': $v.password.$error }"
    >
      <label class="col-md-3 col-form-label">Password</label>
      <div class="col-md-9">
        <input
          v-model.trim="password"
          class="form-control"
          :class="{ 'is-invalid': $v.password.$error }"
          type="password"
        />
        <span
          v-if="$v.password.$error && !$v.password.required"
          class="help-block invalid-feedback"
          >Password is required</span
        >
      </div>
    </div>

    <div
      class="form-group row mb-3"
      :class="{ 'has-error': $v.repassword.$error }"
    >
      <label class="col-md-3 col-form-label">Re-Password</label>
      <div class="col-md-9">
        <input
          v-model.trim="repassword"
          class="form-control"
          :class="{ 'is-invalid': $v.repassword.$error }"
        />
        <span
          v-if="$v.repassword.$error && !$v.repassword.required"
          class="help-block invalid-feedback"
          >Re-password is required</span
        >
      </div>
    </div>
  </div>
</template>
