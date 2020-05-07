import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login'
import Dashboard from '../components/Dashboard'
import Register from '../components/Register'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/login',
            name: 'login',
            component: Login
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