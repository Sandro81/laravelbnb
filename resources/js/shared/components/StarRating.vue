<template>

    <div class="d-flex">
        {{rating}}
        <i class="fas fa-star" v-for="star in fullStars" :kkey="'full' + star"></i>
        <i class="fas fa-star-half-alt" v-if="halfStar"></i>
        <i class="far fa-star" v-for="star in emptyStars" :kkey="'empty' + star"></i>
    </div>
</template>

<script>
    export default {
        props: {
            rating: Number
        },
        computed: {
            halfStar() {
                const fraction = this.rating - Math.floor(this.rating);
                console.log(fraction);

                return fraction > 0 && fraction < 50;

            },
            fullStars() {
                // > 4.5 = 5 starts
                // 4.3 = 4 and half
                return Math.round(this.rating);
            },
            emptyStars(){
                // if rating would be 1.9, ceil(1.9) = 2, 5 - 2 = 3, render 3 empty stars
                return 5 - Math.ceil(this.rating);
            },
            created() {
            }
        }
    }
</script>

<style scoped>

</style>
