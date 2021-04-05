import React from 'react';
import {profileRequest} from '../services/Api'


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
        return (
            <div>
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

export default Profile;