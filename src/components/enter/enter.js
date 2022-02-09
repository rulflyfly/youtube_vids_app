import { Link } from 'react-router-dom';
import './enter.scss';

export default function Enter() {
    return (
        <div className='intro'>
            <span>This is a site for fast access to  my selection of most useful youtube vids. Enjoy.</span>
            <Link to='/'><button>OK</button></Link>
        </div>
    )
}