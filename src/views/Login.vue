<template>
  <div class="login">
    <h4>A People-Centric Marketplace</h4>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button @click="login">Login</button>
    <p> If you don't have an account yet, you can <router-link to="/sign-up">create one!</router-link></p>
  </div>
</template>

<script>
  import firebase from 'firebase';
  import db from '@/firebase/init';
  export default {
    name: 'login',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            alert('Login successful!')
            //
            // if db.collection(Users).where("uid", "==", firebase.auth().currentUser.uid).where('host', "==", true).get(){
            //
            // this.$router.replace('home')
            // }
            //
            this.$router.replace('home')
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
      }
    }
  }
</script>

<style scoped>
  .login {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }
  p {
    margin-top: 40px;
    font-size: 13px;
  }
  p a {
    text-decoration: underline;
    cursor: pointer;
  }
</style>
