import {GET_TECHS, SET_LOADING, TECH_ERROR, ADD_TECH, DELETE_TECH} from '../actions/types';

//unlike contextAPI, our intial state will be defined in the reducer, not in a seperate file
//intial state of logs
const initialState = {
    techs: null,
    current: null,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_TECHS:
            return {...state, techs: action.payload, loading: false};

        case ADD_TECH:
            ///since state is immutable, use the spread operator to open state.logs to add action.payload onto the logs
            return {...state, techs: [...state.techs,action.payload],loading: false};

        case DELETE_TECH:
            return {...state, techs: state.techs.filter(tech => tech.id !== action.payload), loading: false};

        case SET_LOADING:
            return {...state, loading: true};

        case TECH_ERROR:
           console.error(action.payload)
           return {...state, error: action.payload};

        default:
            return state;
    }
}