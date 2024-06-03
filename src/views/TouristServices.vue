<template>
    <div>
      <h1>Tourist Services</h1>
      <p>Explore our packages and services for the best hunting experience.</p>
      <div class="service" v-for="service in services" :key="service.id">
        <h2>{{ service.name }}</h2>
        <p>{{ service.description }}</p>
        <p>Price: {{ service.price }} EUR</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TouristServices',
    data() {
      return {
        services: [
          { id: 1, name: 'Guided Hunting Tour', description: 'Includes guide, equipment, and permits.', price: 200 },
          { id: 2, name: 'Weekend Hunting Package', description: 'All-inclusive package for a weekend.', price: 500 }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .service {
    margin-top: 20px;
  }
  </style>