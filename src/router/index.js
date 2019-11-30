import {
    Home,
    Find,
    Order,
    Mine,
    Login,
    Category,
    FoodType
} from "pages"


export const TabBarRoute = [
    {
        path:"/home",
        component:Home,
        meta:{
            flag:true
        },
        icon:"\ue628",
        text:"首页"
    },
    {
        path:"/find",
        component:Find,
        meta:{
            flag:true
        },
        icon:"\ue663",
        text:"发现"
    },
    {
        path:"/order",
        component:Order,
        meta:{
            flag:true
        },
        icon:"\ue737",
        text:"礼物"
    },
    {
        path:"/mine",
        component:Mine,
        meta:{
            flag:true,
            requiredAuth:true
        },
        icon:"\ue617",
        text:"我的"
    }
];


export const NoTabBarRoute = [
    {
        path:"/login",
        component:Login,
        meta:{}
    },
    {
        path:"/category",
        component:Category,
        meta:{}
    },
    {
        path:'/foodType/:id/:cityId',
        component:FoodType,
        meta:{}
    }
];


export const RouteConfig = TabBarRoute.concat(NoTabBarRoute);