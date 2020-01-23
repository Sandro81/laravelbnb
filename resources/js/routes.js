import VueRouter from "vue-router";
import ExampleComponent from "./components/ExampleComponent";
import Example2 from "./components/Example2";
// http://localhost/laravelbnb/public/#/

const preRoute = '/laravelbnb';

const routes = [
    {
        path: preRoute+"/",
        component: ExampleComponent,
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
