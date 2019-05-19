<template>
  <div class="sign-up">
     <ul id="nav">
    	<li><router-link to="/about">About</router-link></li>
	    <li class="login"><router-link to="/login">Login</router-link></li>
    </ul>
     <div class="logo"> 
      <router-link to='/welcome'><img alt="Sparc Logo" src="@/assets/sparclogo1.png" /></router-link>
    </div>
    <form>
      <div class="left">
         <p>Full Name:</p>
        <input
          id="signup"
          type="text"
          v-model="name"
          placeholder="Jane Smith"
          required
        /><br />
         <p>Enter your email:</p>
        <input
          id="signup"
          type="text"
          v-model="email"
          placeholder="coffee@duke.edu"
          required
        /><br />
      </div>
      <div class="right">
        <p>Age:</p>
        <input
          id="signup"
          type="number"
          v-model="age"
          placeholder="20"
          required
        /><br />
         <p>Create a password:</p>
        <input
          id="signup"
          type="password"
          v-model="password"
          placeholder="javabeans123"
          required
        /><br />
        </div>

      <div class="rest">
      
        <p>Headline:</p>
        <input
          id="headline"
          type="text"
          v-model="title"
          placeholder="CS Student at Duke Unversity"
          required
        /><br />
        <p>Give us a short biography about yourself and your interests!</p>
        <textarea
          rows="4"
          cols="50"
          v-model="bio"
          placeholder="Raised in a small town in Ireland, I...."
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

        <div class="radioFun">
          <p>Would you like to be a host or a guest?</p>
          <input type="radio" v-model="check" value="Host " required /><label
            for="Host"
            >Host  </label
          ><br />
          <input type="radio" v-model="check" value="Guest" /><label
            for="Guest"
            >Guest</label
          ><br />
        </div>
        <p>
          <b>Input your title and information about your place of work or school</b>
        </p>
        <div class="left">
        <p>Company/School</p>
        <input
          id="signup"
          type="text"
          v-model="company"
          placeholder="Goldman Sachs"
          required
        /><br />
        </div>
        <div class="right">
          <p>Location</p>
        <input
          id="signup"
          type="text"
          v-model="location"
          placeholder="New York City"
          required
        /><br />
        </div>
        <div class="rest2">
        <p>Title</p>
        <input
          id="signup"
          type="text"
          v-model="jTitle"
          placeholder="Senior Analyst"
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
      name: "",
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
                name: this.name,
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
  padding-top: 20%;
}
.rest2{
  padding-top: 10%;
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
.sign-up {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
#nav .login{
  margin-left: 87%;
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
  margin-left: 400px;
}
span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}

</style>
