<template>
  <div class="main">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data () {
    return {
      msg: 'Welcome to main page!!!'
    }
  },
  created() {
    setTimeout(() => {
      const title = document.getElementsByTagName('title')[0];
      title.innerHTML = 'Main Page';
      console.log(title);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
