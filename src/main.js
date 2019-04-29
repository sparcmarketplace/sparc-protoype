import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import firebase from "firebase";
import firestore from "firebase/firestore";

Vue.config.productionTip = false;

let app = null;
/* eslint-disable */
  firebase.auth().onAuthStateChanged(() => {
    if (!app) { //eslint-disable no
       app = new Vue({
        router,
        render: h => h(App)
      }).$mount('#app');
    }
  });
