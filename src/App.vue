<template>
  <nav>
    <Header />
  </nav>
  <router-view />
</template>
<script>
import Header from './components/Header.vue'
export default {
  name: "App",
  components: {
    Header
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #502c2c;
}

nav {
  padding: 30px;
  background-color: aquamarine;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

body {
  margin: 0px;
}

.register input,
.login input {
  width: 300px;
  height: 40px;
  padding-left: 4px;
  display: block;
  border: 1px solid skyblue;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
}

.register button,
.login button {
  width: 310px;
  height: 40px;
  background-color: skyblue;
  border-color: skyblue;
  cursor: pointer;
}

.logo {
  width: 200px;
}
</style>
