<template>
  <div class="thanks">
    <h1>Thank you for signing up!</h1>
    <p><router-link to="/home">Back</router-link></p>
  </div>
</template>
<script>
export default {
  name: 'return',
  methods: {
    return: function() {
        this.$router.replace('home')
    }
  }
}
</script>
