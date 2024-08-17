import { useState } from 'react';
import './App.css';
import DisplayDifficulty from '../src/components/DisplayDifficulty/DisplayDifficulty';
import MenuList from '../src/components/MenuList/MenuList';

function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState('');

  const onMenuListItemClick = (difficulty) => {
    setCurrentDifficulty(difficulty)
  }
  return (
    <div className='App'>
      <h1>Select your React difficulty</h1>
      <div className='workspace'>
        <MenuList onMenuItemClick={onMenuListItemClick} difficulty={currentDifficulty}/>
        <DisplayDifficulty difficulty={currentDifficulty} />
      </div>
    </div>
  );
}

export default App;
