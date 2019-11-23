import React from "react";
import {Upload, Icon, message, Button} from 'antd';
import axios from "axios";
import file from '../../../assets/css/system/file/file.css'
import {BrowserRouter as Router, Link} from "react-router-dom";


class FileSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: null,
            code: null,
            name: '',
            type: null,
            info: '',
            image: 'http://127.0.0.1:8001/zero/file/sunhina_157434301011046cbf990e98546bb859b5fad',
            images: [],
            list: [],
        }
    }


    //搜索 获取图片的集合
    searchForImageList = (file) => {
        console.log(file);
        console.log("######## 搜索 获取图片的集合 #########");
        let url = 'http://127.0.0.1:8001/zero/sys/file/list';
        let query = new Object();

        // query.name = this.state.name;
        axios.post(url, query).then(response => {
            console.log("##### response ####");
            console.log(response);
            console.log(response.status);
            console.log(response.headers);
            console.log(response.config);
            console.log("##### response.data ####");

            console.log(response.data);
            console.log(response.data.body);
            console.log(response.data.body.code);

            // //失败  小于1 失败
            // if (null === response && response.data.code == 1) {
            //     //成功，获取到后台返回的数据，可以做缓存
            //     console.log(" 成功" + response.data.msg);
            //     // this.props.history.push("/Success");
            //     this.setState({
            //         list: response.data.data
            //     })
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


    //获取表单的值


    handleGetInputValue = (event) => {
        console.log(event);
        console.log(event.keyCode);
        console.log(event.target.value);

        this.setState({
            name: event.target.value,
        });

        if (13 === event.keyCode) {
            console.log("按了回车键");
            console.log(event.target.value);

        }

    };

    render() {

        return (
            <div>

                {this.state.name}
                <div>从后台去读去图片</div>


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
                           onChange={this.handleGetInputValue}
                    />
                    {/*搜索按钮*/}
                    <button onClick={this.searchForImageList}>搜索</button>
                </p>

                <div className='image-node'>
                    <img src={this.state.image} className='img-body'/>
                    <p>先渲染一个图片</p>
                </div>

                <div>
                    <p className='front-black'>字体 front-black</p>
                    <div className="title">
                        {
                            this.state.list.map((value, key) => {
                                return (
                                    <Link key={key} to={value.url}>{value.name}</Link>
                                )
                            })
                        }

                    </div>


                </div>


            </div>
        );
    }

}

export default FileSearch;
