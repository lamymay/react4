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
// import tasklists from 'markdown-it-task-lists'

//网络请求
import axios from 'axios';
import apis from '../../../config/urls.js';

// import hljs from 'highlight.js'
// import 'highlight.js/styles/atom-one-light.css'
// import './index.less';
// import 'highlight.js/styles/github.css'

//blog 的详情
//两种写法 导出一个类
//export default class BlogMd extends React.Component {
class BlogMd extends React.Component {

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
    //输入文本后 异步渲染Markdown
    renderHTML(text) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.mdParser.render(text))
            }, 200)
        })
    }


    componentDidMount() {
        // this.props.form.validateFields();
        console.log("----------- md -----------------");
        let id = 13;
        this.getArticle(id);
        //定时器
        //todo 定时器 触发
        this.interval = setInterval(() => this.tick(), 10000);


    }

    tick() {
        //循环更新
        this.updateArticleFun();

        // this.setState((prevState) => ({
        //     secondsElapsed: prevState.secondsElapsed + 1
        // }));
    }

    componentWillUnmount() {
        //清除
        clearInterval(this.interval);
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


    //编辑器有变化的话执行 更新文章
    handleEditorChange = ({html, text}) => {
        // console.log("html 是md 输入框中文本转换为html的文本---text 是md 输入框中的文本");
        //console.log(html);
        //console.log(text);

        //编辑
        if (this.state.id != null) {
            console.log(this.state.id);
            //文章正文
            this.setState({
                content: text
            });
            //编辑文章 更新即可
            this.updateArticleFun();
        } else {
            //todo 新增文章

        }
    };

    updateArticleFun = () => {
        let uri = apis.blog.updateBlog;
        let body = new Object();
        body.id = this.state.id;
        body.content = this.state.content;
        this.postBody(uri, body);
    };

    //
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


    // handleGetMdValue = () => {
    //     this.mdEditor && alert(this.mdEditor.getMdValue())
    // }

    // handleGetHtmlValue = () => {
    //     this.mdEditor && alert(this.mdEditor.getHtmlValue())
    // }


    //创建文章
    crateArticleFun() {
        // console.log(this.state.username);
        var url = "http://arc.com/zero/blogs";
        console.log(url);
        let article = {
            "authorId": this.state.authorId,
            "tagId": this.state.tagId,
            "category": this.state.category,
            "status": this.state.status,
            "title": this.state.title,
            "description": this.state.description,
            "content": this.state.content,
            "version": this.state.version,
            "sortWeight": this.state.sortWeight
        };

        let ret = this.postBody(url, article);
        console.log(article);
        console.log(ret);
    };


    //上传图片
    handleImageUpload(file, callback) {

        console.log(file);
        console.log(callback);
        const reader = new FileReader();
        console.log(reader);
        // reader.onload = () => {
        //     // const convertBase64UrlToBlob = (urlData) => {
        //     //     let arr = urlData.split(','), mime = arr[0].match(/:(.*?);/)[1]
        //     //     let bstr = atob(arr[1]);
        //     //     let n = bstr.length;
        //     //     let u8arr = new Uint8Array(n);
        //     //     while (n--) {
        //     //         u8arr[n] = bstr.charCodeAt(n)
        //     //     }
        //     //     return new Blob([u8arr], {type: mime})
        //     };
        //     const blob = convertBase64UrlToBlob(reader.result);
        //     setTimeout(() => {
        //         // setTimeout 模拟异步上传图片
        //         // 当异步上传获取图片地址后，执行calback回调（参数为imageUrl字符串），即可将图片地址写入markdown
        //         callback('https://avatars0.githubusercontent.com/u/21263805?s=40&v=4')
        //     }, 1000)
        // };
        // reader.readAsDataURL(file)
    }

    //-----------------------------------------------------------------------------
    //react渲染DOM的节点
    render() {
        return (
            <div>

                <MdEditor
                    ref={node => this.mdEditor = node}
                    value={this.state.markdown}
                    style={{height: '700px'}}
                    renderHTML={this.renderHTML}

                    config={{
                        view: {
                            menu: true,
                            md: true,
                            html: true
                        },
                        imageUrl: 'https://octodex.github.com/images/minion.png'
                    }}
                    onChange={this.handleEditorChange}
                    onImageUpload={this.handleImageUpload}
                />

            </div>
        );
    }
}

export default BlogMd;
