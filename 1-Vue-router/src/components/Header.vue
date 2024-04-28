<template>
    <header>
      <router-link to="/" class="nav-link">Home</router-link> |
      <router-link to="/about" class="nav-link">About</router-link> |
      <router-link to="/movies" class="nav-link">Movies</router-link> |
      <router-link to="/users" class="nav-link">Users</router-link> |
      <router-link to="/products" class="nav-link">Products</router-link>
    </header>
  </template>
  
  <script>
  // No need to import 'router-link' as a component in Vue Router 4
  export default {
    // Add your component logic here, if needed
  };
  </script>
  
  <style scoped>
  header {
    background-color: black;
    padding: 10px;
    text-align: center;
  }
  
  .nav-link {
  margin-right: 10px;
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.nav-link:hover {
  color: aqua;
  text-decoration: underline;
}

.nav-link:visited {
  color: none;
 }

  </style>
  