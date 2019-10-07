import React from "react";

class RoleDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    //生命周期函数中获取 GET传值
    componentDidMount() {
        console.log(this.props.match.params.aid);
    }


    getUsers = () => {

    };


    ///////////////////////////////////////////////////////////////////////////////////////////////////  render
    render() {
        return (<div>
            <h2>角色详情</h2>
        </div>)
    }
}

export default RoleDetails;
