import React from "react";
import {Link} from "react-router-dom";
import  RoleDetails from './RoleDetails'
class Role extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [
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
        // this.getUsers();

    }


    getUsers = () => {

    };


    //字符串拼接

    ///////////////////////////////////////////////////////////////////////////////////////////////////  render
    render() {
        return (<div>

            <h2>GET 角色-动态传值测试</h2>

            <ul>
                {this.state.list.map((value, key) => {
                    return <li key={key}>
                        <Link to={`/RoleDetails/${value.aid}`}>  {value.title}
                        </Link>


                    </li>

                })}
            </ul>


        </div>)
    }
}

export default Role;
