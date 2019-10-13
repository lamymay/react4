import React from "react";
// import 'antd'
import "antd/dist/antd.css";
import '../../assets/css/layout/main.css';
import axios from "axios";


import {
    Table,
    Card,
    Button,
    Modal,
    Form,
    Input,
    Layout,
    Menu,
    // Breadcrumb,
    // Icon
} from 'antd';
import App from "../../App";


// const {SubMenu} = Menu;
const {
    Header,
    // Content,
    // Sider
} = Layout;

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    /////////////
    //初始化函数触发
    componentDidMount() {
        // To disabled submit button at the beginning.
        console.log("----------------------------");
        console.log("componentDidMount--初始化的时候去获取菜单数据");
        this.getMenusFun();
        console.log("----------------------------");
        // this.props.form.validateFields();
    }

    // 初始化的时候去获取菜单数据
    getMenusFun = (e) => {
        var menuId = 2;
        var level = 0;//0 全部
        //localhost:8001/zero/menus/2/levels/0
        // var url = "http://arc.com/zero/menus/" + menuId + "/levels/" + level;
        var url = "http://127.0.0.1:8001/zero/menus/" + menuId + "/levels/" + level;
        console.log(url);
        axios.get(url).then(response => {
            console.log(response.data);

            //失败  小于1 失败
            if (null === response && response.data.code < 1) {
                alert(response.data.msg);
                console.log("FAIL");
                this.props.history.push("/index");
            } else {
                //成功，获取到后台返回的数据，可以做缓存
                console.log(" 成功" + response.data.msg);
                // this.props.history.push("/Success");

                this.setState({
                    list: response.data.data
                })
            }
        })
            .catch(function (error) {
                //异常
                console.log(error);
                console.log('异常 被 catch',);
            });
        ;
    };


    /////////////
    render() {
        return (
            <div>
                <Layout>
                    <Header
                        className="topBar">
                        {/*<div className="logo"/>*/}
                        {/*//顶栏菜单*/}
                        <Menu
                            className='topBar'
                            // theme="dark"
                            // mode="horizontal"
                            // defaultSelectedKeys={['1']}
                            // style={{lineHeight: '64px'}}
                        >
                            {
                                this.state.list.map((value, key) => {
                                    return (
                                        <Menu.Item key={key}>{value.name}</Menu.Item>

                                    )
                                })
                            }
                        </Menu>

                    </Header>
                </Layout>












            </div>)
    }
}
export default Main;

