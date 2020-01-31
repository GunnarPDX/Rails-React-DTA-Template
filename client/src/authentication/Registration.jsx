import React, {Component} from "react";
import axios from "axios";

class Registration extends Component {
    state = {
        email: '',
        password: '',
        password_confirmation: ''
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/v1/auth', {email: this.state.email, password: this.state.password, password_confirmation: this.state.password_confirmation})
            .then(function(res) {
                window.localStorage.setItem('access-token', res.headers['access-token']);
                window.localStorage.setItem('client', res.headers['client']);
                window.localStorage.setItem('uid', res.headers['uid']);
                window.location.reload(false);
                //console.log(res.headers);
            })
            .catch(function(err) {
                console.log(err);
            });
    };

    render(){
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.onFormSubmit}>
                    <input type="email" placeholder="Enter your e-mail" onChange={event => this.setState({email: event.target.value})} />
                    <br/>
                    <input type="password" placeholder="Enter your password" onChange={event => this.setState({password: event.target.value})} />
                    <br/>
                    <input type="password" placeholder="Confirm your password" onChange={event => this.setState({password_confirmation: event.target.value})} />
                    <br/>
                    <button type="submit">Register</button>
                </form>
            </div>
        );
    }
}

export default Registration;
