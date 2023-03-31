import './App.css';
import Applied from './Applied';
import Offer from './Offer';
import Round1 from './Round1';
import Round2 from './Round2';
import Round3 from './Round3';
import Waiting from './Waiting';
import { Card } from '@mui/material';

function App() {
  return (
    <Card >
      <Card className="App">
        <Card className='one-card'>
          <Applied/>
        </Card>
        <Card className='one-card'>
          <Round1/>
        </Card >
        <Card className='one-card'>
          <Round2/>
        </Card>
        <Card className='one-card'>
          <Round3/>
        </Card>
        <Card className='one-card'>
          <Waiting/>
        </Card>
        <Card className='one-card'>
          <Offer/>
        </Card>
      </Card>
    </Card>
  );
}

export default App;
