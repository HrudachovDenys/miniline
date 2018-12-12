<template>
    <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: '404',
  data () {
    return {
      msg: '404 Page Not Found!'
    }
  },
  created() {
    setTimeout(() => {
      const title = document.getElementsByTagName('title')[0];
      title.innerHTML = '404';
      console.log(title);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
