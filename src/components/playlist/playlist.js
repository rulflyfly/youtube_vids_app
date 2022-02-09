import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getPlaylist } from '../../api/youtube_api';
import './playlist.scss';

//const PLAYLIST_ID = 'PLCeaAi_Ah78SXMH-qUxjeEz35reRWduKh&ab'
//const PLAYLIST_NAME = 'Unreal Engine C++ Fundamentals'
const VID_ENDPOINT = 'https://www.youtube.com/embed/'

export default function Playlist() {

    const [data, setData] = useState([]);
    const [activeVid, setActiveVid] = useState({});

    const playlistId = useSelector(state => state.playlistId);
    const playlistName =  useSelector(state => state.playlistName);

    async function fetchData() {
        const response = await getPlaylist(playlistId);
        setData(response.data.items);
        console.log(response)
    }

    useEffect(() => {
        fetchData();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        setActiveVid(data[0]);
        console.log(data)

    }, [ data ])

    return (
        <div className="playlist">
            <span className='name'>{playlistName}</span>
            { activeVid && activeVid.snippet &&  (
                <section className='video'>
                    <iframe title={activeVid.snippet.title} src={`${VID_ENDPOINT + activeVid.snippet.resourceId.videoId}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </section>
            )}
            <div className='list'>
                {data && data.map(el => {
                    const title = el.snippet.title
                    const src = el.snippet.thumbnails.medium.url
                    return (
                        <div className='thumbnail' key={title} onClick={() => setActiveVid(el)} style={{backgroundImage: `url(${src})`}}></div>
                    )
                })}
            </div>
        </div>
    )
}