import axios from 'axios';

const KEY = 'AIzaSyC8XSnTQDOXE8FgSS4C12gRGDzbb01V9Lo';


const request = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 20,
        key: KEY
    }
})

export const getPlaylist = async (playlistId) => {
    return await request.get(`playlistItems?playlistId=${playlistId}`);
}