import React from 'react';
import { loginRequest} from '../services/Api';


class Login extends React.Component {

    state = {
        email: "",
        password: "",
        message: ""
    }

    handleSubmit = e => {
        e.preventDefault();
        const {email, password} = this.state

        loginRequest({email, password})
        .then(res => {
            if (res.error) {
                this.setState({message: res.error})
            }else {
                localStorage.setItem('jwt', res.jwt)
            }
        })
    }

    handleChangeEmail = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleChangePassword = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            
            <div id=''>

            <form onSubmit={this.handleSubmit}>

            <p style={{color: "red"}}>{this.state.message}</p>

                <input type="text"
                name="email"
                onChange={this.handleChangeEmail}
                value={this.state.email}
                />

                <input type="password"
                name="password"
                onChange={this.handleChangePassword}
                value={this.state.password}
                />

                <input type="submit"
                value="Login"
                />
            
            </form> 

            </div>

        
           
        );
    };

};


  
export default Login;