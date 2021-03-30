const Index = () => import('pages/Index/index.vue');
const NoteDetail = () => import('pages/NoteDetail/index.vue');
export default [
    {
        path:'/',
        component:Index
    },
    {
        path:'/note',
        component:NoteDetail
    },
    {
        path:'*',
        component:Index
    }
]


