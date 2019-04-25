<template>
  <div class="sign-up">

    <p>Sign Up for SPARC!</p>
    <div class = "left">
      <p>Enter your Duke email:</p>
    <input type="text" v-model="email" placeholder="coffee@duke.edu"><br>
      <p>Enter the password you want to use!</p>
    <input type="password" v-model="password" placeholder="javabeans123"><br>
    <p>Please write up a short biography about yourself and your interests! (approx 100 - 200 words)</p>
    <textarea rows="4" cols="50" placeholder = "Raised in a small town in Ireland, I...."></textarea><br>
    <p>Graduation Year</p>
    <select class="grad" name="gradyear">
      <option value="senior">2019</option>
      <option value="junior">2020</option>
      <option value="soph">2021</option>
      <option value="fresh">2022</option>
      <option value="pfrosh">2023</option>
    </select>
  </div>
    <div class = "right">
      <p>Full Name:</p>
      <input type="text" v-model="name" placeholder="Kyle Ryan"><br>
      <p>Age:</p>
      <input type="text" v-model="age" placeholder="20"><br>
  <form> <p>Would you like to be a host or an engagee?</p>
    <input type="radio" v-model="chooseone" value="Host"><label for="Host">Host</label><br>
    <input type="radio" v-model="chooseone" value="Engagee"><label for="Engagee">Engagee</label><br>
  </form><br>
  <p>Input your title and information about your place of work or school</p>
  <p> Company/School</p>
<input type="text" v-model="company" placeholder="Goldman Sachs"><br>
<p> Location</p>
<input type="text" v-model="location" placeholder="New York City"><br>
<p> Title</p>
<input type="text" v-model="title" placeholder="Senior Analyst"><br>

  </div>

  <button @click="signUp">Sign Up</button>
  <span>or go back to <router-link to="/login">login</router-link>.</span>
</div>
</template>

 <script>
  import firebase from 'firebase';
  export default {
    name: 'signUp',
    data() {
      return {
        email: '',
        password: '',
        fname: '',
         lname: '',
         typeentrant: '',
         chooseone: ''
      }
    },
    methods: {
      signUp: function() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            alert('User made!')

          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
        switch(this.chooseone){
          case "Host":
            this.$router.replace('host');
            break;
          case "Engagee":
            this.$router.replace('home');
            break;
          default:
            this.$router.replace('home');
        }
       }
      }

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
