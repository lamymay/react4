import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

class Project extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            roles: [
                {
                    aid: '1',
                    title: '标题1'
                }, {
                    aid: '2',
                    title: '标题2'
                }
                , {
                    aid: '3',
                    title: '标题3'
                }
                , {
                    aid: '4',
                    title: '标题4'
                }

            ]
        }
    }


    componentDidMount() {
        //获取列表数据
        // this.getProjects();
        //赋值给 roles
        //渲染 表格 在页面中做 新增 编辑 删除 等

    }


    getUsers = () => {

    };


    //字符串拼接

    ///////////////////////////////////////////////////////////////////////////////////////////////////  render
    render() {
        return (
            <div>
                <h1>Project</h1>
                <ul>
                    {this.state.roles.map((value, key) => {
                        return <li key={key}>
                            <Link to={`/roleInsert/${value.aid}`}>{value.title}</Link>
                        </li>

                    })}
                </ul>
            </div>
        )
    }
}

export default Project;
