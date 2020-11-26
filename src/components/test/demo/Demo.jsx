import React from "react";
import '../../../assets/css/system/file-server/file-server.css'

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Demo',
            display_name: 'none',
        }
    }

    componentDidMount() {
        console.log("########### this.props.routes) ###########");
        console.log(this.props.routes);
        testFun()
        console.log("######################");
    }


    // 一个方法
    testFun = () => {
        console.log("一个方法:" + this.state.name)
    };

    render() {
        return (
            <div>
                <h3>hello {this.state.name}</h3>
            </div>
        );
    }

}

export default Demo;

// 设计目标：
// 1 react 新文件的模板