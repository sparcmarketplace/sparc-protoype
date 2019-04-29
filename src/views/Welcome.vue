 <template lang="html">
   <div id="welcome">

    <button name="enter" @click="start">Begin</button>

    <h1>About SPARC</h1>
    <p>SPARC is a platform built on the premise that people have skills and expertise
    that are underutilized. With SPARC, people can share their knowledge, passion
    and sklls with the world while creating a community of people excited about the continued
   transfer of conversation, partnership and knowledge</p>

   </div>
 </template>

 <script>

 export default {
    name: 'welcome',
    methods: {
        start: function() {
           this.$router.replace('Login')
        }
     }
   }
   
 </script>

  
