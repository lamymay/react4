import React from "react";
import {Link} from "react-router-dom";

class Food extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    aid: '1',
                    title: 'food1'
                }, {
                    aid: '2',
                    title: 'food2'
                }
                , {
                    aid: '3',
                    title: 'food3'
                }
                , {
                    aid: '4',
                    title: 'food4'
                }

            ]

        }
    }


    componentDidMount() {

    }


    getFoods = () => {

    };


    ///////////////////////////////////////////////////////////////////////////////////////////////////  render
    render() {
        return (<div>

            <h1>Food</h1>
            <ul>
                {this.state.list.map((value, key) => {
                    return <li key={key}>
                        <Link to={`/foodDetails?aid=${value.aid}`}>{value.title}</Link>
                    </li>

                })}
            </ul>
        </div>)
    }
}

export default Food;
