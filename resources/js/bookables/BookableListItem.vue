<template>
    <div class="card">
        <div class="card-body">
            <h1 class="card-title">
                {{itemTitle}}
            </h1>
            <p class="card-text">{{itemContent}}</p>
            <p>{{price}}</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: "BookableListItem",
        props: {
            itemTitle: String,
            itemContent: String,
            price: Number,
    },
    }
</script>

<style scoped>

</style>
