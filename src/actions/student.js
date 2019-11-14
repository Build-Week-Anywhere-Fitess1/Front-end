import axios from 'axios';

export const FETCH_STUDENT_START = "FETCH_STUDENT_START";
export const FETCH_STUDENT_SUCCESS = "FETCH_STUDENT_SUCCESS";
export const FETCH_STUDENT_ERROR = "FETCH_STUDENT_ERROR";

export function fetchStudents() {
    return dispatch => {
        dispatch({type: FETCH_STUDENT_START})

        axios.get(`https://lambda-anywhere-fitness.herokuapp.com/`)
            .then(res => {
                console.log("Success!", res)
                dispatch({type: FETCH_STUDENT_SUCCESS, payload: res})
            })
            .catch(err => {
                console.log(err)
                dispatch({type: FETCH_STUDENT_ERROR, payload: err})
            })
    }
}