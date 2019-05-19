<template>
  <div class="host-create">
       <ul id="nav">
      <li class="img"><router-link to="/welcome"><img alt="Sparc Logo" src="@/assets/bigs.png"/></router-link></li>
      <li><router-link to="/UserDashboard">Engagements</router-link></li>
      <li><router-link to="/hostDashboard">Host Dashboard</router-link></li>
      	    <li class="logout" @click="logout"><a>Logout</a></li>
    </ul>

    <h3>Please input information to create an engagement!</h3>
    <p>Title:</p>
    <input
      type="text"
      v-model="title"
      placeholder="Consulting for Undergraduates"
    /><br />
    <p>Date and Time:</p>
    <input type="datetime-local" v-model="date" /><br />
    <p>How long will the engagement last? (in hours)</p>
    <input type="number" placeholder="1" v-model="length"/><br />
      <p>Location:</p>
    <input
      type="text"
      v-model="location"
      placeholder="Bryan Center 111"
    /><br />
    <p>Please give a brief description of the event</p>
    <textarea
      rows="4"
      cols="50"
      v-model="description"
      placeholder="We will discuss company culture at..."
    ></textarea
    ><br />
    <p>Tags: Space delimited</p>
    <input
      type="text"
      v-model="tags"
      placeholder="consulting Bain New York"
    /><br />

    <button class="myButton" @click="create">Create Engagement</button> <br/>
  </div>
</template>

<script src="https://www.gstatic.com/firebasejs/5.10.1/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.10.1/firebase.js"></script>
<script>
import db from "@/firebase/init";
import firebase from "firebase";

export default {
  name: "host",
  data() {
    return {
      title: "",
      date: "",
      description: "",
      location: "",
      tags: "",
      dates: [],
      length: "",
      days: [],
      times: [],
      month: ""
    };
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
      alert("Logout successful!");
      this.$router.replace('login');
    });
    },
    create: function() {
      this.dates = this.date.split("T");
      console.log(this.date);
      this.days = this.dates[0].split("-");
      console.log(this.days[1]);
      switch (this.days[1]) {
        case "01":
          this.month = "January";
          break;
        case "02":
          this.month = "February";
          break;
        case "03":
          this.month = "March";
          break;
        case "04":
          this.month = "April";
          break;
        case "05":
          this.month = "May";
          break;
        case "06":
          this.month = "June";
          break;
        case "07":
          this.month = "July";
          break;
        case "08":
          this.month = "August";
          break;
        case "09":
          this.month = "September";
          break;
        case "10":
          this.month = "October";
          break;
        case "11":
          this.month = "November";
          break;
        case "12":
          this.month = "December";
          break;
      }
      this.date = this.month.concat(
        " " + this.days[2] + ", " + this.days[0] + " at " + this.dates[1]
      );

      db.collection("Engagements").add({
        description: this.description,
        title: this.title,
        date: this.date, //str.concat(this.date, this.time), //oment.utc(this.date).local().format(),
        location: this.location,
        length: this.length,
        hid: firebase.auth().currentUser.uid,
        // hname: firebase.auth().currentUser.name,
        participants: [],
        tags: this.tags.split(" ")
      });

      this.$router.replace("HostDashboard");
      //need to reroute to host dashboard
    }
  }
};
</script>

<style scoped>
#nav .logout{
  margin-left: 850px;
}
input, textarea{
  border-radius: 10px;
  border: 1px solid darkgrey;

}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
  border: 1px solid darkgrey;
}
input:hover, textarea:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
}
.myButton{
  width: 20%;
}
.sign-up-2 {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 10px;
  width: 10%;
  cursor: pointer;
}
span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}
</style>
