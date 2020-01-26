<template>
    <div class="card w-100">
        <div class="card-body">
            <h1 class="card-title">
                {{title}}
            </h1>
            <p class="card-text">{{description}}</p>
            <p>{{price}}</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: "BookableListItem",
        props: {
            title: String,
            description: String,
            id: Number,
    },
    }
</script>

<style scoped>

</style>
