<template>
    <!-- Back Button -->
    <button class="back-button" @click="goBack">
    <img src="/img/back.svg" alt="Back" />
    </button>
    <img src="/img/collection0.png" alt="Homepage Image" />
    <ImageCarousel
    background-image="/img/newbg0.png"
    :images="['/img/newbg0-1.png', '/img/newbg0-2.png', '/img/newbg0-3.png', '/img/newbg0-4.png']"
    customClass="custom-carousel-1"
    />
    <ImageCarousel
    background-image="/img/newbg1.png"
    :images="['/img/newbg1-1.png', '/img/newbg1-2.png', '/img/newbg1-3.png', '/img/newbg1-4.png', '/img/newbg1-5.png', '/img/newbg1-6.png', '/img/newbg1-7.png', '/img/newbg1-8.png']"
    customClass="custom-carousel-2"
    />
    <ImageCarousel
    background-image="/img/newbg2.png"
    :images="['/img/newbg2-1.png', '/img/newbg2-2.png', '/img/newbg2-3.png', '/img/newbg2-4.png', '/img/newbg2-5.png']"
    customClass="custom-carousel-3"
    />
    <ImageCarousel
    background-image="/img/newbg3.png"
    :images="['/img/newbg3-1.png', '/img/newbg3-2.png', '/img/newbg3-3.png']"
    customClass="custom-carousel-4"
    />
    <ImageCarousel
    background-image="/img/newbg4.png"
    :images="['/img/newbg4-1.png', '/img/newbg4-2.png', '/img/newbg4-3.png', '/img/newbg4-4.png']"
    customClass="custom-carousel-5"
    />
    <ImageCarousel
    background-image="/img/newbg5.png"
    :images="['/img/newbg5-1.png', '/img/newbg5-2.png', '/img/newbg5-3.png']"
    customClass="custom-carousel-6"
    />
    <ImageCarousel
    background-image="/img/newbg6.png"
    :images="['/img/newbg6-1.png', '/img/newbg6-2.png', '/img/newbg6-3.png', '/img/newbg6-4.png', '/img/newbg6-5.png']"
    customClass="custom-carousel-7"
    />
    
</template>

<script>
import ImageCarousel from './ImageCarousel.vue';

export default {
    name: 'CollectionPage',
    components: {
        ImageCarousel
    },
    methods: {
    // Method to go back to the previous page
    goBack() {
      this.$router.go(-1);  // This will go back to the previous route
    }
    }
}
</script>

<style>
.custom-carousel-1 .current-image {
    padding-top: 100px;
    padding-left: 18%;
}

.custom-carousel-2 .current-image {
    padding-left: 25%;
    padding-top: 80px;
}

.custom-carousel-3 .current-image {
    padding-left: 18%;
    padding-top: 80px;
}

.custom-carousel-4 .current-image {
    padding-left: 18%;
    padding-top: 100px;
}

.custom-carousel-5 .current-image {
    padding-left: 25%;
    padding-top: 80px;
}

.custom-carousel-6 .current-image {
    padding-left: 18%;
    padding-top: 80px;
}

.custom-carousel-7 .current-image {
    padding-left: 18%;
    padding-top: 100px;
}
</style>