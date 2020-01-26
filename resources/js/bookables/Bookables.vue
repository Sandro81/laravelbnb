<template>
    <div>
        <div v-if="loading">
            Data is loading...
        </div>
        <div v-else class="container">
            <div class="row mb-2" v-for="row in rows" :key="'row' + row">
                <div class="col" v-for="(bookable, column) in bookablesInRow(row)" v-bind:key="'row&columns' + row + column">
                    <item
                        :item-title="bookable.title"
                        :item-content="bookable.content"
                        :price="bookable.price"
                    ></item>
                </div>
                <div class="col" v-for="p in placeholdesInRow(row)" :key="'placeholder' + row + p">
                </div>

            </div>
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
                loading: false,
                columns: 3,
            }
        },
        components: {
            item: BookableListItem,
        },
        methods: {
            bookablesInRow(row){
               return this.bookables.slice((row-1) * this.columns, row * this.columns);
            },
            placeholdesInRow(row) {
                return this.columns - this.bookablesInRow(row).length;
            }
        },
        computed: {
          rows() {
              return this.bookables === null ? 0 : Math.ceil(this.bookables.length / this.columns);
          }
        },
        beforeCreate() {
            console.log('beforeCreate');
        },
        created() {
            console.log('created');
            console.log('this.bookable1 '+this.bookable1);
            this.loading = true;

            const p = new Promise((resolve, reject) => {
               console.log(resolve);
               console.log(reject);
               setTimeout(()=>reject("Hello"), 3000);
            }).then(result => console.log(`Success ${result}`))
            .catch(result => console.log(`Error ${result}`));
            console.log(p);
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
