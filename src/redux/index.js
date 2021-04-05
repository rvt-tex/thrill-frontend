import { combineReducers } from 'redux';
import clientReducer from './clientReducer';
import reservationsReducer from './reservationsReducer';







export default combineReducers({client: clientReducer, reservations: reservationsReducer});