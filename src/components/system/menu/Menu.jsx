import React from "react";
import axios from "axios";
// import {Link} from "react-router-dom";
// import  Home from '../../../components/layout/Home'
import '../../../assets/css/system/menu/menu.css'
import apis from '../../../config/urls.js';


class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: null,
            parentId: null,
            systemId: null,//适用系统的id
            code: null,
            name: "测试",
            nameEnglish: null,
            sort: 0,
            level: 0,// 级别，1=第一级，2=第二级，，，
            state: 1,// 状态，暂时规划true=非0/false=0
            url: null,// 菜单URL地址
            icon: null,// icon地址
            note: null,


            raw: {
                id: null,
                parentId: null,
                systemId: null,//适用系统的id
                code: null,
                name: "测试",
                nameEnglish: null,
                sort: 0,
                level: 0,// 级别，1=第一级，2=第二级，，，
                state: 1,// 状态，暂时规划true=非0/false=0
                url: null,// 菜单URL地址
                icon: null,// icon地址
                note: null,
            },
            // info: '',
            list: [],
        }
    }


    componentDidMount() {
        //获取列表数据
        this.searchForMenuList("");
    }

    //请求服务器获取数据集合
    searchForMenuList = (e) => {
        let url = apis.menu.listMenu;
        let query = {};
        axios.post(url, query).then(response => {
            console.log("##### response ####");
            console.log(response);
            console.log(response.config);
            console.log(response.status);
            console.log(response.headers);
            console.log("###################");

            // //失败  小于1 失败
            // if (null === response && response.data.code == 1) {
            //     //成功，获取到后台返回的数据，可以做缓存
            //     console.log(" 成功" + response.data.msg);
            //     // this.props.history.push("/Success");
            let code = response.data.code;
            if (code === 1) {
                this.setState({
                    list: response.data.data
                });
                console.table(this.state.images);
            }
            //
            // } else {
            //     alert(response.data.msg);
            //     alert("FAIL");
            //     console.log("FAIL");
            //     console.log(response);
            //     // this.props.history.push("/file-search");
            // }
        })
            .catch(function (error) {
                //异常
                console.log(error);
                console.log('catch 异常',);
            });
        ;


    };


    /*
        searchForMenuList = (name) => {
            let url = apis.menu.listMenu;
            console.log(url);
            console.log(url);
            console.log(url);
            console.log(url);

            console.log("######## 搜索 获取图片的集合 #########");
            let query = {};
            // console.log(filename);
            // query.name = this.state.name;
            // query.name = this.state.name;
            axios.post(url,query).then(response => {
                console.log("##### response ####");
                console.log(response);
                console.log("###################");
                let code = response.data.code;
                // //失败  小于1 失败
                // if (null === response && response.data.code == 1) {
                //     // this.props.history.push("/Success");
                if (code === 1) {
                    let arr = [];
                    // arr.push(this.state.raw);
                    // console.log("arr.push(response.data.data);");
                    // console.log(response.data.data);
                    let resultArray = arr.concat(response.data.data);
                    console.log(resultArray);
                    this.setState({
                        list: resultArray
                    });
                    console.table(this.state.images);
                }
                //
                // } else {
                //     alert(response.data.msg);
                //     alert("FAIL");
                //     console.log("FAIL");
                //     console.log(response);
                //     // this.props.history.push("/file-search");
                // }
            })
                // .catch(function (error) {
                //     //异常
                //     console.log(error);
                //     console.log('catch 异常',);
                // });
            ;
        };
    */

    //请求服务器 保存数据
    saveMenu = (e) => {
        console.log("######## saveMenu #########");
        let url = apis.menu.saveMenu;
        console.log(url);
        //input 的参数怎么获取


        let request = {};
        request.parentId = this.state.parentId;
        request.code = null;
        request.name = this.state.name;
        request.systemId = this.state.systemId;
        request.sort = this.state.sort;
        request.level = this.state.level;
        request.state = this.state.state;
        request.url = this.state.url;
        request.icon = this.state.icon;
        request.note = this.state.note;

        //request  .nameEnglish = this.state.nameEnglish;
        console.table(this.state);
        console.table(request);
        console.log(request);

        // query.name = this.state.name;
        axios.post(url, request).then(response => {

            console.log("##### response.data.code ####");
            let code = response.data.code;
            console.log(code);
            console.log("###################");

            console.log("##### response.data.msg ####");
            console.log(response.data.msg);
            console.log("###################");

            if (code === 1) {
                console.log(response.data.msg);
                console.log(response.data.msg);
                console.log(response.data.msg);
                console.log(response.data.msg);

                // this.setState({
                // });
            }
            console.log("##### response ####");
            console.log(response.status);
            console.log(response.headers);
            console.log(response.config);
            console.log(response);
            console.log("###################");


            console.log("##### response.data ####");
            console.log(response.data.data);
            console.log("###################");

            console.log("##### response.data.data ####");
            console.log(response.data.data);
            console.log("###################");


            // //失败  小于1 失败
            // if (null === response && response.data.code == 1) {
            //     //成功，获取到后台返回的数据，可以做缓存
            //     console.log(" 成功" + response.data.msg);
            //     // this.props.history.push("/Success");

        })




        //异常
            .catch(function (error) {
                alert(error);
                console.log(error);
                console.log('catch 异常',);
            });
        ;
    };


    /////////////////////////////////

    onInputChange(e) {
        //es6变量名是一个变量
        let inputValue = e.target.value,
            inputName = e.target.name;
        console.log("#####################");
        console.log("inputName/inputValue：" + inputName + "/" + inputValue);
        // this.state.raw.[inputName] = inputValue
        this.setState({
            [inputName]: inputValue

            // raw: {
            //     [inputName]: inputValue
            // }
        })
    }


    //获取表单的值
    handleGetInputValue = (event) => {
        console.log(event);

        //获取原生的事件对像 e.nativeEvent
        console.log(event.nativeEvent);

        // onKeyUp
        console.log(event.keyCode);

        //获取输入的值
        console.log(event.target.value);

        this.setState({
            name: event.target.value,
        });


        if (13 === event.keyCode) {
            console.log("按了回车键 ------>");
            console.log("搜索的参数");
            console.log(this.state.name);
            console.log(this.state.name);
            console.log(this.state.name);
            let name = event.target.value;
            // searchImageList(name);
            console.log(name);
            console.log(this.state.name);
            this.searchForImageList(name);

        }

    };


    //获取input的值
    handleInputOnChange = (event) => {
        console.log(event);
        // onKeyUp
        console.log(event.keyCode);
        //获取输入的值
        console.log(event.target.value);

        //如何知道是那个id的input框 ？
        this.setState({
            name: event.target.value,
        });


        if (13 === event.keyCode) {
            console.log("按了回车键 ------>");
            console.log("搜索的参数");
            console.log(this.state.name);
            console.log(this.state.name);
            console.log(this.state.name);
            let name = event.target.value;
            // searchImageList(name);
            console.log(name);
            console.log(this.state.name);
            this.searchForImageList(name);

        }

    };


    render() {
        return (
            <div>
                <h3>  {this.state.name}</h3>
                <h4>  {this.state.note}</h4>
                <h4>  {this.state.systemId}</h4>
                <h4>  {this.state.sort}</h4>


                <h2>菜单管理</h2>

                {/*<p className="front-black">检索菜单</p>*/}
                <p>
                    {/*<label htmlFor="username" className="sr-only">名称</label>*/}
                    <input type="text"
                        // value={this.state.username}
                           placeholder="name / code "
                           autoFocus
                           required
                        // value={this.state.name}
                        // defaultValue={this.state.name}

                           className='file-search-input'
                           onKeyUp={this.handleGetInputValue}
                    />
                    {/*搜索按钮*/}
                    <button onClick={this.searchForMenuList}>检索菜单</button>
                </p>


                {/* save insert 创建    新增 新建的框框*/}
                <form className='image-node'>

                    <div>
                        名称：<input type="text"
                                  id="name"
                                  name="name"
                                  placeholder="name"
                                  autoFocus
                                  className="menu-input-save"
                                  onChange={e => this.onInputChange(e)}
                    />
                    </div>
                    <div>
                        地址：<input type="text"
                                  id="url"
                                  name="url"
                                  placeholder="url"
                                  className="menu-input-save"
                                  onChange={e => this.onInputChange(e)}
                    />
                    </div>


                    <div>

                        系统：<input type="text"
                                  id="systemId"
                                  name="systemId"
                                  placeholder="systemId"
                                  className="menu-input-save"
                                  onChange={e => this.onInputChange(e)}
                    />
                    </div>


                    <div>
                        上级：<input type="text"
                                  id="parentId"
                                  name="parentId"
                                  placeholder="parentId"
                        // required
                        //    value={this.state.name}
                                  className='menu-input-save'
                                  onChange={e => this.onInputChange(e)}
                    />
                    </div>


                    <div>
                        状态：<input type="text"
                                  id="state"
                                  name="state"
                                  placeholder="state"
                                  className="menu-input-save"
                                  onChange={e => this.onInputChange(e)}
                    />
                    </div>


                    <div>
                        注释：<input type="text"
                                  id="note"
                                  name="note"
                                  placeholder="note"
                                  className="menu-input-save"
                                  onChange={e => this.onInputChange(e)}
                    />
                    </div>

                    排序：<input type="text"
                              id="sort"
                              name="sort"
                              placeholder="sort"
                              className="menu-input-save-sort"
                              onChange={e => this.onInputChange(e)}
                />


                    {/*nameEnglish  icon  */}
                    <button
                        className="node-for-save-btn"
                        onClick={e => this.saveMenu(e)}>保存
                    </button>

                </form>

                {/*渲染list 数据*/}

                {this.state.list.map((value, key) => {
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
                            {/*note:{value.note}*/}
                            {/*createDate:{value.createDate}*/}
                            {/*<br/>*/}
                            {/*updateDate:{value.updateDate}*/}
                            {/*<br/>*/}
                            {/*<p className='front-black'>{value.name}</p>*/}
                        </div>
                    )
                })}


            </div>
        );
    }

}

export default Menu;
