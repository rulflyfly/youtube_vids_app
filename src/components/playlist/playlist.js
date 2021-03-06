import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { isDesktop } from 'react-device-detect';
import { getPlaylist } from '../../api/youtube_api';
import BackLink from '../back_link/back_link';
import WaveLoader from '../wave_loader';
import './playlist.scss';

//const PLAYLIST_ID = 'PLCeaAi_Ah78SXMH-qUxjeEz35reRWduKh&ab'
//const PLAYLIST_NAME = 'Unreal Engine C++ Fundamentals'
const VID_ENDPOINT = 'https://www.youtube.com/embed/'

export default function Playlist() {

    const [data, setData] = useState([]);
    const [activeVid, setActiveVid] = useState({});
    const [loading, setLoading] = useState(false);

    const playlistId = useSelector(state => state.playlistId);
    const playlistName =  useSelector(state => state.playlistName);

    async function fetchData() {
        setLoading(true);
        const response = await getPlaylist(playlistId);
        setTimeout(() => {
            setData(response.data.items);
            setLoading(false);
        }, 1000)
    }

    useEffect(() => {
        fetchData();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        setActiveVid(data[0]);
    }, [ data ])

    return (
        <div className={isDesktop ? 'playlist desctop' : 'playlist'}>
            <BackLink path="/section"/>
            <span className='name'>{playlistName}</span>
            {loading ? 
                <div className='loader'>
                    <WaveLoader width={window.innerWidth} height={window.innerHeight / 3} /> 
                </div> :
                <div className='playlist-split'>
                    {activeVid && activeVid.snippet &&  (
                        <section className='video'>
                            <iframe title={activeVid.snippet.title} src={`${VID_ENDPOINT + activeVid.snippet.resourceId.videoId}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        </section>
                    )}
                    <div className='list-container'>
                        <div className='gradient-top'></div>
                        <div className='list'>
                            {data && data.map(el => {
                                const title = el.snippet.title
                                const src = el.snippet.thumbnails.medium.url
                                return (
                                    <div className='thumbnail' key={title} onClick={() => setActiveVid(el)} style={{backgroundImage: `url(${src})`}}></div>
                                )
                            })}
                        </div>
                        <div className='gradient-bottom'></div>
                    </div>
                </div>}
        </div>
    )
}