react 获取input 输入框的值
第一种方式 非受控组件获取
第二种方式 受控组件获取

非受控组件获取 ref
import React , {Component} from 'react';
export default class App extends Component{
    search(){
        const inpVal = this.input.value;
        console.log(inpVal);
    }

    render(){
        return(
            <div>
                <input type="text" ref={input => this.input = input} defaultValue="Hello"/>
                <button onClick={this.search.bind(this)}></button>
            </div>
        )
    }
}
————————————————

使用defaultValue表示组件的默认状态，此时它只会被渲染一次，后续的渲染不起作用；input的值不随外部的改变而改变，由自己状态改变。

受控组件 this.setState({})

import React , {Component} from 'react';
export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            inpValu:''
        }
    }

    handelChange(e){
        this.setState({
            inpValu:e.target.value
        })
    }

    render(){
        return(
            <div>
                <input type="text" onChange={this.handelChange.bind(this)} defaultValue={this.state.inpValu}/>
            </div>
        )
    }
}
————————————————
