export const setPlaylistIdAction = (id) => {
    return {
        type: 'SET_PLAYLIST_ID',
        payload: id
    }
}

export const setPlaylistNameAction = (name) => {
    return {
        type: 'SET_PLAYLIST_NAME',
        payload: name
    }
}

export const setSectionNameAction = (name) => {
    return {
        type: 'SET_SECTION_NAME',
        payload: name
    }
}