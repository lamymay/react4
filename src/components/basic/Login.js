import React from "react";
import axios from 'axios';
// import {Form, Icon, Input, Button, Checkbox,} from 'antd';
// import "antd/dist/antd.css";
import '../../assets/css/layout/login.css'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '', //账号
            pwd: '', // 密码
            pwdConfirm: '', // 确认密码
            type: 'worker', // 用户类型 默认求职者
            sex: 3,
            info: '',
        }
    }


    //   hasErrors=(fieldsError)=> {
    //     return Object.keys(fieldsError).some(field => fieldsError[field]);
    // }
    componentDidMount() {
        // To disabled submit button at the beginning.
        console.log("----------------------------");
        console.log(new Date());
        console.log("componentDidMount");
        console.log("----------------------------");
        // this.props.form.validateFields();
    }

    handleUsername = (e) => {
        this.setState({
            username: e.target.value
        });
    };

    handlePwd = (e) => {
        this.setState({
            pwd: e.target.value
        });
    };

    keyUpFun = (e) => {
        console.log(e.keyCode === 13);
        if (13 === e.keyCode) {
            this.loginFun(e);
        }
    };

    //在密码框中点了回车就直接发请求登陆
    //login
    loginFun = (e) => {


        let host = "http://127.0.0.1";
        let port = 8001;
        let uri = "/zero/v2/login/json/process";
        let url = host + ":" + port + uri;
        console.log(this.state.username);
        console.log(this.state.pwd);
        console.log(this.state.info);


        console.log(url);
        let user = {
            'identifier': this.state.username,
            "credential": this.state.pwd,
            "identityType": 1
            //identityType
        };

        axios.post(url, user)
            .then(response => {
                console.log("response  then ==获取到后台返回的数据");
                console.log(response.data);
                //登录失败  小于1 失败
                if (null === response && response.data.code < 1) {
                    alert(response.data.msg);
                    this.props.history.push("/user");
                } else {
                    //登录成功，获取到后台返回的数据，可以做缓存
                    console.log(" 登录成功" + response.data.msg);
                    // this.props.history.push("/blog");
                }

            })
            .catch(function (error) {
                //异常
                console.log(error);
                console.log('登陆异常  catch =====',);
                //this.props.history.push("/login");
            });
        ;

    };


    render() {
        return (
            <div className="center-all">

                <div className="heading   ">
                    <h2>登录 Please sign in</h2>
                </div>


                <p>
                    <label htmlFor="username" className="sr-only">名称</label>
                    <input type="text"
                           id="username" name="identifier"
                           onChange={this.handleUsername}
                           value={this.state.username}
                           placeholder="手机号/邮箱/用户名"
                           className="form-control"
                           required
                           autoFocus/>
                </p>


                <p>
                    <label htmlFor="password"
                           className="sr-only">密码</label>
                    <input type="password"
                           value={this.state.pwd}
                           onChange={this.handlePwd}
                           onKeyUp={this.keyUpFun}
                           className="form-control"
                           placeholder="密码"
                           id="password"
                           name="credential"
                           required/>
                </p>

                {/*                    <input name="rememberMe" id="rememberMe" type="checkbox"
                           className="checkbox" value="true"/><label
                    htmlFor="rememberMe">30 天内记住我</label>*/}

                <input name="identityType" type="hidden" value="1"/>

                <div>
                    <button onClick={this.loginFun} className="btn-login-submit ">点我登录</button>
                </div>

                <div className="forgotPasswordContainer CanBePulledDown"
                     id="forgotPasswordDiv">
                    <a href="https://app.yinxiang.com/ForgotPassword.action"
                       target="_top" className="forgot-password">
                        忘记密码？</a>
                </div>

                {/*                 <div className="Btn Btn_emph Btn_super Btn_Yx">
                        <img
                            src="https://static.app.yinxiang.com/embedded-web/web/static/media/wechat_icon@2x.e20b7172.png"/>
                        <span>使用微信登录</span>
                    </div>*/}


                <div className="footer wrapper">
                    <a href="https://www.yinxiang.com/tos/" className="footer-entry">服务条款</a>
                    <a href="https://www.yinxiang.com/privacy/" className="footer-entry">|隐私政策</a>
                    <span className="footer-entry last">    版权所有 2007 - 2019 笔记。保留所有权利。</span>
                </div>

                <hr/>
                <h3> 获取输入值账号{this.state.username}</h3>
                <h3> 获取输入值密码{this.state.pwd} </h3>

            </div>


        );
    }

}

export default Login;
