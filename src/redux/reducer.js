const initialState = {
    playlistId: '',
    playlistName: '',
    sectionName: ''
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
        case 'SET_SECTION_NAME':
            return {
                ...state,
                sectionName: action.payload
            }
        default:
            return state;
    }
}