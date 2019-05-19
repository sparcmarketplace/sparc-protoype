<template>
    <div id="contact">

         <ul id="nav">
        <!-- <li class="img"><router-link to="/welcome"><img alt="Sparc Logo" src="@/assets/bigs.png"/></router-link></li> -->
        <li><router-link to="/welcome">Home</router-link></li>
        <li class="about"><router-link to="/about">About</router-link></li>
	    <li class="login"><router-link to="/login">Login</router-link></li>
    </ul>
<div class="logo"> 
      <router-link to='/welcome'><img alt="Sparc Logo" src="@/assets/sparclogo1.png" /></router-link>
    </div>

<img class="found" alt="founder" src="@/assets/laurel.jpeg"/> 
<p class="inf"> Founder: <b>Laurel Djoukeng</b></p>

<div class="links">
     <a href="mailto:laurel.djoukeng@duke.edu" target="_blank"><img alt="email icon" src="@/assets/email.png"/></a> &nbsp;
     <a href="https://www.linkedin.com/in/djoukeng/" target="_blank"><img alt="linkedin Logo" src="@/assets/in.png"/></a>
</div>

<p>Founder <a href="sparc.world" target="_blank">@Sparc</a> • Founder <a href="https://angel.co/company/catalyst-network-foundation" target="_blank">@Catalyst Network Foundation</a>
 • Investment Banker <a href="https://angel.co/the-carlton-group" target="_blank">@The Carlton Group</a> <br /> •  Investment Analyst <a href="https://angel.co/pgim-real-estate" target="_blank">@PGIM Real Estate</a> 
 • MBA <a href="https://angel.co/duke-university" target="_blank">@Duke University</a> • BSc <a href="https://angel.co/hampton-university" target="_blank">@Hampton University</a></p>

</div>
</template>

<style scoped>
.links{
    width:6%;
    margin-left: 47%;
}
a{
  text-decoration: none;
}
.myButton, .myButton2{
  width: 100px;
}

#nav .login{
  margin-left: 84.05%;
}
.found{
  width: 16%;
  border-radius: 50%;
}
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
 .inf{
   font-size: 15pt;
 }
 

</style>
