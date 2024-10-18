<template>
    <div class="main-content">
        <img src="/img/homepage-bg.png" alt="Homepage Image" />
        <div class="categories">
            <h1 class="trends" @click="goToTrends">TRENDS</h1>
            <h1 class="collection" @click="goToCollection">COLLECTION</h1>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goToTrends() {
            this.$router.push('/trends'); // Navigate to TrendsPage
        },
        goToCollection() {
            this.$router.push('/collection'); // Navigate to CollectionPage
        }
    }
}
</script>

<style scoped>
.main-content {
    width: 100%;
    position: relative;
    text-align: center; /* Optional: Center the text */
    height: 100vh;
}

img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1; /* Lower z-index to ensure it stays behind text */
}

.categories {
    position: relative;
    z-index: 2; /* Ensure the text stays on top of the image */
    display: flex;
    flex-direction: column; /* Stack the h1 elements vertically */
    align-items: center;    /* Horizontally center the h1 elements */
    gap: 45px; /* Add space between the two circles */
    padding-top: 135px;
}

h1 {
    position: relative;
    color: white; /* Optional: Set text color to contrast the image */
    margin: 0;
    padding: 10px;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
}

.trends {
    background-color: rgb(152, 156, 123);
}
.collection {
    background-color: rgb(50, 56, 46);
}
</style>
