import React from "react";
import url from 'url';
import {Button, Card, Form, Input, Modal} from "antd";

// 更新
class ResourceUpdate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            id: -1,
            visible: false


        }
    }


    componentDidMount() {
        console.log("ch ch ch");

        console.log(this.props.visibleForInsert);
        // console.log(this.state.visible);

        //获取列表数据
        // this.getList();
        //赋值给 list
        //渲染 表格 在页面中做 新增 编辑 删除 等
        //1可以获取到值了，需要自己解析 console.log(this.props.location.search);
        //2 使用现成的类库来解析
        // let query = url.parse(this.props.location.search, true).query;
        // console.log(query);
        // console.log(this.state.id);
    }


    saveOne = () => {
        console.log("save!!!!!!");
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


    //字符串拼接

    ///////////////////////////////////////////////////////////////////////////////////////////////////  render
    render() {
        return (


            <Modal
                title="垂直居中的对话框"
                wrapClassName="vertical-center-modal"
                visible={this.props.visibleForInsert}
                onOk={() => this.executeInsertModal(false)}
                onCancel={() => this.cancelInsertModal(false)}
            >


                <p>对话框的内容= {this.props.visibleForInsert}</p>
                <Form layout="inline" onSubmit={this.updateUser}>

                    <Form.Item> <Input placeholder="nickname" onChange={event => this.handleMaxBackUp(event)}/>
                    </Form.Item>
                    <Form.Item> <Input placeholder="avatar"></Input> </Form.Item>
                    <Form.Item> <Input placeholder="state"></Input> </Form.Item>

                    <Form.Item> <Button type="primary" htmlType="submit"> Log in </Button> </Form.Item>
                </Form>


            </Modal>
        )
    }
}

export default ResourceUpdate;
