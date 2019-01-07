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

//working on search bar...
export function search(query) {
    return fetch(`/api/image?q=${query}`, {
      accept: 'application/json',
    }).then(checkStatus)
      .then(parseJSON);
  }

  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
  }
  
  function parseJSON(response) {
    return response.json();
  }
  
