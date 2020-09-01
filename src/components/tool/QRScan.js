import React from "react";
//import * as QrCode from 'qrcode.react'

// var React = require('react');
var QRCode = require('qrcode.react');

class QRScan extends React.Component {

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

export default QRScan;
