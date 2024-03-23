import { useState } from 'react';
import DogDisplay from './components/DogDisplay'
import './App.css' 

function App() {
  const [seenList, setSeenList] = useState([]);
  const [banList, setBanList] = useState([]);

  const changeBanList = (e) => {

  }

  return (
    <>
      <h1>WHO LET THE DOGS OUT???</h1>
      <h2>Come see man's best friend...</h2>
      <DogDisplay banList={banList} changeList={changeBanList}/>
    </>
  )
}

export default App;
