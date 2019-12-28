import React from "react";
import url from 'url';
import {Button, Card, Form, Input, Modal} from "antd";

// 新增用户
class UserInsert extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            id: -1,
            modalVisible: false,
            //
            // roles: [
            //     {
            //         aid: '1',
            //         title: '标题1'
            //     }, {
            //         aid: '2',
            //         title: '标题2'
            //     }
            //     , {
            //         aid: '3',
            //         title: '标题3'
            //     }
            //     , {
            //         aid: '4',
            //         title: '标题4'
            //     }
            // ]


        }
    }


    componentDidMount() {
        //获取列表数据
        // this.getList();
        //赋值给 list
        //渲染 表格 在页面中做 新增 编辑 删除 等
        //1可以获取到值了，需要自己解析 console.log(this.props.location.search);
        //2 使用现成的类库来解析
        // let query = url.parse(this.props.location.search, true).query;
        // console.log(query);
        console.log(this.state.id);

    }


    getUsers = () => {

    };



    getInitialState() {
        return {
            modal2Visible: false,
        };
    }

    setModal2Visible(modal2Visible) {
        this.setState({modal2Visible});
    }





    //字符串拼接

    ///////////////////////////////////////////////////////////////////////////////////////////////////  render
    render() {
        return (


            <Modal
                title="垂直居中的对话框"
                wrapClassName="vertical-center-modal"
                visible={this.state.modalVisible}
                // onOk={() => this.setModal2Visible(false)}
                //  onCancel={() => this.setModal2Visible(false)}
            >


                <p>对话框的内容</p>
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

export default UserInsert;
