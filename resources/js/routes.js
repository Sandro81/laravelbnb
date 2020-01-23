import VueRouter from "vue-router";
import ExampleComponent from "./components/ExampleComponent";
import Example2 from "./components/Example2";
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
    {
        path: preRoute+"/second",
        component: Example2,
        name: "second",
    },
];

const router = new VueRouter({
    mode: "history",
    routes: routes,

});

export default router;
