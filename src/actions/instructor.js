// import api from "../utils/api";


// export const FETCH_CLASS_START = 'FETCH_CLASS_START';
// export const FETCH_CLASS_SUCCESS = 'FETCH_CLASS_SUCCESS';
// export const FETCH_CLASS_ERROR = 'FETCH_CLASS_ERROR';


// //fetch images function
// export function fetchImage(){
//     return (dispatch) => {
        
//         //Set isLoading to True
//         dispatch({ type: FETCH_CLASS_START })

//         //axios call to API
//         api()
//             .get(`/class`, payload-object)
//             .then( res => {
//                 //console log result
//                 console.log(res, 'Axios-Call-Success')

//                 dispatch({ type: FETCH_CLASS_SUCCESS, payload: res.data })
//             })
//             .catch( err => {

//                 console.log(err, 'Axios-Error')
//                 dispatch({ type: FETCH_CLASS_ERROR, payload: err })
//             })


//     }
// }


