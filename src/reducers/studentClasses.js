import {
    STUDENT_CLASS_START,
    STUDENT_CLASS_SUCCESS,
    STUDENT_CLASS_ERROR,
    DELETE_STUDENT_CLASS_START,
    DELETE_STUDENT_CLASS_SUCCESS,
    DELETE_STUDENT_CLASS_ERROR
}  from '../actions/studentClasses';

const initialState = {
    studentClasses: [],
    isLoading: false,
    error: null
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case STUDENT_CLASS_START:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        
        case STUDENT_CLASS_SUCCESS:
            return {
                ...state,
                studentClasses: action.payload,
                isLoading: false,
                error: null
            }
        
        case STUDENT_CLASS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        
        case DELETE_STUDENT_CLASS_START:
            return {
                ...state,
                isLoading: true,
                error: null
            }

        case DELETE_STUDENT_CLASS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                studentClasses: [state.studentClasses.filter((studentClass) => (
                    studentClass.classId !== action.payload
                ))]
            }

        case DELETE_STUDENT_CLASS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        
        default:
            return state;
    }
}