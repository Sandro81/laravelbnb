<template>
    <div>
        <item
            :item-title="bookable1.title"
            :item-content="bookable1.content"
            v-bind:price="1000"></item>
        <item
            :item-title="bookable2.title"
            :item-content="bookable2.content"
            v-bind:price="2000"></item>
    </div>
</template>

<script>
    import BookableListItem from "./BookableListItem";
    export default {
        name: "Bookables",
        data() {
            return {
                bookable1: null,
                bookable2: null
            }
        },
        components: {
            item: BookableListItem,
        },
        beforeCreate() {
            console.log('beforeCreate');
        },
        created() {
            console.log('created');
            console.log('this.bookable1 '+this.bookable1);
            setTimeout(() => {
                this.bookable1 = {
                    title: "Cheap villa!",
                    content: "A very cheap villa"
                },
                this.bookable2 = {
                    title: "Cheap villa 2",
                    content: "A very cheap villa 2"
                }
            }, 3000);
        },
        beforeMount() {
            console.log('this.bookable2'+this.bookable2);
        },
        mounted() {
            console.log('mounted');
        },
        beforeDestroy() {
            console.log('beforeDestroy');
        },
        destroyed() {
            console.log('destroyed');
        },

    }
</script>

<style scoped>

</style>
