import React from "react";
import axios from 'axios';

class ManageBlog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            id: null,
            authorId: 1,
            tagId: 0,
            category: 0,
            status: 2,
            title: "测试 title",
            description: "测试description",
            content: null,
            version: 1,
            sortWeight: 1
        }
    }


    getInitialState() {
        return {
            modal2Visible: false,
        };
    }

    setdiv2Visible(modal2Visible) {
        this.setState({modal2Visible});
    }


    componentDidMount() {
        //获取列表数据
        this.getManageBlog();

    }

    // hasErrors(fieldsError) {
    //     return Object.keys(fieldsError).some(field => fieldsError[field]);
    // }


    //在密码框中点了回车就直接发请求登陆
    //login
    getManageBlog = () => {
        var port = 80;
        var url = "http://127.0.0.1:" + port + "/zero/blogs/page";
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
                       {record.id}--
                        {record.version}>
                        </span>
                )
            },
            {
                key: 'authorId',
                title: '作者id',
                dataIndex: 'authorId',
                width: 150
            },
            {
                key: 'title',
                title: 'title',
                dataIndex: 'title',
                width: 150
            }, {
                key: 'description',
                title: 'description',
                dataIndex: 'description',
                width: 150
            }, {
                key: 'content',
                title: 'content',
                dataIndex: 'content',
                width: 150
            }, {
                key: 'version',
                title: 'version',
                dataIndex: 'version',
                width: 150
            }, {
                key: 'sortWeight',
                title: 'sortWeight',
                dataIndex: 'sortWeight',
                width: 150
            },
            {
                key: 'tagId',
                title: '标签',
                dataIndex: 'tagId'
            }, {
                key: 'category',
                title: '分类',
                dataIndex: 'category'
            },
            {
                key: 'status',
                title: '状态',
                dataIndex: 'status'
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
                        <button onClick={this.add}>add {record.id}</button>
                        <button onClick={this.remove.bind(this)}>remove-{record.id}</button>
                    </span>
                )
            }
        ];
        //////////////////////

        return (<div>

            <div title={"基础表格"}>
                {/*    <button type="primary" onClick={this.updateUser}>测试 primary与后台交互</button>
                <button type="dashed" onClick={this.updateUser}>测试 dashed与后台交互</button>
                <button type="danger" onClick={this.updateUser}>测试 danger与后台交互</button>*/}

                <button type="dashed" onClick={() => this.setdiv2Visible(true)}>显示垂直居中的对话框</button>

                <div
                    title="垂直居中的对话框"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.modal2Visible}
                    // onOk={() => this.setdiv2Visible(false)}
                    //  onCancel={() => this.setdiv2Visible(false)}
                >

                    <p>对话框的内容</p>
                    <form layout="inline" onSubmit={this.updateUser}>

                        <span> <input placeholder="nickname" onChange={event => this.handleMaxBackUp(event)}/>
                        </span>
                        <span> <input placeholder="avatar"></input> </span>
                        <span> <input placeholder="state"></input> </span>
                        <span> <button type="primary" htmlType="submit"> Log in </button> </span>
                    </form>


                </div>

                {/*columns:指定表头          dataSource:指定数据源          borderd:加边框*/}
                {/*<Table  rowKey={record=>record.id} columns={columns} dataSource={this.state.users} bordered>*/}
                <table
                    rowKey={record => record.id}
                    columns={columns}
                    dataSource={this.state.users}
                    pageSize={10}
                    bordered>
                </table>
            </div>
        </div>)
    }

    remove(id) {
        console.log("删除--" + id);
        console.log(id);
    }


}


export default ManageBlog;
