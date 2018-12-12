<template>
  <div class="app">

    <div class="header">
      <img src="https://img.icons8.com/ios/60/ffffff/skydrive-filled.png">
      <span>Miniline.net</span>
    </div>

    <div class="nav" @scroll="onScroll" :style="{ 'position': navPosition }">
      <ul>
        <!-- Основное меню -->
        <li>
          <img src="https://img.icons8.com/metro/20/ffffff/home.png">
          <router-link to="/">
            <a>Главная</a>
          </router-link>  
        </li>
        <li>
          <img src="https://img.icons8.com/ios/20/ffffff/edit-file-filled.png">
          <a>Добавить пост</a>
        </li>

        <!-- Логин Регистрация или Профиль -->
        <li class="li-auth" v-if="!isAuth">
          <img src="https://img.icons8.com/ios-glyphs/20/ffffff/student-registration.png">
          <router-link to="/auth/reg">
            <a>Регистрация</a>
          </router-link>  
        </li>
        <li class="li-auth" v-if="!isAuth">
          <img src="https://img.icons8.com/material/20/ffffff/login-rounded.png">
          <router-link to="/auth/login">
            <a>Логин</a>
          </router-link>  
        </li>

        <li class="li-auth" v-if="isAuth">
          <img src="https://img.icons8.com/android/20/ffffff/user.png">
          <a href="#">Профиль</a>
        </li>
      </ul>
    </div>

    <div class="content">
      <router-view/>
    </div>

    <div class="footer">
      <p>All right reserved 2018</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      navPosition: 'static'
    }
  },
  computed: {
    //Проверка авторизации
    isAuth: function() {
      return false;
    }
  },
  methods: {
    onScroll() {
      let navBar = this.$el.querySelector('.nav');
      let header = this.$el.querySelector('.header');

      if(window.pageYOffset > header.offsetHeight)
      {
        this.navPosition = 'fixed';
        header.style.marginBottom = navBar.offsetHeight + 'px';
      } else {
        this.navPosition = 'static';
        header.style.marginBottom = 0;
      }
    },
  },
  created () {
    window.addEventListener('scroll', this.onScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.onScroll);
  }
}

</script>

<style>

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  background-color: black;
  width: 100ww;
  height: 100vh;
}

.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: flex;
  width: 100%;
  flex-direction: column;
  color: white;
  align-items: center;
}

.header {
  width: 100%;
  line-height: 100px;
}

.header img {
  margin-left: 10px;
}

.header span {
  font-size: 30pt;
  font-weight: bold;
}

.nav {
  background-color: #1a2026;
  width: 96%;
  font-size: 12pt;
  box-shadow: 0 4px 10px -2px black;
}

.nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.nav li {
  float: left;
  padding: 10px;
}

.nav li:hover {
  background:#060a0e;
  cursor: pointer;
}

.nav li img {
  margin-right: 5px;
}

.nav li a {
  margin-right: 10px;
  text-decoration: none;
  color: white;
}

.nav .li-auth {
  float: right;
  padding: 10px;
}

.content {
  background-color: #0f0f12;;
  width: 96%;
  min-height: 700px;
  padding: 50px 20px 50px 20px;
  display: flex;
  justify-content: center;
  align-items: baseline;
}

.footer {
  background-color: #1a2026;
  text-align: center;
  width: 96%;
  line-height: 50px;
}
</style>
