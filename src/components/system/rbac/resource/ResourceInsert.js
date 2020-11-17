import React from "react";
import url from 'url';

// 新建
class ResourceInsert extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: -1,
            visible: false

        }
    }


    componentDidMount() {
        console.log(this.props.visibleForInsert);
        // console.log(this.state.visible);
        //获取列表数据
        // this.getList();
        //赋值给 list
        //渲染 表格 在页面中做 新增 编辑 删除 等
        //1可以获取到值了，需要自己解析 console.log(this.props.location.search);
        //2 使用现成的类库来解析
        // let query = url.parse(this.props.location.search, true).query;
        // console.log(query);
        // console.log(this.state.id);
    }


    saveOne= () => {
        console.log("save!!!!!!");
    };

    //
    // getInitialState() {
    //     return {
    //         modal2Visible: false,
    //     };
    // }

    cancelInsertdiv(visible) {
        console.log(visible);
        this.setState({visible: visible});
        console.log("  ----------------->取消 填充数据 cancelInsertdiv");
    }

    //executeInsertdiv
    executeInsertdiv(visible) {
        console.log(visible);
        this.setState({visible: visible});
        console.log("  ----------------->保存用户 executeInsertdiv");
        this.saveUser();
    }


    //字符串拼接

    ///////////////////////////////////////////////////////////////////////////////////////////////////  render
    render() {
        return (


            <div
                title="垂直居中的对话框"
                wrapClassName="vertical-center-modal"
                visible={this.props.visibleForInsert}
                onOk={() => this.executeInsertdiv(false)}
                onCancel={() => this.cancelInsertdiv(false)}
            >


                <p>对话框的内容= {this.props.visibleForInsert}</p>
                <form layout="inline" onSubmit={this.updateUser}>

                    <div> <input placeholder="nickname" onChange={event => this.handleMaxBackUp(event)}/>
                    </div>
                    <div> <input placeholder="avatar"></input> </div>
                    <div> <input placeholder="state"></input> </div>

                    <div> <button type="primary" htmlType="submit"> Log in </button> </div>
                </form>


            </div>
        )
    }
}

export default ResourceInsert;
