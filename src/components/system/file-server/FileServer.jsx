import React from "react";
import '../../../assets/css/system/file-server/file-server.css'

//旧版本文件下载 //import FileGet from './FileGet';
// import FileManage from "./FileManage";

//说明FileLocalDownload 是用于下载文件的
import FileLocalDownload from './FileLocalDownload';
import FileLocalUpload from './FileLocalUpload';



class FileServer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            //此状态机为display的取值
            display_name: 'none',
        }
    }

    componentDidMount() {
        console.log("########### this.props.routes) ###########");
        console.log(this.props.routes);
        this.sayHello();
        console.log("######################");
    }


    //编辑按钮的单击事件，修改状态机display_name的取值
    showFileDownload = () => {
        // this.setState({display_name: 'block',})
        if (this.state.display_name === 'none') {
            this.setState({
                display_name: 'block',
            })
        } else if (this.state.display_name === 'block') {
            this.setState({
                display_name: 'none',
            })

        }
    };

    sayHello = () => {
        console.log("你好:" + this.state.display_name)
    };


    render() {
        return (
            <div>
                <span>
                    <FileLocalDownload/>
                    <FileLocalUpload/>

                </span>


                {/*文件列表*/}
                {/*<FileManage/>*/}






            </div>
        );
    }

}

export default FileServer;


// 设计目标：
//1 文件记录数据的列表显示，计划展示属性   1文件全称 2文件版本 3大小 4位置
//2 文件 单个上传 & 单个下载  批量下载是否加入 待定
//3 文件搜索 ， 搜索条件 1名称  2大小过滤 3 类型 5位置（在 develop/server）
//4 单条数据编辑，涉及接口 get update delete
