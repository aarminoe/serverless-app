import { Route, Routes } from 'react-router-dom';
import './App.css';
import Applied from './Applied';
import Board from './Board';
import Header from './Header';
import Offer from './Offer';
import Round1 from './Round1';
import Round2 from './Round2';
import Round3 from './Round3';
import Waiting from './Waiting';

function App() {
  return (
    <div className="App">
      <head>
        
      </head>
      <div><Header /></div>
      <Routes>
        <Route path='/applied' element={<Applied/>}/>
        <Route path='/offers' element={<Offer/>}/>
        <Route path='/waiting' element={<Waiting/>}/>
        <Route path='/round-1' element={<Round1/>}/>
        <Route path='/round-2' element={<Round2/>}/>
        <Route path='/round-3' element={<Round3/>}/>
      </Routes>
    </div>
  );
}

export default App;
