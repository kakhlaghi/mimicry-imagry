import React from 'react'


export function fetchImages () {
    return function(dispatch){
        dispatch({type: 'LOADING_IMAGES'})
        return fetch(url)
    }
}