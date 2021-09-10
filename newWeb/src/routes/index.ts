import {createRouter,createWebHistory} from 'vue-router';
import homeRouters from './home';

const  router = createRouter({
    history:createWebHistory('/blog/'),
    routes:[...homeRouters],
})
export default router;
