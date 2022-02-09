const initialState = {
    playlistId: '',
    playlistName: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_PLAYLIST_ID':
            return {
                ...state,
                playlistId: action.payload
            }
        case 'SET_PLAYLIST_NAME':
            return {
                ...state,
                playlistName: action.payload
            }
        default:
            return state;
    }
}