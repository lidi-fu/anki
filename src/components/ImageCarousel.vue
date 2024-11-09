<template>
    <div :class="['image-container', customClass]">
      <img :src="backgroundImage" alt="Background Image" class="background-image" />
      <div class="pic_button">
        <img :src="currentImage" alt="Collection Image" class="current-image" />
        <div class="buttons">
          <img src="/img/previous.svg" alt="Previous" class="button prev-button" @click="prevImage" />
          <img src="/img/next.svg" alt="Next" class="button next-button" @click="nextImage" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImageCarousel',
    props: {
      backgroundImage: {
        type: String,
        required: true
      },
      images: {
        type: Array,
        required: true
      },
      customClass: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        currentImageIndex: 0
      };
    },
    computed: {
      currentImage() {
        return this.images[this.currentImageIndex];
      }
    },
    methods: {
      prevImage() {
        if (this.currentImageIndex > 0) {
          this.currentImageIndex--;
        } else {
          this.currentImageIndex = this.images.length - 1;
        }
      },
      nextImage() {
        if (this.currentImageIndex < this.images.length - 1) {
          this.currentImageIndex++;
        } else {
          this.currentImageIndex = 0;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .image-container {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
  }
  
  .pic_button {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }
  
  .current-image {
    position: relative;
    z-index: 2;
    width: 42%;
    padding-left: 40px;
    padding-top: 50px;
  }
  
  .buttons {
    position: absolute;
    bottom: 15%;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 100px;
    left: 25%;
  }
  
  .button {
    width: 30px;
    z-index: 3;
    cursor: pointer;
  }
  
  .prev-button {
    left: 10px;
  }
  
  .next-button {
    right: 10px;
  }
  </style>
  