import React from "react";
import axios from 'axios';
import urls from '../../../../config/urls.js';

import "antd/dist/antd.css";

import {
    Table,
    Card,
    Button,
}
    from
        'antd';

// import ReactDOM from 'react-dom'
// import Connection from '../common/Connection';
//引入antd，本页面主要是对list数据做渲染


//对于 Resource 的CRUD
class Resource extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tableTitle: "资源列表",
            visibleForInsert: false,
            list: [],
        }
    }


    componentDidMount() {
        this.refreshTable();
    }

    //刷新表格
    refreshTable = () => {
        axios.post(urls.resource.listPage, {})
            .then(response => {
                console.log("response  then ==获取到后台返回的数据");
                console.log(response);
                console.log(response.data);
                console.log(response.data.content);

                    //赋值
                    this.setState({list: response.data.content});
                    console.log(this.state.list);

            }).catch(function (error) {
            //异常
            console.log(error);
            console.log('catch异常',);
        });
    };

    scanResourceFromController = () => {
        console.log("############ scanResourceFromController ###########");
        axios.get(urls.resource.scan, {})
            .then(response => {
                console.log("response  then ==获取到后台返回的数据");
                console.log(response.data);
                if (response != null && response.data.code === 1) {
                    //赋值
                    this.setState({list: response.data.data.content});
                    console.log(this.state.list);
                    this.refreshTable();
                }
            }).catch(function (error) {
            //异常
            console.log(error);
            console.log('异常  catch ');
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


    ///////////////////////////////////////////////////////////////////////////////////////////////////  render
    render() {
        //定义表头，一般放在render()中
        const columns = [
            {key: 'id', title: 'id', dataIndex: 'id'},
            // {key: 'code', title: 'code', dataIndex: 'code', width: 20, high: 20},
            {key: 'path', title: 'path', dataIndex: 'path'},
            // {key: 'name', title: 'name', dataIndex: 'name'},
            {key: 'resourceName', title: 'resourceName', dataIndex: 'resourceName'},
            {key: 'parentId', title: 'parentId', dataIndex: 'parentId'},
            {key: 'method', title: 'method', dataIndex: 'method'},
            // {key: 'note', title: 'note', dataIndex: 'note'},
            // {key: 'priority', title: 'priority', dataIndex: 'priority'},
            // {key: 'type', title: 'type', dataIndex: 'type'},
            // {key: 'createTime', title: '创建时间', dataIndex: 'createTime'},
            // {key: 'updateTime', title: '更新时间', dataIndex: 'updateTime'},
            //列名称--数据源的字段名
            // {key: 'id', title: '文件大小', render: (text, record) => (<span>    {record.size} {record.sizeUnit}</span>)},
            {
                key: 'remove', title: '操作',
                render: (text, record) => (
                    <span>
                        {/*<Button onClick={this.add}>add {record.id}</Button>*/}
                        <Button onClick={this.remove.bind(this, record.id)}>remove</Button>
                    </span>
                )
            }
        ];

        //////////////////////
        return (<div>
            <Card title={this.state.tableTitle}>
                <Button type="primary" onClick={this.scanResourceFromController}>扫描</Button>
                <Button type="danger" onClick={this.deleteAllResource}>清空</Button>

                {/*columns:指定表头          dataSource:指定数据源          borderd:加边框*/}
                <Table
                    rowKey={record => record.id}
                    columns={columns}
                    dataSource={this.state.list}
                    pageSize={10}
                    bordered>hh
                </Table>
            </Card>
        </div>);

    }

    remove(id) {
        axios.delete(urls.resource.delete + id).then(response => {
            if (response != null && response.data.code === 1) {
                console.log(response.data.msg);
                //刷新
                this.refreshTable();
            }

        }).catch(function (error) {
            //异常
            console.log(error);
            console.log('catch异常',);
        });

    }


    //删除全部
    deleteAllResource = () => {
        let ids = [];
        for (var i = 0; i < this.state.list.length; i++) {
            ids.push(this.state.list[i].id);
        }
        console.log(ids);

        axios.post(urls.resource.deleteBatch, ids).then(response => {
            if (response !== null && response !== 0) {
                console.log(response);
                //刷新
                this.refreshTable();
            }

        }).catch(function (error) {
            //异常
            console.log(error);
            console.log('catch异常',);

        });
    }
}

export default Resource;
