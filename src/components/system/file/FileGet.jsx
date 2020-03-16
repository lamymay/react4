import React from "react";
import axios from "axios";
import urls from '../../../config/urls.js';

import FileDownload from 'react-file-download';


class FileGet extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            id: null,
            code: null,
            file: null,
            type: null,
        }
    }


    getFile = (code) => {
        this.setState({
            code: code,
        });

        if (this.state.code == null) {
            alert("请出入合法的文件编码code");
            return;
        } else if (this.state.code.trim() == "") {
            alert("请出入合法的文件编码code");
            return;
        }

        let url = urls.file.downloadFileByIdOrCode + this.state.code;
        console.log(url);
        axios.get(url, {responseType: 'blob'}).then(response => {

            let fileName = "temp.jpg";
            console.log(response);
            console.log(response.headers);
            console.log( response.data.code);

            FileDownload(response.data, fileName);
        })
    };


    searchForFile = (e) => {
        this.getFile(this.state.code);
    };



    // componentDidMount() {
    //     //获取列表数据
    // }

    //获取表单的值
    handleGetInputValue = (event) => {
        //获取原生的事件对像 e.nativeEvent
        this.setState({
            code: event.target.value,
        });

        if (13 === event.keyCode) {
            console.log(this.state.code);
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
                           placeholder="code"
                           className='file-search-input'
                           onKeyUp={this.handleGetInputValue}
                    />
                    <button onClick={this.searchForFile}>获取文件</button>
                </p>
            </div>
        );
    }

}

export default FileGet;
//            <p style={textStyles}>inline style</p>
