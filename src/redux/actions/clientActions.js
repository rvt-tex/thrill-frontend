import { profileRequest } from '../../services/Api';

export const getClient = () => {
    return (dispatch) => {
        profileRequest().then(response => {
            dispatch({type: 'SET_CLIENT', payload: response})
        })
    }
}