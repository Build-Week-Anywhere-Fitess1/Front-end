import api from '../utils/api';

export const FETCH_CLASSES_START = "FETCH_CLASSES_START";
export const FETCH_CLASSES_SUCCESS = "FETCH_CLASSES_SUCCESS";
export const FETCH_CLASSES_ERROR = "FETCH_CLASSES_ERROR";

export function fetchClasses() {
    return dispatch => {
        
        console.log('fetchClasses')

        dispatch({type: FETCH_CLASSES_START})

        api().get(`/api/category`)
            .then(res => {
                console.log("Success!", res)
                dispatch({type: FETCH_CLASSES_SUCCESS, payload: res})
            })
            .catch(err => {
                console.log(err, "my error")
                dispatch({type: FETCH_CLASSES_ERROR, payload: err})
            })
    }
}