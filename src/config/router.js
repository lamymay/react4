import Index from "../components/basic/Index";
import User from "../components/system/rbac/user/User";
import UserList from "../components/system/user/UserList";
import Role from "../components/system/rbac/Role";
import RoleInsert from "../components/system/rbac/RoleInsert";
import UserInsert from "../components/system/user/UserInsert";
import Food from "../components/app/food/Food";
import Blog from "../components/app/blog/Blog";
import ManageBlog from "../components/app/blog/ManageBlog";
import BlogMd from "../components/app/blog/BlogMd";
import FoodDetails from "../components/app/food/FoodDetails";
import File from "../components/system/file/File";
import Login from "../components/basic/Login";
import FileSearch from "../components/system/file/FileSearch";
import Menu from "../components/system/menu/Menu";
import React from "react";

const routers = [
    {
        path: "/index",
        component: Index,
        exact: true
    },
    {
        path: "/user",
        component: User,
        exact: true
    },
    {
        path: "/user-list",
        component: UserList,
        exact: true
    },
    {
        path: "/role",
        component: Role,
        exact: true
    },
    {
        path: "/roleInsert/:aid",
        component: RoleInsert,
        exact: true
    },
    {
        path: "/userInsert",
        component: UserInsert,
        exact: true
    },
    //app 模块的
    {
        path: "/blog",
        component: Blog,
        exact: true
    },
    {
        path: "/manage-blog",
        component: ManageBlog,
        exact: true
    },
    // {
    //     path: "/md",
    //     component: TestMdEditor,
    //     exact: true
    // },
    {
        path: "/bmd",
        component: BlogMd,
        exact: true
    },
    {
        path: "/food",
        component: Food,
        exact: true
    },
    {
        path: "/FoodDetails",
        component: FoodDetails,
        exact: true
    },
    {
        path: "/file",
        component: File,
        exact: true,
        routes: [
            {
                path: "/file-add",
                component: Login,
                exact: true
            }, {
                path: "/file-update",
                component: Login,
                exact: true
            },

        ]
    },
    {
        path: "/login",
        component: Login,
        exact: true
    },
    {
        path: "/file-search",
        component: FileSearch,
        exact: true
    },
    {
        path: "/menu",
        component: Menu,
        exact: true
    }
];

export default routers;

//                        reder={props=>(
//                             <route.component{... props} routers={route.children}>
//                         )
