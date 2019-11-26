import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import axios from "axios";
// import Role from '../system/rbac/Role';
// import UserList from '../system/user/UserList';
// import User from '../system/rbac/user/User';
// import UserInsert from '../system/user/UserInsert';
// import RoleInsert from '../system/rbac/RoleInsert';
// import File from '../system/file/File';
// import Login from '../basic/Login';
// import Food from '../app/food/Food';
// import Index from '../basic/Index';
// import FoodDetails from '../app/food/FoodDetails';
// import FileSearch from '../system/file/FileSearch';
// import Menu from '../system/menu/Menu';
import routers from '../../config/router.js';

//css
import '../../assets/css/layout/home.css'


// const host= "http://127.0.0.1:8001";
const host = "http://122.51.110.127:80";


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    /////////////
    //初始化函数触发
    componentDidMount() {
        // To disabled submit button at the beginning.
        console.log("componentDidMount--初始化的时候去获取菜单数据");
        this.getMenusFun();
        // this.props.form.validateFields();
    }


    // 初始化的时候去获取菜单数据
    getMenusFun = (e) => {
        var systemId = 4;
        var level = 0;//0 全部
        //localhost:8001/zero/menus/2/levels/0
        // var url = "http://arc.com/zero/menus/" + menuId + "/levels/" + level;
        var url = host + "/zero/menus/" + systemId + "/levels/" + level;
        console.log(url);

        axios.get(url).then(response => {
            console.log("########## response #########");
            console.log(response);
            console.log("###################");
            console.log("########## response.data #########");
            console.log(response.data);
            console.log("###################");


            if (response != null) {
                console.log("########## response.data.data #########");
                //成功，获取到后台返回的数据，可以做缓存
                console.log(response.data.msg);
                console.log(response.data.data);
                console.log("###################");
                // this.props.history.push("/Success");
                this.setState({
                    list: response.data.data
                })
            }


            //失败  小于1 失败
            if (null === response && response.data.code < 1) {
                alert(response.data.msg);
                console.log("FAIL");
                this.props.history.push("/index");
            }
        })
            .catch(function (error) {
                //异常
                console.log(error);
                console.log('异常 被 catch',);
            });
        ;

    };


    ///////////////////////////////////////////////////////////////////////////////////////////////////  render
    render() {
        return (

            <div>
                <Router>
                    <div className="title">
                        {
                            this.state.list.map((value, key) => {
                                return (
                                    <Link key={key} to={value.name}>{value.url}</Link>
                                )
                            })
                        }
                    </div>
                    {
                        routers.map((route, key) => {
                            if (route.exact) {
                                return <Route exact path={route.path}
                                              render={props => (
                                                  <route.component{...props} routes={route.routes}/>
                                              )}/>;
                            } else {
                                return <Route path={route.path}
                                              render={props => (
                                                  <route.component{...props} routes={route.routes}/>
                                              )}/>;
                            }
                        })

                    }

                    {/*<Route exact path="/user" component={User}/>*/}
                    {/*<Route exact path="/role" component={Role}/>*/}
                    {/*<Route exact path="/role" component={Role}/>*/}
                    {/*<Route exact path="/roleInsert/:aid" component={RoleInsert}/>*/}
                    {/*<Route exact path="/userInsert" component={UserInsert}/>*/}
                    {/*<Route exact path="/food" component={Food}/>*/}
                    {/*<Route exact path="/foodDetails" component={FoodDetails}/>*/}
                    {/*<Route exact path="/file" component={File}/>*/}
                    {/*<Route exact path="/login" component={Login}/>*/}
                    {/*<Route exact path="/index" component={Index}/>*/}
                    {/*<Route exact path="/user-list" component={UserList}/>*/}
                    {/*<Route exact path="/file-search" component={FileSearch}/>*/}
                    {/*<Route exact path="/menu" component={Menu}/>*/}


                </Router>

            </div>)
    }
}

export default Home;


// 原始的
//              {
//                         routers.map((route, key) => {
//                             if (route.exact) {
//                                 return <Route exact path={route.path} component={route.component} key={route.path}/>
//                             }
//                         })
//
//                     }
