import React from "react";
import {Timeline} from 'antd';
import axios from 'axios';
import {Link} from "react-router-dom";

import apis from '../../../config/urls.js';

class Blog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 13,
            authorId: '', // 作者，所属用户ID[多作者请在描述中填充第二作者信息]
            tagId: '', // 栏目ID
            sortId: '',// 所属分类
            status: '',// 文章的模式:0为私有，1为公开，2为仅好友查看
            title: '',// 文章名称-64
            description: '',// 文章描述-128
            content: '',// 文章内容[text]
            publishDate: '',// 发布时间
            createDate: '',// 创建时间(创建未发表)
            updateDate: '',// 更新时间

            //时间线 渲染列表
            list: []
        }
    }

    /////////////
    componentDidMount() {
        // To disabled submit button at the beginning.
        console.log("----------------------------");
        console.log("componentDidMount");
        this.getTimelineListFun();
        console.log("----------------------------");
        // this.props.form.validateFields();
    }


    // 获取博客数据  图片 + 文字，这里应该获取的是文字数据 阅读数等
    getTimelineListFun = (e) => {
        var uId = 1;
        let url = apis.blog.listBlogByAuthorId + uId;
        console.log("--- url ---");
        console.log(url);
        console.log(url);
        console.log(url);


        axios.get(url).then(response => {
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

    onClick = (e) => {
        console.log(new Date());
    }

    /////////////
    render() {

        return (
            <div>
                {/*<Timeline>*/}
                {/*    <Timeline.Item color="green">AAA</Timeline.Item>*/}
                {/*    <Timeline.Item color="green">BB</Timeline.Item>*/}
                {/*    <Timeline.Item color="green">C</Timeline.Item>*/}
                {/*    <Timeline.Item color="red">Create</Timeline.Item>*/}
                {/*</Timeline>*/}

                <Timeline className='list'>
                    {
                        this.state.list.map((value, key) => {
                            return (
                                <Timeline.Item key={key}
                                               // onClick={this.onClick()}
                                >
                                    <Link to={'/blog-detail'} type="span">{value.timeLine}     </Link>
                                </Timeline.Item>

                            )
                        })
                    }
                </Timeline>
            </div>);
    }
}

export default Blog;
