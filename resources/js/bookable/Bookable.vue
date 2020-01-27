<template>
    <div class="row">
        <div class="col-md-4">
            <div class="card-body">
                <div v-if="!loading">
                    <h2>{{bookable.title}}</h2>
                    <hr>
                    <article>{{bookable.description}}</article>
                </div>
                <div v-else>Loading...</div>
            </div>
            availablity & prices
        </div>
    </div>
</template>

<script>
    export default {
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
