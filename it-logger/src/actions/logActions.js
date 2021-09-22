import {GET_LOGS, ADD_LOG, UPDATE_LOG, DELETE_LOG, SET_LOADING, LOGS_ERROR, SET_CURRENT, CLEAR_CURRENT} from './types';


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


  export const deleteLog = (id) => async dispatch => {
    try {
        setLoading();
        await fetch(`/logs/${id}`, {
            method: 'DELETE',
        });
        //make post http request
        //
        dispatch({type: DELETE_LOG, payload: id});
    }catch(err) {
         dispatch({type:LOGS_ERROR, payload: err.response.data})
    }
}
// update log on the server
export const updateLog = (log) => async dispatch => {
    try {
          setLoading();
          const res = await fetch(`/logs/${log.id}`, {
             method: 'PUT',
             body: JSON.stringify(log),
             headers: {
                'Content-Type' : 'application/json'
             }
        });
      const data = await res.json();
      dispatch({type:UPDATE_LOG, payload: data})
    } catch(err){
      dispatch({type:LOGS_ERROR, payload: err.response.data})
    }
}

export const setCurrent = (log) => {
    return {
        type: SET_CURRENT,
        payload: log
    }
}

export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT,
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};