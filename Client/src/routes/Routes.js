import Dashboard from '../components/admin/Dashboard';
import Login from '../components/auth/Login';

export const routes = [{
        path: '/login',
        component: Login,
    },
    {
        path: '/',
        component: Dashboard,
    },
];