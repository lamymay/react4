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
import apis from "../../../../config/urls";

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
            visibleForInsert: false,
            test: "453455454"
        }
    }


    componentDidMount() {
        //获取列表数据
        this.getUsers();

    }


    //在密码框中点了回车就直接发请求登陆
    //login
    getUsers = () => {
        let url = apis.user.listPageUser;
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

    //子父组件传值
    showModal = () => {
        this.setState({
            visibleForInsert: true,
        });


        console.log("原始状态 " + this.state.visibleForInsert);
        let flag = !this.state.visibleForInsert;
        console.log("flag= " + flag);
        //this.setState({visibleForInsert: flag});
        console.log("子父组件传值 ，flag= " + flag + " 状态= " + this.state.visibleForInsert);


    };


    //请求服务器 保存数据
    saveUser = (e) => {
        console.log("######## save ！！！！");
        let url = apis.user.saveUser;
        console.log(url);
        //input 的参数怎么获取


        let request = {};
        request.nickname = this.state.nickname;
        request.state = this.state.state;

        console.log(request);
        console.table(request);

        axios.post(url, request).then(response => {
            console.log("##### response.data.code ####");
            let code = response.data.code;
            console.log(code);
            console.log("###################");

            console.log("##### response.data.msg ####");
            console.log(response.data.msg);
            console.log("###################");

            if (code === 1) {
                console.log(response.data.msg);
                console.log(response.data.msg);
                console.log(response.data.msg);
                console.log(response.data.msg);
                this.setState({
                    visibleForInsert: true,
                });

            }
            console.log("##### response ####");
            console.log(response.status);
            console.log(response.headers);
            console.log(response.config);
            console.log(response);
            console.log("###################");


            console.log("##### response.data ####");
            console.log(response.data.data);
            console.log("###################");

            console.log("##### response.data.data ####");
            console.log(response.data.data);
            console.log("###################");


            // //失败  小于1 失败
            // if (null === response && response.data.code == 1) {
            //     //成功，获取到后台返回的数据，可以做缓存
            //     console.log(" 成功" + response.data.msg);
            //     // this.props.history.push("/Success");

        })




        //异常
            .catch(function (response) {
                console.log(response);
                alert(response);
                // if (response != null && response.errors[0] != null) {
                //     msg = "http status=" + response.status + ", msg= " + response.errors[0].defaultMessage + " at path:" + response.path;
                //     alert(msg);
                // }
                console.log('catch 异常',);
            });
        ;
    };


    //
    // getInitialState() {
    //     return {
    //         modal2Visible: false,
    //     };
    // }

    cancelInsertModal(visible) {
        console.log(visible);
        this.setState({visible: visible});
        console.log("  ----------------->取消 填充数据 cancelInsertModal");
    }

    //executeInsertModal
    executeInsertModal(visible) {
        console.log(visible);
        this.setState({visible: visible});
        console.log("  ----------------->保存用户 executeInsertModal");
        this.saveUser();
    }


    onInputChange(e) {
        //es6变量名是一个变量
        let inputValue = e.target.value,
            inputName = e.target.name;
        console.log("#####################");
        console.log("inputName/inputValue：" + inputName + "/" + inputValue);
        // this.state.raw.[inputName] = inputValue
        this.setState({
            [inputName]: inputValue

            // raw: {
            //     [inputName]: inputValue
            // }
        })
    }

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

                {/*点击新增按钮：1、弹出输入框 2、获取输入数据保存 3、关闭输入框*/}
                <Button type="primary" onClick={this.showModal}>测试 新增一个人员 </Button>
                {/*<Button type="dashed" onClick={this.updateUser}>测试 dashed与后台交互</Button>*/}
                {/*<Button type="danger" onClick={this.updateUser}>测试 danger与后台交互</Button>*/}


                {/*<UserInsert visibleForInsert={this.state.visibleForInsert} user={this}/>*/}

                <Modal
                    title="新增用户"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.visibleForInsert}
                    onOk={() => this.executeInsertModal(false)}
                    onCancel={() => this.cancelInsertModal(false)}
                >

                    {/* save insert 创建    新增 新建的框框*/}
                    <div>


                        <div>
                            昵称：<input type="text"
                                      name="nickname"
                                      name="nickname"
                                      placeholder="nickname"
                                      autoFocus
                                      onChange={e => this.onInputChange(e)}
                        />
                        </div>
                        <div>
                            状态：<input type="text"
                                      id="state"
                                      name="state"
                                      placeholder="state"
                                      onChange={e => this.onInputChange(e)}
                        />
                        </div>
                        {/*<div>*/}
                        {/*    avatar：<input type="text"*/}
                        {/*              id="avatar"*/}
                        {/*              name="avatar"*/}
                        {/*              placeholder="avatar"*/}
                        {/*              onChange={e => this.onInputChange(e)}*/}
                        {/*/>*/}
                        {/*</div>*/}
                    </div>


                </Modal>


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
        </div>);

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
