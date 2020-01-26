<template>
    <div class="card w-100">
        <div class="card-body">
            <router-link :to="{name: 'bookable', params: {id: id}}"></router-link>
            <h1 class="card-title">
                {{title}}
            </h1>
            <p class="card-text">{{description}}</p>
            <p>{{id}}</p>
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
