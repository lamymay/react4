import React from "react";
import urls from '../../../../config/urls';
import axios from "axios";
import RoleAddResource from "./RoleAddResource"

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
import RoleInsert from "./RoleInsert";

class RoleList extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            deleteUrl: urls.role.delete,
            tableTitle: "角色列表",
            list: [],
            resources: [],
            resourceIds: [],
            visibleForInsert: false,
            visibleForAddResource: true,
            test: "0002"
        }
    }


    componentDidMount() {
        //获取列表数据
        this.refreshTableForRole();
    }


    //子父组件传值
    showModal = () => {
        // console.log(model);
        // console.log(model);
        // console.log(model);
        // if ("RoleInsert" == model) {
        //     this.setState({
        //         visibleForInsert: true,
        //     });
        // }else if("RoleAddResource"==model){
        //     console.log("RoleAddResource");
        // }

        console.log("原始的状态 " + this.state.visibleForInsert);
        this.setState({
            visibleForInsert: !this.state.visibleForInsert,
        });
        console.log("修改后的状态 " + this.state.visibleForInsert);

        console.log("子父组件传值 ，flag=  " + this.state.visibleForInsert);
    };

    ///////// todo 抽取
    showModalForRoleAddResource = () => {
        // let showAddResourceFlag = !this.state.visibleForAddResource;
        let showAddResourceFlag = true;
        console.log(showAddResourceFlag);
        console.log(showAddResourceFlag);
        console.log(showAddResourceFlag);
        console.log(showAddResourceFlag);
        console.log("原始visibleForAddResource的状态 " + this.state.visibleForAddResource);
        this.setState({visibleForAddResource: showAddResourceFlag});
        console.log("修改后visibleForAddResource的状态 " + this.state.visibleForAddResource);
        console.log("子父组件传值visibleForAddResource =  " + this.state.visibleForAddResource);
    };



    //Modal1-executeInsertModal
    executeInsertModal(visible) {
        this.setState({visibleForInsert: visible});
        console.log("  ----------------->保存 executeInsertModal");
        this.saveUser();
    }

    // Modal1 -
    cancelInsertModal(visible) {
        this.setState({visibleForInsert: visible});
        console.log("  ----------------->取消 填充数据 cancelInsertModal");
    }

    //Modal2
    okModalForAddResourcesToRole(visible) {
        this.listResource();

        // this.setState({visibleForInsert: visible});
        console.log("###################################");
        console.log("okModalForAddResourcesToRole");
        console.log("visible" + visible);
        console.log("SAVE");
        console.log(this.state.resources);
        // this.saveUser();
        console.log("###################################");
    }

    // Modal2
    cancelModalForAddResourcesToRole(visible) {
        // this.setState({visibleForInsert: visible});
        console.log("  ----------------->取消 cancelModalForAddResourcesToRole");
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


    //获取资源列表
    listResource = () => {
        axios.post(urls.resource.listPage, {})
            .then(response => {
                console.log("response  then ==获取到后台返回的数据");
                console.log(response.data);
                if (response != null && response.data.code === 1) {
                    var dataFromDb = response.data.data.content;
                    //赋值
                    this.setState({resources: dataFromDb});
                    console.log(this.state.resources);
                }

            }).catch(function (error) {
            //异常
            console.log(error);
            console.log('catch异常',);
        });

    };

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
            //            {record.name}--
            //             {record.avatar}>
            //             </span>
            //     )
            // },
            {
                key: 'id',
                title: 'id',
                dataIndex: 'id'
            }, {
                key: 'name',
                title: '名称',
                dataIndex: 'name',
                width: 150
            },
            {
                key: 'root',
                title: 'root',
                dataIndex: 'root'
            }, {
                key: 'note',
                title: 'note',
                dataIndex: 'note'
            },
            {
                key: 'state',
                title: '启用状态',
                dataIndex: 'state'
            },
            {
                key: 'createTime',
                title: '创建时间',
                dataIndex: 'createTime'
            },
            {
                key: 'updateTime',
                title: '更新时间',
                dataIndex: 'updateTime'
            },
            {
                key: 'add-remove',
                title: 'add/remove',
                render: (text, record) => (
                    <span>
                        <Button onClick={this.remove.bind(this, record.id, this.state.deleteUrl)}>保存</Button>
                        <Button onClick={this.remove.bind(this, record.id, this.state.deleteUrl)}>删除</Button>
                    </span>
                )
            }
        ];
        //////////////////////  return  //////////////////////

        return (<div>

            <Card title={this.state.tableTitle}>

                {/*点击新增按钮：1、弹出输入框 2、获取输入数据保存 3、关闭输入框*/}
                <Button type="primary" onClick={this.showModal}>新增 </Button>
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
                    <RoleInsert/>
                </Modal>

                <Button type="primary" onClick={this.showModalForRoleAddResource}>RoleAddResource </Button>
                <Modal
                    title="RoleAddResource"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.visibleForAddResource}
                    onOk={() => this.okModalForAddResourcesToRole(false)}
                    onCancel={() => this.cancelModalForAddResourcesToRole(false)}
                >
                    <RoleAddResource/>

                </Modal>


                {/*<Button type="primary" onClick={this.showModal}>测试RoleAddResource </Button>*/}
                {/*<Modal*/}
                {/*title="测试RoleAddResource"*/}
                {/*wrapClassName="vertical-center-modal"*/}
                {/*visible={this.state.visibleForInsert}*/}
                {/*onOk={() => this.executeInsertModal(false)}*/}
                {/*onCancel={() => this.cancelInsertModal(false)}*/}
                {/*>*/}
                {/*<RoleInsert/>*/}
                {/*</Modal>*/}


                {/*columns:指定表头          dataSource:指定数据源          borderd:加边框*/}
                {/*<Table  rowKey={record=>record.id} columns={columns} dataSource={this.state.users} bordered>*/}

                <Table
                    rowKey={record => record.id}
                    columns={columns}
                    dataSource={this.state.list}
                    pageSize={10}
                    bordered>
                </Table>
            </Card>
        </div>);

    }


    // 发请求去查询分页数据
    refreshTableForRole(listPage, query) {
        this.listPageForRole(urls.role.listPage, {});
    }

    //查分页数据
    listPageForRole(listPage, query) {
        // let roleList = new Array();
        axios.post(listPage, query).then(response => {
            console.log(response.data);
            if (response != null && response.data.code === 1) {
                console.log("refreshTable");
                console.log(response.data.msg);
            }
            //失败
            if (null == response.data.data) {
                alert(response.data.msg);
            }


            var fromDb = response.data.data;
            console.log(fromDb);
            //赋值
            this.setState({list: fromDb});

            console.log(this.state.list);
        }).catch(function (error) {
            //异常
            console.log(error);
            console.log('异常  catch  list page role====',);
        });
    }


    //请求服务器 保存数据
    saveUser = (e) => {
        axios.post(urls.user.saveUser, {
            name: this.state.name,
            state: this.state.state == null ? 0 : this.state.state

        }).then(response => {
            let code = response.data.code;
            if (code === 1) {
                console.log(response.data.msg);
                //关闭弹出框
                this.setState({
                    visibleForInsert: false,
                    name: "",
                    state: 0
                });

                //刷新
                this.refreshTable();

                // location.reload();
                // this.forceUpdate();
                // this.props.history.push(urls.user.index);

            }
        }).catch(function (response) {
            console.log(response);
            alert(response);
            console.log('catch 异常',);
        });
        ;
    };

    //删除
    remove(id, deleteUrl) {
        console.log("删除--" + id);
        console.log(id);
        let url = deleteUrl + id;
        console.log(url);
        axios.delete(url).then(response => {
            if (response != null && response.data.code === 1) {
                console.log(response.data.msg);
                //刷新
                this.refreshTable();
            }
        }).catch(function (error) {
            console.log(error);
            console.log('异常',);
        });
    }


}

export default RoleList;
