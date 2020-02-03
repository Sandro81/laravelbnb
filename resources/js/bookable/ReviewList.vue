<template>
    <div>
        <h6>Review List</h6>
        <div class="border-bottom" v-for="number in 3" :key="number">
            <div class="row">
                <div class="col-md-6">Sandro Fioravanti</div>
                <div class="col-md 6">STAR RATING</div>
            </div>
            <div class="row">
                <div class="col-md-12">Added 5 minutes ago</div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    Content of the review
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ReviewList"
    }
</script>

<style scoped>

</style>
