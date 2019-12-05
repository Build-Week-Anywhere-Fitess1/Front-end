import api from '../utils/api';

export const STUDENT_CLASS_START = "STUDENT_CLASS_START"
export const STUDENT_CLASS_SUCCESS = "STUDENT_CLASS_SUCCESS"
export const STUDENT_CLASS_ERROR = "STUDENT_CLASS_ERROR"
export const DELETE_STUDENT_CLASS_START = "DELETE_STUDENT_CLASS_START"
export const DELETE_STUDENT_CLASS_SUCCESS = "DELETE_STUDENT_CLASS_SUCCESS"
export const DELETE_STUDENT_CLASS_ERROR = "DELETE_STUDENT_CLASS_ERROR"

export function fetchStudentClasses() {
    return dispatch => {
        dispatch({type: STUDENT_CLASS_START})

        api().get(`/api/user/classes`)
        .then(res => {
            console.log(res.data, "Show me the classes!")
            dispatch({type: STUDENT_CLASS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: STUDENT_CLASS_ERROR, payload: err.response})
        })
    }
}

export function deleteStudentClasses(id) {
    return dispatch => {
        dispatch({type: DELETE_STUDENT_CLASS_START})

        api().delete(`/api/user/classes/${id}`)
            .then(res => {
            console.log(res)
      })
      .catch(err => console.log(err.response))
    }
}