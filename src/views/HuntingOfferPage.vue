<template>
  <div class="hunting-offer">
    <h1>What We Offer</h1>
    <div class="offerings">
      <div class="offering" v-for="(offer, index) in offers" :key="offer.title">
        <img :src="offer.image" :alt="offer.title">
        <div class="offering-details">
          <h2>{{ offer.title }}</h2>
          <h3>{{ offer.subtitle }}</h3>
          <p><strong>📅 Hunting time:</strong> {{ offer.season }}</p>
          <p>{{ showFullDescription[index] ? offer.fullDescription : offer.shortDescription }}</p>
          <button @click="toggleDescription(index)">{{ showFullDescription[index] ? 'Show Less' : 'Read More' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HuntingOfferPage',
  data() {
    return {
      showFullDescription: [],
      offers: [
        {
          title: 'Bear Hunting',
          subtitle: 'Ursus arctos',
          season: '01.03. - 15.05. i 16.09. - 15.12.',
          shortDescription: 'Bear Hunting in Croatia is an adventure like no other...',
          fullDescription: `Bear Hunting in Croatia is an adventure like no other. 
            The Croatian wilderness is home to the brown bear, a formidable and sought-after game species. 
            With a hunting season from March to May and September to December, hunters have the chance to track 
            and hunt these impressive animals in their natural habitat. The dense forests and rugged terrain 
            provide a challenging yet rewarding hunting experience. Guided by experts, you'll learn the best 
            techniques for a successful bear hunt while enjoying the breathtaking beauty of Croatia's wild landscapes.`,
          image: require('@/assets/images/Medvjed.jpeg')
        },
        {
          title: 'Red Stag Hunting',
          subtitle: 'Cervus elaphus',
          season: '16.08. - 15.01.',
          shortDescription: 'Red Stag Hunting in Croatia offers a thrilling and majestic experience...',
          fullDescription: `Red Stag Hunting in Croatia offers a thrilling and majestic experience. Croatia's diverse landscapes 
            provide the perfect setting for hunting these magnificent animals. Known for their impressive antlers and powerful build, 
            red stags roam freely in the dense forests and open fields. The hunting season typically runs from mid-August to mid-January, 
            offering ample opportunities to encounter these elusive creatures. Experienced guides will lead you through the best hunting grounds, 
            ensuring a memorable and successful hunt.`,
          image: require('@/assets/images/Karlo.jpg')
        },
        {
          title: 'Chamois Hunting',
          subtitle: 'Rupicapra rupicapra',
          season: '01.10. - 31.01.',
          shortDescription: 'Chamois Hunting in Croatia offers a unique and exhilarating experience...',
          fullDescription: `Chamois Hunting in Croatia offers a unique and exhilarating experience. The chamois, a highly agile and elusive mountain goat, 
            thrives in the rocky terrains and steep slopes of Croatia's mountainous regions. The hunting season from October to January is the ideal 
            time to pursue these nimble animals. Hunters will be guided through some of the most picturesque and challenging landscapes, 
            where patience and skill are key to a successful hunt. This hunt not only promises a rewarding game but also an opportunity to witness 
            the stunning natural beauty of Croatia's highlands.`,
          image: require('@/assets/images/Divokoza.jpg')
        },
        {
          title: 'Roe Deer Hunting',
          subtitle: 'Capreolus capreolus',
          season: '01.05. - 30.09.',
          shortDescription: 'Roe Deer Hunting in Croatia provides a captivating and accessible hunting experience...',
          fullDescription: `Roe Deer Hunting in Croatia provides a captivating and accessible hunting experience. The roe deer, known for its agility and beauty, 
            is abundant in Croatia's mixed forests and agricultural landscapes. The hunting season spans from May to September, allowing hunters to experience 
            the thrill of stalking and shooting in a variety of terrains. Whether you're a seasoned hunter or a beginner, roe deer hunting offers a perfect 
            balance of challenge and enjoyment. Experienced guides will help you navigate the best hunting grounds to ensure a fruitful and memorable hunt.`,
          image: require('@/assets/images/R8.jpeg')
        },
        {
          title: 'Wild Boar Hunting',
          subtitle: 'Sus scrofa',
          season: 'tokom cijele godine',
          shortDescription: 'Wild Boar Hunting in Croatia is a popular and thrilling pursuit...',
          fullDescription: `Wild Boar Hunting in Croatia is a popular and thrilling pursuit. Croatia's dense forests and farmlands are home to a healthy population 
            of wild boar, making it a prime destination for this type of hunt. The hunting season is open year-round, providing flexibility and numerous 
            opportunities for hunters. Known for their cunning and strength, wild boars offer an exciting challenge for any hunter. With the guidance of 
            skilled local hunters, you'll learn the best techniques to track and take down these formidable animals while exploring the beautiful and varied 
            Croatian landscapes.`,
          image: require('@/assets/images/Prasci.jpeg')
        }
      ]
    };
  },
  methods: {
    toggleDescription(index) {
      this.showFullDescription[index] = !this.showFullDescription[index];
    }
  },
  mounted() {
    this.showFullDescription = this.offers.map(() => false);
  }
};
</script>

<style scoped>
.hunting-offer {
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

.offerings {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.offering {
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  cursor: pointer;
  background-color: #ffffff; /* Bijela pozadina za kartice */
}

.offering:hover {
  transform: scale(1.05);
}

.offering img {
  width: 100%;
  height: 300px; /* Dimenzije slika */
  object-fit: cover;
}

.offering-details {
  padding: 20px;
  text-align: left;
}

.offering-details h2 {
  font-size: 1.5em;
  margin: 10px 0 5px;
  color: #2c3e50; /* Tamnija nijansa za naslove */
}

.offering-details h3 {
  font-size: 1.2em;
  margin: 5px 0;
  color: #777;
}

.offering-details p {
  margin: 5px 0;
}

button {
  background-color: #505b3e;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #687d55;
}
</style>