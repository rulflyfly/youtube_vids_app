import { useDispatch } from 'react-redux';
import { setPlaylistIdAction, setPlaylistNameAction } from '../../redux/actions';
import { Link } from 'react-router-dom';
import './section.scss';

const NAME = 'Programming';

const sectionData = [
    {
        id: 'PLCeaAi_Ah78SXMH-qUxjeEz35reRWduKh&ab', 
        name: 'Unreal Engine C++ Fundamentals'
    },
    {
        id: 'PLCeaAi_Ah78SEV2Q-iVuFbe6xOtQYH6sH&ab_',
        name: 'Unreal Tutorial C++ - Series - Player Character'
    }
]

export default function Section() {
    const dispatch = useDispatch();
    const setPlaylistId = id => dispatch(setPlaylistIdAction(id));
    const setPlaylistName = name => dispatch(setPlaylistNameAction(name));

    function handleClick({id, name}) {
        setPlaylistId(id);
        setPlaylistName(name);
    }
    return (
        <div className='playlist-section'>
            <span>{ NAME }</span>
            {sectionData.map(el => {
                return (
                    <div key={el.name} className='to-playlist' onClick={() => handleClick(el)}>
                        <Link to='/playlist'></Link>
                    </div>
                )
            })}
        </div>
    )
}