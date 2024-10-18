<template>
    <!-- Back Button -->
    <button class="back-button" @click="goBack">
      <img src="/img/back.svg" alt="Back" />
    </button>
    <img src="/img/trends1.png" alt="Trends Image" />
    <img src="/img/trends2.png" alt="Trends Image" />
    <img src="/img/trends3.png" alt="Trends Image" />
    <img src="/img/trends4.png" alt="Trends Image"/>
    <img src="/img/trends5.png" alt="Trends Image"/>
    <img src="/img/trends6.png" alt="Trends Image" />
    <img src="/img/trends7.png" alt="Trends Image" />
    <img src="/img/trends8.png" alt="Trends Image" />
    <img src="/img/trends9.png" alt="Trends Image" />
    <img src="/img/trends10.png" alt="Trends Image" />
    <img src="/img/trends11.png" alt="Trends Image" />

    
</template>

<script>
export default {
    name: 'TrendsPage',
    methods: {
    // Method to go back to the previous page
    goBack() {
      this.$router.go(-1);  // This will go back to the previous route
    }
    }
}
</script>

<style>
.back-button {
  position: absolute;
  width: 50px;
  height: 50px;
  right: 5%;
  margin: auto;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2; /* Ensure it's on top of other content */
}

img {
    width: 100%;
}
</style>