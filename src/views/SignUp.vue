<template>
  <div class="sign-up">
     <ul id="nav">
      <li class="home"><router-link to="/welcome">Home</router-link></li>
    	<li><router-link to="/about">About</router-link></li>
      <li class="contact"><router-link to="/contact">Contact</router-link></li>
	    <li class="login"><router-link to="/login">Login</router-link></li>
    </ul>
     <div class="logo"> 
      <router-link to='/welcome'><img alt="Sparc Logo" src="@/assets/sparclogo1.png" /></router-link>
    </div>
    <form>
      <div class="left">
         <p>First Name:</p>
        <input
          id="signup"
          type="text"
          v-model="fname"
          required
        /><br />
         <p>Enter your email:</p>
        <input
          id="signup"
          type="text"
          v-model="email"
          required
        /><br />
      </div>
      <div class="right">
        <p>Last Name:</p>
        <input
          id="signup"
          type="text"
          v-model="lname"
          required
        /><br />
         <p>Create a password:</p>
        <input
          id="signup"
          type="password"
          v-model="password"
          required
        /><br />
        </div>

      <div class="rest">
      <p>Age:</p>
        <input
          id="signup"
          type="number"
          v-model="age"
          required
        /><br />
        <p>Headline:</p>
        <input
          id="headline"
          type="text"
          v-model="title"
          required
        /><br />
        <p>Give us a short biography about yourself and your interests!</p>
        <textarea
          rows="4"
          cols="50"
          v-model="bio"
          required
        ></textarea
        ><br />
        <p>Graduation Year</p>
        <select class="grad" name="gradyear" required>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
        <br /> <br />

        <div class="radioFun">
         <label class="container">Host
          <input type="radio" checked="checked" name="radio">
            <span class="checkmark"></span>
                    </label>   or
            <label class="container">Guest
              <input type="radio" name="radio">
            <span class="checkmark"></span>
                </label> 
        </div> <br /> <br />
        <p>
          <b>Input your title and information about your place of work or school</b>
        </p>
        <div class="left">
        <p>Company/School</p>
        <input
          id="signup"
          type="text"
          v-model="company"
          required
        /><br />
        </div>
        <div class="right">
          <p>Location</p>
        <input
          id="signup"
          type="text"
          v-model="location"
          required
        /><br />
        </div>
        <div class="rest2">
        <p>Title</p>
        <input
          id="signup"
          type="text"
          v-model="jTitle"
          required
        /><br/>
        </div>
      </div>
    </form>
    <div class="under">
      <button class="myButton2" @click="signUp">Sign-up</button>
    </div>
  </div>
</template>

<script src="https://www.gstatic.com/firebasejs/5.10.1/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.10.1/firebase.js"></script>

<script>
import db from "@/firebase/init";
import firebase from "firebase";

export default {
  name: "signUp",
  data() {
    return {
      email: "",
      password: "",
      age: "",
      bio: "",
      gradYear: "",
      host: "",
      fname: "",
      lname: "",
      title: "",
      location: "",
      company: "",
      check: "",
      jTitle: ""
    };
  },
  methods: {
    signUp: function() {
      switch (this.check) {
        case "Host":
          this.host = true;
          break;
        case "Guest":
          this.host = false;
          break;
        default:
          this.host = false;
      }
      console.log(this.host);
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            db.collection("Users")
              .doc(firebase.auth().currentUser.uid)
              .set({
                age: this.age,
                bio: this.bio,
                gradYear: this.gradYear,
                host: this.host,
                name: this.fname + " " + this.lname,
                title: this.title,
                uid: firebase.auth().currentUser.uid,
                location: this.location,
                company: this.company,
                jTitle: this.jTitle
              });
            //createUser(this.age, this.bio, this.gradyear, this.host, this.name, this.title, this.location, this.company, this.jTitle)
            if (this.host) {
              this.$router.replace("hostDashboard");
            } else {
              this.$router.replace("userDashboard");
            }
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
.rest{
  padding-top: 15%;
}
.rest2{
  padding-top: 8%;
  padding-bottom: 2%;
}
#headline{
  width: 30%;
}
h2 {
  text-emphasis: bold;
}
input, textarea{
  border-radius: 10px;
}
.under{
  padding-top: 10px;
}
#signup {
  width: 200px;
  font-size: 13pt;
}
textarea {
  font-size: 13pt;
}
.left {
  float: left;
  margin-left: 30%;
}
.under{
  margin-right: 28%;
}
.right {
  float: right;
  margin-right: 30%;
}
input {
  width: 20%;
  padding: 15px;
  border: 1px solid darkgrey;
}

/*  radiobox css from: https://www.w3schools.com/howto/howto_css_custom_checkbox.asp  */
/* The container */
.container {
  position: relative;
  margin-bottom: 12px;
  cursor: pointer;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
  margin-top: 30px;
  margin-bottom: 30px;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #0d60f0;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
 	top: 9px;
	left: 9px;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: white;
}
textarea{
    border: 1px solid darkgrey;
}
#nav .login{
  margin-left: 75%;
}
input:hover, textarea:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
}
.logo{
   width: 50%;
   margin-left: auto;
   margin-right: auto;
   text-align: center;

 }
button {
  margin-top: 10px;
  width: 20%;
  cursor: pointer;
  margin-left: 40%;
}
span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}

</style>
