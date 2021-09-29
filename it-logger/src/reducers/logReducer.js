import {GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG, CLEAR_CURRENT, SET_CURRENT, UPDATE_LOG, SEARCH_LOGS} from '../actions/types';

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
            return {...state, logs: action.payload, loading: false};

        case SEARCH_LOGS: 
            return {...state, logs: action.payload}
        case DELETE_LOG:
            return {...state, logs: state.logs.filter(log => log.id !== action.payload), loading: false};

        case ADD_LOG:
            ///since state is immutable, use the spread operator to open state.logs to add action.payload onto the logs
            return{...state, logs: [...state.logs,action.payload],loading: false};

        case SET_CURRENT:
            return {
                ...state,current: action.payload,
            }
        
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null,
            }
        case UPDATE_LOG: 
            return {
                ...state,
                logs: state.logs.map(log => log.id === action.payload.id ? action.payload : log)
            }
        case SET_LOADING:
            return {...state, loading: true};

        case LOGS_ERROR:
           console.error(action.payload)
           return {...state, error: action.payload};

        default:
            return state;
      
    }
}