<template>
<div id="about">
     <ul id="nav">
        <!-- <li class="img"><router-link to="/welcome"><img alt="Sparc Logo" src="@/assets/bigs.png"/></router-link></li> -->
      <li class="img"><router-link to="/welcome"><img alt="Sparc Logo" src="@/assets/bigs.png"/></router-link></li>
      <li class="contact"><router-link to="/contact">Contact</router-link></li>
	    <li class="login"><router-link to="/login">Login</router-link></li>
    </ul>
<div class="logo"> 
      <router-link to='/welcome'><img alt="Sparc Logo" src="@/assets/sparclogo1.png" /></router-link>
    </div>
    <div class="info">
<p>Sparc is a people-centric marketplace enabling professionals to share and monetize their expertise 
  through face-to-face meetings and virtual engagements using a community-based, two-sided digital platform.</p> </div>



</div>
</template>
<style scoped>


.info{
  font-size: 20pt;
  margin-left: 25%;
  width: 50%;
}
.logo{
   width: 50%;
   margin-left: auto;
   margin-right: auto;
   text-align: center;

 }

</style>

