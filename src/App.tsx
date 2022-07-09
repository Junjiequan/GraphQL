import Button from './components/Button/Button';
import ReduxCounter from './components/Redux/ReduxCounter';

import './App.css';

function App() {
  return (
    <div className='App'>
      <b>Test Buttons</b>
      <Button label={'random button'} />
      <b>Test Redux Store</b>
      <ReduxCounter />
    </div>
  );
}

export default App;
