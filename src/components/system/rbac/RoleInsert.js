import React from "react";


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
        console.log(this.props.match.params.aid);
        console.log(this.props.match.params.aid);
        console.log(this.props.match.params.aid);
        console.log(this.props.match.params.aid);

        console.log("*******************");
        console.log(this.props);
        console.log("*******************");
    }


    getUsers = () => {

    };


    //字符串拼接

    ///////////////////////////////////////////////////////////////////////////////////////////////////  render
    render() {
        return (<div>

            <h1> 新增角色</h1>
            <h2> 新增角色</h2>
            <h3> 新增角色</h3>
            <h4> 新增角色</h4>
            <h5> 新增角色</h5>
            <h6> 新增角色</h6>


        </div>)
    }
}

export default RoleInsert;
