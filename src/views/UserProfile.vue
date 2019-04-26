<template>
  <div class="host-create">


    <button @click="userDashboard">User Dashboard</button> <br>
    <button @click="logout">Logout</button>

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
      userDashboard: function(){
        this.$router.replace('userDashboard')
    }
  }
}



</script>


function profileQuery(){
  const db = firebase.firestore();
  const userRef = db.collection('Users').doc(firebase.auth().currentUser.uid);

  document.write(userRef.get());

  const engagementsRef = db.collection("Engagements");

  engagementsRef.where('participants', '==', firebase.auth().currentUser.uid).orderBy('date', 'desc').get()
    .then(events => {
      events.forEach(doc => {
        data = doc.data()
        document.write()
    }






    </script>

     <style scoped>


      .sign-up {
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
