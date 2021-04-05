import React from 'react';
import { connect } from 'react-redux';
import {profileRequest} from '../services/Api';
import { getClient } from '../redux/actions/clientActions';
import { getToken } from '../services/localSorage';
import { Redirect } from 'react-router-dom';



class Profile extends React.Component {

    state = {
        first_name: "",
        reservations: []
    }

    componentDidMount() {
        profileRequest()
        .then(res => {
            if (!res.error) {
                this.setState({first_name: res.first_name, reservations: res.reservations})
            }
        })
    }

    render() {
        console.log(getToken)
        return (
            <div>
                {!getToken() ? <Redirect to='/login' /> : null}
                <h1>Welcome to {this.state.first_name} Profile </h1>
            </div>
        )
    }



}

  
// function Profile() {
//     return (
//       <>
//        <h1>Welcome to Five Star Tours Profile Page </h1>
//       </>
//     );
// }


const mapStateToProps = state => {
    const {client, reservations} = state 

    return {
        client, reservations
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getClient
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Profile);