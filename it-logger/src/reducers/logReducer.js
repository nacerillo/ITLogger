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
        default:
            return state;
    }
}