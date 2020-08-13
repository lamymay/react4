import React from "react";
//import * as QrCode from 'qrcode.react'

// var React = require('react');
var QRCode = require('qrcode.react');

class QRTest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: 'http://bing.com',
            dataTips: '请输入字符',
        }
    }


    componentDidMount() {

    }

    onInputChange(e) {
        //es6变量名是一个变量
        let inputValue = e.target.value,
            inputName = e.target.name;
        console.log("#####################");
        console.log("input的名/值：" + inputName + "/" + inputValue);
        // this.state.raw.[inputName] = inputValue
        this.setState({
            [inputName]: inputValue
        })

        console.log(this.state.data);

        // this.setState({
        //     name: '你猜'
        // })
    }

    // getQRTests = () => {
    //     var v1 = 'http://bing.com'
    //     console.log(v1);
    //     console.log(this.state.data);
    // };


    ///////////////////////////////////////////////////////////////////////////////////////////////////  render

    render() {

        return (<div>
            <br/>
            <br/>
            <br/>

            <div>
                状态：<input type="text"
                          id="data"
                          name="data"
                          placeholder={this.state.dataTips}
                          onChange={e => this.onInputChange(e)}
            />
            </div>
            <br/>

            <div>
                {this.state.dataTips}: {this.state.data}
            </div>
            <br/>


            <QRCode value={this.state.data}/>

        </div>);
    }
}

export default QRTest;


//二维码存储多少数据?
//https://www.qrcode.com/en/about/version.html

//· 数字数据 :7,089个
// · 字母数据 :4,296个
// · 8位字节数据 :2,953个
// · 中国汉字、日本汉字数据 :1,817个


//https://jolylai.github.io/notebook-react/antd-pro/env.html#config-文件



//https://zhuanlan.zhihu.com/p/95855648



//https://blog.csdn.net/songshu92/article/details/99567343
//修改配置
// 可以通过 npm run eject 命令将配置文件暴露出来，然后去修改里面的webpack配置
// 安装 react-app-rewired 包后，在根目录创建 config-overrides.js 自定义配置，最后修改 package.json 中的 scripts（替换react-scripts为react-app-rewired）​​
//
// 多环境配置
// 安装 dotenv-cli 包
// 根据需求在根目录创建 .env 文件（注意：只能以 REACT_APP_ 开头），如创建 .env.development、.env.production，内容如下：
// // .env.development
// REACT_APP_ENV=development
//
// // .env.production
// REACT_APP_ENV=production
//
//
// 继续修改 package.json 中的 scripts 指定环境
// package.json demo如下：
// "scripts": {
//     "start": "react-app-rewired start",
//     "build:dev": "dotenv -e .env.development react-app-rewired build",
//     "build:pro": "dotenv -e .env.production react-app-rewired build",
//     "test": "react-app-rewired test",
//     "eject": "react-scripts eject"
// },
// "devDependencies": {
//     "dotenv-cli": "^2.0.1",
//     "react-app-rewired": "^2.1.3"
// }
// 测试
// 运行开发环境（npm start）、打包测试环境（npm run build:dev）、打包生产环境（npm run build:pro），分别 打印 process.env 如下：
//
// // 1. 开发环境（npm start）
// {NODE_ENV: "development", PUBLIC_URL: "", REACT_APP_ENV: "development"}
//
// // 2. 测试环境（npm run build:dev）
// {NODE_ENV: "production", PUBLIC_URL: "", REACT_APP_ENV: "development"}
//
// // 3. 生产环境（npm run build:pro）
// {NODE_ENV: "production", PUBLIC_URL: "", REACT_APP_ENV: "production"}
// 使用
// html中：%REACT_APP_ENV%
// js/jsx中：可以在 process.env 中访问




