import React from "react";
import axios from 'axios';
import urls from '../../../config/urls.js';

import "antd/dist/antd.css";

import {
    Table,
    Card,
    Button,
    // Modal,
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
}
    from
        'antd';
import FileDownload from "react-file-download";

// import ReactDOM from 'react-dom'
// import Connection from '../common/Connection';
//引入antd，本页面主要是对list数据做渲染

//对于 File 的CRUD
class FileManage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tableTitle: "文件列表",
            visibleForInsert: false,
            symbol: '',
            list: [],
        }
    }


    componentDidMount() {
        this.refreshTable();
    }

    //刷新表格
    refreshTable = () => {
        axios.post(urls.file.listPage, {})
            .then(response => {
                console.log("response  then ==获取到后台返回的数据");
                console.log(response.data);
                if (response != null && response.data.code === 1) {

                    var dataFromDb = response.data.data.content;
                    console.log(dataFromDb);

                    //赋值
                    this.setState({list: dataFromDb});
                    console.log(this.state.list);

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

    remove(id) {
        axios.get(urls.file.deleteFile + id).then(response => {
            if (response != null && response.data.code === 1) {
                console.log(response.data.msg);
                //刷新
                this.refreshTable();
            }
        })
            .catch(function (error) {
                //异常
                console.log(error);
                console.log('异常  catch =====',);
            });
    }


    // download
    download(id) {
        console.log("download");
        console.log("id=" + id);

        console.log(this.state.symbol);
        console.log(this.state.symbol);
        console.log(this.state.symbol);
        console.log(this.state.symbol);
        let url = urls.file.downloadFileByIdOrCode + id;
        axios.get(url, {responseType: 'blob'})
            .then(response => {
                console.log("---------------------------------------");
                console.log(response.data);
                console.log(response.status);
                console.log(response.statusText);
                console.log(response.headers);
                console.log(response.config);
                console.log("---------------------------------------");


                // let fileName = "temp.jpg";
                let fileName = response.headers['filename'];
                let contentType = response.headers['content-type'];
                let contentDisposition = response.headers['content-disposition'];
                console.log("##############fileName########");
                console.log(fileName);
                console.log(contentDisposition);
                console.log(contentType);
                console.log("######################");
                console.log(response);
                console.log(response.headers);
                console.log("symbol symbol symbol symbol");
                console.log(response.data.symbol);

                FileDownload(response.data, fileName);
            }).catch(function (error) {
            //异常
            console.log(error);
            console.log('异常  catch =====',);
        });
    }

//  错误
//    axios.post('/api',{
//     // 传参
// },
// {
//     responseType:'blob'    // 设置响应数据类型
// })
// .then(res=>{
//     if (res.status == 200) {
//         let url = window.URL.createObjectURL(new Blob([res.data]))
//         let link= document.createElement('a')
//         link.style.display='none'
//         link.href=url
//         link.setAttribute('download', fileName)    // 自定义下载文件名（如exemple.txt）
//         document.body.appendChild(link)
//         link.click()
//     }
// })
    ///////////////////////////////////////////////////////////////////////////////////////////////////  render
    render() {
        //定义表头，一般放在render()中
        const columns = [
            {key: 'id', title: 'id', dataIndex: 'id', high: 20},
            {
                key: 'remove', title: '操作',
                render: (text, record) => (
                    <span>
                        <Button onClick={this.download.bind(this, record.id)}>download-{record.id}</Button>
                        <Button onClick={this.remove.bind(this, record.id)}>delete-{record.id}</Button>
                    </span>
                )
            },
            // {key: 'code', title: 'code', dataIndex: 'code', width: 20, high: 20},
            {key: 'name', title: 'name', dataIndex: 'name', high: 20},
            {key: 'suffix', title: 'suffix', dataIndex: 'suffix'},
            {key: 'version', title: 'version', dataIndex: 'version', high: 20},
            // {key: 'path', title: 'path', dataIndex: 'path', width: 20, high: 20},
            {key: 'state', title: '启用状态', dataIndex: 'state'},
            // {key: 'createTime', title: '创建时间', dataIndex: 'createTime'},
            // {key: 'updateTime', title: '更新时间', dataIndex: 'updateTime'},

            //列名称--数据源的字段名
            {
                key: 'id',
                title: '文件大小',
                render: (text, record) => (<span>    {record.length} {record.lengthUnit}byte</span>)
            }


        ];
        //////////////////////

        return (<div>

            <Card title={this.state.tableTitle}>

                {/*columns:指定表头          dataSource:指定数据源          borderd:加边框*/}
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


}

export default FileManage;
