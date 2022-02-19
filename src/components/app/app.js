import './app.scss';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from '../home';
import Enter from '../enter';
import Playlist from '../playlist';
import Section from '../section';
import Button from '../walking_button';

function App() {
  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Enter />} />
          <Route path='/home' element={<Home />} />
          <Route path='/playlist' element={<Playlist />} />
          <Route path='/section' element={<Section />} />
          <Route path='/button' element={<Button />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
