import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Applied/>}/>
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
