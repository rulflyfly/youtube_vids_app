import WalkingButton from '../walking_button';
import { isDesktop } from 'react-device-detect';
import './enter.scss';

export default function Enter() {

    return (
        <div className={isDesktop ? 'intro desktop' : 'intro'}>
            <span>This is a site for fast access to  my selection of most useful youtube vids. Enjoy.</span>
            <WalkingButton width={window.innerWidth} height={window.innerHeight / 3} />
        </div>
    )
}