import React from "react";
import axios from 'axios';
// import {Form, Icon, Input, Button, Checkbox,} from 'antd';
// import "antd/dist/antd.css";

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
        if (13=== e.keyCode ) {
            this.loginFun(e);
        }
    };

    //在密码框中点了回车就直接发请求登陆
    //login
    loginFun = (e) => {
        console.log(this.state.username);
        console.log(this.state.pwd);
        console.log(this.state.sex);
        console.log(this.state.info);

        var url = "http://127.0.0.1:8001/test/login";
        console.log(url);
        let user = {
            'identifier': this.state.username,
            "credential": this.state.pwd,
            "identifierType": 1
        };

        axios.post(url, user)
            .then(response => {
                console.log("response  then ==获取到后台返回的数据");
                console.log(response.data);
                //登录失败  小于1 失败
                if (null === response&& response.data.code < 1) {
                    alert(response.data.msg);
                    this.props.history.push("/login");
                } else {
                    //登录成功，获取到后台返回的数据，可以做缓存
                    console.log(" 登录成功" + response.data.msg);
                    this.props.history.push("/Blog");
                }

            })
            .catch(function (error) {
                //异常
                console.log(error);
                console.log('登陆异常  catch =====',);
                this.props.history.push("/login");
            });
        ;

    };

    render() {
        return (
            <div>
                <h2>登陆页面</h2>
                <hr/>
                名称: <input type='text' value={this.state.username} onChange={this.handleUsername}/><br/>
                密码: <input type='text' value={this.state.pwd} onChange={this.handlePwd} onKeyUp={this.keyUpFun}/><br/>

                <button onClick={this.loginFun}>测试 与后台交互</button>

                <br/>
                <br/>
                <h3>账号：{this.state.username}-- 密码：{this.state.pwd}-- </h3>
            </div>
        );
    }

}

export default Login;
