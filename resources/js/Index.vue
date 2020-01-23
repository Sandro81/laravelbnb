<template>
    <div>
        <router-link :to="{ name: 'home'}">Home</router-link>
        <router-link :to="{ name: 'second'}">Second</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Index.vue"
    }
</script>

<style scoped>

</style>
