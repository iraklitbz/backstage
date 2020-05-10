import Vue from 'vue';
import Router from 'vue-router';
import Working from '../components/Working'
import Dashboard from '../components/Dashboard'
import Register from '../components/Register'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/working',
            name: 'working',
            component: Working
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard
        }
    ]
});

export default router