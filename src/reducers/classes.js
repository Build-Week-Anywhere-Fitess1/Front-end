import {
    FETCH_CLASSES_START,
    FETCH_CLASSES_SUCCESS,
    FETCH_CLASSES_ERROR
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
                classes: [...state.classes, action.payload],
                isLoading: false,
                error: null
            }
        case FETCH_CLASSES_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
    }
}