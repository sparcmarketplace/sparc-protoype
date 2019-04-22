import  Vue  from 'vue'
import App from './App.vue'
import  router  from './router'
import store from './store'
import './registerServiceWorker'
import firebase from 'firebase';


Vue.config.productionTip = false

  // Initialize firebase
  var config = {
    apiKey: "AIzaSyBM5ivCG_Z6KGmSBauJlfPU9wa-_U_rOY8",
    authDomain: "sparc-9cb68.firebaseapp.com",
    databaseURL: "https://sparc-9cb68.firebaseio.com",
    projectId: "sparc-9cb68",
    storageBucket: "sparc-9cb68.appspot.com",
    messagingSenderId: "762881325644"
  };

var app = new Vue({
 router,
 render: h => h(App)
}).$mount('#app');


  firebase.initializeApp(config);
  /* eslint-disable */
  firebase.auth().onAuthStateChanged(() => {
    if (!app) { //eslint-disable no
       app = new Vue({
        router,
        render: h => h(App)
      }).$mount('#app');
    }
  });
