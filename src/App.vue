<template>
  <div id="app">
    <head>
    <title>SPARC</title> 
    </head>
    
    <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/> -->

    <!--  temple code and authentification information/code from : https://github.com/CaptainYouz/vue-firebase-tutorial
        tutorial: https://medium.com/@anas.mammeri/vue-2-firebase-how-to-build-a-vue-app-with-firebase-authentication-system-in-15-minutes-fdce6f289c3c?fbclid=IwAR05VLr-RRAspBL7XklJv7pgb2rONX8YKga29-5vMGCxqrwfYqDIUISeRq8
      -->

    <router-view />
  </div>
</template>
<style>
img {
  width: 40%;
  text-align: center;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0d60f0;
}
h5 {
  color: #1cce3d;
}
#nav {
	width: 95%;
  padding: 0px 30px;
	list-style: none;
	background: #fff;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  -ms-flex-align: center;
  -webkit-align-items: center;
  -webkit-box-align: center;

  align-items: center;
}
#nav .logout{
   float: right;
}
#nav li {
	float: left; 
  }
#nav .img{
    width: 100px;
 }
#nav li a {
	display: block;
  padding: 8px 15px;
	text-decoration: none;
	font-weight: bold;
	color: #0d60f0;
  }
#nav li a:hover {
	color: #c00;
	background-color: #fff; 
  cursor: pointer;
}





.myButton:hover {
   color: #0d60f0;
  text-decoration: none;
  background: #1cce3d;
}
.myButton:active {
	position:relative;
	top:1px;
}
.myButton2, .myButton {
  -webkit-border-radius: 10;
  -moz-border-radius: 10;
  border-radius: 10px;
  -webkit-box-shadow: 0px 1px 3px #cccccc;
  -moz-box-shadow: 0px 1px 3px #cccccc;
  box-shadow: 0px 1px 3px #cccccc;
  color: #707070;
  font-size: 15px;
  background: #fafafa;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
}
.myButton{
  margin-right: 30px;
}
.myButton2{
  margin-left: 30px;
}

.myButton2:hover {
  background: #0d60f0;
  text-decoration: none;
  color: #1cce3d;
  }
.myButton2:active {
	position:relative;
	top:1px;
}
input:focus {
    outline:none !important;
}


</style>
