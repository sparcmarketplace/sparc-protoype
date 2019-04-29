<template lang="html">
  <div id="welcome">
    <button class="myButton" name="enter" @click="start">Begin</button>

    <h1>About SPARC</h1>
    <p>
      SPARC is a platform built on the premise that people have skills and
      expertise <br />
      that are underutilized. With SPARC, people can share their knowledge,
      passion <br />
      and skills with the world while creating a community of people excited
      about the continued <br />
      transfer of conversation, partnership and knowledge. A peer to peer
      network.
    </p>
  </div>
</template>

<script>
export default {
  name: "welcome",
  methods: {
    start: function() {
      this.$router.replace("Login");
    }
  }
};
</script>

<style scoped>
 /*  myButton code from https://www.bestcssbuttongenerator.com/ */
.myButton {
  background-color: #44c767;
  -moz-border-radius: 28px;
  -webkit-border-radius: 28px;
  border-radius: 28px;
  border: 1px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 17px;
  padding: 16px 31px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
}
.myButton:hover {
  background-color: #5cbf2a;
}
.myButton:active {
  position: relative;
  top: 1px;
}
</style>
