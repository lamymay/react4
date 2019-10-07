import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    aid: '1',
                    title: 'user1'
                }, {
                    aid: '2',
                    title: 'user2'
                }
                , {
                    aid: '3',
                    title: 'user3'
                }
                , {
                    aid: '4',
                    title: 'user4'
                }

            ]

        }
    }


    componentDidMount() {

    }


    getUsers = () => {

    };


    ///////////////////////////////////////////////////////////////////////////////////////////////////  render
    render() {
        return (<div>

            <h1>User</h1>
            <ul>
                {this.state.list.map((value, key) => {
                    return <li key={key}>
                        <Link to={`/userInsert?aid=${value.aid}`}>{value.title}</Link>
                    </li>

                })}
            </ul>
        </div>)
    }
}

export default User;
