<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Register</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>

        <form action="#" class="login-form" @submit.prevent="submit">
          <div class="text-component text-center margin-bottom-sm">
            <h1>Register user</h1>
          </div>
          <div v-if="error" class="alert alert-danger">{{ error }}</div>

          <div class="margin-bottom-sm">
            <label class="form-label margin-bottom-xxxs" for="inputEmail1"
              >Name</label
            >
            <input id="name"
            type="name"
            class="form-control width-100%"
            name="name"
            value
            required
            autofocus
            v-model="form.name"
            />
          </div>

           <div class="margin-bottom-sm">
            <label class="form-label margin-bottom-xxxs" for="inputEmail1"
              >Email</label
            >
            <input
            id="email"
                    type="email"
                    class="form-control width-100%"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="form.email"
            />
          </div>

          <div class="margin-bottom-sm">
            <div class="flex justify-between margin-bottom-xxxs">
              <label class="form-label" for="inputPassword1">Password</label>
            </div>

            <input
              class="form-control width-100%"
              id="password"
              type="password"
              name="password"
              required
              v-model="form.password"
            />
          </div>

          <div class="margin-bottom-sm">
            <button type="submit" class="btn btn--primary btn--md width-100%">
              Register
            </button>
          </div>
        </form>       
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import firebase from "firebase";
import { db } from "../main";
export default {
   
  data() {
    return {
      form: {
        name: "irakli",
        email: "ika@gmail.com",
        password: ""
      },
      error: null
    };
  },

};
</script>