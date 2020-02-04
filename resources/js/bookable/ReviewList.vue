<template>
    <div style="padding: 1.25rem">
        <h6>Review List</h6>
        <div class="border-bottom d-none d-md-block" v-for="number in 3" :key="number">
            <div class="row pt-4">
                <div class="col-md-6">Sandro Fioravanti</div>
                <div class="col-md 6 d-flex justify-content-end">STAR RATING</div>
            </div>
            <div class="row">
                <div class="col-md-12">Added 5 minutes ago</div>
            </div>
            <div class="row pt-4">
                <div class="col-md-12">
                    Content of the review
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            bookableId: String
        },
        name: "ReviewList",
        data() {
            return{
                loading: false,
                reviews: null
            }
        },
        created() {
            this.loading = true;
            axios.get(`/api/bookables/${bookableId}/reviews`);
        }
    }
</script>

<style scoped>

</style>
