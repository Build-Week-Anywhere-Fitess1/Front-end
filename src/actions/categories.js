import api from '../utils/api';

export const FETCH_CATEGORIES_START = "FETCH_CATEGORIES_START";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_ERROR = "FETCH_CATEGORIES_ERROR";
export const POST_CATEGORIES_START = "POST_CATEGORIES_START";
export const POST_CATEGORIES_POST = "POST_CATEGORIES_POST";
export const POST_CATEGORIES_SUCCESS = "POST_CATEGORIES_SUCCESS";
export const POST_CATEGORIES_ERROR = "POST_CATEGORIES_ERROR";

export function fetchCategories() {
    return dispatch => {
        
        console.log('fetchCategories')

        dispatch({type: FETCH_CATEGORIES_START})

        api().get(`/api/category`)
            .then(res => {

                console.log("Fetch Categories Success!", res)

                dispatch({type: FETCH_CATEGORIES_SUCCESS, payload: res})
            })
            .catch(err => {

                console.log(err, "my error")

                dispatch({type: FETCH_CATEGORIES_ERROR, payload: err.message})
            })
    }
}

// export function postCategory(newClass) {
//     return dispatch => {
        
//         dispatch({type: POST_CLASSES_START})

//         api().post(`/api/category`, newClass)
//             .then(res => {
//                 console.log(res)
//                 dispatch({type: POST_CLASSES_SUCCESS, payload: res})
//             })
//             .catch(err => {
//                 console.log(err)
//                 dispatch({type: POST_CLASSES_ERROR, payload: err})
//             })
//     }
// }