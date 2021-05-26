const HomeIndex = () => import('pages/HomeIndex/HomeIndex.vue');
// const NoteDetail = () => import('pages/NoteDetail/index.vue');
export default [
    {
        path:'/',
        component:HomeIndex
    },
    // {
    //     path:'/note',
    //     component:NoteDetail
    // },
    {
        path:'*',
        component:HomeIndex
    }
]


