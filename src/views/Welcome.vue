<template>
  <div id="welcome">
    <ul id="nav">
      <li class="img"><router-link to="/welcome"><img alt="Sparc Logo" src="@/assets/bigs.png"/></router-link></li>
    	<li><router-link to="/about">About</router-link></li>
      <li class="contact"><router-link to="/contact">Contact</router-link></li>
	    <li class="login"><router-link to="/login">Login</router-link></li>
    </ul>

    <div class="logo"> 
      <img alt="Sparc Logo" src="@/assets/sparclogo1.png" />
    </div>

    <input id="search" type="text" /> <br/> <br/>

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
   width: 45%;
   font-size: 13pt;
   padding: 15px 20px;
   border-radius: 30px;
   border: 100px;
 }
 input{
     box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.25);

 }
 .logo{
   margin-top: 9%;
   width: 75%;
   display: block;
   margin-left: auto;
   margin-right: auto;
   text-align: center;

 }
/* On mouse-over, add a deeper shadow */
input:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
}
</style>
