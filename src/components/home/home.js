import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSectionNameAction } from '../../redux/actions';
import { data } from '../../data/data';
import './home.scss';

export default function Home() {
    const dispatch = useDispatch();
    const setSectionName = name => dispatch(setSectionNameAction(name));

    const [ sectionNames, setSectionNames ] = useState([]);

    useEffect(() => {
        const sectionNames = [];
        data.forEach(el => {
            sectionNames.push(el.sectionName);
        })
        setSectionNames(sectionNames);
    }, [])

    return (
        <div className="home">
            <span>Choose category</span>
            <div className='categories'>
                { sectionNames.map(name => {
                    return (
                        <div onClick={() => setSectionName(name)}>
                            <Link to='/section'>{name}</Link>
                        </div>
                    )
                }) }
            </div>
        </div>
    )
}