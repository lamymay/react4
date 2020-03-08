import React from "react";
import {
    Upload,
    Icon,
    message,
    Button
} from 'antd';
// import axios from "axios";
import '../../../assets/css/system/file/file.css'
// api接口地址抽取
import urls from '../../../config/urls.js';

class FileUpload2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fileList: [
                {
                    uid: '-1',
                    name: 'xxx.png',
                    status: 'done',
                    // code: 'done',
                    url: 'http://127.0.0.1:8001/zero/file/upload',
                },
            ],
            //

        }
    }

    componentDidMount() {
        console.log("########### this.props.routes) ###########");
        console.log(this.props.routes);
        console.log("######################");
    }

    render() {

        return (
            <div>
                <h1>FileUpload2</h1>
                <h2>FileUpload2</h2>
                <h3>FileUpload2</h3>
                <Button>
                    点击以上传-FileUpload2
                </Button>
            </div>
        );
    }
}

export default FileUpload2;
