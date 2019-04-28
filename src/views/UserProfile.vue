<template>
  <div class="home">
    <h1>Welcome!</h1>

    <h2>Your Upcoming Engagments:</h2>



    <div class="engage" v-for="engage in Engagements" :key="engage.name">
      <h2>{{ engage.name }}</h2>
      <h3>{{ engage.date }} </h3>
      <h3>{{engage.id}}</h3>


      <p>Description:</p>
      <h3>{{ engage.description }}</h3>

      <p>Tags:</p>
      <h3>{{ engage.tags }}</h3> -->

      <button @click="cancel(engage.id)">Cancel</button> <br>

    </div>

    <div v-for="person in User" :key="person.name">
      <p> {{ person.name }} </p>
    </div>


    <div class="done">
      <button @click="logout">Logout</button>
      <button @click="UserDashboard">User Dashboard</button> <br>

    </div>

  </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'

const currentUser = firebase.auth().currentUser;

export default {
  name: 'home',
  data(){
    return{
      Engagements: [],
      User: []
    }
  },
  methods: {
    // engagement: function(){
    //   db.collections("Engagements").add({
    //     participants.add(this.currentUser)
    //   })
    // },
    UserDashboard: function(){
      this.$router.replace('home')
    },
    logout: function() {
      firebase.auth().signOut().then(() => {
        alert('Logout successful!')
        this.$router.replace('login')
      })
    },
    cancel: function(x){
      alert('Sign up cancelled!')
      db.collection('Engagements').doc(x).update({
        participants: firebase.firestore.FieldValue.arrayRemove(firebase.auth().currentUser.uid)
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
  created(){
   db.collection('Engagements').where("participants", "array-contains", firebase.auth().currentUser.uid).get()
   .then(info => {
     info.forEach(doc => {
       let engage = doc.data()
       engage.id = doc.id
       this.Engagements.push(engage)
     })
   }),
   db.collection('Users').where("uid", "==", firebase.auth().currentUser.uid).get()
   .then(info => {
    info.forEach(doc => {
       let person = doc.data()
       person.id = doc.id
       this.User.push(person)
    })
   })

},

}

</script>
<style scoped>
 .engage, .engage2{
   border: solid black 5px;
   padding: 10px;
   margin-left: 200px;
   margin-right: 200px;
   margin-top: 40px;
 }
 .engage2{
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
 button:hover{

   color: red;
 }
 span {
   display: block;
   margin-top: 20px;
   font-size: 11px;
 }
 h1{
   color: red;
 }

</style>
