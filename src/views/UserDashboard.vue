<template>
  <div class="host-create">

    <button @click="profile">User Profile</button> <br>
    <button @click="logout">Logout</button>

    <button @click="rsvp">Sign Up</button> <br>
    <button @click="cancel">Cancel</button> <br>


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
      rsvp: function(){
        alert('Signup successful!')
        this.$router.replace('userDashboard')
    },

      cancel: function(){
        alert('Event Cancelled!')

      },
      profile: function(){
        this.$router.replace('userProfile')
      }

  }
}



</script>








function profileQuery(){
  const db = firebase.firestore();
  const engagementsRef = db.collection("Engagements");

  document.write(engagementsRef.get());

;



//add button functionality

function rsvp(doc){

  const db = firebase.firestore();
  const engagementRef = db.collection('Engagements').doc("doc");
  engagementRef.update({
    participants: firebase.firestore.FieldValue.arrayUnion(firebase.auth().currentUser.uid)
  });

  .then(function() {
    console.log("Document successfully updated!");
  })
  .catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
  });

}

function unRsvp(doc){

  const db = firebase.firestore();
  const engagementRef = db.collection('Engagements').doc("doc");
  engagementRef.update({
    participants: firebase.firestore.FieldValue.arrayRemove(firebase.auth().currentUser.uid)
  });

  .then(function() {
    console.log("Document successfully updated!");
  })
  .catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
  });


}
