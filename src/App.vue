<template>
      <div class="general">
      <navbar v-if='user.loggedIn' :listNumber='listNumber'></navbar>
      <router-view v-if='user.loggedIn'></router-view>
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
</template>

<script>
import navbar from "./components/Navbar";
import { mapGetters } from "vuex";
import firebase from "firebase";
import { db } from "./main";
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      listNumber: 0,
      listNumberWorkingArtist: 0,
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
  created(){

     var ref = db.collection('order');
    ref.get().then(snap => {
        this.listNumber = snap.size // will return the collection size
    });
    /*if() {
      ref.where('artist.id', '==', email).onSnapshot((snap) => {
        this.listNumberWorkingArtist = snap.size
      })
    }*/
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .currentUser.getIdTokenResult()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home",
          });
        });
    },
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
.general {
  display: flex;
  .main-content-table {
    width: calc(100% - 250px);
    padding: var(--space-sm);
  }
}
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
