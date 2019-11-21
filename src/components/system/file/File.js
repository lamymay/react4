import React from "react";
import {Upload, Icon, message, Button} from 'antd';
import axios from "axios";
import file from '../../../assets/css/system/file/file.css'

// import img1 from "*.jpg";

// const Dragger = Upload.Dragger;

class File extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            previewVisible: false,
            previewImage: '',
            src: '',
            img: 'http://127.0.0.1:8001/zero/file/sunhina_157434301011046cbf990e98546bb859b5fad',
            //T:\Project\REACT\react4\src\components\system\file
            //T:\Project\REACT\react4\public\img
            localImg: '%PUBLIC_URL%/image/404.jpg',

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


    // postFileFun = (file) => {
    //     console.log(file);
    //     console.log("#################");
    //     let url = 'http://127.0.0.1:8001/zero/file/upload';
    //     axios.post(url).then(response => {
    //         console.log(response.data);
    //
    //         //失败  小于1 失败
    //         if (null === response && response.data.code == 1) {
    //             //成功，获取到后台返回的数据，可以做缓存
    //             console.log(" 成功" + response.data.msg);
    //             // this.props.history.push("/Success");
    //             this.setState({
    //                 list: response.data.data
    //             })
    //
    //         } else {
    //             alert(response.data.msg);
    //             console.log("FAIL");
    //
    //             this.props.history.push("/index");
    //         }
    //     })
    //         .catch(function (error) {
    //             //异常
    //             console.log(error);
    //             console.log('异常 被 catch',);
    //         });
    //     ;
    // }

    render() {
        const props = {
            name: 'file',
            // action: 'http://127.0.0.1:8001/zero/file/upload',
            action: 'http://122.51.110.127:8001/zero/file/upload',
            headers: {
                authorization: 'authorization-text',
            },
            //上传中、完成、失败都会调用这个函数。
            onChange(info) {

                if (info.file.status === 'done' && info.file.response.code == 1) {
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
                    //info.flie.name = fileName;
                    this.setState(
                        {
                            url: "http://122.51.110.127:8001/zero/file/钱钱_157218676334196f8105b-a454-45fe-9323-8ca8b/"
                        }
                    )

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

                <h1>欢迎|WELCOME File</h1>
                <hr/>
                <br/>
                <br/>
                <br/>

                <Upload {...props}>
                    <Button>
                        <Icon type="upload"/> Click to Upload
                    </Button>
                </Upload>


                {/*<Upload {...props}>*/}
                {/*    <Button>*/}
                {/*        <Icon type="upload"/> Click to Upload*/}
                {/*    </Button>*/}
                {/*</Upload>*/}

                {/*<input>文件上传</input>*/}


                {/*<p className="ant-upload-text" onChange={this.postFileFun}>点击或者拖拽到此即可上传</p>*/}
                {/*<p className="ant-upload-hint">*/}
                {/*    Support for a single or bulk upload. Strictly prohibit from uploading company data or other*/}
                {/*    band files*/}
                {/*</p>*/}
                <hr/>

                <br/>aaa
                {/*<img src="http://122.51.110.127/zero/file/girl1_15725385342508ea81a509b8f4/" />*/}
                {/*<img src="http://122.51.110.127/zero/file/girl1_15725385342508ea81a509b8f4/" />*/}
                <br/>
                <hr/>
                {/*<img src={img1}/>*/}


                <div>从后台去读去图片</div>

                <img src={this.state.img} alt="" style={{
                    width: '400px',
                    height: '400px',
                    textAlign: 'center'
                }}/>


                <div>下面是[../../../assets/image]文件中的IMG</div>
                <img src={[require("../../../assets/image/avatar.jpeg")]} className='img-body'/>
                {/*<img src={require('../../../../public/image/404.jpg')}/>*/}

                <div>下面是[PUBLIC]文件中的IMG</div>
                <img src={process.env.PUBLIC_URL + '/image/404.jpg'} className='img-body'/>


                <img src="{this.img}" alt=""/>
            </div>);
    }

}

export default File;
