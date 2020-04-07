import React from "react";
import "antd/dist/antd.css";
import axios from 'axios';

// import UserInsert from "./UserInsert";

import {
    Table,
    Card,
    Button,
    Modal,
    // Form,
    // Input,
    // Tooltip,
    // Icon,
    // Cascader,
    // Select,
    // Row,
    // Col,
    // List,
    // Checkbox,
    // AutoComplete,
} from 'antd';
import urls from "../../../../config/urls";

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
        this.refreshTable();
    }

    refreshTable = () => {
        axios.post(urls.user.listPageUser, {})
            .then(response => {
                console.log("response  then ==获取到后台返回的数据");
                console.log(response.data);
                if (response != null && response.data.code === 1) {
                    console.log("refreshTable");
                    console.log(response.data.msg);
                    console.log(response.data.msg);
                    console.log(response.data.msg);
                }


                //失败
                if (null == response.data.data) {
                    alert(response.data.msg);
                }

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
        axios.post(urls.user.saveUser, {
            nickname: this.state.nickname,
            state: this.state.state == null ? 0 : this.state.state

        }).then(response => {
            let code = response.data.code;
            if (code === 1) {
                console.log(response.data.msg);
                //关闭弹出框
                this.setState({
                    visibleForInsert: false,
                    nickname: "",
                    state: 0
                });

                //刷新
                this.refreshTable();

                // location.reload();
                // this.forceUpdate();
                // this.props.history.push(urls.user.index);

            }
        })


            //异常
            .catch(function (response) {
                console.log(response);
                alert(response);
                console.log('catch 异常',);
            });
        ;
    };


    cancelInsertModal(visible) {
        this.setState({visibleForInsert: visible});
        console.log("  ----------------->取消 填充数据 cancelInsertModal");
    }

    //executeInsertModal
    executeInsertModal(visible) {
        this.setState({visibleForInsert: visible});
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
        })
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////  render
    render() {
        //定义表头，一般放在render()中
        const columns = [
            //列名称--数据源的字段名
            // {
            //     key: 'id',
            //     title: '测试合并',
            //     render: (text, record) => (
            //         <span>
            //            {record.nickname}--
            //             {record.avatar}>
            //             </span>
            //     )
            // },
            {
                key: 'nickname',
                title: '昵称',
                dataIndex: 'nickname',
                width: 150
            },
            // {
            //     key: 'avatar',
            //     title: '标识',
            //     dataIndex: 'avatar'
            // },
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
                        {/*<Button onClick={this.add}>add {record.id}</Button>*/}
                        <Button onClick={this.remove.bind(this, record.id)}>删除-{record.id}</Button>
                    </span>
                )
            }
        ];
        //////////////////////

        return (<div>

            <Card title={this.state.tableTitle}>

                {/*点击新增按钮：1、弹出输入框 2、获取输入数据保存 3、关闭输入框*/}
                <Button type="primary" onClick={this.showModal}>新增人员 </Button>
                {/*<Button type="dashed" onClick={this.updateUser}>测试 dashed与后台交互</Button>*/}
                {/*<Button type="danger" onClick={this.updateUser}>测试 danger与后台交互</Button>*/}


                {/*<UserInsert visibleForInsert={this.state.visibleForInsert} user={this}/>*/}

                <Modal
                    title="新增"
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
        let url = urls.user.delete + id;
        console.log(url);
        console.log(url);
        axios.get(url).then(response => {
            if (response != null && response.data.code === 1) {
                console.log(response.data.msg);
                //刷新
                this.refreshTable();
            }

        })
            .catch(function (error) {
                //异常
                console.log(error);
                console.log('catch 异常',);

            });


    }


}

export default User;
