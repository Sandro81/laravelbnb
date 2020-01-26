import VueRouter from "vue-router";
import Bookables from "./bookables/Bookables";
import BookableListItem from "./bookables/BookableListItem";

// http://localhost/laravelbnb/public/#/

const preRoute = '/laravelbnb/public';

const routes = [
    {
        path: preRoute+"/",
        component: Bookables,
        name: "home",
    },
];

const router = new VueRouter({
    mode: "history",
    routes: routes,

});

export default router;
