import React from "react";
import {
    Upload,
    Icon,
    message,
    Button
} from 'antd';
// import axios from "axios";
import '../../../assets/css/system/file/file.css'

// import img1 from "*.jpg";

// const Dragger = Upload.Dragger;


// const profile= "local";
const profile= "prod_160";

//key
const uriUploadFile = "listFile";


function getUriPrefix(key) {
    if (key === profile) {
        //local
        return "http://127.0.0.1:8001";
    } else if (key === profileProd160) {
        //160
        return "http://122.51.110.127:80";
    }
}


function getUri(key) {
    let host = getUriPrefix(profileProd160);
    if (key === uriUploadFile) {
        return host+"/zero/file/upload";
    } else if (key === "test") {
        return host+"/zero/111111/sys/file/list";
    }
}

class File extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            previewVisible: false,
            previewImage: '',
            src: '',
            url: '',
            img: 'http://127.0.0.1:8001/zero/file/sunhina_157434301011046cbf990e98546bb859b5fad',
            img2: '',
            //T:\Project\REACT\react4\src\components\system\file
            //T:\Project\REACT\react4\public\img
            localImg: process.env.PUBLIC_URL + 'image/404.jpg',

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


    render() {
        const props = {
            name: 'file',
            action: getUri(uriUploadFile),
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
                    console.log(fileName);
                    console.log(fileName);
                    console.log(fileName);
                    console.log(fileName);
                    console.log(fileName);
                    console.log(this);
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
                <p>

                    <h1>欢迎|WELCOME File</h1>

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
                </p>


                <div>从[接口]去读去图片</div>
                {/*<img src="http://122.51.110.127/zero/file/girl1_15725385342508ea81a509b8f4/" />*/}
                {/*<img src="http://122.51.110.127/zero/file/girl1_15725385342508ea81a509b8f4/" />*/}
                <div className='img-title'>从后台去读去图片</div>
                <img src={this.state.img} style={{
                    width: '250px',
                    height: '250px',
                    textAlign: 'center'
                }}
                     alt=""
                />


                <div>下面是[../../../assets/image]文件中的IMG</div>
                <img src={[require("../../../assets/image/avatar.jpeg")]} className='img-body' alt="" />
                {/*<img src={require('../../../../public/image/404.jpg')}/>*/}

                <div>下面是[PUBLIC]文件中的IMG(两种方式都可以读取)</div>
                {/*<img src={process.env.PUBLIC_URL + '/image/404.jpg'} className='img-body'/>*/}
                <img src={this.state.localImg} className='img-body' alt=""/>


                <hr/>
                <div>
                    <p className='front-ms'>字体 front-ms</p>
                    <p className='front-Aria'>字体 front-Aria</p>
                    <p className='front-Helvetica'>字体 front-Helvetica</p>
                    <p className='front-song'>字体 front-song</p>
                    <p className='front-sans-serif'>字体 front-sans-serif</p>
                    <p className='front-black'>字体 front-black</p>
                </div>


            </div>
        );
    }

}

export default File;
