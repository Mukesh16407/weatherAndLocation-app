
import { useState } from 'react';
import './App.css'
import {Map  } from './Components/Map/Map';
import { Weather } from './Components/Weather/Weather';



function App() {
  const [city, setCity] = useState("");
  
  return (
    <div className="App">
     <Weather city={city} setCity={setCity} />
     {/* <Map city={city}/> */}

    </div>
  );
}

export default App;
