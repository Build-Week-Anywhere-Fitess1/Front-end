// import api from '../utils/api';

// export const FETCH_STUDENT_START = "FETCH_STUDENTS_START";
// export const FETCH_STUDENT_SUCCESS = "FETCH_STUDENTS_SUCCESS";
// export const FETCH_STUDENT_ERROR = "FETCH_STUDENTS_ERROR";

// export function fetchStudents() {
//     return dispatch => {
//         dispatch({type: FETCH_STUDENT_START})

//         api().get(`/api`)
//             .then(res => {
//                 console.log("Success!", res)
//                 dispatch({type: FETCH_STUDENT_SUCCESS, payload: res})
//             })
//             .catch(err => {
//                 console.log(err)
//                 dispatch({type: FETCH_STUDENT_ERROR, payload: err})
//             })
//     }
// }