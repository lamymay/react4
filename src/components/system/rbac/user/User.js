import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import user from '../../../../assets/css/system/rbac/user.css'

class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bgColor:'beige',
            list: [
                {
                    aid: '1',
                    avatar: 'user1',
                    nickname: 'user1',
                    state: 'user1',
                }, {
                    aid: '1',
                    avatar: 'user1',
                    nickname: 'user1',
                    state: 'user1',
                }
                , {
                    aid: '1',
                    avatar: 'user1',
                    nickname: 'user1',
                    state: 'user1',
                }
                , {
                    aid: '1',
                    avatar: 'user1',
                    nickname: 'user1',
                    state: 'user1',
                }

            ]

        }
    }


    componentDidMount() {

    }


    getUsers = () => {

    };



    ///////////////////////////////////////////////////////////////////////////////////////////////////  render
    render() {
        const textStyles = {
            color: 'black',
            backgroundColor: this.state.bgColor
        };
        return (<div>
            {/*<div  style="background-color:red;">style</div>*/}
            <h1>User</h1>
            {/*<h2 className={textStyles}>hi const</h2>*/}


            <p style={textStyles}>inline style</p>

            <ul>
                {this.state.list.map((value, key) => {
                    return <li key={key}>
                        {/*<Link to={`/userInsert?aid=${value.aid}`}>{value.nickname}</Link>*/}
                        <p  className='user-item'>{value.aid}|{value.nickname}</p>
                        {/*<p  style="background-color:red;">{value.aid}|{value.nickname}</p>*/}
                    </li>

                })}
            </ul>
        </div>)
    }
}

export default User;

//https://segmentfault.com/a/1190000016952542?utm_source=tag-newest
//测试引入css的方式
// 1、行内引入， 特点：即在行内直接写，未能测试通过，报错，切支持度按网上说法也不是很全要驼峰编写
// 2、页内引入，特点：写const变量，这样数据与js会在一起，维护调试不是很方便
//3、外部引入，推荐，特点：与原生几乎一样，
//用法：
// 第三种的用法：1js头部 “import user from '../../../../assets/css/system/rbac/user.css'” 2使用 "<p  className='user-item'>{value.aid}|{value.nickname}</p>"
