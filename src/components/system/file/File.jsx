import React from "react";
import '../../../assets/css/system/file/file.css'

import FileGet from './FileGet';

import FileSearch from "./FileSearch";
import FileUpload from "./FileUpload";

class File extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            display_name: 'none', //此状态机为display的取值
        }
    }

    componentDidMount() {
        console.log("########### this.props.routes) ###########");
        console.log(this.props.routes);
        console.log("######################");
    }


    //编辑按钮的单击事件，修改状态机display_name的取值
    showFileDownload = () => {
        // this.setState({display_name: 'block',})
        if (this.state.display_name == 'none') {
            this.setState({
                display_name: 'block',
            })
        } else if (this.state.display_name == 'block') {
            this.setState({
                display_name: 'none',
            })

        }
    };


    render() {

        return (
            <div>
                <FileUpload/>
                <FileSearch/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <button onClick={this.showFileDownload}>附加功能开关</button>
                <div style={{
                    background: '#fff',
                    display: this.state.display_name
                }}>    {/* 通过状态机display_name获取diaplay取值 */}
                    <FileGet/>
                </div>


            </div>
        );
    }

}

export default File;
