import  Vue  from 'vue'
import App from './App.vue'
import  router  from './router'
import store from './store'
import './registerServiceWorker'
import firebase from 'firebase';


Vue.config.productionTip = false

  // Initialize firebase
var config ={
    apiKey: "AIzaSyBPpu3YTI059iytarTnA6vAdxeWeXeTiWs",
    authDomain: "sparc-demo.firebaseapp.com",
    databaseURL: "https://sparc-demo.firebaseio.com",
    projectId: "sparc-demo",
    storageBucket: "",
    messagingSenderId: "1007143481756"
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
