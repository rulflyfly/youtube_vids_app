import './app.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from '../home';
import Enter from '../enter';
import Playlist from '../playlist';
import Section from '../section';

function App() {
  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/enter' element={<Enter />} />
          <Route path='/playlist' element={<Playlist />} />
          <Route path='/section' element={<Section />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
