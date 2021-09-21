import {GET_LOGS, SET_LOADING, LOGS_ERROR} from './types';


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

export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};