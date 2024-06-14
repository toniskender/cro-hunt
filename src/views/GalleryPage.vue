<template>
  <div class="gallery">
    <h1>Gallery</h1>
    <div class="image-grid">
      <div class="image-item" v-for="(image, index) in images" :key="index" @click="showImage(index)">
        <img :src="image.src" :alt="image.alt">
      </div>
    </div>
    <vue-easy-lightbox
      :visible="visible"
      :imgs="imageList"
      :index="index"
      @hide="handleHide"
    />
  </div>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox';

export default {
  name: 'GalleryPage',
  components: {
    VueEasyLightbox
  },
  data() {
    return {
      images: [
        { src: require('@/assets/images/Pogled2.jpg'), alt: 'Pogled 2' },
        { src: require('@/assets/images/Kosnja.jpg'), alt: 'Kosnja' },
        { src: require('@/assets/images/Jelen_ktc.jpg'), alt: 'Jelen ktc' },
        { src: require('@/assets/images/Jelen12.jpg'), alt: 'Jelen' },
        { src: require('@/assets/images/Tumac_ljepsa.jpeg'), alt: 'Tumac' },
        { src: require('@/assets/images/Rinac.jpg'), alt: 'Rinac' },
        { src: require('@/assets/images/Prasac_pas.jpg'), alt: 'Prasac i pas' },
        { src: require('@/assets/images/Srnjak_ivor.jpg'), alt: 'Srnjak' },
        { src: require('@/assets/images/Ceka.jpg'), alt: 'Ceka' },
        { src: require('@/assets/images/Baranja.jpg'), alt: 'Baranja' },
        { src: require('@/assets/images/Ceka_2.jpg'), alt: 'Ceka 2' },
        { src: require('@/assets/images/Jelen_tumac.jpg'), alt: 'Jelen Tumac' },
        { src: require('@/assets/images/Karlo.jpg'), alt: 'Karlo' },
        { src: require('@/assets/images/Medvjed_panj.jpg'), alt: 'Medvjed na panju' },
        { src: require('@/assets/images/Jelen_2023.jpg'), alt: 'Pogled 2' },
        { src: require('@/assets/images/Prasac.jpeg'), alt: 'Pogled 2' },
        { src: require('@/assets/images/Konjska_glava.jpg'), alt: 'Pogled 2' },
        { src: require('@/assets/images/Potraga.jpg'), alt: 'Pogled 2' },
        { src: require('@/assets/images/Blacki.jpg'), alt: 'Pogled 2' },
        { src: require('@/assets/images/Paul_medvjed.jpg'), alt: 'Pogled 2' },
        { src: require('@/assets/images/Divokoza.jpg'), alt: 'Pogled 2' },
        { src: require('@/assets/images/Slavonija.jpeg'), alt: 'Pogled 2' },
        { src: require('@/assets/images/R8.jpeg'), alt: 'Pogled 2' },
        { src: require('@/assets/images/Medvjed_skup.jpeg'), alt: 'Pogled 2' },
        { src: require('@/assets/images/Gams.jpg'), alt: 'Pogled 2' },
        // Dodajte više slika ovdje
      ],
      visible: false,
      index: 0
    };
  },
  computed: {
    imageList() {
      return this.images.map(image => image.src);
    }
  },
  methods: {
    showImage(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    }
  }
};
</script>

<style scoped>
.gallery {
  text-align: center;
  padding: 20px;
  background-color: #f5f5f5; /* Svijetla pozadina za cijelu stranicu */
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #ffffff; /* Bijela boja za naslov */
  background-color: #505b3e; /* Maslinasto zelena pozadina za naslov */
  padding: 10px;
  border-radius: 5px;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); /* Povećane dimenzije */
  gap: 20px;
}

.image-item {
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  cursor: pointer;
}

.image-item:hover {
  transform: scale(1.05);
}

.image-item img {
  width: 100%;
  height: 400px; /* Povećana visina */
  object-fit: cover; /* Zadržava proporcije i ispunjava okvir */
  display: block;
}
</style>