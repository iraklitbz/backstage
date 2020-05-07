import Vue from "vue";
import App from "./App.vue";
import router from "./routes/index";
import * as firebase from "firebase";
import store from "./store";
import './static/app.scss'

Vue.config.productionTip = false;

const configOptions = {
    apiKey: "AIzaSyA4IzWBwKggZ7nAC06Gm0V5AEAz0tfC-WI",
    authDomain: "backstage-aa43c.firebaseapp.com",
    databaseURL: "https://backstage-aa43c.firebaseio.com",
    projectId: "backstage-aa43c",
    storageBucket: "backstage-aa43c.appspot.com",
    messagingSenderId: "429173794654",
    appId: "1:429173794654:web:615eb4a64345b9d5a491cf"

};

const app = firebase.initializeApp(configOptions);
export const db = app.firestore();
export const storage = app.storage();

firebase.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");