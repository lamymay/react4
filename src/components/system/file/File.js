import React from "react";
import {Upload, Icon, message} from 'antd';
import axios from "axios";

const Dragger = Upload.Dragger;

class File extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [
                {
                    uid: '-1',
                    name: 'xxx.png',
                    status: 'done',
                    // code: 'done',
                    url: 'http://127.0.0.1:8001/zero/file/upload',
                },
            ],
        }
    }


    postFileFun = (file) => {
        console.log(file);
        console.log("#################");
        let url = 'http://127.0.0.1:8001/zero/file/upload';
        axios.post(url).then(response => {
            console.log(response.data);

            //失败  小于1 失败
            if (null === response && response.data.code == 1) {
                //成功，获取到后台返回的数据，可以做缓存
                console.log(" 成功" + response.data.msg);
                // this.props.history.push("/Success");
                this.setState({
                    list: response.data.data
                })

            } else {
                alert(response.data.msg);
                console.log("FAIL");

                this.props.history.push("/index");
            }
        })
            .catch(function (error) {
                //异常
                console.log(error);
                console.log('异常 被 catch',);
            });
        ;

    }


    render() {

        // const props = {
        //     name: 'file',
        //     multiple: true,
        //     //action: 'http://127.0.0.1:8001/zero/file',
        //
        //     onChange(file) {
        //         // postFileFun(info);
        // };


        const props_ = {
            name: 'file',
            directory: true,
            //     multiple: true,
            action: 'http://127.0.0.1:8001/zero/file/upload',
            onChange(info) {
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} 文件上传成功`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} 文件上传失败`);
                }
            },
        };

        return (

            <div>

                <h1>欢迎|WELCOME File</h1>
                <hr/>


                <Dragger>
                    <p className="ant-upload-drag-icon">
                        <Icon type="inbox"/>
                    </p>

                    <p className="ant-upload-text" onChange={this.postFileFun}>点击或者拖拽到此即可上传</p>
                    {/*<p className="ant-upload-hint">*/}
                    {/*    Support for a single or bulk upload. Strictly prohibit from uploading company data or other*/}
                    {/*    band files*/}
                    {/*</p>*/}
                </Dragger>

            </div>);
    }

}

export default File;
