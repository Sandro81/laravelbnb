<template>
    <div>
        <item
            item-title="Cheap Villa"
            item-content="A very cheap villa"
            v-bind:price="1000"></item>
        <item
            item-title="Cheap Villa 2"
            item-content="A very cheap villa 2"
            v-bind:price="2000"></item>
    </div>
</template>

<script>
    import BookableListItem from "./BookableListItem";
    export default {
        name: "Bookables",
        components: {
            item: BookableListItem,
        }
    }
</script>

<style scoped>

</style>
