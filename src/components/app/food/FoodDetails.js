import React from "react";
import url from 'url';
class FoodDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            roles: [
                {
                    aid: '1',
                    title: '标题1'
                }, {
                    aid: '2',
                    title: '标题2'
                }
                , {
                    aid: '3',
                    title: '标题3'
                }
                , {
                    aid: '4',
                    title: '标题4'
                }

            ]
        }
    }


    componentDidMount() {
        //获取列表数据
        // this.getList();
        //赋值给 list
        //渲染 表格 在页面中做 新增 编辑 删除 等
        //1可以获取到值了，需要自己解析 console.log(this.props.location.search);
        //2 使用现成的类库来解析
        let query = url.parse(this.props.location.search, true).query;
        console.log(query);
        console.log(query.aid);

    }


    getUsers = () => {

    };


    //字符串拼接

    ///////////////////////////////////////////////////////////////////////////////////////////////////  render
    render() {
        return (<div>

            <h1>FoodDetails</h1>

            <hr/>
        </div>)
    }
}

export default FoodDetails;
