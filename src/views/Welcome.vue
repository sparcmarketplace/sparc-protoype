<template>
  <div id="welcome">
    <ul id="nav">
    	<li><router-link to="/about">About</router-link></li>
	    <li class="login"><router-link to="/login">Login</router-link></li>
    </ul>

    <div class="logo"> 
      <img alt="Sparc Logo" src="@/assets/sparclogo1.png" />
    </div>

    <input id="search" type="text" placeholder="I want to learn web development..."/> <br/> <br/>

    <button class="myButton" name="world" @click="notdev"> Sparc the World </button>
    <button class="myButton2" name="login" @click="start"> Create </button>


  </div>
</template>

<script>
export default {
  name: "welcome",
  methods: {
    start: function() {
      this.$router.replace("Login");
    },
    notdev: function(){
      alert('not developed yet!')
    }
  }
};
</script>

<style scoped>
 /*  myButton code from https://www.css3buttongenerator.com/*/
 #search{
   width: 40%;
   font-size: 16pt;
   padding: 9px 12px;
   border-radius: 30px;
 }
 .logo{
   margin-top: 13%;
   width: 85%;
   display: block;
   margin-left: auto;
   margin-right: auto;
   text-align: center;

 }
/* On mouse-over, add a deeper shadow */
input:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
 #welcome{
   display: inline-block;
 }

 #nav .login{
   color: #1cce3d;
   float: right;
   margin-left: 87%;
 }
</style>
