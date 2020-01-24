<template>
    <div>
        <div v-if="loading">
            Data is loading...
        </div>
        <div v-else>
            <item
                v-for="(bookable, index) in bookables" v-bind:key="index"
                :item-title="bookable.title"
                :item-content="bookable.content"
                :price="bookable.price"
            ></item>
        </div>

    </div>
</template>

<script>
    import BookableListItem from "./BookableListItem";
    export default {
        name: "Bookables",
        data() {
            return {
                bookables: null,
                loading: false
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
            this.loading = true;
            setTimeout(() => {
                this.bookables =
                    [
                        {
                            title: "Cheap villa!",
                            content: "A very cheap villa",
                            price: 1000
                        },
                        {
                            title: "Cheap villa 2",
                            content: "A very cheap villa 2",
                            price: 1500
                        },
                        {
                            title: "Cheap villa 3",
                            content: "A very cheap villa 2",
                            price: 1500
                        },
                        {
                            title: "Cheap villa 4",
                            content: "A very cheap villa 2",
                            price: 1500
                        },
                        {
                            title: "Cheap villa 5",
                            content: "A very cheap villa 2",
                            price: 1500
                        }
                    ];
                this.loading = false;
            }, 2000);

        },
        beforeMount() {
            console.log('beforeMount');
            console.log('this.bookables'+this.bookables);
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
