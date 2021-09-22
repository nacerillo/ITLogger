import {GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG} from './types';


//make call to get logs from api
/*export const getLogs = () =>{
    return async (dispatch) => {
        setLoading();
        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({type: GET_LOGS, payload: data});
    }
}*/

//asyncronous action to get logs data
export const getLogs = () => async dispatch => {
   try{
        setLoading();
        const res = await fetch('/logs');
        const data = await res.json();
        //dispatch get logs action to reducer with the payload of the retrieved data
        dispatch({type: GET_LOGS, payload: data});

   } catch(err){
     dispatch({type:LOGS_ERROR, payload: err.response.data})
   }
}
//Add new log
export const addLog = (log) => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        const data = await res.json();
        //make post http request
        //
        dispatch({type: ADD_LOG, payload: data});
    }catch(err){
        dispatch({type:LOGS_ERROR, payload: err.response.data})
    }
}

//Delete Log
/**
 * export const addLog = (log) => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        const data = res.json();
        //make post http request
        //
        dispatch({type: ADD_LOG, payload: data});
    }catch {

    }
}
 * 
 */

export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};