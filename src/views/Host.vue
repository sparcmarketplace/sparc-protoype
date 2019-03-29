<template>
  <div class="host-create">
    <h3>Please input information to create an engagement!</h3>
    <p>Title:</p>
    <input type="text" v-model="title" placeholder="Consulting for Undergraduates"><br>
    <p>Date and Time:</p>
    <input type="text" v-model="date" placeholder="December 17th at 6:30 PM"><br>
    <p>Please give a brief description of the event</p>
    <textarea rows="4" cols="50" placeholder = "We will discuss company culture at..."></textarea><br>
    <button @click="create">Create Engagement</button> <br>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'host',
  methods: {
    logout: function() {
        alert('Logout successful!')
        this.$router.replace('login')
    },
    create: function(){
      alert('Engagement Created!')
      this.$router.replace('host')
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
