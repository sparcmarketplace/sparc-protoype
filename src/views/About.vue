<template>
<div id="about">
     <ul id="nav">
        <!-- <li class="img"><router-link to="/welcome"><img alt="Sparc Logo" src="@/assets/bigs.png"/></router-link></li> -->
	    <li class="login"><router-link to="/login">Login</router-link></li>
    </ul>
<div class="logo"> 
      <router-link to='/welcome'><img alt="Sparc Logo" src="@/assets/sparclogo1.png" /></router-link>
    </div>
    <div class="info">
<p>Sparc is a people-centric marketplace enabling professionals to share and monetize their expertise 
  through face-to-face meetings and virtual engagements using a community-based, two-sided digital platform.</p> </div>

<div class="right">

  <p><a href="mailto:laurel.djoukeng@duke.edu"><button class="myButton">Email</button></a></p>
  <p><a href="https://www.linkedin.com/in/djoukeng"><button class="myButton">LinkedIn</button></a></p>

</div>

<div class="left">
<img class="found" alt="founder" src="@/assets/laurel.jpeg"/> 
<p class="inf"> Founder: <b>Laurel Djoukeng</b> <br />
 Duke University | The Fuqua School of Business <br />
 Candidate for MBA | Class of 2020 </p>

</div>


</div>
</template>
<style scoped>
a{
  text-decoration: none;
}
.myButton, .myButton2{
  width: 100px;
}

#nav .login{
  margin-left: 95%;
}
.found{
  width: 25%;
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
.left{
  float: left;
  margin-left: 20%;
}
.right {
  display: block;
  float:right;
  margin-right: 35%;
  margin-top: 2%;
}
</style>

