export default (state = [], action) => {
    switch (action.type) {
        case 'SET_RESERVATION':
            return action.payload
        case "ADD_RESERVATION":
            return [...state, action.payload]
        case "REMOVE_RESERVATION":
            return state.filter(reservation => reservation !== action.payload )
        default:
            return state
    }
}