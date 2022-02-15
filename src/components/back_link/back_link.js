import { useNavigate } from 'react-router-dom';
import './back_link.scss'

export default function BackLink({path}) {
    let navigate = useNavigate();

    return <span onClick={() => navigate(path)} className='back-link'>{'< back'}</span>
}