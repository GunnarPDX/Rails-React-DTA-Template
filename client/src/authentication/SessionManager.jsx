import React, {Component} from "react";
import Registration from "./Registration";
import Login from "./Login"

class SessionManager extends Component {

    handleLogOut = () => {
        localStorage.removeItem('access-token');
        localStorage.removeItem('client');
        localStorage.removeItem('uid');
        window.location.reload(false);
    };

    render() {
        const token = localStorage.getItem('access-token');
        if (token !== null && token !== undefined) {
            return (
                <div>
                    <h1>
                        Signed In
                    </h1>
                    <button onClick={this.handleLogOut}> log-out </button>
                </div>
            )
        } else return (
            <div>
                <Registration/>
                <br/>
                <br/>
                <a className={'App-link'}>Or</a>
                <Login/>
            </div>
        )
    };
}

export default SessionManager;