import api from '../utils/api';

export const FETCH_CLASSES_START = "FETCH_CLASSES_START";
export const FETCH_CLASSES_SUCCESS = "FETCH_CLASSES_SUCCESS";
export const FETCH_CLASSES_ERROR = "FETCH_CLASSES_ERROR";

export const POST_CLASSES_START = "POST_CLASSES_START";
export const POST_CLASSES_SUCCESS = "POST_CLASSES_SUCCESS";
export const POST_CLASSES_ERROR = "POST_CLASSES_ERROR";

export const EDIT_CLASSES_START ="EDIT_CLASSES_START";
export const EDIT_CLASSES_SUCCESS ="EDIT_CLASSES_SUCCESS";
export const EDIT_CLASSES_ERROR = "EDIT_CLASSES_ERROR";

export const DELETE_CLASSES_START = "DELETE_CLASSES_START";
export const DELETE_CLASSES_SUCCESS = "DELETE_CLASSES_SUCCESS";
export const DELETE_CLASSES_ERROR = "DELETE_CLASSES_ERROR";


export function fetchClasses() {
    return dispatch => {
        
        console.log('fetchClasses')

        dispatch({type: FETCH_CLASSES_START})

        api().get(`/api/classes`)
            .then(res => {

                console.log("Fetch Classes Success!", res)
                
                dispatch({type: FETCH_CLASSES_SUCCESS, payload: res.data})
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

        api().post(`/api/classes`, newClass)
            .then(res => {

                console.log("Post new Class Success!", res)

                dispatch({type: POST_CLASSES_SUCCESS, payload: res})
            })
            .catch(err => {
                console.log(err)
                dispatch({type: POST_CLASSES_ERROR, payload: err})
            })
    }
}

export function editClass(id, classObject) {
    return dispatch => {
        
        dispatch({type: EDIT_CLASSES_START})

        api().put(`/api/classes/${id}`, classObject)
            .then(res => {

                console.log("Edit Class Success!", res)

                dispatch({type: EDIT_CLASSES_SUCCESS, payload: res})
            })
            .catch(err => {
                console.log(err)
                dispatch({type: EDIT_CLASSES_ERROR, payload: err})
            })
    }
}