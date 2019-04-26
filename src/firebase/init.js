import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize firebase
var config = {
  apiKey: "AIzaSyBM5ivCG_Z6KGmSBauJlfPU9wa-_U_rOY8",
  authDomain: "sparc-9cb68.firebaseapp.com",
  databaseURL: "https://sparc-9cb68.firebaseio.com",
  projectId: "sparc-9cb68",
  storageBucket: "sparc-9cb68.appspot.com",
  messagingSenderId: "762881325644"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export firestore database
export default firebaseApp.firestore()
