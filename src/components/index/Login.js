import React from "react";
import axios from 'axios';
// import {Form, Icon, Input, Button, Checkbox,} from 'antd';
// import "antd/dist/antd.css";
import login from '../../assets/css/layout/login.css'

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
            <div>
                <h3> 获取输入值账号{this.state.username}</h3>
                <h3> 获取输入值密码{this.state.pwd} </h3>
                <br/>


                <div>
                    <h2 className="form-login-heading">Please sign in</h2>

                    <p>
                        <label htmlFor="username" className="sr-only">名称</label>
                        <input type="text"
                               value={this.state.username}
                               onChange={this.handleUsername}
                               id="username" name="identifier"
                               className="form-control"
                               placeholder="账号"
                               required
                               autoFocus/>
                    </p>

                    <p>
                        <label htmlFor="password"
                               className="sr-only"
                        >密码</label>
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


                    <input name="identityType" type="hidden" value="1"/>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>

                    <button onClick={this.loginFun}>测试 与后台交互</button>
                </div>

            </div>
        );
    }

}

export default Login;
