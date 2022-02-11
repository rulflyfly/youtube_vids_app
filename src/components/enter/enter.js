import WalkingButton from '../walking_button';
import './enter.scss';

export default function Enter() {

    return (
        <div className='intro'>
            <span>This is a site for fast access to  my selection of most useful youtube vids. Enjoy.</span>
            <WalkingButton width={window.innerWidth} height={800} />
        </div>
    )
}