<template>
  <div class="home">
    <h1>Welcome!</h1>
    <h2>Upcoming Engagments:</h2>
    <div class="engage">
      <h2>Rachel Burkoff on Goldman Sachs</h2>
      <h3>Date: April 4th, 2019</h3>
      <h3>Location: Physics Building</h3>
      <h3>Time: 6:30 PM</h3>
      <h3>Description:</h3>
      <p>.............</p>
      <button @click="engagement">Sign Up!</button>

    </div>

    <div class="engage2">
      <h2>How to get into Duke</h2>
      <button @click="host">By: Kyle Ryan</button>
      <h3>Date: April 6th, 2019</h3>
      <h3>Location: West Union</h3>
      <h3>Time: 6:30 PM</h3>
      <h3>Description:</h3>
      <p>.............</p>
      <button @click="engagement">Sign Up!</button>

    </div>
    <button @click="logout">Logout</button>


  </div>
</template>

<script>
import firebase from 'firebase';
// @ is an alias to /src
export default {
  name: 'home',
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        alert('Logout successful!')
        this.$router.replace('login')
      })
    },
    engagement: function(){
      this.$router.replace('thanks')
    }
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
