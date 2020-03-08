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

class FileUpload extends React.Component {

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
        const props = {
            name: 'file',
            action: urls.file.uploadFile,
            // action: 'http://122.51.110.127:8001/zero/file/upload',
            headers: {
                authorization: 'authorization-text',
            },
            //上传中、完成、失败都会调用这个函数。
            onChange(info) {
                if (info.file.status === 'done' && info.file.response.code === 1) {
                    console.log("################################");
                    console.log(info);
                    console.log("--------------------info.file");
                    console.log(info.file);
                    console.log("--------------------info.fileList");
                    console.log(info.fileList);
                    console.log("--------------------info.event");
                    console.log(info.event);
                    console.log("--------------------文件上传成功");

                    console.log(info.file.response.code);
                    console.log(info.file.response.msg);
                    console.log(info.file.response.data);

                    console.log("--------------------info.file.response");
                    console.log(info.file.response);
                    message.success(`${info.file.name}-->${info.file.response.data} 文件上传成功`);
                    let fileName = info.file.response.data;
                    console.log(fileName);
                    console.log(fileName);
                    console.log(this);
                    //info.flie.name = fileName;
                    // this.setState(
                    //     {
                    //         img2: 'http://127.0.0.1:8001/zero/file/sunhina_157434301011046cbf990e98546bb859b5fad',
                    //
                    //     }
                    // )


                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} 文件上传失败`);
                } else {
                    //console.log("失败" + info.file.response.msg);
                    console.log("失败");
                }
                console.log("################################");
            },
        };

        /*        const props_ = {
                    name: 'file',
                    directory: true,
                    //     multiple: true,
                    action: 'http://127.0.0.1:8001/zero/file/upload',
                    onChange(info) {

                    },
                };*/

        return (
            <div>

                <Upload {...props}>
                    <Button>
                        <Icon type="upload"/> 上传
                    </Button>
                </Upload>
            </div>
        );
    }
}

export default FileUpload;
