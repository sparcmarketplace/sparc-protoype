<template>
  <div class="open">
     <ul id="nav">
      <li class="img"><router-link to="/welcome"><img alt="Sparc Logo" src="@/assets/bigs.png"/></router-link></li>
      <li><router-link to="/UserProfile">User Profile</router-link></li>
      <li><router-link to="/hostDashboard">Host Dashboard</router-link></li>
      <li><input class="search" type=text placeholder="Search..."></li>
      <li class="logout" @click="logout"><a>Logout</a></li>
    </ul>



    <h2>Upcoming Engagements:</h2>
    <div class="card" v-for="engage in Engagements" :key="engage.title">
      <div class="container">
        <h2 class="title">{{ engage.title }}</h2>
        <p class="description">{{ engage.description }}</p>
         <p class = "datecomp" v-if="engage.length !== '' "> {{ engage.date }} for {{ engage.length }} hour(s) at {{ engage.location }}</p>
        <p class = "datecomp" v-else> {{ engage.date }} at {{ engage.location }}</p>
        <hr />

        <p class="tags">Tags: {{ engage.tags }}</p>
        <button class="myButton" @click="rsvp(engage.id)">Sign Up</button>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase";

export default {
  name: "home",
  data() {
    return {
      Engagements: []
      // Hosts: []
    };
  },
  methods: {
    UserProfile: function() {
      this.$router.replace("userProfile");
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
    rsvp: function(x) {
      alert("Sign up successful!");
      db.collection("Engagements")
        .doc(x)
        .update({
          participants: firebase.firestore.FieldValue.arrayUnion(
            firebase.auth().currentUser.email
          )
        });
         created();
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
         created();
    }
  },
  created() {
    db.collection("Engagements")
      .orderBy("date")
      .get()
      .then(info => {
        info.forEach(doc => {
          let engage = doc.data();
          engage.id = doc.id;
          this.Engagements.push(engage);
        });
      });
    // db.collection('Users').where("uid", "==", engage.hid).get()
    // .then(info => {
    //  info.forEach(doc => {
    //     let person = doc.data()
    //     person.id = doc.id
    //     this.User.push(person)
    //  })
    // })
  }
};
</script>
<style scoped>


#nav .search{
  width: 250px;
  border-radius: 10px;
  padding: 10px 10px;
  margin-left: 50px;
  margin-right: 550px;
}
input{
  margin: 10px 0;
  width: 20%;
  padding: 15px;
   border-radius: 10px;
  border: 1px solid lightgrey;
}
input:hover{
   box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1)
}
button {
  margin-top: 10px;
  cursor: pointer;
}
span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}
h1 {
  color: red;
}
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin-right: 250px;
  margin-left: 250px;
  padding-bottom: 20px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
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

</style>
