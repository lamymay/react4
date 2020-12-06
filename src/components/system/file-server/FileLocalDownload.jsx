import React from "react";
import '../../../assets/css/system/file-server/file-server.css'

class FileLocalDownload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            display_title: '下载文件',
        }
    }

    componentDidMount() {
        console.log("########### this.props.routes) ###########");
        console.log(this.props.routes);
        this.testFun()
        console.log("######################");
    }


    //第一个方法
    testFun = () => {
        console.log("hello" + this.state.display_title)
/*


        result.blob().then(blob=>{

            var fileName = result.headers.get('Content-Disposition').split('=')[1];

            var url = window.URL.createObjectURL(blob);   // 获取 blob 本地文件连接 (blob 为纯二进制对象，不能够直接保存到磁盘上)
            var a = document.createElement('a');
            a.href = url;
            a.download = decodeURIComponent(fileName);

            document.body.appendChild(a);
            a.click();
            setTimeout(function(){
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            },1000);


            //var reader = new FileReader();
            //reader.readAsDataURL(blob);
            //reader. = function (e) {
            //    var a = document.createElement('a');
            //    a.download =decodeURIComponent(fileName);
            //    a.href = e.target.result;
            //    a.click();
            //}
        });
*/

    };


    render() {
        return (
            <div>
                <h3>hello {this.state.display_title}</h3>


            </div>
        );
    }

}

export default FileLocalDownload;

// 设计目标：
// 1 react 新文件的模板