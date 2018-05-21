import main from '@/components/main.vue';
import index from '@/views/index.vue';
import particulars from '@/views/particulars.vue';


const _routes=[
    {
        path:'/',
        component:main,
        children:[
            {
                path:'/',
                component:particulars,
            },
        ]
    },
]

export default _routes;