<template>
  <div class="host-create">
      <ul id="nav">
      <li class="img"><router-link to="/welcome"><img alt="Sparc Logo" src="@/assets/bigs.png"/></router-link></li>
      <li><router-link to="/host">Create Engagement</router-link></li>
      <li><router-link to="/UserProfile">Profile</router-link></li>
      <li><router-link to="/UserDashboard">Engagements</router-link></li>
      <li class="logout" @click="logout"><a>Logout</a></li>
    </ul>


    <h1>Welcome to the Host Dashboard!</h1>

    <!-- <button @click="hostProfile">Host Profile</button> <br> -->
    
    <h2> Engagements you're hosting:</h2>

    <div class="card" v-for="engage in Engagements" :key="engage.title">
      <div class="container">
        <h2 class="title">{{ engage.title }}</h2>
        <p class="description">{{ engage.description }}</p>
        <p class = "datecomp" v-if="engage.length !== '' "> {{ engage.date }} for {{ engage.length }} hour(s) at {{ engage.location }}</p>
        <p class = "datecomp" v-else> {{ engage.date }} at {{ engage.location }}</p>
        <hr />


        <p>Participants:</p>
        <h5 v-for="participant in engage.participants" :key="participant">
          {{ participant }}
        </h5>
        <!-- <h5 v-for="tag in engage.tags" :key="tag">
    {{ tag }}
  </h5> -->
        <p class="tags">Tags: {{ engage.tags }}</p>


        <button class="myButton" @click="cancel(engage.id)">Cancel Engagement</button> <br />
      </div>
    </div>
  </div>
</template>

<script src="https://www.gstatic.com/firebasejs/5.10.1/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.10.1/firebase.js"></script>
<script>
import db from "@/firebase/init";
import firebase from "firebase";
// @ is an alias to /src
export default {
  name: "hostDashboard",
  data() {
    return {
      Engagements: []
    };
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("Logout successful!");
          this.$router.replace("login");
        });
    },
    userProfile: function() {
      this.$router.replace('userProfile');
    },
    create: function() {
      this.$router.replace("host");
    },
    cancel: function(x) {
      alert("Engagement cancelled!");
      db.collection("Engagements")
        .doc(x)
        .delete();
      this.$router.replace("hostdashboard");
    }
  },
  created() {
    db.collection("Engagements")
      .where("hid", "==", firebase.auth().currentUser.uid)
      .get() //doc(firebase.auth().currentUser.uid).get()
      .then(info => {
        info.forEach(doc => {
          let engage = doc.data();
          engage.id = doc.id;
          this.Engagements.push(engage);
        });
      });
  }
};
</script>

<style scoped>

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin-right: 250px;
  margin-left: 250px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
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

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
</style>
