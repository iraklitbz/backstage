<template>
  <div>
    <div>
     
      
      <template v-if="user.loggedIn">
        <!--<div class="nav-item">{{user.data.displayName}}</div>
            <li class="nav-item">
              <a class="nav-link" @click.prevent="signOut">Sign out</a>
            </li>-->
        <main class="py-4">
          <router-view></router-view>
        </main>
      </template>
      <template v-else>
        <div class="max-width-xs login-box">
        <form action="#" class="login-form" @submit.prevent="submit">
          <div class="text-component text-center margin-bottom-sm">
            <h1>Log in</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div v-if="error" class="alert alert-danger">{{ error }}</div>

          <div class="margin-bottom-sm">
            <label class="form-label margin-bottom-xxxs" for="inputEmail1"
              >Email</label
            >
            <input
              class="form-control width-100%"
              id="email"
              type="email"
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
              Login
            </button>
          </div>
        </form>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import navbar from "./components/Navbar";
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: null,
    };
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user",
    }),
    
  },
  components: {
    navbar,
  },
  created() {
   if(this.user.loggedIn) {
     this.$router.push("/dashboard")
     }
  },

  methods: {
  
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
          this.$router.replace({ name: "Dashboard" });
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
};
</script>
<style lang="scss">
.login-box {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.user-panel {
  position: fixed;
  top: 10px;
  right: 10px;
}
</style>
