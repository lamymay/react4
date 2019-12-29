import Index from "../components/basic/Index";
import CssTest from "../components/test/CssTest";
import Role from "../components/system/rbac/Role";
import User from "../components/system/rbac/user/User";
import UserInsert from "../components/system/rbac/user/UserInsert";
import RoleInsert from "../components/system/rbac/RoleInsert";
import Food from "../components/app/food/Food";
import Blog from "../components/app/blog/Blog";
import ManageBlog from "../components/app/blog/ManageBlog";
import BlogDetail from "../components/app/blog/BlogDetail";
import BlogMd from "../components/app/blog/BlogMd";
import FoodDetails from "../components/app/food/FoodDetails";
import File from "../components/system/file/File";
import FileManage from "../components/system/file/FileManage";
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
    //system 模块的
    {
        path: "/user",
        component: User,
        exact: true
    },
    {
        path: "/files",
        component: FileManage,
        exact: true
    },


    // test
    {
        path: "/css-test",
        component: CssTest,
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
    {
        path: "/blog-detail",
        component: BlogDetail,
        exact: true
    },
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
