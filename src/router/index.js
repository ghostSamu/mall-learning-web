import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from "../views/layout/layout";
// import store from "@/store";
// import {Message} from "element-ui";


export const constantRouterMap = [
    //{path: '/404', components: () => import('@/views/404'), hidden: true},
    {
        path: '/login',
        name: 'login',
        component: ()=> import('@/views/login/index'),
    },
    {
        path: '',
        component: Layout,
        redirect: '/home',
        meta: {title: '首页', icon: 'home'},
        children: [{
            path: 'home',
            name: 'home',
            component: ()=> import('@/views/home/index'),
            meta: {title: '首页', icon: 'home'}
        }]
    }
]

export const asyncRouterMap = [
    {
        path: '/ums',
        component: Layout,
        redirect: '/ums/admin',
        name: 'ums',
        meta: {title: '权限', icon: 'ums'},
        children: [
            {
                path: 'admin',
                name: 'admin',
                component: ()=> import('@/views/ums/admin/index'),
                meta: {title: "用户列表", icon: 'ums-admin'}
            },
            {
                path: 'role',
                name: 'role',
                component: () => import('@/views/ums/role/index'),
                meta: {title: "角色列表", icon: 'ums-role'}
            },
            {
                path: 'allocMenu',
                name: 'allocMenu',
                component: () => import('@/views/ums/role/allocMenu'),
                meta: {title: '分配菜单'}
            }

        ]
    },
    {
        path: '*',
        // name: 'error',
        redirect: '/404',
        hidden: true
    }
]


export default new Router({
    mode: 'history',
    //scrollBehavior: ()=> ({y: 0}),
    routes: constantRouterMap,
})

