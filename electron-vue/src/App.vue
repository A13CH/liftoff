<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/event_registration">Event Registration</router-link> | 
    <router-link to="/Calendar">Calendar</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color:rgb(0, 0, 0);
}

nav a.router-link-exact-active {
  color:rgb(65, 133, 229);
}
</style>
