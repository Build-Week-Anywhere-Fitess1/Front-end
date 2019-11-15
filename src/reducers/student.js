import {
    FETCH_STUDENT_START,
    FETCH_STUDENT_SUCCESS,
    FETCH_STUDENT_ERROR
} from "../actions/student";

const initialState = {
    student: [{name: "Bob", password: "123456"}],
    isLoading: false,
    error: null
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_STUDENT_START:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case FETCH_STUDENT_SUCCESS:
            return {
                ...state,
                student: action.payload,
                isLoading: false,
                error: null
            }
        case FETCH_STUDENT_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
    }
}