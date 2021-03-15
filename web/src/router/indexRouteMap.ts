const Index = () => import('pages/Index');
const NoteDetail = () => import('pages/NoteDetail');
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


