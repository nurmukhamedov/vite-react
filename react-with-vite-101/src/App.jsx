// import { useCallback } from 'react';
// import { useState, useMemo } from 'react';

import './App.css';
import SwiperExample from './components/SwiperExample';
// import List from './components/List';

function App() {

  // const [number, setNumber] = useState(1);
  // const [dark, setDark] = useState(false);

  // const getItems = useCallback(() => {
  //   return [number, number + 1, number + 2]
  // }, [number])

  // const theme = {
  //   backgroundColor: dark ? '#333' : '#fff',
  //   color: dark ? '#fff' : '#333'
  // }





  return (
    // <div style={theme} className="App">
    //   <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
    //   <button onClick={() => setDark(prevDark => !prevDark)}>Toggle</button>

    //   <List getItems={getItems} />
    // </div> 
    <div>
      <SwiperExample />
    </div>
  )
}



export default App
