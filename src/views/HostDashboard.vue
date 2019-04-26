<template>
  <div class="host-create">


    <button @click="hostProfile">Host Profile</button> <br>
    <button @click="logout">Logout</button>
    <button @click="create">Create Engagement</button> <br>

  </div>
</template>


<script src="https://www.gstatic.com/firebasejs/5.10.1/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.10.1/firebase.js"></script>
 <script>
  import db from '@/firebase/init'
  import firebase from 'firebase'


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
      hostProfile: function(){
        this.$router.replace('hostProfile')
    },
      create: function(){
        this.$router.replace('create')
    }
  }
}



</script>
function profileQuery(){
  const db = firebase.firestore();
  const userRef = db.collection('Users').doc(firebase.auth().currentUser.uid);
  const engagementsRef = db.collection("Engagements");


  engagementsRef.where('hid', '==', firebase.auth().currentUser.uid).orderBy('date', 'desc').get()
    .then(events => {
      events.forEach(doc => {
        data = doc.data()
        document.write()


      })


    });
