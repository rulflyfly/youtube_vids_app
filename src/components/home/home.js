import { Link } from 'react-router-dom';
import './home.scss';

export default function Home() {
    return (
        <div className="home">
            <span>Choose category</span>
            <div className='categories'>
                <Link to='/'><span>Programming</span></Link>
                <Link to='/'><span>Music</span></Link>
                <Link to='/'><span>Conferences</span></Link>
            </div>
        </div>
    )
}