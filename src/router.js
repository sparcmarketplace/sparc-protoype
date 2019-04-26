import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Login from './views/Login.vue';
import SignUp from './views/SignUp.vue';
import SignUp2 from './views/SignUp2.vue';
import Thanks from './views/Thanks.vue';
import Host from './views/Host.vue';
import UserProfile from './views/UserProfile.vue';
import HostProfile from './views/HostProfile.vue';
import HostDashboard from './views/HostDashboard.vue';
import UserDashboard from './views/UserDashboard.vue';




Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/thanks',
      name: 'Thanks',
      component: Thanks
    },
    {
      path: '/hostProfile',
      name: 'hostProfile',
      component: HostProfile
    },
    {
      path: '/userProfile',
      name: 'userProfile',
      component: UserProfile
    },
    {
      path: '/userDashboard',
      name: 'userDashboard',
      component: UserDashboard
    },
    {
      path: '/hostDashboard',
      name: 'hostDashboard',
      component: HostDashboard
    },
    {
      path: '/sign-up-2',
      name: 'SignUp2',
      component: SignUp2
    },
    {
        path: '/host',
        name: 'Host',
        component: Host,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    }

  ]
});
//
// router.beforeEach((to, from, next) => {
//   const currentUser = firebase.auth().currentUser;
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//
//   if (requiresAuth && !currentUser) next('login');
//   else if (!requiresAuth && currentUser) next('home');
//   else next();
// });

export default router;
