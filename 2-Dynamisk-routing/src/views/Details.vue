<template>
    <div>
      <h1>Details</h1>
      <p>ID: {{ item.id }}</p>
      <p>Name: {{ item.name }}</p>
      <p>Description: {{ item.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        item: {}
      };
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        const itemId = this.$route.params.id;
  
        this.$axios.get(`http://localhost:3000/items/${itemId}`)
          .then(response => {
            this.item = response.data;
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }
    }
  };
  </script>
  