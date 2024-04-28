<template>
    <div>
      <h1>Home</h1>
      <ul>
        <li v-for="item in items" :key="item.id">
          <router-link :to="{ name: 'details', params: { id: item.id } }">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: []
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        this.$axios.get('http://localhost:3000/items')
          .then(response => {
            this.items = response.data;
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }
    }
  };
  </script>
  