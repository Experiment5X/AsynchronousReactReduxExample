import { SET_DRINKS, FETCH_DRINKS } from './action-types'

const initialState = {
    drinks: [],
    loading: true
};

export default function breweryApp(state = initialState, action) {
    switch (action.type) {
        case SET_DRINKS:
            console.log('setting drinks to: ', action.drinks)
            return {
                ...state,
                loading: false,
                drinks: action.drinks
            };
        case FETCH_DRINKS:
            return {
                ...state,
                drinks: [],
                loading: true
            };
        default:
            return state;
    }
} 