import React, {Component} from "react";
import axios from "axios";

class Login extends Component {
    state = {
        email: '',
        password: '',
        loggedIn: false
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/v1/auth/sign_in', {email: this.state.email, password: this.state.password})
            .then((res) => {
                //const {token} = res.headers;
                //console.log(res.headers['access-token']);
                window.localStorage.setItem('access-token', res.headers['access-token']);
                window.localStorage.setItem('client', res.headers['client']);
                window.localStorage.setItem('uid', res.headers['uid']);
                window.location.reload(false);
            })
            .catch(function(err) {
                console.log(err);
            });
    };

    render(){
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.onFormSubmit}>
                    <input type="email" placeholder="Enter your e-mail" onChange={event => this.setState({email: event.target.value})} />
                    <br/>
                    <input type="password" placeholder="Enter your password" onChange={event => this.setState({password: event.target.value})} />
                    <br/>
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;
