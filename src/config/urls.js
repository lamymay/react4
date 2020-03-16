// const host = "http://127.0.0.1:8001";
const host = "http://122.51.110.127:80";
const prefixUri = host + "/zero";

// 说明 通常来说
// GET 方法的uri，变量名称的关键字一般有：get
// POST 方法的uri，变量名称的关键字一般有：listXXXByyy

const urls = {
    listMenusBySystemIdAndLevel: prefixUri + "/menus/SYSTEM_ID/levels/LEVEL",
    file: {
        uploadFile: prefixUri + "/file/upload",
        listFileByQuery: prefixUri + "/sys/file/list",

        // 建议废弃 换用 getFileByIdOrCode
        getFileByCode: prefixUri + "/file/",

        getFileByIdOrCode: prefixUri + "/files/",
        save: prefixUri + "/sys/file/save",
        delete: prefixUri + "/sys/file/delete/id/",
        listPage: prefixUri + "/sys/file/page",
    },

    //resource 完全使用 RESTFul  ?  ，项目中使用get + post 来实现
    resource: {
        // GET 扫描所有controller资源
        scan: prefixUri + "/sys/resource/scan/controller",
        save: prefixUri + "/sys/resource",
        delete: prefixUri + "/sys/resource/",
        update: prefixUri + "/sys/resource/id",
        getFileByCode: prefixUri + "/resource/",
        listPage: prefixUri + "/sys/resource/page",
        listFileByQuery: prefixUri + "/sys/resource/list",
    },
    blog: {
        saveBlog: prefixUri + "/v1/blogs/save",
        updateBlog: prefixUri + "/v1/blogs/update",
        getBlogArticleByUserId: prefixUri + "/v1/blogs/",
        listBlogByAuthorId: prefixUri + "/v1/blogs/timeline/",
    },
    menu: {
        listMenu: prefixUri + "/menus/list",
        saveMenu: prefixUri + "/menus/save",
    },
    user: {
        index: "/user",
        listUser: prefixUri + "/sys/users/list",
        saveUser: prefixUri + "/sys/users/save",
        delete: prefixUri + "/sys/users/delete/",
        listPageUser: prefixUri + "/sys/users/page",
    },
    receipt: {
        index: "/receipt",
        // list  : prefixUri + "/receipt/list",
        listPage: prefixUri + "/shopping/receipt/page",
        delete: prefixUri + "/shopping/receipt/delete/",
        save: prefixUri + "/shopping/receipt/save",
        update: prefixUri + "/shopping/receipt/update",
    }
};


export default urls;

// const uriListFile = "listFile";
// const profile = "local";
// const profile = "prod_160";
// function getUriPrefix(key) {
//     if (key === "local") {
//         //local
//         return "http://127.0.0.1:8001";
//     } else if (key === "prod_160") {
//         //160
//         return "http://122.51.110.127:80";
//     }
// }
//
// function getUri(key) {
//     let host = getUriPrefix(profile);
//
//     if (key === uriListFile) {
//         return host + "/zero/sys/file/list";
//     } else if (key === "saveMenu") {
//         return host + "/zero/111111/sys/file/list";
//     }
// }
// function getUri(key) {
//
//     //local
//     let protocol = "http://";
//     let host = "127.0.0.1";
//     let port = 8001;
//     // let listMenu = protocol+host+':'+port+'/zero/menus/list';
//     // let saveMenu = protocol+host+':'+port+'/zero/menus/save';
//
//     let httpLocal = new Object();
//     httpLocal.listMenu = protocol + host + ':' + port + '/zero/menus/list';
//     httpLocal.saveMenu = protocol + host + ':' + port + '/zero/menus/save';
//
//
//     //  160
//     let protocol_160 = "http://";
//     let host_160 = "122.51.110.127";
//     let port_160 = 80;
//
//     let http160 = new Object();
//     http160.listMenu = protocol_160 + host_160 + ':' + port_160 + '/zero/menus/list';
//     http160.saveMenu = protocol_160 + host_160 + ':' + port_160 + '/zero/menus/save';
//
//
//     //数据封装到map
//     let map = new Map();
//     let local = "local";
//     let prod_160 = "prod_160";
//     map.set(local, httpLocal);
//     map.set(prod_160, http160);
//     console.log("------------------------- get ------------");
//     console.log(map);
//     console.log(map.size);
//     console.log(map.keys());
//     console.log(map.entries());
//     //从map中获取value  每次只要修改这里即可
//     // let uris = map.get(local);
//     let uris = map.get(prod_160);
//     if (key === "listMenu") {
//         return uris.listMenu;
//     } else if (key === "saveMenu") {
//         return uris.saveMenu;
//     }
// }
