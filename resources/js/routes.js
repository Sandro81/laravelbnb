import VueRouter from "vue-router";
import Bookables from "./bookables/Bookables";
import BookableListItem from "./bookables/BookableListItem";
import Bookable from "./bookable/Bookable";

// http://localhost/laravelbnb/public/#/

const preRoute = '/laravelbnb/public';

const routes = [
    {
        path: preRoute+"/",
        component: Bookables,
        name: "home",
    },
    {
        path: preRoute+"/bookable/:id",
        component: Bookable,
        name: "bookable",
    },
];

const router = new VueRouter({
    mode: "history",
    routes: routes,

});

export default router;
