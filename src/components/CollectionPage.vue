<template>
    <!-- Back Button -->
    <button class="back-button" @click="goBack">
    <img src="/img/back.svg" alt="Back" />
    </button>
    <img src="/img/collection0.png" alt="Homepage Image" />
    <ImageCarousel
    background-image="/img/collection1.png"
    :images="['/img/collection1-1.png', '/img/collection1-2.png', '/img/collection1-3.png', '/img/collection1-4.png']"
    customClass="custom-carousel-1"
    />
    <ImageCarousel
    background-image="/img/collection2.png"
    :images="['/img/collection2-1.png', '/img/collection2-2.png', '/img/collection2-3.png']"
    customClass="custom-carousel-2"
    />
    <ImageCarousel
    background-image="/img/collection3.png"
    :images="['/img/collection3-1.png', '/img/collection3-2.png', '/img/collection3-3.png', '/img/collection3-4.png']"
    customClass="custom-carousel-3"
    />
    <ImageCarousel
    background-image="/img/collection4.png"
    :images="['/img/collection4-1.png', '/img/collection4-2.png', '/img/collection4-3.png', '/img/collection4-4.png', '/img/collection4-5.png', '/img/collection4-6.png', '/img/collection4-7.png']"
    customClass="custom-carousel-4"
    />
    <ImageCarousel
    background-image="/img/collection5.png"
    :images="['/img/collection5-1.png', '/img/collection5-2.png', '/img/collection5-3.png', '/img/collection5-4.png']"
    customClass="custom-carousel-5"
    />
    <ImageCarousel
    background-image="/img/collection6.png"
    :images="['/img/collection6-1.png', '/img/collection6-2.png', '/img/collection6-3.png', '/img/collection6-4.png']"
    customClass="custom-carousel-6"
    />
    <ImageCarousel
    background-image="/img/collection7.png"
    :images="['/img/collection7-1.png', '/img/collection7-2.png', '/img/collection7-3.png']"
    customClass="custom-carousel-7"
    />
    <ImageCarousel
    background-image="/img/collection8.png"
    :images="['/img/collection8-1.png', '/img/collection8-2.png', '/img/collection8-3.png']"
    customClass="custom-carousel-8"
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
.custom-carousel-1 .buttons {
    left: 12%;
}

.custom-carousel-1 .current-image {
    padding-top: 50px;
}

.custom-carousel-2 .buttons {
    left: 22%;
    bottom: 12%;
}

.custom-carousel-2 .current-image {
    width: 45%;
    padding-bottom: 80px;
    padding-left: 18%;
}

.custom-carousel-3 .buttons {
    left: 42%;
    bottom: 10%;
}

.custom-carousel-3 .current-image {
    padding-top: 100px;
    padding-left: 41%;
}

.custom-carousel-4 .buttons {
    left: 35%;
    bottom: 10%;
}

.custom-carousel-4 .current-image {
    width: 45%;
    padding-bottom: 80px;
    padding-left: 28%;
}

.custom-carousel-5 .buttons {
    left: 12%;
    bottom: 10%;
}

.custom-carousel-5 .current-image {
    padding-top: 100px;
}

.custom-carousel-6 .buttons {
    left: 25%;
    bottom: 10%;
}

.custom-carousel-6 .current-image {
    width: 45%;
    padding-bottom: 80px;
    padding-left: 20%;
}

.custom-carousel-7 .buttons {
    left: 15%;
    bottom: 11%;
}

.custom-carousel-7 .current-image {
    padding-top: 100px;
}

.custom-carousel-8 .buttons {
    left: 25%;
    bottom: 10%;
}

.custom-carousel-8 .current-image {
    width: 43%;
    padding-bottom: 80px;
    padding-left: 20%;
}
</style>