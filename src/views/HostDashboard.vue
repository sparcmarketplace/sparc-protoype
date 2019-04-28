
<template>
<div class="host-create">

<h1>Welcome!</h1>


<button @click="hostProfile">Host Profile</button> <br>
<button @click="logout">Logout</button>
<button @click="create">Create Engagement</button> <br>


<h2>Your Upcoming Engagements:</h2>

<div class="engage" v-for="engage in Engagements" :key="engage.title">
  <h2>{{ engage.title }}</h2>
  <h3>{{ engage.date }} {{engage.location}}</h3>
  <h3>{{ engage.description }}</h3>
  <h3 v-for="participant in engage.participants" :key="participant">
    {{ participant }}
  </h3>
  <h3>{{ engage.tags }}</h3>

  <button @click="cancel(engage.id)">Cancel Engagement</button> <br>


</div>



</div>
</template>


<script src="https://www.gstatic.com/firebasejs/5.10.1/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.10.1/firebase.js"></script>
<script>
import db from '@/firebase/init'
import firebase from 'firebase'
// @ is an alias to /src
export default {
name: 'hostDashboard',
data(){
  return{
    Engagements: []
  }
},
methods: {
  logout: function() {
    firebase.auth().signOut().then(() => {
      alert('Logout successful!')
      this.$router.replace('login')
    })
  },
  hostProfile: function(){
    this.$router.replace('hostProfile')
},
  create: function(){
    this.$router.replace('host')
},
  cancel: function(x){
    db.collection('Engagements').doc(x).delete();
    this.$router.replace('host')
}
},
created(){
db.collection('Engagements').where("hid", "==", firebase.auth().currentUser.uid).orderBy('date').get() //doc(firebase.auth().currentUser.uid).get()
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
// function profileQuery(){
// const db = firebase.firestore();
// const userRef = db.collection('Users').doc(firebase.auth().currentUser.uid);
// const engagementsRef = db.collection("Engagements");
//
//
// engagementsRef.where('hid', '==', firebase.auth().currentUser.uid).orderBy('date', 'desc').get()
// .then(events => {
//   events.forEach(doc => {
//     data = doc.data()
//     document.write()
//
//
//   })
//
//
// });
