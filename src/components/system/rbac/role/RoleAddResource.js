import React from "react";
import urls from '../../../../config/urls';

class RoleAddResource extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            roles: []
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
        console.log(urls.role);
        console.log(this.props);
        console.log("*******************");
    }


    getUsers = () => {

    };


    //字符串拼接

    ///////////////////////////////////////////////////////////////////////////////////////////////////  render
    render() {
        return (<div>

            <h1> RoleAddResource</h1>
            <h2> RoleAddResource</h2>
            <h3> RoleAddResource</h3>
            <h4> RoleAddResource</h4>
            <h5> RoleAddResource</h5>
            <h6> RoleAddResource</h6>


        </div>)
    }
}

export default RoleAddResource;
