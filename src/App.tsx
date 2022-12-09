import Button from './components/Button/Button';
import ReduxCounter from './components/Redux/ReduxCounter';
import graphQL from './screenshots/graphQL.png';
import test from './screenshots/test.png';

import './App.css';
import { useState } from 'react';

function App() {
  const [img, setImg] = useState(graphQL);
  const onClick = (image: any) => {
    setImg(image);
  };
  return (
    <div className='App'>
      <div className='button-wrapper '>
        <button onClick={() => onClick(graphQL)}>GraphQL CheatSheet</button>
        <button onClick={() => onClick(test)}>Test</button>
        <button onClick={() => onClick(test)}>GraphQL CheatSheet</button>
      </div>
      <div style={{ maxHeight: '100%' }}>
        <img src={img} height='100%' style={{ objectFit: 'cover' }} />
      </div>
    </div>
  );
}

export default App;
