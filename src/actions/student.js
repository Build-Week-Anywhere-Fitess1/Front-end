import axios from 'axios';

export function fetchStudents() {
    return dispatch => {
        dispatch({type: FETCH_STUDENT_START})

        axios.get(`https://lambda-anywhere-fitness.herokuapp.com/`)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
}