import index from "@/views/login/index.vue";
export default [
    {
        path: '/',
        name: 'home',
        component: index
    },
    {
        path: '/foo',
        name: 'foo'
    },
    {
        path: '/bar/:id',
        name: 'bar'
    }
]