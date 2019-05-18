<template>
  <div class="login">

     <ul id="nav">
    	<li><router-link to="/about">About</router-link></li>
	    <li class="signup"><router-link to="/sign-up">Sign Up</router-link></li>
    </ul>
      <div class="logo"> 
      <router-link to='/welcome'><img alt="Sparc Logo" src="@/assets/sparclogo1.png" /></router-link>
    </div>
    <h4>A People-Centric Marketplace</h4>
    <input type="text" v-model="email" placeholder="Email" /><br />
    <input type="password" v-model="password" placeholder="Password" /><br />
    <button class="myButton" @click="login">Login</button>

    <p>
      Don't have an account? <router-link to="/sign-up">Create one!</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "@/firebase/init";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            //
            // if db.collection(Users).where("uid", "==", firebase.auth().currentUser.uid).where('host', "==", true).get(){
            //
            // this.$router.replace('home')
            // }
            //
            this.$router.replace("home");
          },
          err => {
            alert("Oops. " + err.message);
          }
        );
    }
  }
};
</script>

<style scoped>
.login {
  margin-top: 40px;
}
.logo{
   width: 50%;
   margin-left: auto;
   margin-right: auto;
   text-align: center;

 }
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}
#nav .signup{
  float: right;
  margin-left: 87%;

}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
