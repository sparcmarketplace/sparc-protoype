<template>
  <div class="sign-up-2">
    <h3>Please Input Some More Information</h3>
    <p>First Name:</p>
    <input type="text" v-model="fname" placeholder="Kyle"><br>
    <p>Last Name:</p>
    <input type="text" v-model="lname" placeholder="Ryan"><br>
    <form> <p>Would you like to be a host or an engagee?</p>
      <input type="radio" v-model="chooseone" value="Host"><label for="Host">Host</label><br>
      <input type="radio" v-model="chooseone" value="Engagee"><label for="Engagee">Engagee</label><br>
    </form><br>
    <button @click="signUpDone">Complete Sign Up</button>
    <span>or go back to <router-link to="/login">login</router-link>.</span>
  </div>
</template>

<script>

 export default {
   name: 'signUpDone',
   data() {
     return {
       fname: '',
       lname: '',
       typeentrant: '',
       chooseone: ''
          }
   },
   methods: {
     signUpDone: function() {
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
         },
       }
     }
</script>

<style scoped>
 .sign-up-2 {
   margin-top: 40px;
 }
 template{
   display: inline-block;
 }
form{
  vertical-align: top;
  align-items: right;
}
form {
    width: 80%;
    margin: 0 auto;
}

label, input {
    /* in order to define widths */
    display: inline-block;
}

label {
    width: 30%;
    /* positions the label text beside the input */
    text-align: left;
}

label + input {
    width: 30%;
    /* large margin-right to force the next element to the new-line
       and margin-left to create a gutter between the label and input */
    margin: 0 30% 0 4%;
}

/* only the submit button is matched by this selector,
   but to be sure you could use an id or class for that button */
input + input {
    float: left;
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
