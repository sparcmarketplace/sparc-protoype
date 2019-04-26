
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
