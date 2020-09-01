import Index from "../components/basic/Index";

//test
import CssTest from "../components/test/CssTest";
import QRTest from "../components/test/QRTest";
import ToolTest from "../components/test/ToolTest";

//tool
import QRScan from "../components/tool/QRScan";

//app
import Food from "../components/app/food/Food";
import Blog from "../components/app/blog/Blog";
import ManageBlog from "../components/app/blog/ManageBlog";
import BlogDetail from "../components/app/blog/BlogDetail";
import BlogMd from "../components/app/blog/BlogMd";
import FoodDetails from "../components/app/food/FoodDetails";
import Login from "../components/basic/Login";


//system
import Role from "../components/system/rbac/role/Role";
import User from "../components/system/rbac/user/User";
import Resource from "../components/system/rbac/resource/Resource";
import UserInsert from "../components/system/rbac/user/UserInsert";
import RoleInsert from "../components/system/rbac/role/RoleInsert";

import Menu from "../components/system/menu/Menu";
import File from "../components/system/file/File";
import FileManage from "../components/system/file/FileManage";
import FileSearch from "../components/system/file/FileSearch";


//购物小票
import ShoppingReceipt from '../components/app/shop/ShoppingReceipt'

const routers = [

    //tool
    {
        path: "/qr-scan-test",
        component: QRScan,
        exact: true
    },

    // test
    {
        path: "/css-test",
        component: CssTest,
        exact: true
    }, {
        path: "/tool-test",
        component: ToolTest,
        exact: true
    }, {
        path: "/qr-test",
        component: QRTest,
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
        path: "/sr",
        component: ShoppingReceipt,
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
        exact: true
        //,
        // routes: [
        //     {
        //         path: "/file-add",
        //         component: Login,
        //         exact: true
        //     }, {
        //         path: "/file-update",
        //         component: Login,
        //         exact: true
        //     },

        // ]
    },
    {
        path: "/file-search",
        component: FileSearch,
        exact: true
    },

    //system 模块的

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
        path: "/menu",
        component: Menu,
        exact: true
    },
    {
        path: "/resource",
        component: Resource,
        exact: true
    },
    {
        path: "/file1",
        component: FileManage,
        exact: true
    },
    {
        path: "/login",
        component: Login,
        exact: true
    },
];

export default routers;

//                        reder={props=>(
//                             <route.component{... props} routers={route.children}>
//                         )
