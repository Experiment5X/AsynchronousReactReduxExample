import 'whatwg-fetch'
import { fetchDrinks, setDrinks } from './actions'

export function getDrinks() {
    return dispatch => {
        dispatch(fetchDrinks())

        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
            .then(
                response => {
                    return response.json().then(json => {
                        dispatch(setDrinks(json))
                    })
                },
                error => console.log('error occurred: ', error)
        )
    }
}