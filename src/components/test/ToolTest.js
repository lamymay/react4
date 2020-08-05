import React from "react";
// import {BrowserRouter as Router, Link, Route} from "react-router-dom";
// import user from '../../../../assets/css/system/rbac/user.css'

class ToolTest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bgColor:'blue',
            list: [


            ]

        }
    }


    componentDidMount() {

    }


    getToolTests = () => {

    };



    ///////////////////////////////////////////////////////////////////////////////////////////////////  render
    render() {
        const textStyles = {
            color: 'black',
            backgroundColor: this.state.bgColor
        };
        return (<div>
            {/*<div  style="background-color:red;">style</div>*/}
            <h1>ToolTest</h1>

            <ul>
                {this.state.list.map((value, key) => {
                    return <li key={key}>
                        {/*<Link to={`/userInsert?aid=${value.aid}`}>{value.nickname}</Link>*/}
                        <p  className='user-item'>{value.aid}|{value.nickname}</p>
                        {/*<p  style="background-color:red;">{value.aid}|{value.nickname}</p>*/}
                    </li>

                })}
            </ul>
            <br/>
            <br/>
            <hr/>
            1. 行内样式
            <div
                style={{
                    width:'200px',
                    height:'80px',
                    backgroundColor:'yellow',
                    fontSize:'24px',
                    textAlign:'center'
                }}>
            <a href="https://github.com/lamymay/zero">后端源码 github</a>
            <a href="https://github.com/lamymay/react4">前端源码 github</a>
            </div>

            2. 声明样式
            <p style={textStyles}>inline style</p>

        </div>)
    }
}

export default ToolTest;

//https://segmentfault.com/a/1190000016952542?utm_source=tag-newest
//测试引入css的方式
// 1、行内引入， 特点：即在行内直接写，未能测试通过，报错，切支持度按网上说法也不是很全要驼峰编写
// 2、页内引入，特点：写const变量，这样数据与js会在一起，维护调试不是很方便
//3、外部引入，推荐，特点：与原生几乎一样，
// 第三种的用法：1js头部 “import user from '../../../../assets/css/system/rbac/user.css'” 2使用 "<p  className='user-item'>{value.aid}|{value.nickname}</p>"
