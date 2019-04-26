<template>
  <div class="home">
    <h1>Welcome!</h1>
    <h2>Upcoming Engagments:</h2>
    <div class="engage" v-for="engage in Engagements" :key="engage.title">
      <h2>{{ engage.title }}</h2>
      <h3>{{ engage.date, engage.location}}</h3>
      <h3>{{ engage.description }}</h3>
      <h3>{{ engage.tags }}</h3>

      <button @click="rsvp">Sign Up</button> <br>
      <button @click="cancel">Cancel</button> <br>

    </div>
    <div class="done">
      <button @click="logout">Logout</button>
      <button @click="UserProfile">User Profile</button> <br>

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
      Engagements: []
    }
  },
  methods: {
    // engagement: function(){
    //   db.collections("Engagements").add({
    //     participants.add(this.currentUser)
    //   })
    // },
    UserProfile: function(){
      this.$routher.replace('userProfile')
    },
    logout: function() {
      firebase.auth().signOut().then(() => {
        alert('Logout successful!')
        this.$router.replace('login')
      })
    },
    rsvp: function(){

    }
  },
  created(){
   db.collection('Engagements').get()
   .then(info => {
     info.forEach(doc => {
       let engage = doc.data()
       engage.id = doc.id
       this.Engagements.push(engage)
     })
   })
}
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
