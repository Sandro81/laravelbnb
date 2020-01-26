<template>
    <div class="row">
        <div class="col-md-8">
            <div class="col-md-4">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Bookable",
        data() {
            return {
                bookable: null,
            }
        },
        created() {
            console.log('this.$route.params.id ' + this.$route.params.id);
            axios.get(`http://localhost/laravelbnb/public/api/bookables/${this.$route.params.id}`)
            .then(response => (this.bookable = response.data));
        }
    }
</script>

<style scoped>

</style>
