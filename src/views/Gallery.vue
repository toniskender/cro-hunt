<template>
    <div>
      <h1>Gallery</h1>
      <div class="gallery">
        <img v-for="image in images" :src="image.src" :alt="image.alt" :key="image.id">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Gallery',
    data() {
      return {
        images: [
          { id: 1, src: '@/assets/gallery1.jpg', alt: 'Hunting in Lika' },
          { id: 2, src: '@/assets/gallery2.jpg', alt: 'Successful hunt in Slavonia' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .gallery img {
    width: 48%;
    height: auto;
  }
  </style>