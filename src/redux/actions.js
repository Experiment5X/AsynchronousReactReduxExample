import { FETCH_DRINKS, SET_DRINKS } from './action-types'

/*
 * An action to indicate the kick off of fetching the request to get
 * all of the drinks
 */
export function fetchDrinks() {
    return {
        type: FETCH_DRINKS
    }
}

/*
 * An action to update the store with the drinks that have been
 * received from the webserver
 *
 */
export function setDrinks(drinks) {
    return {
        type: SET_DRINKS,
        drinks: drinks
    }
}