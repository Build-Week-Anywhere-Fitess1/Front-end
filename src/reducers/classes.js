import {
    FETCH_CLASSES_START,
    FETCH_CLASSES_SUCCESS,
    FETCH_CLASSES_ERROR,
    POST_CLASSES_START,
    POST_CLASSES_SUCCESS,
    POST_CLASSES_ERROR,
    EDIT_CLASSES_START,
    EDIT_CLASSES_SUCCESS,
    EDIT_CLASSES_ERROR,
    DELETE_CLASSES_START,
    DELETE_CLASSES_SUCCESS,
    DELETE_CLASSES_ERROR
} from "../actions/classes";

const initialState = {
    classes: [],
    isLoading: false,
    error: null
}

export function reducer(state = initialState, action) {
    
    switch(action.type) {

        case FETCH_CLASSES_START:

            return {
                ...state,
                isLoading: true,
                error: null
            }

        case FETCH_CLASSES_SUCCESS:

            return {
                ...state,
                classes: action.payload,
                isLoading: false,
                error: null
            }

        case FETCH_CLASSES_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        
        case POST_CLASSES_START:

            return {
                ...state,
                isLoading: true,
                error: null
            }
        
        case POST_CLASSES_SUCCESS:

        console.log(action.payload, 'payload')

            return {
                ...state,
                classes: [...state, action.payload],
                isLoading: false,
                error: null
            }

        case POST_CLASSES_ERROR:

            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        default:

            return state;
    }
}