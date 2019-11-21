import api from '../utils/api';

export const FETCH_CLASSES_START = "FETCH_CLASSES_START";
export const FETCH_CLASSES_SUCCESS = "FETCH_CLASSES_SUCCESS";
export const FETCH_CLASSES_ERROR = "FETCH_CLASSES_ERROR";
export const POST_CLASSES_START = "POST_CLASSES_START";
export const POST_CLASSES_POST = "POST_CLASSES_POST";
export const POST_CLASSES_SUCCESS = "POST_CLASSES_SUCCESS";
export const POST_CLASSES_ERROR = "POST_CLASSES_ERROR";

export function fetchClasses() {
    return dispatch => {
        
        console.log('fetchClasses')

        dispatch({type: FETCH_CLASSES_START})

        api().get(`/api/classes`)
            .then(res => {
                console.log("Success!", res)
                dispatch({type: FETCH_CLASSES_SUCCESS, payload: res})
            })
            .catch(err => {
                console.log(err, "my error")
                dispatch({type: FETCH_CLASSES_ERROR, payload: err.message})
            })
    }
}

export function postClass(newClass) {
    return dispatch => {
        
        dispatch({type: POST_CLASSES_START})

        api().post(`/api/category`, newClass)
            .then(res => {
                console.log(res)
                dispatch({type: POST_CLASSES_SUCCESS, payload: res})
            })
            .catch(err => {
                console.log(err)
                dispatch({type: POST_CLASSES_ERROR, payload: err})
            })
    }
}