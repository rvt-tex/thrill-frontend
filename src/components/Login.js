import React from 'react';
import { loginRequest} from '../services/Api';
import './Login.css';



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


<h3 class="text-center text-white pt-5">Login form</h3>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12"></div>


            <form onSubmit={this.handleSubmit}>

            <p style={{color: "red"}}>{this.state.message}</p>

                
            <div class="form-group">
                <input type="text"
                name="email"
                onChange={this.handleChangeEmail}
                value={this.state.email}
                />
            </div>

<div class="form-group"><br></br>

                <input type="password"
                name="password"
                onChange={this.handleChangePassword}
                value={this.state.password}
                />

</div><br></br>

                <input type="submit"
                value="Login"
                />
            
            </form> 


            

      

            </div>
            </div>
        </div>
    





            </div>

        
           
        );
    };

};


  
export default Login;