const url = 'https://imgur.com/gallery'
export function fetchImages (dispatch) {
    return function(dispatch){
        dispatch({type: 'LOADING_IMAGES'})
        return fetch(url)
        .then(response => {return response.json()})
        .then(responseJSON => {
            dispatch({type: 'FETCH_IMAGES', payload: responseJSON.images})
        })
    }
}


