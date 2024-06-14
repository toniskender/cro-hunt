<template>
  <div class="home">
    <!-- Slika ispod navigacijskog menija -->
    <div class="banner-container">
      <img src="@/assets/images/Pogled.jpg" alt="Banner" class="banner">
    </div>
    <!-- CRO Hunt i opis -->
    <div class="intro-section">
      <div class="intro-text">
        <h2>CRO Hunt</h2>
      </div>
      <div class="intro-description">
        <p>Welcome to the official website of the hunting agency "CRO Hunt". Our headquarters are in Croatia, one of the most beautiful regions with a rich hunting tradition. Hunting is our passion and profession. If you are one of those people who still enjoy nature, the great outdoors and the thrill of the hunt, then you are what we want! Come and join us for an unforgettable hunting experience in Croatia and the rest of the world, you won't regret it!</p>
        <p>On behalf of our team, we wish you all a successful hunt – DOBRA KOB!</p>
      </div>
    </div>
    <!-- Nova slika ispod opisa -->
    <div class="intro-image">
      <img src="@/assets/images/Tumac_ljepsa.jpeg" alt="Intro Image" class="intro-img">
    </div>
    <!-- Ponuda lova -->
    <div class="section">
      <h2 class="section-title">What We Offer</h2>
      <div class="offerings">
        <div class="offering" @click="goToOffer('bear')">
          <img src="@/assets/images/Medvjed.jpeg" alt="Bear Hunting">
          <div class="offering-overlay">
            <div class="offering-text">Bear Hunting</div>
          </div>
        </div>
        <div class="offering" @click="goToOffer('red_stag')">
          <img src="@/assets/images/Jelen.jpeg" alt="Red Stag Hunting">
          <div class="offering-overlay">
            <div class="offering-text">Red Stag Hunting</div>
          </div>
        </div>
        <div class="offering" @click="goToOffer('chamois')">
          <img src="@/assets/images/Divokoza.jpg" alt="Chamois Hunting">
          <div class="offering-overlay">
            <div class="offering-text">Chamois Hunting</div>
          </div>
        </div>
        <div class="offering" @click="goToOffer('roe_deer')">
          <img src="@/assets/images/Srnjak.jpg" alt="Roe Deer Hunting">
          <div class="offering-overlay">
            <div class="offering-text">Roe Deer Hunting</div>
          </div>
        </div>
        <div class="offering last-offering" @click="goToOffer('wild_boar')">
          <img src="@/assets/images/Prasci.jpeg" alt="Wild Boar Hunting">
          <div class="offering-overlay">
            <div class="offering-text">Wild Boar Hunting</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    goToOffer(offer) {
      this.$router.push({ name: 'HuntingOffer', params: { offer } });
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.home {
  padding-top: 0; /* Uklanjanje paddinga na vrhu */
  font-family: 'Roboto', sans-serif;
}

header {
  margin: 0; /* Uklonite marginu */
  padding: 0; /* Uklonite padding */
}

.banner-container {
  display: flex;
  align-items: center;
  margin: 0; /* Uklonite marginu */
  padding: 0; /* Uklonite padding */
  flex-wrap: wrap;
  width: 100%; /* Osigurava da kontejner zauzima punu širinu */
}

.banner {
  width: 100%; /* Povećava širinu slike na 100% */
  height: 773.39px; /* Postavljanje fiksne visine slike */
  object-fit: cover;
}

.intro-section {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  padding: 20px;
  background-color: #505b3e; /* Maslinasto zelena boja */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.intro-text {
  flex: 1;
  font-size: 2.5em;
  color: #ffffff; /* Bijela boja za tekst */
}

.intro-description {
  flex: 2;
  margin-left: 20px;
  font-size: 1.2em;
  color: #ffffff; /* Bijela boja za tekst */
}

/* Stilizacija nove slike */
.intro-image {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.intro-img {
  width: 70%; /* Širina slike koja nije preko cijele stranice */
  height: 900px; /* Visina slike */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.section {
  margin: 20px 0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.section-title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5em;
  color: #333;
  position: relative;
}

.section-title::after {
  content: '';
  width: 80px;
  height: 4px;
  background-color: #505b3e; /* Maslinasto zelena boja */
  display: block;
  margin: 10px auto 0;
  border-radius: 2px;
}

.offerings {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px; /* Smanjen razmak između slika */
  justify-content: center;
  max-width: 1000px; /* Povećanje maksimalne širine */
  margin: 0 auto;
}

.offering {
  position: relative;
  width: 100%; /* Manja širina slike */
  height: 300px; /* Manja visina slike */
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Dodavanje sjene */
}

.offering img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.offering:hover {
  transform: scale(1.05);
}

.offering-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5); /* Tamnija pozadina */
  opacity: 0;
  transition: opacity 0.3s ease;
}

.offering:hover .offering-overlay {
  opacity: 1;
}

.offering-text {
  color: #ffffff;
  font-size: 1.2em;
  text-align: center;
  padding: 10px;
}

.last-offering {
  grid-column: span 2; /* Zadnja opcija zauzima dvije kolone */
  justify-self: center; /* Centriranje zadnje opcije */
}

@media (max-width: 768px) {
  .banner {
    width: 100%;
    margin: 0;
  }

  .intro-text {
    width: 100%;
    margin-top: 20px;
  }

  .banner-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .offerings {
    grid-template-columns: 1fr;
  }

  .last-offering {
    grid-column: span 1;
  }
}
</style>