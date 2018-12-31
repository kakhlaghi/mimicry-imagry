const url = 'https://api.imgur.com/3/gallery/t/gifs'
const apiKey = '8292cf41c20143c'

/*const auth = 'Client'*/
export function fetchImages (dispatch) {
    return function(dispatch){
        dispatch({type: 'LOADING_IMAGES'})
        return fetch(url, {
            headers: {
              'Authorization': 'Client-ID ' + apiKey
            }})
        .then(response => {return response.json()})
        .then(responseJSON => {
            dispatch({type: 'FETCH_IMAGES', payload: responseJSON.data.items})
            console.log(responseJSON.data.items)
        })
    }
}

