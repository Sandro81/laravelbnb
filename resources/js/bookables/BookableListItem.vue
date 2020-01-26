<template>
    <div class="card w-100">
        <div class="card-body">
            <h1 class="card-title">
                {{itemTitle}}
            </h1>
            <p class="card-text">{{itemDescription}}</p>
            <p>{{price}}</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: "BookableListItem",
        props: {
            itemTitle: String,
            itemDescription: String,
            price: Number,
    },
    }
</script>

<style scoped>

</style>
