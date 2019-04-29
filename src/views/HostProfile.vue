<template>
  <div class="home">
    <div class="user" v-for="person in User" :key="person.name">
      <p>{{ person.name }}</p>
      <p>{{ person.age }}</p>
      <p>{{ person.bio }}</p>
    </div>

    <div class="done">
      <button @click="logout">Logout</button>
      <button @click="HostDashboard">Host Dashboard</button> <br />
    </div>
  </div>
</template>

<script src="https://www.gstatic.com/firebasejs/5.10.1/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.10.1/firebase.js"></script>
<script>
import db from "@/firebase/init";
import firebase, { firestore } from "firebase";

// @ is an alias to /src
export default {
  name: "hostProfile",
  data() {
    return {
      User: []
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
    HostDashboard: function() {
      this.$router.replace("hostDashboard");
    }
  },
  created() {
    db.collection("Users")
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
.engage,
.engage2 {
  border: solid black 5px;
  padding: 10px;
  margin-left: 200px;
  margin-right: 200px;
  margin-top: 40px;
}
.engage2 {
  color: green;
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
span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}
h1 {
  color: red;
}
</style>
