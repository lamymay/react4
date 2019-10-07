import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import  User from '../system/user/User';
import Role from '../system/rbac/Role';


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    ///////////////////////////////////////////////////////////////////////////////////////////////////  render
    render() {
        return (<div>

            <Router>
                <Link to='/User'>User</Link>
                <Link to='/Role'>Role</Link>

                <Route exact path="/User" component={User}/>
                <Route exact path="/Role" component={Role}/>
            </Router>

        </div>)
    }
}

export default Home;
