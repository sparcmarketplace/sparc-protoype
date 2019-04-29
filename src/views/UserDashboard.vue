<template>
  <div class="home">
    <h1>Welcome!</h1>
    <h2>Upcoming Engagments:</h2>
    <div class="engage" v-for="engage in Engagements" :key="engage.title">
      // <h2>{{ engage.title }}</h2>
      //
      // <h3>{{ engage.date }} , {{ engage.location }}</h3>
      //
      // <p>Description:</p>
      // <h3>{{ engage.description }}</h3>
      //
      // <p>Tags:</p>
      // <h3>{{ engage.tags }}</h3>


          <b-card-group deck class="mb-3">
            <b-card border-variant="light" header={{ engage.title }} class="text-left">
              <b-card-text>
                <p>{{ engage.description }}</p>

              </b-card-text>
              <p>Tags:{{ engage.tags }}</p>

              // <p>Hosted By: {{engage.hname}}</p>

              <b-card-text>  <p>{{ engage.date }} , {{ engage.location }}<p>  </b-card-text>


              <button @click="rsvp(engage.id)">Sign Up</button> <br>
              <button @click="cancel(engage.id)">Cancel</button> <br>
        </b-card-group>

    </div>
    <div class="done">
      <button @click="logout">Logout</button>
      <button @click="UserProfile">User Profile</button> <br>

    </div>

  </div>
</template>

// <div>
//     <b-card-group deck class="mb-3">
//       <b-card border-variant="light" header={{ engage.title }} class="text-left">
//         <b-card-text>
//           <p>{{ engage.description }}</p>
//
//         </b-card-text>
//         <p>Tags:{{ engage.tags }}</p>
//
//         <div v-for="person in User" :key="person.name">
//           <p> Hosted by {{ person.name }} </p>
//         </div>
//
//     <b-card-text>  <p>{{ engage.date }} , {{ engage.location }}<p>  </b-card-text>
//   </b-card-group>
// </div>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
const currentUser = firebase.auth().currentUser;
export default {
  name: 'home',
  data(){
    return{
      Engagements: []
      // Hosts: []
    }
  },
  methods: {
    UserProfile: function(){
      this.$router.replace('userProfile')
    },
    logout: function() {
      firebase.auth().signOut().then(() => {
        alert('Logout successful!')
        this.$router.replace('login')
      })
    },
    rsvp: function(x){
      alert('Sign up successful!')
      db.collection('Engagements').doc(x).update({
        participants: firebase.firestore.FieldValue.arrayUnion(firebase.auth().currentUser.uid)
      });
    },
    cancel: function(x){
      alert('Sign up cancelled!')
      db.collection('Engagements').doc(x).update({
        participants: firebase.firestore.FieldValue.arrayRemove(firebase.auth().currentUser.uid)
      });
    }
  },
  created(){
   db.collection('Engagements').orderBy('date').get()
   .then(info => {
     info.forEach(doc => {
       let engage = doc.data()
       engage.id = doc.id
       this.Engagements.push(engage)
     })
   })
   // db.collection('Users').where("uid", "==", engage.hid).get()
   // .then(info => {
   //  info.forEach(doc => {
   //     let person = doc.data()
   //     person.id = doc.id
   //     this.User.push(person)
   //  })
   // })

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
