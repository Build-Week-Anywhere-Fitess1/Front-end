import { 
    FETCH_CLASS_START,
    FETCH_CLASS_SUCCESS, 
    FETCH_CLASS_ERROR,
    SET_CLASS_START,
    SET_CLASS_SUCCESS,
    SET_CLASS_ERROR 
} from '../actions/instructor';


//Initial State

const initialState ={

    classes : [
        {
            name : 'CrossFit',
            dates: [Monday, Wednesday, Friday],
            description: "What does this aurora look like to you? While braving the cold to watch the skies above northern Canada early one morning in 2013, a most unusual aurora appeared. The aurora definitely appeared to be shaped like something , but what? Two ghostly possibilities recorded by the astrophotographer were \"witch\" and \"goddess of dawn\", but please feel free to suggest your own Halloween-enhanced impressions. Regardless of fantastical pareidolic interpretations, the pictured aurora had a typical green color and was surely caused by the scientifically commonplace action of high energy particles from space interacting with oxygen in Earth's upper atmosphere. In the image foreground, at the bottom, is a frozen Alexandra Falls, while evergreen trees cross the middle.",
            prices: {daily: 25,
                    weekly: 100,
                    monthly: 350,
                    year: 3000},
            socialmedia: {  ig:'bla',
                            fb: 'fb-bla',
                            twitter: 'tweet-bla'}
        },
        {
            name : 'JiuJitsu',
            dates: [Monday, Wednesday, Friday],
            description: "What does this aurora look like to you? While braving the cold to watch the skies above northern Canada early one morning in 2013, a most unusual aurora appeared. The aurora definitely appeared to be shaped like something , but what? Two ghostly possibilities recorded by the astrophotographer were \"witch\" and \"goddess of dawn\", but please feel free to suggest your own Halloween-enhanced impressions. Regardless of fantastical pareidolic interpretations, the pictured aurora had a typical green color and was surely caused by the scientifically commonplace action of high energy particles from space interacting with oxygen in Earth's upper atmosphere. In the image foreground, at the bottom, is a frozen Alexandra Falls, while evergreen trees cross the middle.",
            prices: {daily: 25,
                    weekly: 100,
                    monthly: 350,
                    year: 3000},
            socialmedia: {  ig:'bla',
                            fb: 'fb-bla',
                            twitter: 'tweet-bla'}
        }
    ],
    isLoading : false,
    error: null
}


//reducer function

export function reducer(state = initialState, action){

    switch(action.type){

        case FETCH_CLASS_START:

            return{
                    ...state,
                        isLoading: true
                    }

        case FETCH_CLASS_SUCCESS:

            return{
                    ...state,
                        isLoading: false,
                        image: action.payload
                    }
        
        case FETCH_CLASS_ERROR:

                return{
                        ...state,
                            isLoading: false,
                            error: action.payload
                        }

        default:

            return state;
    }
}