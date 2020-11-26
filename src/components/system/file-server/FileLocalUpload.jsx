import React from "react";
import '../../../assets/css/system/file-server/file-server.css'

class FileLocalUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            //此状态机为display的取值
            name: 'FileLocalUpload',
            display_name: 'none',
        }
    }

    componentDidMount() {
        console.log("########### this.props.routes) ###########");
        console.log(this.props.routes);
        this.testFun()
        console.log("######################");
    }


    //编辑按钮的单击事件，修改状态机display_name的取值
    testFun = () => {
        console.log("hello" + this.state.name)
    };


    render() {
        return (
            <div>
                <h3>hello {this.state.name}</h3>
            </div>
        );
    }

}

export default FileLocalUpload;

// 设计目标：
// 1 react 新文件的模板