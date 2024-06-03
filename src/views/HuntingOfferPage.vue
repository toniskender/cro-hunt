<template>
  <div class="offer">
    <h1>{{ offerTitle }}</h1>
    <p>{{ offerDescription }}</p>
  </div>
</template>

<script>
const offers = {
  bear: {
    title: 'Bear Hunting',
    description: 'Bear hunting is a thrilling experience for those who seek adventure and a true challenge...'
  },
  red_stag: {
    title: 'Red Stag Hunting',
    description: 'Red Stag hunting is particularly popular in our forests and mountains...'
  },
  chamois: {
    title: 'Chamois Hunting',
    description: 'Chamois are one of the most attractive hunting animals in Croatia...'
  },
  roe_deer: {
    title: 'Roe Deer Hunting',
    description: 'Roe deer are beloved among hunters for their beauty and the challenge they present...'
  },
  wild_boar: {
    title: 'Wild Boar Hunting',
    description: 'Wild boars are a common hunting target due to their abundance and wide distribution...'
  }
};

export default {
  name: 'HuntingOfferPage',
  computed: {
    offerTitle() {
      const offer = this.$route.params.offer;
      return offers[offer] ? offers[offer].title : 'Hunting Offer';
    },
    offerDescription() {
      const offer = this.$route.params.offer;
      return offers[offer] ? offers[offer].description : 'Description is not available for this offer.';
    }
  }
};
</script>

<style scoped>
.offer {
  padding: 20px;
}

h1 {
  font-size: 2em;
  color: #333;
}

p {
  font-size: 1.2em;
  color: #666;
}
</style>