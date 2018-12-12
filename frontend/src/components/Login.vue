<template>
    <div>
        <form action="http://localhost:3000/auth/login"
                >
            <label for="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Username..">

            <label for="password">Password</label>
            <input type="text" id="password" name="password" placeholder="Your password..">

            <input type="submit" value="Login">
        </form>
    </div>
</template>

<script>
export default {
  name: 'Login',
  created() {
    setTimeout(() => {
      const title = document.getElementsByTagName('title')[0];
      title.innerHTML = 'Login';
      console.log(title);
    })
  }
}
</script>

<style scoped>
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #19171f;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: rgb(163, 163, 163);
  color: black;
}

div {
  border-radius: 5px;
  background-color: #414040;
  padding: 20px;
  width: 60%;
}
</style>


