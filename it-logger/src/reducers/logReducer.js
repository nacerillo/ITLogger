import {GET_LOGS, SET_LOADING, LOGS_ERROR} from '../actions/types';

//unlike contextAPI, our intial state will be defined in the reducer, not in a seperate file
//intial state of logs
const initialState = {
    logs: null,
    current: null,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_LOGS:
            return {...state, logs: action.payload, loading: false}
        case SET_LOADING:
            return {...state, loading: true};
        default:
            return state;
       case LOGS_ERROR:
           console.error(action.payload)
           return {...state, error: action.payload}
    }
}