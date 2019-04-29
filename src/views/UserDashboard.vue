<template>
  <div class="open">
    <div class="done">
      <button @click="logout">Logout</button>
      <button @click="UserProfile">User Profile</button> <br>
     <span><router-link to="/hostDashboard"><button>Host Dashboard</button></router-link></span>

    </div>

    <h2>Upcoming Engagements:</h2>
    <div class="card" v-for="engage in Engagements" :key="engage.title">
      <div class = "container">
       <h2>{{ engage.title }}</h2>

       <p>{{ engage.description }}</p>
       <p>{{ engage.date }} {{engage.location}}</p>
       <hr>
       
      
       <p>Tags: {{engage.tags}}</p>
       <button @click="rsvp(engage.id)">Sign Up</button> <button @click="cancel(engage.id)">Cancel</button> <br>
</div>


    </div>
    
  </div>
</template>



<script>
import db from '@/firebase/init'
import firebase from 'firebase'

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
        participants: firebase.firestore.FieldValue.arrayUnion(firebase.auth().currentUser.email)
      });
    },
    cancel: function(x){
      alert('Sign up cancelled!')
      db.collection('Engagements').doc(x).update({
        participants: firebase.firestore.FieldValue.arrayRemove(firebase.auth().currentUser.email)
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
 .card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin-right: 250px;
  margin-left: 250px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
/* 
button {
	-moz-box-shadow:inset 0px 1px 0px 0px #bee2f9;
	-webkit-box-shadow:inset 0px 1px 0px 0px #bee2f9;
	box-shadow:inset 0px 1px 0px 0px #bee2f9;
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #63b8ee), color-stop(1, #468ccf));
	background:-moz-linear-gradient(top, #63b8ee 5%, #468ccf 100%);
	background:-webkit-linear-gradient(top, #63b8ee 5%, #468ccf 100%);
	background:-o-linear-gradient(top, #63b8ee 5%, #468ccf 100%);
	background:-ms-linear-gradient(top, #63b8ee 5%, #468ccf 100%);
	background:linear-gradient(to bottom, #63b8ee 5%, #468ccf 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#63b8ee', endColorstr='#468ccf',GradientType=0);
	background-color:#63b8ee;
	-moz-border-radius:6px;
	-webkit-border-radius:6px;
	border-radius:6px;
	border:1px solid #3866a3;
	display:inline-block;
	cursor:pointer;
	color:#14396a;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #7cacde;
} */
button:hover {
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #468ccf), color-stop(1, #63b8ee));
	background:-moz-linear-gradient(top, #468ccf 5%, #63b8ee 100%);
	background:-webkit-linear-gradient(top, #468ccf 5%, #63b8ee 100%);
	background:-o-linear-gradient(top, #468ccf 5%, #63b8ee 100%);
	background:-ms-linear-gradient(top, #468ccf 5%, #63b8ee 100%);
	background:linear-gradient(to bottom, #468ccf 5%, #63b8ee 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#468ccf', endColorstr='#63b8ee',GradientType=0);
	background-color:#468ccf;
}
button:active {
	position:relative;
	top:1px;
}


</style>
