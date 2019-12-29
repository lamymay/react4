import React from "react";
import axios from "axios";
// import {Link} from "react-router-dom";

import '../../../assets/css/system/file/file.css'
import apis from '../../../config/urls.js';


class FileSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: null,
            code: null,
            name: '',
            type: null,
            // info: '',
            // image: 'http://127.0.0.1:8001/zero/file/sunhina_157434301011046cbf990e98546bb859b5fad',
            images: [],
        }
    }


    //搜索 获取图片的集合
    searchForImageList = (filename) => {
        console.log("######## 搜索 获取图片的集合 #########");
        let url = apis.file.listFileByQuery;

        let query = {};
        console.log(filename);
        query.name = this.state.name;
        // query.name = this.state.name;
        axios.post(url, query).then(response => {
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
            console.log("##### response.data.code ####");
            let code = response.data.code;
            console.log(code);
            console.log("###################");

            console.log("##### response.data.msg ####");
            console.log(response.data.msg);
            console.log("###################");


            // //失败  小于1 失败
            // if (null === response && response.data.code == 1) {
            //     //成功，获取到后台返回的数据，可以做缓存
            //     console.log(" 成功" + response.data.msg);
            //     // this.props.history.push("/Success");
            if (code === 1) {
                this.setState({
                    images: response.data.data
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


    componentDidMount() {
        //获取列表数据
        this.searchForImageList(null);
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


    render() {
        return (
            <div>

                {this.state.name}

                <div className="front-black">检索图片</div>


                <p>
                    {/*<label htmlFor="username" className="sr-only">名称</label>*/}
                    <input type="text"
                           id="name"
                           name="name"
                        // value={this.state.username}
                           placeholder="name / code "
                           autoFocus
                        // required
                        //    value={this.state.name}
                           className='file-search-input'
                           onKeyUp={this.handleGetInputValue}
                    />
                    {/*搜索按钮*/}
                    <button onClick={this.searchForImageList}>搜索</button>
                </p>


                {this.state.images.map((value, key) => {
                    return (
                        <div key={`${value.name}${value.id}`}>
                            <img
                                key={`${value.name}${value.id}`}
                                src={value.url}
                                className='image-node'
                                alt=''></img>
                            <p className='front-black'>{value.name}</p>
                        </div>
                    )
                })}

                <h2>完</h2>
            </div>
        );
    }

}

export default FileSearch;
