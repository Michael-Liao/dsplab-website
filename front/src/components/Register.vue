<template>
  <v-container>
    <v-flex xs12 sm6 offset-sm3>
      <v-alert outline color="error" icon="warning" :value="error">
        {{error}}
      </v-alert>
      <v-card>
        <!-- <v-card-media src="/static/doc-images/cards/desert.jpg" height="200px">
        </v-card-media> -->
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Register a new account</h3>
            <p>register to access a dsp wonderland</p>
          </div>
        </v-card-title>
        <v-card-text>
          <v-text-field
            label="username"
            type="text"
            v-model="username"
            :error-messages="unameErrors"
            @input="$v.username.$touch()"
            @blur="$v.username.$touch()"
            required>
          </v-text-field>
          <v-text-field
            label="email"
            type="email"
            v-model="email"
            :error-messages="emailErrors"
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
            required>
          </v-text-field>
          <v-text-field
            label="password"
            type="password"
            v-model="password"
            :error-messages="passwordErrors"
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
            required>
          </v-text-field>
          <v-text-field
            label="confirm"
            type="password"
            v-model="confirm"
            :error-messages="confirmErrors"
            @input="$v.confirm.$touch()"
            @blur="$v.confirm.$touch()">
          </v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn flat color="cyan" @click="register">register</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-container>

</template>

<script>
import backend from '@/services/api';
import { validationMixin } from 'vuelidate';
import { required, email, sameAs } from 'vuelidate/lib/validators';

export default {
  mixins: [validationMixin],
  validations: {
    username: { required },
    email: { required, email },
    password: { required },
    confirm: { sameAsPassword: sameAs('password') },
  },
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirm: '',
      error: null,
    };
  },
  methods: {
    async register() {
      this.$v.$touch(); // making sure things are validated

      if (!this.$v.$error) {
        try {
          await backend.post('register', {
            username: this.username,
            email: this.email,
            password: this.password,
          });
        } catch (e) {
          this.error = e.response.data;
        }
      }
    },
  },
  computed: {
    unameErrors() {
      const errors = [];
      if (!this.$v.username.$dirty) return errors;
      if (!this.$v.username.required) {
        errors.push('username is required');
      }

      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      if (!this.$v.email.email) {
        errors.push('Must be valid e-mail');
      } else if (!this.$v.email.required) {
        errors.push('E-mail is required');
      }

      // !this.$v.email.email && errors.push('Must be valid e-mail');
      // !this.$v.email.required && errors.push('E-mail is required');
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      if (!this.$v.password.required) {
        errors.push('need password');
      }

      return errors;
    },
    confirmErrors() {
      const errors = [];
      if (!this.$v.confirm.$dirty) return errors;
      if (!this.$v.confirm.sameAsPassword) {
        errors.push('not the same password');
      }

      return errors;
    },
  },
};
</script>

<style scoped>
</style>
