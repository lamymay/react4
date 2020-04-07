import React from "react";
import '../../../assets/css/system/file/file.css'


import FileUpload2 from './FileUpload2';
//说明 FileDownload2 是因为名称冲突二取名的， 是用于下载文件的
import FileDownload2 from './FileDownload2';
//旧版本文件下载 //import FileGet from './FileGet';
import FileSearch from "./FileSearch";
import FileManage from "./FileManage";

class File extends React.Component {

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


    render() {
        return (
            <div>
                <span>
                    <FileDownload2/>
                    <FileUpload2/>
                </span>


                {/*文件列表*/}
                <FileManage/>
                <FileSearch/>


                <hr/>
                <button onClick={this.showFileDownload}>附加功能开关</button>
                <div style={{
                    background: '#fff',
                    display: this.state.display_name
                }}>
                    {/* 通过状态机display_name获取diaplay取值 */}
                    <FileUpload2/>
                </div>
                <hr/>


            </div>
        );
    }

}

export default File;


// 设计目标：
//1 文件记录数据的列表显示，计划展示属性   1文件全称 2文件版本 3大小 4位置
//2 文件 单个上传 & 单个下载  批量下载是否加入 待定
//3 文件搜索 ， 搜索条件 1名称  2大小过滤 3 类型 5位置（在 develop/server）
//4 单条数据编辑，涉及接口 get update delete
