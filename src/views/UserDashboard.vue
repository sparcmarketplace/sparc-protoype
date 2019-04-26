<template>
  <div class="host-create">
  <div class="home">
    <h1>Welcome!</h1>
    <h2>Upcoming Engagments:</h2>
    <div class = "content">
      <ul id = "engagement-list"></ul>
    </div>





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



const engagementList = document.querySelector('#engagement-list');

function renderEngagement(doc){
  let li = document.createElement('li');
  let time = document.createElement('span');
  let location = document.createElement('span');
  let description = document.createElement('span');

  li.setAttribute('data-id', doc.data().title);
  time.textContent = doc.data().time;
  location.textContent = doc.data().location;
  description.textContent = doc.data().description;

  li.appendChild(time);
  li.appendChild(location);
  li.appendChild(description);

  engagementList.appendChild(li);
}



db.collection('Engagements').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderEngagement(doc);
    });
});



function profileQuery(){
  const db = firebase.firestore();
  const engagementsRef = db.collection("Engagements");

  document.write(engagementsRef.get());

};



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
