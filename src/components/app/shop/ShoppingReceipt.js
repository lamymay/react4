import React from "react";
import "antd/dist/antd.css";
import axios from 'axios';
import ShoppingReceiptInsert from "./ShoppingReceiptInsert";
import urls from "../../../config/urls";

import {
    Table,
    Card,
    Button,
    Modal,
} from 'antd';

class ShoppingReceipt extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tableTitle: "列表",
            list: [],
            visibleForInsert: false,
        }
    }


    componentDidMount() {
        //获取列表数据
        console.log("获取列表数据----->");
        this.refreshTable();
    }

    //刷新表格
    refreshTable = () => {
        axios.post(urls.receipt.listPage, {})
            .then(response => {
                console.log(response.data);
                if (response != null && response.data.code === 1) {

                    var dataFromDb = response.data.data.content;
                    console.log(dataFromDb);
                    //赋值
                    this.setState({list: dataFromDb});
                }


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
    saveShoppingReceipt = (e) => {
        axios.post(urls.user.saveShoppingReceipt, {
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
        console.log("  ----------------->保存 executeInsertModal");
        this.saveShoppingReceipt();
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
            // {key: 'id', title: 'id', dataIndex: 'id', high: 20},
            {key: 'name', title: 'name', dataIndex: 'name', high: 20},
            {key: 'transactionTime', title: '交易时间', dataIndex: 'transactionTime'},
            {key: 'totalDiscount', title: '总折扣', dataIndex: 'totalDiscount', high: 20},
            // {key: 'path', title: 'path', dataIndex: 'path', width: 20, high: 20},
            {key: 'state', title: '启用状态', dataIndex: 'state'},
            // {key: 'createTime', title: '创建时间', dataIndex: 'createTime'},
            // {key: 'updateTime', title: '更新时间', dataIndex: 'updateTime'},

            //列名称--数据源的字段名
            {
                key: 'id',
                title: '成交价',
                render: (text, record) => (<span> {record.totalFinalPrice}{record.priceUnit}</span>)
            },

            {
                key: 'remove', title: '操作', render: (text, record) => (<span>
                        {/*<Button onClick={this.add}>add {record.id}</Button>*/}
                    <Button onClick={this.remove.bind(this, record.id)}>remove-{record.id}</Button>
                    </span>)
            }
        ];
        //////////////////////

        return (<div>

            <Card title={this.state.tableTitle}>

                {/*点击新增按钮：1、弹出输入框 2、获取输入数据保存 3、关闭输入框*/}
                <Button type="primary" onClick={this.showModal}>新增 </Button>

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

    remove(id) {
        console.log("删除--" + id);
        console.log(id);
        let url = urls.receipt.delete + id;
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
                console.log('登陆异常  catch =====',);

            });


    }


}

export default ShoppingReceipt;
