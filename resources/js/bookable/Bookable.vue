<template>
    <div class="row">
        <div class="col-md-8 pb-4">
            <div class="card">
                <div class="card-body">
                    <div v-if="!loading">
                        <h2>{{bookable.title}}</h2>
                        <hr>
                        <article>{{bookable.description}}</article>
                    </div>
                    <div v-else>Loading...</div>
                </div>
            </div>
            <reviewList :bookable-id="this.$route.params.id"></reviewList>
        </div>
        <div class="col-md-4 pb-4">
            <availabilty :bookable-id="this.$route.params.id"></availabilty>
        </div>
    </div>
</template>

<script>
    import Availabilty from "./Availabilty";
    import ReviewList from "./ReviewList";
    export default {
        components: {
            Availabilty,
            ReviewList
        },
        name: "Bookable",
        data() {
            return {
                bookable: null,
                loading: false
            }
        },
        created() {
            this.loading = true;
            console.log('this.$route.params.id ' + this.$route.params.id);
            axios.get(`http://localhost/laravelbnb/public/api/bookables/${this.$route.params.id}`)
                .then(response => {
                    this.bookable = response.data.data;
                    this.loading = false;
                });
        }
    }
</script>

<style scoped>

</style>
