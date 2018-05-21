import main from '@/components/main.vue';
import index from '@/views/index.vue';
import particulars from '@/views/particulars.vue';
import main2 from '@/components/main2.vue';
import branchSite2 from '@/views/branchSite2.vue';
import main3 from '@/components/main3.vue';
import branchSite3 from '@/views/branchSite3.vue';

const _routes=[
    {
        path:'/',
        component:main,
        children:[
            {
                path:'/',
                component:index,
            },
        ]
    },
    {
        path:'/particulars',
        component:main,
        children:[
            {
                path:'/',
                component:particulars,
            },
        ]
    },
    {
        path:'/2',
        component:main2,
        children:[
            {
                path:'/',
                component:branchSite2,
            },
        ]
    },
    {
        path:'/3',
        component:main3,
        children:[
            {
                path:'/',
                component:branchSite3,
            },
        ]
    }
]

export default _routes;