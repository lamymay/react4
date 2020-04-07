import React from "react";
import MdEditor from 'react-markdown-editor-lite'
import MarkdownIt from 'markdown-it'
import emoji from 'markdown-it-emoji'
import subscript from 'markdown-it-sub'
import superscript from 'markdown-it-sup'
import footnote from 'markdown-it-footnote'
import deflist from 'markdown-it-deflist'
import abbreviation from 'markdown-it-abbr'
import insert from 'markdown-it-ins'
import mark from 'markdown-it-mark'

import axios from 'axios';
import apis from '../../../config/urls.js';

class BlogDetail extends React.Component {


    mdEditor = null;
    mdParser = null;

    //构造器 需要实例化 并初始化
    constructor(props) {
        super(props);
        // initial a parser
        this.mdParser = new MarkdownIt({
            html: true,
            linkify: true,
            typographer: true,
            highlight: function (str, lang) {
                // if (lang && hljs.getLanguage(lang)) {
                //     try {
                //         return hljs.highlight(lang, str).value
                //     } catch (__) {}
                // }
                return '' // use external default escaping
            }
        })
            .use(emoji)
            .use(subscript)
            .use(superscript)
            .use(footnote)
            .use(deflist)
            .use(abbreviation)
            .use(insert)
            .use(mark);
        // .use(tasklists, {enabled: this.taskLists});
        this.renderHTML = this.renderHTML.bind(this);

        this.state = {
            id: null,
            t1: null,
            t2: null,
            secondsElapsed: 0,
            //  const MOCK_DATA = "Hello.\n\n * This is markdown.\n * It is fun\n * Love it or leave it.";
            markdown: '# This is a H1  \n## This is a H2  \n###### This is a H6',
            // #测试一级标题 ##副标题
            authorId: 1,
            tagId: 0,
            category: 0,
            status: 2,
            title: "测试 title",
            description: "测试description",
            content: "测试 content content content content",
            version: 1,
            sortWeight: 1
        }
    }

    /////////////
    componentDidMount() {
        console.log("----------------------------");
        console.log("componentDidMount");
//todo 组件间传值
        let id = 13;
        this.getArticle(id);

        console.log("----------------------------");
    }

    getArticle = (id) => {
        let url = apis.blog.getBlogArticleByUserId + id;
        console.log(url);
        axios.get(url).then(response => {
            //访问后台接口成功
            if (null != response && response.data.code === 1) {
                console.log(" 成功msg-->" + response.data.msg);
                let article = response.data.data;
                //console.log(article);
                // 重新渲染
                this.setState({
                    id: article.id,
                    markdown: article.content
                });
            } else {
                //访问接口失败
                console.log("访问接口失败");
                // this.props.history.push("/TestMdEditor");
                //this.props.history.push("/");
            }

        })
            .catch(function (error) {
                //访问接口异常
                console.log(error);
                console.log('axios catch 异常=====',);
                // this.props.history.push("/");
            })
        ;

    };

    /////////////
    //输入文本后 异步渲染Markdown
    renderHTML(text) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.mdParser.render(text))
            }, 200)
        })
    }

    postBody = (url, body) => {
        console.log(url);
        console.log(body);

        axios.post(url, body).then(response => {
            //访问后台接口成功
            if (null != response && response.data.code === 1) {
                console.log(" 成功-->" + response.data.msg);
                let data = response.data.data;
                //console.log(article);
                console.log("1111111111111");
                console.log(data);
                // this.setState({
                // id: article.id,
                // markdown: article.content
                // });
            } else {
                //访问接口失败
                console.log("访问接口失败");
                // this.props.history.push("/TestMdEditor");
                //this.props.history.push("/");
            }

        })
            .catch(function (error) {
                //访问接口异常
                console.log(error);
                console.log('axios catch 异常=====',);
                // this.props.history.push("/");
            })
        ;
        return true;
    }

    /////////////
    render() {

        return (
            <div>
                BlogDetail

                <MdEditor
                    ref={node => this.mdEditor = node}
                    value={this.state.markdown}
                    // style={{height: '400px'}}
                    renderHTML={this.renderHTML}

                    config={{
                        view: {
                            menu: false,
                            md: false,
                            html: true
                        },
                        imageUrl: 'https://octodex.github.com/images/minion.png'
                    }}
                    // onChange={this.handleEditorChange}
                    // onImageUpload={this.handleImageUpload}
                />


            </div>);
    }
}

export default BlogDetail;
