<template>
    <div>
        xxx
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
        }
    }
</script>

<style scoped>

</style>
