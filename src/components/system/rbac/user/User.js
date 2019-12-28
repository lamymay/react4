import React from "react";
import "antd/dist/antd.css";
import axios from 'axios';

import UserInsert from "./UserInsert";

import {
    Table,
    Card,
    Button,
    Modal,
    Form,
    Input,
    // Tooltip,
    // Icon,
    // Cascader,
    // Select,
    // Row,
    // Col,
    // List,
    // Checkbox,
    // AutoComplete,
}
    from
        'antd';

// import ReactDOM from 'react-dom'
// import Connection from '../common/Connection';
//引入antd，本页面主要是对list数据做渲染


//对于人员数据的CRUD
class User extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            tableTitle: "用户列表",
            users: [],
            insertModal: {
                visible: true,


            },
        }
    }


    componentDidMount() {
        //获取列表数据
        this.getUsers();

    }


    //在密码框中点了回车就直接发请求登陆
    //login
    getUsers = () => {
        var port = 8001;
        var url = "http://127.0.0.1:" + port + "/zero/sys/user/page";
        console.log("######################################");
        console.log(url);
        console.log("######################################");
        let user = {};
        axios.post(url, user)
            .then(response => {
                console.log("response  then ==获取到后台返回的数据");
                console.log(response.data);
                //登录失败
                if (null == response.data.data) {
                    alert(response.data.msg);
                }
                //登录成功，获取到后台返回的数据，可以做缓存
                var fromDb = response.data.data;
                console.log(fromDb);
                //赋值
                this.setState({users: fromDb});
                console.log(this.state.users);

            })
            .catch(function (error) {
                //异常
                console.log(error);
                console.log('异常  catch =====',);

            });

    };

    //更新用户
    updateUser = (e) => {
        console.log("uuuuuuuuuuuu");
    };

    //子父组件传值
    userInsert = (e) => {
        console.log("子父组件传值");
        console.log("子父组件传值");
        console.log("子父组件传值");
        console.log("子父组件传值");
    };


    ///////////////////////////////////////////////////////////////////////////////////////////////////  render
    render() {
        //定义表头，一般放在render()中
        const columns = [
            //列名称--数据源的字段名
            {
                key: 'id',
                title: '测试合并',
                render: (text, record) => (
                    <span>
                       {record.nickname}--
                        {record.avatar}>
                        </span>
                )
            },
            {
                key: 'nickname',
                title: '昵称',
                dataIndex: 'nickname',
                width: 150
            },
            {
                key: 'avatar',
                title: '标识',
                dataIndex: 'avatar'
            },
            {
                key: 'state',
                title: '启用状态',
                dataIndex: 'state'
            },
            {
                key: 'createDate',
                title: '创建时间',
                dataIndex: 'createDate'
            },
            {
                key: 'updateDate',
                title: '更新时间',
                dataIndex: 'updateDate'
            },
            {
                key: 'add-remove',
                title: 'add/remove',
                render: (text, record) => (
                    <span>
                        <Button onClick={this.add}>add {record.id}</Button>
                        <Button onClick={this.remove.bind(this)}>remove-{record.id}</Button>
                    </span>
                )
            }
        ];
        //////////////////////

        return (<div>


            <Card title={this.state.tableTitle}>
                <Button type="primary" onClick={this.userInsert}>测试 新增一个人员</Button>
                {/*<Button type="dashed" onClick={this.updateUser}>测试 dashed与后台交互</Button>*/}
                {/*<Button type="danger" onClick={this.updateUser}>测试 danger与后台交互</Button>*/}

                {/*columns:指定表头          dataSource:指定数据源          borderd:加边框*/}
                {/*<Table  rowKey={record=>record.id} columns={columns} dataSource={this.state.users} bordered>*/}


                <Table
                    rowKey={record => record.id}
                    columns={columns}
                    dataSource={this.state.users}
                    pageSize={10}
                    bordered>
                </Table>
            </Card>
        </div>)
    }

    remove(id) {
        console.log("删除--" + id);
        console.log(id);
    }


    add() {
        console.log("add-start");
        let start = new Date();
        console.log(start);


        //////////////////////////////////////////////////////////
        var url = "http://127.0.0.1:80/sys/users";
        console.log(url);
        let user = {
            'nickname': "AXIOS",
            "avatar": "avatar-01",
            "state": 1,
            "createDate": 1123454444,
            "updateDate": 1123455653
        };

        axios.post(url, user).then(response => {
            console.log("111111111111111111111111response  then ==获取到后台返回的数据");
            console.log(response.data);
            //登录失败
            if (null == response.data.data) {
                alert(response.data.msg);
            }
            //登录成功，获取到后台返回的数据，可以做缓存
            console.log(response.data.data);

        })
            .catch(function (error) {
                //异常
                console.log(error);
                console.log('登陆异常  catch =====',);

            });


        //////////////////////////////////////////////////////////
        console.log("add-end");
        let end = new Date();
        console.log(end);
        console.log(end - start);

    }

    // hasErrors(fieldsError) {
    //     return Object.keys(fieldsError).some(field => fieldsError[field]);
    // }


}

export default User;
