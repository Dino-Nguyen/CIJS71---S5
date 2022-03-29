import './App.css';
import {useState} from 'react'


function App() {
 const ColorList = [
   ["red", "none", "none"],
   ["none","yellow","none"],
   ["none","none","green"],
 ]


let [light, setLight] = useState(ColorList[0])
let  [Red, Yellow, Green] = light
const changeColor = () => {
  
 if (light != ColorList[1] && light != ColorList[2]) {
      light = ColorList[1]
      
 
 } 
 else if (light != ColorList[0] && light != ColorList[2] ){
     light = ColorList[2]
     
 
 }
 else  if (light != ColorList[0] && light != ColorList[1]) {
     light = ColorList[0]
     
 
  }
  console.log(light)
  // setLight(lights)
 
}
  return (
    <div className="App">
      <div>
        <button onClick={changeColor}>Next</button>
      </div>
      <div>
       <div className='light'  style={{background: Red}}></div>
       <div className='light'  style={{background: Yellow}}></div>
       <div className='light'  style={{background: Green}}></div>
       </div>
    </div>
  );
}

export default App;
