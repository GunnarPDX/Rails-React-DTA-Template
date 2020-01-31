import React, {Component} from "react";
import axios from "axios";

class ValidationTest extends Component {
    state = {
        message: '',
    };

    //headers: {'Authorization': 'Bearer ' + token}
    //headers: {'Content-Type': 'application/json', 'access-token' : 'KqJm3WKbTt6Hjv6SYpAu0Q', 'client':'iaL0d7R7qRqP9f1g8mZk3w', 'uid': 'bob@gmail.com'}

    componentDidMount() {
        const token = localStorage.getItem('access-token');
        const client = localStorage.getItem('client');
        const uid = localStorage.getItem('uid');
        axios.get('/api/v1/demo', {
            headers: {'Content-Type': 'application/json', 'access-token' : token, 'client':client, 'uid': uid}
        })
            .then((res) => {
                console.log(res);
                this.setState({message: res.data.message});
            })
            .catch(function(err) {
                console.log(err);
            });
    }

    renderResult = () => {
        return (
            <div>
                <h3>Test Message: {this.state.message}</h3>
            </div>
        )
    };

    render(){
        return (
            <div>
                <br/>
                {this.renderResult()}
            </div>
        );
    }
}

export default ValidationTest;
