<template>
  <div class="host-create">
    <h3>Please input information to create an engagement!</h3>
    <p>Title:</p>
    <input type="text" v-model="title" placeholder="Consulting for Undergraduates"><br>
    <p>Date and Time:</p>
    <input type="datetime-local" v-model="date"><br>
    <p>Location:</p>
    <input type="text" v-model="location" placeholder="Bryan Center 111"><br>
    <p>Please give a brief description of the event</p>
    <textarea rows="4" cols="50" v-model="description" placeholder = "We will discuss company culture at..."></textarea><br>
    <p>Tags: Space delimited</p>
    <input type="text" v-model="tags" placeholder="consulting Bain New York"><br>


    <button @click="create">Create Engagement</button> <br>
    <button @click="logout">Logout</button>

  </div>
</template>

<script src="https://www.gstatic.com/firebasejs/5.10.1/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.10.1/firebase.js"></script>
<script>

import db from '@/firebase/init'
import firebase from 'firebase'

export default {
  name: 'host',
  data() {
    return {
      title: '',
      date: '',
      description: '',
      location:'',
      tags:'',
      dates: [],
      days: [],
      times: [],
      month: ''
    }
  },
  methods: {
    logout: function() {
        alert('Logout successful!')
        this.$router.replace('login')
    },
    create: function(){
      dates: this.date.split("T")
      days: dates[0].split("-")
      switch(days[1]){
        case "1":
          this.month = "January";
          break;
        case "2":
          this.month = "February";
          break;
        case "3":
          this.month = "March";
          break;
        case "4":
          this.month = "April";
          break;
        case "5":
          this.month = "May";
          break;
        case "6":
          this.month = "June";
          break;
        case "7":
          this.month = "July";
          break;
        case "8":
          this.month = "August";
          break;
        case "9":
          this.month = "September";
          break;
        case "10":
          this.month = "October";
          break;
        case "11":
          this.month = "November";
          break;
         case "12":
          this.month = "December";
          break;
      }
      this.date = this.month.concat(" "+days[2]+", "+days[0]+" "+dates[1])

      db.collection('Engagements').add({
        description: this.description,
        title: this.title,
        date: this.date, //str.concat(this.date, this.time), //oment.utc(this.date).local().format(),
        location: this.location,
        hid: firebase.auth().currentUser.uid,
        participants: [],
        tags: this.tags.split(" ")

      });
      alert('Engagement Created!')

      this.$router.replace('HostDashboard')
      //need to reroute to host dashboard
    }
  }
}
</script>

<style scoped>
 .sign-up-2 {
   margin-top: 40px;
 }
 input {
   margin: 10px 0;
   width: 20%;
   padding: 15px;
 }
 button {
   margin-top: 10px;
   width: 10%;
   cursor: pointer;
 }
 span {
   display: block;
   margin-top: 20px;
   font-size: 11px;
 }
</style>
