
// const host= "http://127.0.0.1:8001";
const host = "http://122.51.110.127:80";


const urls = {
    listMenusBySystemIdAndLevel: host + "/zero/menus/SYSTEM_ID/levels/LEVEL",
    file: {
        uploadFile: host + "/zero/file/upload",
        listFileByQuery: host + "/zero/sys/file/list",

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
