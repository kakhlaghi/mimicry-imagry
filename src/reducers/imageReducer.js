export default function imageReducer (state={loading: false, pictures: []}, action){
    switch(action.type){
        case 'LOADING_IMAGES':
            return Object.assign({}, state, {loading: true})
        case 'FETCH_IMAGES':
            return {loading: false, pictures: action.payload}
        default:
            return state
    }
}