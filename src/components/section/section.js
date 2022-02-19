import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPlaylistIdAction, setPlaylistNameAction } from '../../redux/actions';
import { Link } from 'react-router-dom';
import PlaylistThumbnail from '../playlist_thumbnail';
import BackLink from '../back_link/back_link';
import WaveLoader from '../wave_loader';
import './section.scss';
import { data } from '../../data/data';


export default function Section() {
    const dispatch = useDispatch();
    const setPlaylistId = id => dispatch(setPlaylistIdAction(id));
    const setPlaylistName = name => dispatch(setPlaylistNameAction(name));

    const sectionName =  useSelector(state => state.sectionName);

    const [ sectionData, setSectionData ] = useState([]);

    useEffect(() => {
        data.forEach(el => {
            if (el.sectionName === sectionName) setSectionData(el.sectionData);
        })
    }, [])

    function handleClick({id, name}) {
        setPlaylistId(id);
        setPlaylistName(name);
    }
    return (
        <div className='playlist-section'>
            <BackLink path="/home"/>
            <span className='section-name'>{ sectionName }</span>
            <div className='playlist-links'>
                {sectionData.map(el => {
                    return (
                        <div key={el.name} className='to-playlist' onClick={() => handleClick(el)}>
                            <Link to='/playlist'>
                                <PlaylistThumbnail title={el.name} width={272} height={272}/>
                                <div className='wave-hovered'>
                                    <WaveLoader width={272} height={26} amp={5} p={25}  thickness={3}/>
                                </div>
                                <span className='playlist-name'>{el.name}</span>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}