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
      <div class="right">
        <p>Enter your Duke email:</p>
        <input
          id="signup"
          type="text"
          v-model="email"
          placeholder="coffee@duke.edu"
          required
        /><br />
        <p>Enter the password you want to use!</p>
        <input
          id="signup"
          type="password"
          v-model="password"
          placeholder="javabeans123"
          required
        /><br />
        <p>Headline</p>
        <input
          id="signup"
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
        <p>Location</p>
        <input
          id="signup"
          type="text"
          v-model="location"
          placeholder="New York City"
          required
        /><br />
      </div>
      <div class="left">
        <p>Full Name:</p>
        <input
          id="signup"
          type="text"
          v-model="name"
          placeholder="Jane Smith"
          required
        /><br />
        <p>Age:</p>
        <input
          id="signup"
          type="number"
          v-model="age"
          placeholder="20"
          required
        /><br />
        <div class="radioFun">
          <p>Would you like to be a host or a guest?</p>
          <input type="radio" v-model="check" value="Host" required /><label
            for="Host"
            >Host</label
          ><br />
          <input type="radio" v-model="check" value="Guest" /><label
            for="Guest"
            >Guest</label
          ><br />
        </div>
        <p>
          Input your title and information about your place of work or school
        </p>
        <p>Company/School</p>
        <input
          id="signup"
          type="text"
          v-model="company"
          placeholder="Goldman Sachs"
          required
        /><br />
        <p>Title</p>
        <input
          id="signup"
          type="text"
          v-model="jTitle"
          placeholder="Senior Analyst"
          required
        /><br /><br /><br />
      </div>
    </form>
    <br /><br/>
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
h2 {
  text-emphasis: bold;
}
input, textarea{
  border-radius: 10px;
}
.under{
  padding-top: 10px;
  align-content: center;
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
  margin-left: 8%;
}
.under {
  margin-top: 200px;
}
.right {
  float: right;
  margin-right: 8%;
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
