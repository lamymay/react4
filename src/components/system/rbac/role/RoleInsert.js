import React from "react";
// import {Modal} from "antd";


class RoleInsert extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            roles: [
            ]
        }
    }


    componentDidMount() {
        //获取列表数据
        // this.getRoles();
        //赋值给 roles
        //渲染 表格 在页面中做 新增 编辑 删除 等
        //生命周期函数中获取 GET传值
        // console.log(this.props.match.params.aid);
        // console.log(this.props.match.params.aid);
        // console.log(this.props.match.params.aid);
        // console.log(this.props.match.params.aid);

        console.log("*******************");
        console.log(this.props);
        console.log("*******************");
    }



    //字符串拼接

    ///////////////////////////////////////////////////////////////////////////////////////////////////  render
    render() {
        return (<div>
            {/* save insert 创建    新增 新建的框框*/}
            <div>


                <div>
                    昵称：<input type="text"
                              name="name"
                              placeholder="name"
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
        </div>)
    }
}

export default RoleInsert;
