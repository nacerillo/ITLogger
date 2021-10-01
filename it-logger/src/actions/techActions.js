import {GET_TECHS, SET_LOADING, TECH_ERROR, ADD_TECH, DELETE_TECH} from './types';


//get techs
export const getTechs = () => async dispatch => {
   try{
        setLoading();
        const res = await fetch('/techs');
        const data = await res.json();
        //dispatch get logs action to reducer with the payload of the retrieved data
        dispatch({type: GET_TECHS, payload: data});

   } catch(err){
     dispatch({type:TECH_ERROR, payload: err.response.statusText})
   }
}


//add tech 
export const addTech = (tech) => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/techs', {
            method: 'POST',
            body: JSON.stringify(tech),
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        const data = await res.json();
        //make post http request
        //
        dispatch({type: ADD_TECH, payload: data});
    }catch(err){
        dispatch({type:TECH_ERROR, payload: err.response.statusText})
    }
}


//delete tech
 export const deleteTech = (id) => async dispatch => {
    try {
        setLoading();
        await fetch(`/techs/${id}`, {
            method: 'DELETE',
        });
        //make post http request
        //
        dispatch({type: DELETE_TECH, payload: id});
    }catch(err) {
         dispatch({type:TECH_ERROR, payload: err.response.statusText})
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};