import React from 'react';

class Login extends React.Component {

    state = {
        email: "",
        password: "",
        message: ""
    }

    handleSubmit = e => {
        e.preventDefault();
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