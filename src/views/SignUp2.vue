<template>
  <div class="sign-up-2">
     <form enctype="multipart/form-data" action="uploader.php" method="POST">
        <input type="hidden" name="MAX_FILE_SIZE" value="100000" />
            Choose a file to upload: <input name="uploadedfile" type="file" /><br />
        <input type="submit" value="Upload File" />
</form>
    <button @click="signUpDone">Complete Sign Up</button>
    <span>or go back to <router-link to="/login">login</router-link>.</span>
  </div>
</template>

<script>
  uploadedFile.addEventListener('change', function(e)){
    e.preventDefault();
    var file = e.target.files[0];

    firebase.storage().ref('profile_pics/' + file.name);

    storageRef.put(file);
  }


</script>


var storageRef = firebase.storage().ref();
var picRef = storageRef.child('profile_pics/' + file.name);

<img src=picRef alt="Profile Picture" width="500" height="333">



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
