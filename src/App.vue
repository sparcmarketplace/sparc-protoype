<template>


<div id="app">
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/> -->

  <!--  temple code and authentification information/code from : https://github.com/CaptainYouz/vue-firebase-tutorial
        tutorial: https://medium.com/@anas.mammeri/vue-2-firebase-how-to-build-a-vue-app-with-firebase-authentication-system-in-15-minutes-fdce6f289c3c?fbclid=IwAR05VLr-RRAspBL7XklJv7pgb2rONX8YKga29-5vMGCxqrwfYqDIUISeRq8
      -->
  <div id = "logo">
  <img alt = "Sparc Logo" src = "./assets/sparclogo1.png">
</div>
  <router-view />
</div>

</template>
<style>
img{
  width: 30%;
  text-align: center;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0d60f0;
}
h5 {

  color: #1cce3d
}
#nav {
  padding: 30px;
  /* a{
    font-weight: bold;
    color: #0d60f0;
    &.router-link-exact-active {
      color: #1cce3d;
    }
  } */

}
</style>
