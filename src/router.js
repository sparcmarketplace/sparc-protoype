import Vue from "vue";
import Router from "vue-router";
//import Home from './views/Home.vue';
import Login from "./views/Login.vue";
import SignUp from "./views/SignUp.vue";
//import SignUp2 from './views/SignUp2.vue';
import Host from "./views/Host.vue";
import UserProfile from "./views/UserProfile.vue";
import HostProfile from "./views/HostProfile.vue";
import HostDashboard from "./views/HostDashboard.vue";
import UserDashboard from "./views/UserDashboard.vue";
import Welcome from "./views/Welcome.vue";
import firebase from "firebase";
import About from "./views/About.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "*",
      redirect: "/welcome"
    },
    {
      path: "/",
      redirect: "/welcome"
    },
    {
      path: "/welcome",
      name: "Welcome",
      component: Welcome,
      meta: {
        title: 'SPARC'
      }
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: {
        title: 'SPARC'
      }
    },
    {
      path: "/sign-up",
      name: "SignUp",
      component: SignUp
    },
    {
      path: "/hostProfile",
      name: "hostProfile",
      component: HostProfile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/userProfile",
      name: "userProfile",
      component: UserProfile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/userDashboard",
      name: "userDashboard",
      component: UserDashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/hostDashboard",
      name: "hostDashboard",
      component: HostDashboard,
      meta: {
        requiresAuth: true
      }
    },
    // {
    //   path: '/sign-up-2',
    //   name: 'SignUp2',
    //   component: SignUp2
    // },
    {
      path: "/host",
      name: "Host",
      component: Host,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/home",
      name: "UserDashboard",
      component: UserDashboard,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

// import VueNavigationBar from 'vue-navigation-bar'
// Vue.component('vue-navigation-bar', VueNavigationBar)

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next("login");
  else if (!requiresAuth && currentUser) next("home");
  else next();
});

export default router;
