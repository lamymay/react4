import React from "react";
import axios from "axios";
import urls from '../../../config/urls.js';

import FileDownload from 'react-file-download';

// 文件下载
class FileDownload2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: null,
            //注意 参数 symbol 意思是“标记”
            //目的是：查询文件记录的一个检索参数，尽可能做到可以确定唯一一条数据，否则 应该提示检索到多条数据，请继续选择一个或者多个 以供下载
            symbol: null,
            alertMessage: "请出入合法查询条件",
            // file: null,
            type: null,
        }
    }

    getFile = (symbol) => {
        //  检索条件 symbol  校验与赋值
        if (this.state.symbol === null || this.state.symbol.trim() === "") {
            alert(this.state.alertMessage);
            return;
        }

        this.setState({
            symbol: symbol,
        });

        let url = urls.file.downloadFileByIdOrCode + this.state.symbol;
        console.log(url);
        axios.get(url, {responseType: 'blob'}).then(response => {

            // let fileName = "temp.jpg";
            let fileName = response.headers['filename'];
            console.log(response);
            console.log(response.headers);
            // console.log(response.data.symbol);

            FileDownload(response.data, fileName);
        })
    };


    //onClick button 事件函数
    searchForDownloadFile = (e) => {
        this.getFile(this.state.symbol);
    };


    // componentDidMount() {
    //     //获取列表数据
    // }

    //获取表单的值
    handleGetInputValue = (event) => {
        //获取原生的事件对像 e.nativeEvent
        this.setState({
            symbol: event.target.value,
        });

        if (13 === event.keyCode) {
            console.log(this.state.symbol);
            this.getFile(event.target.value);
        }

    };


    render() {
        return (
            <div>
                <p>
                    <input type="text"
                           id="name"
                           name="name"
                           placeholder="code/id/name"
                           className='file-search-input'
                           onKeyUp={this.handleGetInputValue}
                    />
                    <button onClick={this.searchForDownloadFile}>获取文件</button>
                </p>
            </div>
        );
    }
}

export default FileDownload2;
//            <p style={textStyles}>inline style</p>

//返回数据中获取 文件名称


//https://www.jianshu.com/p/eb785e4318f4
//download(){
//         const url = "文件地址"
//         axios.get(url,{
//             responseType:'blob'
//         }).then( res => {
//             let blob = new Blob([res.data])
//             let downloadElement = document.createElement('a')
//             let href = window.URL.createObjectURL(blob); //创建下载的链接
//             downloadElement.href = href;
//             downloadElement.download = `new name`; //下载后文件名
//             document.body.appendChild(downloadElement);
//             downloadElement.click(); //点击下载
//             document.body.removeChild(downloadElement); //下载完成移除元素
//             window.URL.revokeObjectURL(href); //释放blob对象
//         })
//
//     }
