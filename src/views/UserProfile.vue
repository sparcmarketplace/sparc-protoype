<template>
  <div class="home">

    <div class="top">
    <ul id="nav">
      <li class="img"><router-link to="/welcome"><img alt="Sparc Logo" src="@/assets/bigs.png"/></router-link></li>
      <li><router-link to="/UserDashboard">Engagements</router-link></li>
      <li><router-link to="/hostDashboard">Host Dashboard</router-link></li>
      <li class="logout" @click="logout"><a>Logout</a></li>
    </ul>
    </div>


    <div class="split left" v-for="person in User" :key="person.name">
      <div class="centered">
       
        <h1>{{ person.name }}</h1>
        <h3>{{ person.title }}</h3>
        <p>{{ person.bio }}</p>
        <h6>
          {{ person.jTitle }} at {{ person.company }}, {{ person.location }}
        </h6>
        <hr />
      </div>
    </div>

    <div class="split right">
      <h2 class="rsvp">Your Upcoming Engagements:</h2>
      <div class="centered">
        <div class="card" v-for="engage in Engagements" :key="engage.title">
          <div class="container">
             <h2 class="title">{{ engage.title }}</h2>
        <p class="description">{{ engage.description }}</p>
        <p class = "datecomp">{{ engage.date }} {{ engage.location }}</p>
        <hr />
        <p class="tags">Tags: {{ engage.tags }}</p>
            <button class="myButton" @click="cancel(engage.id)">Cancel</button> <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase";

const currentUser = firebase.auth().currentUser;

export default {
  name: "home",
  data() {
    return {
      Engagements: [],
      User: []
    };
  },
  methods: {
    // engagement: function(){
    //   db.collections("Engagements").add({
    //     participants.add(this.currentUser)
    //   })
    // },
    UserDashboard: function() {
      this.$router.replace("home");
    },
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("Logout successful!");
          this.$router.replace("login");
        });
    },
    cancel: function(x) {
      alert("Sign up cancelled!");
      db.collection("Engagements")
        .doc(x)
        .update({
          participants: firebase.firestore.FieldValue.arrayRemove(
            firebase.auth().currentUser.email
          )
        });
    }
    // compare: function(a, b){
    //   const dateA = a.date;
    //   const dateB = b.date;

    //   let comparison = 0;
    //   if(dateA > dateB){
    //     comparison = 1;
    //   } else if(dateA < dateB){
    //     comparison = -1;
    //   }
    //   return comparison;
    // },
    //  sort: function(){
    //   this.Engagements.sort(compare)
    // }
  },
  created() {
    db
      .collection("Engagements")
      .where(
        "participants",
        "array-contains",
        firebase.auth().currentUser.email
      )
      .get()
      .then(info => {
        info.forEach(doc => {
          let engage = doc.data();
          engage.id = doc.id;
          this.Engagements.push(engage);
        });
      }),
      db
        .collection("Users")
        .where("uid", "==", firebase.auth().currentUser.uid)
        .get()
        .then(info => {
          info.forEach(doc => {
            let person = doc.data();
            person.id = doc.id;
            this.User.push(person);
          });
        });
  }
};
</script>

<style scoped>

#nav .logout{
  float: right;
  margin-left: 850px;
}

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  /* margin-right: 50px;
  margin-left: 750px; */
  width: 100%;
  margin-right: 0px;
  margin-top: 15px;
}

.title{
  color:black;
}
.description{
  color: grey;
}
.tags{
  color: darkgray;
}
.datecomp{
  color: darkgreen;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 8px 16px;
}
.split {
  height: 80%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: scroll;
  padding-top: 20px;
}
.left {
  left: 0;
  margin-top: 10%;
}
.right {
  right: 0;
  margin-top: 10%; 
}
.centered {
  position: absolute;
  top: 50%;
  left: 37%;
  transform: translate(-25%, -25%);
  text-align: center;
}

input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 10px;
  cursor: pointer;
}
button:hover {
  color: red;
}
/* span {
  display: block;
  margin-top: 20px;
  font-size: 10px;
} */
h1 {
  color: lightseagreen;
}
h6 {
  color: black;
}
</style>
