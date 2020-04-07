import React from "react";
// import urls from '../../../../config/urls';
// import {Modal} from "antd";
// import axios from "axios";
import "../../../../assets/css/system/rbac/role/role.css"

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
        console.log(this.props);
        console.log("*******************");
    }


//字符串拼接

///////////////////////////////////////////////////////////////////////////////////////////////////  render
    render() {
        return (<div>

            <div>


                {/*渲染list 数据*/}

     {/*           {this.state.resources.map((value, key) => {
                    return (
                        <div key={`${value.id}${value.name}`}
                             className='image-node'
                        >
                            id:{value.id}
                            <br/>
                            systemId:{value.systemId}
                            <br/>
                            pId:{value.parentId}
                            <br/>
                            sort{value.sort} <br/>
                            name:{value.name}
                            <br/>
                            level:{value.level}
                            <br/>
                            state:{value.state}
                            <br/>
                            url:{value.url}
                            <br/>
                            icon:{value.icon}
                            <br/>
                            note:{value.note}
                            createDate:{value.createDate}
                            <br/>
                            updateDate:{value.updateDate}
                            <br/>
                            <p className='front-black'>{value.name}</p>
                        </div>
                    )
                })}
*/}

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

export default RoleAddResource;
