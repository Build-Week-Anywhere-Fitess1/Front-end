import {
    FETCH_CLASSES_START,
    FETCH_CLASSES_SUCCESS,
    FETCH_CLASSES_ERROR
} from "../actions/classes";

const initialState = {
    classes: [
        {
            name:'CrossFit',
            description:'CrossFit is promoted as both a physical exercise philosophy and a competitive fitness sport, incorporating elements from high-intensity interval training, Olympic weightlifting, plyometrics, powerlifting, gymnastics, girevoy sport, calisthenics, strongman, and other exercises.'
        },
        {
            name:'JiuJitsu',
            description:'A Japanese martial art and a method of close combat for defeating an opponent in which one uses either a short weapon or none'
        }
    ],
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

        default:

            return state;
    }
}