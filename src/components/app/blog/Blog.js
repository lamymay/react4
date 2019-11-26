import React from "react";
import {Timeline} from 'antd';
import axios from 'axios';

class Blog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '', //账号
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
        console.log(new Date());
        console.log("componentDidMount");
        this.getTimelineListFun();
        console.log("----------------------------");
        // this.props.form.validateFields();
    }


    // 获取博客数据  图片 + 文字，这里应该获取的是文字数据 阅读数等
    getTimelineListFun = (e) => {
        var uId = 1;
        var url = "http://arc.com/zero/blogs/timeline/" + uId;
        console.log(url);
        axios.get(url).then(response => {
            console.log(response.data);

            //失败  小于1 失败

            if (null === response&&response.data.code < 1) {
                alert(response.data.msg);
                console.log("FAIL");
                this.props.history.push("/index");
            } else {
                //成功，获取到后台返回的数据，可以做缓存
                console.log(" 成功" + response.data.msg);
                // this.props.history.push("/Success");

                this.setState({
                    list: response.data.data
                })
            }
        })
            .catch(function (error) {
                //异常
                console.log(error);
                console.log('异常 被 catch',);
            });
        ;
    };

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
                                <Timeline.Item key={key}>{value.timeLine}</Timeline.Item>
                            )
                        })
                    }
                </Timeline>
            </div>);
    }
}
export default Blog;
