import React from "react";
import axios from "axios";
import apis from '../../../config/urls.js';

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

    //            <p style={textStyles}>inline style</p>

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

        let url = apis.file.getFileByCode + this.state.code;
        console.log(url);
        axios.get(url, {responseType: 'blob'}).then(response => {
            console.log(response);
            let code = response.data.code;
            console.log(code);

            FileDownload(response.data, '简历-v1.docx');
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
                    <button onClick={this.searchForFile}>获取简历</button>
                </p>
            </div>
        );
    }

}

export default FileGet;
