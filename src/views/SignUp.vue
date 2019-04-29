<template>
<div class="sign-up">

 <form>
    <p>Sign Up for SPARC!</p>
    <div class = "left">
      <p>Enter your Duke email:</p>
        <input type="text" v-model="email" placeholder="coffee@duke.edu" required><br>
      <p>Enter the password you want to use!</p>
        <input type="password" v-model="password" placeholder="javabeans123" required><br>
      <p>Headline</p>
        <input type="text" v-model="title" placeholder="CS Student at Duke Unversity" required><br>
      <p>Give us a short biography about yourself and your interests!</p>
         <textarea rows="4" cols="50" placeholder = "Raised in a small town in Ireland, I...." required></textarea><br>
     <p>Graduation Year</p>
         <select class="grad" name="gradyear" required>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
         </select>
    </div>
    <div class = "right">
      <p>Full Name:</p>
        <input type="text" v-model="name" placeholder="Kyle Ryan" required><br>
      <p>Age:</p>
        <input type="number" v-model="age" placeholder="20" required><br>
    <div class="radioFun">
      <p>Would you like to be a host or an engagee?</p>
        <input type="radio" name="check" value="Host" required><label for="Host">Host</label><br>
        <input type="radio" name="check" value="Engagee"><label for="Engagee">Engagee</label><br>
    </div>
      <p>Input your title and information about your place of work or school</p>
      <p> Company/School</p>
        <input type="text" v-model="company" placeholder="Goldman Sachs" required><br>
      <p> Location</p>
        <input type="text" v-model="location" placeholder="New York City" required><br>
      <p>Title</p>
        <input type="text" v-model="jTitle" placeholder="Senior Analyst" required><br>
    </div>

          <input type="submit" @click="signUp">
</form>
        <div class="under">

    <imageUpload />


          <span>or go back to <router-link to="/login">login</router-link>.</span>

    </div>
</div>
</template>

<script src="https://www.gstatic.com/firebasejs/5.10.1/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.10.1/firebase.js"></script>

 <script>
  import db from '@/firebase/init'
  import firebase from 'firebase'
  import imageUpload from './SignUp2.vue'

  export default {

    name: 'signUp',
    components: { imageUpload },
    data() {
      return {
        email: '',
        password: '',
        age: '',
        bio: '',
        gradYear:'',
        host:'',
        name:'',
        title: '',
        location:'',
        company:'',
        jTitle:'',
      }
    },
    methods: {
      signUp: function() {
        switch(this.chooseone){
          case "Host":
            this.host = true;
            //this.$router.replace('host');
            break;
          case "Engagee":
            this.host = false;
            //this.$router.replace('home');
            break;
          default:
          //  this.$router.replace('home');
          this.host = false;
        }
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            db.collection('Users').doc(firebase.auth().currentUser.uid).set({
              age: this.age,
              bio: this.bio,
              gradYear: this.gradYear,
              host: this.host,
              name: this.name,
              title: this.title,
              uid: firebase.auth().currentUser.uid,
              location: this.location,
              company: this.company,
              jTitle: this.jTitle,
            });
              //createUser(this.age, this.bio, this.gradyear, this.host, this.name, this.title, this.location, this.company, this.jTitle)
              alert('done!')
             this.$router.replace('sign-up-2');
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );


      },
}
}


</script>

 <style scoped>

  .left{
    float: left;
  }
  .right{
    float: right;
  }
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
