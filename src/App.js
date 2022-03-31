import './App.css';
import {useState} from 'react'


function App() {


const [light, setLight] = useState(0)


const changeColor = () => {

  if (light === 2) {
    setLight(0)
  }
  else {
 setLight(light + 1)
  }
  console.log(light)
}
  return (
    <div className="App">
      <div>
        <button onClick={changeColor}>Next</button>
      </div>
      <div>
       <div className='light'  style={{background: light === 0 ? "red" : null }}></div>
       <div className='light'  style={{background: light === 1 ? "yellow" : null}}></div>
       <div className='light'  style={{background: light === 2 ? "green" : null}}></div>
       </div>
    </div>
  );
}

export default App;
